import api from "./api.js";

export const fetchProducts = async () => {
    const response = await api.get('/products');
    return response.data;
  };

export const handleAddProduct = async (name, category, quantity_ml, stock_quantity, stock_Max, price, products, setProducts) => {
    try {
        const response = await api.post('/products/add', {
        name,
        category,
        quantity_ml,
        stock_quantity,
        stock_Max,
        price
        });
        setProducts([...products, response.data]);
    } catch (error) {
        console.error(error);
    }
};

export const handleDeleteProduct = async (id) => {
    try{
        await api.delete(`/products/delete/${id}`);
        console.log(`Produto ${id} excluído com sucesso`);
    } catch (error) {
        console.log(`Erro ao deletar o produto ${id}`);
    }
};