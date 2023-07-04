import {
  take,
  takeEvery,
  fork,
  takeLatest,
  call,
  select,
  put,
} from 'redux-saga/effects';
import {
  LOAD_POSTS,
  LOAD_POSTS_SUCCESS,
} from '../../reducers/posts/actions';
import { getAllPostsAPI } from '../../../api';

// saga worker
export function* loadPosts() {
  const state = yield select((state) => state.posts);
  const { page, limit } = state.params;
  // console.log(page || 1);

  const request = yield call(getAllPostsAPI, `/posts?_page=${page || 1}&_limit=${limit || 10}`);
  const { data, headers } = request;

  yield put({
    type: LOAD_POSTS_SUCCESS,
    payload: {
      data,
      params: {
        page: page || 1,
        limit: limit || 10,
      },
      count: headers['x-total-count'],
    },
  });
}

// saga watcher
export default function* postsSaga() {
  yield takeEvery(LOAD_POSTS, loadPosts);
}
