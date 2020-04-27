const circle = document.querySelector('.circle-object');

// move anywhere
const move = (e) => {
  circle.style.top = e.clientY + 'px';
  circle.style.left = e.clientX + 'px';
};

// mouse click and hold
circle.addEventListener('mousedown', () => {
  window.addEventListener('mousemove', move);
  circle.style.transition = 'none';
});

// mouse release
circle.addEventListener('mouseup', (e) => {
  window.removeEventListener('mousemove', move);
  snapToSide(e);
  circle.style.transition = `0.3s ease-in-out left`;
});

// snapping function
const snapToSide = (e) => {
  const windowWidth = window.innerWidth;
  const currentPosition = e.clientX;
  
  if (currentPosition < windowWidth / 2) {
    circle.style.left = 10 + 'px';
  } else {
    circle.style.left = windowWidth - 10 + 'px';
  }
};