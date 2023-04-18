const textDisplay = document.getElementById('text')
const phrases = ['Danica Carlos',   
I'm a final year student pursuing, 
'Bachelor of Commerce degree', 'with double major in IT and IS']
let i = 0
let j = 0
let currentPhrase =[]
let usEnd = false

//Write the behaviour
//nested loop
function loop () {
    textDisplay.innerHTML = currentPhrase.join('')

    if (i < phrases.length) {
    }
        if (!isDeleting && j <= phrases[i].lenght)
        currentPhrase.push(phrases [i][j])
         {
        
        }
        if (isDeleting && j <= phrases[i].lenght)
        currentPhrase.pop(phrases [i][j])
        {

        }
        if (j == phrases [i].length) {
            isDeleting = true
        }
        //move on to the next letter
        if (j===0) {
            currentPhrase = []
            isDeleting = false // no longer deleting
            i++ 
        }
}
setTimeout(loop, 500)

loop()