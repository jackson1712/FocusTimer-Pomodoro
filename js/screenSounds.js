export default function Sounds ({
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
}) {

function soundOff(soundOne, soundTwo, soundThree) {
        soundOne.pause()
        soundTwo.pause()
        soundThree.pause()
}
    
function soundClickForest () {
        soundOff(AudioCoffeShopClick, AudioRainClick, AudioFireplaceClick)
        AudioForestClick.play()
        AudioForestClick.loop = true
}
    
function soundClickRain() {
        soundOff(AudioCoffeShopClick, AudioForestClick, AudioFireplaceClick)
        AudioRainClick.play()
        AudioRainClick.loop = true
}

function soundClickFireplace() {
        soundOff(AudioCoffeShopClick, AudioForestClick, AudioRainClick)
        AudioFireplaceClick.play()
        AudioFireplaceClick.loop = true
}
    
function soundClickCoffeShop() {
        soundOff(AudioRainClick, AudioForestClick, AudioFireplaceClick)
        AudioCoffeShopClick.play()
        AudioCoffeShopClick.loop = true
}

function forest() {
    buttonForest.classList.add('hide')
    buttonClickForest.classList.remove('hide')
    buttonRain.classList.remove('hide')
    buttonClickRain.classList.add('hide')
    buttonCoffeShop.classList.remove('hide')
    buttonClickCoffeShop.classList.add('hide')
    buttonFireplace.classList.remove('hide')
    buttonClickFireplace.classList.add('hide')
    imgForest.classList.remove('hide')
    imgRain.classList.add('hide')
    imgCoffeShop.classList.add('hide')
    imgFireplace.classList.add('hide')
    soundClickForest()
}

function rain() {
    buttonRain.classList.add('hide')
    buttonClickRain.classList.remove('hide')
    buttonForest.classList.remove('hide')
    buttonClickForest.classList.add('hide')
    buttonCoffeShop.classList.remove('hide')
    buttonClickCoffeShop.classList.add('hide')
    buttonFireplace.classList.remove('hide')
    buttonClickFireplace.classList.add('hide')
    imgForest.classList.add('hide')
    imgRain.classList.remove('hide')
    imgCoffeShop.classList.add('hide')
    imgFireplace.classList.add('hide')
    soundClickRain()
}

function coffeShop() {
    buttonCoffeShop.classList.add('hide')
    buttonClickCoffeShop.classList.remove('hide')
    buttonForest.classList.remove('hide')
    buttonClickForest.classList.add('hide')
    buttonRain.classList.remove('hide')
    buttonClickRain.classList.add('hide')
    buttonFireplace.classList.remove('hide')
    buttonClickFireplace.classList.add('hide')
    imgForest.classList.add('hide')
    imgRain.classList.add('hide')
    imgCoffeShop.classList.remove('hide')
    imgFireplace.classList.add('hide')
    soundClickCoffeShop()
}

function fireplace() {
    buttonFireplace.classList.add('hide')
    buttonClickFireplace.classList.remove('hide')
    buttonCoffeShop.classList.remove('hide')
    buttonClickCoffeShop.classList.add('hide')
    buttonForest.classList.remove('hide')
    buttonClickForest.classList.add('hide')
    buttonRain.classList.remove('hide')
    buttonClickRain.classList.add('hide')
    imgForest.classList.add('hide')
    imgRain.classList.add('hide')
    imgCoffeShop.classList.add('hide')
    imgFireplace.classList.remove('hide')
    soundClickFireplace()
}
    return {
        soundOff,
        soundClickCoffeShop,
        soundClickFireplace,
        soundClickForest,
        soundClickRain,
        forest,
        coffeShop,
        fireplace,
        rain,
    }

}

    
