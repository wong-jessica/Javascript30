const checkboxes = document.querySelectorAll(`input[type='checkbox']`);
console.log(checkboxes);

let lastClicked;

handleClick = (e) => {
    let id = e.target.id;
    let index = id[id.length-1];


    if(e.shiftKey && lastClicked) {
        let [first, last] = lastClicked < index ? [lastClicked, index] : [index, lastClicked];
        for(first; first < last; first++) {
            checkboxes[first].checked = true;
        }
    }
    lastClicked = index;

}

checkboxes.forEach(checkbox => {
    checkbox.addEventListener('click', handleClick);
});

