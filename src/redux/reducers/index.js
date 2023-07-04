import { combineReducers } from 'redux';
// import { createReduxHistoryContext } from 'redux-first-history';
// import { createBrowserHistory } from 'history';
import postsReducer from './posts';

// export const {
//   createReduxHistory,
//   routerMiddleware,
//   routerReducer,
// } = createReduxHistoryContext({
//   history: createBrowserHistory(),
// });

const initialState = {};

export function appReducer(state = initialState, action) {
  return state;
}

const rootReducer = combineReducers({
  app: appReducer,
  // router: routerReducer,
  posts: postsReducer,
});

export default rootReducer;
