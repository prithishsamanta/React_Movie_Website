import { Link } from "react-router-dom";
import Home from '../pages/Home'
import Favorites from '../pages/Favorites'
import "../css/NavBar.css";

function NavBar() {
    return <nav className="navbar">
            <div className="navbar-brand">
                <Link to="/">Home Page</Link>
            </div>
            <div className="navbar-links">
                <Link to="/" className="navbar-link">Home</Link>
                <Link to="/favorites" className="navbar-link">Favorites</Link>
            </div>
        </nav>
    
}

export default NavBar;