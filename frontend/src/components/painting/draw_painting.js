import React from 'react';
import { paintingObject, PaintBox } from './paint_box';

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
  }

  update() {
    return e => this.setState({
      title: e.currentTarget.value
    });
  }

  placePainting(painting) {
    this.setState({painting_image: painting})
  }

  render() {
    window.paintingObject = paintingObject;
    window.state = this.state;
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <div className="field">
            <input type="text" 
              value={this.state.title} 
              onChange={this.update()}
              placeholder="Title"
            />
            <input type="submit" value="Create Painting" />
            <PaintBox placePainting={() => this.placePainting.bind(this)}/>
            {/* <PaintBox placePainting={"banana"}/> */}
            {this.state.painting_image=paintingObject.count}
          </div>
        </form>
      </div>
    )
  }

}

export default DrawPainting;