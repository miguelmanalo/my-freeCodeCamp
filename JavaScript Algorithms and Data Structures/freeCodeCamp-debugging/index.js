////////////////////////////////////////////////////////////////////////////////////////////////
// Debugging: Catch Mixed Usage of Single and Double Quotes
// https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/debugging/catch-mixed-usage-of-single-and-double-quotes

// // These are correct:
// const grouchoContraction = "I've had a perfectly wonderful evening, but this wasn't it.";
// const quoteInString = "Groucho Marx once said 'Quote me as saying I was mis-quoted.'";
// // This is incorrect:
// const uhOhGroucho = 'I've had a perfectly wonderful evening, but this wasn't it.';

// Correct use of same quotes:
// const allSameQuotes = 'I\'ve had a perfectly wonderful evening, but this wasn\'t it.';

// Fix the string so it either uses different quotes for the href value, or escape the existing ones. Keep the double quote marks around the entire string.

// let innerHtml = "<p>Click here to <a href=\"#Home\">return home</a></p>";
// console.log(innerHtml);

////////////////////////////////////////////////////////////////////////////////////////////////
// Debugging: Catch Use of Assignment Operator Instead of Equality Operator
// https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/debugging/catch-use-of-assignment-operator-instead-of-equality-operator

// let x = 1;
// let y = 2;
// if (x = y) {
//   // this code block will run for any value of y (unless y were originally set as a falsy)
// } else {
//   // this code block is what should run (but won't) in this example
// }

// Fix the condition so the program runs the right branch, and the appropriate value is assigned to result.

// let x = 7;
// let y = 9;
// let result = "to come";

// if(x === y) {
//   result = "Equal!";
// } else {
//   result = "Not equal!";
// }

// console.log(result);

////////////////////////////////////////////////////////////////////////////////////////////////
// Debugging: Catch Missing Open and Closing Parenthesis After a Function Call
// https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/debugging/catch-missing-open-and-closing-parenthesis-after-a-function-call

// function myFunction() {
//     return "You rock!";
//   }
//   let varOne = myFunction; // set to equal a function
//   let varTwo = myFunction(); // set to equal the string "You rock!"
//   console.log(varOne()); // You rock!
  
// Fix the code so the variable result is set to the value returned from calling the function getNine.

// function getNine() {
//     let x = 6;
//     let y = 3;
//     return x + y;
//   }
  
//   let result = getNine();
//   console.log(result);
  
  ////////////////////////////////////////////////////////////////////////////////////////////////
//   Debugging: Catch Arguments Passed in the Wrong Order When Calling a Function
//   https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/debugging/catch-arguments-passed-in-the-wrong-order-when-calling-a-function

//   The function raiseToPower raises a base to an exponent. Unfortunately, it's not called properly - fix the code so the value of power is the expected 8.

// function raiseToPower(b, e) {
//     return Math.pow(b, e);
//   }

// let base = 2;
// let exp = 3;
// let power = raiseToPower(base, exp);
// console.log(power);

////////////////////////////////////////////////////////////////////////////////////////////////
// Debugging: Catch Off By One Errors When Using Indexing
// https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/debugging/catch-off-by-one-errors-when-using-indexing

// let alphabet = "abcdefghijklmnopqrstuvwxyz";
// let len = alphabet.length;
// for (let i = 0; i <= len; i++) {
//   // loops one too many times at the end
//   console.log(alphabet[i]);
// }
// for (let j = 1; j < len; j++) {
//   // loops one too few times and misses the first character at index 0
//   console.log(alphabet[j]);
// }
// for (let k = 0; k < len; k++) {
//   // Goldilocks approves - this is just right
//   console.log(alphabet[k]);
// }


// Fix the two indexing errors in the following function so all the numbers 1 through 5 are printed to the console.

function countToFive() {
    let firstFive = "12345";
    let len = firstFive.length;
    // Only change code below this line
    for (let i = 0; i < len; i++) {
    // Only change code above this line
      console.log(firstFive[i]);
    }
  }
  
countToFive();

////////////////////////////////////////////////////////////////////////////////////////////////
// Debugging: Use Caution When Reinitializing Variables Inside a Loop
// https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/debugging/use-caution-when-reinitializing-variables-inside-a-loop

// The following function is supposed to create a two-dimensional array with m rows and n columns of zeroes. Unfortunately, it's not producing the expected output because the row variable isn't being reinitialized (set back to an empty array) in the outer loop. Fix the code so it returns a correct 3x2 array of zeroes, which looks like [[0, 0], [0, 0], [0, 0]].

function zeroArray(m, n) {
    // Creates a 2-D array with m rows and n columns of zeroes
    let newArray = [];
    
    for (let i = 0; i < m; i++) {
      // Adds the m-th row into newArray
      let row = [];
      for (let j = 0; j < n; j++) {
        // Pushes n zeroes into the current row to create the columns
        row.push(0);
      }
      // Pushes the current row, which now has n zeroes in it, to the array
      newArray.push(row);
    }
    return newArray;
  }
  
let matrix = zeroArray(3, 2);
console.log(matrix);
  
////////////////////////////////////////////////////////////////////////////////////////////////
// Debugging: Prevent Infinite Loops with a Valid Terminal Condition
// https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/debugging/prevent-infinite-loops-with-a-valid-terminal-condition

// function loopy() {
//     while(true) {
//       console.log("Hello, world!");
//     }
//   }

// The myFunc() function contains an infinite loop because the terminal condition i != 4 will never evaluate to false (and break the looping) - i will increment by 2 each pass, and jump right over 4 since i is odd to start. Fix the comparison operator in the terminal condition so the loop only runs for i less than or equal to 4.

function myFunc() {
    for (let i = 1; i <= 4; i += 2) {
      console.log("Still going!");
    }
}
  
myFunc();
////////////////////////////////////////////////////////////////////////////////////////////////
