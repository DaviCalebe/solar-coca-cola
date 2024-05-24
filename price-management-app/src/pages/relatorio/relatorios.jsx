import "./relatorios.css";
import Sidebar from "../../components/sidebar/sidebar.jsx";
import Upbar from "../../components/upbar/upbar.jsx";
import DeleteModal from "../../components/modals/deleteClientModal.jsx";

function Relatorios (){
    return <main>
        <Sidebar />
        <Upbar title="Relatórios" />
        <DeleteModal/>
        </main>
    
}

export default Relatorios;