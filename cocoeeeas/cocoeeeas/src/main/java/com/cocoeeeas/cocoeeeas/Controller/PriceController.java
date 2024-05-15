package com.cocoeeeas.cocoeeeas.Controller;

import com.cocoeeeas.cocoeeeas.Service.PriceService;
import com.cocoeeeas.cocoeeeas.entities.Price;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@CrossOrigin("*")
@RestController
@RequestMapping("/prices")

public class PriceController {

    @Autowired
    private PriceService priceService;

    @GetMapping()
    public List<Price> getAllPrices()
    {
        return priceService.getPrice();
    }
}
