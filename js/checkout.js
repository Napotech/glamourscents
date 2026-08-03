const button = document.getElementById("placeOrder");

button.addEventListener("click", () => {

const cart =
JSON.parse(localStorage.getItem("cart")) || [];

if(cart.length===0){

alert("Your cart is empty.");

return;

}

const name =
document.getElementById("customerName").value;

const phone =
document.getElementById("customerPhone").value;

const address =
document.getElementById("customerAddress").value;

if(name==="" || phone===""){

alert("Please complete your details.");

return;

}

let total = 0;

let message =
`*GLAMOUR SCENTS ORDER*%0A%0A`;

message +=
`👤 Name: ${name}%0A`;

message +=
`📞 Phone: ${phone}%0A`;

message +=
`📍 Address: ${address}%0A%0A`;

message +=
`🛒 ORDER DETAILS%0A`;
message +=
`------------------------%0A`;

cart.forEach(item=>{

const subtotal =
item.price * item.quantity;

total += subtotal;

message += `• ${item.perfume}%0A`;

message +=
`  Size: ${item.size}%0A`;

message +=
`  Qty: ${item.quantity}%0A`;

message +=
`  GH₵${subtotal}%0A%0A`;

});

message +=
`------------------------%0A`;

message +=
`💰 TOTAL: GH₵${total}%0A%0A`;

message +=
`Momo:0598668923 | Ann-Marie Duncan...Thank!`;

const whatsappNumber =
"233243505452";   // Replace with YOUR number

window.open(

`https://wa.me/${whatsappNumber}?text=${message}`,

"_blank"

);

});