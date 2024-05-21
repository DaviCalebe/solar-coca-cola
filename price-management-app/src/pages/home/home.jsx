import Sidebar from "../../components/sidebar/sidebar";
import Botoes_acessos from "../../components/botoes-acessos/botoes-acessos";
import Upbar from "../../components/upbar/upbar.jsx";

function Home(){
    return <>
        <main>
            <Sidebar />
            <Upbar />
            <Botoes_acessos />
        </main>
    </>
}

export default Home;