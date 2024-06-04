import api from "./api.js";

import axios from "axios";

export default axios.create({
    baseURL: 'https://cocacola-api-production.up.railway.app',
})

/* ================= CLIENTES STORAGE =================
 */
export const fetchClientStorage = async (client) => {
    try {
      const response = await api.get(`/clients/${client}/produtos`);
      return response.data;
    } catch (error) {
      console.error(error);
      return null;
    }
  };

  export const handleAddClientProduct = async (product, quantity) => {
    try {
      const response = await api.post(`/${client}/add/produtos`, {
        product: { id: product },
        quantity
      });
      setPromotions([...promotions, response.data]);
    } catch (error) {
      console.error(error);
    }
  };

  export const handleDeleteClientProduct = async (client, product) => {
    try {
      await api.delete(`/${client}/delete/${product}`);
      console.log(`Produto ${product} do cliente ${client} excluído com sucesso`);
    } catch (error) {
      console.log(`Erro ao deletar o product ${product} do cliente ${client}`);
    }
  };