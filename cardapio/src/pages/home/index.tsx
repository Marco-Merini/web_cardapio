import React, { useContext, useState, useEffect } from 'react';
import './styles.css';
import Header from '../../components/Header';
import { DataContext } from '../../pages/cart/DataProvider';

const Home = () => {
  const { allCategories, addToCart } = useContext(DataContext);
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredProducts, setFilteredProducts] = useState(allCategories);

  useEffect(() => {
    const results = allCategories.filter(item =>
      item.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredProducts(results);
  }, [searchTerm, allCategories]);

  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value);
  };

  return (
    <div className="container-home">
      <Header />
      <div className="content-home">
        <div className="Container">
          <div className="StyledHeader">
            <div>
              <input
                className="SearchBar"
                type="text"
                placeholder="Pesquisar"
                value={searchTerm}
                onChange={handleSearchChange}
              />
            </div>
          </div>
          <div className="Main">
            <div className="ProductContainer">
              {filteredProducts.map((item) => (
                <div className="ProductCard" key={item.id}>
                  <img className="ProductImage" src={item.url} alt={item.name} />
                  <div className="ProductName">{item.name}</div>
                  <div className="ProductDescription">
                    Peso: {item.description} <br />
                    Preço: R$ {item.preco},00 <br />
                    Descrição: {item.description}
                  </div>
                  <button onClick={() => addToCart(item)}>Adicionar ao Carrinho</button>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
