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

  export const handleAddPromotion = async (promotionalPercent) => {
    try {
      const response = await api.post('/promotions/add', {
        product: { id: 1},
        level: { id: 1},
        promotionalPercent
      });
      setPromotions([...promotions, response.data]);
    } catch (error) {
      console.error(error);
    }
  };

  export const handleUpdatePromotion = async (promotion) => {
    try{
      const response = await api.put(`/promotions/update/${promotion.id}`, promotion);
      setSelectedPromotion (promotion);
      console.log(response.data);
    }catch (error) {
      console.error(`Erro ao atualizar promoção: ${error.message}`);
    }
  };

  export const handleDeletePromotion = async (id) => {
    try {
      await api.delete(`/promotions/delete/${id}`);
      console.log(`Promoção ${id} excluída com sucesso`);
    } catch (error) {
      console.log(`Erro ao deletar a promoção ${id}`);
    }
  };