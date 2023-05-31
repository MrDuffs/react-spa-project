import { memo, useState } from 'react';
import PageLayout from '../../components/page-layout';
import Header from '../../components/header';
import Menu from '../../components/menu';

function Main() {
  const [show, setShow] = useState(false);

  const callbacks = {
    onShowMenu: () => setShow(true),
    onMenuClose: () => setShow(false),
  };

  return (
    <PageLayout>
      <Header handleShow={callbacks.onShowMenu} />
      <Menu show={show} handleClose={callbacks.onMenuClose} />
      Main
    </PageLayout>
  );
}

export default memo(Main);
