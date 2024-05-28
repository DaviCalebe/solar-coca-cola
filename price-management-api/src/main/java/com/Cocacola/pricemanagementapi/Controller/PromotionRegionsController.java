package com.Cocacola.pricemanagementapi.Controller;

import com.Cocacola.pricemanagementapi.Entities.PromotionRegions;

import com.Cocacola.pricemanagementapi.Services.PromotionsRegionsService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin("*")
@RestController
@RequestMapping("/promotions/Regions")
public class PromotionRegionsController {

    

    @Autowired
    private PromotionsRegionsService promotionsRegionsService;

    @GetMapping
    public List<PromotionRegions> getAllPromotions() {
        return promotionsRegionsService.getRegionsPromotions();
    }

    @PostMapping("/generate")
    public ResponseEntity<Void> generateRegionsPromotions() {
        promotionsRegionsService.generateRegionsPrices();
        return ResponseEntity.noContent().build();
    }
}