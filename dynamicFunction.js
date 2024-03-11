/* Functions for the Product Page */
function itemAdded(){
    alert("Item Added!");
    const buttons = document.getElementsByTagName("button");
    for(let button of buttons){
        button.addEventListener('click', buttonPressedAdd)
    }
}

//Adds a listener for every button when the page is initially loaded
document.addEventListener("DOMContentLoaded", function() {
    addEventListeners(); // Add event listeners to all buttons
})

function addEventListeners() {
    const buttons = document.getElementsByTagName("button");
    for (let button of buttons) {
        button.addEventListener('click', buttonPressedAdd);
    }
}

//Handles actions done with button pressed to add the element
function buttonPressedAdd(e){
    const thisButton = e.target;
    const cart = document.getElementById("shopping-cart");
    var buttonParent = thisButton.parentNode;
    const idCheck = `${buttonParent.id}-product`;
    let newItem;
    if(checkNewQuantity(buttonParent, cart, idCheck)){
        newQuantity = updateQuantity(cart.querySelector(`#${idCheck}`), true);
        cart.replaceChild(createProductHTML(buttonParent, newQuantity, true), cart.querySelector(`#${idCheck}`));
    }
    else{
        newItem = createProductHTML(buttonParent, 1, true)
        cart.appendChild(newItem, 1);
    }
}

//Action for Remove Button
function buttonPressedRemove(e){
    const thisButton = e.target;
    const cart = document.getElementById("shopping-cart");
    var itemToRemove = thisButton.parentNode;
    const idCheck = `${itemToRemove.id}`;
    const newQuantity = updateQuantity(cart.querySelector(`#${idCheck}`), false);
    if(newQuantity){
        cart.replaceChild(createProductHTML(itemToRemove, newQuantity, false), cart.querySelector(`#${idCheck}`));
    }
    else{
        cart.removeChild(itemToRemove);
    }
}

//Creates the new element
function createProductHTML(element, quantity, addBool){
    let newProduct = document.createElement("div");
    //Creation text within the div element
    text = document.createElement("p");
    //Varies depending on whether it is adding or removing an element
    if(addBool){
        item_name = element.querySelector("h3").textContent
        price = element.querySelector("p").textContent;
        text.textContent = `${item_name} - ${price} - ${quantity}`;
    }
    else{
        let oldText = element.querySelector("p").textContent.split(" ");
        oldText.pop();
        oldText.push(quantity.toString());
        let newText = oldText.join(" ");
        text.textContent = newText;
    }
    newProduct.id = `${element.id}-product`;
    //Creation of remove button
    let removeButton = document.createElement("button");
    removeButton.textContent = "Remove";
    removeButton.onclick = buttonPressedRemove;
    removeButton.className = "add-to-cart";
    //Change colour when button hovered over
    removeButton.addEventListener("mouseover", function(){
        this.style.backgroundColor = "#ff0000";
    });
    //Change back when button not hovered over anymore
    removeButton.addEventListener("mouseout", function(){
        this.style.backgroundColor = "#45a049";
    });
    //Add all elements
    newProduct.style.display = "flex";
    newProduct.appendChild(text);
    newProduct.appendChild(removeButton);
    return newProduct;
}

//Check if the item is already in cart or not
function checkNewQuantity(element, currentcart, idCheck){
    let inCart = false;
    var childDivs = [...currentcart.querySelectorAll("div")]
    for(const products of childDivs){
        if(products.id.includes(idCheck)){
            inCart = true;
        }
    }
    return inCart;
}

//Updates Quantity, Both for addition and subtraction
function updateQuantity(element, addBool){
    let htmlToUpdate = element.querySelector("p");
    let str = htmlToUpdate.textContent.trim();
    var words = str.split(" ");
    var lastWord = words[words.length - 1];
    quantity = parseInt(lastWord);
    if(addBool){
        quantity++;
    }
    else{
        quantity--;
    }
    console.log(quantity);
    return quantity;
}


/* Functions for the Login Page */
async function checkLoginInfo(){
    //Get the data from the provided users
    var userData = await fetchData();
    //Get a list of all the usernames and passwords
    let validUsersInfo = getLoginInfo(userData, "name", "email");
    //Get the values from the form
    var loginForm = document.querySelector(".login-form");
    let username = loginForm.querySelector(".username").querySelector("#username").value;
    let password = loginForm.querySelector(".password").querySelector("#password").value;
    let loginMatch = false;
    for(const userInfo of validUsersInfo){
        if(username == (userInfo[0]) && password == (userInfo[1])){
            loginMatch = true;
        }
    }
    if(loginMatch){
        console.log("Success");
        displayMessage(true);
    }
    else{
        console.log("Failure");
        displayMessage(false);
    }
}

