import React from 'react';

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
    debugger
    const { user } = this.props.state.user;
    const { artistId } = this.props.paintings.artist._id;
    if(artistId === user._id){
      return (
        <div>
          {/* <button className="delete-painting" onClick={}/> */}
        </div>
      )
    }
  }

  render() {
    
    if(!this.props.painting || !this.props.entities.paintings.artist){
      return null;
    }
    return (
      <div>
        <p>You are on the Paintings Show Component</p>
        <p>{this.props.painting.title}</p>
        <p>{this.props.entities.paintings.artist.email}</p>
        {console.log(this.props.painting)}
      </div>
    )
  }
}