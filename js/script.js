// Header toggle
//Step 1: Create a link to the element
var MenuBtn = document.getElementById('menu-icon')

// Step 2 : Write the Behaviour


MenuBtn.addEventListener('click', function(e) {
    document.querySelector('body').classList.toggle('mobile-nav-active');
    this.classList.toggle()
}

