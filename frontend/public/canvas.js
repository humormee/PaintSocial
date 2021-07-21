const canvas = document.getElementById("canvas");
canvas.width = window.innerWidth - 60;
canvas.height = 400;

let context = canvas.getContext("2d");
context.fillStyle = "grey";
context.fillRect(0, 0, canvas.width, canvas.height);

let start_background_color = "white";
let draw_color = "black";
let draw_width = "2";
let is_drawing = false;

let restore_array = [];
let index = -1;

function change_color(element){
  draw_color = element.style.background;
}

canvas.addEventListener("touchstart", start, false);
canvas.addEventListener("touchmove", draw, false);
canvas.addEventListener("mousedown", start, false);
canvas.addEventListener("mousemove", draw, false);

canvas.addEventListener("touchend", stop, false)
canvas.addEventListener("mouseup", stop, false)
canvas.addEventListener("mouseout", stop, false)

function start(event) {
  is_drawing = true;
  context.beginPath();
  context.moveTo(event.clientX - canvas.offsetLeft,
    event.clientY - canvas.offsetTop);
  event.preventDefault();
}

function draw(event) {
  if (is_drawing) {
    context.lineTo(event.clientX - canvas.offsetLeft,
      event.clientY - canvas.offsetTop);
      context.strokeStyle = draw_color;
      context.lineWidth = draw_width;
      context.lineCap = "round";
      context.lineJoin = "round";
      context.stroke();
  }
  event.preventDefault();
}

function stop(event) {  
  if (is_drawing) {
    context.stroke();
    context.closePath();
    is_drawing = false;
  }
  event.preventDefault();

  if ( event.type != 'mouseout' ) {
    restore_array.push(context.getImageData(0, 0, canvas.width, canvas.height))
    index += 1;
    console.log(restore_array)
  }
}

function clear_canvas() {
  context.fillstyle = start_background_color;
  context.clearRect(0, 0, canvas.width, canvas.height);
  context.fillRect(0, 0, canvas.width, canvas.height);
}

function undo_last(){
  if ( index <= 0 ) {
    clear_canvas();
  } else {
    index -= 1;
    restore_array.pop();
    context.putImageData(restore_array[index], 0, 0);
  }
}