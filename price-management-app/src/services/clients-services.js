import api from "./api.js";

/* ================= CLIENTS (FALTA O UPDATE)=================
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