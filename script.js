// DOM Elements 

const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.navLinks');


let hamburgericon1 = document.getElementById('top');
let hamburgericon2 = document.getElementById('center');
let hamburgericon3 = document.getElementById('bottom');
hamburger.addEventListener("click" , ()=> {
    navLinks.classList.toggle('navLinksActive');
    hamburger.children[0].classList.toggle('toggle1');
    hamburger.children[1].classList.toggle('toggle2');
    hamburger.children[2].classList.toggle('toggle3');
})