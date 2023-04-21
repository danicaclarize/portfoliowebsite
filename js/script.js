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




// ---------------Download CV ---------------//

// Find the element
const downloadLink = document.getElementById('download-link'); // Get the download link element


// Write the behaviour
downloadLink.addEventListener('click', (event) => {
  event.preventDefault(); // Prevent default link behavior
  const fileURL = downloadLink.getAttribute('href'); // Get the file URL from the link's href attribute
  const fileName = downloadLink.getAttribute('download'); // Get the file name from the link's download attribute
  
  // Create a new anchor element to trigger the download
  const link = document.createElement('a');
  link.href = danicaclarize/portfoliowebsite/CV-Danica_Yap.pdf;
  link.download = CV-Danica_Yap;
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
});

