import "./clientes.css";
import Sidebar from "../../components/sidebar/sidebar.jsx";
import Upbar from "../../components/upbar/upbar.jsx";
import lupa from "../../assets/lupa.svg";
import {clientes} from "../../dados.jsx";

function Clientes(){
    return <main>
        <Sidebar />
        <Upbar title="Clientes" />
        
        <div className="filter-options">
            <div className="search-box">
                <img src={lupa} alt="" />
                <input type="text" class="search-box-inside" placeholder="Pesquisar..." />

            </div>

            <select name="nivel" id="nivel" className="clientes-select">
                <option value="ouro">Ouro</option>
                <option value="prata">Prata</option>
                <option value="bronze">Bronze</option>
            </select>

            <select name="regiao" id="regiao" className="clientes-select">
                <option value="norte">Norte</option>
                <option value="nordeste">Nordeste</option>
                <option value="centro-oeste">Centro-Oeste</option>
                <option value="sudeste">Sudeste</option>
                <option value="sul">Sul</option>
            </select>

            <button className="crud-btn">
                + Adicionar novo
            </button>
        </div>
        
        <div className="table-box box-clientes">
            <table>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Nome</th>
                        <th>Região</th>
                        <th>Nível</th>
                        <th>E-mail</th>
                        <th>Telefone</th>
                        <th>Opções</th>
                    </tr>
                </thead>
                {
                    clientes.map(function(cl){
                        return <tr>
                            <td><strong>{cl.id}</strong></td>
                            <td>{cl.nome}</td>
                            <td>{cl.regiao}</td>
                            <td>{cl.nivel}</td>
                            <td>{cl.email}</td>
                            <td>{cl.telefone}</td>
                            <div className="box-btn">
                                <button className="editar-btn crud-btn">
                                    Editar
                                </button>
                                <button className="remover-btn crud-btn">
                                    Remover
                                </button> 
                            </div>
                        </tr>
                    })

                }

            </table>
        </div>
    </main>
}

export default Clientes;