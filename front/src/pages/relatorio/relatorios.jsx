import Sidebar from "../../components/sidebar/sidebar.jsx";
import Upbar from "../../components/upbar/upbar.jsx";
import lupa from "../../assets/lupa.svg";
import Modal from "../../components/modal/modal.jsx";
import "./relatorios.css";

function Relatorios (){
    return <main>
        <Sidebar />
        <Upbar title="Relatórios" />
{/*         form apenas para visualizacao
 */}        <Modal isOpen={true}/>
        </main>
    
}

export default Relatorios