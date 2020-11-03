////////////////////////////////////////////////////////////////////////////////////////////////
// Basic Data Structures: Use an Array to Store a Collection of Data
// https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/basic-data-structures/use-an-array-to-store-a-collection-of-data

// We have defined a variable called yourArray. Complete the statement by assigning an array of at least 5 elements in length to the yourArray variable. Your array should contain at least one string, one number, and one boolean.

// let yourArray; // Change this line
// let yourArray = [1, '2', 3, 4, true];

////////////////////////////////////////////////////////////////////////////////////////////////
// Basic Data Structures: Access an Array's Contents Using Bracket Notation
// https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/basic-data-structures/access-an-arrays-contents-using-bracket-notation

// In order to complete this challenge, set the 2nd position (index 1) of myArray to anything you want, besides "b".

// let myArray = ["a", "b", "c", "d"];
// // Only change code below this line
// myArray[1] = 5;
// // Only change code above this line
// console.log(myArray);
////////////////////////////////////////////////////////////////////////////////////////////////
// Basic Data Structures: Add Items to an Array with push() and unshift()
// https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/basic-data-structures/add-items-to-an-array-with-push-and-unshift

// We have defined a function, mixedNumbers, which we are passing an array as an argument. Modify the function by using push() and unshift() to add 'I', 2, 'three' to the beginning of the array and 7, 'VIII', 9 to the end so that the returned array contains representations of the numbers 1-9 in order.

// function mixedNumbers(arr) {
//     // Only change code below this line
//     arr.unshift('I', 2, 'three');
//     arr.push(7, 'VIII', 9);
//     // Only change code above this line
//     return arr;
// }
  
// console.log(mixedNumbers(['IV', 5, 'six']));

////////////////////////////////////////////////////////////////////////////////////////////////
// Basic Data Structures: Remove Items from an Array with pop() and shift()
// https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/basic-data-structures/remove-items-from-an-array-with-pop-and-shift
// We have defined a function, popShift, which takes an array as an argument and returns a new array. Modify the function, using pop() and shift(), to remove the first and last elements of the argument array, and assign the removed elements to their corresponding variables, so that the returned array contains their values.

// function popShift(arr) {
//     let popped = arr.pop(); // Change this line
//     let shifted = arr.shift(); // Change this line
//     return [shifted, popped];
// }
  
// console.log(popShift(['challenge', 'is', 'not', 'complete']));

////////////////////////////////////////////////////////////////////////////////////////////////
// Basic Data Structures: Remove Items Using splice()
// https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/basic-data-structures/remove-items-using-splice
// We've initialized an array arr. Use splice() to remove elements from arr, so that it only contains elements that sum to the value of 10.

// const arr = [2, 4, 5, 1, 7, 5, 2, 1];
// // Only change code below this line
// arr.splice(1, 4);
// // Only change code above this line
// console.log(arr);

////////////////////////////////////////////////////////////////////////////////////////////////
// Basic Data Structures: Add Items Using splice()
// https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/basic-data-structures/add-items-using-splice

// const numbers = [10, 11, 12, 12, 15];
// const startIndex = 3;
// const amountToDelete = 1;

// numbers.splice(startIndex, amountToDelete, 13, 14);
// // the second entry of 12 is removed, and we add 13 and 14 at the same index
// console.log(numbers);
// // returns [ 10, 11, 12, 13, 14, 15 ]

// We have defined a function, htmlColorNames, which takes an array of HTML colors as an argument. Modify the function using splice() to remove the first two elements of the array and add 'DarkSalmon' and 'BlanchedAlmond' in their respective places.

// function htmlColorNames(arr) {
//     // Only change code below this line
//     arr.splice(0, 2, 'DarkSalmon', 'BlanchedAlmond')
//     // Only change code above this line
//     return arr;
// }
  
// console.log(htmlColorNames(['DarkGoldenRod', 'WhiteSmoke', 'LavenderBlush', 'PaleTurquoise', 'FireBrick']));

