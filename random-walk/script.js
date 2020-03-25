function* randomWalk(c, x0, y0, d) {
  const dx = [1, 0, -1, 0], dy = [0, 1, 0, -1];
  let x = x0;
  let y = y0;
  c.strokeStyle = 'deeppink';
  c.globalAlpha = 0.25;
  while (true) {
    yield;
    c.beginPath();
    c.moveTo(x, y);
    let dir = Math.floor(Math.random() * 4);
    x += d*dx[dir];
    y += d*dy[dir];
    c.lineTo(x,y);
    c.stroke();
  }
}
window.onload = function() {
  const canvas = document.querySelector('.mycanvas');
  const ctx = canvas.getContext('2d');
  const iter = randomWalk(ctx, 300, 300, 4, 'deeppink');
  setInterval(() => { iter.next(); }, 10);
};