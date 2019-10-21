// const baseUrl = "https://wong-jessica.github.io/Javascript30/";
const baseUrl = "./"

const challenges = [
	"01 - Javascript Drum Kit",
	"02 - JS and CSS Clock",
	"03 - CSS Variables",
	"04 - Array Cardio Day 1",
	"05 - Flex Panel Gallery",
	"06",
	"07 - Array Cardio Day 2",
	"08 - Fun with HTML5 Canvas",
	"09 - Dev Tools Domination",
	"10 - Hold Shift and Check Checkboxes",
	"11 - Custom Video Player",
	"12 - Key Sequence Detection",
	"13 - Slide in on Scroll",
	"14 - JavaScript References VS Copying",
	"15 - LocalStorage",
	"16 - Mouse Move Shadow",
	"17 - Sort Without Articles"
];

	

for (let i = 1; i <= challenges.length; i++) {
	let li = document.createElement('li');
	let a = document.createElement('a');
	let day = i < 10 ? `0${i}` : i;
	a.href = baseUrl + day;
	a.innerHTML = challenges[i-1];
	li.append(a);
	document.querySelector('ul').append(li);
}