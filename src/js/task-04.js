const incrBtn = document.querySelector('button[data-action="increment"]');
const decrBtn = document.querySelector('button[data-action="decrement"]');
const valueEl = document.querySelector('#value');
let counterValue = 0;

incrBtn.addEventListener('click', () => {
    valueEl.textContent = counterValue += 1;
});

decrBtn.addEventListener('click', () => {
    valueEl.textContent = counterValue -= 1;
})