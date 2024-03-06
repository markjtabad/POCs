package com.app.api.model;

import java.net.URLEncoder;
import com.mashape.unirest.http.HttpResponse;
import com.mashape.unirest.http.JsonNode;
import com.mashape.unirest.http.Unirest;


public class GeoCityModel{

  public static void main( String[] args ) throws Exception
  {
    String host = "https://movie-database-imdb-alternative.p.rapidapi.com/";
      String charset = "UTF-8";
      // Headers for a request
      String x_rapidapi_host = "movie-database-imdb-alternative.p.rapidapi.com";
      String x_rapidapi_key = <YOUR_RAPIDAPI_KEY>;//Type here your key
      // Params
      String s = "Pulp";
  // Format query for preventing encoding problems
      String query = String.format("s=%s",
       URLEncoder.encode(s, charset));

       HttpResponse <JsonNode> response = Unirest.get(host + "?" + query)
      .header("x-rapidapi-host", x_rapidapi_host)
      .header("x-rapidapi-key", x_rapidapi_key)
      .asJson();
      System.out.println(response.getStatus());
      System.out.println(response.getHeaders().get("Content-Type"));
  }

  const axios = require('axios');

  const options = {
    method: 'GET',
    url: 'https://wft-geo-db.p.rapidapi.com/v1/geo/countries/PH/places',
    headers: {
      'X-RapidAPI-Key': '2fed39ffa1mshccbe13965d016b4p1ad7f2jsn871ad9936e72',
      'X-RapidAPI-Host': 'wft-geo-db.p.rapidapi.com'
    }
  };

  try {
    const response = await axios.request(options);
    console.log(response.data);
  } catch (error) {
    console.error(error);
  }

}