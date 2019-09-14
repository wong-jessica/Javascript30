const transition = (key) => {
	key.classList.add("playing");

	// This might not always be insync with transitions set in css
	// setTimeout(() => key.classList.remove("playing"), 50);

	key.addEventListener('transitionend', 
		() => key.classList.remove("playing"));
}

const play = (e) => {
	const keyCode = e.keyCode;
	const audio = document.querySelector(`audio[data-key="${keyCode}"]`);
	const key = document.querySelector(`div[data-key="${keyCode}"]`);

	if(!audio) return;
	transition(key);
	audio.currentTime = 0;
	audio.play(0);
};


window.addEventListener('keydown', play);