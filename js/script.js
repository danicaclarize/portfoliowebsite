// ---------------Toggle Icon for navigation bar---------------//
// Step 1: Find the elements
var menuIcon = document.querySelector('#menu-icon'); // Find the element with the id 'menu-icon'
var navbar = document.querySelector('.nav-menu'); // Find the element with the class 'nav-menu'

// Step 2: Write the behavior
menuIcon.onclick = () =>{ // Add a click event listener to the menuIcon element
  menuIcon.classList.toggle('bx-x'); // Toggle the class 'bx-x' on the menuIcon element
  navbar.classList.toggle('active'); // Toggle the class 'active' on the navbar element
};

// Scroll Section Active Link
var sections = document.querySelectorAll('section'); // Find all the elements with the tag 'section'
var navLinks = document.querySelectorAll('header nav a'); // Find all the 'a' elements inside 'nav' element under 'header' element

// Step 3: Link the elements
window.onscroll = () => { // Add a scroll event listener to the window
  sections.forEach(sec => { // Loop through each section element
    var top = window.scrollY; // Get the current vertical scroll position
    var offset = sec.offsetTop - 150; // Get the top offset of the section element minus 150 pixels
    var height = sec.offsetHeight; // Get the height of the section element
    var id = sec.getAttribute('id'); // Get the value of the 'id' attribute of the section element

    if(top >= offset && top < offset + height) { // Check if the current scroll position is within the section element

      navLinks.forEach(links => { // Loop through each nav link element
        links.classList.remove('active'); // Remove the class 'active' from all nav link elements
        document.querySelector('header nav a[href*=' + id + ']').classList.add('active'); // Add the class 'active' to the nav link element that matches the 'id' of the current section element
      });

    };
  });
};




// ---------------Toggle Icon for navigation bar---------------//
// Step 1: Find the element

const typewriterElement = document.getElementById("typewriter"); // Get the typewriter element

// Step 2: Write the behavior 
const textArray = ["Danica Yap"]; // Text to be typed
const typingSpeed = 100; // Speed of typing in milliseconds
const backspacingSpeed = 100; // Speed of backspacing in milliseconds
const delayBetweenTexts = 1000; // Delay between texts in milliseconds

let textIndex = 0; // Index of current text
let charIndex = 0; // Index of current character
let isTyping = true; // Flag to determine if typing or backspacing

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

