import { useState } from 'react';
import AdminUsers from './admin_users';
import AdminProducts from './admin_produtos';
import { useNavigate } from 'react-router-dom';

const AdminDashboard = () => {
  const [selectedOption] = useState<'users' | 'products' | ''>('');
  const navigate = useNavigate();

  const goToAdminUsers = () => {
    navigate("/adminUsers");
  };

  const goToAdminProdutos = () => {
    navigate("/adminProdutos");
  };

  return (
    <div>
      <h2>Administração</h2>
      <div>
        <button onClick={goToAdminUsers}>Administração de Usuários</button>
        <button onClick={goToAdminProdutos}>Administração de Produtos</button>
      </div>
      <div>
        {selectedOption === 'products' && <AdminProducts />}
        {selectedOption === 'users' && <AdminUsers />}
      </div>
    </div>
  );
};

export default AdminDashboard;
