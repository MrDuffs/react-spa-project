import React, { memo } from 'react';
import { Col, Row } from 'react-bootstrap';
import Form from 'react-bootstrap/Form';

function Select(props) {
  // const onSelect = (e) => {
  //   props.onChange(e.target.value);
  // };

  return (
    <Form.Select>
      {/* {['123', '124', '125'].map((item) => ( */}
      {/*   <option key={item.value} value={item.value}>{item.value}</option> */}
      {/* ))} */}
      <option>Open this select menu</option>
      <option value="1">One</option>
      <option value="2">Two</option>
      <option value="3">Three</option>
    </Form.Select>
  );
}

export default memo(Select);
