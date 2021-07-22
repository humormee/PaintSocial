import { connect } from 'react-redux';
import { fetchPaintings, deletePainting } from '../../actions/painting_actions';
import Paintings from './paintings';

const mSTP = (state) => {
  return ({
    paintings: Object.values(state.entities.paintings.all)
  })
}

const mDTP = dispatch => ({
  fetchPaintings: () => dispatch(fetchPaintings()),
  deletePainting: id => dispatch(deletePainting(id))
})

export default connect(mSTP, mDTP)(Paintings)