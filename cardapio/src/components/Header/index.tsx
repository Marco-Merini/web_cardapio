import { Link, useNavigate } from 'react-router-dom';
import { useContext, useState } from 'react';
import { DataContext } from '../../pages/cart/DataProvider';
import { AuthContext } from '../../pages/login/AuthProvider';
import { signOut } from 'firebase/auth';
import { auth } from '../../main';
import './styles.css';

import logoImage from '../../images/X-burguer.jfif';
import cart from '../../images/cart.png';

function NavBar() {
  const { cartItemCount } = useContext(DataContext);
  const { user } = useContext(AuthContext);
  const navigate = useNavigate();
  const [showLogout, setShowLogout] = useState(false);

  const goToHome = () => {
    navigate("/home");
  };

  const goToCart = () => {
    navigate("/cart");
  };

  const handleLogout = async () => {
    try {
      const confirmLogout = window.confirm("Deseja realmente sair?");
      if (confirmLogout) {
        await signOut(auth);
        navigate('/');
      }
    } catch (error) {
      console.error('Erro ao fazer logout:', error);
    }
  };

  const toggleLogout = () => {
    setShowLogout((prev) => !prev);
  };

  return (
    <nav className="navbar">
      <div onClick={goToHome} className="logo">
        <h4 className="sweet">Cardápios</h4>
        <img src={logoImage} alt="logo" />
      </div>
      <div className="links">
        {!user ? (
          <>
            <Link to="/">Login</Link>
          </>
        ) : (
          <>
            <span className="username" onClick={toggleLogout}>
              Olá, {user.displayName || user.email}
            </span>
            {showLogout && (
              <button onClick={handleLogout} className="logout-button">
                Logout
              </button>
            )}
          </>
        )}
        <div className="cart-container" onClick={goToCart}>
          <img src={cart} className="cart-icon" alt="cart icon" />
          <span className="cart-count">{cartItemCount}</span>
        </div>
      </div>
    </nav>
  );
}

export default NavBar;
