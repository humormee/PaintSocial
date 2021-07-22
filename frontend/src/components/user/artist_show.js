import React from 'react';

class ArtistShow extends React.Component {
  constructor(props){
    super(props)
  }

  componentDidMount(){
    this.props.fetchArtist(this.props.match.params.ArtistId)
    this.props.fetchPaintings()
  }

  render(){
    // if(!this.props.entities.artist){
    //   return null;
    // }
    debugger
    return (
      
      <div className="usershowpage">
        <h1>you are on a users show page</h1>
      </div>
    )
  }
}


export default ArtistShow