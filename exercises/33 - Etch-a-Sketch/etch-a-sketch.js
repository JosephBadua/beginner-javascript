const canvas = document.querySelector(`#etch-a-sketch`);
const context = canvas.getContext(`2d`);
const shake = document.querySelector(`.shake`);

const { width } = canvas;
const { height } = canvas;

let x = Math.floor(Math.random() * width);
let y = Math.floor(Math.random() * height);

const moveAmount = 10;
let hue = 0;
context.strokeStyle = `hsl(${hue},100%, 50%)`;
context.lineJoin = `round`;
context.lineCap = `round`;
context.lineWidth = 10;
context.beginPath();
context.moveTo(x, y);
context.lineTo(x, y);
context.stroke();

function draw({ key }) {
  hue += 5;
  context.strokeStyle = `hsl(${hue},100%, 50%)`;
  console.log(key);
  context.beginPath();
  context.moveTo(x, y);
  switch (key) {
    case `ArrowUp`:
      y -= moveAmount;
      break;
    case `ArrowDown`:
      y += moveAmount;
      break;
    case `ArrowLeft`:
      x -= moveAmount;
      break;
    case `ArrowRight`:
      x += moveAmount;
      break;
    default:
      break;
  }
  context.lineTo(x, y);
  context.stroke();
}
function HandleKey(event) {
  if (event.key.includes(`Arrow`)) {
    draw({ key: event.key });
    console.log(`Handle Key`);
    console.log(event.key);
  }
}

window.addEventListener(`keydown`, HandleKey);

function clearCanvas() {
  context.clearRect(0, 0, width, height);
  canvas.classList.add(`shake`);
  canvas.addEventListener(
    `animationend`,
    function() {
      canvas.classList.remove(`shake`);
    },
    { once: true }
  );
}

shake.addEventListener(`click`, clearCanvas);
