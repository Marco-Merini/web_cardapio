import React, { useContext, useEffect, useState } from 'react';
import './styles.css';
import Header from '../../components/Header';
import { DataContext } from '../../pages/cart/DataProvider';
import { FoodItems } from "../cart/foodItems";

const ProductCard = ({ item, addToCart }: { item: FoodItems; addToCart: (item: FoodItems) => void; }) => (
  <div className="ProductCard">
    <img className="ProductImage" src={item.url} alt={item.name} />
    <div className="ProductName">{item.name}</div>
    <div className="ProductDescription">
      Preço: R$ {item.preco},00 <br />
      Descrição: {item.description} <br />
      Avaliação: {item.rate}.0
    </div>
    <div className='add-cart'>
      <button onClick={() => addToCart(item)}>Adicionar ao Carrinho</button>
    </div>
  </div>
);

const Home = () => {
  const { allCategories, addToCart, topRated } = useContext(DataContext);
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
            <div className="ProductSection">
              <h4 className='mais-pedidos'>Mais pedidos</h4>
              <div className="ProductContainer">
                {topRated.map((item: FoodItems) => (
                  <ProductCard key={item.id} item={item} addToCart={addToCart} />
                ))}
              </div>
            </div>
            <div className="ProductSection">
              <h4 className='para-voce'>Para você</h4>
              <div className="ProductContainer">
                {filteredProducts.map((item: FoodItems) => (
                  <ProductCard key={item.id} item={item} addToCart={addToCart} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
