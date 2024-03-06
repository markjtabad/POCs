package com.app.api.service;

import java.util.List;

@Service
public class GeoCityService{

    @Autowired
    private CityRepo repo;

    public City addCity(City city){
        return repo.save(city);
    }

    public List<City> getCities(){
        List<City> cities = repo.findAll();
        return cities;
    }

    public List<City> getCitiesByCountry(String country){
        return repo.findByCountry(country);
    }

    public void deleteCity(City city){
        return repo.delete(city);
    }

}
