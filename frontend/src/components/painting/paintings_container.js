import { connect } from 'react-redux';
import { fetchPaintings, deletePainting } from '../../actions/painting_actions';
import Paintings from './paintings';
import { fetchArtist } from '../../actions/painting_actions';

const mSTP = (state) => {
  return ({
    paintings: Object.values(state.entities.paintings.all)
  })
}

const mDTP = dispatch => ({
  fetchPaintings: () => dispatch(fetchPaintings()),
  deletePainting: id => dispatch(deletePainting(id)),
  fetchArtist: id => dispatch(fetchArtist(id))
})

export default connect(mSTP, mDTP)(Paintings)