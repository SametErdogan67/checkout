import axios from "axios";
import { useState } from "react";

const Card = ({ id, name, price, amount, dampingRate, image, getProducts }) => {
  const [quant, setQuant] = useState(amount);

  const handleMinus = (id) => {
    // console.log("id minus",id);
    if (quant > 1) {
      setQuant(quant - 1);
    }
    // console.log("quant minus",quant);
    updateAmount(id, quant - 1);
  };
  const handlePlus = (id) => {
    // console.log("id plus",id);
    setQuant(quant + 1);
    // console.log("quant plus",quant);
    updateAmount(id, quant + 1);
  };

  const handleRemove = async (id) => {
    const BASE_URL = "https://63fb19917a045e192b62b1ae.mockapi.io/products";
    try {
      await axios.delete(`${BASE_URL}/${id}/`);
    } catch (error) {
      console.log(error);
    }
    getProducts();
  };

  const updateAmount = async (id, quant) => {
    console.log(id);
    console.log(quant);

    const BASE_URL = "https://63fb19917a045e192b62b1ae.mockapi.io/products";
    try {
      await axios.put(`${BASE_URL}/${id}/`, { amount: quant });
      getProducts();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <div className="row g-0 m-1 border" key={id}>
        <div className="col-md-4 bg-light p-2">
          <img src={image} className="img-fluid rounded-start" alt={name} />
        </div>
        <div className="col-md-8">
          <div className="card-body">
            <h5 className="card-title text-start">{name}</h5>
            <p className="card-text text-start">
              <span className="text-warning display-5">
                ${(price * dampingRate).toFixed(2)}{" "}
              </span>
              <del className="fs-3">{price}</del>
            </p>
            <div className="card-text border border-dark p-2">
              <button
                onClick={() => handleMinus(id)}
                className="btn btn-secondary fw-bold me-1"
              >
                -
              </button>
              <span className="fs-4">{quant}</span>
              <button
                onClick={() => handlePlus(id)}
                className="btn btn-secondary fw-bold ms-1"
              >
                +
              </button>
            </div>
            <button
              onClick={() => handleRemove(id)}
              key={id}
              className="btn btn-danger mt-4"
            >
              Remove
            </button>
            <p className="text-start">
              Product Total:{(price * dampingRate * quant).toFixed(2)}
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Card;
