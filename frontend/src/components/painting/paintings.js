import React from 'react';
import { withRouter, Link } from 'react-router-dom';
import { fetchPaintingLikes } from '../../actions/like_actions';

class Painting extends React.Component {
  constructor(props) {
    super(props);

    // this.state = {
    //   paintings: []
    // }
    this.renderLikes = this.renderLikes.bind(this)
  }

  componentDidMount() {
    
    this.props.fetchPaintings().then(paintings => {
      // return
      // debugger
      let { data } = paintings.paintings
      let length = data.length;
      
      for(let i = 0; i < length; i++){
        // debugger
        fetchPaintingLikes(data[i]._id)
      }
    });
  }

  delete(id){ 
    
    this.props.eraseLike(id)

    this.props.fetchPaintings().then(paintings => {
      // return
      let { data } = paintings.paintings
      let { length } = data;

      for(let i = 0; i < length; i++){
        
        fetchPaintingLikes(data[i]._id)
      }
    });

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

  renderLikes(paintingId){
    // debugger
    this.props.fetchPaintingLikes(paintingId)
      // .then(res => console.log(res))
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
                    <div>
                      {this.renderLikes(painting._id)}
                    </div>
                    {/* <button onClick={() => this.delete(like._id)}>
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