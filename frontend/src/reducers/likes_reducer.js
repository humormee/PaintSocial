import {
  RECEIVE_PAINTING_LIKES,
  RECEIVE_LIKE,
  REMOVE_LIKE
} from "../actions/like_actions";

const likesReducer = (oldState = {}, action) => {
  Objec.freeze(oldState)
}