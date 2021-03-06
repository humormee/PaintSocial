import React from 'react';
import { Link } from 'react-router-dom';

class ArtistShow extends React.Component {
  constructor(props){
    super(props)
  }

  componentDidMount(){
    this.props.fetchArtist(this.props.match.params.id);
    this.props.fetchPaintings();
    this.props.fetchUserPaintings(this.props.match.params.id);
  }

  render(){
    if(!this.props.entities.paintings.artist || !this.props.entities.paintings.user.length > 0){
      return null;
    }

    const { username, email } = this.props.entities.paintings.artist;
    
    const userPaintings = this.props.entities.paintings.user;

    return (
      <div className="user-show-page">
        <h1>{username}'s Paintings</h1>
        <div className="user-painting-index">
          {userPaintings.map(painting => (
            <div className="user-painting-item">
              <Link to={`/paintings/${painting._id}`}> 
                <div className="user-painting"
                  style={{backgroundImage: `url(${painting.painting_image})` }}
                >
                  <div className="title-name">                    
                    <p>{painting.title}</p>
                  </div>  
                </div>
              </Link>
            </div>
          ))}
        </div>
      </div>
    )
  }
}

export default ArtistShow