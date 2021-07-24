from flask import Blueprint, url_for, render_template, request, redirect

from . import db
from . import tasks

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
        conn=db.get_db()
        cursor = conn.cursor()
        cursor.execute("SELECT email FROM users;")
        emails = cursor.fetchall()[0][0]
        cursor.execute(f"SELECT password FROM users WHERE email = '{email}'")
        correct_password = cursor.fetchone()[0]
        cursor.close()
        if (email in emails) and (str(password) == str(correct_password)):
            return redirect(url_for("tasks.myTasks"),302)
        else:
            return redirect(url_for("joinin.logIn"), 302)

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
        valid_name = name.replace(" ", "_")
        cursor.execute(f"CREATE TABLE {valid_name}( id SERIAL PRIMARY KEY, task TEXT NOT NULL, date TEXT NOT NULL, time TEXT, description TEXT)")
        conn.commit()
        conn.close()
        return redirect(url_for("joinin.logIn"), 302)