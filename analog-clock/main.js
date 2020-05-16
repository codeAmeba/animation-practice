const digitalClock = document.querySelector('.digital-clock');
const hourHand = document.querySelector('.hour');
const minHand = document.querySelector('.minute');
const secHand = document.querySelector('.second');

const now = new Date();

const myClock = () => {
  let hour = now.getHours();
  let min = now.getMinutes();
  let sec = now.getSeconds();

  setInterval(() => {
    sec += 1;
    if (sec === 60) {
      min += 1;
      sec = 0;
    } else if (min === 60) {
      hour += 1;
      min = 0;
    } else if (hour === 24) {
      hour = 0;
    }

    // digital clock view
    const showHour = hour < 10 ? `0${hour}` : hour;
    const showMin = min < 10 ? `0${min}` : min;
    const showSec = sec < 10 ? `0${sec}` : sec;
    digitalClock.innerHTML = `${showHour} : ${showMin} : ${showSec}`;

    // modifiy analog clock view
    hourHand.style.transform = `rotate(${(hour % 12) * 30}deg)`;
    minHand.style.transform = `rotate(${min * 6}deg)`;
    secHand.style.transform = `rotate(${sec * 6}deg)`;
  }, 1000);
};

const init = () => {
  myClock();
};

init();

