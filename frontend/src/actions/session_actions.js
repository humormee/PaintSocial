import * as APIUtil from '../util/session_api_util';
// import
import jwt_decode from 'jwt-decode';

export const RECEIVE_CURRENT_USER = "RECEIVE_CURRENT_USER";
export const RECEIVE_SESSION_ERRORS = "RECEIVE_SESSION_ERRORS";
export const RECEIVE_USER_LOGOUT = "RECEIVE_USER_LOGOUT";
export const RECEIVE_USER_SIGN_IN = "RECEIVE_USER_SIGN_IN";
export const RECEIVE_ARTIST = "RECEIVE_ARTIST";

export const receiveArtist = artist => {
  debugger
  return ({
    type: RECEIVE_ARTIST,
    artist
  })
}

export const receiveCurrentUser = currentUser => ({
  type: RECEIVE_CURRENT_USER,
  currentUser
});

export const receiveUserSignIn = () => ({
  type: RECEIVE_USER_SIGN_IN
});

export const receiveErrors = errors => ({
  type: RECEIVE_SESSION_ERRORS,
  errors
});

export const logoutUser = () => ({
  type: RECEIVE_USER_LOGOUT
});

export const fetchArtist = id => dispatch => {
  debugger
return (
  APIUtil.getArtist(id).then(artist => {
    debugger
    return (
      dispatch(receiveArtist(artist))
    )
  }).catch(err =>
  console.log(err))
)};

export const signup = user => dispatch => {
  // debugger
  return ((
  APIUtil.signup(user).then(() => {
    // debugger
  return ((
    dispatch(receiveUserSignIn())
  ), err => (
    dispatch(receiveErrors(err.response.data))
  ))
  }
  ))
)};

export const login = user => dispatch => {
  // debugger
return (
  APIUtil.login(user).then(res => {
    // debugger
    const { token } = res.data;
    localStorage.setItem('jwtToken', token);
    APIUtil.setAuthToken(token);
    const decoded = jwt_decode(token);
    dispatch(receiveCurrentUser(decoded))
  })
    .catch(err => {
      dispatch(receiveErrors(err.response.data));
    })
)}

export const logout = () => dispatch => {
  localStorage.removeItem('jwtToken')
  APIUtil.setAuthToken(false)
  dispatch(logoutUser())
};