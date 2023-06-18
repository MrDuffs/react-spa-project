import { memo } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import ItemCard from '../item-card';

function CardList(props) {
  return (
    <Container>
      {[1, 2, 3].map((item, index) => (
        <>
          {/* eslint-disable-next-line react/no-array-index-key */}
          <Row key={index}>
            <Col>
              <ItemCard />
            </Col>
          </Row>
          <br />
        </>
      ))}
    </Container>
  );
}

export default memo(CardList);
