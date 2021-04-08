import React, { useContext } from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { UserContex } from "../../App";
const Header = () => {
  const [loggedInUser, setLoggedInUser] = useContext(UserContex);
  return (
    <Container>
      <Navbar>
        <Navbar.Brand
          href="/home"
          className="text-white font-weight-bold bg-warning px-3"
        >
          My Grocery
        </Navbar.Brand>
        <Nav className="ml-auto">
          <Link className="mr-2" to="/home">
            Home
          </Link>
          <Link className="mr-2" to="/admin">
            Admin
          </Link>
          <Link className="mr-2" to="/home">
            Contact
          </Link>
          {loggedInUser.email ? (
            <Link className="mr-2" to="/addProducts">
              {loggedInUser.name}
            </Link>
          ) : (
            <Link
              className="mr-2"
              to="/login"
              className="text-white bg-warning px-2"
            >
              Login
            </Link>
          )}
          <Link
            className="mr-2"
            to="/login"
            className="text-white bg-warning px-2"
            onClick={() => setLoggedInUser({})}
          >
            Logout
          </Link>
        </Nav>
      </Navbar>
    </Container>
  );
};

export default Header;
