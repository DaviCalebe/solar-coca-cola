import "./clientStorage.css";
import Sidebar from "../../components/sidebar/sidebar.jsx";
import Upbar from "../../components/upbar/upbar.jsx";
import AddModal from "../../components/modals/addModal.jsx";
import DeleteModal from "../../components/modals/deleteModal.jsx";
import api from "../../services/api.js";
import Alert from "../../components/alert/alert.jsx";
import { fetchClientStorage, handleAddClientProduct, handleDeleteClientProduct } from "../../services/clients-services.js";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

export default function ClientStorage(){

    const { clientId } = useParams();
    const [clientStorage, setClientStorage] = useState([]);
    const [selectedClient, setSelectedClient] = useState(null);
    const [openAddModal, setOpenAddModal] = useState(false);
    const [openDeleteModal, setOpenDeleteModal] = useState(false);
    const [selectedClientProduct, setSelectedClientProduct] = useState(null);
    const [client, setClient] = useState(null);
    const [alert, setAlert] = useState({ message: '', type: '' });
    
    useEffect(() => {
        const getClient = async (id) => {
          try {
            const response = await api.get(`/clients/${id}`);
            setClient(response.data);
          } catch (error) {
            console.error(`Error fetching client: ${error.message}`);
          }
        };
      
        getClient(clientId);
      }, [clientId]);

      useEffect(() => {
        const fetchClientProducts = async () => {
          const products = await fetchClientStorage(clientId);
          setClientStorage(products);
        };
        fetchClientProducts();
      }, [clientId]);

    return <main>
        <Sidebar/>
        <Upbar/>
        <div className="division">

            <h1>{client?.name || ""}</h1>

            <button className="add-btn crud-btn" onClick={() => setOpenAddModal(true)}>
                + Adicionar produto
            </button>

            <div className="client-profile">
                <section className="presentation">

                </section>

            </div>

            <AddModal
            isOpen={openAddModal}
            setOpenAddModal={(value) => setOpenAddModal(false)}
            handleAddClientProduct={(clientId, productId, quantidade) => handleAddClientProduct(clientId, productId, quantidade, setAlert)}
            clientId={client?.id}
            mode="clientStorage"
            />

            <DeleteModal
            isOpen={openDeleteModal}
            setOpenDeleteModal={(value) => setOpenDeleteModal(false)}
            handleDeleteClientProduct={(clientId, productId) => handleDeleteClientProduct(clientId, productId, setAlert)}
            mode="clientStorage"
            clientOrPromotionOrProduct={{ client: { id: selectedClient }, product: selectedClientProduct }}
            selectedClientProduct={selectedClientProduct}
            />

            <Alert type={alert.type} message={alert.message} />


            <div className="table-box">
                <table>
                    <thead>
                        <tr>
                            <th>ID do Produto</th>
                            <th>Nome do Produto</th>
                            <th>Quantidade ML</th>
                            <th>Preço Original</th>
                            <th>Quantidade</th>
                            <th>Opções</th>
                        </tr>
                    </thead>
                    <tbody>
                            {clientStorage && clientStorage.map((product) => (
                        <tr key={`${product?.id}-${product?.produto?.id}`} className={product?.produto?.id % 2 === 0 ? 'white-line' : 'grey-line'}>
                            <td>{product?.produto?.id}</td>
                            <td>{product?.produto?.name}</td>
                            <td>{product?.produto?.quantity_ml}ml</td>
                            <td>{product?.precoFinal && new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(product.precoFinal)}</td>
                            <td>{product?.quantidade}</td>
                            <td>
                                <div className="client-box-btn">
                                    <button
                                    className="remover-btn crud-btn"
                                    onClick={() => {
                                        setSelectedClient(client);
                                        setSelectedClientProduct(product);
                                        setOpenDeleteModal(true);
                                    }}
                                    >
                                        EXCLUIR
                                    </button>
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