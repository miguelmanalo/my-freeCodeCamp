////////////////////////////////////////////////////////////////////////////////////////////////
// Basic Algorithm Scripting: Convert Celsius to Fahrenheit
// https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/basic-algorithm-scripting

// The algorithm to convert from Celsius to Fahrenheit is the temperature in Celsius times 9/5, plus 32.

// You are given a variable celsius representing a temperature in Celsius. Use the variable fahrenheit already defined and assign it the Fahrenheit temperature equivalent to the given Celsius temperature. Use the algorithm mentioned above to help convert the Celsius temperature to Fahrenheit.

// function convertToF(celsius) {
//     let fahrenheit = (celsius * 9) / 5 + 32;
//     return fahrenheit;
// }
  
// convertToF(30);
// console.log(convertToF(30));

////////////////////////////////////////////////////////////////////////////////////////////////
// Basic Algorithm Scripting: Reverse a String
// https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/basic-algorithm-scripting/reverse-a-string
// Reverse the provided string.

// You may need to turn the string into an array before you can reverse it.

// Your result must be a string.

// function reverseString(str) {
//     let newStr = '';
//     for (let i = str.length-1; i >= 0; i--) {
//         newStr += str[i];

//     }
//     return newStr;
// }
  
// console.log(reverseString("hello"));

////////////////////////////////////////////////////////////////////////////////////////////////
// Basic Algorithm Scripting: Factorialize a Number
// https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/basic-algorithm-scripting/factorialize-a-number

// Return the factorial of the provided integer.
// If the integer is represented with the letter n, a factorial is the product of all positive integers less than or equal to n.
// Factorials are often represented with the shorthand notation n!
// For example: 5! = 1 * 2 * 3 * 4 * 5 = 120
// Only integers greater than or equal to zero will be supplied to the function.

// function factorialize(num) {
//     let answer = 1;
//     for (let i = num; i >= 1; i--) {
//         answer *= i;
//     }
//     return answer;
//   }
  
// console.log(factorialize(5));
  
////////////////////////////////////////////////////////////////////////////////////////////////
// Basic Algorithm Scripting: Find the Longest Word in a String
// https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/basic-algorithm-scripting/find-the-longest-word-in-a-string
// Return the length of the longest word in the provided sentence.
// Your response should be a number.

// function findLongestWordLength(str) {
//     let longest = 0;
//     let strSplit = str.split(' ');
//     for (let i = 0; i < strSplit.length; i++) {
//         if (strSplit[i].length > longest) longest = strSplit[i].length;
//     }
//     return longest;
// }
  
// console.log(findLongestWordLength("The quick brown fox jumped over the lazy dog"));

////////////////////////////////////////////////////////////////////////////////////////////////
// Basic Algorithm Scripting: Return Largest Numbers in Arrays
// https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/basic-algorithm-scripting/return-largest-numbers-in-arrays
// Return an array consisting of the largest number from each provided sub-array. For simplicity, the provided array will contain exactly 4 sub-arrays.

// Remember, you can iterate through an array with a simple for loop, and access each member with array syntax arr[i].

// function largestOfFour(arr) {
//     let answerArr = [];
//     for (let i = 0; i < arr.length; i++) {
//         let largest;
//         for (let m = 0; m < arr[i].length; m++) {
//             if (!largest) largest = arr[i][m];
//             if (arr[i][m] > largest) largest = arr[i][m];
//         }
//         answerArr.push(largest)
//     }
//     return answerArr;
// }
  
// console.log(largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]));
// console.log(largestOfFour([[17, 23, 25, 12], [25, 7, 34, 48], [4, -10, 18, 21], [-72, -3, -17, -10]]));

////////////////////////////////////////////////////////////////////////////////////////////////
// Basic Algorithm Scripting: Confirm the Ending
// https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/basic-algorithm-scripting/confirm-the-ending
// Check if a string (first argument, str) ends with the given target string (second argument, target).

// This challenge can be solved with the .endsWith() method, which was introduced in ES2015. But for the purpose of this challenge, we would like you to use one of the JavaScript substring methods instead.

// function confirmEnding(str, target) {
//     let matchCount = 0;
//     for (let i = 0; i < target.length; i++) {
//         // start the matching at the first letter of target and the position in str where target should start
//         if (target[0 + i] === str[(str.length - target.length) + i]) {
//             matchCount++;
//         } else {
//             return false;
//         }
//     }
//     return matchCount === target.length;
// }
  
// console.log(confirmEnding("Bastian", "ian"));

////////////////////////////////////////////////////////////////////////////////////////////////
// Basic Algorithm Scripting: Repeat a String Repeat a String
// https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/basic-algorithm-scripting/repeat-a-string-repeat-a-string
// Repeat a given string str (first argument) for num times (second argument). Return an empty string if num is not a positive number.

