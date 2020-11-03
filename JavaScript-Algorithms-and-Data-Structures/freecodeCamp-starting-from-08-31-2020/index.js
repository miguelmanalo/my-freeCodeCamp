// ES6: Create a Module Script
// https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/es6/create-a-module-script

{/* <html>
  <body>
    <!-- Only change code below this line -->
    <script type="module" src="index.js"></script>
    <!-- Only change code above this line -->
  </body>
</html> */}

/////////////////////////////////////

// ES6: Use export to Share a Code Block
// https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/es6/use-export-to-share-a-code-block

export const uppercaseString = (string) => {
    return string.toUpperCase();
  }
  
  const lowercaseString = (string) => {
    return string.toLowerCase()
  }
  
  export { lowercaseString } 

/////////////////////////////////////

// ES6: Reuse JavaScript Code Using import
// https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/es6/reuse-javascript-code-using-import

import { uppercaseString, lowercaseString } from 'string_functions.js';  
// Only change code above this line

uppercaseString("hello");
lowercaseString("WORLD!");

/////////////////////////////////////
// ES6: Use * to Import Everything from a File
// https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/es6/use--to-import-everything-from-a-file

import * as stringFunctions from "./string_functions.js"

// Only change code above this line

stringFunctions.uppercaseString("hello");
stringFunctions.lowercaseString("WORLD!");

/////////////////////////////////////

// ES6: Create an Export Fallback with export default
// https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/es6/create-an-export-fallback-with-export-default

export default function subtract(x, y) {
    return x - y;
  }

  
  https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/es6/create-a-javascript-promise
// ES6: Import a Default Export
// https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/es6/import-a-default-export

  

import subtract from "./math_functions.js"
// Only change code above this line

subtract(7,4);

/////////////////////////////////////

// ES6: Create a JavaScript Promise
// https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/es6/create-a-javascript-promise

// promise syntax
//const myPromise = new Promise((resolve, reject) => {

// });

const makeServerRequest = new Promise((resolve, reject) => {

});


/////////////////////////////////////

// ES6: Complete a Promise with resolve and reject
// https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/es6/complete-a-promise-with-resolve-and-reject

// const myPromise = new Promise((resolve, reject) => {
//     if(condition here) {
//       resolve("Promise was fulfilled");
//     } else {
//       reject("Promise was rejected");
//     }
//   });

const makeServerRequest = new Promise((resolve, reject) => {
    // responseFromServer represents a response from a server
    let responseFromServer;
      
    if(responseFromServer) {
      // Change this line
      resolve('We got the data');
    } else {  
      // Change this line
      reject('Data not received')
    }
  });

/////////////////////////////////////

// ES6: Handle a Fulfilled Promise with then
// https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/es6/handle-a-fulfilled-promise-with-then

// myPromise.then(result => {
//     // do something with the result.
//   });

const makeServerRequest = new Promise((resolve, reject) => {
    // responseFromServer is set to true to represent a successful response from a server
    let responseFromServer = true;
      
    if(responseFromServer) {
      resolve("We got the data");
      // write your code here
      makeServerRequest.then((result) => {
        console.log(result);
      });
    } else {  
      reject("Data not received");
    }
  });
  

  ///////////////////////////////////////////////////////

// ES6: Handle a Rejected Promise with catch
// https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/es6/handle-a-rejected-promise-with-catch

const makeServerRequest = new Promise((resolve, reject) => {
    // responseFromServer is set to false to represent an unsuccessful response from a server
    let responseFromServer = false;
      
    if(responseFromServer) {
      resolve("We got the data");
    } else {  
      reject("Data not received");
    }
  });
  
  makeServerRequest.then(result => {
    console.log(result);
  });
  
  makeServerRequest.catch((error) => {
    console.log(error);
  });