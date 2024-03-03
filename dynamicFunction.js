function itemAdded(){
    alert("Item Added!");
    const buttons = document.getElementsByTagName("button");
    for(let button of buttons){
        button.addEventListener('click', buttonPressedAdd)
    }
}

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
