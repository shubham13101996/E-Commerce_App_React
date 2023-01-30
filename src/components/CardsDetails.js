import React, { useEffect, useState } from "react";
import Table from "react-bootstrap/Table";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux/es/exports";

const CardsDetails = () => {
  const [data, setData] = useState([]);
  // console.log(data);

  const { id } = useParams();
  const getData = useSelector((state) => state.cartReducer.carts);
  // console.log(getData);

  const compare = () => {
    let comparaData = getData.filter((e) => {
      return e.id == id;
    });
    setData(comparaData);
  };
  useEffect(() => {
    compare();
  }, [id]);

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
                            <span>
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
