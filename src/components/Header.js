import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Badge from "@mui/material/Badge";
import { NavLink } from "react-bootstrap";

const Header = () => {
  return (
    <>
      <Navbar bg="dark" variant="dark">
        <Container>
          <NavLink to="/" className="text-decoration-none text-light mx-3">
            Add To Cart
          </NavLink>
          <Nav className="me-auto">
            <NavLink to="/" className="text-decoration-none text-light">
              Home
            </NavLink>
          </Nav>
          <Badge badgeContent={4} color="primary">
            <i
              class="fa fa-shopping-cart text-light"
              style={{ fontSize: 25, cursor: "pointer" }}
              aria-hidden="true"
            ></i>
          </Badge>
        </Container>
      </Navbar>
    </>
  );
};

export default Header;
