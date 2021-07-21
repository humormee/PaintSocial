import { connect } from 'react-redux';
import PaintingShow from './painting_show';
import { fetchPainting } from '../../actions/painting_actions';

const mSTP = ({entities}, ownProps) => {
  // debugger
<<<<<<< HEAD
  const paintingId = parseInt(ownProps.match.params.paintingId);
  return { paintingId }
=======
  // const paintingId = parseInt(match.params.paintingId);
  // return { paintingId }
>>>>>>> a7de816f2e2c918253816e1cddd2ada9205ad131
}

const mDTP = dispatch => {
  return {
    fetchPainting: id => dispatch(fetchPainting(id))
  }
}

export default connect(mSTP, mDTP)(PaintingShow)