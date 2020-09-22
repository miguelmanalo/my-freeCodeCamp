/* eslint-disable max-len */
/// ////////////////////////////////////////////////////////////////////////////
// Sum All Numbers in a Range
// https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/intermediate-algorithm-scripting/sum-all-numbers-in-a-range
// We'll pass you an array of two numbers. Return the sum of those two numbers plus the sum of all the numbers between them. The lowest number will not always come first.

// For example, sumAll([4,1]) should return 10 because sum of all the numbers between 1 and 4 (both inclusive) is 10.

function sumAll(arr) {
  const numArr = [];
  if (arr[0] < arr[1]) {
    for (let i = arr[0]; i <= arr[1]; i += 1) {
      numArr.push(i);
    }
  } else {
    for (let i = arr[1]; i <= arr[0]; i += 1) {
      numArr.push(i);
    }
  }
  return numArr.reduce((acc, cv) => acc + cv, 0);
}

// console.log(sumAll([1, 4]));    // 10
// console.log(sumAll([10, 5]));   // 45

/// ////////////////////////////////////////////////////////////////////////////
// Diff Two Arrays
// https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/intermediate-algorithm-scripting/diff-two-arrays
// Compare two arrays and return a new array with any items only found in one of the two given arrays, but not both. In other words, return the symmetric difference of the two arrays.

// Note: You can return the array with its elements in any order.

const diffArray = (arr1, arr2) => {
  const newArr = [];

  // loop through arr1, see if anything in it is in arr2. If it's not in arr2, push it to newArr
  for (let i = 0; i < arr1.length; i += 1) {
    if (!arr2.includes(arr1[i])) newArr.push(arr1[i]);
  }

  // loop through arr2, see if anything in it is in arr1. If it's not in arr1, push it to newArr
  // doing arr1 first maintains the order of items as presented as arguments when time comes to return the newArr
  for (let k = 0; k < arr2.length; k += 1) {
    if (!arr1.includes(arr2[k])) newArr.push(arr2[k]);
  }
  return newArr;
};

// console.log(diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5]));  // 4
// console.log(diffArray(["diorite", "andesite", "grass", "dirt", "pink wool", "dead shrub"], ["diorite", "andesite", "grass", "dirt", "dead shrub"]));    // ["pink wool"]
// console.log(diffArray(["andesite", "grass", "dirt", "pink wool", "dead shrub"], ["diorite", "andesite", "grass", "dirt", "dead shrub"]));    // ["diorite", "pink wool"]
// console.log(diffArray([1, "calf", 3, "piglet"], [7, "filly"]));    // [1, "calf", 3, "piglet", 7, "filly"]

/// ////////////////////////////////////////////////////////////////////////////
// Seek and Destroy
// https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/intermediate-algorithm-scripting/seek-and-destroy
// You will be provided with an initial array (the first argument in the destroyer function), followed by one or more arguments. Remove all elements from the initial array that are of the same value as these arguments.

// Note: You have to use the arguments object.

// arguments is an Array-like object accessible inside functions that contains the values of the arguments passed to that function.

function destroyer(arr) {
  const argumentZeroCopy = arguments[0].slice();
  const otherArgs = [];

  // put all the non-first arguments into an array
  for (let i = 1; i < arguments.length; i += 1) {
    otherArgs.push(arguments[i]);
  }

  // filter out what's not in the otherArgs array
  return argumentZeroCopy.filter((item) => !otherArgs.includes(item));
}

// console.log(destroyer([1, 2, 3, 1, 2, 3], 2, 3));   // [1, 1]
// console.log(destroyer(["possum", "trollo", 12, "safari", "hotdog", 92, 65, "grandma", "bugati", "trojan", "yacht"], "yacht", "possum", "trollo", "safari", "hotdog", "grandma", "bugati", "trojan"));   // [12,92,65]
// console.log(destroyer([2, 3, 2, 3], 2, 3));    // []

/// ////////////////////////////////////////////////////////////////////////////
// Wherefore art thou
// https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/intermediate-algorithm-scripting/wherefore-art-thou
// Make a function that looks through an array of objects (first argument) and returns an array of all objects that have matching name and value pairs (second argument). Each name and value pair of the source object has to be present in the object from the collection if it is to be included in the returned array.

