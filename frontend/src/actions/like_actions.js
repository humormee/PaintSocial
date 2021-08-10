import {
  getPaintingLikes,
  createLike,
  deleteLike
} from '../util/like_api_util';

export const RECEIVE_PAINTING_LIKES = 'RECEIVE_PAINTING_LIKES';
export const REMOVE_LIKE = 'REMOVE_LIKE';
export const RECEIVE_LIKE = 'RECEIVE_LIKE';

const receivePaintingLikes = likes => ({
  type: RECEIVE_PAINTING_LIKES,
  likes
});

const receiveLike = like => ({
  type: RECEIVE_LIKE,
  like
});

const removeLike = likeId => ({
  type: REMOVE_LIKE,
  likeId
});

export const fetchPaintingLikes = paintingId => dispatch => {
  debugger
  getPaintingLikes(paintingId)
      .then(likes => {
        debugger
        return (
          dispatch(receivePaintingLikes(likes)))
        })
      .catch(err => console.log(err))
}

export const makeLike = data => dispatch => {
  return (
    createLike(data)
        .then(like => {
          
          return (
            dispatch(receiveLike(like))
          )
        })
        .catch(err => console.log(err))
  )
}

export const eraseLike = likeId => dispatch => {
  return (
    deleteLike(likeId)
        .then(likeId => dispatch(removeLike(likeId)))
        .catch(err => console.log(err))
  )
}