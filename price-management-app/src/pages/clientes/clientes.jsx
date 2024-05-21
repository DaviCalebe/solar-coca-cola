import "./clientes.css";
import Sidebar from "../../components/sidebar/sidebar.jsx";
import Upbar from "../../components/upbar/upbar.jsx";
import lupa from "../../assets/lupa.svg";
import api from "../../services/api.js"
import Modal from "../../components/modal/modal.jsx";
import { useState, useEffect } from "react";

function Clientes(){

    const [clients, setClients] = useState([]);
    const [search, setSearch] = useState("");
    const [selectedRegion, setSelectedRegion] = useState("");
    const [selectedLevel, setSelectedLevel] = useState("");
    const [openModal, setOpenModal] = useState(false);

    useEffect(() => {
        api.get('/clients').then((response) => {
            setClients(response.data);
        })
    }, [])

    const handleAddClient = async (name, region, level, cnpj, email, phone_number) => {
        try {
          const response = await api.post('/clients/add', {
            name,
            region: { id: region },
            level: { id: level },
            cnpj,
            email,
            phone_number
          });
          setClients([...clients, response.data]);
        } catch (error) {
          console.error(error);
        }
      };
  
      const filteredRepos = clients.filter(
        (repo) =>
          repo.name && repo.name.toLowerCase().includes(search.toLowerCase()) &&
          (selectedRegion === "" || (repo.region && repo.region.name === selectedRegion)) &&
          (selectedLevel === "" || (repo.level && repo.level.name === selectedLevel))
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

            <button className="crud-btn" onClick={() => setOpenModal(true)}>
                + Adicionar novo
            </button>
        </div>

        <Modal isOpen={openModal} setOpenModal={(value) => setOpenModal(false)} handleAddClient={handleAddClient}/>

        <div className="table-box box-clientes">
            <table>
                <thead>
                    <tr>
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
        <td>{cl.name}</td>
        <td>{cl.region ? cl.region.name : ''}</td>
        <td>{cl.level ? cl.level.name : ''}</td>
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