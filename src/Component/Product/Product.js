import React from "react";
import { Card, Button } from "react-bootstrap";

const Product = (props) => {
  const { name, imageURL, price } = props.products;
  return (
    <div>
      <Card style={{ width: "18rem" }}>
        <Card.Img variant="top" src={imageURL} />
        <Card.Body>
          <Card.Title>{name}</Card.Title>
        </Card.Body>
        <Card.Body className="d-flex justify-content-between">
          <Card.Title className="text-success">${price}</Card.Title>
          <Button variant="success">Buy Now</Button>
        </Card.Body>
      </Card>
    </div>
  );
};

export default Product;
