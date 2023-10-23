
let cartlist = document.getElementById("cart-container")
const Cart = document.getElementById("cart-icon")
const Close = document.getElementById("closebtn")
Cart.addEventListener("click", function(){
    cartlist.classList.add("popcart");

})

document.addEventListener("keydown", function(event) {
    if (event.key === "Escape") {
        cartlist.classList.remove("popcart");
    }
})
Close.addEventListener("click", function(){
    cartlist.classList.remove("popcart");
})

const searchInput = document.getElementById("search");
const menuItems = document.querySelectorAll(".menu-item");
const cartContainer = document.getElementById("cart-container");
const cartItemsList = document.getElementById("cart-items");

menuItems.forEach((menuItem) => {
    const addToCartButton = menuItem.querySelector(".add-to-cart");
    addToCartButton.addEventListener("click", () => {
        addToCart(menuItem);

    });
});

searchInput.addEventListener("input", () => {
    filterItems(searchInput.value.toLowerCase());
});

function addToCart(menuItem) {
    const name = menuItem.getAttribute("data-name");
    const price = parseFloat(menuItem.getAttribute("data-price"));
    const size = menuItem.getAttribute("data-size");
    
    // Check if the item is already in the cart
    const existingCartItem = cartItemsList.querySelector(`[data-name="${name}"]`);
    if (existingCartItem) {
        // If it exists, increment the quantity and update the price
        const quantityElement = existingCartItem.querySelector(".quantity");
        const quantity = parseInt(quantityElement.textContent);
        const newQuantity = quantity + 1;
        quantityElement.textContent = newQuantity;
        const totalPriceElement = existingCartItem.querySelector(".total-price");
        const total = price * newQuantity;
        totalPriceElement.textContent = `$${total.toFixed(2)}`;
    } else {
        // If it's a new item, add it to the cart
        const cartItem = document.createElement("li");
        cartItem.classList.add("cart-item");
        cartItem.setAttribute("data-name", name);
        cartItem.innerHTML = `
            <img src="${menuItem.querySelector('img').getAttribute('src')}" alt="${name}">
            <span>${name}</span>
            <span class="quantity">1</span>
            <span class="total-price">$${price.toFixed(2)}</span>
            <button class="remove-from-cart">Remove</button>
        `;
        cartItemsList.appendChild(cartItem);


        const removeFromCartButton = cartItem.querySelector(".remove-from-cart");
        removeFromCartButton.addEventListener("click", () => {
            cartItemsList.removeChild(cartItem);
        });
    }

    // Show the cart container
    cartContainer.style.display = "block";
}

function filterItems(query) {
    menuItems.forEach((menuItem) => {
        const name = menuItem.getAttribute("data-name").toLowerCase();
        if (name.includes(query)) {
            menuItem.style.display = "inline-block";
        } else {
            menuItem.style.display = "none";
        }
    });
}



function calculateTotal() {
    const totalAmount = document.querySelector("#total-amount");
    const total = menuItems.reduce((acc, menuItems) => acc + menuItems.price, 0);
    totalAmount.textContent = total.toFixed(2);
}



// // Event listener for submitting the order
// const submitOrderButton = document.querySelector("#submit-order");
// submitOrderButton.addEventListener("click", () => {
//     // Get billing information
//     const name = document.querySelector("#name").value;
//     const email = document.querySelector("#email").value;
//     const phone = document.querySelector("#phone").value;
//     const address = document.querySelector("#address").value;

//     // Validate billing information
//     if (!name || !email || !phone || !address) {
//         alert("Please fill out all billing information.");
//         return;
//     }

//     // Display the order summary
//     const orderSummaryList = document.querySelector("#order-summary-list");
//     orderSummaryList.innerHTML = "";
//     const product = document.getElementById("");
//     menuItems.forEach(name => {
//         const orderItem = document.createElement("li");
//         orderItem.textContent = menuItems.name;
//         orderSummaryList.appendChild(orderItem);
//     });

//     // Calculate and display the total amount
//     calculateTotal();

//     // Hide the billing section and show the order summary
//     document.querySelector(".billing").style.display = "visible";
//     document.querySelector(".order-summary").style.display = "block";
// });






