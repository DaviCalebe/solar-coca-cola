package com.Cocacola.ApiBackEnd.Services;

import com.Cocacola.ApiBackEnd.Entities.Price;
import com.Cocacola.ApiBackEnd.Repository.PriceRepository;
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