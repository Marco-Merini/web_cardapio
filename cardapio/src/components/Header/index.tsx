import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { DataContext } from '../../pages/cart/DataProvider';
import './styles.css'

import logoImage from '../../images/X-burguer.jfif';
import cart from '../../images/cart.png';

function NavBar() {
  const { cartItemCount } = useContext(DataContext);
  const navigate = useNavigate();

  const goToHome = () => {
    navigate("/home");
  };

  const goToCart = () => {
    navigate("/cart");
  };

    return (
        <nav className="navbar">
        <div onClick={goToHome} className="logo">
          <h4 className="sweet">Cardápios</h4>
          <img
            src={logoImage}/>
        </div>
        <div className="links">
          <Link
            to="/">
            Login
          </Link>
          <Link
            to="/cadastro">
            Cadastre-se
          </Link>
          <Link
            to="/cart">
          </Link>
          <div className="cart-container" onClick={goToCart}>
          <i className="fa fa-shopping-cart cart-icon">
          <img src={cart} className="cart-icon" alt="cart icon"/>
          </i>
          <span className="cart-count">{cartItemCount}</span>
        </div>
        </div>
      </nav>
    )
}

export default NavBar;