/*====================================
GLAMOUR SCENTS APP.JS
====================================*/

// Read category from URL
const params = new URLSearchParams(window.location.search);

const category = params.get("category") || "men";

// HTML Elements

const perfumeSelect = document.getElementById("perfumeSelect");
const sizeSelect = document.getElementById("sizeSelect");

const perfumeName = document.getElementById("perfumeName");

const categoryTitle = document.getElementById("categoryTitle");

const bottleImage = document.getElementById("bottleImage");

const productPrice = document.getElementById("productPrice");

const sizeCards = document.getElementById("sizeCards");

const quantityInput = document.getElementById("quantity");

const plusBtn = document.getElementById("plusBtn");

const minusBtn = document.getElementById("minusBtn");

const addCartBtn = document.getElementById("addCartBtn");


// Set page title

switch(category){

case "men":
categoryTitle.innerHTML="For Him";
break;

case "women":
categoryTitle.innerHTML="For Her";
break;

case "unisex":
categoryTitle.innerHTML="Unisex";
break;

}


// Load perfumes

perfumeDatabase[category].forEach(perfume=>{

const option=document.createElement("option");

option.value=perfume;

option.textContent=perfume;

perfumeSelect.appendChild(option);

});


// Default bottle image

bottleImage.src=bottleImages["10ml"];


// Default price

productPrice.innerHTML="GH₵"+bottlePrices["10ml"];


// Generate bottle cards

bottleSizes.forEach(size=>{

const card=document.createElement("div");

card.className="size-card";

card.innerHTML=`

<img src="${bottleImages[size]}">

<h3>${size}</h3>

<p>GH₵${bottlePrices[size]}</p>

`;

card.onclick=()=>{

sizeSelect.value=size;

updateProduct();

};

sizeCards.appendChild(card);

});


// Update Product

function updateProduct(){

const perfume=perfumeSelect.value;

const size=sizeSelect.value;

if(perfume!=""){

perfumeName.innerHTML=perfume;

}

if(size!=""){

bottleImage.src=bottleImages[size];

productPrice.innerHTML="$"+bottlePrices[size];

}

}


// Events

perfumeSelect.addEventListener(

"change",

updateProduct

);

sizeSelect.addEventListener(

"change",

updateProduct

);


// Quantity

plusBtn.onclick=()=>{

quantityInput.value=parseInt(quantityInput.value)+1;

};

minusBtn.onclick=()=>{

if(quantityInput.value>1){

quantityInput.value=parseInt(quantityInput.value)-1;

}

};


// Add To Cart

addCartBtn.onclick=()=>{

if(perfumeSelect.value==""){

alert("Please select a perfume.");

return;

}

if(sizeSelect.value==""){

alert("Please select a bottle size.");

return;

}

const item={

category:category,

perfume:perfumeSelect.value,

size:sizeSelect.value,

price:bottlePrices[sizeSelect.value],

image:bottleImages[sizeSelect.value],

quantity:parseInt(quantityInput.value)

};

let cart=JSON.parse(

localStorage.getItem("cart")

)||[];


// Check if already exists

const existing=cart.find(

p=>

p.perfume===item.perfume &&

p.size===item.size

);

if(existing){

existing.quantity+=item.quantity;

}else{

cart.push(item);

}


localStorage.setItem(

"cart",

JSON.stringify(cart)

);

updateCartBadge();

alert("Added to cart!");

};


// Cart Badge

function updateCartBadge(){

const cart=JSON.parse(

localStorage.getItem("cart")

)||[];

let total=0;

cart.forEach(item=>{

total+=item.quantity;

});

const badge=document.getElementById("cartCount");

if(badge){

badge.innerHTML=total;

}

}

updateCartBadge();