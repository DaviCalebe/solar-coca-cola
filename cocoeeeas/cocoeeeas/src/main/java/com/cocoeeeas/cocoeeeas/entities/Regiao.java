package com.cocoeeeas.cocoeeeas.entities;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Entity
@Table(name ="tb_regiao")

@NoArgsConstructor
@AllArgsConstructor
@Getter
@Setter
public class Regiao {

    @Id
    @Column(unique = true)
    private String name;
}
