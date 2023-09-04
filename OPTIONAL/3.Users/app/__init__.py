#Flask
from flask import Flask

#Flask-Cors
from flask_cors import CORS

#Instancia app
app = Flask(__name__)
CORS(app)

app.secret_key = "super_secret_key"