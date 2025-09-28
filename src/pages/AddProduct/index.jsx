import { useState } from "react";
import "./AddProduct.css";

const AddProduct = () => {
  const [formData, setFormData] = useState({
    name: "",
    description: "",
    brand: "",
    category: "",
    price: "",
    releaseDate: "",
    quantity: ""
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));

    // Remove erro quando o usuário começa a digitar
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ""
      }));
    }
  };

  const validateForm = () => {
    const newErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = "Nome do produto é obrigatório";
    }

    if (!formData.description.trim()) {
      newErrors.description = "Descrição é obrigatória";
    }

    if (!formData.brand.trim()) {
      newErrors.brand = "Marca é obrigatória";
    }

    if (!formData.category.trim()) {
      newErrors.category = "Categoria é obrigatória";
    }

    if (!formData.price) {
      newErrors.price = "Preço é obrigatório";
    } else if (isNaN(formData.price) || parseFloat(formData.price) <= 0) {
      newErrors.price = "Preço deve ser um número válido maior que 0";
    }

    if (!formData.releaseDate) {
      newErrors.releaseDate = "Data de lançamento é obrigatória";
    }

    if (!formData.quantity) {
      newErrors.quantity = "Quantidade é obrigatória";
    } else if (isNaN(formData.quantity) || parseInt(formData.quantity) < 0) {
      newErrors.quantity = "Quantidade deve ser um número válido maior ou igual a 0";
    }

    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    const newErrors = validateForm();
    
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    // Aqui você pode adicionar a lógica para salvar o produto
    console.log("Produto adicionado:", formData);
    
    // Reset do formulário após sucesso
    setFormData({
      name: "",
      description: "",
      brand: "",
      category: "",
      price: "",
      releaseDate: "",
      quantity: ""
    });
    
    alert("Produto adicionado com sucesso!");
  };

  const handleReset = () => {
    setFormData({
      name: "",
      description: "",
      brand: "",
      category: "",
      price: "",
      releaseDate: "",
      quantity: ""
    });
    setErrors({});
  };

  return (
    <div className="add-product-container">
      <div className="add-product-card">
        <h1 className="page-title">Adicionar Novo Produto</h1>
        
        <form className="product-form" onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="name" className="form-label">
              Nome do Produto *
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className={`form-input ${errors.name ? 'error' : ''}`}
              placeholder="Ex: iPhone 15 Pro"
            />
            {errors.name && <span className="error-message">{errors.name}</span>}
          </div>

          <div className="form-group">
            <label htmlFor="description" className="form-label">
              Descrição *
            </label>
            <textarea
              id="description"
              name="description"
              value={formData.description}
              onChange={handleChange}
              className={`form-textarea ${errors.description ? 'error' : ''}`}
              placeholder="Descreva as características do produto..."
              rows="4"
            />
            {errors.description && <span className="error-message">{errors.description}</span>}
          </div>

          <div className="form-row">
            <div className="form-group">
              <label htmlFor="brand" className="form-label">
                Marca *
              </label>
              <input
                type="text"
                id="brand"
                name="brand"
                value={formData.brand}
                onChange={handleChange}
                className={`form-input ${errors.brand ? 'error' : ''}`}
                placeholder="Ex: Apple"
              />
              {errors.brand && <span className="error-message">{errors.brand}</span>}
            </div>

            <div className="form-group">
              <label htmlFor="category" className="form-label">
                Categoria *
              </label>
              <select
                id="category"
                name="category"
                value={formData.category}
                onChange={handleChange}
                className={`form-select ${errors.category ? 'error' : ''}`}
              >
                <option value="">Selecione uma categoria</option>
                <option value="smartphones">Smartphones</option>
                <option value="laptops">Laptops</option>
                <option value="tablets">Tablets</option>
                <option value="acessorios">Acessórios</option>
                <option value="games">Games</option>
                <option value="eletronicos">Eletrônicos</option>
              </select>
              {errors.category && <span className="error-message">{errors.category}</span>}
            </div>
          </div>

          <div className="form-row">
            <div className="form-group">
              <label htmlFor="price" className="form-label">
                Preço (R$) *
              </label>
              <input
                type="number"
                id="price"
                name="price"
                value={formData.price}
                onChange={handleChange}
                className={`form-input ${errors.price ? 'error' : ''}`}
                placeholder="0,00"
                step="0.01"
                min="0"
              />
              {errors.price && <span className="error-message">{errors.price}</span>}
            </div>

            <div className="form-group">
              <label htmlFor="quantity" className="form-label">
                Quantidade em Estoque *
              </label>
              <input
                type="number"
                id="quantity"
                name="quantity"
                value={formData.quantity}
                onChange={handleChange}
                className={`form-input ${errors.quantity ? 'error' : ''}`}
                placeholder="0"
                min="0"
              />
              {errors.quantity && <span className="error-message">{errors.quantity}</span>}
            </div>
          </div>

          <div className="form-group">
            <label htmlFor="releaseDate" className="form-label">
              Data de Lançamento *
            </label>
            <input
              type="date"
              id="releaseDate"
              name="releaseDate"
              value={formData.releaseDate}
              onChange={handleChange}
              className={`form-input ${errors.releaseDate ? 'error' : ''}`}
            />
            {errors.releaseDate && <span className="error-message">{errors.releaseDate}</span>}
          </div>

          <div className="form-buttons">
            <button
              type="button"
              onClick={handleReset}
              className="btn-secondary"
            >
              Limpar
            </button>
            <button
              type="submit"
              className="btn-primary"
            >
              Adicionar Produto
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddProduct;