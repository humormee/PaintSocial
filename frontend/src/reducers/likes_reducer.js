import {
  RECEIVE_ALL_LIKES,
  RECEIVE_PAINTING_LIKES,
  RECEIVE_LIKE,
  REMOVE_LIKE
} from "../actions/like_actions";

const likesReducer = (oldState = {}, action) => {
  Object.freeze(oldState);
  let nextState = Object.assign({}, oldState);
  // debugger
  switch (action.type) {
    case RECEIVE_ALL_LIKES:
      
      nextState.likes = action.likes.data
      return nextState;
    case RECEIVE_PAINTING_LIKES:
      nextState.paintingLikes = action.likes.data;
      return nextState;
    case RECEIVE_LIKE:
      nextState.like = action.like.data;
      return nextState;
    case REMOVE_LIKE:
      delete nextState[action.id.data.deletedLike];
      return nextState;
    default:
      return oldState;
  }
}

export default likesReducer;