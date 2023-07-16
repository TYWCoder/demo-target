import React, { useState } from 'react';

import { Container, Spinner } from 'react-bootstrap';
import SearchBar from '../components/searchbar';
import Products from '../components/products';

export default function Page() {
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState({});

  return (
    <Container className="pt-5">
      <h1 className="mb-3">Demo: Search Target's Product</h1>
      <SearchBar
        loading={loading}
        setLoading={setLoading}
        setResult={setResult}
      />
      <hr />
      {loading ? (
        <>
          <Spinner /> Loading...
        </>
      ) : (
        <Products data={result} />
      )}
    </Container>
  );
}