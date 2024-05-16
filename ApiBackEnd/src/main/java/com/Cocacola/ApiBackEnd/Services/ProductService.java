package com.Cocacola.ApiBackEnd.Services;

import com.Cocacola.ApiBackEnd.Entities.Product;

import java.util.List;

public interface ProductService {

    List<Product> getProducts();

    Product getProduct(long id);

    void addProduct(Product product);

    Product updateProduct(long id, Product product);


    void deleteProduct(long id);
}
