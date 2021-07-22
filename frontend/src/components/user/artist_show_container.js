import { connect } from 'react-redux';
import ArtistShow from './artist_show';
import { fetchArtist } from '../../actions/painting_actions';
import { fetchPaintings, fetchUserPaintings } from '../../actions/painting_actions';


const mSTP = state => {
  
  return {
    entities: state.entities
  }
}


const mDTP = dispatch => {
  return {
    fetchArtist: id => dispatch(fetchArtist(id)),
    fetchPaintings: () => dispatch(fetchPaintings()),
    fetchUserPaintings: id => dispatch(fetchUserPaintings(id))
  }
}

export default connect(mSTP, mDTP)(ArtistShow)