import React, { memo, useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import PageLayout from '../../components/page-layout';
import Header from '../../components/header';
import Menu from '../../components/menu';
import PostsFilter from '../../containers/posts-filter';
import PostsList from '../../containers/posts-list';

function Main() {
  const dispatch = useDispatch();
  const [show, setShow] = useState(false);

  useEffect(() => {
    dispatch({
      type: 'LOAD_POSTS',
    });
  }, [dispatch]);

  const callbacks = {
    onShowMenu: () => setShow(true),
    onMenuClose: () => setShow(false),
  };

  return (
    <PageLayout>
      <Header handleShow={callbacks.onShowMenu} />
      <Menu show={show} handleClose={callbacks.onMenuClose} />
      <PostsFilter />
      <PostsList />
    </PageLayout>
  );
}

export default memo(Main);
