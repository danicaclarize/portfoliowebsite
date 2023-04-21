// toggle icon navbar
var menuIcon = document.querySelector('#menu-icon');
var navbar = document.querySelector('.nav-menu');

menuIcon.onclick = () =>{
menuIcon.classList.toggle('bx-x');
navbar.classList.toggle('active');
};



// Scroll Section Active Link
var sections = document.querySelectorAll('section');
var navLinks = document.querySelectorAll('header nav a');


window.onscroll = () => {
    sections.forEach(sec => {
        var top = window.scrollY;
        var offset = sec.offsetTop -150;
        var height = sec.offsetHeight;
        var id = sec.getAttribute('id');


        if(top >= offset && top < offset + height) {

            navLinks.forEach(links => {
                links.classList.remove('active');
                document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
            });

        };

    });
};

// Scroll Reveal

ScrollReveal({
    reset: true,
    distace:'80px',
    duration: 2000,
    delay: 200
});


ScrollReveal().reveal('.home-content, .heading', {origin:'top }');
ScrollReveal().reveal('.home-img, .portfolio-box, .contact form', {origin:'bottom'});

// Typewriter Effect

const typed = new Typed('.typewriter', {
    strings: ['Danica Carlos', 'Bcom in IT & IS Student'],
    typespeed: 100,
    backspeed: 100,
    backDelay: 1000,
    loop: true

});