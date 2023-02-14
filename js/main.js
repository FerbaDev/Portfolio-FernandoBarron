//typewrite effect
const textDisplay = document.getElementById('holamundo')
const phrases = ['Hola mundo!', 'Soy Fernando Barron.', 'Y soy desarrollador web.']
let i = 0
let j = 0 
let currentPhrase = []
let isDeleting = false
let isEnd = false

function loop () {
    isEnd = false
    textDisplay.innerHTML = currentPhrase.join('')

    if (i < phrases.length) {

    if (!isDeleting && j <= phrases[i].length) {
        currentPhrase.push(phrases[i][j])
        j++
        textDisplay.innerHTML = currentPhrase.join('')
    }

    if(isDeleting && j <= phrases[i].length) {
        currentPhrase.pop(phrases[i][j])
        j--
        textDisplay.innerHTML = currentPhrase.join('')
    }

    if (j == phrases[i].length) {
        isEnd = true
        isDeleting = true
    }

    if (isDeleting && j === 0) {
        currentPhrase = []
        isDeleting = false
        i++
        if (i === phrases.length) {
        i = 0
        }
    }
    }
    const spedUp = Math.random() * (80 -50) + 50
    const normalSpeed = Math.random() * (300 -200) + 200
    const time = isEnd ? 2000 : isDeleting ? spedUp : normalSpeed
    setTimeout(loop, time)
}

loop()









//empieza funcion de mas info
const continuar1 = "Te invito a pasar mi porfolio en GitHub!";
const cancelar1 = "Gracias por pasar!"
function continuarsi() {
    document.getElementById('id-info').innerHTML = continuar1;
}
function continuarno() {
    document.getElementById('id-info').innerHTML = cancelar1;
}

