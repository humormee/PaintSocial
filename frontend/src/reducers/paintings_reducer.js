import {
  RECEIVE_PAINTINGS,
  RECEIVE_USER_PAINTINGS,
  RECEIVE_NEW_PAINTING
} from '../actions/painting_actions';

const PaintingsReducer = (oldState = { all: {}, user: {}, new: undefined}, action) => {
  Object.freeze(state);
  let nextState = Object.assign({}, oldState);
  switch (action.type) {
    case RECEIVE_PAINTINGS:
      nextState.all = action.paintings.data;
      return nextState;
    case RECEIVE_USER_PAINTINGS:
      nextState.user = action.paintings.data;
      return nextState;
    case RECEIVE_NEW_PAINTING:
      nextState.next = action.painting.data
      return nextState;
      default:
        return state;
  }
};

export default PaintingsReducer;