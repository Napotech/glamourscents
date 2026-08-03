const cartContainer=document.getElementById("cartContainer");

const cartTotal=document.getElementById("cartTotal");

let cart=JSON.parse(localStorage.getItem("cart"))||[];

function renderCart(){

cartContainer.innerHTML="";

let total=0;

if(cart.length===0){

cartContainer.innerHTML=`

<div class="empty-cart">

<h2>Your cart is empty</h2>

<p>Browse our luxury perfume collection.</p>

<a href="index.html" class="btn">

Continue Shopping

</a>

</div>

`;

cartTotal.innerHTML="GH₵0.00";

return;

}

cart.forEach((item,index)=>{

const subtotal=item.price*item.quantity;

total+=subtotal;

cartContainer.innerHTML+=`

<div class="cart-item">

<img src="${item.image}">

<div class="cart-info">

<h3>${item.perfume}</h3>

<p>${item.category}</p>

<p>${item.size}</p>

</div>

<div class="cart-qty">

<button onclick="decrease(${index})">-</button>

<span>${item.quantity}</span>

<button onclick="increase(${index})">+</button>

</div>

<div class="cart-price">

GH₵${subtotal.toFixed(2)}

</div>

<button class="remove-btn"

onclick="removeItem(${index})">

<i class="fas fa-trash"></i>

</button>

</div>

`;

});

cartTotal.innerHTML="GH₵"+total.toFixed(2);

localStorage.setItem(

"cart",

JSON.stringify(cart)

);

updateCartBadge();

}

function increase(index){

cart[index].quantity++;

renderCart();

}

function decrease(index){

if(cart[index].quantity>1){

cart[index].quantity--;

}

renderCart();

}

function removeItem(index){

cart.splice(index,1);

renderCart();

}

renderCart();

document.getElementById("checkoutBtn")

.onclick=()=>{

alert(

"Checkout page coming soon."

);

};