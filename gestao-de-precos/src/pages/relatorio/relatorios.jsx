import Sidebar from "../../components/sidebar/sidebar.jsx";
import Upbar from "../../components/upbar/upbar.jsx";
import lupa from "../../assets/lupa.svg";
import "./relatorios.css";

function Relatorios (){
    return <main>
        <Sidebar />
        <Upbar title="Relatórios" />
        
        <div className="filter-options">
            <div className="search-box">
                <img src={lupa} alt="" />
                <input type="text" class="search-box-inside" placeholder="Pesquisar..." />

            </div>
        </div>
      

        </main>
    
}

export default Relatorios