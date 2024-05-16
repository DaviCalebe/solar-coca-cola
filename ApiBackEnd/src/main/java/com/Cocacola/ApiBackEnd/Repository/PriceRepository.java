package com.Cocacola.ApiBackEnd.Repository;

import com.Cocacola.ApiBackEnd.Entities.Price;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface PriceRepository extends JpaRepository<Price, Integer> {
}