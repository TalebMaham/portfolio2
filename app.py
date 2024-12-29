from flask import Flask, send_from_directory

app = Flask(__name__, static_folder='static')

@app.route('/')
def index():
    return send_from_directory(app.static_folder, 'index.html')

@app.route('/portfolio2/<path:path>')
def static_files(path):
    if path.endswith('.js'):
        return send_from_directory(app.static_folder, path, mimetype='application/javascript')
    elif path.endswith('.css'):
        return send_from_directory(app.static_folder, path, mimetype='text/css')
    else:
        return send_from_directory(app.static_folder, path)


if __name__ == '__main__':
    app.run(debug=True)