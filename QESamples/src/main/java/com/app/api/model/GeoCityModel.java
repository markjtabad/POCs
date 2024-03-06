package com.app.api.model;

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