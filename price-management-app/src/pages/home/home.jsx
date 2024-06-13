import "./home.css";
import Sidebar from "../../components/sidebar/sidebar";
import Botoes_acessos from "../../components/botoes-acessos/botoes-acessos";
import Upbar from "../../components/upbar/upbar.jsx";
import { fetchPromotions } from "../../services/promotions-services.js";
import { fetchProducts } from "../../services/products-services.js";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function Home(){

    const [products, setProducts] = useState([]);
    const [promotions, setPromotions] = useState([]);
    const maxItensToShow = 4;

    useEffect(() => {
        fetchProducts().then((products) => {
            setProducts(products);
        });
        }, []);

    useEffect(() => {
        fetchPromotions().then((promotions) => {
            setPromotions(promotions);
        });
        }, []);

    return <>
        <main>
            <Sidebar />
            <Upbar />
            <Botoes_acessos />
            <div className="summary">
                <section className="relatory-summary">
                    <h1>Relatórios</h1>
                    <iframe title="grafico1" width="600" height="373.5" src="https://app.powerbi.com/view?r=eyJrIjoiZTFiMThiNWEtNTg0YS00YjZmLThmOTAtMDBiODQxMGRkNWIwIiwidCI6IjA0Mjg3NmE2LTA1MDMtNDQxMi04Mjk1LWMwMjRlYTMzYzA2YSJ9" frameborder="0" allowFullScreen="true"></iframe>
                </section>

                <section className="products-summary">
                    <h1>Produtos</h1>
                    <table>
                        <tbody>
                            {products.slice(0, maxItensToShow).map((prod) => (
                            <tr key={prod.id}>
                                <td><h2>{prod.name}</h2></td>
                                <td><h2><span className="highlight">{prod.stock_quantity}</span>/{prod.stock_Max}</h2></td>
                            </tr>
                            ))}
                        </tbody>
                    </table>
                    <Link to="/produtos" className="no-underline">
                        <button className="link-button"><h1>Ver todos</h1></button>
                    </Link>
                </section>
                <section className="promotions-summary">
                    <h1>Promoções ativas</h1>
                    <table>
                        <tbody>
                            {promotions.slice(0, maxItensToShow).map((promo) => (
                            <tr key={promo.id}>
                                <td><h2>{promo.product.name}</h2></td>
                                <td>{new Intl.NumberFormat('pt-BR',
                                      {style: 'currency', currency: "BRL"}).format(promo.promotionalPrice)}</td>                            </tr>
                            ))}
                        </tbody>
                    </table>
                    <Link to="/promocao" className="no-underline">
                        <button className="link-button"><h1>Ver todos</h1></button>
                    </Link>
                </section>
            </div>
        </main>
    </>
}

export default Home;