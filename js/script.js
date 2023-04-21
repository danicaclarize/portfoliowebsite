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

// Typewriter Effect (Chat GPT 2023, input "can you write me typewriter Java script")

// JavaScript
const textArray = ["Welcome", "to", "my", "website!"]; // Array of text to be typed
const typingSpeed = 100; // Speed of typing in milliseconds
const backspacingSpeed = 50; // Speed of backspacing in milliseconds
const delayBetweenTexts = 1000; // Delay between texts in milliseconds

let textIndex = 0; // Index of current text
let charIndex = 0; // Index of current character
let isTyping = true; // Flag to determine if typing or backspacing

const typewriterElement = document.getElementById("typewriter"); // Get the typewriter element

// Function to start the typewriter effect
function startTypewriter() {
  if (textIndex < textArray.length) {
    if (isTyping) {
      typewriterElement.textContent += textArray[textIndex][charIndex];
      charIndex++;
      if (charIndex === textArray[textIndex].length) {
        isTyping = false;
        setTimeout(startTypewriter, delayBetweenTexts);
      } else {
        setTimeout(startTypewriter, typingSpeed);
      }
    } else {
      typewriterElement.textContent = typewriterElement.textContent.slice(0, -1);
      charIndex--;
      if (charIndex === 0) {
        isTyping = true;
        textIndex++;
      }
      setTimeout(startTypewriter, backspacingSpeed);
    }
  }
}

// Start the typewriter effect
startTypewriter();
