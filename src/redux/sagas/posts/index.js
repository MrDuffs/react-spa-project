import {
  takeEvery,
  call,
  apply,
  put,
} from 'redux-saga/effects';
import { LOAD_POSTS, LOAD_POSTS_SUCCESS } from '../../reducers/posts/actions';

// saga worker
export function* loadPosts() {
  const request = yield call(fetch, 'https://jsonplaceholder.typicode.com/posts');
  const data = yield apply(request, request.json);

  yield put({
    type: LOAD_POSTS_SUCCESS,
    payload: data,
  });
}

// saga watcher
export default function* postsSaga() {
  yield takeEvery(LOAD_POSTS, loadPosts);
}
