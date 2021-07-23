from flask import Blueprint, url_for, render_template, request, redirect

from . import db

bp = Blueprint("joinin", "joinin", url_prefix="")

@bp.route('/')
def index():
        return render_template('index.html')

@bp.route('/login', methods=["GET", "POST"])
def logIn():
    if request.method == "GET":
        return render_template('access/login.html')
    elif request.method == "POST":
        email = request.form.get("email")
        password = request.form.get("password")

@bp.route('/signup', methods=["GET", "POST"])
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
        return redirect(url_for("joinin.logIn"), 302)