let timer;
let isRunning = false;
let elapsedTime = 0;
let lapTimes = [];

const timeDisplay = document.getElementById('time');
const startButton = document.getElementById('start');
const pauseButton = document.getElementById('pause');
const resetButton = document.getElementById('reset');
const lapButton = document.getElementById('lap');
const lapsContainer = document.getElementById('laps');

startButton.addEventListener('click', () => {
    if (!isRunning) {
        isRunning = true;
        timer = setInterval(updateTime, 1000);
    }
});

pauseButton.addEventListener('click', () => {
    if (isRunning) {
        isRunning = false;
        clearInterval(timer);
    }
});

resetButton.addEventListener('click', () => {
    isRunning = false;
    clearInterval(timer);
    elapsedTime = 0;
    lapTimes = [];
    updateDisplay();
    lapsContainer.innerHTML = '';
});

lapButton.addEventListener('click', () => {
    if (isRunning) {
        lapTimes.push(elapsedTime);
        updateLaps();
    }
});

function updateTime() {
    elapsedTime++;
    updateDisplay();
}

function updateDisplay() {
    let hours = Math.floor(elapsedTime / 3600);
    let minutes = Math.floor((elapsedTime % 3600) / 60);
    let seconds = elapsedTime % 60;

    hours = hours < 10 ? '0' + hours : hours;
    minutes = minutes < 10 ? '0' + minutes : minutes;
    seconds = seconds < 10 ? '0' + seconds : seconds;

    timeDisplay.textContent = `${hours}:${minutes}:${seconds}`;
}

function updateLaps() {
    const lapElement = document.createElement('li');
    let lapTime = lapTimes[lapTimes.length - 1];
    let hours = Math.floor(lapTime / 3600);
    let minutes = Math.floor((lapTime % 3600) / 60);
    let seconds = lapTime % 60;

    hours = hours < 10 ? '0' + hours : hours;
    minutes = minutes < 10 ? '0' + minutes : minutes;
    seconds = seconds < 10 ? '0' + seconds : seconds;

    lapElement.textContent = `Lap ${lapTimes.length}: ${hours}:${minutes}:${seconds}`;
    lapsContainer.appendChild(lapElement);
}
