(function() {

  const searchInput = document.querySelector('.search-input');
  const closeSearchInput = document.querySelector('.fa-times-circle');
  const searchPlaceholder = document.querySelector('.search-placeholder');

  const feedImg = document.querySelector('.feed-img');
  const heartIcon = document.querySelector('.left-icons .fa-heart');

  searchInput.addEventListener('focus', () => {
    movingPlaceholder();
  });

  searchInput.addEventListener('keydown', () => {
    searchPlaceholder.style.display = 'none';
  });

  closeSearchInput.addEventListener('click', () => {
    movingPlaceholder();
    searchPlaceholder.innerHTML = '검색';
  });

  const movingPlaceholder = () => {
    const searchIcon = document.querySelector('.fa-search');

    if (closeSearchInput.style.display === 'none') {
      closeSearchInput.style.display = 'block';
      searchPlaceholder.style.left = 27 + 'px';
      searchIcon.style.left = 10 + 'px';
    } else {
      searchPlaceholder.style.left = 95 + 'px';
      searchIcon.style.left = 80 + 'px';
      closeSearchInput.style.display = 'none';
    }
  };

  let count = 0;
  const likeAnimation = () => {
    const countLikes = document.querySelector('.count-likes');
    const heartAction = document.querySelector('.heart-action');
  
    count++;
    countLikes.innerHTML = count;

    if (heartIcon.classList[0] === 'far') {
      heartIcon.classList.replace('far', 'fas');
      heartIcon.style.color = 'rgb(255, 87, 87)';  
    } else if (heartIcon.classList[0] === 'fas') {
      heartIcon.classList.replace('fas', 'far');
      heartIcon.style.color = 'rgba(0, 0, 0, 0.8)';  
    }

    heartAction.classList.add('animate-like');
    setTimeout(() => {
      heartAction.classList.remove('animate-like');
    }, 800);
  };

  feedImg.addEventListener('dblclick', () => {
    likeAnimation();
  });

  heartIcon.addEventListener('click', () => {
    likeAnimation();
  });
  


  const updateCopyrightYear = () => {
    const copyrightYear = document.querySelector('.copyright-year');
    const currentYear = new Date().getFullYear();
    copyrightYear.innerHTML = currentYear;
  };
  updateCopyrightYear();

})();