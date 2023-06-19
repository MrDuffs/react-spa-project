import { LOAD_POSTS, LOAD_POSTS_FAILURE, LOAD_POSTS_SUCCESS } from './actions';

const initialPostsState = {
  data: [],
  page: 1,
  search: '',
  loading: false,
  error: null,
};

export default function postsReducer(state = initialPostsState, action) {
  switch (action.type) {
  case LOAD_POSTS: {
    return {
      ...state,
      loading: true,
    };
  }

  case LOAD_POSTS_SUCCESS: {
    return {
      ...state,
      data: action.payload,
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
