const calcBtn = document.querySelectorAll('.btn');
const textArea = document.querySelector('.text-area');

// 클릭한 숫자 표시
calcBtn.forEach((value) => {
  value.addEventListener('click', (e) => {
    console.log(e.target);
    textArea.innerText += e.target.value;
  });
});