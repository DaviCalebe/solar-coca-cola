import "./clientes.css";
import Sidebar from "../../components/sidebar/sidebar.jsx";
import Upbar from "../../components/upbar/upbar.jsx";
import lupa from "../../assets/lupa.svg";
import { useState, useEffect } from "react";
import api from "../../services/api.js"

function Clientes(){

    const [repos, setRepos] = useState([]);
    const [search, setSearch] = useState("");
    const [selectedRegion, setSelectedRegion] = useState("");
    const [selectedLevel, setSelectedLevel] = useState("");

    useEffect(() => {
        api.get('/clients').then((response) => {
            setRepos(response.data);
        })
    }, [])

    const handleAddClient = async () => {
        try {
          const response = await api.post('/clients/add', {
            name: 'New Client',
            region: { name: 'New Region' },
            level: { name: 'New Level' },
            cnpj: '12345678901234',
            email: 'newclient@example.com',
            phone_number: '123456789',
          });
      
          setRepos([...repos, response.data]);
        } catch (error) {
          console.error(error);
        }
      };
  
    const filteredRepos = repos.filter(
      (repo) =>
        repo.name.toLowerCase().includes(search.toLowerCase()) &&
        (selectedRegion === "" || repo.region.name === selectedRegion) &&
        (selectedLevel === "" || repo.level.name === selectedLevel)
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

            <button className="crud-btn" onClick={handleAddClient}>
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
                        <th>CNPJ</th>
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
                            <td>{cl.name}</td>
                            <td>{cl.region.name}</td>
                            <td>{cl.level.name}</td>
                            <td>{cl.cnpj}</td>
                            <td>{cl.email}</td>
                            <td>{cl.phone_number}</td>
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