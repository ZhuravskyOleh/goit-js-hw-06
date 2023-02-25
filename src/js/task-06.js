
const dataIn = document.querySelector('#validation-input');

dataIn.addEventListener('blur', onInputBlur);

function onInputBlur() {
   const value = dataIn.value.trim();
   const dataLength = dataIn.dataset.length;
   if (value.length === Number(dataLength)) {
     validateInput('valid', 'invalid');
   } else {
     validateInput('invalid', 'valid');
   }
};

function validateInput(data1, data2) {
  const inputElement = dataIn;
  inputElement.classList.add(data1);
  inputElement.classList.remove(data2);
}