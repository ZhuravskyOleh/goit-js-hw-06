
const dataIn = document.querySelector('#validation-input');

dataIn.addEventListener('blur', onInputBlur);

function onInputBlur() {
   const value = dataIn.value.trim();
   const dataLength = dataIn.dataset.length;

   validateInput(value, dataLength, dataIn);     
};

function validateInput(value, dataLength, inputElement) {
  if (value.length === Number(dataLength)) {
    inputElement.classList.remove('invalid');
    inputElement.classList.add('valid');
  } else {
    inputElement.classList.remove('valid');
    inputElement.classList.add('invalid');
  }
}