import React, { memo } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import './style.css';

function SideLayout({ children, direction }) {
  return (
    <Container>
      {direction === 'column' ? (
        React.Children.map(children, (child) => (
          <Row key={child.key}>
            <Col xs lg="5" className="mt-4">{child}</Col>
          </Row>
        ))
      ) : (
        <Row>
          {React.Children.map(children, (child) => (
            <Col key={child.key} className="mt-4">{child}</Col>
          ))}
        </Row>
      )}
    </Container>
  );
}

export default memo(SideLayout);
