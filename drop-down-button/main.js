const arrow = document.querySelector('.arrow');
const text = document.querySelector('.text');
const dropdown = document.querySelector('.dropdown');

let show = true;
const showHide = () => {
  dropdown.style.display = show ? 'block' : 'none';
  show = !show;
};

arrow.addEventListener('click', () => showHide());

const links = document.querySelectorAll('li');
links.forEach((li) => {
  li.addEventListener('click', () => {
    text.innerHTML = li.innerHTML;
    showHide();
  });
});

text.addEventListener('click', (e) => {
  let status = e.target.innerText.trim();
  if (status === 'New') {
    alert('새 글을 추가하시겠습니까?');
  } else if (status === 'Delete') {
    alert('글을 삭제하시겠습니까?');
  } else if (status === 'Update') {
    alert('글을 수정하시겠습니까?');
  }
});