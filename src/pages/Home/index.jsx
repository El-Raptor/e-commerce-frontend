import { useState } from "react";
import Card from "../../components/Card";
import Navbar from "../../components/Navbar";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="home-container">
      <div className="home-header">
        <h1>Nossos Produtos</h1>
        <p>Encontre os melhores produtos com os melhores preços</p>
      </div>

      <div className="products-grid">
        <Card />
      </div>
    </div>
  );
}

export default App;
