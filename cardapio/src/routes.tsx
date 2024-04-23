import { Routes, Route} from "react-router-dom";
import Home from "./pages/home"
import Login from "./pages/login";
import Cadastro from "./pages/cadastro/cadastro_index";
import LanchesPage from "./pages/lanches";

function MainRoutes() {
    return (
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/home" element={<Home />} />
        <Route path="/cadastro" element={<Cadastro />} />
        <Route path="/lanches" element={<LanchesPage />} />
        <Route path='*' element={<h1>Not Found</h1>} />
      </Routes>
    );
}

export default MainRoutes;