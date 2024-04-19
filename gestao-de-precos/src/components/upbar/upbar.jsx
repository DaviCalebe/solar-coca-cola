import "./upbar.css";
import logo_maior from "../../assets/solar-logo-maior.png";

function Upbar(){
    return <>
        <div className="upbar">
        <img src={logo_maior} className="logo_maior" alt="" />
        </div>
    </>
}

export default Upbar;