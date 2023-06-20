import React, {
  memo, useCallback, useEffect, useState,
} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import PageLayout from '../../components/page-layout';
import Header from '../../components/header';
import Menu from '../../components/menu';
import CardList from '../../components/card-list';
import ItemCard from '../../components/item-card';
import PostsFilter from '../../containers/posts-filter';

function Main() {
  const dispatch = useDispatch();
  const [show, setShow] = useState(false);

  useEffect(() => {
    dispatch({
      type: 'LOAD_POSTS',
    });
  }, [dispatch]);

  const select = useSelector((state) => ({
    posts: state.posts.data,
    loading: state.posts.loading,
  }));

  // if (select) console.log(select.loading);

  const callbacks = {
    onShowMenu: () => setShow(true),
    onMenuClose: () => setShow(false),
  };

  const renders = {
    post: useCallback((item) => (
      <ItemCard item={item} />
    ), []),
  };

  return (
    <PageLayout>
      <Header handleShow={callbacks.onShowMenu} />
      <Menu show={show} handleClose={callbacks.onMenuClose} />
      <PostsFilter />
      {select.posts.length
        ? <CardList list={select.posts} renderItem={renders.post} />
        : 'Загрузка...'}
    </PageLayout>
  );
}

export default memo(Main);
