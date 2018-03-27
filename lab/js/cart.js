'use strict';

var Cart = [];

// var countElement = document.getElementById('itemCount');

// countElement.textContent = counter;


function loadCart() {
  // TODO: Pull the cart (if it exists) from Local Storage and make available to this app
  var cartAsString = localStorage.getItem('storedCart');
  var usableCart = JSON.parse(cartAsString);
  if (usableCart && usableCart.length) {
    Cart.cartItems = usableCart;
    console.log ('loaded from local storage');
    return;

  }

  // var cartCountAsString = localStorage.getItem('savedCart');
  // var usableCartCount = JSON.parse(cartCountAsString);
  // if (usableCartCount && usableCartCount.length) {
  //   counter = usableCartCount;
  //   console.log ('loaded from local storage');
  //   return;
  // }
}

// TODO: Fill in the <tr>'s under the <tbody> for each item in the cart
function showCart() {

  // TODO: Find the table
  var cartElement = document.getElementById('cart');

  // TODO: Iterate over the items in the cart
  for (var i=0; i < Cart.cartItems.length; i++) {

    // TODO: Create a TR
    var trElement = document.createElement('tr');
    // TODO: Create a TD for the quantity and the item
    var tdElement = document.createElement('td');

    tdElement.textContent = 'X';
    trElement.appendChild(tdElement);
    tdElement = document.createElement('td');

    // TODO: Add the TR to the TBODY and both TD's to the TR
    tdElement.textContent = Cart.cartItems[i].item;
    trElement.appendChild(tdElement);

    tdElement = document.createElement('td');

    tdElement.textContent = Cart.cartItems[i].quantity;
    trElement.appendChild(tdElement);

    cartElement.appendChild(trElement);
  }

}


function removeItemFromCart() {
  // TODO: When a delete link is clicked, rebuild the Cart array without that item
  // TODO: Save the cart back to local storage
  // TODO: Re-draw the cart table
}

// TODO: Create an event listener so that when the delete link is clicked, the removeItemFromCart method is invoked.

loadCart();

showCart();