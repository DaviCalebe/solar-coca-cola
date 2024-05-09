import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/home/home.jsx";
import Clientes from "./pages/clientes/clientes.jsx";
import Produtos from "./pages/produtos/produtos.jsx";
import Promocao from "./pages/promocao/promocao.jsx";
import Relatorios from "./pages/relatorio/relatorios.jsx";
import Teste from "./pages/teste/teste.jsx";


function Rotas() {
  return <BrowserRouter>
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/clientes" element={<Clientes />} />
            <Route path="/produtos" element={<Produtos />} />
            <Route path="/promocao" element ={<Promocao />} />
            <Route path="/relatorios" element ={<Relatorios />} />
            <Route path="/teste" element={<Teste />} />

        </Routes>
    </BrowserRouter>
}

export default Rotas;
