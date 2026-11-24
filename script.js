
/* =================================
   KUJO FURNITURE DATA
================================= */

const furniture = [

    {
        id: 1,
        name: "Cloud Sofa",
        category: "Living Room",
        price: 45,
        image: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?auto=format&fit=crop&w=800&q=85"
    },

    {
        id: 2,
        name: "Lounge Chair",
        category: "Living Room",
        price: 25,
        image: "https://images.unsplash.com/photo-1503602642458-232111445657?auto=format&fit=crop&w=800&q=85"
    },

    {
        id: 3,
        name: "Oak Coffee Table",
        category: "Living Room",
        price: 18,
        image: "https://images.unsplash.com/photo-1499933374294-4584851497cc?auto=format&fit=crop&w=800&q=85"
    },

    {
        id: 4,
        name: "Cozy Bed",
        category: "Bedroom",
        price: 55,
        image: "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=800&q=85"
    },

    {
        id: 5,
        name: "Bedside Table",
        category: "Bedroom",
        price: 15,
        image: "https://images.unsplash.com/photo-1499933374294-4584851497cc?auto=format&fit=crop&w=800&q=85"
    },

    {
        id: 6,
        name: "Dining Table",
        category: "Dining",
        price: 35,
        image: "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=800&q=85"
    }

];


/* =================================
   DISPLAY FURNITURE
================================= */

const productsContainer = document.getElementById("products");

function displayFurniture(items) {

    productsContainer.innerHTML = "";

    items.forEach(function(item) {

        const card = document.createElement("div");

        card.className = "product-card";

        card.innerHTML = `

            <img
                class="product-image"
                src="${item.image}"
                alt="${item.name}"
            >

            <div class="product-information">

                <p class="product-category">
                    ${item.category}
                </p>

                <h3>${item.name}</h3>

                <p class="product-price">
                    $${item.price}
                    <span>/ month</span>
                </p>

                <button
                    class="add-button"
                    onclick="addToCart(${item.id})"
                >
                    Add to Cart
                </button>

            </div>

        `;

        productsContainer.appendChild(card);

    });

}


/* =================================
   CATEGORY FILTERS
================================= */

function filterFurniture(category, button) {

    let filteredFurniture;

    if (category === "All") {

        filteredFurniture = furniture;

    } else {

        filteredFurniture = furniture.filter(function(item) {

            return item.category === category;

        });

    }

    displayFurniture(filteredFurniture);


    // Update the active category button

    const buttons = document.querySelectorAll(".category-button");

    buttons.forEach(function(button) {

        button.classList.remove("active");

    });

    button.classList.add("active");

}


/* =================================
   SHOPPING CART
================================= */

let cart = [];


function addToCart(productId) {

    const product = furniture.find(function(item) {

        return item.id === productId;

    });

    cart.push(product);

    updateCart();

    alert(product.name + " added to your cart!");

}


function removeFromCart(index) {

    cart.splice(index, 1);

    updateCart();

}


function updateCart() {

    const cartCount = document.getElementById("cart-count");

    const cartItems = document.getElementById("cart-items");

    const cartTotal = document.getElementById("cart-total");


    // Update cart number

    cartCount.innerText = cart.length;


    // Calculate monthly total

    let total = 0;

    cart.forEach(function(item) {

        total += item.price;

    });


    cartTotal.innerText = "$" + total;


    // Display cart items

    if (cart.length === 0) {

        cartItems.innerHTML = `
            <p class="empty-cart">
                Your cart is empty.
            </p>
        `;

        return;

    }


    cartItems.innerHTML = "";


    cart.forEach(function(item, index) {

        const cartItem = document.createElement("div");

        cartItem.className = "cart-item";

        cartItem.innerHTML = `

            <div>

                <h4>${item.name}</h4>

                <p>$${item.price}/month</p>

            </div>

            <button
                class="remove-button"
                onclick="removeFromCart(${index})"
            >
                Remove
            </button>

        `;

        cartItems.appendChild(cartItem);

    });

}


/* =================================
   OPEN AND CLOSE CART
================================= */

function toggleCart() {

    const cartSidebar = document.getElementById("cart-sidebar");

    const cartOverlay = document.getElementById("cart-overlay");

    cartSidebar.classList.toggle("open");

    cartOverlay.classList.toggle("show");

}


/* =================================
   PACKAGE BUTTONS
================================= */

function showPackage(packageName) {

    alert(
        packageName +
        " package selected! Contact KUJO to customize your furniture package."
    );

}


/* =================================
   CHECKOUT BUTTON
================================= */

function checkout() {

    if (cart.length === 0) {

        alert("Your cart is empty. Add furniture first!");

        return;

    }

    alert(
        "Thank you for exploring KUJO! " +
        "Your monthly rental total is " +
        document.getElementById("cart-total").innerText +
        ". This is a website demonstration."
    );

}


/* =================================
   NEWSLETTER
================================= */

const newsletterForm = document.getElementById("newsletter-form");

newsletterForm.addEventListener("submit", function(event) {

    event.preventDefault();

    const email = document.getElementById("newsletter-email").value;

    alert("Thank you for joining KUJO, " + email + "!");

    newsletterForm.reset();

});


/* =================================
   START WEBSITE
================================= */

displayFurniture(furniture);
updateCart();
