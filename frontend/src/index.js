import React from 'react';
import ReactDOM from 'react-dom';
import Root from './components/root';
import configureStore from './store/store';
import jwt_decode from 'jwt-decode';
import { setAuthToken } from './util/session_api_util';
import { logout } from './actions/session_actions';
import axios from 'axios';
import { getPaintingLikes, createLike, deleteLike } from './util/like_api_util';
import { getComment, getPaintingComments, createComment, deleteComment } from './util/comment_api_util';

document.addEventListener('DOMContentLoaded', () => {
  let store;


  if (localStorage.jwtToken) {

    setAuthToken(localStorage.jwtToken);

    const decodedUser = jwt_decode(localStorage.jwtToken);

    const preloadedState = { session: { isAuthenticated: true, user: decodedUser } };

    store = configureStore(preloadedState);

    const currentTime = Date.now() / 1000;

    if (decodedUser.exp < currentTime) {
      store.dispatch(logout());
      window.location.href = '/login';
    }
  } else {
    store = configureStore({});
  }
  const root = document.getElementById('root');

  window.axios = axios;
  // window.getComment = getComment;
  window.getPaintingComments = getPaintingComments;
  // window.createComment = createComment;
  // window.deleteComment = deleteComment;
  window.getPaintingLikes = getPaintingLikes;
  window.createLike = createLike;
  window.deleteLike = deleteLike;
  // window.

  window.store = store;
  window.getState = store.getState;
  window.dispatch = store.dispatch;
 
  ReactDOM.render(<Root store={store} />, root);
});