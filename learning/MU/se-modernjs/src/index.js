import {multiply} from './math';

console.log('Welcome Mark to MUSE Cohort 8!')


console.log('---var---');
/*
function varTest(){
  var x = 1;

  console.log('var x - initial: ', x);

  if (x == 1){
    var x = 2;
    console.log('var x - inside block: ', x);
  }

  console.log('var x - ouside of block: ', x);
}

varTest();
*/
console.log('---let---');
/*
function letTest(){
  let x = 1;

  console.log('let x - initial: ', x);

  if (x == 1){
    let x = 2;
    console.log('let x - inside block: ', x);
  }

  console.log('let x - ouside of block: ', x);

}

letTest();
*/

console.log('---const---');

function constTest(){
  const x = 1;

  console.log('const x - initial: ', x);

  if (x == 1){
    const x = 2;
    console.log('const x - inside block: ', x);
  }

  console.log('const x - ouside of block: ', x);

}

//constTest();

console.log('---object---');

const employee = {
  name: 'Mark Abad',
  position: 'Full-stack DevOps Engineer',
  company: 'Manulife'
};

//console.log('employee object: ', employee);
//console.log('employee object: ', employee.name);
//console.log('employee object: ', employee['company']);

const employeeWithLocation ={
  ...employee,
  name: 'Mark',
  country: 'Philippines',
  city: 'Mandaluyong'
};

//console.log('Employee with location: ', employeeWithLocation);

const {name, city} = employeeWithLocation;
//console.log('Employee with location: ', name + ' from ' + city);

console.log('---template string---');
//console.log(`${name} from ${city}`);

console.log('---Array---');
const numbers =[0 ,1 ,2 ,3 ,4 ,5, true, employeeWithLocation];
//console.log('Array: ', numbers);
//console.log('Array element', numbers[7].country);

console.log('---Arrow Function---');
function sum(a, b) {
  return a + b;
}

var sum2 = function(a, b){
  return a + b;
}

const arrowSum = (a, b) => {
  return a+b;
}

const arrowSum2 = (a, b) => a + b;

console.log('Sum of ', arrowSum2(1, 2));

const printElements = (elements) => console.log(elements);

numbers.forEach((element) => console.log(element));

//Map
const arr = [1, 2, 3, 4, 5];

const arrayPlusOne = arr.map((num) => {
  return num + 1;
});

//console.log('Orig array: ', arr);
//console.log('Array map plus one: ' , arrayPlusOne);

const arrayOfEvenNumbers = arr.filter((num) =>{
  if(num % 2 == 0){
    return true;
  }

  return false;
});

//console.log('Array of even numbers: ', arrayOfEvenNumbers);

const persons = [
  {
    id: 1, name: 'Barbarian'
  },
  {id: 2, name: 'Necromaner'
}
]

const currPlayer = persons.find((player) => {
  if (player.name == 'Barbarian'){
    return true;
  }
  return false;
});

//console.log('Current player: ', currPlayer);

//Filter = multiple (if possible)
//Find = specific

const fibo = arr.reduce((previousValue, currentValue) =>{
  return previousValue + currentValue;
}, 0);

//console.log('fibo: ', fibo);


console.log('Import from another module: ', multiply(2, 10));
