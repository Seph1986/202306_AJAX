from app import app


from app.controllers.users import users

if __name__ == "__main__":
    app.run(debug=True)