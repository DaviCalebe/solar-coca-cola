package com.Cocacola.pricemanagementapi.Repository;
import com.Cocacola.pricemanagementapi.Entities.Level;
import com.Cocacola.pricemanagementapi.Entities.Product;
import com.Cocacola.pricemanagementapi.Entities.Promotion;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

public interface PromotionRepository extends JpaRepository<Promotion, Long> {
List<Promotion> findByProductAndLevel(Product product, Level level);
}