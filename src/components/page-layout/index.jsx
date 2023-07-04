import { memo } from 'react';
import { Container } from 'react-bootstrap';
import './style.css';

function PageLayout({ children }) {
  return (
    <Container fluid className="p-0 min-vh-100">
      {children}
    </Container>
  );
}

export default memo(PageLayout);
