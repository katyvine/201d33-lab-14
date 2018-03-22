'use strict';

// Access element from DOM
var itemElement = document.getElementById('items');
var catalogElement = document.getElementById('catalog');
var cartElement = document.getElementById('cart');

function populateForm() {
  //TODO: Add an <option> tag inside the form's select for each product
 
  for (var i in Product.allProducts) {
    var itemElementTag = document.createElement('option');
    itemElementTag.textContent = Product.allProducts[i].name;
    itemElement.appendChild(itemElementTag);
  }
}

function handleSubmit(event) {
  // TODO: Prevent the page from reloading
  event.preventDefault();

  var newItem = event.target.items.value;
  var newQuantity = event.target.quantity.value;

  new Cart (newItem, newQuantity);



  console.log(Cart.cartItems);

  // Do all the things
  addSelectedItemToCart();
  saveCartToLocalStorage();
  updateCounter();
  updateCartPreview();
}

catalogElement.addEventListener('submit', handleSubmit);

function addSelectedItemToCart() {
  // TODO: Add the selected item and quantity to the cart
  var trElement = document.createElement('tr');
  var tdElement = document.createElement('td');

  tdElement.textContent = Cart.quantity;
  trElement.appendChild(tdElement);

  tdElement.textContent = Cart.item;
  trElement.appendChild(tdElement);

  cartElement.appendChild(trElement);
  
  document.tbody.innerHTML = tdElement;
}


function saveCartToLocalStorage() {
  // TODO: Save the cart to Local Storage

}

function updateCounter() {
  // TODO: Update the cart count in the header
}

function updateCartPreview() {
  // TODO: Show the selected item & quantity in the cart div
}

// TODO: Put an event listener on the #catalog so that you can run the "handleSubmit" method when user submits the form (adding an item to their cart)


// Start it up ...
populateForm();
