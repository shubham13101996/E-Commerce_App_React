import React, { useEffect, useState } from "react";
import Table from "react-bootstrap/Table";
import { useNavigate, useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux/es/exports";
import { DELETE } from "../redux/actions/action";
import ADD from "../redux/actions/action";
const CardsDetails = () => {
  const [data, setData] = useState([]);
  // console.log(data);

  const { id } = useParams();
  const getData = useSelector((state) => state.cartReducer.carts);
  // console.log(getData);
  const history = useNavigate();
  const compare = () => {
    let comparaData = getData.filter((e) => {
      return e.id == id;
    });
    setData(comparaData);
  };
  useEffect(() => {
    compare();
  }, [id]);

  const dispatch = useDispatch();

  const send = (item) => {
    // console.log(item);
    dispatch(ADD(item));
  };

  const remove = (id) => {
    dispatch(DELETE(id));
    history("/");
  };
  return (
    <>
      <div className="container mt-2">
        <h2 className="text-center">Items Detail Page</h2>

        <section className="container mt-3">
          <div className="itemsdetails">
            {data.map((elem) => {
              return (
                <>
                  <div className="items_img">
                    <img src={elem.imgdata} alt="" />
                  </div>
                  <div className="details">
                    <Table>
                      <tr>
                        <td>
                          <p>
                            <strong>Restaurant :</strong> {elem.rname}
                          </p>
                          <p>
                            <strong>Price :</strong> ₹{elem.price}
                          </p>
                          <p>
                            <strong>Dishes :</strong> {elem.address}
                          </p>
                          <p>
                            <strong>Total :</strong> ₹300
                          </p>
                          <div
                            className="mt-5 d-flex justify-content-between align-items-center"
                            style={{
                              width: 100,
                              cursor: "pointer",
                              background: "#ddd",
                              color: "#111",
                            }}
                          >
                            <span style={{ fontSize: 24 }}>-</span>
                            <span style={{ fontSize: 24 }}>{elem.qnty}</span>
                            <span
                              style={{ fontSize: 24 }}
                              onClick={() => send(elem)}
                            >
                              +
                            </span>
                          </div>
                        </td>
                        <td>
                          <p>
                            <strong>Rating : </strong>
                            <span
                              style={{
                                background: "green",
                                color: "#fff",
                                padding: "2px 5px",
                                borderRadius: "5px",
                              }}
                            >
                              {elem.rating} ★
                            </span>
                          </p>
                          <p>
                            <strong>Order Review :</strong>{" "}
                            <span>{elem.somedata}</span>
                          </p>
                          <p>
                            <strong>Remove :</strong>{" "}
                            <span onClick={() => remove(elem.id)}>
                              <i
                                className="fas fa-trash"
                                style={{
                                  color: "red",
                                  fontSize: 20,
                                  cursor: "pointer",
                                }}
                              ></i>
                            </span>
                          </p>
                        </td>
                      </tr>
                    </Table>
                  </div>
                </>
              );
            })}
          </div>
        </section>
      </div>
    </>
  );
};

export default CardsDetails;
