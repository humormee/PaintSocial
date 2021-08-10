import React from 'react';
import { withRouter, Link } from 'react-router-dom';
import { fetchPaintingLikes } from '../../actions/like_actions';

class Painting extends React.Component {
  constructor(props) {
    super(props);

    // this.state = {
    //   paintings: []
    // }
    // this.renderLikes = this.renderLikes.bind(this)
  }

  componentDidMount() {
    
    this.props.fetchPaintings().then(() => this.props.fetchAllLikes());
    debugger
    // this.props.fetchPaintings().then(paintings => {
    //   let { data } = paintings.paintings
    //   let length = data.length;
    //   for(let i = 0; i < length; i++){
    //     this.props.fetchPaintingLikes(data[i]._id)
    //   }
    // });
  }

 
  delete(id){ 
    
    this.props.eraseLike(id)

    this.props.fetchPaintings().then(paintings => {
      let { data } = paintings.paintings
      let { length } = data;

      for(let i = 0; i < length; i++){
        
        this.props.fetchPaintingLikes(data[i]._id)
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

  assignLikes(painting) {
    this.props.entities.likes
  }

  // renderLikes(paintingId){
    
  //   // this.props.fetchPaintingLikes(paintingId)
  //     // .then(res => console.log(res))
  //   this.props.likes
  // }

  render() {
    if (this.props.paintings.length === 0 || this.props.entities.likes.length === undefined) {
      return <div>No paintings</div>
    } else {

      debugger
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
                      {/* {this.renderLikes(painting._id)} */}
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