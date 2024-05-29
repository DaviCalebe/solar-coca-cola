package com.Cocacola.pricemanagementapi.Controller;

import com.Cocacola.pricemanagementapi.Entities.Promotion;
import com.Cocacola.pricemanagementapi.Services.PromotionService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;


import java.util.List;

@CrossOrigin("*")
@RestController
@RequestMapping("/promotions")
public class PromotionController {

    @Autowired
    private PromotionService promotionService;


    @GetMapping
    public List<Promotion> getAllPromotions() {
        return promotionService.getPromotions();
    }
  
    @PostMapping("/add")
    public ResponseEntity<Promotion> createPromotion(@RequestBody Promotion promotion) {
        Promotion savedPromotion = promotionService.save(promotion);
        return ResponseEntity.ok(savedPromotion);
    }
    @PutMapping("/update/{id}")
    public ResponseEntity<Promotion> updatePromotion(@PathVariable Long id, @RequestBody Promotion promotionDetails) {
        Promotion updatedPromotion = promotionService.update(id, promotionDetails);
        if (updatedPromotion != null) {
            return ResponseEntity.ok(updatedPromotion);
        }
        return ResponseEntity.notFound().build();
    }

    @DeleteMapping("/delete/{id}")
    public ResponseEntity<Void> deletePromotion(@PathVariable Long id) {
        promotionService.deleteById(id);
        return ResponseEntity.noContent().build();
    }

}