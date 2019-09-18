let space = document.getElementById("spacing");
let blur = document.getElementById("blur");
let color = document.getElementById("base");

let root = document.querySelector(':root');

space.oninput = () => root.style.setProperty("--spacing", `${space.value}${space.dataset.sizing}`);
blur.oninput = () => root.style.setProperty("--blur", `${blur.value}${blur.dataset.sizing}`);
color.oninput = () => root.style.setProperty("--color", `${color.value}`);

console.log(space, blur, color);

