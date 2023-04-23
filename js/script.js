// ---------------Toggle Icon for navigation bar---------------//
// Step 1: Find the elements
var menuIcon = document.querySelector('#menu-icon'); // Find the element with the id 'menu-icon'
var navbar = document.querySelector('.nav-menu'); // Find the element with the class 'nav-menu'

// Step 2: Write the behavior
menuIcon.onclick = () =>{ // Add a click event listener to the menuIcon element
  menuIcon.classList.toggle('bx-x'); // Toggle the class 'bx-x' on the menuIcon element
  navbar.classList.toggle('active'); // Toggle the class 'active' on the navbar element
};




// ---------------Typewriter Effect---------------//


// Step 1: Find the element
var typewriterElement = document.getElementById("typewriter"); // Get the typewriter element

// Step 2: Write the behavior 
var textArray = ["Danica Yap"]; // Text to be typed
var typingSpeed = 100; // Speed of typing in milliseconds
var backspacingSpeed = 100; // Speed of backspacing in milliseconds
var delayBetweenTexts = 1000; // Delay between texts in milliseconds

var textIndex = 0; // Index of current text
var charIndex = 0; // Index of current character
var isTyping = true; // Flag to determine if typing or backspacing



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
  } else {
    // Reset the textIndex to 0 to implement loop
    textIndex = 0;
    // Restart the typewriter effect after a delay
    setTimeout(startTypewriter, delayBetweenTexts);
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