// function repeatStringNumTimes(str, num) {
//     if (num <= 0) return ''; 
//     let answer = '';
//     for (let i = 0; i < num; i++) {
//         answer += str;
//     }
//     return answer;
// }
  
// console.log(repeatStringNumTimes("abc", 3));
  
////////////////////////////////////////////////////////////////////////////////////////////////
// Basic Algorithm Scripting: Truncate a String
// https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/basic-algorithm-scripting/truncate-a-string
// Truncate a string (first argument) if it is longer than the given maximum string length (second argument). Return the truncated string with a ... ending.

// function truncateString(str, num) {
//     if (str.length > num) {
//         return str.slice(0, num).concat('...');
//     }
//     return str;
// }
 
// ternary syntax
// const truncateString = (str, num) => str.length > num ? str.slice(0, num).concat('...') : str;

// console.log(truncateString("A-tisket a-tasket A green and yellow basket", 8));

////////////////////////////////////////////////////////////////////////////////////////////////
// Basic Algorithm Scripting: Finders Keepers
// https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/basic-algorithm-scripting/finders-keepers
// Create a function that looks through an array arr and returns the first element in it that passes a 'truth test'. This means that given an element x, the 'truth test' is passed if func(x) is true. If no element passes the test, return undefined.

// function findElement(arr, func) {
//     let falseCount = 0;
//     for (let i = 0; i < arr.length; i++) {
//         if (func(arr[i]) === false) {
//             falseCount++;
//         } else {
//             return arr[i];
//         }
//     }
//     return undefined;
// }
  
// console.log(findElement([1, 2, 3, 4], num => num % 2 === 0));

////////////////////////////////////////////////////////////////////////////////////////////////
// Basic Algorithm Scripting: Boo who
// https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/basic-algorithm-scripting/boo-who
// Check if a value is classified as a boolean primitive. Return true or false.

// Boolean primitives are true and false.

// const booWho = bool => bool === true || bool === false ? true : false;
  
// console.log(booWho(null));

////////////////////////////////////////////////////////////////////////////////////////////////
// Basic Algorithm Scripting: Title Case a Sentence
// Return the provided string with the first letter of each word capitalized. Make sure the rest of the word is in lower case.

// For the purpose of this exercise, you should also capitalize connecting words like "the" and "of".

// https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/basic-algorithm-scripting/title-case-a-sentence

// const titleCase = str => {
//     let result = '';
//     let splitStr = str.toLowerCase().split(' ');
//     for (let i = 0; i < splitStr.length; i++) {
//         let upper = splitStr[i].slice(0,1).toUpperCase();
//         let theRest = splitStr[i].slice(1);
//         let answer = upper.concat(theRest);
//         result += answer + ' ';
//     }
//     return result.slice(0, result.length - 1);
// }
  
// console.log(titleCase("I'm a little tea pot"));
// console.log(titleCase("sHoRt AnD sToUt"));
// console.log(titleCase("HERE IS MY HANDLE HERE IS MY SPOUT"));

////////////////////////////////////////////////////////////////////////////////////////////////
// Basic Algorithm Scripting: Slice and Splice
// https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/basic-algorithm-scripting/slice-and-splice

// You are given two arrays and an index.

// Copy each element of the first array into the second array, in order.

// Begin inserting elements at index n of the second array.

// Return the resulting array. The input arrays should remain the same after the function runs.

// function frankenSplice(arr1, arr2, n) {
//     const myArr1 = [...arr1];
//     const myArr2 = [...arr2];
//     myArr2.splice(n, 0, ...myArr1)
//     return myArr2;
// }
  
// console.log(frankenSplice([1, 2, 3], [4, 5], 1));    // [4, 1, 2, 3, 5]
// console.log(frankenSplice([1, 2], ["a", "b"], 1));   // ["a", 1, 2, "b"]
// console.log(frankenSplice(["claw", "tentacle"], ["head", "shoulders", "knees", "toes"], 2));    // ["head", "shoulders", "claw", "tentacle", "knees", "toes"]
////////////////////////////////////////////////////////////////////////////////////////////////
// Basic Algorithm Scripting: Falsy Bouncer
// https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/basic-algorithm-scripting/falsy-bouncer

// Remove all falsy values from an array.

// Falsy values in JavaScript are false, null, 0, "", undefined, and NaN.

// Hint: Try converting each value to a Boolean.

// function bouncer(arr) {
//     const answerArr = [];
//     arr.forEach((item) => {
//         if (!!item) answerArr.push(item);
//     });
//     return answerArr;
// }
  
// console.log(bouncer([7, "ate", "", false, 9])); // [7, "ate", 9]
// console.log(bouncer([null, NaN, 1, 2, undefined])); // [1, 2]

