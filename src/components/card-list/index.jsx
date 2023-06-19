import { memo } from 'react';
import { Col, Container, Row } from 'react-bootstrap';

function CardList({ list, renderItem }) {
  return (
    <Container>
      {list.map((item) => (
        <>
          <Row key={item.id}>
            <Col>
              {renderItem(item)}
            </Col>
          </Row>
          <br />
        </>
      ))}
    </Container>
  );
}

export default memo(CardList);
