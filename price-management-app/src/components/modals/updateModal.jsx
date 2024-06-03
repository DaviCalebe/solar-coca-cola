import { useState, useEffect } from "react";
import "./updateModal.css";

export default function UpdateModal({ isOpen, setOpenUpdateModal, handleUpdateClient, handleUpdateProduct, handleUpdatePromotion, selectedClient, selectedProduct, selectedPromotion, updatedClient, mode }) {
  const [name, setName] = useState('');
  const [region, setRegion] = useState('');
  const [level, setLevel] = useState('');
  const [cnpj, setCnpj] = useState('');
  const [email, setEmail] = useState('');
  const [phone_number, setPhone_number] = useState('');
  const [productID, setProductID] = useState('');
  const [promotionalPercent, setPromotionalPercent] = useState('');
  const [quantity_ml, setQuantity_ml] = useState('');
  const [stock_quantity, setStock_quantity] = useState('');
  const [stock_Max, setStock_Max] = useState('');
  const [price, setPrice] = useState('');
  const [category, setCategory] = useState('');

  useEffect(() => {
    if (mode === 'client' && selectedClient) {
      setName(selectedClient.name);
      setRegion(selectedClient.region.id);
      setLevel(selectedClient.level.id);
      setCnpj(selectedClient.cnpj);
      setEmail(selectedClient.email);
      setPhone_number(selectedClient.phone_number);
    } else if (mode === 'product' && selectedProduct) {
      setName(selectedProduct.name);
      setQuantity_ml(selectedProduct.quantity_ml);
      setStock_quantity(selectedProduct.stock_quantity);
      setStock_Max(selectedProduct.stock_Max);
      setPrice(selectedProduct.price);
      setCategory(selectedProduct.category);
    } else if (mode === 'promotion' && selectedPromotion) {
      setProductID(selectedPromotion.productID);
      setPromotionalPercent(selectedPromotion.promotionalPercent);
    }
  }, [selectedClient, selectedProduct, selectedPromotion, mode]);

  const handleSubmit = () => {
    
    if (mode === 'client') {

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
    } else if (mode === 'product') {

      const { id } = selectedProduct;

      const updatedProduct = {
        id,
        name: name || "",
        quantity_ml: quantity_ml || "",
        stock_quantity: stock_quantity || "",
        stock_Max: stock_Max || "",
        price: price || "",
        category: category,
      };

      handleUpdateProduct(updatedProduct);
    } else if (mode === 'promotion') {

      const { id } = selectedPromotion;

      const updatedPromotion = {
        id,
        productID: productID || "",
        promotionalPercent: promotionalPercent || "",
      };

      handleUpdatePromotion(updatedPromotion);
    }
  };

  if (isOpen) {
    return (
      <div className="modal">
        <div className="overlay"></div>
        <div className="background-red"></div>
        <div className="crud-modal-create">
          <div className="modal-title">
            <h1>Editar {mode === 'client' ? 'Cliente' : mode === 'product' ? 'Produto' : 'Promoção'}</h1>
          </div>
          <div className="modal-inputers">
            {mode === 'client'&& (
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
                  onChange={(e) => setPhone_number
                    (e.target.value)} 
                />
              </>
            )}

            {mode === 'product' && (
              <>
                <h3>Nome</h3>
                <input 
                  className="crud-modal-input" 
                  type="text" 
                  placeholder="Digite o nome aqui..." 
                  value={name} 
                  onChange={(e) => setName(e.target.value)} 
                />

                <h3>Quantidade (ml)</h3>
                <input 
                  className="crud-modal-input" 
                  type="number" 
                  placeholder="Digite a quantidade aqui..." 
                  value={quantity_ml} 
                  onChange={(e) => setQuantity_ml(e.target.value)}
                />

                <h3>Quantidade em estoque</h3>
                <input 
                  className="crud-modal-input" 
                  type="number" 
                  placeholder="Digite a quantidade em estoque aqui..." 
                  value={stock_quantity} 
                  onChange={(e) => setStock_quantity(e.target.value)}
                />

                <h3>Quantidade máxima em estoque</h3>
                <input 
                  className="crud-modal-input" 
                  type="number" 
                  placeholder="Digite a quantidade máxima em estoque aqui..." 
                  value={stock_Max} 
                  onChange={(e) => setStock_Max(e.target.value)}
                />

                <h3>Preço</h3>
                <input 
                  className="crud-modal-input" 
                  type="number" 
                  placeholder="Digite o preço aqui..." 
                  value={price} 
                  onChange={(e) => setPrice(e.target.value)}
                />

                <h3>Categoria</h3>
                <select 
                  className="crud-modal-select" 
                  name="category" 
                  id="category" 
                  value={category} 
                  onChange={(e) => setCategory(e.target.value)}
                >
                  <option value="">Selecione uma categoria</option>
                  <option value="Garrafa">Garrafa</option>
                  <option value="Lata">Lata</option>
                </select>

              </>
            )}

            {mode === 'promotion' && (
              <>
                <h3>ID do Produto</h3>
                <input 
                  className="crud-modal-input" 
                  type="number" 
                  placeholder="Digite o ID do produto aqui..." 
                  value={productID} 
                  onChange={(e) => setProductID(e.target.value)}
                />

                <h3>Porcentagem promocional</h3>
                <input 
                  className="crud-modal-input" 
                  type="number" 
                  placeholder="Digite a porcentagem promocional aqui..." 
                  value={promotionalPercent} 
                  onChange={(e) => setPromotionalPercent(e.target.value)}
                />
              </>
            )}
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