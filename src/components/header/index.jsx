import { memo } from 'react';
import { Container, Navbar } from 'react-bootstrap';

function Header({ handleShow }) {
  return (
    <Navbar bg="light" expand={false}>
      <Container className="justify-content-start gap-2">
        <Navbar.Toggle onClick={handleShow} aria-controls={`offcanvasNavbar-expand-${false}`} />
        <Navbar.Brand>
          Menu
        </Navbar.Brand>
      </Container>
    </Navbar>
  );
}

export default memo(Header);
