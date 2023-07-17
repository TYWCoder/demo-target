import React, { useState, useEffect } from 'react';
import { Row, Col, Alert } from 'react-bootstrap';
import Product from './product';

export default function Products(props) {
  const { data } = props;
  const [show, setShow] = useState(false);

  useEffect(() => {
    if (!data?.success && data?.msg)
      setShow(true);
    else
      setShow(false);
  }, [data]);

  return (
    <>
      {show ? (
        <Col xs={12} className="mt-2">
          <Alert
            className="m-0"
            variant="danger"
            onClose={() => setShow(false)}
            dismissible
          >
            <p className="mb-0" data-testid="show-alert">{data?.msg}</p>
          </Alert>
        </Col>
      ) : (
        <>
          {data?.products?.length === 0 && <p>No products found</p>}
          {data?.products?.length > 0 && (
            <Row>
              {data.products.map((product, index) => (
                <Col sm={6} md={6} lg={4} key={index} className="mb-4" data-testid="product-item">
                  <Product product={product} />
                </Col>
              ))}
            </Row>
          )}
        </>
      )}
    </>
  );
}