import React from 'react';
import { Container, Row, Col, Image, Button } from 'react-bootstrap';
import { useParams } from 'react-router-dom';

const products = [
  { id: 1, name: 'Laptop', price: 999, imageUrl: '/images/laptop.jpg', description: 'High-performance laptop' },
  { id: 2, name: 'Headphones', price: 199, imageUrl: '/images/headphones.jpg', description: 'Noise-cancelling headphones' },
];

const ProductDetails = () => {
  const { id } = useParams();
  const product = products.find((p) => p.id === parseInt(id));

  if (!product) return <h2>Product not found!</h2>;

  return (
    <Container className="mt-4">
      <Row>
        <Col md={6}>
          <Image src={product.imageUrl} alt={product.name} fluid />
        </Col>
        <Col md={6}>
          <h3>{product.name}</h3>
          <p>{product.description}</p>
          <h4>${product.price}</h4>
          <Button variant="primary">Add to Cart</Button>
        </Col>
      </Row>
    </Container>
  );
};

export default ProductDetails;
