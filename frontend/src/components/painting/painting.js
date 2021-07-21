import React from 'react'

class PaintingItem extends React.Component {
  render() {
    return (
      <Link to="/">
        <div className="painting-index-item">
          title: {this.props.painting.title}
          <br />
          Artist: {this.props.painting.artist}
          <br />
          Painting: {this.props.painting.painting_image}
          <br />               
        </div>
      </Link>      
    )
  }
}

export default PaintingItem;