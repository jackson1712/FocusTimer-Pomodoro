import Controls from "./controls.js"
import Sounds from "./screenSounds.js"

const buttonPlay = document.querySelector('.play')
const buttonStop = document.querySelector('.stop')
const buttonIncrease = document.querySelector('.increase')
const buttonDecrease = document.querySelector('.decrease')


const minutesDisplay = document.querySelector('.minutes')
const secondsDisplay = document.querySelector('.seconds')


const buttonForest = document.querySelector('.forest')
const buttonRain = document.querySelector('.rain')
const buttonCoffeShop = document.querySelector('.coffeShop')
const buttonFireplace = document.querySelector('.fireplace')

const buttonClickForest = document.querySelector('.clickForest')
const buttonClickRain = document.querySelector('.clickRain')
const buttonClickCoffeShop = document.querySelector('.clickCoffeShop')
const buttonClickFireplace = document.querySelector('.clickFireplace')

const imgForest = document.querySelector('.imgForest')
const imgRain = document.querySelector('.imgRain')
const imgCoffeShop = document.querySelector('.imgCoffeShop')
const imgFireplace = document.querySelector('.imgFireplace')

let AudioClick = new Audio("https://github.com/maykbrito/automatic-video-creator/blob/master/audios/button-press.wav?raw=true")
let AudioForestClick = new Audio("./assets/forest.wav")
let AudioRainClick = new Audio("./assets/rain.wav")
let AudioFireplaceClick = new Audio("./assets/fireplace.wav")
let AudioCoffeShopClick = new Audio("./assets/coffeShop.wav")
let AudioFinish = new Audio("./assets/finish.mp3")
let minutes = Number(minutesDisplay.textContent)


const controls = Controls({
    minutesDisplay,
    secondsDisplay,
    AudioFinish,
})

const sounds = Sounds({
    AudioCoffeShopClick,
    AudioFireplaceClick,
    AudioForestClick,
    AudioRainClick,
    buttonForest,
    buttonClickFireplace,
    buttonClickCoffeShop,
    buttonClickForest,
    buttonClickRain,
    buttonCoffeShop,
    buttonRain,
    buttonFireplace,
    imgCoffeShop,
    imgFireplace,
    imgForest,
    imgRain,
})

function stop() {
    screenInitial()
}

function screenInitial() {
    buttonForest.classList.remove('hide')
    buttonClickForest.classList.add('hide')
    buttonRain.classList.remove('hide')
    buttonClickRain.classList.add('hide')
    buttonCoffeShop.classList.remove('hide')
    buttonClickCoffeShop.classList.add('hide')
    buttonFireplace.classList.remove('hide')
    buttonClickFireplace.classList.add('hide')
    imgForest.classList.add('hide')
    imgRain.classList.add('hide')
    imgCoffeShop.classList.add('hide')
    imgFireplace.classList.add('hide')
    sounds.soundOff(AudioCoffeShopClick, AudioFireplaceClick, AudioForestClick)
    AudioRainClick.pause()
    controls.updateTimerDisplay(minutes, 0)
}  

buttonIncrease.addEventListener('click', function(){
    minutesDisplay.textContent = String(Number(minutesDisplay.textContent) + Number(5)).padStart(2, '0')
    AudioClick.play()
})

buttonDecrease.addEventListener('click', function() {
    minutesDisplay.textContent = String(Number(minutesDisplay.textContent) - Number(5)).padStart(2, '0')
    AudioClick.play()
})


buttonPlay.addEventListener('click', function() {
    controls.countdown()
    AudioClick.play()
})

buttonStop.addEventListener('click', function() {
    stop()
    AudioClick.play()
    controls.hold()
})


buttonForest.addEventListener('click',sounds.forest)

buttonRain.addEventListener('click',sounds.rain)

buttonCoffeShop.addEventListener('click' , sounds.coffeShop)

buttonFireplace.addEventListener('click', sounds.fireplace)