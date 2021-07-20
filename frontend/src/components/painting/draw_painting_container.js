import { connect } from 'react-redux';
import { createPainting } from '../../actions/painting_actions';
import DrawPainting from './draw_painting';

const mSTP = (state) => {
  return {
    currentUser: state.session.user,
    // newPaiting: state.painting.new
  };
};

const mDTP = dispatch => {
  return {
    createPainting: data => dispatch(createPainting(data))
  };
};

export default connect(mSTP, mDTP)(DrawPainting);