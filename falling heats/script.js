function createHeart() {
    const heart = document.createElement('div');
    heart.classList.add('heart');
    heart.style.left = Math.random() * 100 + 'vw';
    heart.style.animationDuration = Math.random() * 2 + 3 + 's';
    heart.innerText = '💜';
    document.body.appendChild(heart);
    setTimeout(() => {
        heart.remove();
    }, 5000);
}

const button = document.getElementById('button');

let turn = false;
let interval;
button.addEventListener('click', () => {
    turn = !turn;
    if (turn) {
        console.log(turn);
        interval = setInterval(createHeart, 100);
    } else {
        console.log(turn);
        clearInterval(interval);
    }
});
