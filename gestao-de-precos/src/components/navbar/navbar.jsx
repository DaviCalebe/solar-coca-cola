import "./navbar.css";
import logo from "../../assets/solar-logo.svg"
import clientes from "../../assets/clientes-red.svg"
import produtos from "../../assets/produtos-red.svg"
import precos from "../../assets/precos-red.svg"
import promocao from "../../assets/promocao-red.svg"
import relatorios from "../../assets/relatorios-red.svg"
import logo_maior from "../../assets/colar.png";


function Navbar(){
    return <>
    <div className="navbar">
        <div className="sidebar">
            <img src={logo} className="logo" alt="logo" />
            <img src={clientes} className="icon" alt="clientes" />
            <img src={produtos} className="icon" alt="produtos" />
            <img src={precos} className="icon" alt="precos" />
            <img src={promocao} className="icon" alt="promocao" />
            <img src={relatorios} className="icon" alt="relatorios" />
        </div>
        <div className="upbar">
            <img src={logo_maior} className="logo_maior" alt="" />
        </div>
    </div>
    </>
    

}


export default Navbar;