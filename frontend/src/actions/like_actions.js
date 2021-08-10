import {
  getAllLikes,
  getPaintingLikes,
  createLike,
  deleteLike
} from '../util/like_api_util';

export const RECEIVE_ALL_LIKES = 'RECEIVE_ALL_LIKES';
export const RECEIVE_PAINTING_LIKES = 'RECEIVE_PAINTING_LIKES';
export const REMOVE_LIKE = 'REMOVE_LIKE';
export const RECEIVE_LIKE = 'RECEIVE_LIKE';

const receiveAllLikes = likes => ({
  type: RECEIVE_ALL_LIKES,
  likes
})

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

export const fetchAllLikes = () => dispatch => {
  getAllLikes()
      .then(likes => {
        return (
          dispatch(receiveAllLikes(likes))
        )
      })
      .catch(err => console.log(err))
}

export const fetchPaintingLikes = paintingId => dispatch => {
  getPaintingLikes(paintingId)
      .then(likes => {
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