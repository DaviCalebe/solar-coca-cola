import "./home.css";
import Sidebar from "../../components/sidebar/sidebar";
import Botoes_acessos from "../../components/botoes-acessos/botoes-acessos";
import Upbar from "../../components/upbar/upbar.jsx";
import { fetchProducts } from "../../services/products-services.js";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function Home(){

    const [products, setProducts] = useState([]);
    const maxProductsToShow = 5;

    useEffect(() => {
        fetchProducts().then((products) => {
            setProducts(products);
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

                </section>
                <section className="products-summary">
                    <h1>Produtos</h1>
                    <table>
                        <tbody>
                            {products.slice(0, maxProductsToShow).map((prod) => (
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

                </section>
            </div>
        </main>
    </>
}

export default Home;