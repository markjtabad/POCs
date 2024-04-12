labs-08-modernjs
  src
    /async.js
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
    /index.js
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
    /math.js
          export const numPI = Math.PI;

          export function multiply(a, b){
            return a* b;
          }

  .editorconfig
      # EditorConfig helps developers define and maintain consistent
      # coding styles between different editors and IDEs
      # http://editorconfig.org

      root = true

      [*]
      indent_style = space
      indent_size = 2
      end_of_line = lf
      charset = utf-8
      trim_trailing_whitespace = true
      insert_final_newline = true
  .gitignore
      # dependencies
      /node_modules

      # testing
      /coverage

      # misc
      .DS_Store
      .env.local
      .env.development.local
      .env.test.local
      .env.production.local

      # logs
      *.log
      logs

      # ide
      .vscode
  .README.md
      labs-08-modernjs
  package-lock.json
      {
        "name": "mu-se-labs-08-abadmar-modernjs",
        "version": "1.0.0",
        "lockfileVersion": 1,
        "requires": true,
        "dependencies": {
          "esm": {
            "version": "3.2.25",
            "resolved": "https://artifactory.manulife.ca/artifactory/api/npm/mfc-dig-npm/esm/-/esm-3.2.25.tgz",
            "integrity": "sha1-NCwYwp1WFXaIulzjH4Qx+7eVzBA="
          },
          "node-fetch": {
            "version": "2.6.5",
            "resolved": "https://artifactory.manulife.ca/artifactory/api/npm/mfc-dig-npm/node-fetch/-/node-fetch-2.6.5.tgz",
            "integrity": "sha1-QnNVN9fwgKfl94tsVJtxRr4XQv0=",
            "requires": {
              "whatwg-url": "^5.0.0"
            }
          },
          "tr46": {
            "version": "0.0.3",
            "resolved": "https://artifactory.manulife.ca/artifactory/api/npm/mfc-dig-npm/tr46/-/tr46-0.0.3.tgz",
            "integrity": "sha1-gYT9NH2snNwYWZLzpmIuFLnZq2o="
          },
          "webidl-conversions": {
            "version": "3.0.1",
            "resolved": "https://artifactory.manulife.ca/artifactory/api/npm/mfc-dig-npm/webidl-conversions/-/webidl-conversions-3.0.1.tgz",
            "integrity": "sha1-JFNCdeKnvGvnvIZhHMFq4KVlSHE="
          },
          "whatwg-url": {
            "version": "5.0.0",
            "resolved": "https://artifactory.manulife.ca/artifactory/api/npm/mfc-dig-npm/whatwg-url/-/whatwg-url-5.0.0.tgz",
            "integrity": "sha1-lmRU6HZUYuN2RNNib2dCzotwll0=",
            "requires": {
              "tr46": "~0.0.3",
              "webidl-conversions": "^3.0.0"
            }
          }
        }
      }
  package.json
      {
      "name": "mu-se-labs-08-abadmar-modernjs",
      "version": "1.0.0",
      "description": "",
      "main": "index.js",
      "scripts": {
        "start": "node src/index.js",
        "import": "node -r esm src/index.js",
        "asynch": "node -r esm src/asynch.js",
        "test": "echo \"Error: no test specified\" && exit 1"
      },
      "repository": {
        "type": "git",
        "url": "git+https://github.com/manulife-ca-sandbox/mu-se-labs-08-abadmar-modernjs.git"
      },
      "author": "",
      "license": "ISC",
      "bugs": {
        "url": "https://github.com/manulife-ca-sandbox/mu-se-labs-08-abadmar-modernjs/issues"
      },
      "homepage": "https://github.com/manulife-ca-sandbox/mu-se-labs-08-abadmar-modernjs#readme",
      "dependencies": {
        "esm": "^3.2.25",
        "node-fetch": "^2.6.5"
      }
    }
