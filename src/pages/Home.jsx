import React from 'react'
import { Container, Row, Col, Card } from 'react-bootstrap'

function Home() {
  return (
    <Container>
      <Row className="my-4">
        <Col>
          <h1>Welcome to E-Shop</h1>
          <p>Discover amazing products at great prices!</p>
        </Col>
      </Row>
      <Row>
        <Col md={4}>
          <Card>
            <Card.Body>
              <Card.Title>Latest Products</Card.Title>
              <Card.Text>
                Check out our newest arrivals
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col md={4}>
          <Card>
            <Card.Body>
              <Card.Title>Special Offers</Card.Title>
              <Card.Text>
                Great deals just for you
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col md={4}>
          <Card>
            <Card.Body>
              <Card.Title>Free Shipping</Card.Title>
              <Card.Text>
                On orders over $50
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  )
}

export default Home
