package com.cocoeeeas.cocoeeeas.Repository;

import com.cocoeeeas.cocoeeeas.entities.Client;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface ClientRepository extends JpaRepository <Client, Long >  {
}
