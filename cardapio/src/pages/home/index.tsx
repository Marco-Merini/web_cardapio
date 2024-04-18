import './styles.css';
import Header from '../../components/Header';

import Frango from "../../images/frango.jfif";

const Home = () => {
  return (
    <div className="container-home">
      <Header />
      <div className="content-home">
        <div className="Container">
          <div className="StyledHeader">
            <div>
              <input className="SearchBar" type="text" placeholder="Pesquisar" />
              <i className="UserIcon fas fa-user-circle" /> {/* Ícone de usuário */}
            </div>
          </div>
          <div className="Main">
            <div className="ProductContainer">
              <div className="ProductCard">
                <img className="ProductImage" src={Frango} alt="Lanche de Frango" />
                <div className="ProductName">Lanche de Frango</div>
                <div className="ProductDescription">
                  Peso: 200g <br />
                  Preço: R$ 15,00 <br />
                  Ingredientes: Frango, alface, tomate, maionese
                </div>
              </div>
              <div className="ProductCard">
                <img className="ProductImage" src="placeholder_image.jpg" alt="Product" />
                <div className="ProductName">Pizza Margherita</div>
                <div className="ProductDescription">
                  Peso: 400g <br />
                  Preço: R$ 25,00 <br />
                  Ingredientes: Molho de tomate, mussarela, manjericão
                </div>
              </div>
              <div className="ProductCard">
                <img className="ProductImage" src="placeholder_image.jpg" alt="Product" />
                <div className="ProductName">Massa Carbonara</div>
                <div className="ProductDescription">
                  Peso: 300g <br />
                  Preço: R$ 20,00 <br />
                  Ingredientes: Spaghetti, bacon, queijo parmesão, ovos
                </div>
              </div>
              <div className="ProductCard">
                <img className="ProductImage" src="placeholder_image.jpg" alt="Product" />
                <div className="ProductName">Salada Caesar</div>
                <div className="ProductDescription">
                  Peso: 250g <br />
                  Preço: R$ 18,00 <br />
                  Ingredientes: Alface romana, croutons, parmesão, molho Caesar
                </div>
              </div>
              <div className="ProductCard">
                <img className="ProductImage" src="placeholder_image.jpg" alt="Product" />
                <div className="ProductName">Calzone de Calabresa</div>
                <div className="ProductDescription">
                  Peso: 350g <br />
                  Preço: R$ 22,00 <br />
                  Ingredientes: Calabresa, mussarela, tomate, orégano
                </div>
              </div>
              <div className="ProductCard">
                <img className="ProductImage" src="placeholder_image.jpg" alt="Product" />
                <div className="ProductName">Risoto de Funghi</div>
                <div className="ProductDescription">
                  Peso: 300g <br />
                  Preço: R$ 28,00 <br />
                  Ingredientes: Arroz arbóreo, cogumelos funghi, creme de leite, queijo parmesão
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
