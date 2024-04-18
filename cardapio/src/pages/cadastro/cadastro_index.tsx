import React, { useState, useEffect, useRef, FormEvent } from 'react';
import axios from 'axios';
import Header from '../../components/Header';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './cadastro_styles.css';

interface User {
  id: number;
  nome: string;
  email: string;
  senha: string;
}

interface FormProps {
  getUsers: () => void;
  onEdit: User | null;
  setOnEdit: React.Dispatch<React.SetStateAction<User | null>>;
}

const Form: React.FC<FormProps> = ({ getUsers, onEdit, setOnEdit }) => {
  const ref = useRef<HTMLFormElement>(null);

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const user = ref.current;

    if (!user || !user.nome.value || !user.email.value || !user.senha.value) {
      return toast.warn("Preencha todos os campos!");
    }

    try {
      if (onEdit) {
        await axios.put(`http://localhost:8800/${onEdit.id}`, {
          nome: user.nome.value,
          email: user.email.value,
          senha: user.senha.value,
        });
      } else {
        await axios.post("http://localhost:8800", {
          nome: user.nome.value,
          email: user.email.value,
          senha: user.senha.value,
        });
      }

      if (user) {
        user.nome.value = "";
        user.email.value = "";
        user.senha.value = "";
      }

      setOnEdit(null);
      getUsers();
      toast.success("Operação realizada com sucesso!");
    } catch (error) {
      console.error("Erro:", error);
      toast.error("Ocorreu um erro ao processar a solicitação.");
    }
  };

  useEffect(() => {
    if (onEdit) {
      const user = ref.current;

      if (user) {
        user.nome.value = onEdit.nome;
        user.email.value = onEdit.email;
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
      <div className="InputCpf">
        <label>CPF</label>
        <input name="cpf" type="number" />
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
    try {
      const res = await axios.get<User[]>("http://localhost:8800");
      setUsers(res.data.sort((a, b) => (a.nome > b.nome ? 1 : -1)));
    } catch (error) {
      console.error("Erro:", error);
      toast.error("Ocorreu um erro ao obter os usuários.");
    }
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
