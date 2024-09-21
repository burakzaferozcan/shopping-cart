import React from "react";
import { Navbar, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";
import withRouter from "../../../withRouter";
import cartWrapper from "../../../cartWrapper";

function Header({ location, cart }) {
  return (
    <Navbar bg="dark" variant="dark">
      <Navbar.Brand href="#home" as={Link} to={"/"}>
        Cart
      </Navbar.Brand>
      <Nav className="mr-auto">
        <Nav.Link as={Link} to={"/"} active={location.pathname === "/"}>
          Anasayfa
        </Nav.Link>
        <Nav.Link as={Link} to={"/cart"} active={location.pathname === "/cart"}>
          Sepet ({cart.totalUniqueItems})
        </Nav.Link>
      </Nav>
    </Navbar>
  );
}

export default withRouter(cartWrapper(Header));
