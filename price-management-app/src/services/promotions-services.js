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