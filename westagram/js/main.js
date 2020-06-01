(function() {

  const searchInput = document.querySelector('.search-input');
  const closeSearchInput = document.querySelector('.fa-times-circle');
  const searchPlaceholder = document.querySelector('.search-placeholder');
  const searchIcon = document.querySelector('.fa-search');

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

})();