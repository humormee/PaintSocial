import { connect } from 'react-redux';
import { createPainting } from '../../actions/painting_actions';
import PaintBox from './paint_box';
import DrawPainting from './draw_painting';

const mSTP = (state) => {
  return {
    newPainting: {
      title: '',
      artist: state.session.user,
      painting_image: "",
      date: Date.now
    }
  };
};

const mDTP = dispatch => {
  return {
    createPainting: data => dispatch(createPainting(data))
    
  };
};

export default connect(mSTP, mDTP)(DrawPainting);