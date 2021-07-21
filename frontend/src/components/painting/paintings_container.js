import { connect } from 'react-redux';
import { fetchPaintings } from '../../actions/painting_actions';
import Paintings from './paintings';

const mSTP = (state) => ({
  paintings: Object.values(state.entities.paintings.all)
})

const mDTP = dispatch => ({
  fetchPaintings: () => dispatch(fetchPaintings())
})

export default connect(mSTP, mDTP)(Paintings)