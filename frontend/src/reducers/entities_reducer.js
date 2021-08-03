import { combineReducers } from 'redux';
import paintingsReducer from './paintings_reducer';
import commentsReducer from './comments_reducer';

const entitiesReducer = combineReducers ({
  paintings: paintingsReducer,
  comments: commentsReducer
})

export default entitiesReducer;