import { useState, useEffect } from "react";
import "./addModal.css";

export default function AddModal({ isOpen, setOpenAddModal, handleAddClient, mode }) {
  const [name, setName] = useState('');
  const [region, setRegion] = useState('');
  const [level, setLevel] = useState('');
  const [cnpj, setCnpj] = useState('');
  const [email, setEmail] = useState('');
  const [phone_number, setPhone_number] = useState('');
  const [description, setDescription] = useState('');
  const [price, setPrice] = useState('');
  const [quantity, setQuantity] = useState('');
  const [discount, setDiscount] = useState('');
  const [start_date, setStart_date] = useState('');
  const [end_date, setEnd_date] = useState('');

  const [liberar, setLiberar] = useState(false);

  useEffect(function(){
    if (
      (mode === 'client' && name && region && level && cnpj && email && phone_number) ||
      (mode === 'product' && name && description && price && quantity) ||
      (mode === 'promotion' && name && discount && start_date && end_date)
    ) {
      setLiberar(true)
    } else {
      setLiberar(false);
    }
  }, [name, region, level, cnpj, email, phone_number, description, price, quantity, mode, discount, start_date, end_date]);

  if (isOpen) {
    return (
      <div className="modal">
        <div className="overlay"></div>
        <div className="background-red"></div>
        <div className="crud-modal-create">
          <div className="modal-title">
            <h1>+ Adicionar novo {mode === 'client' ? 'cliente' : mode === 'product' ? 'produto' : 'promoção'}</h1>
          </div>
          <div className="modal-inputers">
            {
              mode === 'client' &&
              <>
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
                  name="level" id="level" 
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
                  value={phone_number} 
                  onChange={(e) => setPhone_number(e.target.value)} 
                />
              </>
            }
            {
              mode === 'product' &&
              <>
                <h3>Nome</h3>
                <input 
                  className="crud-modal-input" 
                  type="text" 
                  placeholder="Digite o nome aqui..." 
                  value={name} 
                  onChange={(e) => setName(e.target.value)} 
                />

                <h3>Descrição</h3>
                <textarea 
                  className="crud-modal-textarea" 
                  placeholder="Digite a descrição aqui..." 
                  value={description} 
                  onChange={(e) => setDescription(e.target.value)} 
                />

                <h3>Preço</h3>
                <input 
                  className="crud-modal-input" 
                  type="number" 
                  placeholder="Digite o preço aqui..." 
                  value={price} 
                  onChange={(e) => setPrice(e.target.value)} 
                />

                <h3>Quantidade</h3>
                <input 
                  className="crud-modal-input" 
                  type="number" 
                  placeholder="Digite a quantidade aqui..." 
                  value={quantity} 
                  onChange={(e) => setQuantity(e.target.value)} 
                />
              </>
            }
            {
              mode === 'promotion' &&
              <>
                <h3>Nome</h3>
                <input 
                  className="crud-modal-input" 
                  type="text" 
                  placeholder="Digite o nome aqui..." 
                  value={name} 
                  onChange={(e) => setName(e.target.value)} 
                />

                <h3>Desconto</h3>
                <input 
                  className="crud-modal-input" 
                  type="number" 
                  placeholder="Digite o desconto aqui..." 
                  value={discount} 
                  onChange={(e) => setDiscount(e.target.value)} 
                />

                <h3>Data de início</h3>
                <input 
                  className="crud-modal-input" 
                  type="date" 
                  placeholder="Digite a data de início aqui..." 
                  value={start_date} 
                  onChange={(e) => setStart_date(e.target.value)} 
                />

                <h3>Data de término</h3>
                <input 
                  className="crud-modal-input" 
                  type="date" 
                  placeholder="Digite a data de término aqui..." 
                  value={end_date} 
                  onChange={(e) => setEnd_date(e.target.value)} 
                />
              </>
            }
          </div>
          <div className="modal-buttons">
            <button className="modal-button cancel" onClick={() => setOpenAddModal(false)}>CANCELAR</button>
            {
              liberar?
                <button
                className="modal-button submit" 
                onClick={() => {
                  if (mode === 'client') {
                    handleAddClient(name, region, level, cnpj, email, phone_number);
                  } else if (mode === 'product') {
                    handleAddProduct(name, description, price, quantity);
                  } else if (mode === 'promotion') {
                    handleAddPromotion(name, discount, start_date, end_date);
                  }
                  setOpenAddModal(false);
                }}
              >ADICIONAR</button>
              :
                <button
                disabled
                className="modal-button submit" 
                onClick={() => {
                  if (mode === 'client') {
                    handleAddClient(name, region, level, cnpj, email, phone_number);
                  } else if (mode === 'product') {
                    handleAddProduct(name, description, price, quantity);
                  } else if (mode === 'promotion') {
                    handleAddPromotion(name, discount, start_date,end_date);
                  }
                  setOpenAddModal(false);
                }}
              >ADICIONAR</button>
            }
          </div>
        </div>
      </div>
    );
  }

  return null;
}