// For example, if the first argument is [{ first: "Romeo", last: "Montague" }, { first: "Mercutio", last: null }, { first: "Tybalt", last: "Capulet" }], and the second argument is { last: "Capulet" }, then you must return the third object from the array (the first argument), because it contains the name and its value, that was passed on as the second argument.

function whatIsInAName(collection, source) {
  const arr = [];
  // Only change code below this line
  // make source property labels into an array so i can iterate them
  const sourceArr = Object.keys(source);

  // if an object every property label from sourceArr, return it, otherwise a non-match is made undefined
  const saveMatchedProps = (arr) => {
    let numMatches = 0;
    for (let s = 0; s < sourceArr.length; s += 1) {
      if (arr.includes(sourceArr[s])) numMatches += 1;
    }
    if (numMatches === sourceArr.length) return arr;
  };

  // feed each bit of collection through my filter and only have the objects with all matching property names
  const filterObjs = (arr) => {
    const filteredMatches = [];
    for (let i = 0; i < arr.length; i += 1) {
      // put the properties of each object temporarily into an array so i can iterate through it and use array methods
      const tempCollectArr = Object.keys(arr[i]);
      const matches = saveMatchedProps(tempCollectArr);
      if (matches !== undefined) filteredMatches.push(arr[i]);
    }
    return filteredMatches;
  };

  const getTheAnswer = (filteredArr) => {
    // take in only the filtered array
    for (let i = 0; i < filteredArr.length; i += 1) {
      // see if the object values exactly match the source values in number
      let matchingValueCount = 0;
      // make an array of the properties of the filtered object
      const collectionKeys = Object.keys(filteredArr[i]);
      // iterate through the properties of the filtered object
      for (let k = 0; k < collectionKeys.length; k += 1) {
        // if the values in the filtered obj and source match, increment matchingValueCount
        if (filteredArr[i][collectionKeys[k]] === source[collectionKeys[k]]) {
          matchingValueCount += 1;
          // if matchingValueCount reaches the length of sourceArr that means that obj has all the matching pieces so push it
          if (matchingValueCount === sourceArr.length) arr.push(filteredArr[i]);
        }
      }
    }
  };

  getTheAnswer(filterObjs(collection), source);

  // Only change code above this line
  return arr;
}

// console.log(whatIsInAName([{ first: "Romeo", last: "Montague" }, { first: "Mercutio", last: null }, { first: "Tybalt", last: "Capulet" }], { last: "Capulet" })); // [{ first: "Tybalt", last: "Capulet" }]
// console.log(whatIsInAName([{"a": 1, "b": 2, "c": 3}], {"a": 1, "b": 9999, "c": 3})); // []
// console.log(whatIsInAName([{ "apple": 1, "bat": 2 }, { "apple": 1 }, { "apple": 1, "bat": 2, "cookie": 2 }, { "bat":2 }], { "apple": 1, "bat": 2 }));   // [{ "apple": 1, "bat": 2 }, { "apple": 1, "bat": 2, "cookie":2 }]
// console.log(whatIsInAName([{ "apple": 1 }, { "apple": 1 }, { "apple": 1, "bat": 2 }], { "apple": 1 }));     // [{ "apple": 1 }, { "apple": 1 }, { "apple": 1, "bat": 2 }]

// const courses = {
//     java: 10,
//     javascript: 55,
//     nodejs: 5,
//     php: 15
// };

// // convert object to key's array
// const keys = Object.keys(courses);

// // print all keys
// console.log(keys);
// // [ 'java', 'javascript', 'nodejs', 'php' ]

// // iterate over object
// keys.forEach((key, index) => {
//     console.log(`${key}: ${courses[key]}`);
// });

// // java: 10
// // javascript: 55
// // nodejs: 5
// // php: 15

/// ////////////////////////////////////////////////////////////////////////////
// Spinal Tap Case
// freecodecamp.org/learn/javascript-algorithms-and-data-structures/intermediate-algorithm-scripting/spinal-tap-case
// Convert a string to spinal case. Spinal case is all-lowercase-words-joined-by-dashes.

