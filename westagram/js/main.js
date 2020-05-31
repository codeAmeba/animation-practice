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

  closeSearchInput.addEventListener('click', (e) => {
    e.target.style.display = 'none';
    searchPlaceholder.style.left = 95 + 'px';
    searchPlaceholder.style.display = 'block';
    searchIcon.style.left = 80 + 'px';
  });

  const movingPlaceholder = () => {
    searchPlaceholder.style.left = 27 + 'px';
    searchIcon.style.left = 10 + 'px';
    closeSearchInput.style.display = 'block';
  };

})();