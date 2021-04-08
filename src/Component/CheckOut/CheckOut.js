import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Table } from "react-bootstrap";

const CheckOut = () => {
  const { id } = useParams();
  const [product, setProduct] = useState({});

  useEffect(() => {
    fetch("https://hidden-castle-03330.herokuapp.com/checkOut/" + id)
      .then((res) => res.json())
      .then((data) => setProduct(data));
  }, [id]);
  //   console.log(product);
  console.log(product.name);
  return (
    <div>
      <h1>Checkout</h1>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Description</th>
            <th>Quantity</th>
            <th>Price</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>{product.name}</td>
            <td>1</td>
            <td>{product.price}</td>
          </tr>
        </tbody>
      </Table>
    </div>
  );
};

export default CheckOut;
