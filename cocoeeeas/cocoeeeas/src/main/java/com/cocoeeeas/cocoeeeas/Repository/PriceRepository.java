package com.cocoeeeas.cocoeeeas.Repository;

import com.cocoeeeas.cocoeeeas.entities.Price;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface PriceRepository extends JpaRepository<Price, Integer> {
}
