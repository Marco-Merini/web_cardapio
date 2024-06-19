import React, { useContext, useState } from 'react';
import { UsersContext, User } from '../clients/UsersProvider';
import { AuthContext } from '../pages/login/AuthProvider';

const AdminUsers = () => {
  const { allUsers, addUser, updateUser, removeUser } = useContext(UsersContext);
  const { user } = useContext(AuthContext);
  const [newUser, setNewUser] = useState<User>({
    userId: '',
    email: '',
    name: '',
    password: '',
    isAdmin: false
  });

  if (!user || user.email !== "marco@gmail.com") {
    return <div>Você não tem permissão para acessar esta página.</div>;
  }

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setNewUser({ ...newUser, [name]: value });
  };

  const handleCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, checked } = e.target;
    setNewUser({ ...newUser, [name]: checked });
  };

  const handleAddUser = () => {
    if (newUser.email && newUser.name && newUser.password) {
      console.log('Adicionando usuário:', newUser);
      addUser(newUser); // Certifique-se de que addUser está disponível no contexto
      setNewUser({
        userId: '',
        email: '',
        name: '',
        password: '',
        isAdmin: false
      });
    } else {
      console.error('Erro: Campos obrigatórios faltando.');
    }
  };

  const handleUpdateUser = (userId: string) => {
    updateUser(userId, newUser); // Certifique-se de que updateUser está disponível no contexto
    setNewUser({
      userId: '',
      email: '',
      name: '',
      password: '',
      isAdmin: false
    });
  };

  const handleRemoveUser = (userId: string) => {
    removeUser(userId); // Certifique-se de que removeUser está disponível no contexto
  };

  return (
    <div>
      <h2>Administração de Usuários</h2>
      <div>
        <h3>Adicionar Novo Usuário</h3>
        <input
          type="email"
          name="email"
          placeholder="E-mail"
          value={newUser.email}
          onChange={handleInputChange}
        />
        <input
          type="text"
          name="name"
          placeholder="Nome"
          value={newUser.name}
          onChange={handleInputChange}
        />
        <input
          type="password"
          name="password"
          placeholder="Senha"
          value={newUser.password}
          onChange={handleInputChange}
        />
        <label>
          Admin:
          <input
            type="checkbox"
            name="isAdmin"
            checked={newUser.isAdmin}
            onChange={handleCheckboxChange}
          />
        </label>
        <button onClick={handleAddUser}>Adicionar Usuário</button>
      </div>
      <div>
        <h3>Usuários Existentes</h3>
        {Array.isArray(allUsers) && allUsers.map(user => (
          <div key={user.userId}>
            <h4>{user.name}</h4>
            <p>E-mail: {user.email}</p>
            <p>Admin: {user.isAdmin ? 'Sim' : 'Não'}</p>
            <button onClick={() => handleUpdateUser(user.userId)}>Atualizar</button>
            <button onClick={() => handleRemoveUser(user.userId)}>Remover</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AdminUsers;
