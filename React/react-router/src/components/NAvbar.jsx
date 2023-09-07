import { Link } from "react-router-dom";
import Navstyles from "../components/Navbar.module.css";

const NAvbar = () => {
  return (
    <nav className={Navstyles.nav}>
      <ul className={Navstyles.ul}>
        <li>
          <Link to="/" className={Navstyles.link}>
            Home
          </Link>
        </li>
        <li>
          <Link to="/about" className={Navstyles.link}>
            About
          </Link>
        </li>
        <li>
          <Link to="/contact" className={Navstyles.link}>
            Contact
          </Link>
        </li>
        <li>
          <Link to="/products" className={Navstyles.link}>
            Products
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default NAvbar;
