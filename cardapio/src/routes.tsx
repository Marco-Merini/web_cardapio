import { Routes, Route} from "react-router-dom";
import Home from "./pages/home"
import Login from "./pages/login";
import Cadastro from "./pages/cadastro_usuarios/cadastro_index";
import Cart from "./pages/cart/Cart";
import AdminProdutos from "./admin/admin_produtos";
import AdminDashboard from "./admin/admin_dashboard";
import AdminUsers from "./admin/admin_users";

function MainRoutes() {
    return (
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/home" element={<Home />} />
        <Route path="/cadastro" element={<Cadastro />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/adminProdutos" element={<AdminProdutos />} />
        <Route path="/adminDashboard" element={<AdminDashboard />} />
        <Route path="/adminUsers" element={<AdminUsers />} />
        <Route path='*' element={<h1>Not Found</h1>} />
      </Routes>
    );
}

export default MainRoutes;