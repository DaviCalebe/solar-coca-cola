import { useState } from "react";
import "./modal.css";

export default function Modal({ isOpen, setOpenModal, handleAddClient }) {
  if (isOpen) {
    return (
      <div className="modal">
        <div className="overlay"></div>
        <div className="background-red"></div>
        <div className="crud-modal-create">
          <div className="modal-title">
            <h1>+ Adicionar novo cliente</h1>
          </div>
          <div className="modal-inputers">
            <h3>Nome</h3>
            <input className="crud-modal-input" type="text" placeholder="Digite o nome aqui..." />
            <h3>Região</h3>
            <select className="crud-modal-select" name="level" id="level">
              <option value="Ouro">Ouro</option>
              <option value="Prata">Prata</option>
              <option value="Bronze">Bronze</option>
            </select>
            <h3>Nível</h3>
            <select className="crud-modal-select" name="region" id="region">
              <option value="Norte">Norte</option>
              <option value="Nordeste">Nordeste</option>
              <option value="Centro-Oeste">Centro-Oeste</option>
              <option value="Sudeste">Sudeste</option>
              <option value="Sul">Sul</option>
            </select>
            <h3>CNPJ</h3>
            <input className="crud-modal-input" type="number" placeholder="00.000.000/0000-00" />
            <h3>E-mail</h3>
            <input className="crud-modal-input" type="email" placeholder="Digite o e-mail aqui..." />
            <h3>Telefone</h3>
            <input className="crud-modal-input" type="tel" placeholder="(00) 00000-0000" />
          </div>
          <div className="modal-buttons">
            <button className="modal-button cancel" onClick={() => setOpenModal(false)}>CANCELAR</button>
            <button className="modal-button submit" onClick={handleAddClient}>ADICIONAR</button>
          </div>
        </div>
      </div>
    );
  }

  return null;
}