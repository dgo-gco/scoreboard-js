let counterHome = document.getElementById('counter-home');
let counterGuest = document.getElementById('counter-guest');

let scoreboardHome = 0;
let scoreboardGuest = 0;

let winnerHome = document.getElementById('winning-home');
let winnerGuest = document.getElementById('winning-guest');

function add1Home() {
    scoreboardHome += 1;
    counterHome.textContent = scoreboardHome;
    showWinner();
}

function add2Home() {
    scoreboardHome += 2;
    counterHome.textContent = scoreboardHome;
    showWinner();
}

function add3Home() {
    scoreboardHome += 3;
    counterHome.textContent = scoreboardHome;
    showWinner();
}

function add1Guest() {
    scoreboardGuest += 1;
    counterGuest.textContent = scoreboardGuest;
    showWinner();
}

function add2Guest() {
    scoreboardGuest += 2;
    counterGuest.textContent = scoreboardGuest;
    showWinner();
}

function add3Guest() {
    scoreboardGuest += 3;
    counterGuest.textContent = scoreboardGuest;
    showWinner();
}

function newGame() {
    window.location.reload(true);
}

function showWinner() {
    if (scoreboardHome > scoreboardGuest) {
        winnerHome.style.color = 'white';
        winnerGuest.style.color = 'rgb(47, 47, 47)';
    } else if (scoreboardGuest > scoreboardHome) {
        winnerHome.style.color = 'rgb(47, 47, 47)';
        winnerGuest.style.color = 'white';
    } else {
        winnerHome.style.color = 'rgb(47, 47, 47)';
        winnerGuest.style.color = 'rgb(47, 47, 47)';
    }
}

let chrono = document.getElementById('chrono');
let resetButton = document.getElementById('reset-btn');
let startButton = document.getElementById('start-btn');
let pauseButton = document.getElementById('pause-btn');

let hours = 0;
let minutes = 0;
let seconds = 0;
let timeOut;
let itIsStopped = true;

const start = () => {
    if (itIsStopped) {
        itIsStopped = false;
        runTime();
    }
}

const pause = () => {
    if (!itIsStopped) {
        itIsStopped = true;
        clearTimeout(timeOut);
    }
}

const runTime = () => {
    if (itIsStopped) return;

    seconds = parseInt(seconds);
    minutes = parseInt(minutes);
    hours = parseInt(hours);

    seconds++;

    if (seconds == 60){
        minutes++;
        seconds = 0;
    }

    if(minutes == 60) {
        hours++;
        minutes = 0;
    }

    if(seconds < 10){
        seconds = '0' + seconds;
    }

    if(minutes < 10){
        minutes = '0' + minutes;
    }

    if(hours < 10){
         hours = '0' + hours;
     }

    chrono.textContent = `${hours}:${minutes}:${seconds}`;

    timeOut = setTimeout(runTime, 1000);
};

const reset = () => {
    chrono.textContent = "00:00:00";
    itIsStopped = true;
    hours = 0;
    minutes = 0;
    seconds = 0;
    clearTimeout(timeOut);
};


