const text = 'You are the best! <3';

let index = 0;

function writeText() {
    document.body.innerText = text.slice(0, index);
    index++;
    if (index > text.length) {
        index = 0;
        clearInterval(interval);
        setTimeout(() => {
            interval = setInterval(writeText, 110)
        }, 1000);
    }
}

btn = document.getElementById('button');

let interval = setInterval(writeText, 110);