btn = document.getElementById('button');
clicks = document.getElementById('clicks');

let counter = 0;
btn.addEventListener('click', () => {
    counter++;
    clicks.innerText = `Clicks - ${counter}`
});
