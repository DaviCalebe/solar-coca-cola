import Sidebar from "../../components/sidebar/sidebar.jsx";
import Upbar from "../../components/upbar/upbar.jsx";
import lupa from "../../assets/lupa.svg";
import "./promocao.css";

function Promocao (){
    return <main>
        <Sidebar />
        <Upbar title="Promoção" />
        
        <div className="filter-options">
            <div className="search-box">
                <img src={lupa} alt="" />
                <input type="text" class="search-box-inside" placeholder="Pesquisar..." />

            </div>
        </div>
      

        </main>
    
}

export default Promocao