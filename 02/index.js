function updateTime() {
	const currentTime = new Date();
	const hours = currentTime.getHours();
	const minutes = currentTime.getMinutes();
	const seconds = currentTime.getSeconds();

	const hourHand = document.querySelector('.hour-hand');
	const minuteHand = document.querySelector('.min-hand');
	const secondHand = document.querySelector('.second-hand');


	const setHour = (360/12)*hours + 90;
	const setMinutes = (360/60)*minutes + 90;
	const setSeconds = (360/60)*seconds + 90;

	hourHand.style.transform=`rotate(${setHour}deg)`;
	minuteHand.style.transform=`rotate(${setMinutes}deg`;
	secondHand.style.transform=`rotate(${setSeconds}deg`;
}

setInterval(updateTime, 1000);