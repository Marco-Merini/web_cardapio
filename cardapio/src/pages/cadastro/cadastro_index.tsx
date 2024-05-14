import React, { useState, useEffect, useRef, FormEvent } from 'react';
import axios from 'axios';
import Header from '../../components/Header';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './cadastro_styles.css';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { getAuth } from 'firebase/auth';
import firebase, { auth } from '../../main';// caminho para o arquivo firebase.tsx

interface User {
  id: number;
  nome: string;
  email: string;
  endereco: string;
  senha: string;
}

interface FormProps {
  getUsers: () => void;
  onEdit: User | null;
  setOnEdit: React.Dispatch<React.SetStateAction<User | null>>;
}

const Form: React.FC<FormProps> = ({ getUsers, onEdit, setOnEdit }) => {
  const ref = useRef<HTMLFormElement>(null);
  const auth = getAuth(firebase);

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const user = ref.current;

    if (!user || !user.nome.value || !user.email.value || !user.endereco.value || !user.senha.value) {
      return toast.warn("Preencha todos os campos!");
    }

    try {
      const auth = getAuth(firebase);
      await createUserWithEmailAndPassword(auth, user.email.value, user.senha.value);

      if (user) {
        user.nome.value = "";
        user.email.value = "";
        user.endereco.value = "";
        user.senha.value = "";
      }

      setOnEdit(null);
      getUsers();

      toast.success("Usuário cadastrado com sucesso!");
    } catch (error) {
      console.error("Erro:", error);
      toast.error("Ocorreu um erro ao cadastrar o usuário.");
    }
  };

  useEffect(() => {
    if (onEdit) {
      const user = ref.current;

      if (user) {
        user.nome.value = onEdit.nome;
        user.email.value = onEdit.email;
        user.endereco.value = onEdit.endereco;
        user.senha.value = onEdit.senha;
      }
    }
  }, [onEdit]);

  return (
    <form ref={ref} onSubmit={handleSubmit}>
      <div className="InputNome">
        <label>Nome</label>
        <input name="nome" type="text" />
      </div>
      <div className="InputEmail">
        <label>Email</label>
        <input name="email" type="email" />
      </div>
      <div className="InputEndereco">
        <label>Endereço</label>
        <input name="endereco" type="text" />
      </div>
      <div className="InputSenha">
        <label>Senha</label>
        <input name="senha" type="password" />
      </div>
      <button type="submit" className="SubmitButton">Salvar</button>
    </form>
  );
};

function Cadastro() {
  const [users, setUsers] = useState<User[]>([]);
  const [onEdit, setOnEdit] = useState<User | null>(null);

  const getUsers = async () => {

  };

  useEffect(() => {
    getUsers();
  }, []);

  return (
    <>
      <div className="container-cadastro">
        <Header />
        <div className="content-cadastro">
          <h1>Cadastro de Usuários</h1>
          <Form getUsers={getUsers} onEdit={onEdit} setOnEdit={setOnEdit} />
        </div>
      </div>
      <ToastContainer autoClose={3000} position="bottom-left" />
    </>
  );
}

export default Cadastro;
