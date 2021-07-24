from flask import Blueprint, url_for, render_template, request, redirect

from . import db

bp = Blueprint("tasks", "tasks", url_prefix="")

@bp.route('/mytasks')
def myTasks():
    return render_template('taskmanager/taskindex.html')