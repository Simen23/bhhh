function getRandomNumber(min, max) {
    return Math.floor((Math.random() * (max - min)) + min)
}

alert(getRandomNumber(0, 10))

function randomColor() {
    let red = getRandomNumber (0, 256)
    let green = getRandomNumber (0, 256)
    let blue = getRandomNumber (0, 256)
    document.getElementById('body').style.background = `rgb(${red}, ${green}, ${blue})`
}