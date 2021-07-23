import React from 'react';
import { Link } from 'react-router-dom';

export default class PaintingShow extends React.Component {
  constructor(props){
    super(props)

    this.handleDelete = this.handleDelete.bind(this);
  }

  componentDidMount() {
    
    this.props.fetchPaintings();
    // debugger
    this.props.fetchPainting(this.props.match.params.id).then(res => {
      return console.log(res)
      });

    this.props.fetchPainting(this.props.match.params.id).then(() => {
      this.props.fetchArtist(this.props.painting.artist)
    });
    // debugger
    // this.props.fetchArtist(this.props.painting.artist);
  }


  // renderButton(){

  //   const { user } = this.props;
  //   const { id } = this.props.user;
  //   const { author_id } = this.props.event;
  //   if(user && id === author_id){
  //     return (
  //       <div className="edit-delete-event">
  //         <button className="edit-event" value={this.props.event.id} onClick={this.handleEdit}>Edit Event</button>
  //         <button className="delete-event" value={this.props.event.id} onClick={this.handleDelete}>Delete Event</button>
  //       </div>
  //     )
  //   };
  // }

  handleDelete(e) {
    e.preventDefault();
    this.props.deletePainting(this.props.match.params.id)
    .then(() => this.props.history.push('/'));
  }

  
  renderButton() {
    const { user } = this.props.session;
    const artistId = this.props.painting.artist;
    // debugger
    if(!user) {
      this.props.history.push('/')
    }
    if(artistId === user.id){
      return (
        <div>
          <button className="delete-painting" value={this.props.match.params.id} onClick={this.handleDelete}>Delete</button>
        </div>
      )
    }
  }

  render() {
    
    if(!this.props.painting || !this.props.entities.paintings.artist){
      return null;
    }
    // debugger
    return (
      <div className="painting-show">
        {/* <p>You are on the Paintings Show Component</p> */}
        <h1>{this.props.painting.title}</h1>
        <Link to={`/artist/${this.props.painting.artist}`}>
          <div className="painting-show-user">
            <h2>{this.props.entities.paintings.artist.username}</h2>
            <p>{this.props.entities.paintings.artist.email}</p>
          </div>
        </Link>
        <br />
        <img src={this.props.painting.painting_image} />
        {console.log(this.props.painting)}
        <br />
        <div>{this.renderButton()}</div>
      </div>
    )
  }
}