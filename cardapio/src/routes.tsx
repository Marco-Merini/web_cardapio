import { Routes, Route} from "react-router-dom";
import Home from "./pages/home"
import Login from "./pages/login";
import Cadastro from "./pages/cadastro/cadastro_index";

function MainRoutes() {
    return (
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/cadastro" element={<Cadastro />} />
      </Routes>
    );
}

export default MainRoutes;