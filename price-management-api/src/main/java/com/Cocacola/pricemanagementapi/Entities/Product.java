package com.Cocacola.pricemanagementapi.Entities;

import jakarta.persistence.*;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;



@Entity
@Table(name ="tb_product")

@NoArgsConstructor
@AllArgsConstructor
@Getter
@Setter
public class Product {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String name;

    private String category;

    private Integer quantity_ml;

    private Integer stock_quantity;

    private Integer stock_Max;

    private Double price;


}