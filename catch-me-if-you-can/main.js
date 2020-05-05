const ghost = document.querySelector('.ghost');
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

// 버그 아이콘 랜덤 이동
const movingGhost = () => {
  let left = getLeft();
  let top = getTop();
  ghost.style.display = 'inline-block';
  ghost.style.position = 'absolute';
  ghost.style.left = left + 'vw';
  ghost.style.top = top + 'vh';
};

// 알림창 클릭으로 시작
start.addEventListener('click', (e) => {
  let target = e.target.parentNode.parentNode;
  target.remove();
  setInterval(movingGhost, 1000);
});


// 클릭당 10점 점수 기록
let count = 0;
ghost.addEventListener('click', () => {
    count += 10;
    score.innerText = count;
    stageLevel();
    return;
});

// 엉뚱한 곳을 클릭 시 감점
document.querySelector('html').addEventListener('click', (e) => {
  let target = e.target.classList.value;
  if (target !== 'fas fa-ghost') {
    count = 0;
    score.innerText = count;
    stageLevel();
  }
  return;
});

// 점수에 따른 감탄사
const stageLevel = () => {
  let currentScore = parseInt(score.innerText);
  if (currentScore < 100) {
    level.innerText = 'NOT BAD';
  } else if (currentScore >= 100 && currentScore < 200) {
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