////////////////////////////////////////////////////////////////////////////////////////////////
// Basic Data Structures: Copy Array Items Using slice()
// https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/basic-data-structures/copy-array-items-using-slice

// let weatherConditions = ['rain', 'snow', 'sleet', 'hail', 'clear'];

// let todaysWeather = weatherConditions.slice(1, 3);
// todaysWeather equals ['snow', 'sleet'];
// weatherConditions still equals ['rain', 'snow', 'sleet', 'hail', 'clear']

// We have defined a function, forecast, that takes an array as an argument. Modify the function using slice() to extract information from the argument array and return a new array that contains the elements 'warm' and 'sunny'.

// function forecast(arr) {
//     // Only change code below this line
//     let newArr = arr.slice(2, 4);
//     return newArr;
// }
  
//   // Only change code above this line
// console.log(forecast(['cold', 'rainy', 'warm', 'sunny', 'cool', 'thunderstorms']));

////////////////////////////////////////////////////////////////////////////////////////////////
// Basic Data Structures: Copy an Array with the Spread Operator
// https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/basic-data-structures/copy-an-array-with-the-spread-operator

// We have defined a function, copyMachine which takes arr (an array) and num (a number) as arguments. The function is supposed to return a new array made up of num copies of arr. We have done most of the work for you, but it doesn't work quite right yet. Modify the function using spread syntax so that it works correctly (hint: another method we have already covered might come in handy here!).

// function copyMachine(arr, num) {
//     let newArr = [];
//     while (num >= 1) {
//       // Only change code below this line
//         newArr.push([...arr]);
//       // Only change code above this line
//       num--;
//     }
//     return newArr;
// }
  
// console.log(copyMachine([true, false, true], 2));

////////////////////////////////////////////////////////////////////////////////////////////////
// Basic Data Structures: Combine Arrays with the Spread Operator
// https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/basic-data-structures/combine-arrays-with-the-spread-operator

// We have defined a function spreadOut that returns the variable sentence. Modify the function using the spread operator so that it returns the array ['learning', 'to', 'code', 'is', 'fun'].

// function spreadOut() {
//     let fragment = ['to', 'code'];
//     let sentence = ['learning', ...fragment, 'is', 'fun']; // Change this line
//     return sentence;
// }
  
// console.log(spreadOut());

////////////////////////////////////////////////////////////////////////////////////////////////
// Basic Data Structures: Check For The Presence of an Element With indexOf()
// https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/basic-data-structures/check-for-the-presence-of-an-element-with-indexof
// indexOf() can be incredibly useful for quickly checking for the presence of an element on an array. We have defined a function, quickCheck, that takes an array and an element as arguments. Modify the function using indexOf() so that it returns true if the passed element exists on the array, and false if it does not.

// let fruits = ['apples', 'pears', 'oranges', 'peaches', 'pears'];

// fruits.indexOf('dates'); // returns -1
// fruits.indexOf('oranges'); // returns 2
// fruits.indexOf('pears'); // returns 1, the first index at which the element exists

// function quickCheck(arr, elem) {
//     // Only change code below this line
//     // freeCodeCamp didn't like this syntax
//     // return arr.indexOf(elem) > 0 ? true : false;
//           if (arr.indexOf(elem) === -1) {
//             return false;
//           } else {
//             return true;
//           }
    // Only change code above this line
// }
  
// console.log(quickCheck(['squash', 'onions', 'shallots'], 'mushrooms'));
// console.log(quickCheck(['squash', 'onions', 'shallots'], 'onions'));

////////////////////////////////////////////////////////////////////////////////////////////////
// Basic Data Structures: Iterate Through All an Array's Items Using For Loops
// https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/basic-data-structures/iterate-through-all-an-arrays-items-using-for-loops

// We have defined a function, filteredArray, which takes arr, a nested array, and elem as arguments, and returns a new array. elem represents an element that may or may not be present on one or more of the arrays nested within arr. Modify the function, using a for loop, to return a filtered version of the passed array such that any array nested within arr containing elem has been removed.

