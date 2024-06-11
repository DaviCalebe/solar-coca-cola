import "./botoes-acessos.css";
import clientes from "../../assets/clientes-white.svg"
import produtos from "../../assets/produtos-white.svg"
import promocao from "../../assets/promocao-white.svg"
import relatorios from "../../assets/relatorios-white.svg"
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
                        <h1>Clientes</h1>
                    </div>
                </div>
            </Link>

            <Link to="/produtos" className="no-underline">
                <div className="red-btn">
                    <div className="acessos_icon">
                        <img src={produtos} alt="produtos" />
                    </div>
                    <div className="acessos-letreiro">
                        <p>ACESSAR</p>
                        <h1>Produtos</h1>
                    </div>
                </div>
            </Link>
            
            <Link to="/promocao" className="no-underline">
                <div className="red-btn">
                    <div className="acessos_icon">
                        <img src={promocao} alt="promoção" />
                    </div>
                    <div className="acessos-letreiro">
                        <p>ACESSAR</p>
                        <h1>Promoções</h1>
                    </div>
                </div>
            </Link>

            <Link to="relatorios" className="no-underline">
                <div className="red-btn">
                    <div className="acessos_icon">
                        <img src={relatorios} alt="relatórios" />
                    </div>
                    <div className="acessos-letreiro">
                        <p>ACESSAR</p>
                        <h1>Relatórios</h1>
                    </div>
                </div>
            </Link>

        

        </div>
    </>
}

export default Botoes_acessos;