import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import data from './products.json'
import Cards from './cards'


const Card = () => {
  return (
    <Container className="my-4">
    <Row xs={1} sm={2} md={3} className="g-4">
      {data.map((item) => (
        <Col key={item.id}>
          <Cards {...item} />
        </Col>
      ))}
    </Row>
  </Container>
  )
}

export default Card
