import React from 'react'
import { Link } from 'react-router-dom'

class PaintingItem extends React.Component {
  render() {
    const { painting } = this.props;
    return (
      // <Link painting={painting} to={`/paintings/${painting.id}`}>
        <div className="painting-index-item">
          title: {painting.title}
          <br />
          Artist: {painting.artist}
          <br />
          Painting: {painting.painting_image}
          <br />    
          <button onClick={() => this.props.delete(painting.id)}>
            Delete
          </button>           
        </div>
      // </Link>      
    )
  }
}

export default PaintingItem;