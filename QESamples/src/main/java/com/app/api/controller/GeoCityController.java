package com.app.api.controller;

import java.util.List;

@RestController
public class GeoCityController{
    @Autowired
    private GeoCityService service;

    @PostMapping(value = "/save")
    public City saveCity(@RequestBody City city){
        return service.addCity(city);
    }

    @GetMapping("/getUsers")
    public List<City> findAllCities(){
        return service.getCities();
    }

    /*
    @GetMapping("/getCitiesByCountry/{country}")
    public List<City> findCitiesByCountry(@PathVariable String country){
        return service.getCitiesByCountry(country);
    }

    @DeleteMapping("/remove")
    public City removeCity(@RequestBody City city){
        service.deleteCity(city);
        return city;
    }
     */

}