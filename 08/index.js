const canvas = document.getElementById('draw');
// canvas.width = 800;
// canvas.height = 500;
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
const ctx = canvas.getContext('2d');

// let gradient = ctx.createLinearGradient(0,0,200,0);
// const rainbow = ['red', 'orange', 'yellow', 'green', 'blue', 'purple'];
// rainbow.forEach((color, index) => gradient.addColorStop(index/rainbow.length, color));
// ctx.strokeStyle = gradient;

ctx.lineCap = 'round';
ctx.lineJoin = 'round';
const BRUSH_MIN = 1;
const BRUSH_MAX = 150;
ctx.lineWidth = BRUSH_MAX;

const COLOR_MIN = 0;
const COLOR_MAX = 360;
let color = COLOR_MIN;

let isDrawing = false;
let x = 0;
let y = 0;
let increaseBrush = true;
let increaseColor = true;

draw = (e) => {
    if(!isDrawing) return;
    ctx.strokeStyle = `hsl(${color}, 100%, 50%)`;
    ctx.beginPath();
    ctx.moveTo(x, y);
    ctx.lineTo(e.offsetX, e.offsetY);
    ctx.stroke();
    [x, y] = [e.offsetX, e.offsetY];

    if(ctx.lineWidth >= BRUSH_MAX || ctx.lineWidth <= BRUSH_MIN) increaseBrush = !increaseBrush;

    increaseBrush ? ctx.lineWidth++ : ctx.lineWidth--;
    increaseColor ? color++ : color--;
}

canvas.addEventListener('mousedown', (e) => {
    isDrawing = true;
    [x, y] = [e.offsetX, e.offsetY];
});
canvas.addEventListener('mouseup', () => isDrawing = false);
canvas.addEventListener('mouseout', () => isDrawing = false);
canvas.addEventListener('mousemove', draw);