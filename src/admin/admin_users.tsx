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
  const [editingUserId, setEditingUserId] = useState<string | null>(null);

  if (!user || user.email !== "marco@gmail.com") {
    return <div>Você não tem permissão para acessar esta página.</div>;
  }

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setNewUser({ ...newUser, [name]: value });
  };

  const handleAddUser = () => {
    if (newUser.email && newUser.name && newUser.password) {
      console.log('Adicionando usuário:', newUser);
      addUser(newUser);
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

  const handleEditUser = (user: User) => {
    setNewUser(user);
    setEditingUserId(user.userId);
  };

  const handleSaveUser = () => {
    if (editingUserId) {
      updateUser(editingUserId, newUser);
      setEditingUserId(null);
    } else {
      handleAddUser();
    }
  };

  const handleRemoveUser = (userId: string) => {
    removeUser(userId);
  };

  return (
    <div>
      <h2>Administração de Usuários</h2>
      <div>
        <h3>{editingUserId ? 'Editar Usuário' : 'Adicionar Novo Usuário'}</h3>
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
        <button onClick={handleSaveUser}>{editingUserId ? 'Salvar' : 'Adicionar Usuário'}</button>
      </div>
      <div>
        <h3>Usuários Existentes</h3>
        {Array.isArray(allUsers) && allUsers.map(user => (
          <div key={user.userId}>
            <h4>{user.name}</h4>
            <p>E-mail: {user.email}</p>
            <p>Admin: {user.isAdmin ? 'Sim' : 'Não'}</p>
            <button onClick={() => handleEditUser(user)}>Atualizar</button>
            <button onClick={() => handleRemoveUser(user.userId)}>Remover</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AdminUsers;
