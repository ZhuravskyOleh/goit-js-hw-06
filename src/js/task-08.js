const form = document.querySelector('.login-form');
console.log(form);
form.addEventListener('submit', onFormSubmit);
function onFormSubmit(event) {
  event.preventDefault();
  const {
    elements: { email, password }
  } = event.currentTarget;

  if (email.value === "" || password.value === "") {
    return alert("Please fill in all the fields!");
  }
    const formData = { email: email.value, password: password.value} 
    // const formData = new FormData(event.currentTarget);
    console.log(formData);
    event.currentTarget.reset();
    // return new FormData(event.currentTarget);
  return formData;
}
