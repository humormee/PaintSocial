import { connect } from 'react-redux';
import ArtistShow from './artist_show';
import { fetchArtist } from '../../actions/painting_actions';
import { fetchPaintings } from '../../actions/painting_actions';


const mSTP = state => {
  return {
    entities: state.entities
  }
}


const mDTP = dispatch => {
  return {
    fetchArtist: id => dispatch(fetchArtist(id)),
    fetchPaintings: () => dispatch(fetchPaintings())
  }
}

export default connect(mSTP, mDTP)(ArtistShow)