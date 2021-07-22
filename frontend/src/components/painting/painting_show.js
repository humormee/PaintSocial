import React from 'react';

export default class PaintingShow extends React.Component {
  constructor(props){
    super(props)
  }

  componentDidMount() {
    // debugger
    // this.props.fetchPainting(this.props.painting._id)
    this.props.fetchPaintings()
  }

  render() {
    // debugger
    return (
      <div>
        <p>You are on the Paintings Show Component</p>
        <p>{this.props.painting.title}</p>
        <p>{this.props.painting.artist}</p>
        {console.log(this.props.painting)}
      </div>
    )
  }
}