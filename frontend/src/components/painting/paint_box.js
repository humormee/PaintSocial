import React from 'react';

class PaintBox extends React.Component {
  render() {
    return (
      <canvas id="canvas"></canvas>
      /* <div className="tools">
        <button onClick="undo_last()" type="button" className="button">Undo</button>
        <button onClick="clear_canvas()" type="button" className="button">Clear</button>

        <div onCLick="change_color(this)" className="color-field" style="background: red;"></div>
        <div onCLick="change_color(this)" className="color-field" style="background: blue;"></div>
        <div onCLick="change_color(this)" className="color-field" style="background: green;"></div>
        <div onCLick="change_color(this)" className="color-field" style="background: yellow;"></div>

        <input onInput="draw_color = this.value" type="color" className="color-picker" />
        <input onInput="draw_width = this.value" type="range" min="1" max="100" className="pen-range" />
      </div> */
    )
  }
}

export default PaintBox;

