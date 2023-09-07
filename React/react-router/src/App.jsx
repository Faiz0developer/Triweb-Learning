import { Route, Routes } from "react-router-dom";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Home from "./pages/Home";
import NAvbar from "./components/NAvbar";
import Product from "./pages/Product";

function App() {
  return (
    <>
      <header>
        <NAvbar />
      </header>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/products" element={<Product />} />
      </Routes>
    </>
  );
}

export default App;
