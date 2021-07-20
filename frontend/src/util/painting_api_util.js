import axios from 'axios';


export const getPaintings = () => {
  return axios.get('/api/paintings')
};

export const getUserPaintings = id => {
  return axios.get(`/api/paintings/user/${id}`)
};

export const drawPainting = data => {
  return axios.post('/api/paintings/', data)
}