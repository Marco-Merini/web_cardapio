import React, { useState, useContext } from "react";
import { DataContext } from '../pages/cart/DataProvider';
import { FoodItems } from "../pages/cart/foodItems";
import { AuthContext } from '../pages/login/AuthProvider';

const AdminProdutos = () => {
  const { allCategories, addProduct, updateProduct, removeProduct } = useContext(DataContext);
  const { user } = useContext(AuthContext);
  const [newProduct, setNewProduct] = useState<Partial<FoodItems>>({
    productId: 0,
    name: "",
    preco: 0,
    description: "",
    rate: 0,
    url: 'null'
  });

  if (!user || user.email !== "marco@gmail.com") {
    return <div>Você não tem permissão para acessar esta página.</div>;
  }

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setNewProduct({ ...newProduct, [name]: value });
  };

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const imageFile = e.target.files[0];
      const imageUrl = URL.createObjectURL(imageFile);
      setNewProduct({ ...newProduct, url: imageUrl });
    }
  };

  const handleAddProduct = () => {
    if (newProduct.name && newProduct.description && newProduct.preco && newProduct.rate && newProduct.url) {
      const productData: FoodItems = {
        productId: newProduct.productId || Date.now(),
        name: newProduct.name!,
        preco: newProduct.preco!,
        description: newProduct.description!,
        url: newProduct.url!,
        rate: newProduct.rate!,
      };
      addProduct('allCategories', productData);
      setNewProduct({
        productId: 0,
        name: "",
        preco: 0,
        description: "",
        rate: 0,
        url: 'null'
      });
    }
  };

  const handleUpdateProduct = (productId: number) => {
    const updatedData: FoodItems = {
      productId,
      name: newProduct.name!,
      preco: newProduct.preco!,
      description: newProduct.description!,
      url: newProduct.url!,
      rate: newProduct.rate!,
    };
    updateProduct('allCategories', updatedData);
    setNewProduct({
      productId: 0,
      name: "",
      preco: 0,
      description: "",
      rate: 0,
      url: 'null'
    });
  };

  const handleRemoveProduct = (productId: number) => {
    removeProduct('allCategories', productId);
  };

  return (
    <div>
      <h2>Administração de Produtos</h2>
      <div>
        <h3>Adicionar Novo Produto</h3>
        <input
          type="text"
          name="name"
          placeholder="Nome"
          value={newProduct.name}
          onChange={handleInputChange}
        />
        <input
          type="text"
          name="description"
          placeholder="Descrição"
          value={newProduct.description}
          onChange={handleInputChange}
        />
        <input
          type="number"
          name="preco"
          placeholder="Preço"
          value={newProduct.preco}
          onChange={handleInputChange}
        />
        <input
          type="number"
          name="rate"
          placeholder="Avaliação"
          value={newProduct.rate}
          onChange={handleInputChange}
        />
        <input
          type="file"
          accept="image/*"
          onChange={handleImageChange}
        />
        {newProduct.url && (
          <img src={newProduct.url} alt="Preview" style={{ maxWidth: "200px", marginTop: "10px" }} />
        )}
        <button onClick={handleAddProduct}>Adicionar Produto</button>
      </div>
      <div>
        <h3>Produtos Existentes</h3>
        {allCategories.map(product => (
          <div key={product.productId}>
            <h4>{product.name}</h4>
            <p>{product.description}</p>
            <p>Preço: R$ {product.preco},00</p>
            <p>Avaliação: {product.rate}</p>
            <button onClick={() => handleUpdateProduct(product.productId)}>Atualizar</button>
            <button onClick={() => handleRemoveProduct(product.productId)}>Remover</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AdminProdutos;
