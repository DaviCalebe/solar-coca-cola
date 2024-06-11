import api from "./api.js";

export const fetchProducts = async () => {
    const response = await api.get('/products');
    return response.data;
  };

export const handleAddProduct = async (name, category, quantity_ml, stock_quantity, stock_Max, price, products, setProducts, setAlert) => {
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
        setAlert({ message: 'Produto adicionado com sucesso!', type: 'success' });
    } catch (error) {
        console.error(error);
        setAlert({ message: 'Erro ao adicionar produto!', type: 'error' });
    }
};

export const handleUpdateProduct = async (product, setSelectedProduct) => {
    try{
        const response = await api.put(`/products/update/${product.id}`, product);
        setSelectedProduct(product);
        console.log(response.data);
    } catch (error) {
        console.error(`Erro ao atualizar promoção: ${error.message}`);
    }
};

export const handleDeleteProduct = async (id, setAlert) => {
    try{
        await api.delete(`/products/delete/${id}`);
        console.log(`Produto ${id} excluído com sucesso`);
        setAlert({ message: 'Produto excluído com sucesso!', type: 'success' });
    } catch (error) {
        console.log(`Erro ao deletar o produto ${id}`);
        setAlert({ message: 'Erro ao excluir produto!', type: 'error' });
    }
};