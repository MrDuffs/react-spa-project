import { memo } from 'react';
import { Col, Container, Row } from 'react-bootstrap';

function CardList({ list, renderItem }) {
  return (
    <Container className="d-flex flex-column gap-4 mt-4 mb-4">
      {list.map((item) => (
        <Row key={item.id}>
          <Col>
            {renderItem(item)}
          </Col>
        </Row>
      ))}
    </Container>
  );
}

export default memo(CardList);
