import axios from 'axios';

export const getPaintingComments = paintingId => {
  return axios.get(`/api/comments/painting/${paintingId}`)
}

export const getComment = commentId => {
  return axios.get(`/api/comments/${commentId}`)
}

export const createComment = data => {
  return axios.post(`/api/comments/painting/${data.painting}`, data)
}

export const deleteComment = id => {
  return axios.delete(`/api/comments/${id}`)
}