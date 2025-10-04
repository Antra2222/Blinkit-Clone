document.addEventListener("DOMContentLoaded", function() {
    updateCartIcon();  // Update the cart icon on page load
    updateCartDisplay();  // Display the cart items
});

function updateCartDisplay() {
    const cart = JSON.parse(localStorage.getItem("cart")) || [];
    const cartItemsContainer = document.getElementById('cart-items');
    cartItemsContainer.innerHTML = ''; // Clear previous items

    if (cart.length === 0) {
        cartItemsContainer.innerHTML = "<p>Your cart is empty</p>";
        document.getElementById('total-price').innerText = 'Total: ₹0';
        return;
    }

    let totalPrice = 0;
    const fragment = document.createDocumentFragment();

    cart.forEach(item => {
        totalPrice += item.quantity * item.price;

        const cartItem = document.createElement('div');
        cartItem.className = 'cart-item';
        cartItem.innerHTML = `
            <p><b>${item.productName}</b></p>
            <p>₹${item.price} x ${item.quantity}</p>
            <p>Total: ₹${item.price * item.quantity}</p>
            <button class="remove-button" data-product-name="${item.productName}">Remove</button>
        `;

        fragment.appendChild(cartItem);
    });

    cartItemsContainer.appendChild(fragment);
    document.getElementById('total-price').innerText = `Total: ₹${totalPrice}`;

    attachRemoveEventListeners();
}

function attachRemoveEventListeners() {
    document.querySelectorAll('.remove-button').forEach(button => {
        button.addEventListener('click', function () {
            const productName = this.getAttribute('data-product-name');
            removeFromCart(productName);
        });
    });
}

// Update the cart icon immediately when the page loads
document.addEventListener("DOMContentLoaded", function() {
    updateCartIcon();  // Ensure cart icon is updated on page load
});

// Function to update the cart icon with item count and total price
function updateCartIcon() {
    let cart = JSON.parse(localStorage.getItem("cart")) || [];
    let totalItems = 0;
    let totalPrice = 0;

    // Calculate total items and total price
    cart.forEach(item => {
        totalItems += item.quantity;
        totalPrice += item.quantity * item.price;
    });

    // Update the cart icon text
    const itemAndPriceElement = document.getElementById('itemAndPrice');
    if (itemAndPriceElement) {
        itemAndPriceElement.innerText = `${totalItems} items  ₹${totalPrice}`;
    }
}

// Function to add a product to the cart (this can be triggered on the "Add to Cart" button)
function addToCart(productName, price) {
    let cart = JSON.parse(localStorage.getItem("cart")) || [];
    const product = { productName, price };

    // Check if the product is already in the cart
    const existingProductIndex = cart.findIndex(item => item.productName === productName);
    if (existingProductIndex !== -1) {
        cart[existingProductIndex].quantity += 1; // Increase quantity if already in cart
    } else {
        product.quantity = 1; // Add new product to cart with quantity 1
        cart.push(product);
    }

    localStorage.setItem("cart", JSON.stringify(cart));

    // Update the cart icon after adding an item
    updateCartIcon();
    updateCartDisplay();
}

// Function to remove an item from the cart (this can be triggered on the "Remove" button)
function removeFromCart(productName) {
    let cart = JSON.parse(localStorage.getItem("cart")) || [];
    const updatedCart = cart.filter(item => item.productName !== productName);
    localStorage.setItem("cart", JSON.stringify(updatedCart));

    // Update the cart icon after removing an item
    updateCartIcon();
    updateCartDisplay();
}