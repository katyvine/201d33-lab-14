'use strict';

var counter = 1;

// Access element from DOM
var itemElement = document.getElementById('items');
var catalogElement = document.getElementById('catalog');
var countElement = document.getElementById('itemCount');

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

  // Do all the things
  addSelectedItemToCart();
  saveCartToLocalStorage();
  updateCounter();
  updateCartPreview();
}



function addSelectedItemToCart() {
  // TODO: Add the selected item and quantity to the cart
  var newItem = event.target.items.value;
  var newQuantity = event.target.quantity.value;

  new Cart (newItem, newQuantity);
}


function saveCartToLocalStorage() {
  // TODO: Save the cart to Local Storage
  var saveCart = JSON.stringify(Cart.cartItems);
  localStorage.setItem('storedCart', saveCart);
}



function updateCounter() {
  // TODO: Update the cart count in the header
  countElement.textContent = counter++;
  console.log(counter);
}

function updateCartPreview() {
  // TODO: Show the selected item & quantity in the cart div
}

// TODO: Put an event listener on the #catalog so that you can run the "handleSubmit" method when user submits the form (adding an item to their cart)
catalogElement.addEventListener('submit', handleSubmit);

// Start it up ...
populateForm();
