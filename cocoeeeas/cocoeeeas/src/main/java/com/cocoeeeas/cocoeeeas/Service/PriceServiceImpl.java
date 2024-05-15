package com.cocoeeeas.cocoeeeas.Service;

import com.cocoeeeas.cocoeeeas.Repository.PriceRepository;
import com.cocoeeeas.cocoeeeas.entities.Price;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class PriceServiceImpl implements PriceService {

    @Autowired
    private PriceRepository priceRepository;

    @Override
    public List<Price> getPrice() {
        return priceRepository.findAll();
    }
}
