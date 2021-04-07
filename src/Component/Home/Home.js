import React, { useEffect, useState } from "react";
import { Col, Container, Row, Spinner } from "react-bootstrap";
import Header from "../Header/Header";
import Product from "../Product/Product";

const Home = () => {
  //spinner
  const toggleSpinner = (show) => {
    const spinner = document.getElementById("loading");
    console.log(spinner.classList);

    // if (show) {
    //   spinner.classList.remove("d-none");
    // } else {
    //   spinner.classList.add("d-none");
    // }
  };
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("https://hidden-castle-03330.herokuapp.com/products")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);

  return (
    <div>
      <Header></Header>
      <div id="loading" className="text-center d-none">
        <Spinner animation="border" variant="success" />
      </div>
      <Container>
        <Row>
          {products.map((pd) => (
            <Col className="d-flex justify-content-arround mt-5">
              <Product key={pd._id} products={pd}></Product>
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
};

export default Home;
