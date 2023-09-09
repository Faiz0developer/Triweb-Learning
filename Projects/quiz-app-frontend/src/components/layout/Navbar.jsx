import { Link } from "react-router-dom"


const Navbar = () => {
  return (
    <header className="bg-black h-20">
        <nav>
            <ul className="flex gap-16 ml-20">
                <li className="text-white pt-4 text-lg">
                    <Link to="/">Home</Link>
                </li>
                <li className="text-white pt-4 text-lg">
                <Link to="/register">Register</Link>
                </li>
                <li className="text-white pt-4 text-lg">
                <Link to="/login">Login</Link>
                </li>
            </ul>
        </nav>
    </header>
  )
}

export default Navbar