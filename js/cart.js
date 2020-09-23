/* global Cart */
'use strict';

// Create an event listener so that when the delete link is clicked, the removeItemFromCart method is invoked.
var table = document.getElementById('cart');
table.addEventListener('click', removeItemFromCart);
var cart;

function loadCart() {
  var cartItems = JSON.parse(localStorage.getItem('cart')) || [];
  cart = new Cart(cartItems);

  var table = document.getElementById('cart');


  
  
  

  for(var j =0 ; j < cartitems.length; j++){

    var row = document.createElement('tr');
    table.appendChild(row);


    
    var td = document.createElement('td');
    tr.appendChild(td);

  



    for(var i =0 ; i < Product.allProducts.length; i++){
      if(cartitems[j].product === Product.allProducts[i].name){

    
      var list = document.createElement('figurecaption');
      var figure = document.createElement('figure');
      list.appendChild(figure);
      var listimg = document.createElement('img');

      listimg.setAttribute('src',Product.allProducts[i].filePath);
      figure.appendChild(listimg);
      list.textContent = Product.allProducts[i].name
      td.appendChild(figure);
      figure.appendChild(list);
    
        
      }
    }























    

  }

}

// Make magic happen --- re-pull the Cart, clear out the screen and re-draw it
function renderCart() {
  loadCart();
  clearCart();
  showCart();
}

// TODO: Remove all of the rows (tr) in the cart table (tbody)
function clearCart() {}

// TODO: Fill in the <tr>'s under the <tbody> for each item in the cart
function showCart() {

  
  // TODO: Find the table body

  // TODO: Iterate over the items in the cart
  // TODO: Create a TR
  // TODO: Create a TD for the delete link, quantity,  and the item
  // TODO: Add the TR to the TBODY and each of the TD's to the TR

}

function removeItemFromCart(event) {

  // TODO: When a delete link is clicked, use cart.removeItem to remove the correct item
  // TODO: Save the cart back to local storage
  // TODO: Re-draw the cart table

}

// This will initialize the page and draw the cart on screen
renderCart();
