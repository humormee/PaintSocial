import {
  getPaintingComments,
  getComment,
  createComment,
  deleteComment
} from '../util/comment_api_util'

export const RECEIVE_PAINTING_COMMENTS = 'RECEIVE_PAINTING_COMMENTS';
export const RECEIVE_COMMENT = 'RECEIVE_COMMENT';
export const RECEIVE_NEW_COMMENT = 'CREATE_COMMENT';
export const REMOVE_COMMENT = 'REMOVE_COMMENT';

const receiveUserComments = comments => ({
  type: RECEIVE_PAINTING_COMMENTS,
  comments
})

const receiveComment = comment => ({
  type: RECEIVE_COMMENT,
  comment
})

const receiveNewComment = comment => ({
  type: RECEIVE_NEW_COMMENT,
  comment
})

const removeComment = id => ({
  type: REMOVE_COMMENT,
  id
})

// export const fetchUserComments = paintingId => dispatch => {
//   return (

//   )
// }