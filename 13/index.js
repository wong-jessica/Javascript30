const images = document.querySelectorAll('.slide-in');

const debounce = (func, wait = 30, immediate = true) => {
    var timeout;
    return function() {
    var context = this, args = arguments;
    var later = function() {
        timeout = null;
        if (!immediate) func.apply(context, args);
    };
    var callNow = immediate && !timeout;
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
    if (callNow) func.apply(context, args);
    };
}

const checkViewPosition = (e) => {
    images.forEach((image, i) => {
        const imageTop = image.getBoundingClientRect().top;
        const isImageVisible = (imageTop < window.innerHeight) && (imageTop + image.height) > 0;
        isImageVisible ? image.classList.add('active') : image.classList.remove('active');
    });
};

window.addEventListener('scroll', debounce(checkViewPosition));