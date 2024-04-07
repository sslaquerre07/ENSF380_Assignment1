from flask import Flask, jsonify, request
from flask_cors import CORS
app = Flask(__name__)
CORS(app)


#List of users
users = [
]

#List of all products
products = [
    {
        "id": 1,
        "name": "Product 1",
        "description": "Description for Product 1",
        "price": 10.99,
        "image": 'images/product1.png'
    },
    {
        "id": 2,
        "name": "Product 2",
        "description": "Description for Product 2",
        "price": 20.99,
        "image": 'images/product2.jpg'
    },
    {
        "id": 3,
        "name": "Product 3",
        "description": "Description for Product 3",
        "price": 10.99,
        "image": 'images/product3.jpg'
    },
    {
        "id": 4,
        "name": "Product 4",
        "description": "Description for Product 4",
        "price": 10.99,
        "image": 'images/product4.jpg'
    },
    {
        "id": 5,
        "name": "Product 5",
        "description": "Description for Product 5",
        "price": 10.99,
        "image": 'images/product5.jpg'
    },
    {
        "id": 6,
        "name": "Product 6",
        "description": "Description for Product 6",
        "price": 10.99,
        "image": 'images/product6.jpg'
    },
    {
        "id": 7,
        "name": "Product 7",
        "description": "Description for Product 7",
        "price": 10.99,
        "image": 'images/product7.jpg'
    },
    {
        "id": 8,
        "name": "Product 8",
        "description": "Description for Product 8",
        "price": 10.99,
        "image": 'images/product8.jpg'
    },
    {
        "id": 9,
        "name": "Product 9",
        "description": "Description for Product 9",
        "price": 10.99,
        "image": 'images/product9.jpg'
    },
    {
        "id": 10,
        "name": "Product 10",
        "description": "Description for Product 10",
        "price": 10.99,
        "image": 'images/product10.jpg'
    }
]

@app.route('/Signup', methods=['POST'])
def authenticate_signup():
    data = request.json
    for user in users:
        if user["username"] == data["username"]:
            print("Username already in use")
            return jsonify({"message":"Username already in use"})
    users.append(data)
    print(users)
    return jsonify({'message': 'User added successfully'}), 201
    
@app.route('/Login', methods=['POST'])
def authenticate_login():
    data = request.json
    print(f'Users: {users}')
    print(f'Given data: {data}')
    # if data in users:
    #     print("Valid user")
    #     return jsonify({"message":"Username and password valid"})
    for user in users:
        if data['username'] == user['username'] and data['password'] == user['password']:
            print("Valid user")
            return jsonify({"message":"Username and password valid"})
    print("User invalid")
    return jsonify({"message":"Username or password is invalid"})

@app.route('/Products', methods=['GET'])
def retrieve_products():
    # print({"products": products})  # Print for debugging (optional)
    return jsonify({"products":products})

if __name__ == "__main__":
    app.run(debug="True")