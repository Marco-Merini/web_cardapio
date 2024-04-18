import { Link } from 'react-router-dom';
import './styles.css'

function Header() {
    return (
        <header>
            <h2>Cardápios</h2>
            <div>
                <Link to="/">Home </Link>
                <Link to="/login">Login </Link>
                <Link to="/cadastro">Cadastro </Link>
            </div>
        </header>
    )
}

export default Header;