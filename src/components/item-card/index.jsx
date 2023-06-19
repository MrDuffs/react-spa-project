import { memo } from 'react';
import { Card } from 'react-bootstrap';

function ItemCard({ item }) {
  return (
    <Card>
      <Card.Body>
        <Card.Title>{item.title}</Card.Title>
        <Card.Text>
          {item?.body}
        </Card.Text>
      </Card.Body>
    </Card>
  );
}

export default memo(ItemCard);
