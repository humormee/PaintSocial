window.addEventListener('load', () => {
  const canvas = document.querySelector("#canvas");
  const context = canvas.getContext('2d');

  // programatically resizing
  // canvas.height = window.innerHeight;
  // canvas.width = window.innerWidth;
  canvas.height = 500;
  canvas.width = 600;
  context.translate(-50, -175);
  
  // variables
  let painting = false;

  function startPosition(){
    painting = true;
  }
  function finishedPosition(){
    painting = false;
    context.beginPath();
  }

  function draw(e){
    if(!painting) return;
    context.lineWidth = 10;
    context.lineCap = 'round';

    context.lineTo(e.clientX, e.clientY);
    context.stroke();
    context.beginPath();
    context.moveTo(e.clientX, e.clientY);
  }
  // EventListeners
  canvas.addEventListener('mousedown', startPosition);
  canvas.addEventListener('mouseup', finishedPosition);
  canvas.addEventListener('mousemove', draw);


});

// make it better
// window.addEventListener('resize, ')

//window.addEventListener("resize, height n width ");