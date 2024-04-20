import './styles.css';
import Header from '../../components/Header';

import Frango from "../../images/frango.jfif";
import Xsalada from "../../images/x-salada.jfif";
import Xburguer from "../../images/X-burguer.jfif";
import Salada from "../../images/salada.jfif";
import Coca2L from "../../images/coca-2l.jfif";
import Agua600ml from "../../images/agua600ml.jfif";

const Home = () => {
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
              <div className="ProductCard">
                <img className="ProductImageFrango" src={Frango} alt="Lanche de Frango" />
                <div className="ProductName">Lanche de Frango</div>
                <div className="ProductDescription">
                  Peso: 100g <br />
                  Preço: R$ 15,00 <br />
                  Ingredientes: Frango, alface, tomate, maionese
                </div>
              </div>
              <div className="ProductCard">
                <img className="ProductImageXsalada" src={Xsalada} alt="X-salada" />
                <div className="ProductName">X-Salada</div>
                <div className="ProductDescription">
                  Peso: 90g <br />
                  Preço: R$ 12,00 <br />
                  Ingredientes: Pão de hambúrguer, Queijo prato, Maionese, Cebola, Picles, Alface americana, Catchup e Mostarda
                </div>
              </div>
              <div className="ProductCard">
                <img className="ProductImageXburguer" src={Xburguer} alt="X-burguer" />
                <div className="ProductName">X-Burguer</div>
                <div className="ProductDescription">
                  Peso: 80g <br />
                  Preço: R$ 14,00 <br />
                  Ingredientes: Hamburguer e queijo
                </div>
              </div>
              <div className="ProductCard">
                <img className="ProductImageSalada" src={Salada} alt="Salada" />
                <div className="ProductName">Salada</div>
                <div className="ProductDescription">
                  Peso: 50g <br />
                  Preço: R$ 7,00 <br />
                  Ingredientes: Tomates-cereja, rúcula, alface, palmitos , agrião, pepino e cebola
                </div>
              </div>
              <div className="ProductCard">
                <img className="ProductImageCoca2L" src={Coca2L} alt="Cola Cola 2L" />
                <div className="ProductName">Cola Cola</div>
                <div className="ProductDescription">
                  Peso: 2L <br />
                  Preço: R$ 14,00 <br />
                </div>
              </div>
              <div className="ProductCard">
                <img className="ProductImageAgua600ml" src={Agua600ml} alt="Água mineral" />
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
