import ProductList from "../components/products/ProductList";

const ProdcutItem = [
  {
    id: "p1",
    productName: "shoe",
    description: "Branded shoeBranded shoe Branded shoe Branded shoe",
    price: "1000",
    image:
      "https://images.unsplash.com/photo-1542291026-7eec264c27ff?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8c2hvZXN8ZW58MHx8MHx8fDA%3D&w=1000&q=80",
  },
  {
    id: "p2",
    productName: "bag",
    description: "school bag school bag school bag school bag",
    price: "1200",
    image:
      "https://media.istockphoto.com/id/185332097/photo/backpack-isolated-on-a-white-background.jpg?s=612x612&w=0&k=20&c=LNSeH5zokijdWbW6Y482rope6zo2_ZUN7k2SLbtB6Zw=",
  },
  {
    id: "p3",
    productName: "laptop",
    description: "latest laptop latest laptop latest laptop",
    price: "13000",
    image: "https://www.freeiconspng.com/uploads/laptop-png-19.png",
  },
  {
    id: "p4",
    productName: "fan",
    description: "Branded shoe Branded shoe Branded shoe",
    price: "1500",
    image: "https://cdn.moglix.com/p/8AaVUfGYSzdpR-xxlarge.jpg",
  },
];

const Product = () => {
  return (
    <div style={{ textAlign: "center" }}>
      <ProductList product={ProdcutItem} />
    </div>
  );
};

export default Product;
