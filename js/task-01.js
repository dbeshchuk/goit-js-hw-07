const categories = document.querySelector('ul#categories');
const itemsArray = document.querySelectorAll('li.item');

console.log(`В списке ${categories.children.length} категории.`);

itemsArray.forEach(item => {
  console.log(`Категория: ${item.querySelector('h2').textContent}`);
  console.log(`Количество элементов: ${item.querySelectorAll('li').length}`);
});