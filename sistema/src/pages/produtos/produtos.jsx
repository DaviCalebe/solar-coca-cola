import "./produtos.css";
import Sidebar from "../../components/sidebar/sidebar.jsx";
import Upbar from "../../components/upbar/upbar.jsx";
import lupa from "../../assets/lupa.svg";
import { useState, useEffect } from "react";
import {produtos} from "../../dados.jsx";

function Produtos(){

    const [repos, setRepos] = useState([]);
    const [search, setSearch] = useState("");
    const [selectedRegion, setSelectedRegion] = useState("");
    const [selectedLevel, setSelectedLevel] = useState("");
    const [selectedCategory, setSelectedCategory] = useState("");

    useEffect(() => {
        setRepos(produtos);
      }, [produtos]);
    
      const filteredRepos = repos.filter(
        (repo) =>
          repo.nome.toLowerCase().includes(search.toLowerCase()) &&
          (selectedRegion === "" || repo.regiao === selectedRegion) &&
          (selectedLevel === "" || repo.nivel === selectedLevel) &&
          (selectedCategory === "" || repo.categoria === selectedCategory)
      );

    return <main>
        <Sidebar />
        <Upbar title="Produtos" />

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

            <select name="categoria"
            id="categoria"
            className="produtos-select"
            onChange={(e) => setSelectedCategory(e.target.value)}
            >
                <option value="Refrigerantes">Refrigerantes</option>
                <option value="Águas">Águas</option>
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
                    <th>Preço</th>
                    <th>Categoria</th>
                    <th>Opções</th>
                </thead>
                <tbody>
                    {filteredRepos.map((prod) => (
                            <tr key={prod.id} className={prod.id % 2 === 0 ? 'white-line' : 'grey-line'}>
                                <td><strong>{prod.id}</strong></td>
                                <td>{prod.nome}</td>
                                <td>{prod.quantidadeAtual}/{prod.quantidadeMaxima}</td>
                                <td>{new Intl.NumberFormat('pt-BR',
                                            {style: 'currency', currency: "BRL"}).format(prod.preco)}</td>
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
                        ))}
                </tbody>

            </table>
        </div>
    </main>
}

export default Produtos;