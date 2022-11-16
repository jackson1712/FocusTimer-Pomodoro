export default function Controls ({
    minutesDisplay,
    secondsDisplay,
    AudioFinish,
    stop
}) {

let timerTimeOut

function updateTimerDisplay (minutes, seconds) {
        minutesDisplay.textContent = String(minutes).padStart(2, '0')
        secondsDisplay.textContent = String(seconds).padStart(2, '0')
    }

function countdown () {
    timerTimeOut = setTimeout( function() {
        let seconds = String(secondsDisplay.textContent).padStart(2, '0')
        let minutes = String(minutesDisplay.textContent).padStart(2, '0')

         if(minutes <= 0 && seconds <= 0) {
            AudioFinish.play()
            stop()
            hold()
         }
         if(seconds <= 0){
            seconds = 60
            updateTimerDisplay(String(minutes -1).padStart(2, '0'), seconds)
        }
        secondsDisplay.textContent = String(seconds -1).padStart(2, '0')
        countdown()
    }
    , 1000)
}

function hold() {
    clearTimeout(timerTimeOut)
}

    return {
        countdown,
        updateTimerDisplay,
        hold,
    }
}