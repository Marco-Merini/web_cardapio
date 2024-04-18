import './styles.css';
import Header from '../../components/Header';

import Frango from "../../images/frango.jfif";
import Xsalada from "../../images/x-salada.jfif";
import Xburguer from "../../images/X-burguer.jfif";
import salada from "../../images/salada.jfif";
import coca2L from "../../images/coca-2l.jfif";
import agua600ml from "../../images/agua600ml.jfif";

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
                  Peso: 100g <br />
                  Preço: R$ 15,00 <br />
                  Ingredientes: Frango, alface, tomate, maionese
                </div>
              </div>
              <div className="ProductCard">
                <img className="ProductImage" src={Xsalada} alt="X-salada" />
                <div className="ProductName">X-Salada</div>
                <div className="ProductDescription">
                  Peso: 90g <br />
                  Preço: R$ 12,00 <br />
                  Ingredientes: Pão de hambúrguer, Queijo prato, Maionese, Cebola, Picles, Alface americana, Catchup e Mostarda
                </div>
              </div>
              <div className="ProductCard">
                <img className="ProductImage" src={Xburguer} alt="X-burguer" />
                <div className="ProductName">X-Burguer</div>
                <div className="ProductDescription">
                  Peso: 80g <br />
                  Preço: R$ 14,00 <br />
                  Ingredientes: Hamburguer e queijo
                </div>
              </div>
              <div className="ProductCard">
                <img className="ProductImage" src={salada} alt="Salada" />
                <div className="ProductName">Salada</div>
                <div className="ProductDescription">
                  Peso: 50g <br />
                  Preço: R$ 7,00 <br />
                  Ingredientes: Tomates-cereja, rúcula, alface, palmitos , agrião, pepino e cebola
                </div>
              </div>
              <div className="ProductCard">
                <img className="ProductImage" src={coca2L} alt="Cola Cola 2L" />
                <div className="ProductName">Cola Cola</div>
                <div className="ProductDescription">
                  Peso: 2L <br />
                  Preço: R$ 14,00 <br />
                </div>
              </div>
              <div className="ProductCard">
                <img className="ProductImage" src={agua600ml} alt="Água mineral" />
                <div className="ProductName">Água Mineral</div>
                <div className="ProductDescription">
                  Peso: 600ml <br />
                  Preço: R$ 3,00 <br />
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
