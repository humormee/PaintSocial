import React from 'react';
import PaintBox from './paint_box';

class DrawPainting extends React.Component {
  constructor(props) {
    super(props);

    // this.state = this.props.newPainting;
    this.state = {title: "temp title"}

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.drawPainting(this.state)
  }

  update() {
    return e => this.setState({
      title: e.currentTarget.value
    });
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <div>
            <input type="text" 
              value={this.state.title} 
              onChange={this.update()}
              placeholder="Title"
            />
            <PaintBox />
            <input type="submit" value="Create Painting" />
          </div>
        </form>
      </div>
    )
  }

}

export default DrawPainting;