import React, { useRef, useState, useEffect } from 'react';

let restoreArray = [];
let submitArray = [];
export const paintingArray = [];
let index = -1;

export function PaintBox({placePainting}) {
  const canvasRef = useRef(null);
  const contextRef = useRef(null);
  const [isDrawing, setIsDrawing] = useState(false);
  const canvasBackground = "white";
  // debugger

  placePainting();

  useEffect(() => {
    console.log(window.innerWidth)
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
    context.lineWidth = 3
    contextRef.current = context;
  }, [])

  const start = ({nativeEvent}) => {
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
  
  const changeSize = (size) => {
    contextRef.current.lineWidth = size;
  }

  const changeLineWidth = (width) => {
    contextRef.current.lineWidth = width;
  }

  const clearCanvas = () => {
    const canvas = canvasRef.current;
    contextRef.current.fillstyle = canvasBackground;
    contextRef.current.clearRect(0, 0, canvas.width, canvas.height);
    contextRef.current.fillRect(0, 0, canvas.width, canvas.height);
    restoreArray = [];
    index = -1;
    // console.log(restoreArray)
  }

  const undo = () => {
    if ( index <= 0 ) {
      clearCanvas();
    } else {
      index -= 1;
      restoreArray.pop();
      contextRef.current.putImageData(restoreArray[index], 0, 0);
    }
    // console.log(restoreArray)
  }

  const submitUndo = () => {
    if ( index <= 0 ) {
      clearCanvas();
    } else {
      index -= 1;
      submitArray.push(restoreArray.pop());
      contextRef.current.putImageData(restoreArray[index], 0, 0);
    }
    // console.log(restoreArray)
  }

  // const submit = () => {
  //   while (index !== -1) {
  //     submitUndo()
  //   }
  //   // paintingArray = tempPaintingArray.concat(submitArray);
  //   submitArray.forEach(element => {
  //     paintingArray.push(element)
  //   }) 
  // }
  
  const submit = () => {
    // debugger
    // const btnSave = document.querySelector("#btnSave");
          
    // btnSave.addEventListener("click", function () {
      // if (window.navigator.msSaveBlob) {
      //   window.navigator.msSaveBlob(canvasRef.msToBlob(), "canvas-image.png");
      // } else {
        const canvas = canvasRef.current;
        const context = canvas.getContext('2d');
        const a = document.createElement("a");

        document.body.appendChild(a);
        a.href = canvas.toDataURL();
        a.download = "canvas-image.png"
        a.click();
        document.body.removeChild(a);
      // }
    // });
  }

  // function pullImage(){
  //   index += 1;
  //   contextRef.current.putImageData(paintingArray[index], 0, 0);
  // }

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
        <button onClick={() => submit()} type="button" id="btnSave" className="button">Save</button>
        {/* <button onClick={() => pullImage()} type="button" className="button">Image</button> */}
        <button onClick={() => undo()} type="button" className="button">Undo</button>
        <button onClick={() => clearCanvas()} type="button" className="button">Clear</button>

        <input className="color-picker"
          type="color" 
          onInput={e => changeColor(e.target.value)} 
        />

        <div onClick={() => changeColor("white")} className="eraser">
          <img src="https://cdn.discordapp.com/attachments/865977609330753600/868114328233074698/Eraser_Fix.png" alt="eraser"/>
        </div>
        <div onClick={() => changeColor("black")} className="color-field black"></div>
        <div onClick={() => changeColor("red")} className="color-field red"></div>
        <div onClick={() => changeColor("yellow")} className="color-field yellow"></div>
        <div onClick={() => changeColor("green")} className="color-field green"></div>
        <div onClick={() => changeColor("blue")} className="color-field blue"></div>
        
        <input className="pen-range" 
          type="range" 
          min="1" max="100" 
          onInput={e => changeSize(e.target.value)}
        />
      </div>
    </div>
  )
}

// export default PaintBox;

