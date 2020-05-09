const input = document.querySelector('.search');
const ul = document.querySelector('.results');

const fruits = ['Apple', 'Melon', 'Lemon', 'Cherry', 'Grape', 'Watermelon', 'Blueberry'];
const foundFruits = [];

const getHTML = (fruit) => {
  const result = document.createElement('li');
  result.classList.add('result');
  result.innerText = fruit;
  return result;
}

let timeout = null;

input.addEventListener('keyup', (e) => {
  clearTimeout(timeout);
  const query = e.target.value;

  // wait for the user to stop typing
  timeout = setTimeout(() => {
    if (query !== '') {

      // search through the list
      fruits
      .filter((fruit) => fruit.toLowerCase().includes(query.toLowerCase()))
      .forEach((fruit) => {

        // add fruit if not found already
        if (foundFruits.indexOf(fruit) === -1) {
          foundFruits.push(fruit);
          ul.appendChild(getHTML(fruit));
        }
      });
    }
  }, 500);

  // clear results
  if (query === '') {
    foundFruits.splice(0, foundFruits.length);
    ul.innerHTML = '';
  }

});

  // set search on click
  document.querySelectorAll('.result').forEach((result) => {
    result.addEventListener('click', () => {
      input.value = result.innerText;
      foundFruits.splice(0, foundFruits.length);
      ul.innerHTML = '';
    });
  });

