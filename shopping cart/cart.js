let addCart = document.getElementById("addtoCart");
let showCart = document.getElementById("showCart");
let product = [
    { Id: 1, item: "Shirt", price: 400 },
    { Id: 2, item: "trousers", price: 600 }
];

let productList = [];


product.forEach(product => {
    const div = document.createElement("div");
    div.className = "item";
    div.innerHTML = `
        ${product.item} - ${product.price}
        <button onclick="addtoCart(${product.Id})">Add to cart</button>
    `;
    addCart.appendChild(div);
});


function addtoCart(productId) {
    const pro = product.find(p => p.Id === productId);
    const cartItem = productList.find(item => item.Id === productId);
    if (cartItem) {
        cartItem.quantity += 1; 
    } else {
        productList.push({ ...pro, quantity: 1 });
    }
    updateCart();
}


function removeFromCart(productId) {
    const index = productList.findIndex(item => item.Id === productId);
    if (index !== -1) {
        if (productList[index].quantity > 1) {
            productList[index].quantity -= 1;
        } else {
            productList.slice(index, 1);
            console.log(productList)
        }
    }
    updateCart();
}


function deleteFromCart(productId) {
    const index = productList.findIndex(item => item.Id === productId);
    if (index !== -1) {
        productList.splice(index, 1);
    }
    updateCart();
}


function updateCart() {
    const cartItems = document.getElementById("cart-items");
    const cartTotal = document.getElementById("cart-total");
    cartItems.innerHTML = "";
    let total = 0;

    productList.forEach(item => {
        const li = document.createElement("li");
        li.className = "item";
        li.innerHTML = `
            ${item.item} - ₹${item.price} (Qty: ${item.quantity})
            <button onclick="addtoCart(${item.Id})">+</button>
            <button onclick="removeFromCart(${item.Id})">-</button>
            <button onclick="deleteFromCart(${item.Id})">Remove All</button>
        `;
        cartItems.appendChild(li);
        total += item.price * item.quantity;
    });
    cartTotal.textContent = total;
}