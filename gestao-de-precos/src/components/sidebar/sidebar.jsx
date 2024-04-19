import "./sidebar.css";
import logo from "../../assets/solar-logo.svg"
import clientes from "../../assets/clientes-red.svg"
import produtos from "../../assets/produtos-red.svg"
import precos from "../../assets/precos-red.svg"
import promocao from "../../assets/promocao-red.svg"
import relatorios from "../../assets/relatorios-red.svg"

function Sidebar(){
    return <>
        <div className="sidebar">
            <img src={logo} className="logo" alt="logo" />
            <img src={clientes} className="sidebar_icon" alt="clientes" />
            <img src={produtos} className="sidebar_icon" alt="produtos" />
            <img src={precos} className="sidebar_icon" alt="precos" />
            <img src={promocao} className="sidebar_icon" alt="promocao" />
            <img src={relatorios} className="sidebar_icon" alt="relatorios" />
        </div>
    </>
}

export default Sidebar;