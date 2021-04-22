const validationInput = document.querySelector('input#validation-input');

function colorChange() {
  if (validationInput.value.length > validationInput.getAttribute('data-length')) {
    validationInput.classList.add('invalid');
    validationInput.classList.remove('valid');
  } else if (validationInput.value.length === 0) {
    validationInput.classList.remove('invalid', 'valid');
  } else {
    validationInput.classList.add('valid');
    validationInput.classList.remove('invalid');
  }
};

validationInput.addEventListener('input', colorChange);

console.log(validationInput.getAttribute('data-length'));
