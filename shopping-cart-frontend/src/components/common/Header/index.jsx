import React from "react";
import { Navbar, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";

function Header() {
  return (
    <Navbar bg="dark" variant="dark">
      <Navbar.Brand href="#home" as={Link} to={"/"}>
        Cart
      </Navbar.Brand>
      <Nav className="mr-auto">
        <Nav.Link as={Link} to={"/"}>
          Anasayfa
        </Nav.Link>
        <Nav.Link as={Link} to={"/cart"}>
          Sepet
        </Nav.Link>
      </Nav>
    </Navbar>
  );
}

export default Header;
