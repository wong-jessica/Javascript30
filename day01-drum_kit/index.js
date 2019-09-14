const transition = (key) => {
	key.classList.add("playing");
	setTimeout(() => key.classList.remove("playing"), 50);
}

const play = (e) => {
	const keyCode = e.keyCode;
	// if(![65,83,68,70,71,72,74,75,76].includes(keyCode)) return;
	const audio = document.querySelector(`audio[data-key="${keyCode}"]`);
	const key = document.querySelector(`div[data-key="${keyCode}"]`);

	if(!audio) return;
	transition(key);
	audio.currentTime = 0;
	audio.play(0);
};


window.addEventListener('keydown', play);