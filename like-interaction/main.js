const post = document.querySelector('.post');
const likeEl = document.querySelector('.likes');
const heart = document.querySelector('.heart-icon');
const smallHeart = document.querySelector('.fa-heart');

likeEl.innerText = 'There are no likes so far';

let counter = 0;

post.addEventListener('dblclick', () => {
  counter++;
  if (counter === 1) {
    likeEl.innerText = counter + ' like';
  } else {
    likeEl.innerText = counter + ' likes';
  }

  smallHeart.classList.replace('far', 'fas');

  heart.classList.add('animate-like');
  setTimeout(() => {
    heart.classList.remove('animate-like');
  }, 800);
});