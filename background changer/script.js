const btn = document.getElementById('button');

btn.addEventListener('click', () => {
    document.body.style.backgroundColor = randomBg();
});

function randomBg() {
    let colorCode = Math.floor(Math.random() * 360);
    return `hsl(${colorCode}, 50%, 50%`;
}