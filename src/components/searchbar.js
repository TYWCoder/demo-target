import React, { useState } from 'react';
import { Form, Button, Row, Col } from 'react-bootstrap';


const SearchBar = (props) => {
  const { loading, setLoading, setResult } = props;
  const [keyword, setKeyword] = useState('');
  

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    const fetchProducts = async () => {
      const data = {
        keyword: keyword,
      };

      const response = await fetch("/api/search", {
        method: "POST",
        body: JSON.stringify(data),
      });
      return response.json();
    };

    fetchProducts().then((data) => {
      setResult(data);
      setLoading(false);
    });
  };

  return (
    <Form onSubmit={handleSubmit}>
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