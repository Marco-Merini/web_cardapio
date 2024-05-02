import { ChangeEvent, useState, FormEvent } from 'react';
import Header from '../../components/Header';
import './styles.css';

import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from '../../main';


function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');


  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const userCredential = await signInWithEmailAndPassword(auth, email, password);
      console.log('Logged in:', userCredential.user);
    } catch (error) {
      console.error('Error logging in:');
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