// function filteredArray(arr, elem) {
//     let newArr = [];
//     // Only change code below this line
//     for (let i = 0; i < arr.length; i++) {
//         if (arr[i].indexOf(elem) === -1) {
//             newArr.push(arr[i]);
//         }
//     }
//     // Only change code above this line
//     return newArr;
// }
  
// console.log(filteredArray([[3, 2, 3], [1, 6, 3], [3, 13, 26], [19, 3, 9]], 3));

////////////////////////////////////////////////////////////////////////////////////////////////
// Basic Data Structures: Create complex multi-dimensional arrays
// https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/basic-data-structures/create-complex-multi-dimensional-arrays
// We have defined a variable, myNestedArray, set equal to an array. Modify myNestedArray, using any combination of strings, numbers, and booleans for data elements, so that it has exactly five levels of depth (remember, the outer-most array is level 1). Somewhere on the third level, include the string 'deep', on the fourth level, include the string 'deeper', and on the fifth level, include the string 'deepest'.

// let myNestedArray = [
//     [
//         [
//             'deep',
//         ],
//         [
//             [
//                 'deeper',
//             ],
//             [
//                 [
//                     'deepest',
//                 ]
//             ],
//         ],
//     ],
// ]

////////////////////////////////////////////////////////////////////////////////////////////////
// Basic Data Structures: Add Key-Value Pairs to JavaScript Objects
// https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/basic-data-structures/add-key-value-pairs-to-javascript-objects
// A foods object has been created with three entries. Using the syntax of your choice, add three more entries to it: bananas with a value of 13, grapes with a value of 35, and strawberries with a value of 27.

// let foods = {
//     apples: 25,
//     oranges: 32,
//     plums: 28
// };
  
  // Only change code below this line
//   let food1 = 'strawberries';
//   foods.bananas = 13;
//   foods.grapes = 35;
//   foods[food1] = 27;
//   // Only change code above this line
  
// console.log(foods);

////////////////////////////////////////////////////////////////////////////////////////////////
// Basic Data Structures: Modify an Object Nested Within an Object
// https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/basic-data-structures/modify-an-object-nested-within-an-object
// Here we've defined an object userActivity, which includes another object nested within it. Set the value of the online key to 45.

// let userActivity = {
//     id: 23894201352,
//     date: 'January 1, 2017',
//     data: {
//       totalUsers: 51,
//       online: 42
//     }
// };
  
// // Only change code below this line
// userActivity.data.online = 45;
// // Only change code above this line
  
// console.log(userActivity);

////////////////////////////////////////////////////////////////////////////////////////////////
// Basic Data Structures: Access Property Names with Bracket Notation
// https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/basic-data-structures/access-property-names-with-bracket-notation

// We've defined a function, checkInventory, which receives a scanned item as an argument. Return the current value of the scannedItem key in the foods object. You can assume that only valid keys will be provided as an argument to checkInventory.

// let foods = {
//     apples: 25,
//     oranges: 32,
//     plums: 28,
//     bananas: 13,
//     grapes: 35,
//     strawberries: 27
// };
  
// function checkInventory(scannedItem) {
//     // Only change code below this line
//     return foods[scannedItem];
//     // Only change code above this line
// }
  
// console.log(checkInventory("apples"));
  
////////////////////////////////////////////////////////////////////////////////////////////////
// Basic Data Structures: Use the delete Keyword to Remove Object Properties
// https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/basic-data-structures/use-the-delete-keyword-to-remove-object-properties

// Use the delete keyword to remove the oranges, plums, and strawberries keys from the foods object.

// let foods = {
//     apples: 25,
//     oranges: 32,
//     plums: 28,
//     bananas: 13,
//     grapes: 35,
//     strawberries: 27
// };
  
// Only change code below this line
//   delete foods.oranges;
//   delete foods.plums;
//   delete foods.strawberries;
// Only change code above this line
  
// console.log(foods);
  
