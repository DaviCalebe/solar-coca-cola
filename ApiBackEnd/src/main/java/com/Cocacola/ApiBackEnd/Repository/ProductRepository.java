package com.Cocacola.ApiBackEnd.Repository;

import com.Cocacola.ApiBackEnd.Entities.Product;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface ProductRepository extends JpaRepository<Product,Long > {

}