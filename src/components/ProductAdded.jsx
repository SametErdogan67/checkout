import { useState } from "react";
import axios from "axios";
const ProductAdded = ({ getProducts }) => {
  const [name, setName] = useState("");
  const [price, setPrice] = useState();
  const [amount, setAmount] = useState();
  const [image, setImage] = useState("");
  const [dampingRate, setDampingRate] = useState(0.8);

  const handleSubmit = (e) => {
    e.prevetDefault();
    const newProduct = { name, price, amount, image, dampingRate };
    setDampingRate(0.8);
    postProduct(newProduct);
    setName("");
    setPrice("");
    setAmount("");
    setImage("");
  };

  const postProduct = async (newProduct) => {
    const BASE_URL = "https://63fb19917a045e192b62b1ae.mockapi.io/products";
    try {
      await axios.post(BASE_URL, newProduct);
    } catch (error) {
      console.log(error);
    }
    getProducts();
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="text-center row justify-content-center align-items-center p-5 border m-3 bg-light w-50 h-50"
    >
      <div className=" mb-3">
        <div htmlFor="name" className="text-start mb-2">
          Product Name
        </div>
        <input
          onChange={(e) => setName(e.target.value)}
          type="text"
          className="form-control"
          id="name"
          required
          value={name}
        />
      </div>
      <div className=" mb-3">
        <div htmlFor="name" className="text-start mb-2">
          Product Price
        </div>
        <input
          onChange={(e) => setPrice(Number(e.target.value))}
          type="text"
          className="form-control"
          id="name"
          required
          value={price}
        />
      </div>
      <div className=" mb-3">
        <div htmlFor="amount" className="text-start mb-2">
          Product Quantity
        </div>
        <input
          onChange={(e) => setAmount(Number(e.target.value))}
          type="number"
          className="form-control"
          id="amount"
          required
          value={amount}
        />
      </div>

      <div>
        <div htmlFor="image" className="text-start mb-2">
          Product Image
        </div>
        <div className="input-group">
          <span className="input-group-text" id="basic-addon3">
            https://example.com/
          </span>
          <input
            onChange={(e) => setImage(e.target.value)}
            type="url"
            className="form-control"
            id="image"
            aria-describedby="basic-addon3"
            required
            value={image}
          />
        </div>
      </div>
      <button className="btn btn-success w-25 mt-4">Add To Cart</button>
    </form>
  );
};

export default ProductAdded;
