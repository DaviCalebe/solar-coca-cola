package CocaColaApi.Service;

import CocaColaApi.Repository.PriceRepository;
import CocaColaApi.entities.Price;
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
