import {
  getPaintings,
  getUserPaintings,
  drawPainting
} from '../util/painting_api_util'


export const RECEIVE_PAINTINGS = 'RECEIVE_PAINTINGS';
export const RECEIVE_USER_PAINTINGS = 'RECEIVE_USER_PAINTINGS';
export const RECEIVE_NEW_PAINTING = 'RECEIVE_NEW_PAINTING';

export const receivePaintings = paintings => ({
  type: RECEIVE_PAINTINGS,
  paintings
});

export const receiveUserPaintings = paintings => ({
  type: RECEIVE_USER_PAINTINGS,
  paintings
});

export const receiveNewPainting = painting => ({
  type: RECEIVE_NEW_PAINTING,
  painting
})

export const fetchPaintings = () => dispatch => (
  getPaintings().then(paintings => dispatch(receivePaintings(paintings))).catch(err => console.log(err))
);

export const fetchUserPaintings = id => dispatch => (
  getUserPaintings(id).then(paintings => dispatch(receiveUserPaintings(paintings))).catch(err => console.log(err))
);

export const createPainting = data => dispatch => (
  drawPainting(data).then(painting => dispatch(receiveNewPainting(painting))).catch(err => console.log(err))
);
