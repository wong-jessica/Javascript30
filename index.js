// const baseUrl = "https://wong-jessica.github.io/Javascript30/";
const baseUrl = "./"

const challenges = [
	"01 - Javascript Drum Kit",
	"02 - JS and CSS Clock",
	"03 - CSS Variables",
	"04 - Array Cardio Day 1",
	"05 - Flex Panel Gallery"
];


for (let i = 0; i < challenges.length; i++) {
	let li = document.createElement('li');
	let a = document.createElement('a');
	let day = i < 10 ? `0${i+1}` : i;
	a.href = baseUrl + day;
	a.innerHTML = challenges[i];
	li.append(a);
	document.querySelector('ul').append(li);
}