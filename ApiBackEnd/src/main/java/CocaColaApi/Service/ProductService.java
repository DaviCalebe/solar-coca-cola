package CocaColaApi.Service;

import CocaColaApi.entities.Product;

import java.util.List;

public interface ProductService {

    List<Product> getProducts();

    Product getProduct(long id);

    void addProduct(Product product);

    Product updateProduct(long id, Product product);


    void deleteProduct(long id);
}
