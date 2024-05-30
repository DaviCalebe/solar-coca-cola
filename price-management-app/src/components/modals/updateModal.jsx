import { useState, useEffect } from "react";
import "./updateModal.css";

export default function UpdateModal({ isOpen, setOpenUpdateModal, handleUpdateClient, selectedClient, updatedClient }) {
  const [name, setName] = useState('');
  const [region, setRegion] = useState('');
  const [level, setLevel] = useState('');
  const [cnpj, setCnpj] = useState('');
  const [email, setEmail] = useState('');
  const [phone_number, setPhone_number] = useState('');

  useEffect(() => {
    if (selectedClient) {
      setName(selectedClient.name);
      setRegion(selectedClient.region.id);
      setLevel(selectedClient.level.id);
      setCnpj(selectedClient.cnpj);
      setEmail(selectedClient.email);
      setPhone_number(selectedClient.phone_number);
    }
  }, [selectedClient]);

  const handleSubmit = () => {
    const { id } = selectedClient;

    const updatedClient = {
      id,
      name: name || "",
      region: { id: region || "" },
      level: { id: level || "" },
      cnpj: cnpj || "",
      email: email || "",
      phone_number: phone_number || "",
    };
  
    handleUpdateClient(updatedClient);
  };

  if (isOpen) {
    return (
      <div className="modal">
        <div className="overlay"></div>
        <div className="background-red"></div>
        <div className="crud-modal-create">
          <div className="modal-title">
            <h1>Editar Cliente</h1>
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
              <option value="">Selecione uma região</option>
              <option value={1}>Norte</option>
              <option value={2}>Nordeste</option>
              <option value={3}>Centro-Oeste</option>
              <option value={4}>Sudeste</option>
              <option value={5}>Sul</option>
            </select>

            <h3>Nível</h3>
            <select 
              className="crud-modal-select" 
              name="level" 
              id="level" 
              value={level} 
              onChange={(e) => setLevel(e.target.value)}
              
            >
              <option value="">Selecione um nível</option>
              <option value={1}>Ouro</option>
              <option value={2}>Prata</option>
              <option value={3}>Bronze</option>
            </select>

            <h3>CNPJ</h3>
            <input 
              className="crud-modal-input" 
              type="text" 
              placeholder="00.000.000/0000-00" 
              value={cnpj} 
              onChange={(e) => setCnpj(e.target.value)}
/*               onBlur={(e) => {
                if (!/^[0-9]{2}\.[0-9]{3}\.[0-9]{3}\/[0-9]{4}-[0-9]{2}$/.test(e.target.value)) {
                  setErrorMessage("Insira um CNPJ válido (00.000.000/0000-00)");
                } else {
                  setErrorMessage("");
                }
              }} */
            />
{/*             {errorMessage && <span>{errorMessage}</span>}
 */}
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
              value={phone_number} 
              onChange={(e) => setPhone_number
                (e.target.value)} 
            />
          </div>
          <div className="modal-buttons">
            <button className="modal-button cancel" onClick={() => setOpenUpdateModal(false)}>CANCELAR</button>
            <button
            className="modal-button submit" 
            onClick={() => {
              handleSubmit();
              setOpenUpdateModal(false);
            }}
          >ATUALIZAR</button>
          </div>
        </div>
      </div>
    );
  }

  return null;
}