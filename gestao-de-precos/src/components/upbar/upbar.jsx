import "./upbar.css";
import logo_maior from "../../assets/solar-logo-maior.png";

function Upbar(props){
    return <>
        <div className="upbar">
            <img src={logo_maior} className="logo_maior" alt="" />
            <h1 className="title page-title">{props.title}</h1>
            <h2>Olá, user</h2>
        </div>
    </>
}

export default Upbar;