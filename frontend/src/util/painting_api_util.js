import axios from 'axios';


export const getPaintings = () => {
  return axios.get('/api/paintings')
};

export const getArtist = id => {
  return axios.get(`/api/users/${id}`)
}

export const getPainting = id => {
  return axios.get(`/api/paintings/${id}`)
}

export const getUserPaintings = id => {
  return axios.get(`/api/paintings/user/${id}`)
};

export const drawPainting = data => {
  return axios.post('/api/paintings/', data)
}

export const deleteP = id => {
  return axios.delete(`/api/paintings/${id}`)
}
