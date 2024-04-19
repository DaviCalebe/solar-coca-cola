import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/home/home.jsx";
import Clientes from "./pages/clientes/clientes.jsx";

function Rotas() {
  return <BrowserRouter>
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/clientes" element={<Clientes />} />
        </Routes>
    </BrowserRouter>
}

export default Rotas;
