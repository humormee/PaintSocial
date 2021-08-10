import {
  RECEIVE_PAINTING_COMMENTS,
  RECEIVE_COMMENT,
  RECEIVE_NEW_COMMENT,
  REMOVE_COMMENT
} from "../actions/comment_actions";

const commentsReducer = (oldState = {}, action) => {
  Object.freeze(oldState);
  let nextState = Object.assign({}, oldState);
  switch (action.type) {
    case RECEIVE_PAINTING_COMMENTS:
      // debugger
      nextState.paintingComments = action.comments.data;
      return nextState;
    case RECEIVE_COMMENT:
      nextState.comment = action.comment.data;
      return nextState;
    case RECEIVE_NEW_COMMENT:
      nextState.next = action.comment.data;
      return nextState;
    case REMOVE_COMMENT:
      delete nextState[action.id.data.deletedComment];
      // debugger
      return nextState;
    default:
      return oldState;
  }
}

export default commentsReducer;