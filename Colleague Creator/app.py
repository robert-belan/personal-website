from flask import Flask, redirect, render_template, request, session, send_from_directory
from flask_session import Session

app = Flask(__name__)

app.config['TEMPLATES_AUTO_RELOAD'] = True

# Code from CS50
# Ensure responses aren't cached


@app.after_request
def after_request(response):
    response.headers["Cache-Control"] = "no-cache, no-store, must-revalidate"
    response.headers["Expires"] = 0
    response.headers["Pragma"] = "no-cache"
    return response


@app.route("/")
def index():
    return render_template("index.html")
