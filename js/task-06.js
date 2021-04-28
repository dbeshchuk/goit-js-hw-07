const validationInput = document.querySelector('input#validation-input');

function colorChange() {
  if (validationInput.value.length === Number(validationInput.dataset.length)) {
    validationInput.classList.add('valid');
    validationInput.classList.remove('invalid');
  } else if (validationInput.value.length === 0) {
    validationInput.classList.remove('invalid', 'valid');
  } else {
    validationInput.classList.add('invalid');
    validationInput.classList.remove('valid');
  }
};

validationInput.addEventListener('blur', colorChange);

console.log(validationInput.getAttribute('data-length'));
