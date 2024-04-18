import "./botoes-acessos.css";
import clientes from "../../assets/clientes-white.svg"

function Botoes_acessos(){
    return <>
        <div className="acesso-clientes red-box">
            <div className="icon">
            <img src={clientes} alt="clientes" />
            </div>
            <div className="letreiro">
                <p>ACESSAR</p>
                <h2>Clientes</h2>
            </div>
        </div>
    </>
}

export default Botoes_acessos;