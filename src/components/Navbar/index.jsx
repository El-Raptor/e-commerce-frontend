import { useState } from "react";
import "./styles.css";

const Navbar = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearch = (e) => {
    e.preventDefault();
    console.log("Pesquisando por:", searchTerm);
    // Lógica de pesquisa aqui
  };

  const handleCartClick = () => {
    console.log("Navegando para Cart");
  };

  return (
    <nav className="navbar">
      <div className="navbar-left">
        <button 
          className="nav-btn"
        >
          Home
        </button>
        <button 
          className="nav-btn"
        >
          Add Product
        </button>
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