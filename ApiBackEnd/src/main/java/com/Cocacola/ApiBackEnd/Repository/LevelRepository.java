package com.Cocacola.ApiBackEnd.Repository;

import com.Cocacola.ApiBackEnd.Entities.Level;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

@Repository
public interface LevelRepository extends JpaRepository<Level, Long> {
   @Modifying
   @Query(
      value = "ALTER TABLE tb_level AUTO_INCREMENT = 1",
      nativeQuery = true
   )
   void resetSequence();
}

