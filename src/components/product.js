import React, { useState, useEffect } from 'react';
import Link from 'next/link'
import { Card } from 'react-bootstrap';
import { hasOwnNestedProperty } from '../helpers/lib';

export default function Product(props) {
  const { product } = props;
  const [hovered, setHovered] = useState(false);
  const [hasAltImg, setHasAltImg] = useState(false);

  useEffect(() => {
    if (
      hasOwnNestedProperty(
        product,
        'item.enrichment.images.alternate_image_urls',
      ) &&
      product.item.enrichment.images.alternate_image_urls.length > 0
    )
      setHasAltImg(true);
    else setHasAltImg(false);
  }, [product]);

  return (
    <>
      {hasOwnNestedProperty(product, 'item') && (
        <Link href={product.item.enrichment.buy_url}>
          <Card>
            <Card.Header
              className='p-0'
              onMouseEnter={() => setHovered(!hovered)}
              onMouseLeave={() => setHovered(!hovered)}
            >
              {hovered && hasAltImg ? (
                <Card.Img
                  variant="top"
                  src={product.item.enrichment.images.alternate_image_urls[0]}
                />
              ) : (
                <Card.Img
                  variant="top"
                  src={product.item.enrichment.images.primary_image_url}
                />
              )}
            </Card.Header>
            <Card.Body>
              <Card.Title>
                <div
                  data-testid={product.tcin}
                  dangerouslySetInnerHTML={{
                    __html: product.item.product_description.title,
                  }}
                />
              </Card.Title>
            </Card.Body>
          </Card>
        </Link>
      )}
    </>
  );
}