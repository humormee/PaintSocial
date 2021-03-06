import {
  RECEIVE_PAINTINGS,
  RECEIVE_USER_PAINTINGS,
  RECEIVE_NEW_PAINTING,
  RECEIVE_PAINTING,
  REMOVE_PAINTING,
  RECEIVE_ARTIST
} from '../actions/painting_actions';


const paintingsReducer = (oldState = { all: {}, user: {}, new: undefined}, action) => {
  Object.freeze(oldState);
  let nextState = Object.assign({}, oldState);
  switch (action.type) {
    case RECEIVE_PAINTINGS:
      nextState.all = action.paintings.data;
      return nextState;
    case RECEIVE_PAINTING:
      return Object.assign({}, oldState, {painting: action.painting})
    case RECEIVE_USER_PAINTINGS:
      nextState.user = action.paintings.data;
      return nextState;
    case RECEIVE_NEW_PAINTING:
      nextState.next = action.painting.data
      return nextState;
    case REMOVE_PAINTING:
      delete nextState[action.id]
      return nextState;
    case RECEIVE_ARTIST:
      nextState.artist = action.artist.data
      return nextState
    default:
      return oldState;
  }
};

export default paintingsReducer;