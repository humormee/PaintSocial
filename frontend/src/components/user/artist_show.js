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
    debugger
    if(!this.props.entities.paintings.artist || !this.props.entities.paintings.user.length > 0){
      return null;
    }

    const { username, email } = this.props.entities.paintings.artist;
    
    const userPaintings = this.props.entities.paintings.user;
    debugger

    // const paintingsArr;

    // for(i = 0; i < allPaintings.length; i++) {
    //   if(allPaintings[i]._id === this.props.match.params)
    // }
    return (
      <div className="usershowpage">
        <h1>you are on a users show page</h1>
        <p>{username}</p>
        <div className="user-painting-index">
        {userPaintings.map(painting => (
          <div className="user-painting-item">
            <Link to={`/paintings/${painting._id}`}>{painting.title}</Link>
            </div>
        ))}
        </div>
      </div>
    )
  }
}

export default ArtistShow