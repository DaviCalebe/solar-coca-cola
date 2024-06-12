import "./clientStorage.css";
import Sidebar from "../../components/sidebar/sidebar.jsx";
import Upbar from "../../components/upbar/upbar.jsx";
import AddModal from "../../components/modals/addModal.jsx";
import DeleteModal from "../../components/modals/deleteModal.jsx";
import { getClient, fetchClientStorage, handleAddClientProduct, handleDeleteClientProduct } from "../../services/clients-services.js";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

export default function ClientStorage(){

    const { clientId } = useParams();
    const [clientStorage, setClientStorage] = useState([]);
    const [selectedClient, setSelectedClient] = useState(null);
    const [openAddModal, setOpenAddModal] = useState(false);
    const [openDeleteModal, setOpenDeleteModal] = useState(false);
    const [selectedClientProduct, setSelectedClientProduct] = useState(null);
    const [clientName, setClientName] = useState(null);
    
    useEffect(() => {
        getClient(clientId).then((response) => {
          console.log(response.data);
          if (response.data) {
            setClientName(response.data.name);
          }
        });
      }, [clientId]);

    useEffect(() => {
        fetchClientStorage(clientId).then((response) => {
            console.log(response.data);
            setClientStorage(response.data);
        });
    }, [clientId]);

    return <main>
        <Sidebar/>
        <Upbar/>
        <div className="division">

            <h1>{clientName || ""}</h1>

            <button className="add-btn crud-btn" onClick={ () => console.log(selectedClient)}>
                + Adicionar produto
            </button>

            <div className="client-profile">
                <section className="presentation">

                </section>

            </div>

            <div className="table-box">
                <table>
                    <thead>
                        <tr>
                            <th>ID do Produto</th>
                            <th>Nome do Produto</th>
                            <th>Quantidade ML</th>
                            <th>Preço Original</th>
                            <th>Preço Promocional</th>
                            <th>Opções</th>
                        </tr>
                    </thead>
                    <tbody>
                        {clientStorage && clientStorage.map((product) => (
                            <tr key={product.id} className={product.id % 2 === 0? 'white-line' : 'grey-line'}>
                                <td>{product.id}</td>
                                <td>{product.name}</td>
                                <td>{product.quantity_ml}ml</td>
                                <td>{new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(product.precoFinal)}</td>
                                <td>{product.level.name}</td>
                                <td>
                                    <div className="client-box-btn">
                                    <button className="remover-btn crud-btn delete-client" onClick={() => { handleDeleteClientProduct(clientId, product.id) }}>Excluir produto</button>
                                    </div>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>

        </div>

    </main>
    
}