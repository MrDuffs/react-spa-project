import React, { memo } from 'react';
import Pagination from 'react-bootstrap/Pagination';
import { Col, Container, Row } from 'react-bootstrap';
import codeGenerator from '../../utils/code-generator';

function PaginationComponent({
  count, page, limit, onChange, indent = 1,
}) {
  // Кол-во страниц
  const length = Math.ceil(count / Math.max(limit, 1));

  // Номера слева и справа относительно активного номера, которые остаются видимыми
  let left = Math.max(page - indent, 1);
  const right = Math.min(left + indent * 2, length);

  // Корректировка когда страница в конце
  left = Math.max(right - indent * 2, 1);

  // Массив для рендера номеров
  const items = [];
  // Первая страница
  if (left > 1) items.push(1);
  // Пропуск
  if (left > 2) items.push(null);
  // Последовательность страниц
  for (let page = left; page <= right; page += 1) {
    items.push(page);
  }
  // Пропуск
  if (right < length - 1) items.push(null);
  // Последняя страница
  if (right < length) items.push(length);

  const onClickHandler = (number) => (e) => {
    if (onChange && number !== page) {
      e.preventDefault();
      onChange(number);
    }
  };

  return (
    <Container>
      <Row>
        <Col>
          <Pagination className="justify-content-end">
            <Pagination.Prev
              disabled={page === 1}
              onClick={onClickHandler(page - 1)}
            />
            {items.map((number, index) => {
              if (number) {
                return (
                  <Pagination.Item
                    key={number}
                    active={number === page}
                    onClick={onClickHandler(number)}
                  >
                    {number}
                  </Pagination.Item>
                );
              }
              return (
                <Pagination.Ellipsis key={codeGenerator(index)} />
              );
            })}
            <Pagination.Next
              disabled={page === length}
              onClick={onClickHandler(page + 1)}
            />
          </Pagination>
        </Col>
      </Row>
    </Container>
  );
}

export default memo(PaginationComponent);
