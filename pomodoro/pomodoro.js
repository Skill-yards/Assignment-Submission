let workDuration = 25 * 60;
let breakDuration = 5 * 60; 
let timer;
let timeLeft = workDuration;
let isRunning = false;
let isWorkSession = true;

const sessionTypeElem = document.getElementById('sessionType');
const showTimerElem = document.getElementById('showTimer');
const playPauseBtn = document.getElementById('playPause');
const resetBtn = document.getElementById('reset');

function updateDisplay() {
    let minutes = Math.floor(timeLeft / 60);
    let seconds = timeLeft % 60;
    showTimerElem.textContent = 
        `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
    sessionTypeElem.textContent = isWorkSession ? "Work" : "Break";
}

function startTimer() {
    if (isRunning) return;
    isRunning = true;
    playPauseBtn.textContent = "pause";
    timer = setInterval(() => {
        if (timeLeft > 0) {
            timeLeft--;
            updateDisplay();
        } else {
            clearInterval(timer);
            isWorkSession = !isWorkSession;
            timeLeft = isWorkSession ? workDuration : breakDuration;
            updateDisplay();
            startTimer();
        }
    }, 1000);
}

function pauseTimer() {
    isRunning = false;
    playPauseBtn.textContent = "start";
    clearInterval(timer);
}

playPauseBtn.addEventListener('click', function() {
    if (!isRunning) {
        startTimer();
    } else {
        pauseTimer();
    }
});

resetBtn.addEventListener('click', function() {
    isWorkSession = true;
    timeLeft = workDuration;
    pauseTimer();
    updateDisplay();
});

updateDisplay(); 