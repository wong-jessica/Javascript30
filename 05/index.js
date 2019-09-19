const imageDirectory = './images/';

const words = [
	{
		term: 'gigil',
		definition: 'the overwhelming urge to pinch or squeeze something that is unbearably cute',
		image: `${imageDirectory}gigil.jpg`
	},
	{
		term: 'hygge',
		definition: 'a feeling of cozy contentment and wellbeing by enjoying the simple things in life',
		image: `${imageDirectory}hygge.jpg`
	},
	{
		term: 'tingo',
		definition: 'slowly and gradually stealing your neighbor\'s things by borrowing them and not returning them',
		image: `${imageDirectory}tingo.jpg`
	},
	{
		term: 'tsundoku',
		definition: 'leaving a book unread after buying it and letting it pile up with other unread books in your house',
		image: `${imageDirectory}tsundoku.jpg`
	},
	{
		term: 'yugen',
		definition: 'a profound, mysterious sense of beauty of the universe and the sad beauty of human suffering',
		image: `${imageDirectory}yugen.jpg`
	}
];

const togglePanel = (e) => {
	let toggle = e.target.classList;
	toggle.toggle('panel-open');
};

words.forEach((word, i) => {
	let div = document.createElement('div');
	div.classList.add('panel', `panel${i}`);
	div.style.backgroundImage = `url('${word.image}')`;
	div.addEventListener('click', togglePanel);

	let h2 = document.createElement('h2');
	h2.innerHTML = word.term;

	let p = document.createElement('p');
	p.innerHTML = word.definition;

	div.append(h2);
	div.append(p);
	document.querySelector('.panels').append(div);
});