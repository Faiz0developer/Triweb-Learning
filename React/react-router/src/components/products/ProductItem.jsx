/* eslint-disable react/prop-types */
const ProductItem = ({ product }) => {
  return (
    <>
      <li
        style={{
          backgroundColor: "darkgrey",
          width: "600px",
          padding: "20px",
          marginTop: "10px",
        }}
      >
        <h1>{product.product_name}</h1>
        <img src={product.product_image} alt={product.product_name} width="380px" />
        <p>{product.product_description}</p>
        <h4>price: <i>${product.product_price}</i></h4>
        <button
          style={{
            padding: "10px 20px",
            backgroundColor: "violet",
            borderColor: "violet",
            cursor: "pointer",
          }}
        >
          Buy
        </button>
      </li>
    </>
  );
};

export default ProductItem;
