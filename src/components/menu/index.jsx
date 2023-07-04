import React, { memo } from 'react';
import { Offcanvas } from 'react-bootstrap';
import { Link } from 'react-router-dom';

function Menu({ show, handleClose }) {
  return (
    <Offcanvas show={show} onHide={handleClose}>
      <Offcanvas.Header closeButton>
        <Offcanvas.Title>Меню</Offcanvas.Title>
      </Offcanvas.Header>
      <Offcanvas.Body>
        Some text as placeholder. In real life you can have the elements you
        have chosen. Like, text, images, lists, etc.
        <Link to="/about">Обо мне</Link>
      </Offcanvas.Body>
    </Offcanvas>
  );
}

export default memo(Menu);
