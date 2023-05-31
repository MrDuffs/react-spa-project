import { memo } from 'react';
import { Container, Navbar } from 'react-bootstrap';

// <Button variant="primary" onClick={handleShow}>
//   Menu
// </Button>

function Header({ handleShow }) {
  return (
    <Navbar bg="light" expand={false} className="mb-3">
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
