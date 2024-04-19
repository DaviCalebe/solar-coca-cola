import "./botoes-acessos.css";
import clientes from "../../assets/clientes-white.svg"

function Botoes_acessos(){
    return <>

        <div className="nav-btn">
            
            <div className="acesso-clientes red-btn">
                <div className="acessos_icon">
                <img src={clientes} alt="clientes" />
                </div>
                <div className="acessos_letreiro">
                    <p>ACESSAR</p>
                    <h2>Clientes</h2>
                </div>
            </div>

        </div>
    </>
}

export default Botoes_acessos;