import { ChangeEvent, useState, FormEvent } from 'react';
import Header from '../../components/Header';
import './styles.css';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (email === 'example@example.com' && password === 'password') {
      alert('Login bem-sucedido!');
      window.location.href = '../Home';
    } else {
      setError('Email ou senha incorretos. Por favor, tente novamente.');
    }
  };

  return (
    <div className="container-login">
      <Header />
      <div className="content-login">
        <div className="CenteredContainer">
          <div className="LoginContainer">
            <h2 className="Title">Login</h2>
            <form onSubmit={handleSubmit}>
              <div className="FormGroup">
                <label htmlFor="email">Email:</label>
                <input
                  type="email"
                  id="email"
                  value={email}
                  onChange={(e: ChangeEvent<HTMLInputElement>) => setEmail(e.target.value)}
                  required
                />
              </div>
              <div className="FormGroup">
                <label htmlFor="password">Senha:</label>
                <input
                  type="password"
                  id="password"
                  value={password}
                  onChange={(e: ChangeEvent<HTMLInputElement>) => setPassword(e.target.value)}
                  required
                />
              </div>
              <button type="submit" className="SubmitButton">Entrar</button>
            </form>
            {error && <p className="ErrorMessage">{error}</p>}
            <p>Não tem uma conta? <a href="/cadastro">Cadastre-se</a></p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
