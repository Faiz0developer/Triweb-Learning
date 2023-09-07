import AddProductForm from "../components/AddProductForm";

const AddProduct = () => {
  const getProductData = (productData) => {
    console.log("Addprodcut", productData);
    fetch("http://localhost:3004/products", {
      method: "POST",
      body: JSON.stringify(productData),
      headers: {
        "Content-Type": "application/json",
      },
    });
  };
  return <AddProductForm onGetData={getProductData} />;
};

export default AddProduct;
