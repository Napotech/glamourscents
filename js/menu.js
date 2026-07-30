/*=====================================
GLAMOUR SCENTS
MENU.JS
======================================*/

const menuBtn = document.querySelector(".menu-btn");

const sidebar = document.querySelector(".sidebar");

const closeBtn = document.querySelector(".close");

const overlay = document.querySelector(".overlay");

function openMenu(){

    sidebar.classList.add("active");

    overlay.classList.add("active");

    document.body.style.overflow="hidden";

}

function closeMenu(){

    sidebar.classList.remove("active");

    overlay.classList.remove("active");

    document.body.style.overflow="auto";

}

menuBtn.addEventListener(

"click",

openMenu

);

closeBtn.addEventListener(

"click",

closeMenu

);

overlay.addEventListener(

"click",

closeMenu

);

// Close menu when a navigation link is clicked

document.querySelectorAll(".sidebar a").forEach(link=>{

    link.addEventListener("click",closeMenu);

});