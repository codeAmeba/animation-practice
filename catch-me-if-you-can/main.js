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
  ghost.style.left = left + 'vw';
  ghost.style.top = top + 'vh';
};

// 알림창 클릭으로 시작
start.addEventListener('click', (e) => {
  const target = e.target.parentNode.parentNode;
  target.remove();
  ghost.style.display = 'inline-block';
  ghost.style.position = 'absolute';
  setInterval(movingGhost, 1000);
  timeLimit();
});


// 유령 클릭 시 10점, 엉뚱한 곳 클릭시 0점
document.querySelector('html').addEventListener('click', (e) => {
  const target = e.target.classList.value;
  if (target === 'fas fa-ghost') {
    count += 10;
    score.innerText = count;
  } else {
    count = 0;
    score.innerText = count;
  }
  stageLevel();
});

// 점수에 따른 감탄사 변경
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

// 제한 시간 카운트 다운
const timeLimit = () => {
  const time = document.querySelector('.time-limit');
  let count = 60;
  const countDown = setInterval(() => {
    count -= 1;
    time.innerText = count;
    if (count === 0) {
      clearInterval(countDown);
    }
  }, 1000);
};