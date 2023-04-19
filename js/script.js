// toggle icon navbar
var menuIcon = document.querySelector('#menu-icon');
var navbar = document.querySelector('.nav-menu');

menuIcon.onclick = () =>{
menuIcon.classList.toggle('bx-x');
navbar.classList.toggle('active');
};