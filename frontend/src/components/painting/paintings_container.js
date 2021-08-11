import { connect } from 'react-redux';
import { fetchPaintings, deletePainting } from '../../actions/painting_actions';
import Paintings from './paintings';
import { fetchArtist } from '../../actions/painting_actions';
import { fetchAllLikes, fetchPaintingLikes, makeLike, eraseLike } from '../../actions/like_actions';

const mSTP = (state) => {
  return ({
    paintings: Object.values(state.entities.paintings.all),
    entities: state.entities,
    user: state.session.user
    // likes: Object.values(state.entities.likes.likes)
  })
}

const mDTP = dispatch => ({
  fetchPaintings: () => dispatch(fetchPaintings()),
  deletePainting: id => dispatch(deletePainting(id)),
  fetchArtist: id => dispatch(fetchArtist(id)),
  fetchAllLikes: () => dispatch(fetchAllLikes()),
  fetchPaintingLikes: id => dispatch(fetchPaintingLikes(id)),
  makeLike: like => dispatch(makeLike(like)),
  eraseLike: id => dispatch(eraseLike(id))
})

export default connect(mSTP, mDTP)(Paintings) 