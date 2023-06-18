import React, { memo } from 'react';
import { Container } from 'react-bootstrap';
import './style.css';

function PageLayout({ children }) {
  return (
    <Container fluid className="p-0">
      {children}
    </Container>
  );
}

export default memo(PageLayout);
