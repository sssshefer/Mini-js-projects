const open = document.getElementById('open');
const container = document.getElementById('container');
const close = document.getElementById('close');
const popup = document.getElementById('popup');

open.addEventListener('click', () => {
    container.classList.add('active');
});

close.addEventListener('click', () => {
    container.classList.remove('active');
});

container.addEventListener('click', e => {
    e.stopPropagation();
    console.log(1);
    if (e.target === container && e.target !== popup) {
        console.log(2);
        container.classList.remove('active');
    }
});