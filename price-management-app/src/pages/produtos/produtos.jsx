import "./produtos.css";
import Sidebar from "../../components/sidebar/sidebar.jsx";
import Upbar from "../../components/upbar/upbar.jsx";
import lupa from "../../assets/lupa.svg";
import AddModal from "../../components/modals/addModal.jsx";
import UpdateModal from "../../components/modals/updateModal.jsx";
import DeleteModal from "../../components/modals/deleteModal.jsx";
import { fetchProducts, handleAddProduct, handleDeleteProduct } from "../../services/products-services.js"
import { useState, useEffect } from "react";

function Produtos(){

    const [products, setProducts] = useState([]);
    const [selectedProduct, setSelectedProduct] = useState (null);
    const [search, setSearch] = useState("");
    const [selectedCategory, setSelectedCategory] = useState("");
    const [openAddModal, setOpenAddModal] = useState(false);
    const [openUpdateModal, setOpenUpdateModal] = useState(false);
    const [openDeleteModal, setOpenDeleteModal] = useState(false);

    useEffect(() => {
    fetchProducts().then((products) => {
        setProducts(products);
    });
    }, []);

    const handleUpdateProduct = async (product) => {
        try{
            const response = await api.put(`/products/update/${product.id}`, product);
            setSelectedProduct(product);
            console.log(response.data);
        } catch (error) {
            console.error(`Erro ao atualizar promoção: ${error.message}`);
        }
    };

    const filteredRepos = products.filter(
    (repo) =>
        repo.name.toLowerCase().includes(search.toLowerCase()) &&
        (selectedCategory === "" || repo.category === selectedCategory)
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

            <select name="categoria"
            id="categoria"
            className="produtos-select"
            onChange={(e) => setSelectedCategory(e.target.value)}
            >
                <option value="">Todas as Categorias</option>
                <option value="Garrafa">Garrafa</option>
                <option value="Lata">Lata</option>
            </select>

            <button className="add-btn crud-btn" onClick={() => setOpenAddModal(true)}>
                + Adicionar novo
            </button>
        </div>

        <AddModal
          isOpen={openAddModal}
          setOpenAddModal={(value) => setOpenAddModal(false)}
          handleAddProduct={(name, category, quantity_ml, stock_quantity, stock_Max, price) => handleAddProduct(name, category, quantity_ml, stock_quantity, stock_Max, price, products, setProducts)}
          mode={'product'}
        />

        <UpdateModal
          isOpen={openUpdateModal}
          setOpenUpdateModal={(value) => setOpenUpdateModal(false)}
          handleUpdateProduct={handleUpdateProduct}
          selectedProduct={selectedProduct}
          setSelectedProduct={setSelectedProduct}
          mode={'product'}
        />

        <DeleteModal
          isOpen={openDeleteModal}
          setOpenDeleteModal={(value) => setOpenDeleteModal(false)}
          handleDeleteProduct={handleDeleteProduct}
          mode={'product'}
          clientOrPromotionOrProduct={{ product: selectedProduct}}
        />
        
        <div className="table-box box-produtos">
            <table>
                <thead>
                    <tr>
                        <th>Nome</th>
                        <th>ML</th>
                        <th>Estoque</th>
                        <th>Preço</th>
                        <th>Categoria</th>
                        <th>Opções</th>
                    </tr>
                        
                </thead>
                <tbody>
                    {filteredRepos.map((prod) => (
                            <tr key={prod.id} className={prod.id % 2 === 0 ? 'white-line' : 'grey-line'}>
                                <td>{prod.name}</td>
                                <td>{prod.quantity_ml} ml</td>
                                <td>{prod.stock_quantity}/{prod.stock_Max}</td>
                                <td>{new Intl.NumberFormat('pt-BR',
                                            {style: 'currency', currency: "BRL"}).format(prod.price)}</td>
                                <td>{prod.category}</td>
                                <td>
                                    <div className="box-btn">
                                    <button
                                        className="editar-btn crud-btn"
                                        onClick={() => {handleUpdateProduct(prod);
                                        setOpenUpdateModal(true)}}
                                        >
                                         Editar
                                    </button>
                                        <button className="remover-btn crud-btn"
                                        onClick={() => {
                                            setSelectedProduct(prod);
                                            setOpenDeleteModal(true);
                                          }}>
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

export default Produtos;