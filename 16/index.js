const textBox = document.querySelector('.text');
const text = textBox.querySelector('h1');
const OFFSET = 500;

const moveShadow = (e) => {
    let {offsetWidth, offsetHeight} = textBox;
    let {offsetX, offsetY} = e;

    if(this !== e.target) {
        offsetX += e.target.offsetLeft;
        offsetY += e.target.offsetTop;
    }

    const newX = Math.round((offsetX / offsetWidth * OFFSET) - (OFFSET/2));
    const newY = Math.round((offsetY / offsetHeight * OFFSET) - (OFFSET/2));

    text.style.textShadow = `
        ${newX}px ${newY}px #ff3bb1,
        ${newX*-1}px ${newY*-1}px #3b4fff,
        ${newY*-1}px ${newX}px #ffeb3b,
        ${newY}px ${newX*-1}px #3bff89
    `;
}

textBox.addEventListener('mousemove', moveShadow);