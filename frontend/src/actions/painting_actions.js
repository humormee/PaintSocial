import {
  getPaintings,
  getPainting,
  getUserPaintings,
  drawPainting,
  deleteP
} from '../util/painting_api_util'

export const RECEIVE_PAINTINGS = 'RECEIVE_PAINTINGS';
export const RECEIVE_PAINTING = 'RECEIVE_PAINTING';
export const RECEIVE_USER_PAINTINGS = 'RECEIVE_USER_PAINTINGS';
export const RECEIVE_NEW_PAINTING = 'RECEIVE_NEW_PAINTING';
export const REMOVE_PAINTING = 'REMOVE_PAINTING';

export const receivePaintings = paintings => ({
  type: RECEIVE_PAINTINGS,
  paintings
});

export const receivePainting = painting => ({
  type: RECEIVE_PAINTINGS,
  painting
});

export const receiveUserPaintings = paintings => ({
  type: RECEIVE_USER_PAINTINGS,
  paintings
});

export const receiveNewPainting = painting => ({
  type: RECEIVE_NEW_PAINTING,
  painting
})

export const removePainting = id => ({
  type: REMOVE_PAINTING,
  id
})

export const fetchPaintings = () => dispatch => (
  getPaintings().then(paintings => dispatch(receivePaintings(paintings))).catch(err => console.log(err))
);

export const fetchPainting = id => dispatch => (
  getPainting().then(painting => dispatch(receivePainting(painting))).catch(err =>
  console.log(err))
)

export const fetchUserPaintings = id => dispatch => (
  getUserPaintings(id).then(paintings => dispatch(receiveUserPaintings(paintings))).catch(err => console.log(err))
);

export const createPainting = data => dispatch => (
  drawPainting(data).then(painting => dispatch(receiveNewPainting(painting))).catch(err => console.log(err))
);

export const deletePainting = id => dispatch => (deleteP(id)
  .then(() => dispatch(removePainting(id)))
)