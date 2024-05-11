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
@Table(name ="tb_region")

@NoArgsConstructor
@AllArgsConstructor
@Getter
@Setter
public class Region {

    @Id
    @Column(unique = true)
    private String name;
}
