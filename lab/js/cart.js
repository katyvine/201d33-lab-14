'use strict';

var Cart = [];


function loadCart() {
  // TODO: Pull the cart (if it exists) from Local Storage and make available to this app

  var cartAsString = localStorage.getItem('storedCart');
  var usableCart = JSON.parse(cartAsString);
  if (usableCart && usableCart.length) {
    Cart.cartItems = usableCart;
    console.log ('loaded from local storage');
    return;

  }
}


// TODO: Fill in the <tr>'s under the <tbody> for each item in the cart  

function showCart() {

  // TODO: Find the table
  var cartElement = document.getElementsByTagName("tbody");

  // TODO: Iterate over the items in the cart
  for (var i=0; i < Cart.cartItems.length; i++) {

  // TODO: Create a TR
  var trElement = document.createElement('tr');
  // TODO: Create a TD for the quantity and the item
  var tdElement = document.createElement('td');

  // TODO: Add the TR to the TBODY and both TD's to the TR
  tdElement.textContent = Cart.cartItems.item;
  trElement.appendChild(tdElement);

  tdElement.textContent = Cart.cartItems.quantity;
  trElement.appendChild(tdElement);
}

  cartElement.appendChild(trElement);
}


function removeItemFromCart() {
  // TODO: When a delete link is clicked, rebuild the Cart array without that item
  // TODO: Save the cart back to local storage
  // TODO: Re-draw the cart table
}

// TODO: Create an event listener so that when the delete link is clicked, the removeItemFromCart method is invoked.

loadCart();

showCart();