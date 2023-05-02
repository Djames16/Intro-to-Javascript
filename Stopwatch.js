let milliseconds = 0
let seconds = 0
let minutes = 0

let digits = document.getElementById('digits')

let startButton = document.getElementById('Start-btn')
let interval;

function start () {
    startButton.disabled = true

    interval = setInterval(function () {
        milliseconds = milliseconds + 10
        
        if(milliseconds >= 1000) {
            seconds = seconds + 1
            milliseconds = 0
        }
        if(seconds >= 60) {
            seconds = seconds + + 1
            minutes = 60 
        }
        console.log(seconds)
        console.log(milliseconds)
        console.log(minutes)

        digits.innerHTML = minutes + ':' + String(seconds).padStart(2,'0') + ":" + milliseconds
    },10)
}
function stop () {
    clearInterval(interval)
    startButton.disabled = false
}
function reset () {
    stop()

    seconds = 0
    milliseconds = 0
    minutes = 0
    digits.innerHTML = String(minutes).padStart(2,'0') + ':' + String(seconds).padStart(2,'0') + ":" + String(milliseconds).padStart(2,'0')
}