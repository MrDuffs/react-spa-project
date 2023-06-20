import React, { memo, useLayoutEffect, useState } from 'react';
import { Form, InputGroup, Button } from 'react-bootstrap';

function Input(props) {
  const [value, setValue] = useState();

  // Обновление стейта, если передан новый value
  // useLayoutEffect(() => setValue(props.value), [props.value]);

  return (
    <InputGroup className="mb-3">
      <Form.Control
        placeholder="Recipient's username"
        aria-label="Recipient's username"
        aria-describedby="basic-addon2"
      />
      <Button variant="outline-secondary" id="button-addon2">
        Button
      </Button>
    </InputGroup>
  );
}

export default memo(Input);
