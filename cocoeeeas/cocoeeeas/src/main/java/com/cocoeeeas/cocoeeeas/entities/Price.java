package com.cocoeeeas.cocoeeeas.entities;

import jakarta.persistence.*;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Entity
@Table(name ="tb_price")
@Getter
@Setter
@NoArgsConstructor
public class Price {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private Double price_Total;

    @ManyToOne
    @JoinColumn(name = "product_id")
    private Product product;

    @ManyToOne
    @JoinColumn(name = "Client_id")
    private Client client;


    public Price(Product product, Client client) {
        this.product = product;
        this.client = client;
        this.price_Total = calculatePrice();
    }



    public Region getRegion() {
        return client.getRegion();
    }

    public Level getLevel() {
        return client.getLevel();
    }

    private Double calculatePrice() {
        Double calculatedPrice;
        if (getLevel() != null && getLevel().getId() == 1) {
             calculatedPrice = this.price_Total * 0.5;
        }
        else {

            calculatedPrice  = this.price_Total != null ? this.price_Total : 0.0;
        }
        return calculatedPrice;
    }

}
