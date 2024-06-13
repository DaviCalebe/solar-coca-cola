import "./relatorios.css";
import Sidebar from "../../components/sidebar/sidebar.jsx";
import Upbar from "../../components/upbar/upbar.jsx";

function Relatorios (){
    return <main>
        <Sidebar />
        <Upbar title="Relatórios"/>
        <iframe title="copia2relatorio" width="600" height="373.5" src="https://app.powerbi.com/view?r=eyJrIjoiNzZhYWJiNjctMWI3NC00ZmRjLWIyMDEtNjgxYTUwNjU5NWMwIiwidCI6IjA0Mjg3NmE2LTA1MDMtNDQxMi04Mjk1LWMwMjRlYTMzYzA2YSJ9" frameborder="0" allowFullScreen="true"></iframe>        </main>
    
}

export default Relatorios;