const spinalCase = (str) => {
  // make the string an array so i can use array methods and can mutate where i need
  const strArrCopy = str.split('');
  // this regex looks for anything that isn't a-z0-9
  const regex1 = /(\W)/gi;
  // this regex looks for any lowercase a thru z
  const lowerCaseCheckerRegex = /[a-z]/;
  // find a way to find the word separators
  // declare a new variable to hold the eventual answer
  let answer;
  // iterate through the string
  for (let i = 0; i < strArrCopy.length; i += 1) {
    // to deal with capital letters immediately preceded by a lowercase letter because i need a way to separate out whole words
    const capitalChecker = strArrCopy[i].toUpperCase(); // to see if a letter is uppercase
    // if the letter found is uppercase and it's immediately preceding letter is lowercase and it's not a capital letter right at the beginning of the array so the preceding value is undefined
    if (
      strArrCopy[i] === capitalChecker &&
      lowerCaseCheckerRegex.test(strArrCopy[i - 1]) === true &&
      strArrCopy[i - 1] !== undefined
    ) {
      // if I've instead found not an uppercase letter but an underscore, space, or dash, delete that character and put in a space instead using splice
      if (
        strArrCopy[i] === '_' ||
        strArrCopy[i] === ' ' ||
        strArrCopy[i] === '-'
      )
        strArrCopy.splice(i, 1, ' ');
      else {
        // if it is indeed a capital letter immediately preceded by a lowercase letter, don't delete anything just put a space between the lowercase letter and the uppercase letter
        strArrCopy.splice(i, 0, ' ');
      }
    }
    // if there's now an errant space at the beginning of the array, shift it out
    if (strArrCopy[0] === ' ') strArrCopy.shift();
    // join the fixed, modified array back into a string, make everything lowercase, and replace everything that isn't a-z0-9 with a dash
    answer = strArrCopy.join('').toLowerCase().replace(regex1, '-');
  }
  return answer;
};

// console.log(spinalCase('This Is Spinal Tap'));  // "this-is-spinal-tap"
// console.log(spinalCase('thisIsSpinalTap'));  // "this-is-spinal-tap"
// console.log(spinalCase("The_Andy_Griffith_Show"));  // "the-andy-griffith-show"
// console.log(spinalCase("Teletubbies say Eh-oh"));  // "teletubbies-say-eh-oh"
// console.log(spinalCase("AllThe-small Things"));  // "all-the-small-things"

/// ////////////////////////////////////////////////////////////////////////////
// Pig Latin
// https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/intermediate-algorithm-scripting/pig-latin
// Pig Latin is a way of altering English Words. The rules are as follows:

// - If a word begins with a consonant, take the first consonant or consonant cluster, move it to the end of the word, and add "ay" to it.

// - If a word begins with a vowel, just add "way" at the end.

// Translate the provided string to Pig Latin. Input strings are guaranteed to be English words in all lowercase.

const translatePigLatin = (str) => {
  // see if the word has vowels at all
  const regexVowels = /[aeiou]/gi;
  if (regexVowels.test(str)) {
    // if a word does have vowels turn string into an array
    const arrStr = str.split('');
    // if the vowel is the first letter, take the str arg and concat 'way' to the end and return it
    if (
      arrStr[0] === 'a' ||
      arrStr[0] === 'e' ||
      arrStr[0] === 'i' ||
      arrStr[0] === 'o' ||
      arrStr[0] === 'u'
    ) {
      return str.concat('way');
    }
    // if the vowel isn't the first letter, iterate through the array and find the first vowel
    // start i at 1 in case the first letter is a vowel, since i explicitly check [0] for a vowel

    for (let i = 1, len = arrStr.length; i < len; i += 1) {
      if (
        arrStr[i] === 'a' ||
        arrStr[i] === 'e' ||
        arrStr[i] === 'i' ||
        arrStr[i] === 'o' ||
        arrStr[i] === 'u'
      ) {
        // if the vowel is anywhere but the first letter slice away everything before the vowel and store it somewhere and then slice away the vowel and everything after it
        // stick together new First Half plus new Second Half plus 'ay' at the end return
        return arrStr.slice(i).concat(arrStr.slice(0, i).concat('ay')).join('');
      }
    }
  }
  // if a word has no vowels concat 'ay' to the end of the str arg and return it
  else {
    return str.concat('ay');
  }
};

