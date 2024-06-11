import "./home.css";
import Sidebar from "../../components/sidebar/sidebar";
import Botoes_acessos from "../../components/botoes-acessos/botoes-acessos";
import Upbar from "../../components/upbar/upbar.jsx";

function Home(){
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

                </section>
                <section className="promotions-summary">
                    <h1>Promoções ativas</h1>

                </section>
            </div>
        </main>
    </>
}

export default Home;