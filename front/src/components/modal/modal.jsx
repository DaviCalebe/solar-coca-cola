import { useState } from "react";
import "./modal.css";

export default function Modal({ isOpen, setOpenModal, handleAddClient }) {
  const [name, setName] = useState('');
  const [region, setRegion] = useState('');
  const [level, setLevel] = useState('');
  const [cnpj, setCnpj] = useState('');
  const [email, setEmail] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');

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
            <input 
              className="crud-modal-input" 
              type="text" 
              placeholder="Digite o nome aqui..." 
              value={name} 
              onChange={(e) => setName(e.target.value)} 
            />
            <h3>Região</h3>
            <select 
              className="crud-modal-select" 
              name="region" 
              id="region" 
              value={region} 
              onChange={(e) => setRegion(e.target.value)}
            >
              <option value="Norte">Norte</option>
              <option value="Nordeste">Nordeste</option>
              <option value="Centro-Oeste">Centro-Oeste</option>
              <option value="Sudeste">Sudeste</option>
              <option value="Sul">Sul</option>
            </select>
            <h3>Nível</h3>
            <select 
              className="crud-modal-select" 
              name="level" 
              id="level" 
              value={level} 
              onChange={(e) => setLevel(e.target.value)}
            >
              <option value="Ouro">Ouro</option>
              <option value="Prata">Prata</option>
              <option value="Bronze">Bronze</option>
            </select>
            <h3>CNPJ</h3>
            <input 
              className="crud-modal-input" 
              type="number" 
              placeholder="00.000.000/0000-00" 
              value={cnpj} 
              onChange={(e) => setCnpj(e.target.value)} 
            />
            <h3>E-mail</h3>
            <input 
              className="crud-modal-input" 
              type="email" 
              placeholder="Digite o e-mail aqui..." 
              value={email} 
              onChange={(e) => setEmail(e.target.value)} 
            />
            <h3>Telefone</h3>
            <input 
              className="crud-modal-input" 
              type="tel" 
              placeholder="(00) 00000-0000" 
              value={phoneNumber} 
              onChange={(e) => setPhoneNumber(e.target.value)} 
            />
          </div>
          <div className="modal-buttons">
            <button className="modal-button cancel" onClick={() => setOpenModal(false)}>CANCELAR</button>
            <button 
              className="modal-button submit" 
              onClick={() => handleAddClient(name, region, level, cnpj, email, phoneNumber)}
            >ADICIONAR</button>
          </div>
        </div>
      </div>
    );
  }

  return null;
}