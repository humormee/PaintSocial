import {
  RECEIVE_PAINTING_LIKES,
  RECEIVE_LIKE,
  REMOVE_LIKE
} from "../actions/like_actions";

const likesReducer = (oldState = {}, action) => {
  Object.freeze(oldState);
  let nextState = Object.assign({}, oldState);
  switch (action.type) {
    case RECEIVE_PAINTING_LIKES:
      nextState.paintingLikes = action.likes.oldStatae;
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