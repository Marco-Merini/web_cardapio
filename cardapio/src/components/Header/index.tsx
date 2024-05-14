import { Link } from 'react-router-dom';
import './styles.css'

function NavBar() {
    return (
        <nav className="navbar">
        <h1>Cardápios</h1>
        <div className="links">
          <Link
            to="/home">
            Home
          </Link>
          <Link
            to="/">
            Login
          </Link>
          <Link
            to="/cadastro">
            Cadastre-se
          </Link>
          <Link
            to="/lanches">
            Lanches
          </Link>
          <Link
            to="/bebidas">
            Bebidas
          </Link>
          <Link
            to="/carrinho">
            Carrinho
          </Link>
        </div>
      </nav>
    )
}

export default NavBar;