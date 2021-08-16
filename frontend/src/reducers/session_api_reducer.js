import { RECEIVE_CURRENT_USER,
        RECEIVE_USER_LOGOUT,
        RECEIVE_USER_SIGN_IN,
        RECEIVE_ALL_USERS } from '../actions/session_actions';

const initialState = {
  isAuthenticated: false,
  user: {}
};

export default function (state = initialState, action) {
  switch (action.type) {
    case RECEIVE_ALL_USERS:
      return {
        ...state,
        allUsers: action.users.data
      }
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
      return {
        ...state,
        isSignedIn: true
      }
    default:
      return state;
  }
}