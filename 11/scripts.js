// get elements
const video = document.querySelector('.viewer');
const progress = document.querySelector('.progress');
const currentProgress = document.querySelector('.progress__filled');
const play_pause = document.querySelector('.toggle');
const volume = document.querySelector(`input[name='volume']`);
const speed = document.querySelector(`input[name='playbackRate']`);
const skip = document.querySelectorAll('[data-skip]');

// build functions
const togglePlay = () => {
    let icon;
    if(video.paused){
        video.play();
        icon = '❚ ❚';
    } else {
        video.pause();
        icon = '►';
    }
    play_pause.textContent = icon;
}

const skipAround = (e) => {
    video.currentTime += parseFloat(e.target.dataset.skip);
}

const changeSpeed = (e) => {
    video.playbackRate = e.target.value;
}

const changeVolume = (e) => {
    video.volume = e.target.value;
}

const changeTime = (e) => {
    // console.log(e.target.offsetWidth);
    // console.log(e.target.mousedown);
    let progressDisplay = e.offsetX / progress.offsetWidth;
    let newTime = progressDisplay * video.duration;
    video.currentTime = newTime;
    currentProgress.style.flexBasis = `${progressDisplay*100}%`;
}

// EVENT LISTENERS
// play/pause video
video.addEventListener('click', togglePlay);
play_pause.addEventListener('click', togglePlay);

// skip forward/backwards
skip.forEach(button => button.addEventListener('click', skipAround));

// change playback speed
speed.addEventListener('change', changeSpeed);
speed.addEventListener('mousemove', changeSpeed);

// change volume
volume.addEventListener('change', changeVolume);
volume.addEventListener('mousemove', changeVolume);

// video progress
let mousedown = false;
progress.addEventListener('click', changeTime);
progress.addEventListener('mousedown', () => mousedown = true);
progress.addEventListener('mouseup', () => mousedown = false);
progress.addEventListener('mousemove', (e) => mousedown && changeTime(e));