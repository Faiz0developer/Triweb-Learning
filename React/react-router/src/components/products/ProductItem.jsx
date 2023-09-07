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
        <h1>{product.productName}</h1>
        <img src={product.image} alt={product.productName} width="380px" />
        <p>{product.description}</p>
        <h4>price: ${product.price}</h4>
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
