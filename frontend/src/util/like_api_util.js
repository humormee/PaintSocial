import axios from 'axios';

export const getPaintingLikes = paintingId => {
  return axios.get(`/api/likes/${paintingId}`)
}

export const createLike = data => {
  return axios.post(`/api/likes/painting/${data}`, data)
}

export const deleteLike = paintingId => {
  return axios.delete(`/api/likes/${paintingId}`)
}