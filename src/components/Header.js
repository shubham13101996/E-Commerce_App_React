import React, { useState } from "react";
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Badge from "@mui/material/Badge";
import { NavLink, Table } from "react-bootstrap";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import { useDispatch, useSelector } from "react-redux/es/exports";
import { Link } from "react-router-dom";
import { DELETE } from "../redux/actions/action";

const Header = () => {
  const getData = useSelector((state) => state.cartReducer.carts);
  console.log(getData);
  const dispatch = useDispatch();

  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const remove = (id) => {
    dispatch(DELETE(id));
  };

  return (
    <>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Link to="/" className="text-decoration-none text-light mx-3">
            Add To Cart
          </Link>
          <Nav className="me-auto">
            <Link to="/" className="text-decoration-none text-light">
              Home
            </Link>
          </Nav>
          <Badge
            badgeContent={getData.length}
            color="primary"
            id="basic-button"
            aria-controls={open ? "basic-menu" : undefined}
            aria-haspopup="true"
            aria-expanded={open ? "true" : undefined}
            onClick={handleClick}
          >
            <i
              class="fa fa-shopping-cart text-light"
              style={{ fontSize: 25, cursor: "pointer" }}
              aria-hidden="true"
            ></i>
          </Badge>
        </Container>
        <Menu
          id="basic-menu"
          anchorEl={anchorEl}
          open={open}
          onClose={handleClose}
          MenuListProps={{
            "aria-labelledby": "basic-button",
          }}
        >
          {getData.length > 0 ? (
            <div
              className="card_details"
              style={{ width: "24rem", padding: 10 }}
            >
              <Table>
                <thead>
                  <tr>
                    <th>Photo</th>
                    <th>Dish Name</th>
                  </tr>
                </thead>
                <tbody>
                  {getData.map((elem) => {
                    return (
                      <>
                        <tr>
                          <td>
                            <Link to={`/cart/${elem.id}`} onClick={handleClose}>
                              <img
                                src={elem.imgdata}
                                style={{ width: "5rem", height: "5rem" }}
                                alt="item-image"
                              />
                            </Link>
                          </td>
                          <td>
                            <p>{elem.rname}</p>
                            <p>price : ₹{elem.price}</p>
                            <p>Quantity : {elem.qnty}</p>
                            <p
                              style={{
                                color: "red",
                                fontSize: 20,
                                cursor: "pointer",
                              }}
                              onClick={() => {
                                remove(elem.id);
                              }}
                            >
                              <i className="fas fa-trash smalltrash"></i>
                            </p>
                          </td>
                          <td
                            onClick={() => {
                              remove(elem.id);
                            }}
                            className="mt-5"
                            style={{
                              color: "red",
                              fontSize: 20,
                              cursor: "pointer",
                            }}
                          >
                            <i className="fas fa-trash largetrash"></i>
                          </td>
                        </tr>
                      </>
                    );
                  })}
                  <p className="text-center">Total: ₹300</p>
                </tbody>
              </Table>
            </div>
          ) : (
            <div
              className="card_details d-flex justify-content-center align-items-center"
              style={{ width: "24rem", padding: 10, position: "relative" }}
            >
              <i
                className="fas fa-close smallclose"
                onClick={handleClose}
                style={{
                  position: "absolute",
                  top: 2,
                  right: 20,
                  fontSize: 23,
                  cursor: "pointer",
                }}
              ></i>
              <p style={{ fontSize: 23 }}>Your Cart Is Empty!!! </p>
              <img
                src="./cart.gif"
                alt="cart-gif"
                className="emptycart_img"
                style={{ width: "5rem", padding: 10 }}
              />
            </div>
          )}
        </Menu>
      </Navbar>
    </>
  );
};

export default Header;
