import React from 'react';

export default class PaintingShow extends React.Component {
  constructor(props){
    super(props)
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