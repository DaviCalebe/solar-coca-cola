import "./promocao.css";
import Sidebar from "../../components/sidebar/sidebar.jsx";
import Upbar from "../../components/upbar/upbar.jsx";
import lupa from "../../assets/lupa.svg";
import AddModal from "../../components/modals/addModal.jsx";
import DeleteModal from "../../components/modals/deleteModal.jsx";
import { useState, useEffect } from "react";
import { fetchPromotions, handleAddPromotion, handleDeletePromotion } from "../../services/promotions-services.js";

function Promocao() {

  const [promotions, setPromotions] = useState([]);
  const [selectedPromotion, setSelectedPromotion] = useState(null);
  const [search, setSearch] = useState("");
  const [openAddModal, setOpenAddModal] = useState(false);
  const [openDeleteModal, setOpenDeleteModal] = useState(false);
  
  useEffect(() => {
    fetchPromotions().then((data) => {
      setPromotions(data);
    });
  }, []);

  return (
    <main>
      <Sidebar />
      <Upbar title="Promoção" />

      <div className="filter-options promotions-bar">

        <div className="search-box">
            <img src={lupa} alt="" />
            <input type="text"
            className="search-box-inside"
            placeholder="Pesquisar..."
            onChange={e => setSearch(e.target.value)}
            value={search}
            />
        </div>

      <button className="add-btn crud-btn" onClick={() => setOpenAddModal(true)}>
                + Adicionar novo
            </button>
            
      </div>

      <AddModal
        isOpen={openAddModal}
        setOpenAddModal={(value) => setOpenAddModal(false)}
        handleAddPromotion={handleAddPromotion}
        mode={'promotion'}
      />

      <DeleteModal
      isOpen={openDeleteModal}
      setOpenDeleteModal={(value) => setOpenDeleteModal(false)}
      handleDeletePromotion={handleDeletePromotion}
      mode={'promotion'}
      clientOrPromotionOrProduct={{ promotion: selectedPromotion }}
     />

      <div className="table-box box-promotions">
        <table>
          <thead>
            <tr>
              <th>ID da Promoção</th>
              <th>Nome do Produto</th>
              <th>Quantidade ML</th>
              <th>Preço Original</th>
              <th>Preço Promocional</th>
              <th>Nível</th>
              <th>Opções</th>
            </tr>
          </thead>
          <tbody>
            {promotions.map((promo) => (
              <tr key={promo.id} className={promo.id % 2 === 0? 'white-line' : 'grey-line'}>
                <td>{promo.id}</td>
                <td>{promo.product.name}</td>
                <td>{promo.product.quantity_ml}ml</td>
                <td>{new Intl.NumberFormat('pt-BR',
                                      {style: 'currency', currency: "BRL"}).format(promo.product.price)}</td>
                <td>{new Intl.NumberFormat('pt-BR',
                                      {style: 'currency', currency: "BRL"}).format(promo.promotionalPrice)}</td>
                <td>{promo.level.name}</td>
                <td>
                  <div className="promo-box-btn">
                    <button className="remover-btn crud-btn delete-promo" onClick={() => {setSelectedPromotion(promo); setOpenDeleteModal(true)}}>Excluir promoção</button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </main>
  );
}

export default Promocao;