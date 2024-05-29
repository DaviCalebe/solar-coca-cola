import "./promocao.css";
import Sidebar from "../../components/sidebar/sidebar.jsx";
import Upbar from "../../components/upbar/upbar.jsx";
import { useState, useEffect } from "react";
import { fetchPromotions } from "../../services/promotions-services.js";

function Promocao() {
  const [promotions, setPromotions] = useState([]);

  useEffect(() => {
    fetchPromotions().then((data) => {
      setPromotions(data);
    });
  }, []);

  return (
    <main>
      <Sidebar />
      <Upbar title="Promoção" />
      <div className="table-box box-clientes">
        <table>
          <thead>
            <tr>
              <th>ID do Produto</th>
              <th>Nome do Produto</th>
              <th>Quantidade</th>
              <th>Preço Inicial</th>
              <th>Preço Promocional</th>
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
                <td>Opções</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </main>
  );
}

export default Promocao;