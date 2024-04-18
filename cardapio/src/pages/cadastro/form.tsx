import React, { useEffect, useRef, FormEvent } from 'react';
import { toast } from 'react-toastify';
import axios from 'axios';

interface User {
  id: number;
  nome: string;
  email: string;
  senha: string;
}

interface Props {
  getUsers: () => void;
  onEdit: User | null;
  setOnEdit: React.Dispatch<React.SetStateAction<User | null>>;
}

const Form: React.FC<Props> = ({ getUsers, onEdit, setOnEdit }) => {
  const ref = useRef<HTMLFormElement>(null);

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

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const user = ref.current;

    if (!user || !user.nome.value || !user.email.value || !user.senha.value) {
      return toast.warn("Preencha todos os campos!");
    }

    if (onEdit) {
      await axios
        .put(`http://localhost:8800/${onEdit.id}`, {
          nome: user.nome.value,
          email: user.email.value,
          senha: user.senha.value,
        })
        .then(({ data }: any) => toast.success(data))
        .catch(({ data }: any) => toast.error(data));
    } else {
      await axios
        .post("http://localhost:8800", {
          nome: user.nome.value,
          email: user.email.value,
          senha: user.senha.value,
        })
        .then(({ data }: any) => toast.success(data))
        .catch(({ data }: any) => toast.error(data));
    }

    if (user) {
      user.nome.value = "";
      user.email.value = "";
      user.senha.value = "";
    }

    setOnEdit(null);
    getUsers();
  };

  return (
    <form ref={ref} onSubmit={handleSubmit}>
      <div className="InputArea">
        <label>Nome</label>
        <input name="nome" type="text" />
      </div>
      <div className="InputArea">
        <label>Email</label>
        <input name="email" type="email" />
      </div>
      <div className="InputArea">
        <label>Senha</label>
        <input name="senha" type="password" />
      </div>
      <button type="submit">SALVAR</button>
    </form>
  );
};

export default Form;
