const cat = document.querySelector('.cat');
const score = document.querySelector('.current-score');

// 랜덤 숫자 반환
const randomNum = function() {
  return Math.floor(Math.random() * 90);
};

const getLeft = function() {
  return randomNum();
}

const getTop = function() {
  return randomNum();
}

const movingCat = setInterval(() => {
  let left = getLeft();
  let top = getTop();
  cat.style.left = left + '%';
  cat.style.top = top + '%';
}, 1000);

let count = 0;
cat.addEventListener('click', () => {
  count += 10;
  score.innerHTML = count;
});

