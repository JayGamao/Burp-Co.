

let cartItems = [];
let cartTotal = 0;

// Load cart items from localStorage on page load
document.addEventListener('DOMContentLoaded', function () {
    cartItems = JSON.parse(localStorage.getItem('cartItems')) || [];
    updateCart();
});

function addToCart(itemName, itemPrice, itemImgSrc) {
    const existingItem = cartItems.find(item => item.name === itemName);

    if (existingItem) {
        existingItem.quantity += 1;
    } else {
        const newItem = {
            name: itemName,
            price: itemPrice,
            quantity: 1,
            imgSrc: itemImgSrc
        };
        cartItems.push(newItem);
    }

    // Save cart items to localStorage
    localStorage.setItem('cartItems', JSON.stringify(cartItems));

    updateCart();
}

function adjustQuantity(itemName, action) {
    const existingItem = cartItems.find(item => item.name === itemName);

    if (existingItem) {
        if (action === 'increment') {
            existingItem.quantity += 1;
        } else if (action === 'decrement' && existingItem.quantity > 1) {
            existingItem.quantity -= 1;
        } else if (action === 'decrement' && existingItem.quantity === 1) {
            cartItems = cartItems.filter(item => item.name !== itemName);
        }
    }

    // Save cart items to localStorage
    localStorage.setItem('cartItems', JSON.stringify(cartItems));

    updateCart();
}

function updateCart() {
    const cartItemsElement = document.getElementById('cart-items');
    const cartTotalElement = document.getElementById('cartTotal');
    const cartNotificationElement = document.getElementById('cartNotification');

    // Clear previous items
    cartItemsElement.innerHTML = '';

    // Update cart items
    cartItems.forEach(item => {
        const listItem = document.createElement('li');

        // Create an image element
        const productImage = document.createElement('img');
        productImage.src = item.imgSrc;
        productImage.alt = item.name;
        productImage.classList.add('product-image');

        listItem.appendChild(productImage);

        // Add other details to the list item
        const itemDetails = document.createElement('div');
        itemDetails.classList.add('item-details');

        const itemName = document.createElement('p');
        itemName.textContent = item.name;

        const itemPrice = document.createElement('p');
        itemPrice.textContent = `$${(item.price * item.quantity).toFixed(2)}`;

        itemDetails.appendChild(itemName);
        itemDetails.appendChild(itemPrice);

        listItem.appendChild(itemDetails);

        // Add quantity controls
        const quantityControls = document.createElement('div');
        quantityControls.classList.add('quantity-controls');
        quantityControls.innerHTML = `
            <button onclick="adjustQuantity('${item.name}', 'increment')">+</button>
            <span class="product-quantity" id="productQuantity_${item.name}">${item.quantity}</span>
            <button onclick="adjustQuantity('${item.name}', 'decrement')">-</button>
        `;

        // Append quantity controls to the list item
        listItem.appendChild(quantityControls);

        // Append the list item to cart
        cartItemsElement.appendChild(listItem);
    });

    // Update cart total
    cartTotal = cartItems.reduce((total, item) => total + item.price * item.quantity, 0);
    cartTotalElement.textContent = cartTotal.toFixed(2);

    // Update cart notification
    cartNotificationElement.textContent = cartItems.length;
}

// Rest of your code remains unchanged


let products = document.querySelectorAll(".product");
let closeBtn = document.getElementById("closeBtn");

products.forEach(function (product) {
    product.addEventListener("mouseover", function () {
        let productName = product.getAttribute("data-name");
        let productPrice = product.getAttribute("data-specialization");
        let description = product.getAttribute("data-description");
        let imageSource = product.firstElementChild.src;

        document.querySelector(".content").style.display = "flex";
        document.querySelector(".contentDetail").innerHTML = `
            <img src="${imageSource}">
            <div>
                <h1>${productName}</h1>
                <p>${productPrice}</p>
                <p>${description}</p>
            </div>
        `;
    });

    product.addEventListener("mouseout", function () {
        document.querySelector(".content").style.display = "none";
    });
});






var slideIndex = 0;
showSlides();

function showSlides() {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}    
  slides[slideIndex-1].style.display = "block";  
  setTimeout(showSlides, 3000); 
}
document.addEventListener('DOMContentLoaded', function () {
  document.body.style.transition = 'opacity 0.5s ease-in-out'; // Set more advanced transition
});

// Handle page transitions
document.addEventListener('click', function (e) {
  if (e.target.tagName === 'A' && e.target.getAttribute('href')) {
      e.preventDefault();

      document.body.style.animation = 'fadeOut 0.5s ease-in-out'; // Set fade-out animation

      setTimeout(function () {
          window.location.href = e.target.getAttribute('href');
      }, 500); // Adjust the time based on your transition duration
  }
});


function toggleCart() {
  var cart = document.getElementById("cart");
  cart.style.display = cart.style.display === "none" ? "block" : "none";
}
    
//LOGIN GOOGLE
