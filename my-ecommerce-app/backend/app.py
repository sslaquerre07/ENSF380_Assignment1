from flask import Flask, jsonify, request
from flask_cors import CORS
app = Flask(__name__)
CORS(app)


#List of users
users = [
]

@app.route('/Login', methods=['POST'])
def authenitcate_signup():
    data = request.json
    for user in users:
        if user["username"] == data["username"]:
            return jsonify({"message":"Username already in use"})
    users.append(data)
    print(users)
    return jsonify({'message': 'User added successfully'}), 201
    
if __name__ == "__main__":
    app.run(debug="True")