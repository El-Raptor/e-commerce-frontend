import "./styles.css";


const Card = () => {
    const handleAddToCart = () => {
    // Lógica para adicionar o item ao carrinho
    console.log("Item adicionado ao carrinho");
  }

  return (
    <>
      <div className="card" >
        <img src={"https://images7.kabum.com.br/produtos/fotos/925367/iphone-17-apple-256gb-48mp-tela-6-3-super-retina-xdr-preto_1757694916_gg.jpg"} alt="iphone 17" />
        <span className="product-name">Apple iPhone 7 de 256gb - Preto</span>
        <span>7.199,10</span>
        <span>Entrega seg.,29 de set.</span>
        <button className="add-cart" onClick={handleAddToCart}>Adicionar ao carrinho</button>
      </div>
    </>
  )
}

export default Card;