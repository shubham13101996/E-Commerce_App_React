import React, { useState } from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Cardsdata from "./CardsData";
import "./style.css";
import { useDispatch } from "react-redux/es/exports";
import ADD from "../redux/actions/action";

const Cards = () => {
  const [data, setData] = useState(Cardsdata);

  const dispatch = useDispatch();

  const send = (item) => {
    // console.log(item);
    dispatch(ADD(item));
  };
  return (
    <div className="container mt-3 ">
      <h2 className="text-center">Add cart Part</h2>
      <div className="row d-flex justify-content-center align-items-center">
        {data.map((elem, id) => {
          return (
            <Card
              style={{ width: "22rem", border: "none" }}
              className="mx-2 mt-4 card_style"
            >
              <Card.Img
                variant="top"
                src={elem.imgdata}
                style={{ height: "16rem" }}
                className="mt-3"
              />
              <Card.Body>
                <Card.Title>{elem.rname}</Card.Title>
                <Card.Text>price : ₹{elem.price}</Card.Text>
                <div className="button_div d-flex justify-content-center ">
                  <Button
                    variant="primary"
                    className="col-lg-12"
                    onClick={() => send(elem)}
                  >
                    Add To Cart
                  </Button>
                </div>
              </Card.Body>
            </Card>
          );
        })}
      </div>
    </div>
  );
};

export default Cards;
