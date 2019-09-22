// ## Array Cardio Day 2

const people = [
    { name: 'Wes', year: 1988 },
    { name: 'Kait', year: 1986 },
    { name: 'Irv', year: 1970 },
    { name: 'Lux', year: 2015 }
];

const comments = [
    { text: 'Love this!', id: 523423 },
    { text: 'Super good', id: 823423 },
    { text: 'You are the best', id: 2039842 },
    { text: 'Ramen is my fav food ever', id: 123523 },
    { text: 'Nice Nice Nice!', id: 542328 }
];

// Some and Every Checks
const isAdult = (age) => new Date().getFullYear() - age >= 18;

// Array.prototype.some() // is at least one person 18 or older?
const atLeastAdult = people.some(person => isAdult(person.year));  
console.log('Is there a person 18 or older?', atLeastAdult);

// Array.prototype.every() // is everyone 18 or older?
const allAdult = people.every(person => isAdult(person.year));
console.log('Are all people 18 or older?', allAdult);

// Array.prototype.find()
// Find is like filter, but instead returns just the one you are looking for
// find the comment with the ID of 823423
const findID = comments.find(comment => comment.id === 823423);
console.log("Comment whose id is 823423", findID);

// Array.prototype.findIndex()
// Find the comment with this ID
const findIndexOfID = comments.findIndex(comment => comment.id === 823423);
console.log("Index of comment ID 823423", findIndexOfID);
// delete the comment with the ID of 823423
const newComments = [
    ...comments.slice(0,findIndexOfID),
    ...comments.slice(findIndexOfID+1)
];
console.log(newComments);