const originalUl = document.querySelector('ul#ingredients');
const fragment = document.createDocumentFragment();

const ingredients = [
  'Картошка',
  'Грибы',
  'Чеснок',
  'Помидоры',
  'Зелень',
  'Приправы',
];

ingredients.forEach(ingredient => {
  const newLi = document.createElement('li');
  newLi.textContent = ingredient;
  fragment.appendChild(newLi);
});

originalUl.appendChild(fragment);
