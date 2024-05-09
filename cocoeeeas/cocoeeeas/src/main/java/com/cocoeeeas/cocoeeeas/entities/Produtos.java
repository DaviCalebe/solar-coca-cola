package com.cocoeeeas.cocoeeeas.entities;
import jakarta.persistence.*;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import org.hibernate.annotations.UuidGenerator;

import java.util.UUID;


@Entity
@Table(name ="tb_produtos")

@NoArgsConstructor
@AllArgsConstructor
@Getter
@Setter
public class Produtos {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String name;

    private String categoria;

    private Integer quantidade_ml;

    private Long quantidade_estoque;



}
