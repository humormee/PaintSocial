import React, { useRef, useState, useEffect } from 'react';

let restoreArray = [];
let index = -1;

function PaintBox() {

  const canvasRef = useRef(null);
  const contextRef = useRef(null);
  const [isDrawing, setIsDrawing] = useState(false);
  const canvasBackground = "white";
  // debugger

  useEffect(() => {
    const canvas = canvasRef.current;
    canvas.width = window.innerWidth * 2;
    canvas.height = window.innerHeight * 2;
    canvas.style.width = `${window.innerWidth}px`;
    canvas.style.height = `${window.innerHeight}px`;
    // canvas.width = window.innerWidth - 60;
    // canvas.width = 400;
    // canvas.height = 400;
    canvas.style.width = `${window.innerWidth}px`;
    canvas.style.height = `${window.innerHeight}px`;

    const context = canvas.getContext('2d');
    context.fillStyle = "white";
    context.fillRect(0, 0, canvas.width, canvas.height);

    context.scale(2,2);
    context.lineCap = "round"
    context.strokeStyle = "black"
    context.lineWidth = 3;
    contextRef.current = context;
  }, [])

  const start = ({nativeEvent}) => {
    contextRef.current.beginPath()
    const {offsetX, offsetY} = nativeEvent;
    contextRef.current.beginPath()
    contextRef.current.moveTo(offsetX, offsetY)
    setIsDrawing(true)
  }

  const stop = () => {
    if (isDrawing) {
      contextRef.current.stroke();
      contextRef.current.closePath()
      setIsDrawing(false)

      const context = contextRef.current
      const canvas = canvasRef.current
      restoreArray.push(context.getImageData(0, 0, canvas.width, canvas.height))
      index += 1;
      console.log(restoreArray)
    }
  }

  const draw = ({nativeEvent}) => {
    if(!isDrawing) { return }

    const {offsetX, offsetY} = nativeEvent;
    contextRef.current.lineTo(offsetX, offsetY)
    contextRef.current.stroke()
  }

  const changeColor = (color) => {
    contextRef.current.strokeStyle = color;
  }

  const clearCanvas = () => {
    const canvas = canvasRef.current;
    contextRef.current.fillstyle = canvasBackground;
    contextRef.current.clearRect(0, 0, canvas.width, canvas.height);
    contextRef.current.fillRect(0, 0, canvas.width, canvas.height);
    restoreArray = [];
    index = -1;
    console.log(restoreArray)
  }

  const undo = () => {
    if ( index <= 0 ) {
      clearCanvas();
    } else {
      index -= 1;
      restoreArray.pop();
      contextRef.current.putImageData(restoreArray[index], 0, 0);
    }
    console.log(restoreArray)
  }

  return (
    <div>
      <canvas
        id="canvas"
        onTouchStart={start}
        onMouseDown={start}
        onMouseMove={draw}
        onTouchMove={draw}
        onTouchEnd={stop}
        onMouseUp={stop}
        onMouseOut={stop}
        ref={canvasRef}
      />
      <div className="tools">
        <button onClick={() => undo()} type="button" className="button">Undo</button>
        <button onClick={() => clearCanvas()} type="button" className="button">Clear</button>

        <input 
          onInput={() => changeColor()} 
          type="color" 
          className="color-picker" 
        />

        <div onClick={() => changeColor("black")} className="color-field black"></div>
        <div onClick={() => changeColor("red")} className="color-field red"></div>
        <div onClick={() => changeColor("yellow")} className="color-field yellow"></div>
        <div onClick={() => changeColor("green")} className="color-field green"></div>
        <div onClick={() => changeColor("blue")} className="color-field blue"></div>
      </div>
    </div>
  )
}

export default PaintBox;

