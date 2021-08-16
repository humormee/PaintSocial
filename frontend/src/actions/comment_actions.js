import {
  getPaintingComments,
  getComment,
  createComment,
  deleteComment
} from '../util/comment_api_util';
import { getArtist } from '../util/painting_api_util';
import { getUserPaintings } from '../util/painting_api_util';

export const RECEIVE_PAINTING_COMMENTS = 'RECEIVE_PAINTING_COMMENTS';
export const RECEIVE_COMMENT = 'RECEIVE_COMMENT';
export const RECEIVE_NEW_COMMENT = 'RECEIVE_NEW_COMMENT';
export const REMOVE_COMMENT = 'REMOVE_COMMENT';

const receivePaintingComments = comments => ({
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


export const fetchPaintingComments = paintingId => dispatch => {
  return (
    getPaintingComments(paintingId)
        .then(comments => dispatch(receivePaintingComments(comments)))
        .catch(err => console.log(err))
  )
}

export const fetchComment = commentId => dispatch => {
  return (
    getComment(commentId)
        .then(comment => {
          dispatch(receiveComment(comment))
          getArtist(comment.commenter)
        })
        .catch(err => console.log(err))
    
  )
}

export const makeComment = data => dispatch => {
  return (
    createComment(data)
        .then(comment => {
          return (
            dispatch(receiveNewComment(comment))
          )
        })
        .catch(err => console.log(err))
  )
}

export const eraseComment = commentId => dispatch => {
  return (
    deleteComment(commentId)
        .then(commentId => dispatch(removeComment(commentId)))
        .catch(err => console.log(err))
  )
}