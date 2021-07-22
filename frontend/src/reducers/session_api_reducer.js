import { RECEIVE_CURRENT_USER,
        RECEIVE_USER_LOGOUT,
        RECEIVE_USER_SIGN_IN,
        RECEIVE_ARTIST } from '../actions/session_actions';

const initialState = {
  isAuthenticated: false,
  user: {}
};

export default function (state = initialState, action) {
  // debugger
  switch (action.type) {
    case RECEIVE_CURRENT_USER:
      return {
        ...state,
        isAuthenticated: !!action.currentUser,
        user: action.currentUser
      };
    case RECEIVE_USER_LOGOUT:
      return {
        isAuthenticated: false,
        user: undefined
      };
    case RECEIVE_USER_SIGN_IN:
      // debugger
      return {
        ...state,
        isSignedIn: true
      }
    case RECEIVE_ARTIST:
      debugger
      return {
        ...state,
        artist: action.artist
      }
    default:
      return state;
  }
}