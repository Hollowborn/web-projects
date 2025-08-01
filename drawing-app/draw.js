const canvas = document.getElementById("canvas");
const colorPicker = document.getElementById("color");
const ctx = canvas.getContext("2d");
const brushSize = document.getElementById("number");
const decreaseBrush = document.getElementById("minus");
const increaseBrush = document.getElementById("plus");
const clearCanvas = document.getElementById("clear");

let size = 10;
let isPressed = false;
let color = "black";
let x;
let y;

canvas.addEventListener("mousedown", (e) => {
  isPressed = true;

  x = e.offsetX;
  y = e.offsetY;
});

canvas.addEventListener("mouseup", (e) => {
  isPressed = false;

  x = undefined;
  y = undefined;
});

canvas.addEventListener("mousemove", (e) => {
  if (isPressed) {
    const x2 = e.offsetX;
    const y2 = e.offsetY;

    drawCircle(x2, y2);
    drawLine(x, y, x2, y2);

    x = x2;
    y = y2;
  }
});

function drawCircle(x, y) {
  ctx.beginPath();
  ctx.arc(x, y, size, 0, Math.PI * 2);
  ctx.fillStyle = color;
  ctx.fill();
}

function drawLine(x1, y1, x2, y2) {
  ctx.beginPath();
  ctx.beginPath(x1, y1);
  ctx.lineTo(x2, y2);
  ctx.strokeStyle = color;
  ctx.lineWidth = size * 2;
  ctx.stroke();
}

function updateSize() {
  brushSize.textContent = size;
}

increaseBrush.addEventListener("click", () => {
  size += 5;
  if (size > 50) {
    size = 50;
  }
  updateSize();
});

decreaseBrush.addEventListener("click", () => {
  size -= 5;
  if (size < 5) {
    size = 5;
  }
  updateSize();
});

colorPicker.addEventListener("change", (e) => {
  color = e.target.value;
});

clearCanvas.addEventListener("click", () => {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
});


// hello world, please why is it failing?

