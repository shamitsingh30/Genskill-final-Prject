from flask import Blueprint, url_for, render_template, request, redirect, jsonify

from . import db
from . import tasks

bp = Blueprint("joinin", "joinin", url_prefix="")

@bp.route('/')
def index():
        return render_template('index.html')

@bp.route('/login', methods=["GET", "POST"])
def logIn():
    if request.method == "POST":
        data = request.get_json()
        email = data["email"]
        password = data["password"]
        conn=db.get_db()
        cursor = conn.cursor()
        cursor.execute("SELECT email FROM users;")
        emails = cursor.fetchall()
        emails = [email[0] for email in emails]
        cursor.execute(f"SELECT password FROM users WHERE email = '{email}'")
        correct_password = cursor.fetchone()[0]
        cursor.close()
        if (email in emails) and (str(password) == str(correct_password)):
            return {"status": True}
        else:
            return {"status": False}

@bp.route('/signup', methods=["GET", "POST"])
def signUp():
    if request.method == "POST":
        data = request.get_json()
        name = data['name']
        email = data['email']
        password = data['password']
        conn = db.get_db()
        cursor = conn.cursor()
        cursor.execute(f"INSERT INTO users VALUES (DEFAULT, '{name}', '{email}', '{password}')")
        conn.commit()
        conn.close()
        return {"status": "Done"}