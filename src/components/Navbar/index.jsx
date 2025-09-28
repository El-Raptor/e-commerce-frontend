import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import "./styles.css";

const Navbar = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const location = useLocation();

  const handleSearch = (e) => {
    e.preventDefault();
    console.log("Pesquisando por:", searchTerm);
    // Lógica de pesquisa aqui
  };

  const handleCartClick = () => {
    console.log("Navegando para Cart");
  };

  const isActive = (path) => {
    return location.pathname === path;
  }

  return (
    <nav className="navbar">
      <div className="navbar-left">
        <Link 
          to="/" 
          className={`nav-link ${isActive("/") ? "active" : ""}`}
        >
          Home
        </Link>
        <Link 
          to="/add-product" 
          className={`nav-link ${isActive("/add-product") ? "active" : ""}`}
        >
          Add Product
        </Link>
      </div>

      <div className="navbar-right">
        <form className="search-form" onSubmit={handleSearch}>
          <input
            type="text"
            className="search-input"
            placeholder="Pesquisar produtos..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <button type="submit" className="search-btn">
            🔍
          </button>
        </form>
        
        <button 
          className="cart-btn" 
          onClick={handleCartClick}
        >
          🛒 Cart
        </button>
      </div>
    </nav>
  );
};

export default Navbar;