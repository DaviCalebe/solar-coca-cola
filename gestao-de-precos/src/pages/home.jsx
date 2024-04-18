import Sidebar from "../components/sidebar/sidebar";
import Botoes_acessos from "../components/botoes-acessos/botoes-acessos";
import logo_maior from "../assets/solar-logo-maior.png";

function Home(){
    return <>
        <main>
            <div className="upbar">
                <img src={logo_maior} className="logo_maior" alt="" />
            </div>
            <Sidebar />
            <Botoes_acessos />
        </main>
    </>
}

export default Home;