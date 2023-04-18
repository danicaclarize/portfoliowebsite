var changeCursor = document.createElement('div'); //creating a new div element to be used as custom curson
cursor.className = 'cursor';
document.body.appendChild(cursor); // appends the element to CSS cursor element to the DOM tree

const typewriter = document.getElementById('typewriter');
var index = 0;


// Write the behaviou
function typeWriter() {
  if (index < text.length) {
    typewriter.textContent += text.charAt(index);
    index++;
    setTimeout(typeWriter, 150);
  }
}

// Link the handler
typeWriter();
cursor.style.backgroundImage = 'url("https://custom-cursor.com/thumbnail/cursor/thumbnail20333.png")';
