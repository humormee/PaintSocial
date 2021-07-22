import { connect } from 'react-redux';
import PaintingShow from './painting_show';
import { fetchPainting, fetchPaintings} from '../../actions/painting_actions';

// const mSTP = ({entities}) => {
//   // debugger
//   // const paintingId = parseInt(match.params.paintingId);
//   // return { paintingId }
// }

const mSTP = (state, props) => {
  // debugger
  const paintArray = state.entities.paintings.all;
  let painting;
  
  for (let i = 0; i< paintArray.length; i++) {
    if ( paintArray[i]._id === props.match.params.id ) {
      painting = paintArray[i]
    } 
  }
  return {
    painting: painting
  }
};

const mDTP = dispatch => {
  return {
    fetchPainting: id => dispatch(fetchPainting(id)),
    fetchPaintings: () => dispatch(fetchPaintings())
  }
}

export default connect(mSTP, mDTP)(PaintingShow)