// console.log(translatePigLatin("eight"));    // "eightway"
// console.log(translatePigLatin("paragraphs"));    // "aragraphspay"
// console.log(translatePigLatin("glove"));    // "oveglay"
// console.log(translatePigLatin("california"));   // "aliforniacay"
// console.log(translatePigLatin("rhythm"));   // "rhythmay"
// console.log(translatePigLatin("schwartz")); // "artzschway"

/// ////////////////////////////////////////////////////////////////////////////
// Search and Replace
// https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/intermediate-algorithm-scripting/search-and-replace
// Perform a search and replace on the sentence using the arguments provided and return the new sentence.

// First argument is the sentence to perform the search and replace on.

// Second argument is the word that you will be replacing (before).

// Third argument is what you will be replacing the second argument with (after)

// Note
// Preserve the case of the first character in the original word when you are replacing it. For example if you mean to replace the word "Book" with the word "dog", it should be replaced as "Dog"

function myReplace(str, before, after) {
  // make a copy of the given string using slice
  // turn copy into an array of separate words
  const strArr = str.slice().split(' ');
  const capitalLetters = /[A-Z]/g;
  const beforeRegex = new RegExp(before, 'i');
  // iterate thru the array looking to see if the before is a match
  for (let i = 0, len = strArr.length; i < len; i += 1) {
    if (beforeRegex.test(strArr[i])) {
      // if it is a match, check to see if the before word was originally capitalized and if it was, capitalize the after word before continuing
      if (capitalLetters.test(strArr[i][0])) {
        const afterSplit = after.split('');
        afterSplit[0] = afterSplit[0].toUpperCase();
        const afterUpperCase = afterSplit.join('');
        // splice out the before word and insert the after word
        strArr.splice(i, 1, afterUpperCase);
        // join the array back together with spaces between the words and return it
        return strArr.join(' ');
      }
      // if the original wasn't capitalized, splice out the before word and insert the after word made all lowercase
      strArr.splice(i, 1, after.toLowerCase());
      // join the array back together with spaces between the words and return it
      return strArr.join(' ');
    }
  }
}

// console.log(myReplace("A quick brown fox jumped over the lazy dog", "jumped", "leaped"));   // A quick brown fox leaped over the lazy dog
// console.log(myReplace("Let us go to the store", "store", "mall"));  // should return "Let us go to the mall".
// console.log(myReplace("He is Sleeping on the couch", "Sleeping", "sitting"));  // should return "He is Sitting on the couch".
// console.log(myReplace("I think we should look up there", "up", "Down"));  // should return "I think we should look down there".
// console.log(myReplace("This has a spellngi error", "spellngi", "spelling"));  // should return "This has a spelling error".
// console.log(myReplace("His name is Tom", "Tom", "john"));  // should return "His name is John".
// console.log(myReplace("Let us get back to more Coding", "Coding", "algorithms"));  // should return "Let us get back to more Algorithms".

/// ////////////////////////////////////////////////////////////////////////////
// DNA Pairing
// https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/intermediate-algorithm-scripting/dna-pairing
// The DNA strand is missing the pairing element. Take each character, get its pair, and return the results as a 2d array.

// Base pairs are a pair of AT and CG. Match the missing element to the provided character.

// Return the provided character as the first element in each array.

// For example, for the input GCG, return [["G", "C"], ["C","G"],["G", "C"]]

// The character and its pair are paired up in an array, and all the arrays are grouped into one encapsulating array.

const pairElement = (str) => {
  // declare a new array to put the answer in thats the same length of the given str
  const answerArr = [];
  // fill an object with the proper pairings
  const dnaPairs = {
    G: ['G', 'C'],
    C: ['C', 'G'],
    A: ['A', 'T'],
    T: ['T', 'A'],
  };
  // iterate through the given string. On each char check the object to see what is the proper pairing
  for (let i = 0, len = str.length; i < len; i += 1) {
    // iterate through the dna pairing object to find the match
    const dnaKeys1 = Object.keys(dnaPairs);
    for (let j = 0, lenJ = dnaKeys1.length; j < lenJ; j += 1) {
      if (str[i] === dnaKeys1[j]) answerArr.push(dnaPairs[dnaKeys1[j]]);
    }
  }
  // return the newly filled array
  return answerArr;
};

