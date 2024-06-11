import api from "./api.js";

export const fetchPromotions = async () => {
    try {
      const response = await api.get('/promotions');
      return response.data;
    } catch (error) {
      console.error(error);
      return null;
    }
  };

  export const handleAddPromotion = async (product, level, promotionalPercent, promotions, setPromotions, setAlert) => {
    try {
      const response = await api.post('/promotions/add', {
        product: { id: product },
        level: { id: level },
        promotionalPercent
      });
      setPromotions([...promotions, response.data]);
      setAlert({ message: 'Promoção adicionada com sucesso!', type: 'success' });
    } catch (error) {
      console.error(error);
      setAlert({ message: 'Erro ao adicionar promoção!', type: 'error' });
    }
  };

  export const handleDeletePromotion = async (id, setAlert) => {
    try {
      await api.delete(`/promotions/delete/${id}`);
      console.log(`Promoção ${id} excluída com sucesso`);
      setAlert({ message: 'Promoção excluída com sucesso!', type: 'success' });
    } catch (error) {
      console.log(`Erro ao deletar a promoção ${id}`);
      setAlert({ message: 'Erro ao excluir promoção!', type: 'error' });
    }
  };