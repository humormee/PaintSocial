import { connect } from 'react-redux';
import PaintingShow from './painting_show';
import { fetchPainting } from '../../actions/painting_actions';

// const mSTP = ({entities}) => {
//   // debugger
//   // const paintingId = parseInt(match.params.paintingId);
//   // return { paintingId }
// }

const mSTP = (state, props) => {
  // debugger
  return {
    painting: state.entities.paintings[props.match.params.id],
    // comments: state.entities.comments
  }
};

const mDTP = dispatch => {
  return {
    fetchPainting: id => dispatch(fetchPainting(id))
  }
}

export default connect(mSTP, mDTP)(PaintingShow)