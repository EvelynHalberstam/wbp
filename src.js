window.onload = function() {
    // Add event listeners to the "Add to cart" buttons
    var addToCartButtons = document.querySelectorAll('button');
    addToCartButtons.forEach(function(button) {
      button.addEventListener('click', addToCart);
    });
  
    // Add event listener to the "Checkout" button
    var checkoutButton = document.querySelector('button#checkout');
    checkoutButton.addEventListener('click', checkout);
  };
  
  // Add an item to the shopping cart
  function addToCart() {
    // Get the item details
    var item = this.parentElement;
    var title = item.querySelector('h3').textContent;
    var price = item.querySelector('p').textContent;
  
    // Add the item to the shopping cart
    var cart = document.querySelector('table');
    var row = document.createElement('tr');
    row.innerHTML = '<td>' + title + '</td><td>' + price + '</td><td><input type="number" value="1"></td><td>' + price + '</td>';
    cart.appendChild(row);
  
    // Update the total cost
    updateTotal();
  }
  
  // Check out the shopping cart
  function checkout() {
    // TODO: Implement checkout functionality (e.g. show a payment form or send an order request to the server)
  }
  
  // Update the total cost of the items in the shopping cart
  function updateTotal() {
    var cart = document.querySelector('table');
    var rows = cart.querySelectorAll('tr');
    var total = 0;
    rows.forEach(function(row) {
      var price = row.querySelector('td:nth-child(2)').textContent;
      var quantity = row.querySelector('input').value;
      total += price * quantity;
    });
    document.querySelector('span#total').textContent = total;
  }
  