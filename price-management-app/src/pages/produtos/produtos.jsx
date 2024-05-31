import "./produtos.css";
import Sidebar from "../../components/sidebar/sidebar.jsx";
import Upbar from "../../components/upbar/upbar.jsx";
import lupa from "../../assets/lupa.svg";
import api from "../../services/products-services.js"
import AddModal from "../../components/modals/addModal.jsx";
import DeleteModal from "../../components/modals/deleteModal.jsx";
import { useState, useEffect } from "react";


function Produtos(){

    const [products, setProducts] = useState([]);
    const [selectedProduct, setSelectedProduct] = useState (null);
    const [search, setSearch] = useState("");
    const [selectedRegion, setSelectedRegion] = useState("");
    const [selectedLevel, setSelectedLevel] = useState("");
    const [selectedCategory, setSelectedCategory] = useState("");
    const [openAddModal, setOpenAddModal] = useState(false);
    const [openUpdateModal, setOpenUpdateModal] = useState(false);
    const [openDeleteModal, setOpenDeleteModal] = useState(false);

    const fetchProducts = async () => {
        const response = await api.get('/products');
        return response.data;
      };

      useEffect(() => {
        fetchProducts().then((products) => {
          setProducts(products);
        });
      }, []);

        const handleAddProduct = async (name, category, quantity_ml, stock_quantity, stock_Max, price) => {
           try{
            const response = await api.post('/products/add', {
                name,
                region: {id:region },
                level: {id: level }, 
                category,
                quantity_ml,
                stock_quantity,
                stock_Max,
                price
            });
            setProducts([...products, response.data])
        }   catch (error){
            console.error(error);
        }
    }

        const handleUpdateProduct = async (product) => {
            try{
                const response = await api.put(`/products/update/${product.id}`, product);
                setSelectedProduct(product);
                console.log(response.data);
            } catch (error) {
                console.error(`Erro ao atualizar promoção: ${error.message}`);
            }
        };

        const handleDeleteProduct = async (id) => {
            try{
                await api.delete(`/products/delete/${id}`);
                console.log(`Produto ${id} excluído com sucesso`);
            } catch (error) {
                console.log(`Erro ao deletar o produto ${id}`);
            }
        };

      const filteredRepos = products.filter(
        (repo) =>
          repo.name.toLowerCase().includes(search.toLowerCase()) &&
          (selectedRegion === "" || repo.region.name === selectedRegion) &&
          (selectedLevel === "" || repo.level.name === selectedLevel) &&
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

            <button className="add-btn crud-btn" onClick={() => setOpenAddModal(true)}>
                + Adicionar novo
            </button>
        </div>

        <AddModal
        isOpen={openAddModal}
        setOpenAddModal={(value) => setOpenAddModal(false)}
        handleAddProduct={handleAddProduct}
        mode={'product'}
        />

        <DeleteModal
        isOpen={openDeleteModal}
        setOpenDeleteModal={(value) => setOpenAddModal(false)}
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
                                        <button className="editar-btn crud-btn">
                                            Editar
                                        </button>
                                        <button className="remover-btn crud-btn"
                                        onClick={() => {
                                            setSelectedProduct(prod);
                                            setOpenDeleteModal(true);
                                          }}>
                                            Remover
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