package com.Cocacola.pricemanagementapi.Services;

import com.Cocacola.pricemanagementapi.Entities.Level;
import com.Cocacola.pricemanagementapi.Entities.Product;
import com.Cocacola.pricemanagementapi.Entities.Promotion;
import com.Cocacola.pricemanagementapi.Repository.LevelRepository;
import com.Cocacola.pricemanagementapi.Repository.ProductRepository;
import com.Cocacola.pricemanagementapi.Repository.PromotionRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;


import java.util.List;
import java.util.Optional;

@Service
public class PromotionService {

    @Autowired
    private PromotionRepository promotionRepository;

    @Autowired
    private ProductRepository productRepository;

    @Autowired
    private LevelRepository levelRepository;

    public List<Promotion> getPromotions() {
        return promotionRepository.findAll();
    }


    private double calculatePromotionalPrice(Product product, Level level, Double promotionalPerce) {
        double price = product.getPrice();
      
        double total = price * (promotionalPerce / 100);
        return price - total;
    }

    public Promotion save(Promotion promotion) {
        // Recuperar produto e nível do banco de dados
        Product product = productRepository.findById(promotion.getProduct().getId())
                .orElseThrow(() -> new RuntimeException("Produto não encontrado"));
        Level level = levelRepository.findById(promotion.getLevel().getId())
                .orElseThrow(() -> new RuntimeException("Nível não encontrado"));

        // Calcular o preço promocional com o percentual fornecido
        double promotionalPrice = calculatePromotionalPrice(product, level, promotion.getPromotionalPercent());
        promotion.setPromotionalPrice(promotionalPrice);

        return promotionRepository.save(promotion);
    }

    public Promotion update(Long id, Promotion promotionDetails) {
        Optional<Promotion> optionalPromotion = promotionRepository.findById(id);
        if (optionalPromotion.isPresent()) {
            Promotion promotion = optionalPromotion.get();


            Product product = productRepository.findById(promotionDetails.getProduct().getId())
                    .orElseThrow(() -> new RuntimeException("Produto não encontrado"));
            Level level = levelRepository.findById(promotionDetails.getLevel().getId())
                    .orElseThrow(() -> new RuntimeException("Nível não encontrado"));

            promotion.setProduct(product);
            promotion.setLevel(level);


            double promotionalPrice = calculatePromotionalPrice(product, level, promotionDetails.getPromotionalPercent());
            promotion.setPromotionalPrice(promotionalPrice);
            promotion.setPromotionalPercent(promotionDetails.getPromotionalPercent());

            System.out.println("Atualizando Produto: " + product.getName() + ", Nível: " + level.getId() + ", Preço Promocional: " + promotionalPrice);

            return promotionRepository.save(promotion);
        }
        return null;

    }



    public void deleteById(Long id) {
        promotionRepository.deleteById(id);
    }
}