////////////////////////////////////////////////////////////////////////////////////////////////
// Basic Data Structures: Check if an Object has a Property
// https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/basic-data-structures/check-if-an-object-has-a-property
// We've created an object, users, with some users in it and a function isEveryoneHere, which we pass the users object to as an argument. Finish writing this function so that it returns true only if the users object contains all four names, Alan, Jeff, Sarah, and Ryan, as keys, and false otherwise.

// let users = {
//     Alan: {
//       age: 27,
//       online: true
//     },
//     Jeff: {
//       age: 32,
//       online: true
//     },
//     Sarah: {
//       age: 48,
//       online: true
//     },
//     Ryan: {
//       age: 19,
//       online: true
//     }
// };
  
// function isEveryoneHere(obj) {
//     // Only change code below this line
//     // returns true only if the users object contains all four names, Alan, Jeff, Sarah, and Ryan, as keys, and false otherwise.
//     if (obj['Alan'] && obj['Jeff'] && obj['Sarah'] && obj['Ryan']) return true;
//     return false;
//     // Only change code above this line
// }
  
//   console.log(isEveryoneHere(users));
  
////////////////////////////////////////////////////////////////////////////////////////////////
// Basic Data Structures: Iterate Through the Keys of an Object with a for...in Statement
// https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/basic-data-structures/iterate-through-the-keys-of-an-object-with-a-for---in-statement

// We've defined a function countOnline which accepts one argument (a users object). Use a for...in statement within this function to loop through the users object passed into the function and return the number of users whose online property is set to true. An example of a users object which could be passed to countOnline is shown below. Each user will have an online property with either a true or false value.

// const myUsers = {
//   Alan: {
//     online: false
//   },
//   Jeff: {
//     online: true
//   },
//   Sarah: {
//     online: false
//   }
// }

// function countOnline(usersObj) {
//     // Only change code below this line
//     let numOnline = 0;
//     for (const property in usersObj) {
//         if (usersObj[property].online === true) numOnline++;
//     }
//     return numOnline;
//     // Only change code above this line
// }

// console.log(countOnline(myUsers));

////////////////////////////////////////////////////////////////////////////////////////////////
// Basic Data Structures: Generate an Array of All Object Keys with Object.keys()
// https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/basic-data-structures/generate-an-array-of-all-object-keys-with-object-keys
// Finish writing the getArrayOfUsers function so that it returns an array containing all the properties in the object it receives as an argument.

// let users = {
//     Alan: {
//       age: 27,
//       online: false
//     },
//     Jeff: {
//       age: 32,
//       online: true
//     },
//     Sarah: {
//       age: 48,
//       online: false
//     },
//     Ryan: {
//       age: 19,
//       online: true
//     }
// };
  
// function getArrayOfUsers(obj) {
    // Only change code below this line
    // return Object.keys(users);
    // Only change code above this line
// }
  
// console.log(getArrayOfUsers(users));

////////////////////////////////////////////////////////////////////////////////////////////////
// Basic Data Structures: Modify an Array Stored in an Object
// https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/basic-data-structures/modify-an-array-stored-in-an-object
// Take a look at the object we've provided in the code editor. The user object contains three keys. The data key contains five keys, one of which contains an array of friends. From this, you can see how flexible objects are as data structures. We've started writing a function addFriend. Finish writing it so that it takes a user object and adds the name of the friend argument to the array stored in user.data.friends and returns that array.

let user = {
    name: 'Kenneth',
    age: 28,
    data: {
      username: 'kennethCodesAllDay',
      joinDate: 'March 26, 2016',
      organization: 'freeCodeCamp',
      friends: [
        'Sam',
        'Kira',
        'Tomo'
      ],
      location: {
        city: 'San Francisco',
        state: 'CA',
        country: 'USA'
      }
    }
  };
  
  function addFriend(userObj, friend) {
    // Only change code below this line
    userObj['data']['friends'].push(friend);
    return userObj['data']['friends'];
    // Only change code above this line
  }
  
  console.log(addFriend(user, 'Pete'));
  