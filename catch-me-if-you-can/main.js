const cat = document.querySelector('.cat');
const score = document.querySelector('.current-score');
const level = document.querySelector('.current-level');
const start = document.querySelector('.click-to-start');

// 랜덤 숫자 반환
const randomNum = () => {
  return Math.floor(Math.random() * 90);
};

// left 랜덤 값
const getLeft = () => {
  return randomNum();
}

// top 랜덤 값
const getTop = () => {
  return randomNum();
};

// 고양이 아이콘 랜덤 이동
const movingCat = () => {
  let left = getLeft();
  let top = getTop();
  cat.style.left = left + '%';
  cat.style.top = top + '%';
};

// const easyLevel = setInterval(() => {
//   movingCat();
// }, 1000);


start.addEventListener('click', (e) => {
  let target = e.target.parentNode.parentNode;
  target.style.display = 'none';
  setInterval(movingCat, 1000);
});

// 클릭당 10점 점수 기록
let count = 0;
cat.addEventListener('click', () => {
  count += 10;
  score.innerHTML = count;
  stageLevel();
  return;
});

// 점수에 따른 레벨 변경
const stageLevel = () => {
  let currentScore = parseInt(score.innerText);
  if (currentScore >= 100 && currentScore < 200) {
    level.innerText = 'COOL';
  } else if (currentScore >= 200 && currentScore < 300) {
    level.innerText = 'GOOD!';
  } else if (currentScore >= 300 && currentScore < 500) {
    level.innerText = 'GREAT!!';
  } else if (currentScore >= 500) {
    level.innerText = 'EXCELLENT!!!'
  }
  return;
};

