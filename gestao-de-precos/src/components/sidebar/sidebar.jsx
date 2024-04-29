import "./sidebar.css";
import logo from "../../assets/solar-logo.svg"
import clientes from "../../assets/clientes-red.svg"
import produtos from "../../assets/produtos-red.svg"
import promocao from "../../assets/promocao-red.svg"
import relatorios from "../../assets/relatorios-red.svg"
import { Link } from "react-router-dom";


function Sidebar(){
    return <>
        <div className="sidebar">
            <Link to="/">
                <img src={logo} className="logo" alt="logo" />
            </Link>
            <Link to="/clientes">
                <img src={clientes} className="sidebar_icon" alt="clientes" />
            </Link>
            <Link to="/produtos">
                <img src={produtos} className="sidebar_icon" alt="produtos" />
            </Link>
            <Link to="/promocao"> 
            <img src={promocao} className="sidebar_icon" alt="promocao" />
             </Link>
            
            <Link to ="/relatorios">
            <img src={relatorios} className="sidebar_icon" alt="relatorios" />
            </Link>
            
        </div>
    </>
}

export default Sidebar;