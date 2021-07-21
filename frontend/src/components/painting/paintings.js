import React from 'react';
import { withRouter } from 'react-router-dom';
import PaintingItem from './painting';

class Painting extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      paintings: []
    }
  }

  componentWillMount() {
    this.props.fetchPaintings();
  }

  componentWillReceiveProps(newState) {
    this.setState({ paintings: newState.paintings })
  }

  render() {
    if (this.state.paintings.length === 0) {
      return <div>No paintings</div>
    } else {
      return (
        <div>
          <h2>Paintings</h2>
            <div class="painting-index">
              { this.state.paintings.map(painting => (
                <PaintingItem key={painting.id} painting={painting} /> 
              ))}
            </div>            
        </div>
      )
    }
  }
}

export default withRouter(Painting);