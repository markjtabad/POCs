package com.app.api.data;

import java.util.List;

public interface CityRepo extends APIRepository<City, Integer>{

    List<City> findByCountry(String country);
    
}
