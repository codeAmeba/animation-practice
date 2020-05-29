const textArea = document.querySelector('.text-area');
const calcBtn = document.querySelectorAll('.btn');

const clearBtn = document.querySelector('.clear');
const resultBtn = document.querySelector('.result');
const plusBtn =  document.querySelector('.plus');

let beforeNumbers = 0;
let afterNumbers = 0;
let totalBeforeNumbers = 0;

// 클릭한 숫자 표시
calcBtn.forEach((value) => {
  value.addEventListener('click', (e) => {
    console.log(e.target);
    textArea.innerText += e.target.value;
  });
});

// clear 버튼 활성화
clearBtn.addEventListener('click', () => {
  textArea.innerText = '';
  beforeNumbers = 0;
});

// plus 버튼 활성화
plusBtn.addEventListener('click', () => {
  beforeNumbers = parseInt(textArea.innerText);
  textArea.innerText = '';
  return;
});

// result 버튼 활성화(미완성)
resultBtn.addEventListener('click', () => {
  afterNumbers = parseInt(textArea.innerText);
  textArea.innerText = beforeNumbers + afterNumbers;
  return;
});

