let startTime = 0;
let running = false;
let timerInterval;

const hoursDisplay = document.getElementById('hours');
const minutesDisplay = document.getElementById('minutes');
const secondsDisplay = document.getElementById('seconds');
const millisecondsDisplay = document.getElementById('milliseconds');

const startButton = document.getElementById('start');
const stopButton = document.getElementById('stop');
const resetButton = document.getElementById('reset');

startButton.addEventListener('click', start);
stopButton.addEventListener('click', stop);
resetButton.addEventListener('click', reset);


function start() {
    if (!running) {
        startTime = Date.now() - (startTime || 0); // Correction: utiliser || au lieu de >
        timerInterval = setInterval(updateDisplay, 10);
        running = true;
        startButton.textContent = "Pause";
    } else {
        stop();
    }
}

function stop() {
    if (running) {
        clearInterval(timerInterval);
        running = false;
        startButton.textContent = "Start";
    }
}

function reset() {
    stop();
    startTime = 0;
    updateDisplay();
    startButton.textContent = "Start";
}

function updateDisplay() {
    const elapsedTime = Date.now() - startTime;

    const milliseconds = Math.floor((elapsedTime % 1000) / 10);
    const seconds = Math.floor((elapsedTime / 1000) % 60);
    const minutes = Math.floor((elapsedTime / (1000 * 60)) % 60);
    const hours = Math.floor((elapsedTime / (1000 * 60 * 60)) % 24);

    millisecondsDisplay.textContent = `${milliseconds} ms`;
    secondsDisplay.textContent = `${seconds} s`;
    minutesDisplay.textContent = `${minutes} min`;
    hoursDisplay.textContent = `${hours} h`;
}