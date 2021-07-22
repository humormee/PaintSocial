import { combineReducers } from 'redux';
import paintingsReducer from './paintings_reducer';

const entitiesReducer = combineReducers ({
  paintings: paintingsReducer,
})

export default entitiesReducer;