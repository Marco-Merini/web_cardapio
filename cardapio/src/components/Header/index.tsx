import { Link } from 'react-router-dom';
import './styles.css'

function Header() {
    return (
        <header>
            <h2>Cardápios</h2>
            <div>
                <Link to="/home">Home </Link>
                <Link to="/">Fazer login </Link>
                <Link to="/cadastro">Cadastre-se </Link>
                <Link to="/lanches">Lanches </Link>
                <Link to="/bebidas">Bebidas </Link>
            </div>
        </header>
    )
}

export default Header;