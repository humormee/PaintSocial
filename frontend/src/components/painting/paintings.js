import React from 'react';
import { withRouter, Link } from 'react-router-dom';

class Painting extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      paintings: []
    }
  }

  delete(id){
    this.props.deletePainting(id)
    // then(this.setState({ deleted: id }))
  }

  componentWillMount() {
    this.props.fetchPaintings();
  }

  componentWillReceiveProps(newState) {
    this.setState({ paintings: newState.paintings })
  }

  render() {
    if (this.state.paintings.length === 0) {
      return <div>No paintings</div>
    } else {
      return (
        <div className="index-container">
          <h1>Paintings</h1>
            <div className="painting-index">
              {this.state.paintings.map(painting => (              
                <div className="painting-index-item">
                  painting ID: {painting._id}
                  <Link to={`/paintings/${painting._id}`} >painting ID: {painting._id}</Link>
                  <br />
                  title: {painting.title}
                  <br />
                  Artist: {painting.artist}
                  <br />
                  Painting: {painting.painting_image}
                  <br />    
                  <button onClick={() => this.delete(painting._id)}>
                    Delete
                  </button>           
                </div>
              ))}
            </div>            
        </div>
      )
    }
  }
}

export default withRouter(Painting);