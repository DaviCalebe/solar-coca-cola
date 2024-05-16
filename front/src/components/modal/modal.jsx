import { useState } from "react";
import "./modal.css";

export default function Modal({isOpen}){
    
    if (isOpen) {
        return <main>
            <div className="background-red"></div>
            <div className="crud-form-create">
                <div className="form-title">
                    <h1>+ Adicionar novo cliente</h1>
                </div>
                <div className="form-inputers">
                    <h3>Nome</h3>
                    <input className="crud-form-input" type="text" placeholder="Digite o nome aqui..."/>
                    <h3>Região</h3>
                    <select className="crud-form-select" name="level" id="level">
                        <option value="Ouro">Ouro</option>
                        <option value="Prata">Prata</option>
                        <option value="Bronze">Bronze</option>
                    </select>
                    <h3>Nível</h3>
                    <select className="crud-form-select" name="region" id="region">
                        <option value="Norte">Norte</option>
                        <option value="Nordeste">Nordeste</option>
                        <option value="Centro-Oeste">Centro-Oeste</option>
                        <option value="Sudeste">Sudeste</option>
                        <option value="Sul">Sul</option>
                    </select>
                    <h3>CNPJ</h3>
                    <input className="crud-form-input" type="number" placeholder="Digite o CNPJ aqui..." />
                    <h3>E-mail</h3>
                    <input className="crud-form-input" type="email" placeholder="Digite o e-mail aqui..." />
                    <h3>Telefone</h3>
                    <input className="crud-form-input" type="tel" placeholder="Digite o telefone aqui..." />
                </div>
            <button className="form-submit">ADICIONAR</button>
            </div>
        </main>
    }

    return null
}