import React, { useState, ChangeEvent } from 'react';
import { useNavigate } from 'react-router-dom';
import { auth } from '../../config/firebase'; // Ajuste o caminho conforme necessário
import { createUserWithEmailAndPassword } from "firebase/auth";
import { getDatabase, ref, set } from "firebase/database";
import './cadastro_styles.css';

const Cadastro: React.FC = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [endereco, setEndereco] = useState("");
  const navigate = useNavigate();
  const db = getDatabase();

  const handleSignup = () => {
    console.log(email, username, password, endereco);
    createUserWithEmailAndPassword(auth, email, password,)
      .then((success) => {
        console.log("User created");

        set(ref(db, `users/${success.user.uid}`), {
          username: username,
          email: email,
          endereco: endereco,
          id: success.user.uid
        }).then(() => {
          alert("User created successfully!");
          navigate('/home');
        })
        .catch((error) => {
          console.error("Error saving user data: ", error);
        });
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.error("Error: ", errorCode, errorMessage);
      });
  }

  return (
    <div className='container-cadastro'>
      <div className='content-cadastro'>
        <h1>Cadastro de Usuário</h1>
        <br />

        <div>
          <label htmlFor="Nome" className='infos'>Nome</label>
          <br />
          <input
            type="text"
            id="username"
            value={username}
            onChange={(e: ChangeEvent<HTMLInputElement>) => setUsername(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="email" className='infos'>Email</label>
          <br />
          <input
            type="text"
            id="email"
            value={email}
            onChange={(e: ChangeEvent<HTMLInputElement>) => setEmail(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="endereco" className='infos'>Endereço</label>
          <br />
          <input
            type="text"
            id="endereco"
            value={endereco}
            onChange={(e: ChangeEvent<HTMLInputElement>) => setEndereco(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="password" className='infos'>Password</label>
          <br />
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e: ChangeEvent<HTMLInputElement>) => setPassword(e.target.value)}
          />
        </div>
        
        <button className='Salvar' onClick={handleSignup}>Salvar</button>

        <br />
      </div>
    </div>
  );
}

export default Cadastro;
