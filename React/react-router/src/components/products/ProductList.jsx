import ProductItem from "./ProductItem";

/* eslint-disable react/prop-types */
const ProductList = ({ product }) => {
  return (
    <ul
      style={{
        listStyle: "none",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      {product.map((product) => {
        return <ProductItem product={product} key={product.id} />;
      })}
    </ul>
  );
};

export default ProductList;
