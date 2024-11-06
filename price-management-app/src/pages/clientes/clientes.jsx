import "./clientes.css";
import Sidebar from "../../components/sidebar/sidebar.jsx";
import Upbar from "../../components/upbar/upbar.jsx";
import lupa from "../../assets/lupa.svg";
import AddModal from "../../components/modals/addModal.jsx";
import UpdateModal from "../../components/modals/updateModal.jsx";
import DeleteModal from "../../components/modals/deleteModal.jsx";
import Alert from "../../components/alert/alert.jsx";
import { useState, useEffect } from "react";
import { fetchClients, handleAddClient, handleUpdateClient, handleDeleteClient } from "../../services/clients-services.js"
import { useNavigate } from 'react-router-dom';

function Clientes(){

    const [clients, setClients] = useState([]);
    const [search, setSearch] = useState("");
    const [selectedRegion, setSelectedRegion] = useState("");
    const [selectedLevel, setSelectedLevel] = useState("");
    const [openAddModal, setOpenAddModal] = useState(false);
    const [openUpdateModal, setOpenUpdateModal] = useState(false);
    const [openDeleteModal, setOpenDeleteModal] = useState(false);
    const [selectedClient, setSelectedClient] = useState(null);
    const [alert, setAlert] = useState({ message: '', type: '' });
    const navigate = useNavigate();

    useEffect(() => {
      fetchClients().then((clients) => {
        setClients(clients);
      });
    }, []);
    
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
                <option value="Bronze">Bronze</option>
                <option value="Prata">Praaaaaaaaata</option>
                <option value="Ouro">Ouro</option>
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

            <button className="add-btn crud-btn" onClick={() => setOpenAddModal(true)}>
                + Adicionar novo
            </button>
        </div>

        <AddModal
          isOpen={openAddModal}
          setOpenAddModal={(value) => setOpenAddModal(false)}
          handleAddClient={(name, region, level, cnpj, email, phone_number) => 
            handleAddClient(name, region, level, cnpj, email, phone_number, clients, setClients, setAlert)
          }
          mode={'client'}
        />

        <UpdateModal
          isOpen={openUpdateModal}
          setOpenUpdateModal={(value) => setOpenUpdateModal(false)}
          handleUpdateClient={(client) => handleUpdateClient(client, setSelectedClient)}
          selectedClient={selectedClient}
          setSelectedClient={setSelectedClient}
          mode={'client'}
        />
        
        <DeleteModal
          isOpen={openDeleteModal}
          setOpenDeleteModal={(value) => setOpenDeleteModal(false)}
          handleDeleteClient={(id) => handleDeleteClient(id, setAlert)}
          mode={'client'}
          clientOrPromotionOrProduct={{ client: selectedClient}}
        />

        <Alert type={alert.type} message={alert.message} />

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
                              <button
                                className="editar-btn crud-btn"
                                onClick={() => {handleUpdateClient(cl, setSelectedClient);
                                setOpenUpdateModal(true)}}
                              >
                                Editar
                              </button>
                                
                                <button
                                  className="remover-btn crud-btn"
                                  onClick={() => {
                                    setSelectedClient(cl);
                                    setOpenDeleteModal(true);
                                  }}
                                >
                                  Excluir
                                </button>

                                <button className="redirect-btn crud-btn" onClick={() => {
                                  if (cl) {
                                    setSelectedClient(cl);
                                    navigate(`/clientStorage/${cl.id}`);
                                  }
                                }}>
                                  Produtos
                                </button>

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