import React from 'react';
import { withRouter, Link } from 'react-router-dom';

class Painting extends React.Component {
  constructor(props) {
    super(props);

    // this.state = {
    //   paintings: []
    // }
  }

  componentDidMount() {
    this.props.fetchPaintings();
  }

  delete(id){
    this.props.deletePainting(id)
    this.props.fetchPaintings();

    // then(this.setState({ deleted: id }))
  }

  // componentWillMount() {
  //   this.props.fetchPaintings();
  // }

  componentWillReceiveProps(newState) {
    this.setState({ paintings: newState.paintings })
  }

  artistUsername(id){
    this.props.fetchArtist(id)
      .then(res => console.log(res, "res"))
  }

  render() {
    if (this.props.paintings.length === 0) {
      return <div>No paintings</div>
    } else {
      return (
        <div className="index-container">
          <h1>Paintings</h1>
            <div className="painting-index">
              {this.props.paintings.map(painting => (    
                <Link key={painting._id} to={`/paintings/${painting._id}`} >         
                  <div className="painting-index-item">                       
                    <h1>{painting.title}</h1>                    
                    
                    {/* <Link to={`/artist/${painting.artist}`}> {painting.artist} </Link> */}
                    
                    <img src={painting.painting_image} className="index-image"/>

                    {/* <button onClick={() => this.delete(painting._id)}>
                      Delete
                    </button>            */}
                  </div>
                </Link> 
              ))}
            </div>            
        </div>
      )
    }
  }
}

export default withRouter(Painting);