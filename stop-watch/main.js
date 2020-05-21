const control = document.querySelector('.control');
const display = document.querySelector('.display');
const resetBtn = document.querySelector('.reset');

let min = 0;
let sec = 0;
let milSec = 0;

let interval = null;
let isStart = false;

const start = () => {
  isStart = true;
  interval = setInterval(() => {
    milSec += 1;
    if (milSec === 100) {
      sec += 1;
      milSec = 0;
    };
    if (sec === 60) {
      min += 1;
      sec = 0;
    };
    
    const showMin = min < 10 ? `0${min}` : min;
    const showSec = sec < 10 ? `0${sec}` : sec;
    const showMilSec = milSec < 10 ? `0${milSec}` : milSec;

    display.innerHTML = `${showMin}:${showSec}:${showMilSec}`;
  }, 10);
};

const stop = () => {
  isStart = false;
  clearInterval(interval);
};

const reset = () => {
  isStart = false;
  display.innerHTML = `0${min = 0}:0${sec = 0}:0${milSec = 0}`;
}

control.addEventListener('click', () => {
  if (isStart) {
    stop();
    control.innerHTML = 'START';
  } else {
    start();
    control.innerHTML = 'STOP';
  }
});

resetBtn.addEventListener('click', () => {
  reset();
});