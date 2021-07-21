import { connect } from 'react-redux';
import PaintingShow from './painting_show';
import { fetchPainting } from '../../actions/painting_actions';

const mSTP = ({entities}) => {
  // debugger
  const paintingId = parseInt(match.params.paintingId);
  return { paintingId }
}

const mDTP = dispatch => {
  return {
    fetchPainting: id => dispatch(fetchPainting(id))
  }
}

export default connect(mSTP, mDTP)(PaintingShow)