const inputForm = document.querySelector('input#name-input');
const nameOutput = document.querySelector('span#name-output');

function inputReplace() {
  if (inputForm.value !== '') {
    nameOutput.textContent = inputForm.value;
  } else {
    nameOutput.textContent = 'незнакомец';
  }
};

inputForm.addEventListener('input', inputReplace);