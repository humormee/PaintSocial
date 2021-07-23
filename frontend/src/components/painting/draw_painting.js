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
    this.props.createPainting(this.state)
      .then(res => this.props.history.push(`/paintings/${res.painting.data._id}`))    
  }

  update(field) {
    return e => this.setState({
      [field]: e.currentTarget.value
    });
  }

  placePainting() {
    console.log("asdfasd")
    this.setState({painting_image: paintingArray})
  }

  render() {
    // console.log(paintingArray, "paintArray")
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
              <input type="text" 
                value={this.state.painting_image} 
                onChange={this.update("painting_image")}
                placeholder="Link"
              />
              <input type="submit" value="Create Painting" />
            </div>
            <PaintBox placePainting={() => this.placePainting.bind(this)}/>
            {/* <PaintBox placePainting={"banana"}/> */}
            {/* {this.state.painting_image=paintingArray.count} */}
          </div>
        </form>
      </div>
    )
  }

}

export default withRouter(DrawPainting);