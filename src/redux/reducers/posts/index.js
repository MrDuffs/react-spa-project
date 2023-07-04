import {
  LOAD_POSTS,
  LOAD_POSTS_SUCCESS,
  LOAD_POSTS_FAILURE,
} from './actions';

const initialPostsState = {
  data: [],
  params: {
    page: 1,
    limit: 10,
    search: '',
  },
  count: 0,
  loading: false,
  error: null,
};

export default function postsReducer(state = initialPostsState, action) {
  switch (action.type) {
  case LOAD_POSTS: {
    const page = action.payload?.params.page;

    return {
      ...state,
      params: {
        ...state.params,
        page: page || state.params.page,
      },
      loading: true,
    };
  }

  case LOAD_POSTS_SUCCESS: {
    const params = action.payload?.params;

    return {
      ...state,
      data: action.payload.data,
      params: {
        ...state.params,
        ...params,
      },
      count: action.payload.count,
      loading: false,
    };
  }

  case LOAD_POSTS_FAILURE: {
    return {
      ...state,
      error: action.payload,
      loading: false,
    };
  }

  default:
    return state;
  }
}