// console.log(pairElement('GCG')); // [["G", "C"], ["C", "G"], ["G", "C"]]
// console.log(pairElement('ATCGA')); // [["A","T"],["T","A"],["C","G"],["G","C"],["A","T"]]
// console.log(pairElement('TTGAG')); // [["T","A"],["T","A"],["G","C"],["A","T"],["G","C"]]
// console.log(pairElement('CTCTA')); // [["C","G"],["T","A"],["C","G"],["T","A"],["A","T"]]
/// ////////////////////////////////////////////////////////////////////////////
// Missing letters
// https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/intermediate-algorithm-scripting/missing-letters
// Find the missing letter in the passed letter range and return it.

// If all letters are present in the range, return undefined.

const fearNotLetter = (str) => {
  // make an object with every letter in the alphabet and the value for each letter is the letter that comes after it
  const alphaAfter = {
    a: 'b',
    b: 'c',
    c: 'd',
    d: 'e',
    e: 'f',
    f: 'g',
    g: 'h',
    h: 'i',
    i: 'j',
    j: 'k',
    k: 'l',
    l: 'm',
    m: 'n',
    n: 'o',
    o: 'p',
    p: 'q',
    q: 'r',
    r: 's',
    s: 't',
    t: 'u',
    u: 'v',
    v: 'w',
    w: 'x',
    x: 'y',
    y: 'z',
    z: undefined, // z will be undefined
  };
  // iterate through the given string and check it against the object to see if the following letter is the correct one
  for (let i = 0, len = str.length; i < len; i += 1) {
    // if it is found that a letter is missing, return the value for that key value pair
    if (str[i + 1] !== alphaAfter[str[i]]) return alphaAfter[str[i]];
  }
  return undefined;
};

// console.log(fearNotLetter("abce")); // 'd'
// console.log(fearNotLetter("abcdefghjklmno"));   // 'i'
// console.log(fearNotLetter("stvwx"));    // 'u'
// console.log(fearNotLetter("bcdf")); // 'e'
// console.log(fearNotLetter("abcdefghijklmnopqrstuvwxyz"));   // undefined

/// ////////////////////////////////////////////////////////////////////////////
// Sorted Union
// https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/intermediate-algorithm-scripting/sorted-union
// Write a function that takes two or more arrays and returns a new array of unique values in the order of the original provided arrays.

// In other words, all values present from all arrays should be included in their original order, but with no duplicates in the final array.

// The unique numbers should be sorted by their original order, but the final array should not be sorted in numerical order.

// Check the assertion tests for examples.

function uniteUnique(arr) {
  // declare a blank answer array
  const answerArr = [];
  // copy all the values in the first array of the argument to the answer array
  answerArr.push(...arguments[0]);
  // use two for loops
  // one to traverse the remaining arrays
  for (let i = 1, len = arguments.length; i < len; i += 1) {
    // the other to traverse inside the arrays
    for (let j = 0, lenJ = arguments[i].length; j < lenJ; j += 1) {
      // for each value inside the array use the includes method on the answer array to see if the value is already in there, if it isn't in there, push it in to the answer array
      if (!answerArr.includes(arguments[i][j])) answerArr.push(arguments[i][j]);
    }
  }
  return answerArr;
}

// console.log(uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1]));  // [1, 3, 2, 5, 4]
// console.log(uniteUnique([1, 2, 3], [5, 2, 1])); // [1, 2, 3, 5]
// console.log(uniteUnique([1, 2, 3], [5, 2, 1, 4], [2, 1], [6, 7, 8])); // [1, 2, 3, 5, 4, 6, 7, 8]

/// ////////////////////////////////////////////////////////////////////////////
// Convert HTML Entities
// https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/intermediate-algorithm-scripting/convert-html-entities
// Convert the characters &, <, >, " (double quote), and ' (apostrophe), in a string to their corresponding HTML entities.

