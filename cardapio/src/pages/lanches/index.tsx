import Header from '../../components/Header';
import './styles.css';

import Frango from "../../images/frango.jfif";
import Xsalada from "../../images/x-salada.jfif";
import Xburguer from "../../images/X-burguer.jfif";

const LanchesPage = () => {
  const lanches = [
    {
      id: 1,
      name: 'Lanche de Frango',
      description: 'Peso: 100g | Preço: R$ 15,00 | Ingredientes: Frango, alface, tomate, maionese',
      image: Frango,
    },
    {
      id: 2,
      name: 'X-Salada',
      description: 'Peso: 90g | Preço: R$ 12,00 | Ingredientes: Pão de hambúrguer, Queijo prato, Maionese, Cebola, Picles, Alface americana, Catchup e Mostarda',
      image: Xsalada,
    },
    {
      id: 3,
      name: 'X-Burguer',
      description: 'Peso: 80g | Preço: R$ 14,00 | Ingredientes: Hamburguer e queijo',
      image: Xburguer,
    },
  ];

  return (
    <div className="container-lanches">
      <Header />
      <div className="content-lanches">
        <div className="Container">
          <div className="StyledHeader">
            <div>
              <input className="SearchBar" type="text" placeholder="Pesquisar" />
            </div>
          </div>
          <div className="ProductContainer">
            {lanches.map(lanche => (
              <div className="ProductCard" key={lanche.id}>
                <img className="ProductImage" src={lanche.image} alt={lanche.name} />
                <div className="ProductName">{lanche.name}</div>
                <div className="ProductDescription">{lanche.description}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default LanchesPage;
