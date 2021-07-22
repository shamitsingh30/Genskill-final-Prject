from flask import Flask, render_template, request
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

    @app.route('/login')
    def logIn():
        return render_template('access/login.html')

    @app.route('/signup')
    def signUp():
        return render_template('access/signup.html')
    
    return app