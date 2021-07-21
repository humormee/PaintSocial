import React from 'react';
import PaintBox from './paint_box';

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

  // dataURItoBlob(dataURI) {
  //   const binary = atob(dataURI.split(',')[1]);
  //   const array = [];
  //   for(const i = 0; i < binary.length; i++) {
  //       array.push(binary.charCodeAt(i));
  //   }
  //   return new Blob([new Uint8Array(array)], {type: 'image/jpeg'});
  // }

  render() {
    // const dataUrl = canvas.toDataURL("image/jpeg");
    // const blobData = dataURItoBlob(dataUrl);
    // const params = {Key: "file_name", ContentType: "image/jpeg", Body: blobData};
    // bucket.upload(params, function (err, data) {});
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
<<<<<<< HEAD
            
=======
            <PaintBox />
>>>>>>> a7de816f2e2c918253816e1cddd2ada9205ad131
          </div>
        </form>
      </div>
    )
  }

}

export default DrawPainting;