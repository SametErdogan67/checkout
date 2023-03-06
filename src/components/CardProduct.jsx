import Card from "./Card";
import TotalCard from "./TotalCard";

const CardProduct = ({ products, getProducts, isPending }) => {
  return (
    <div>
      {isPending && (
        <div className="alert alert-warning fs-3" role={alert}>
          Loading...{" "}
        </div>
      )}
      <div className="card my-3" style={{ maxWidth: "750px" }}>
        {products?.map((item) => (
          <Card getProducts={getProducts} {...item} key={item.id} />
        ))}
        <TotalCard products={products} />
      </div>
    </div>
  );
};

export default CardProduct;
