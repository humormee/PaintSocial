import axios from 'axios';

export const getPaintingLikes = paintingId => {
  debugger
  return axios.get(`/api/likes/painting/${paintingId}`)
}

export const createLike = data => {
  return axios.post(`/api/likes/painting/${data.painting}`, data)
}

export const deleteLike = paintingId => {
  return axios.delete(`/api/likes/${paintingId}`)
}