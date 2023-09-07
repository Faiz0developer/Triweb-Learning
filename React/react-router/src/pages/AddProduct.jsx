import AddProductForm from "../components/AddProductForm";

const AddProduct = () => {
  const getProductData = (productData) => {
    fetch("http://localhost:3004/products", {
      method: "POST",
      body: JSON.stringify(productData),
      headers: {
        "Content-Type": "application/json",
      },
    }).then(response => response.json()).then(data => console.log(data))
  };
  return <AddProductForm onGetData={getProductData} />;
};

export default AddProduct;
