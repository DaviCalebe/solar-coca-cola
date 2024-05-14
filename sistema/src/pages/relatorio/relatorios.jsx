import Sidebar from "../../components/sidebar/sidebar.jsx";
import Upbar from "../../components/upbar/upbar.jsx";
import lupa from "../../assets/lupa.svg";
import Form from "../../components/form/form.jsx";
import "./relatorios.css";

function Relatorios (){
    return <main>
        <Sidebar />
        <Upbar title="Relatórios" />
{/*         form apenas para visualizacao
 */}        <Form></Form>
        </main>
    
}

export default Relatorios