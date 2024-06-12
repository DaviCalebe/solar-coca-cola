import "./addModal.css";
import { fetchProducts } from "../../services/products-services.js";
import { useState, useEffect } from "react";

export default function AddModal({ isOpen, setOpenAddModal, handleAddClient, handleAddProduct, handleAddPromotion, handleAddClientProduct, clientId, mode }) {
  
  const [name, setName] = useState('');
  const [region, setRegion] = useState('');
  const [level, setLevel] = useState('');
  const [cnpj, setCnpj] = useState('');
  const [email, setEmail] = useState('');
  const [phone_number, setPhone_number] = useState('');
  const [category, setCategory] = useState ('');
  const [quantity_ml, setQuantity_ml] = useState ('');
  const [stock_quantity, setStock_Quantity] = useState('');
  const [stock_Max, setStock_Max] = useState ('');
  const [price, setPrice] = useState('');
  const [productID, setProductID] = useState('');
  const [promotionalPercent, setPromotionalPercent] = useState('');
  const [product, setProduct] = useState('');
  const [quantity, setQuantity] = useState('');
  
  const [liberar, setLiberar] = useState(false);

  const [products, setProducts] = useState([]);
  const [selectedProduct, setSelectedProduct] = useState({});

  useEffect(() => {
    fetchProducts().then((products) => setProducts(products));
  }, []);

  let dependencies = [];

  if (mode === 'client') {
    dependencies = [name, region, level, cnpj, email, phone_number];
  } else if (mode === 'product') {
    dependencies = [name, category, quantity_ml, stock_quantity, stock_Max, price];
  } else if (mode === 'promotion') {
    dependencies = [productID, level, promotionalPercent];
  } else if (mode === 'clientStorage') {
    dependencies = [selectedProduct.id, quantity];
  }
  
  useEffect(function(){
    if (
      (mode === 'client' && name && region && level && cnpj && email && phone_number) ||
      (mode === 'product' && name && category && quantity_ml && stock_quantity && stock_Max && price) ||
      (mode === 'promotion' && productID && level && promotionalPercent) ||
      (mode === 'clientStorage' && selectedProduct.id && quantity)
    ) {
      setLiberar(true)
    } else {
      setLiberar(false);
    }
  }, dependencies);

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
                  placeholder="Digite o nome do produto aqui..." 
                  value={name} 
                  onChange={(e) => setName(e.target.value)} 
                />

                <h3>Categoria</h3>
                <select 
                  className="crud-modal-select" 
                  name="category" id="category" 
                  value={category} 
                  onChange={(e) => setCategory(e.target.value)}
                >
                  <option value="">Selecione uma categoria</option>
                  <option value={"Garrafa"}>Garrafa</option>
                  <option value={"Lata"}>Lata</option>
                </select>

                <h3>Quantidade em ML</h3>
                <input 
                  className="crud-modal-input" 
                  type="number" 
                  placeholder="Digite a quantidade em ML aqui..." 
                  value={quantity_ml} 
                  onChange={(e) => setQuantity_ml(e.target.value)} 
                />

                <h3>Quantidade de Estoque Atual</h3>
                <input 
                  className="crud-modal-input" 
                  type="number" 
                  placeholder="Digite a quantidade de estoque atual aqui..." 
                  value={stock_quantity} 
                  onChange={(e) => setStock_Quantity(e.target.value)} 
                />

                <h3>Quantidade de Estoque Máximo</h3>
                <input 
                  className="crud-modal-input" 
                  type="number" 
                  placeholder="Digite a quantidade de estoque máximo aqui..." 
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
              </>
            }
            {
              mode === 'promotion' &&
              <>

                <h3>ID do Produto</h3>
                <input 
                  className="crud-modal-input" 
                  type="number" 
                  placeholder="Digite o ID do Produto que irá receber a promoção aqui..." 
                  value={productID} 
                  onChange={(e) => setProductID(e.target.value)} 
                />

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

                <h3>Porcentagem Promocional</h3>
                <input 
                  className="crud-modal-input" 
                  type="number" 
                  placeholder="Digite a porcentagem promocional aqui..." 
                  value={promotionalPercent} 
                  onChange={(e) => setPromotionalPercent(e.target.value)} 
                />

              </>
            } 
            {
              mode === 'clientStorage' &&
              <>
                <h3>Produto</h3>
                <select 
                  className="crud-modal-select" 
                  value={selectedProduct.id} 
                  onChange={(e) => setSelectedProduct(products.find((product) => product.id === parseInt(e.target.value)))}
                >
                  <option value="">Selecione um produto</option>
                  {products.map((product) => (
                    <option key={product.id} value={product.id}>{product.name}</option>
                  ))}
                </select>
          
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
          </div>
          <div className="modal-buttons">
            <button className="modal-button cancel" onClick={() => setOpenAddModal(false)}>CANCELAR</button>
            {
              liberar ?
                <button
                  className="modal-button submit" 
                  onClick={() => {
                    if (mode === 'client') {
                      handleAddClient(name, region, level, cnpj, email, phone_number);
                    } else if (mode === 'product') {
                      handleAddProduct(name, category, quantity_ml, stock_quantity, stock_Max, price);
                    } else if (mode === 'promotion') {
                      handleAddPromotion(productID, level, promotionalPercent);
                    } else if (mode === 'clientStorage') {
                      handleAddClientProduct(clientId, selectedProduct.id, quantity);
                      console.log(clientId, selectedProduct.id, quantity)
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
                      handleAddProduct(name, category, quantity_ml, stock_quantity, stock_Max, price);
                    } else if (mode === 'promotion') {
                      handleAddPromotion(productID, level, promotionalPercent);
                    } else if (mode === 'clientStorage') {
                      handleAddClientProduct(clientId, selectedProduct.id, quantity);
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