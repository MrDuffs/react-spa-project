import React, { memo } from 'react';
import { Spinner } from 'react-bootstrap';
import './style.css';

function Loader({ active, children }) {
  if (active) {
    return (
      <div className="loader">
        <Spinner
          animation="border"
          variant="info"
          style={{
            width: '3.5em',
            height: '3.5em',
          }}
        />
        <div className="loader__message">Загрузка</div>
      </div>
    );
  }

  return children;
}

export default memo(Loader);
