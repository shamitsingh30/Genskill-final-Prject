from flask import Flask
from flask_cors import CORS

def create_app():
    app = Flask(__name__)
    CORS(app)

    app.config.from_mapping(
        DATABASE="todo"
    ) 

    from . import joinin
    app.register_blueprint(joinin.bp)

    from . import db 
    db.init_app(app)
    
    return app