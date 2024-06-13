import api from "./api.js";

/* ================= CLIENTS =================
 */

export const fetchClients = async () => {
  try {
    const response = await api.get('/clients');
    return response.data;
  } catch (error) {
    console.error(error);
    return [];
  }
};

export const handleAddClient = async (name, region, level, cnpj, email, phone_number, clients, setClients, setAlert) => {
  try {
    const response = await api.post('/clients/add', {
      name,
      region: { id: region },
      level: { id: level },
      cnpj,
      email,
      phone_number
    });
    if (Array.isArray(clients)) {
      setClients([...clients, response.data]);
    } else {
      setClients([response.data]);
    }
    setAlert({ message: 'Cliente adicionado com sucesso!', type: 'success' });
  } catch (error) {
    console.error(error);
    setAlert({ message: 'Erro ao adicionar cliente!', type: 'error' });
  }
};

export const handleUpdateClient = async (client, setSelectedClient) => {
  try {
    const response = await api.put(`/clients/update/${client.id}`, client);
    setSelectedClient(client);
    console.log(response.data);
  } catch (error) {
    console.error(`Erro ao atualizar cliente: ${error.message}`);
    console.error(error.response.data);
  }
};

export const handleDeleteClient = async (id, setAlert) => {
try {
  await api.delete(`/clients/delete/${id}`);
  console.log(`Cliente ${id} excluído com sucesso`);
  setAlert({ message: 'Cliente excluído com sucesso!', type: 'success' });
} catch (error) {
  console.log(`Erro ao deletar o cliente ${id}`);
  setAlert({ message: 'Erro ao excluir cliente!', type: 'error' });
}
};

/* ================= CLIENTS STORAGE (ERRO EM TUDO) =================
 */

export const fetchClientStorage = async (id) => {
    try {
      const response = await api.get(`/clients/${id}/produtos`);
      return response.data;
    } catch (error) {
      console.error(error);
      return null;
    }
};

export const handleAddClientProduct = async (clientId, productId, quantidade, setAlert) => {
  try {
    const requestData = {
      produtoId: productId,
      quantidade: Number(quantidade)
    };
    const response = await api.post(`/clients/${clientId}/add/produtos`, requestData);
    console.log("Produto adicionado com sucesso:", response.data);
    setAlert({ message: 'Produto adicionado com sucesso!', type: 'success' });
  } catch (error) {
      console.error(error);
      setAlert({ message: 'Erro ao adicionar produto!', type: 'error' });
    }
};

export const handleDeleteClientProduct = async (client, productId, setAlert) => {
  try {
    await api.delete(`/clients/${client.id}/DeleteProduct/${productId}`);
    console.log(`Produto ${productId} do cliente ${client.id} excluído com sucesso`);
    setAlert({ message: 'Produto excluído com sucesso!', type: 'success' });
  } catch (error) {
    console.log(`Erro ao deletar o product ${productId} do cliente ${client.id}`);
    setAlert({ message: 'Erro ao excluir produto!', type: 'error' });
  }
};