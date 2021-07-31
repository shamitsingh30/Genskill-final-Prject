from flask import Blueprint, request, jsonify

from . import db

bp = Blueprint("tasks", "tasks", url_prefix="")

@bp.route('/mytasks', methods=["GET","POST"])
def myTasks():
    if request.method == "POST":
        data = request.get_json()
        email = data['email']
        conn = db.get_db()
        cursor = conn.cursor()
        cursor.execute(f"SELECT id FROM users WHERE email = '{email}'")
        u_id = cursor.fetchone()[0]
        cursor.execute(f"SELECT id, task ,t_date, t_time, description FROM tasks WHERE user_id = {u_id}")
        tasks = cursor.fetchall()
        return jsonify(dict(tasks = [dict(id = id, task = task, t_date = t_date, t_time = t_time, description = description) for id, task, t_date, t_time, description in tasks]))

@bp.route('/addtask', methods=["GET","POST"])
def addTask():
    if request.method == "POST":
        data = request.get_json()
        task = data['task']
        date = str(data['task_date'].split('T',1)[0])
        time = str(data['task_time'])
        email = data['email']
        description = data['description']
        conn = db.get_db()
        cursor = conn.cursor()
        cursor.execute(f"SELECT id FROM users WHERE email = '{email}';")
        id = cursor.fetchone()[0]
        cursor.execute(f"INSERT INTO tasks VALUES(DEFAULT, {id}, '{task}', '{date}', '{time}', '{description}')")
        conn.commit()
        conn.close()
        return {'status': True}