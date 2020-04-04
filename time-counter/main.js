let targetTime;
let startTime;

function setCounter() {
  targetTime = new Date();
  startTime = targetTime;
  let newValue = document.querySelector('.input-timer').value;
  newValue = newValue.split(':');

  let hours = targetTime.getHours() + Number(newValue[0]);
  let minutes = targetTime.getMinutes() + Number(newValue[1]);

  targetTime.setHours(hours);
  targetTime.setMinutes(minutes);

  updateTimer(null);

  let i = setInterval(() => {
    updateTimer(i);
  }, 1000);
}

const updateTimer = i => {
  let targetCountdown = targetTime.getTime();
  let now = new Date().getTime();
  let distance = targetCountdown - now;

  let hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  let seconds = Math.floor((distance % (1000 * 60)) / 1000);

  let output;
  if (hours < 10) {
    output = '0' + hours + ':';
  } else {
    output = hours + ':';
  }

  if (minutes < 10) {
    output += '0' + minutes + ':';
  } else {
    output += minutes + ':';
  }

  if (seconds < 10) {
    output += '0' + seconds;
  } else {
    output += seconds;
  }

  document.querySelector('.timer').innerHTML = output;

  if (distance < 0) {
    clearInterval(i);
    document.querySelector('.timer').innerHTML = 'Done';
  }
}