function convertHTML(str) {
  // create an object with the key value pairs being the HTML versions of the symbols
  const htmlSymbols = {
    '&': '&amp;',
    '<': '&lt;',
    '>': '&gt;',
    '"': '&quot;',
    "'": '&apos;',
  };
  const justSymbols = Object.keys(htmlSymbols);
  // convert the given string into an array and split it into individual letters
  const splitStr = str.split('');
  // iterate thru the array and when it finds a value to be replaced, splice out the old value and put in the replacement
  for (let i = 0, len = splitStr.length; i < len; i += 1) {
    if (justSymbols.includes(splitStr[i]))
      splitStr.splice(i, 1, htmlSymbols[splitStr[i]]);
  }
  // join the mutated array back together and return it
  return splitStr.join('');
}

// console.log(convertHTML("Dolce & Gabbana"));  // "Dolce &amp; Gabbana"
// console.log(convertHTML("Hamburgers < Pizza < Tacos"));  // "Hamburgers &lt; Pizza &lt; Tacos"
// console.log(convertHTML("Sixty > twelve"));  // "Sixty &gt; twelve"
// console.log(convertHTML('Stuff in "quotation marks"'));  // "Stuff in &quot;quotation marks&quot;"
// console.log(convertHTML("Schindler's List"));  // "Schindler&apos;s List"
// console.log(convertHTML("<>"));  // "&lt;&gt;"
// console.log(convertHTML("abc"));  // "abc"

/// ////////////////////////////////////////////////////////////////////////////
// Sum All Odd Fibonacci Numbers
// https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/intermediate-algorithm-scripting/sum-all-odd-fibonacci-numbers

// Given a positive integer num, return the sum of all odd Fibonacci numbers that are less than or equal to num.

// The first two numbers in the Fibonacci sequence are 1 and 1. Every additional number in the sequence is the sum of the two previous numbers. The first six numbers of the Fibonacci sequence are 1, 1, 2, 3, 5 and 8.

// For example, sumFibs(10) should return 10 because all odd Fibonacci numbers less than or equal to 10 are 1, 1, 3, and 5.

function sumFibs(num) {
  // create a function that just finds fibonacci numbers
  // setup a cache to keep all the calculated numbers in
  const cache = [0, 1, 1];
  // this will get summed and returned
  let fibSum = 0;
  // looked this function up: an iterative, memoized fib func
  // https://medium.com/javascript-in-plain-english/three-ways-to-write-a-fibonacci-function-in-javascript-a711db62788e
  function iterativeFib(index = 1) {
    // if the value has already been cached, just return it
    if (cache[index]) return cache[index];
    // if the index is 0, 1, or 2 the fib val is 1
    if (index < 3) return 1;
    // start at the end of the cache we put in
    for (let i = 2; i < index; i += 1) {
      // calculate the fibbonacci to add to the cache
      cache.push(cache[cache.length - 1] + cache[cache.length - 2]);
    }
    return cache[index];
  }

  // fill the cache with the given arg
  iterativeFib(num);
  // iterate through the cache
  for (let i = 0; i <= num; i += 1) {
    // if the fib number is odd and its value is less than num
    if (cache[i] % 2 === 1 && cache[i] <= num) {
      // add it to fibSum
      fibSum += cache[i];
    }
  }
  return fibSum;
}

// console.log(sumFibs(1)); // 1
// console.log(sumFibs(10)); // 10
// console.log(sumFibs(1000)); // 1785
// console.log(sumFibs(4000000)); // 4613732
// console.log(sumFibs(4)); // 5
// console.log(sumFibs(75024)); // 60696
// console.log(sumFibs(75025)); // 135721

/// //////////////////////////////////////////////////////////////////////
// Sum All Primes
// https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/intermediate-algorithm-scripting/sum-all-primes

// A prime number is a whole number greater than 1 with exactly two divisors: 1 and itself. For example, 2 is a prime number because it is only divisible by 1 and 2. In contrast, 4 is not prime since it is divisible by 1, 2 and 4.

// Rewrite sumPrimes so it returns the sum of all prime numbers that are less than or equal to num.

function sumPrimes(num) {
  return num;
}

console.log(sumPrimes(10)); // should return 17
console.log(sumPrimes(977)); // should return 73156
