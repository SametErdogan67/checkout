const taxRate = 0.18;
const shipping = 20;

const TotalCard = ({ products }) => {
  const subTotal = Number(
    products.reduce(
      (sum, item) => sum + item.price * item.amount * item.dampingRate,
      0
    )
  );
  return (
    <div>
      {products.length ? (
        <div className="border px-5 py-1 m-1 bg-light">
          <table className=" w-100">
            <tbody>
              <tr className="">
                <th className=" text-start w-25 border-bottom p-1 fs-5">
                  SubTotal:
                </th>
                <td className="border-bottom text-start fs-5">
                  ${subTotal.toFixed(2)}
                </td>
              </tr>

              <tr className="">
                <th className="text-start w-25 border-bottom p-1 fs-5">
                  Tax(18%):
                </th>
                <td className="border-bottom text-start fs-5">
                  ${(subTotal * taxRate).toFixed(2)}
                </td>
              </tr>

              <tr>
                <th className="text-start w-25 border-bottom p-1 fs-5">
                  Shipping:
                </th>
                <td className="border-bottom text-start fs-5">
                  ${shipping.toFixed(2)}
                </td>
              </tr>

              <tr>
                <th className="text-start w-25 border-bottom p-1 fs-5">
                  Total:
                </th>
                <td className="border-bottom text-start fs-5">
                  ${(subTotal + subTotal * taxRate + shipping).toFixed(2)}
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      ) : (
        <h1 className="display-4 text-danger">No Products</h1>
      )}
    </div>
  );
};

export default TotalCard;
