import React from 'react';

export default class PaintingShow extends React.Component {
  constructor(props){
    super(props)
  }

  componentDidMount() {
    
    this.props.fetchPaintings();
    this.props.fetchPainting(this.props.match.params.id).then(res => {
      
      return console.log(res)
      });
    this.props.fetchArtist(this.props.painting.artist);
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