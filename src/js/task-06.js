
const dataIn = document.querySelector('#validation-input');


dataIn.addEventListener('blur', onInputBlur);

function onInputBlur(event) {
  if (event.currentTarget.value.length == dataIn.dataset.length) {
    event.currentTarget.classList.add('valid');
    event.currentTarget.classList.remove('invalid');
  } else {
    event.currentTarget.classList.add('invalid');
    event.currentTarget.classList.remove('valid');
  }
        
};