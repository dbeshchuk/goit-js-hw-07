const counterDisplay = document.querySelector('span#value');
const counterIncrement = document.querySelector('[data-action="increment"]');
const counterDecrement = document.querySelector('[data-action="decrement"]');
 
let counterValue = 0;

function increment() {
  counterValue += 1;
  counterDisplay.textContent = counterValue;
};

function decrement() {
  counterValue -= 1;
  counterDisplay.textContent = counterValue;
};

counterIncrement.addEventListener('click', increment);
counterDecrement.addEventListener('click', decrement);