async function fetchData(){
    try{
        var res = await fetch('https://jsonplaceholder.typicode.com/users');
        var data = await res.json();
        return data;
    }
    catch(error){
        alert("Fetch of data unsuccessful!");
        return null;
    }
}

function getLoginInfo(data, field1, field2){
    try{
        if(data){
            var userData = [];
            data.forEach(user => {
                userData.push([user[field1], user[field2]]);
            });
        }
        else{
            console.log("No user data found");
        }
        return userData;
    }
    catch(error){console.log(error)}
}

function displayMessage(mode){
    let element = document.getElementById("login-status");
    var container = document.querySelector("main");
    if(element == null){
        let newElement = document.createElement("div");
        newElement.id = "login-status";
        let text = document.createElement("p");
        text.textContent = mode ? 'Login Successful' : 'Invalid Username or Password, Please try again';
        newElement.appendChild(text);
        newElement.style.border = "2px solid black";
        newElement.style.padding = "10px";
        newElement.style.margin = "20px";
        newElement.style.background = "#f9f9f9";
        container.appendChild(newElement);
    }
    else{
        let text = element.querySelector("p");
        text.textContent = mode ? 'Login Successful' : 'Invalid Username or Password, Please try again';
    }
}

/* Functions for the Signup Page */
function checkSignup() {
    var signupForm = document.querySelector(".signup-form");
    let username = signupForm.querySelector(".username").querySelector("#username").value;
    let password = signupForm.querySelector(".password").querySelector("#password").value;
    let confirmPassword = signupForm.querySelector(".confirm-password").querySelector("#confirm-password").value;
    let email = signupForm.querySelector(".email").querySelector("#email").value;

    displaySignupMessage(validUsername(username), validPassword(password), password==confirmPassword, validEmail(email));
}

function validUsername(username) {
    let usernameRegex = /^[a-zA-Z][a-zA-Z0-9_-]{2,19}$/;
    return usernameRegex.test(username);
}

function validPassword(password) {
    let passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()-_=+\[\]{}|;:'",.<>?/`~])[\w!@#$%^&*()-_=+\[\]{}|;:'",.<>?/`~]{8,}$/;
    return passwordRegex.test(password);
}

function validEmail(email) {
    let emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

function displaySignupMessage(goodUsername, goodPassword, passwordsMatch, goodEmail) {
    let element = document.getElementById("signup-status");
    var container = document.querySelector("main");
    if(element == null){
        let newElement = document.createElement("div");
        newElement.id = "signup-status";
        if (goodUsername && goodPassword && passwordsMatch && goodEmail) {
            let text = document.createElement("p");
            text.textContent = "Signup Successful!.";
            newElement.appendChild(text)
        }
        if (!goodUsername) {
            let text = document.createElement("p");
            text.textContent = "Check the Username.";
            newElement.appendChild(text)
        }
        if (!goodPassword) {
            let text = document.createElement("p");
            text.textContent = "Check the Password.";
            newElement.appendChild(text)
        }
        if (!passwordsMatch) {
            let text = document.createElement("p");
            text.textContent = "Password doesn't match.";
            newElement.appendChild(text)
        }
        if (!goodEmail) {
            let text = document.createElement("p");
            text.textContent = "Check the Email.";
            newElement.appendChild(text)
        }
        newElement.style.border = "2px";
        newElement.style.padding = "10px";
        newElement.style.margin = "20px";
        newElement.style.background = "#f9f9f9";
        container.appendChild(newElement);
    }
    else{
        element.innerHTML = "";
        if (goodUsername && goodPassword && passwordsMatch && goodEmail) {
            let text = document.createElement("p");
            text.textContent = "Signup Successful!.";
            element.appendChild(text);
        }
        if (!goodUsername) {
            let text = document.createElement("p");
            text.textContent = "Check the Username.";
            element.appendChild(text);
        }
        if (!goodPassword) {
            let text = document.createElement("p");
            text.textContent = "Check the Password.";
            element.appendChild(text);
        }
        if (!passwordsMatch) {
            let text = document.createElement("p");
            text.textContent = "Password doesn't match.";
            element.appendChild(text);
        }
        if (!goodEmail) {
            let text = document.createElement("p");
            text.textContent = "Check the Email.";
            element.appendChild(text);
        }    
    }
}