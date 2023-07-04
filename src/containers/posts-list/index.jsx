import React, { memo, useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import CardList from '../../components/card-list';
import PaginationComponent from '../../components/pagination';
import ItemCard from '../../components/item-card';
import Loader from '../../components/loader';

function PostsList() {
  const dispatch = useDispatch();

  const select = useSelector((state) => ({
    posts: state.posts.data,
    count: state.posts.count,
    page: state.posts.params.page,
    limit: state.posts.params.limit,
    loading: state.posts.loading,
  }));

  const callbacks = {
    onPaginate: useCallback((page) => {
      dispatch({
        type: 'LOAD_POSTS',
        payload: {
          params: {
            page,
          },
        },
      });
    }, [dispatch]),
  };

  const renders = {
    post: useCallback((item) => (
      <ItemCard item={item} />
    ), []),
  };

  // Для проверки лоадера
  // const loading = true;

  return (
    <Loader active={select.loading}>
      <CardList list={select.posts} renderItem={renders.post} />
      <PaginationComponent
        count={select.count}
        page={select.page}
        limit={select.limit}
        onChange={callbacks.onPaginate}
      />
    </Loader>
  );
}

export default memo(PostsList);
