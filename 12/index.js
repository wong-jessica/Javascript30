let word = [];
const password = "needle";
const display = document.querySelector('.letters');

displayWord = () => {
    display.textContent = `Press keys to enter answer: ${word.join('')}`;
}

handleKeyPress = (e) => {
    // console.log("key pressed", e.key);
    word.push(e.key);
    word.splice(-password.length-1, word.length-password.length);
    displayWord();
    if(word.join('').toLowerCase() === password.toLowerCase()) {
        cornify_add();
    }
};

window.addEventListener('keypress', handleKeyPress);