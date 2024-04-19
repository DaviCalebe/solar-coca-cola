import Sidebar from "../../components/sidebar/sidebar.jsx";
import Upbar from "../../components/upbar/upbar.jsx";
import lupa from "../../assets/lupa.svg";
import "./clientes.css";

function Clientes(){
    return <main>
        <Sidebar />
        <Upbar />
        <h1 className="text-center">Clientes</h1>        
        <div className="clientes_search-box">
            <img src={lupa} alt="" />
            <input type="text" class="search-box" placeholder="Pesquisar..." />

        </div>
        <select name="nivel" id="nivel">
            <option value="ouro">Ouro</option>
            <option value="prata">Prata</option>
            <option value="bronze">Bronze</option>
        </select>
        <select name="regiao" id="regiao">
            <option value="norte">Norte</option>
            <option value="nordeste">Nordeste</option>
            <option value="centro-oeste">Centro-Oeste</option>
            <option value="sudeste">Sudeste</option>
            <option value="sul">Sul</option>
        </select>
        <div className="box-clientes">

        </div>
    </main>
}

export default Clientes;