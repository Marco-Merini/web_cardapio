import React, { useContext } from 'react';
import './styles.css';
import Header from '../../components/Header';
import { DataContext } from '../../pages/cart/DataProvider';

const Home = () => {
  const { allCategories, addToCart } = useContext(DataContext);

  return (
    <div className="container-home">
      <Header />
      <div className="content-home">
        <div className="Container">
          <div className="StyledHeader">
            <div>
              <input className="SearchBar" type="text" placeholder="Pesquisar" />
            </div>
          </div>
          <div className="Main">
            <div className="ProductContainer">
              {allCategories.map((item) => (
                <div className="ProductCard" key={item.id}>
                  <img className="ProductImage" src={item.url} alt={item.name} />
                  <div className="ProductName">{item.name}</div>
                  <div className="ProductDescription">
                    {item.description} <br />
                    Preço: R$ {item.preco},00 <br />
                    description: {item.description}
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
