const featured = [
{
name:"Royal Oud",
price:160,
image:"https://images.pexels.com/photos/1961792/pexels-photo-1961792.jpeg"
},
{
name:"Velvet Rose",
price:140,
image:"https://images.pexels.com/photos/965989/pexels-photo-965989.jpeg"
},
{
name:"Midnight Noir",
price:180,
image:"https://images.pexels.com/photos/3059609/pexels-photo-3059609.jpeg"
},
{
name:"Golden Amber",
price:150,
image:"https://images.pexels.com/photos/4041392/pexels-photo-4041392.jpeg"
}
];

const arrivals = [
{
name:"Ocean Mist",
price:120,
image:"https://images.pexels.com/photos/3373726/pexels-photo-3373726.jpeg"
},
{
name:"White Musk",
price:145,
image:"https://images.pexels.com/photos/4041392/pexels-photo-4041392.jpeg"
},
{
name:"Black Orchid",
price:175,
image:"https://images.pexels.com/photos/1961792/pexels-photo-1961792.jpeg"
}
];

function renderProducts(list,id){

const container=document.getElementById(id);

list.forEach(product=>{

container.innerHTML+=`
<div class="product">
<img src="${product.image}" alt="">
<div class="product-info">
<h3>${product.name}</h3>
<p class="price">GH₵${product.price}</p>
</div>
</div>
`;

});

}

renderProducts(featured,"featuredProducts");
renderProducts(arrivals,"newProducts");