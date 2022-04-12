import React from "react";
import { Nav, Navbar } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

const Header = () => {
  return (
    <Navbar bg="dark" variant="dark">
      <Nav>
        <Nav.Link>Abhinav Kumar</Nav.Link>
        <Nav.Link>abhinavformula1@gmail.com</Nav.Link>
      </Nav>
    </Navbar>
  );
};
export default Header;
