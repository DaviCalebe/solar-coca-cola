package com.Cocacola.pricemanagementapi.Repository;

import com.Cocacola.pricemanagementapi.Entities.ClientProduct;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;
import java.util.Optional;
import java.util.List;

@Repository
public interface ClientProductRepository extends JpaRepository<ClientProduct, Long> {
    List<ClientProduct> findByClienteId(Long clienteId);

    @Query("SELECT cp FROM ClientProduct cp WHERE cp.cliente.id = :clienteId AND cp.produto.id = :produtoId")
    Optional<ClientProduct> findByClienteIdAndProdutoId(@Param("clienteId") Long clienteId, @Param("produtoId") Long produtoId);

}

