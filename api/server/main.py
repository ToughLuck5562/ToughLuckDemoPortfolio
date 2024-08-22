from flask import Flask, render_template, redirect, url_for, request

app = Flask(__name__, template_folder="../client/templates", static_folder="../client/static")

@app.route('/')
def home():
    
    return render_template('home.html')

@app.route('/projects')
def projects():
    
    return render_template('projects.html')

if __name__ == "__main__":
    
    app.run(debug=True, host='localhost', port=8080)