package com.Cocacola.pricemanagementapi.Repository;

import com.Cocacola.pricemanagementapi.Entities.ClientProduct;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface ClientProductRepository extends JpaRepository<ClientProduct, Long> {
    List<ClientProduct> findByClienteId(Long clienteId);
}

