
function toggleCart() {
    cart.style.display = cart.style.display === 'none' ? 'block' : 'none';
    }

    const toggleCartButton = document.getElementById('toggleCartButton');
    toggleCartButton.addEventListener('click', toggleCart);
    function checkout() {
        if (cartItems.length === 0) {
            alert('Your cart is empty. Add items before checking out.');
            return;
        }
    
        const orderDetails = getOrderDetails();
        const totalAmount = cartTotal.toFixed(2);
    
        const form = document.createElement('form');
        form.action = 'https://formsubmit.co/jaymaxeygamao@gmail.com';
        form.method = 'POST';
        form.target = 'https://mail.google.com/mail/u/0/#inbox';
    
        const inputName = document.createElement('input');
        inputName.type = 'hidden';
        inputName.name = 'to_name';
        inputName.value = 'Customer Name';  
        form.appendChild(inputName);
    
        const inputOrderDetails = document.createElement('textarea');
        inputOrderDetails.name = 'order_details';
        inputOrderDetails.value = orderDetails;
        form.appendChild(inputOrderDetails);
    
        const inputTotalAmount = document.createElement('input');
        inputTotalAmount.type = 'hidden';
        inputTotalAmount.name = 'total_amount';
        inputTotalAmount.value = totalAmount;
        form.appendChild(inputTotalAmount);
    
        // Append the form to the document
        document.body.appendChild(form);
    
        // Submit the form
        form.submit();
    
        cartItems = [];
        localStorage.setItem('cartItems', JSON.stringify(cartItems));
        // Update the cart UI
        updateCart();
    
        // Display a success message to the user
        alert('Order placed successfully. Check your email for confirmation.');
    }
    
    function getOrderDetails() {
        return cartItems.map(item => `${item.name} x${item.quantity}`).join('\n');
    }
    const quotes = [
        "Good food is the foundation of genuine happiness.",
        "The only thing I like better than talking about food is eating.",
        "First, we eat, then we do everything else.",
        "Eat well, laugh often, love much.",
        "Life is uncertain. Eat dessert first.",
        "Cooking is like love. It should be entered into with abandon or not at all."
    ];

    let currentQuoteIndex = 0;

    function changeQuote() {
        const quoteElement = document.getElementById("quote");
        currentQuoteIndex = (currentQuoteIndex + 1) % quotes.length;
        quoteElement.innerText = `"${quotes[currentQuoteIndex]}"`;
    }

    setInterval(changeQuote, 5000); 
