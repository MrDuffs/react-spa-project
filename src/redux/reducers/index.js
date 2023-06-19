import { combineReducers } from 'redux';
import postsReducer from './posts';

const initialState = {};

export function appReducer(state = initialState, action) {
  return state;
}

const rootReducer = combineReducers({
  app: appReducer,
  posts: postsReducer,
});

export default rootReducer;
