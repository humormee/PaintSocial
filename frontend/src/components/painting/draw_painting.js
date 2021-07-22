import React from 'react';
import PaintBox from './paint_box';
import { painting_obj } from './paint_box';

class DrawPainting extends React.Component {
  constructor(props) {
    super(props);

    // this.state = {title: "temp title"}
    this.state = this.props.newPainting;

    this.handleSubmit = this.handleSubmit.bind(this);
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

  test() {
    console.log("test")
  }

  render() {
    console.log(painting_obj)
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
            <PaintBox />
          </div>
        </form>
      </div>
    )
  }

}

export default DrawPainting;