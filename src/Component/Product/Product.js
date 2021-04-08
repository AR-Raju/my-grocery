import React, { useEffect, useState } from "react";
import { Card, Button } from "react-bootstrap";

import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

const Product = (props) => {
  const { name, imageURL, price, _id } = props.products;
  return (
    <div>
      <Card style={{ width: "18rem" }}>
        <Card.Img variant="top" src={imageURL} />
        <Card.Body>
          <Card.Title>{name}</Card.Title>
        </Card.Body>
        <Card.Body className="d-flex justify-content-between">
          <Card.Title className="text-success">${price}</Card.Title>
          <Link to={`/checkOut/${_id}`}>
            <Button variant="success">Buy Now</Button>
          </Link>
        </Card.Body>
      </Card>
    </div>
  );
};

export default Product;
