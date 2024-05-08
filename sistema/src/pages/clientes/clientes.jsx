import "./clientes.css";
import Sidebar from "../../components/sidebar/sidebar.jsx";
import Upbar from "../../components/upbar/upbar.jsx";
import lupa from "../../assets/lupa.svg";
import { useState, useEffect } from "react";
import {clientes} from "../../dados.jsx";

function Clientes(){

    const [repos, setRepos] = useState([]);
    const [search, setSearch] = useState("");
    const [selectedRegion, setSelectedRegion] = useState("");
    const [selectedLevel, setSelectedLevel] = useState("");
  
    useEffect(() => {
      setRepos(clientes);
    }, [clientes]);
  
    const filteredRepos = repos.filter(
      (repo) =>
        repo.nome.toLowerCase().includes(search.toLowerCase()) &&
        (selectedRegion === "" || repo.regiao === selectedRegion) &&
        (selectedLevel === "" || repo.nivel === selectedLevel)
    );

    return <main>
        <Sidebar />
        <Upbar title="Clientes" />
        
        <div className="filter-options">
            <div className="search-box">
                <img src={lupa} alt="" />
                <input type="text"
                className="search-box-inside"
                placeholder="Pesquisar..."
                onChange={e => setSearch(e.target.value)}
                value={search}
                />

            </div>

            <select
            name="nivel"
            id="nivel"
            className="clientes-select"
            onChange={(e) => setSelectedLevel(e.target.value)}
            >
                <option value="">Todos os níveis</option>
                <option value="Ouro">Ouro</option>
                <option value="Prata">Prata</option>
                <option value="Bronze">Bronze</option>
            </select>

            <select
            name="regiao"
            id="regiao"
            className="clientes-select"
            onChange={(e) => setSelectedRegion(e.target.value)}
            >
                <option value="">Todas as regiões</option>
                <option value="Norte">Norte</option>
                <option value="Nordeste">Nordeste</option>
                <option value="Centro-Oeste">Centro-Oeste</option>
                <option value="Sudeste">Sudeste</option>
                <option value="Sul">Sul</option>
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
                <tbody>
                    {filteredRepos.map((cl) => (
                        <tr key={cl.id} className={cl.id % 2 === 0 ? 'white-line' : 'grey-line'}>
                        <td>
                            <strong>{cl.id}</strong>
                        </td>
                        <td>{cl.nome}</td>
                        <td>{cl.regiao}</td>
                        <td>{cl.nivel}</td>
                        <td>{cl.email}</td>
                        <td>{cl.telefone}</td>
                        <td>
                            <div className="box-btn">
                            <button className="editar-btn crud-btn">Editar</button>
                            <button className="remover-btn crud-btn">Remover</button>
                            </div>
                        </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    </main>
}

export default Clientes;