////////////////////////////////////////////////////////////////////////////////////////////////
// Basic Algorithm Scripting: Where do I Belong
// https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/basic-algorithm-scripting/where-do-i-belong
// Return the lowest index at which a value (second argument) should be inserted into an array (first argument) once it has been sorted. The returned value should be a number.

// For example, getIndexToIns([1,2,3,4], 1.5) should return 1 because it is greater than 1 (index 0), but less than 2 (index 1).

// Likewise, getIndexToIns([20,3,5], 19) should return 2 because once the array has been sorted it will look like [3,5,20] and 19 is less than 20 (index 2) and greater than 5 (index 1).

// function getIndexToIns(arr, num) {
//     if (arr.length === 0) return 0;
//     let sorted = arr.sort((a, b) =>  a - b);
//     for (let i = 0; i < sorted.length; i++) {
//         if (num === sorted[i]) return i;
//         if (num > sorted[i] && num < sorted[i + 1]) return i + 1;
//         if (num > sorted[sorted.length - 1]) return sorted.length;
//     }
// }

// console.log(getIndexToIns([3, 10, 5], 3));  // 0
// console.log(getIndexToIns([2, 5, 10], 15)); // 3
// console.log(getIndexToIns([1,2,3,4], 1.5));   // 1
// console.log(getIndexToIns([20,3,5], 19));   // 2
// console.log(getIndexToIns([40, 60], 50));   // 1
// console.log(getIndexToIns([10, 20, 30, 40, 50], 30));   // 2
// console.log(getIndexToIns([], 1));  // 0

////////////////////////////////////////////////////////////////////////////////////////////////
// Basic Algorithm Scripting: Mutations
// https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/basic-algorithm-scripting/mutations

// Return true if the string in the first element of the array contains all of the letters of the string in the second element of the array.

// For example, ["hello", "Hello"], should return true because all of the letters in the second string are present in the first, ignoring case.

// The arguments ["hello", "hey"] should return false because the string "hello" does not contain a "y".

// Lastly, ["Alien", "line"], should return true because all of the letters in "line" are present in "Alien".

// function mutation(arr) {
//     const splitStr1 = arr[0].toLowerCase().split('');
//     const splitStr2 = arr[1].toLowerCase().split('');

//     for (let i = 0; i < splitStr2.length; i++) {
//         if (splitStr1.includes(splitStr2[i]) === false) return false;
//     }
//     return true;
// }

// console.log(mutation(["floor", "for"]));    // true
// console.log(mutation(["Alien", "line"]));    // true
// console.log(mutation(["hello", "Hello"]));  // true
// console.log(mutation(["hello", "hey"]));    // false
// console.log(mutation(["hello", "neo"]));    // false

////////////////////////////////////////////////////////////////////////////////////////////////
// Basic Algorithm Scripting: Chunky Monkey
// https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/basic-algorithm-scripting/chunky-monkey
// Write a function that splits an array (first argument) into groups the length of size (second argument) and returns them as a two-dimensional array.

function chunkArrayInGroups(arr, size) {
    const answerArr = [];
    let newArr = [];

    mainLoop: for (let i = 0; i < arr.length; i++) {
        newArr.push(arr[i]);
        // once the array hits size, push it to answer
        // then reset it to blank
        if (newArr.length === size) {
            answerArr.push(newArr);
            newArr = [];
        }
    }
    // if the final array isn't full it still needs to be push
    // but if it's empty because the main array fits the size evenly, don't push it
    if (newArr.length !== 0) {
        answerArr.push(newArr);
    }
    return answerArr;
}
  
// console.log(chunkArrayInGroups(["a", "b", "c", "d"], 2));   // [["a", "b"], ["c", "d"]]
// console.log(chunkArrayInGroups([0, 1, 2, 3, 4, 5], 3)); //  [[0, 1, 2], [3, 4, 5]].
// console.log(chunkArrayInGroups([0, 1, 2, 3, 4, 5], 2)); //  [[0, 1], [2, 3], [4, 5]].
// console.log(chunkArrayInGroups([0, 1, 2, 3, 4, 5], 4)); //  [[0, 1, 2, 3], [4, 5]].
// console.log(chunkArrayInGroups([0, 1, 2, 3, 4, 5, 6], 3));  //  [[0, 1, 2], [3, 4, 5], [6]].
// console.log(chunkArrayInGroups([0, 1, 2, 3, 4, 5, 6, 7, 8], 4));    //  [[0, 1, 2, 3], [4, 5, 6, 7], [8]].
// console.log(chunkArrayInGroups([0, 1, 2, 3, 4, 5, 6, 7, 8], 2));    //  [[0, 1], [2, 3], [4, 5], [6, 7], [8]].