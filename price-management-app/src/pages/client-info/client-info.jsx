import "./client-info.css";
import Sidebar from "../../components/sidebar/sidebar.jsx";
import Upbar from "../../components/upbar/upbar.jsx";
import lupa from "../../assets/lupa.svg";
import { useState } from "react";

export default function ClientInfo(){

    const [search, setSearch] = useState("");

    return <main>
        <Sidebar/>
        <Upbar/>
        <div className="division">

            <h1>Produtos da Empresa G</h1>

            <div className="filter-options">

                <div className="search-box">
                    <img src={lupa} alt="" />
                    <input type="text"
                    className="search-box-inside"
                    placeholder="Pesquisar..."
                    onChange={e => setSearch(e.target.value)}
                    value={search}
                    />

                </div>

                <button className="add-btn crud-btn">
                    + Adicionar produto
                </button>

            </div>

            <div className="client-profile">
                <section className="presentation">


                </section>



            </div>


            <div className="table-box">
                <table>
                    <thead>
                        <tr>
                            <th>ID do Produto</th>
                            <th>Quantidade ML</th>
                            <th>Preço Original</th>
                            <th>Preço Promocional</th>
                            <th>Opções</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>

                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>

        </div>

    </main>
    
}