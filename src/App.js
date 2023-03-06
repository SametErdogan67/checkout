import axios from "axios";
import Header from "./components/Header";
import Button from "./components/Button";
import Main from "./pages/Main";
import { useState, useEffect } from "react";

function App() {
  const [show, setShow] = useState(true);
  const [products, setProducts] = useState([]);
  const [isPending, setIsPending] = useState(true);
  const BASE_URL = "https://63fb19917a045e192b62b1ae.mockapi.io/products";

  const getProducts = async () => {
    try {
      const { data } = await axios(BASE_URL);
      setProducts(data);
      setIsPending(false);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getProducts();
  }, []);

  return (
    <div className="App">
      <Header />
      <Button show={show} setShow={setShow} />
      <Main
        show={show}
        products={products}
        isPending={isPending}
        getProducts={getProducts}
      />
    </div>
  );
}

export default App;
