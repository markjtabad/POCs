import fetch from 'node-fetch';

const restURL = 'https://doctor-info-with-delay.apps.cac.preview.pcf.manulife.com/v1/doctors/1/details';

console.log('Before fetch');

fetch(restURL).then((response) => response.json()).then(
  result => console.log('Result: ', result)).catch((error) => console.log('Error: ', error)
);

console.log('After fetch');

console.log('Async');

async function fetchAPIAsynch(){
  try{
    const response = await fetch(restURL);
    const result = await response.json();

    console.log('Result: ', result)
  } catch(error){
    console.log('Error: ', error)
  }
}

fetchAPIAsynch();
