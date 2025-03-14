document.addEventListener('DOMContentLoaded', () => {
    displayCartItems();
});

function displayCartItems() {
    const cartItems = JSON.parse(localStorage.getItem('cart')) || [];
    const cartSection = document.getElementById('cartItems');
    cartSection.innerHTML = '';

    if (cartItems.length === 0) {
        cartSection.innerHTML = '<p>Your cart is empty!</p>';
        return;
    }

    cartItems.forEach((item, index) => {
        cartSection.innerHTML += `
            <div class="cart-item">
                <h3>${item.name}</h3>
                <p>Price: ₹${item.price}</p>
                <p>Quantity: ${item.quantity}</p>
                <button onclick="removeFromCart(${index})">Remove</button>
            </div>
        `;
    });
}

function removeFromCart(index) {
    let cartItems = JSON.parse(localStorage.getItem('cart')) || [];
    cartItems.splice(index, 1);
    localStorage.setItem('cart', JSON.stringify(cartItems));
    displayCartItems();
}

function placeOrder() {
    const cartItems = JSON.parse(localStorage.getItem('cart')) || [];

    if (cartItems.length === 0) {
        alert('Your cart is empty!');
        return;
    }

    // Store order details in localStorage or send to server
    localStorage.setItem('order', JSON.stringify(cartItems));
    localStorage.removeItem('cart');
    alert('Order Placed Successfully!');
    window.location.href = 'menu.html';
}
