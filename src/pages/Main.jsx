import CardProduct from "../components/CardProduct";
import ProductAdded from "../components/ProductAdded";

const Main = ({ show, products, getProducts, isPending }) => {
  return (
    <div className="row justify-content-center">
      <ProductAdded getProducts={getProducts} />
      <CardProduct
        products={products}
        isPending={isPending}
        getProducts={getProducts}
      />
    </div>
  );
};

export default Main;
