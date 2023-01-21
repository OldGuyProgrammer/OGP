
"""
Module Docstring
"""
from flask import Flask, render_template

__author__ = "Jim Olivi"
__version__ = "0.1.0"
__license__ = "Open Source"

app = Flask(__name__)

@app.route("/")
def home():

    return render_template('header.html')


if __name__ == '__main__':
    print('Initialization complete, Listen for requests.')
    port = 3000
    print(f"Warbird Booking started on port: {port}")
    app.config['DEBUG'] = True
    app.run(port=port)