import React from "react";
import { Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const NavbarHeader = () => {
  return (
    <Navbar
      bg="primary"
      variant="dark"
      expand="md"
      className="sticky-top p-0 shadow"
    >
      <Navbar.Brand as={Link} className="col-md-3 mr-0 px-3" to="/">
        Meme Generator
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="m-auto">
          <Nav.Link as={Link} to="/">
            <FontAwesomeIcon icon="plus-square" /> Create Meme
          </Nav.Link>
          <Nav.Link as={Link} to="/gallery">
            <FontAwesomeIcon icon="image" /> Gallery
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default NavbarHeader;
