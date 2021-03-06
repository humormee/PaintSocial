import { connect } from 'react-redux';
import PaintingShow from './painting_show';
import { makeComment, fetchPaintingComments, fetchComment, eraseComment } from '../../actions/comment_actions';
import { fetchPainting, fetchPaintings, fetchArtist, deletePainting} from '../../actions/painting_actions';
import { fetchPaintingLikes, makeLike, eraseLike } from '../../actions/like_actions';

const mSTP = (state, props) => {
  const paintArray = state.entities.paintings.all;
  let painting;
  
  for (let i = 0; i < paintArray.length; i++) {
    if ( paintArray[i]._id === props.match.params.id ) {
      painting = paintArray[i]
    } 
  }
  return {
    painting: painting,
    entities: state.entities,
    session: state.session,
    comments: state.entities.comments,
    likes: state.entities.likes.paintingLikes
  }
};

const mDTP = dispatch => {
  
  return {
    fetchArtist: id => dispatch(fetchArtist(id)),
    fetchPainting: id => dispatch(fetchPainting(id)),
    fetchPaintings: () => dispatch(fetchPaintings()),
    deletePainting: id => dispatch(deletePainting(id)),
    fetchPaintingComments: id => dispatch(fetchPaintingComments(id)),
    makeComment: comment => dispatch(makeComment(comment)),
    eraseComment: id => dispatch(eraseComment(id)),
    makeLike: data => dispatch(makeLike(data)),
    eraseLike: id => dispatch(eraseLike(id)),
    fetchPaintingLikes: id => dispatch(fetchPaintingLikes(id))
  }
  
}

export default connect(mSTP, mDTP)(PaintingShow)