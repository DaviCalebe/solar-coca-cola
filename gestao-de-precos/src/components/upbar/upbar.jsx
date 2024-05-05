import "./upbar.css";
import logo_maior from "../../assets/solar-logo-maior.svg";

function Upbar(props){
    return <>
        <div className="upbar">
            <img src={logo_maior} className="logo_maior" alt="" />
            <h1 className="title page-title">{props.title}</h1>
            <div className="saudacao-usuario">
                <h2 >Olá, user </h2>

                <div className="foto-usuario"></div>
            </div>
        </div>
    </>
}

export default Upbar;