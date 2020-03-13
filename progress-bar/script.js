const progressBar = document.querySelector('.progress-bar');
const progressLevel = document.querySelector('.progress-level');

const changeBgTo = color => (progressBar.style.background = color);

progressBar.addEventListener('input', () => {
  const value = progressBar.value;

  if (value < 50) {
    changeBgTo('#2cff7d');
  } else if (value >= 50 && value < 65) {
    changeBgTo('#C6FF2C');
  } else if (value >= 65 && value < 80) {
    changeBgTo('#FFAE2C');
  } else {
    changeBgTo('#FF2C2C');
  }

  progressLevel.innerText = value;
  progressLevel.style.opacity = 1;
  progressBar.style.boxShadow = '0 5px 15px rgba(255, 255, 255, 0.15)';
});

progressBar.addEventListener('change', () => {
  setTimeout(() => {
    progressLevel.style.opacity = 0;
    progressBar.style.boxShadow = '0 5px 15px rgba(255, 255, 255, 0)';
  }, 1000);
});