import {
  takeEvery,
  call,
  apply,
  put,
} from 'redux-saga/effects';
import { LOAD_POSTS, LOAD_POSTS_SUCCESS } from '../../reducers/posts/actions';
import { getAllPostsAPI } from '../../../api';

// saga worker
export function* loadPosts() {
  const request = yield call(getAllPostsAPI, '/posts?_limit=10');
  const { data } = request;

  yield put({
    type: LOAD_POSTS_SUCCESS,
    payload: data,
  });
}

// saga watcher
export default function* postsSaga() {
  yield takeEvery(LOAD_POSTS, loadPosts);
}
