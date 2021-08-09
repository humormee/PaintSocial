import { combineReducers } from 'redux';
import paintingsReducer from './paintings_reducer';
import commentsReducer from './comments_reducer';
import likesReducer from './likes_reducer';

const entitiesReducer = combineReducers ({
  paintings: paintingsReducer,
  comments: commentsReducer,
  likes: likesReducer
})

export default entitiesReducer;