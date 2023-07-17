import React, { useState } from 'react';

import { Container, Spinner } from 'react-bootstrap';
import SearchBar from '../components/searchbar';
import Products from '../components/products';

export default function Page() {
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState({});

  const handleSubmit = (text) => {
    setLoading(true);

    const fetchProducts = async (keyword) => {
      const data = {
        keyword: keyword,
      };

      const response = await fetch("/api/search", {
        method: "POST",
        body: JSON.stringify(data),
      });
      return response.json();
    };

    fetchProducts(text).then((data) => {
      setResult(data);
      setLoading(false);
    });
  };

  return (
    <Container className="pt-5">
      <h1 className="mb-3">
        {`Demo: Search Target's Product`}
      </h1>
      <SearchBar
        loading={loading}
        handleSubmit={handleSubmit}
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