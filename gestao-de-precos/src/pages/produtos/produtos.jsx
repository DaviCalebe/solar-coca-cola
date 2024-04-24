import Sidebar from "../../components/sidebar/sidebar.jsx";
import Upbar from "../../components/upbar/upbar.jsx";
import lupa from "../../assets/lupa.svg";
import "./produtos.css";
import { produtos } from "../../dados.jsx";

function Produtos(){
    return <main>
        <Sidebar />
        <Upbar title="Produtos" />

        <div className="filter-options">
            <div className="search-box">
                <img src={lupa} alt="" />
                <input type="text" class="search-box-inside" placeholder="Pesquisar..." />

            </div>
            <select name="categoria" id="categoria" className="produtos-select">
                <option value="refrigerantes">Refrigerantes</option>
                <option value="águas">Águas</option>
            </select>
            <button className="crud-btn">
                + Adicionar novo
            </button>
        </div>
        <div className="table-box box-produtos">
            <table>
                <thead>
                    <th>ID</th>
                    <th>Nome</th>
                    <th>Estoque</th>
                    <th>Categoria</th>
                    <th>Opções</th>
                </thead>
                {
                    produtos.map(function(prod){
                        return <tr> 
                            <td><strong>{prod.id}</strong></td>
                            <td>{prod.nome}</td>
                            <td>{prod.quantidadeAtual}/{prod.quantidadeMaxima}</td>
                            <td>{prod.categoria}</td>
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

export default Produtos;