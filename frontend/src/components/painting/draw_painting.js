import React from 'react';
import { withRouter } from "react-router-dom"
import { Redirect } from 'react-router-dom/cjs/react-router-dom.min';
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
              <textarea 
                value={this.state.description}
                onChange={this.update("description")}
                placeholder="Description"
              />
              {/* <input type="text" 
                value={this.state.description} 
                onChange={this.update("description")}
                placeholder="Description"
              /> */}
              <span className="create">
                <input type="submit" value="Create Painting"/>
              </span>
            </div>
            <PaintBox convertToDataUrl={() => this.placePainting.bind(this)} placePainting={() => this.placePainting.bind(this)}/>
            
          </div>
        </form>
      </div>
    )
  }

}

export default withRouter(DrawPainting);