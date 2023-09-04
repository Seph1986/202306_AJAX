from app.models.user import User
from app import app
from flask import render_template, jsonify, request, redirect

@app.route('/')
def index():
    return render_template('index.html')


@app.route('/users/')
def users():
    return jsonify(User.get_all_json())

@app.route('/create/user/',methods=['POST'])
def create_user():

    form = request.form
    print(form)

    data = {
        "user_name": form["name"],
        "email": form["email"]
    }   
    print(data)


    User.save(data)
    user_added= User.get_one_by_user_name(data)

    print(f"----{user_added.json()}----")

    return jsonify(user_added.json())



