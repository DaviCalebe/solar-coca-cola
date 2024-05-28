import Sidebar from "../../components/sidebar/sidebar.jsx";
import Upbar from "../../components/upbar/upbar.jsx";
import "./promocao.css";

function Promocao (){
    return <main>
        <Sidebar />
        <Upbar title="Promoção" />
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
                                  onClick={() => {handleUpdateClient(cl);
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
                            </div>
                        </td>
                    </tr>
                  ))}
                </tbody>
            </table>
        </div>
    </main>
    
}

export default Promocao;