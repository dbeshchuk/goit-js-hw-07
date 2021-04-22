const fontSizeController = document.querySelector('input#font-size-control');
const textSpan = document.querySelector('span#text');

function fontSizeChange() {
  textSpan.style.fontSize = `${fontSizeController.value}px`;
  console.log(fontSizeController.value);
};

fontSizeController.addEventListener('input', fontSizeChange);
