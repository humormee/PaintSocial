import React from 'react';
import { withRouter } from "react-router-dom"
import { paintingArray, PaintBox } from './paint_box';

class DrawPainting extends React.Component {
  constructor(props) {
    super(props);

    this.state = this.props.newPainting;
    this.handleSubmit = this.handleSubmit.bind(this);
    this.placePainting = this.placePainting.bind(this);
  }

  

  handleSubmit(e) {
    e.preventDefault();
    // convertToDataUrl();
    // const  = canvasRef.current;
    // const context = canvas.getContext('2d');
    // if (window.navigator.msSaveBlob) {
    //   window.navigator.msSaveBlob(canvasRef.msToBlob(), "canvas-image.png");
    // } else {
    //   const a = document.createElement("a");

    //   document.body.appendChild(a);
    //   a.href = canvas.toDataURL();
    // }
    debugger
    // this.convertToDataUrl();
    this.setState({painting_image: window.imgData}) 
    this.props.createPainting(Object.assign({}, this.state, {painting_image: window.imgData}))
      .then(res => this.props.history.push(`/paintings/${res.painting.data._id}`))    
  }

  update(field) {
    return e => this.setState({
      [field]: e.currentTarget.value
    });
  }

  placePainting() {
    this.setState({painting_image: paintingArray})
  }

  render() {
    window.paintingArray = paintingArray;
    window.state = this.state;
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <div className="field">
            <div className="info">
              <input type="text" 
                value={this.state.title} 
                onChange={this.update("title")}
                placeholder="Title"
              />
              {/* <input type="text" 
                value={this.state.painting_image} 
                onChange={this.update("painting_image")}
                placeholder="Link"
              /> */}
              {/* <button type="submit" onClick={() => convertToDataUrl()}>Create Painting</button> */}
              <input type="submit" value="Create Painting" />
            </div>
            <PaintBox convertToDataUrl={() => this.placePainting.bind(this)} placePainting={() => this.placePainting.bind(this)}/>
            {/* <PaintBox placePainting={"banana"}/> */}
            {/* {this.state.painting_image=paintingArray.count} */}
          </div>
        </form>
      </div>
    )
  }

}

export default withRouter(DrawPainting);