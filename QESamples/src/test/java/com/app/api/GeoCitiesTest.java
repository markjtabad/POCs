package com.app.api;

import java.util.stream.Stream;

import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.boot.test.mock.mockito.MockBean;
import org.springframework.test.context.junit4.SpringRunner;

import com.app.api.service.GeoCityService;
import com.app.api.data.CityRepo;

@RunWith(SpringRunner.class)
@SpringBootTest
public class GeoCitiesTest {
    
    @Autowired
    private GeoCityService service;

    @MockBean
    private CityRepo repo;

    @Test
    public void getCitiesTest(){
        when(repo.findAll()).thenReturn(Stream
            .of(new City(117, "Manila", "Philippines"), new City(3, "Toronto, "Canada")).collect(Collectors.toList()));
    
        assertEquals(2, service.getCities().size);
        }
}
