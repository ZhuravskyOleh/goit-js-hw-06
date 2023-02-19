const fontSizeEl = document.querySelector('#font-size-control');
const textEl = document.querySelector('#text');

fontSizeEl.addEventListener('input', (event) => {
    let fontSize = event.currentTarget.value;
    textEl.style.fontSize = fontSize + 'px';
});

