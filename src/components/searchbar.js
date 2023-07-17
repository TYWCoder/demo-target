import React, { useState } from 'react';
import { Form, Button, Row, Col } from 'react-bootstrap';


const SearchBar = (props) => {
  const { loading, handleSubmit } = props;
  const [keyword, setKeyword] = useState('');
  

  const onSubmit = (e) => {
    e.preventDefault();
    handleSubmit(keyword);
  };

  return (
    <Form onSubmit={onSubmit}>
      <Row>
        <Col sm="6" xs="9">
          <Form.Control
            type="search"
            placeholder="Please type keyword"
            value={keyword}
            onChange={({ target }) => setKeyword(target.value)}
          />
        </Col>
        <Col sm="6" xs="3">
          <Button
            variant="primary"
            type="submit"
            disabled={loading}
          >
            Search
          </Button>
        </Col>
      </Row>
    </Form>
  );
}

export default SearchBar