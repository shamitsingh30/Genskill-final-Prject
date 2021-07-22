from flask import url_for, Flask, render_template, request, redirect
from flask_cors import CORS

def create_app():
    app = Flask(__name__)
    CORS(app)

    app.config.from_mapping(
        DATABASE="todo"
    )

    from . import db 
    db.init_app(app) 

    @app.route('/')
    def index():
        return render_template('index.html')

    @app.route('/login', methods=["GET", "POST"])
    def logIn():
        if request.method == "GET":
            return render_template('access/login.html')
        elif request.method == "POST":
            email = request.form.get("email")
            password = request.form.get("password")

    @app.route('/signup', methods=["GET", "POST"])
    def signUp():
        if request.method == "GET":
            return render_template('access/signup.html')
        elif request.method == "POST":
            name = request.form.get("name")
            email = request.form.get("email")
            password = request.form.get("password")
            conn=db.get_db()
            cursor = conn.cursor()
            cursor.execute(f"INSERT INTO users VALUES (DEFAULT, '{name}', '{email}', '{password}');")
            conn.commit()
            conn.close()
            return redirect(url_for("logIn"), 302)
    
    return app