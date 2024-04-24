import "./botoes-acessos.css";
import clientes from "../../assets/clientes-white.svg"
import { Link } from "react-router-dom";

function Botoes_acessos(){
    return <>

        <div className="nav-btn">
            
            <Link to="/clientes" className="no-underline">
                <div className="acesso-clientes red-btn">
                    <div className="acessos_icon">
                        <img src={clientes} alt="clientes" />
                    </div>
                    <div className="acessos-letreiro">
                        <p>ACESSAR</p>
                        <h2>Clientes</h2>
                    </div>
                </div>
            </Link>

        </div>
    </>
}

export default Botoes_acessos;