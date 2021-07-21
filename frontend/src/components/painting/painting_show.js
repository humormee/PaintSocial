import React from 'react';
import { fetchPainting } from '../../actions/painting_actions';

export default class PaintingShow extends React.Component {
  constructor(props){
    super(props)
  }

  componentDidMount() {
    this.props.fetchPainting(this.props.paintingId)
  }

  render() {
    return (
      <div>
        <p>You are on the Paintings Show Component</p>
        {console.log(this.props.painting)}
      </div>
    )
  }
}