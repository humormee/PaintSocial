import {
  getPaintings,
  getPainting,
  getUserPaintings,
  drawPainting,
  deleteP,
  getArtist
} from '../util/painting_api_util'

export const RECEIVE_PAINTINGS = 'RECEIVE_PAINTINGS';
export const RECEIVE_PAINTING = 'RECEIVE_PAINTING';
export const RECEIVE_USER_PAINTINGS = 'RECEIVE_USER_PAINTINGS';
export const RECEIVE_NEW_PAINTING = 'RECEIVE_NEW_PAINTING';
export const REMOVE_PAINTING = 'REMOVE_PAINTING';
export const RECEIVE_ARTIST = "RECEIVE_ARTIST";


export const receivePaintings = paintings => ({
  type: RECEIVE_PAINTINGS,
  paintings
});

export const receivePainting = painting => {
  debugger
  return ({
    type: RECEIVE_PAINTING,
    painting
  })
};

export const receiveArtist = artist => {
  
  return ({
    type: RECEIVE_ARTIST,
    artist
  })
}

export const receiveUserPaintings = paintings => ({
  type: RECEIVE_USER_PAINTINGS,
  paintings
});

export const receiveNewPainting = painting => ({
  type: RECEIVE_NEW_PAINTING,
  painting
})

export const removePainting = id => {
  
  return ({
    type: REMOVE_PAINTING,
    id
  })
}

export const fetchArtist = id => dispatch => {
  
return (
  getArtist(id).then(artist => {
    
    return (
      dispatch(receiveArtist(artist))
    )
  }).catch(err =>
  console.log(err))
)};

export const fetchPaintings = () => dispatch => (
  getPaintings().then(paintings => dispatch(receivePaintings(paintings))).catch(err => console.log(err))
);

export const fetchPainting = id => dispatch => {
  return (
    getPainting(id).then(painting => dispatch(receivePainting(painting))).catch(err =>
    console.log(err))
  )
}

export const fetchUserPaintings = id => dispatch => (
  getUserPaintings(id).then(paintings => dispatch(receiveUserPaintings(paintings))).catch(err => console.log(err))
);

export const createPainting = data => dispatch => (
  drawPainting(data).then(painting => dispatch(receiveNewPainting(painting))).catch(err => console.log(err))
);

export const deletePainting = id => dispatch => (deleteP(id)
  .then(() => dispatch(removePainting(id)))
)