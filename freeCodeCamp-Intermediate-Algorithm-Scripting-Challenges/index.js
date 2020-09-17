///////////////////////////////////////////////////////////////////////////////
// Sum All Numbers in a Range
// https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/intermediate-algorithm-scripting/sum-all-numbers-in-a-range
// We'll pass you an array of two numbers. Return the sum of those two numbers plus the sum of all the numbers between them. The lowest number will not always come first.

// For example, sumAll([4,1]) should return 10 because sum of all the numbers between 1 and 4 (both inclusive) is 10.

// function sumAll(arr) {
//     const numArr = [];
//     if (arr[0] < arr[1]) {
//         for (let i = arr[0]; i <= arr[1]; i++) {
//             numArr.push(i);
//         }
//     } else {
//         for (let i = arr[1]; i <= arr[0]; i++) {
//             numArr.push(i);
//         }
//     }
//     return numArr.reduce((acc, cv) => acc + cv, 0);
// }
  
// console.log(sumAll([1, 4]));    // 10
// console.log(sumAll([10, 5]));   // 45

///////////////////////////////////////////////////////////////////////////////
// Diff Two Arrays
// https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/intermediate-algorithm-scripting/diff-two-arrays
// Compare two arrays and return a new array with any items only found in one of the two given arrays, but not both. In other words, return the symmetric difference of the two arrays.

// Note: You can return the array with its elements in any order.

// const diffArray = (arr1, arr2) => {
//     const newArr = [];

//     // loop through arr1, see if anything in it is in arr2. If it's not in arr2, push it to newArr
//     arr1Loop: for (let i = 0; i < arr1.length; i++) {
//         if (!arr2.includes(arr1[i])) newArr.push(arr1[i]);
//     }

//     // loop through arr2, see if anything in it is in arr1. If it's not in arr1, push it to newArr
//     // doing arr1 first maintains the order of items as presented as arguments when time comes to return the newArr
//     arr2Loop: for (let k = 0; k < arr2.length; k++) {
//         if (!arr1.includes(arr2[k])) newArr.push(arr2[k]);
//     }
//     return newArr;
// }
  
// console.log(diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5]));  // 4
// console.log(diffArray(["diorite", "andesite", "grass", "dirt", "pink wool", "dead shrub"], ["diorite", "andesite", "grass", "dirt", "dead shrub"]));    // ["pink wool"]
// console.log(diffArray(["andesite", "grass", "dirt", "pink wool", "dead shrub"], ["diorite", "andesite", "grass", "dirt", "dead shrub"]));    // ["diorite", "pink wool"]
// console.log(diffArray([1, "calf", 3, "piglet"], [7, "filly"]));    // [1, "calf", 3, "piglet", 7, "filly"]

///////////////////////////////////////////////////////////////////////////////
// Seek and Destroy
// https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/intermediate-algorithm-scripting/seek-and-destroy
// You will be provided with an initial array (the first argument in the destroyer function), followed by one or more arguments. Remove all elements from the initial array that are of the same value as these arguments.

// Note: You have to use the arguments object.

// arguments is an Array-like object accessible inside functions that contains the values of the arguments passed to that function.

// function func1(a, b, c) {
//     console.log(arguments[0]);
//     // expected output: 1
  
//     console.log(arguments[1]);
//     // expected output: 2
  
//     console.log(arguments[2]);
//     // expected output: 3
//   }
  
// console.log(func1(1, 2, 3));

// function destroyer(arr) {
//     const argumentZeroCopy = arguments[0].slice();
//     const otherArgs = [];

//     // put all the non-first arguments into an array
//     for (let i = 1; i < arguments.length; i++) {
//         otherArgs.push(arguments[i]);
//     }
    
//     // filter out what's not in the otherArgs array
//     return argumentZeroCopy.filter(item => !otherArgs.includes(item));
// }
  
// console.log(destroyer([1, 2, 3, 1, 2, 3], 2, 3));   // [1, 1]
// console.log(destroyer(["possum", "trollo", 12, "safari", "hotdog", 92, 65, "grandma", "bugati", "trojan", "yacht"], "yacht", "possum", "trollo", "safari", "hotdog", "grandma", "bugati", "trojan"));   // [12,92,65]
// console.log(destroyer([2, 3, 2, 3], 2, 3));    // []

///////////////////////////////////////////////////////////////////////////////
// Wherefore art thou
// https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/intermediate-algorithm-scripting/wherefore-art-thou
// Make a function that looks through an array of objects (first argument) and returns an array of all objects that have matching name and value pairs (second argument). Each name and value pair of the source object has to be present in the object from the collection if it is to be included in the returned array.

// For example, if the first argument is [{ first: "Romeo", last: "Montague" }, { first: "Mercutio", last: null }, { first: "Tybalt", last: "Capulet" }], and the second argument is { last: "Capulet" }, then you must return the third object from the array (the first argument), because it contains the name and its value, that was passed on as the second argument.

function whatIsInAName(collection, source) {
    var arr = [];
    // Only change code below this line
    // make source property labels into an array so i can iterate them
    const sourceArr = Object.keys(source);

    // if an object every property label from sourceArr, return it, otherwise a non-match is made undefined
    const saveMatchedProps = arr => {
        let numMatches = 0;
        for (let s = 0; s < sourceArr.length; s++) {
            if (arr.includes(sourceArr[s])) numMatches++;
        }
        if (numMatches === sourceArr.length) return arr;
    }
    
    // feed each bit of collection through my filter and only have the objects with all matching property names
    const filterObjs = arr => {
        const filteredMatches = [];
        for (let i = 0; i < arr.length; i++) {
            // put the properties of each object temporarily into an array so i can iterate through it and use array methods
            let tempCollectArr = Object.keys(arr[i]);
            let matches = saveMatchedProps(tempCollectArr);
            if (matches !== undefined) filteredMatches.push(arr[i]);
        }
        return filteredMatches;
    }
    
    const getTheAnswer = filteredArr => {
        // take in only the filtered array
        for (let i = 0; i < filteredArr.length; i++) {
            // see if the object values exactly match the source values in number
            let matchingValueCount = 0;
            // make an array of the properties of the filtered object
            let collectionKeys = Object.keys(filteredArr[i]);
            // iterate through the properties of the filtered object
            for (let k = 0; k < collectionKeys.length; k++) {
                // if the values in the filtered obj and source match, increment matchingValueCount
                if (filteredArr[i][collectionKeys[k]] === source[collectionKeys[k]]) {
                    matchingValueCount++;
                    // if matchingValueCount reaches the length of sourceArr that means that obj has all the matching pieces so push it
                    if (matchingValueCount === sourceArr.length) arr.push(filteredArr[i]);
                }
            }
        }
    }

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

///////////////////////////////////////////////////////////////////////////////
// Spinal Tap Case
// freecodecamp.org/learn/javascript-algorithms-and-data-structures/intermediate-algorithm-scripting/spinal-tap-case
// Convert a string to spinal case. Spinal case is all-lowercase-words-joined-by-dashes.

// const spinalCase = str => {
//     // make the string an array so i can use array methods and can mutate where i need
//     const strArrCopy = str.split('');
//     // this regex looks for anything that isn't a-z0-9
//     const regex1 = /(\W)/gi;
//     // this regex looks for any lowercase a thru z
//     const lowerCaseCheckerRegex = /[a-z]/;
//     // find a way to find the word separators
//     // declare a new variable to hold the eventual answer
//     let answer;
//     // iterate through the string
//         for (let i = 0; i < strArrCopy.length; i++) {
//             // to deal with capital letters immediately preceded by a lowercase letter because i need a way to separate out whole words
//             let capitalChecker = strArrCopy[i].toUpperCase(); // to see if a letter is uppercase
//             // if the letter found is uppercase and it's immediately preceding letter is lowercase and it's not a capital letter right at the beginning of the array so the preceding value is undefined
//             if ((strArrCopy[i] === capitalChecker) && (lowerCaseCheckerRegex.test(strArrCopy[i - 1]) === true) && strArrCopy[i - 1] !== undefined) {
//                 // if I've instead found not an uppercase letter but an underscore, space, or dash, delete that character and put in a space instead using splice
//                 if (strArrCopy[i] === '_' || strArrCopy[i] === ' ' || strArrCopy[i] === '-') strArrCopy.splice(i, 1, ' ');
//                 else {
//                     // if it is indeed a capital letter immediately preceded by a lowercase letter, don't delete anything just put a space between the lowercase letter and the uppercase letter
//                     strArrCopy.splice(i, 0, ' ')
//                 }
//             }
//             // if there's now an errant space at the beginning of the array, shift it out
//             if (strArrCopy[0] === ' ') strArrCopy.shift();
//             // join the fixed, modified array back into a string, make everything lowercase, and replace everything that isn't a-z0-9 with a dash
//             answer = strArrCopy.join('').toLowerCase().replace(regex1, '-');
//         }       
//     return answer;
// }
  
// console.log(spinalCase('This Is Spinal Tap'));  // "this-is-spinal-tap"
// console.log(spinalCase('thisIsSpinalTap'));  // "this-is-spinal-tap"
// console.log(spinalCase("The_Andy_Griffith_Show"));  // "the-andy-griffith-show"
// console.log(spinalCase("Teletubbies say Eh-oh"));  // "teletubbies-say-eh-oh"
// console.log(spinalCase("AllThe-small Things"));  // "all-the-small-things"

///////////////////////////////////////////////////////////////////////////////
// Pig Latin
// https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/intermediate-algorithm-scripting/pig-latin
// Pig Latin is a way of altering English Words. The rules are as follows:

// - If a word begins with a consonant, take the first consonant or consonant cluster, move it to the end of the word, and add "ay" to it.

// - If a word begins with a vowel, just add "way" at the end.

// Translate the provided string to Pig Latin. Input strings are guaranteed to be English words in all lowercase.

// const translatePigLatin = str => {
//     // see if the word has vowels at all
//     const regexVowels = /[aeiou]/gi;
//     if (regexVowels.test(str)) {
//         // if a word does have vowels turn string into an array
//         const arrStr = str.split('');
//         // if the vowel is the first letter, take the str arg and concat 'way' to the end and return it
//         if (arrStr[0] === 'a' || arrStr[0] === 'e' || arrStr[0] === 'i' || arrStr[0] === 'o' || arrStr[0] === 'u') {
//             return str.concat("way");
//         } 
//         // if the vowel isn't the first letter, iterate through the array and find the first vowel
//         // start i at 1 in case the first letter is a vowel, since i explicitly check [0] for a vowel
//         else {
//             for (let i = 1, len = arrStr.length; i < len; i++) {
//                 if (arrStr[i] === 'a' || arrStr[i] === 'e' || arrStr[i] === 'i' || arrStr[i] === 'o' || arrStr[i] === 'u') {
//                     // if the vowel is anywhere but the first letter slice away everything before the vowel and store it somewhere and then slice away the vowel and everything after it
//                     // stick back together the new First Half plus the new Second Half plus 'ay' at the end and return it
//                     // return arrStr.slice(i).concat(arrStr.slice(0, i).concat('ay')).join('');
//                 }
//             }
//         }
//     }
//     // if a word has no vowels concat 'ay' to the end of the str arg and return it
//     else {
//         return str.concat('ay');
//     }
// }

// console.log(translatePigLatin("eight"));    // "eightway"
// console.log(translatePigLatin("paragraphs"));    // "aragraphspay"
// console.log(translatePigLatin("glove"));    // "oveglay"
// console.log(translatePigLatin("california"));   // "aliforniacay"
// console.log(translatePigLatin("rhythm"));   // "rhythmay"
// console.log(translatePigLatin("schwartz")); // "artzschway"

///////////////////////////////////////////////////////////////////////////////
// Search and Replace
// https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/intermediate-algorithm-scripting/search-and-replace
// Perform a search and replace on the sentence using the arguments provided and return the new sentence.

// First argument is the sentence to perform the search and replace on.

// Second argument is the word that you will be replacing (before).

// Third argument is what you will be replacing the second argument with (after).

// Note
// Preserve the case of the first character in the original word when you are replacing it. For example if you mean to replace the word "Book" with the word "dog", it should be replaced as "Dog"

function myReplace(str, before, after) {
    // make a copy of the given string using slice
    // turn copy into an array of separate words 
    const strArr = str.slice().split(' ');
    const capitalLetters = /[A-Z]/g;
    const beforeRegex = new RegExp(before, 'i');
    // iterate thru the array looking to see if the before is a match
    for (let i = 0, len = strArr.length; i < len; i++) {
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
            } else {
                // if the original wasn't capitalized, splice out the before word and insert the after word made all lowercase
                strArr.splice(i, 1, after.toLowerCase());
                // join the array back together with spaces between the words and return it
                return strArr.join(' ');
            }
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

///////////////////////////////////////////////////////////////////////////////
// DNA Pairing
// https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/intermediate-algorithm-scripting/dna-pairing
// The DNA strand is missing the pairing element. Take each character, get its pair, and return the results as a 2d array.

// Base pairs are a pair of AT and CG. Match the missing element to the provided character.

// Return the provided character as the first element in each array.

// For example, for the input GCG, return [["G", "C"], ["C","G"],["G", "C"]]

// The character and its pair are paired up in an array, and all the arrays are grouped into one encapsulating array.

const pairElement = str => {
    // declare a new array to put the answer in thats the same length of the given str
    const answerArr = [];
    // fill an object with the proper pairings
    const dnaPairs = {
        G: ["G", "C"],
        C: ["C", "G"],
        A: ["A", "T"],
        T: ["T", "A"]
    };
    // iterate through the given string. On each char check the object to see what is the proper pairing
    for (let i = 0, len = str.length; i < len; i++) {
        // iterate through the dna pairing object to find the match
        for (const property in dnaPairs) {
            if (str[i] === property) {
                // and push the proper pairing into the new array
                answerArr.push(dnaPairs[property]);
            }
        }
    }
    // return the newly filled array
    return answerArr;
}
  
// console.log(pairElement("GCG"));    // [["G", "C"], ["C", "G"], ["G", "C"]]
// console.log(pairElement("ATCGA"));  // [["A","T"],["T","A"],["C","G"],["G","C"],["A","T"]]
// console.log(pairElement("TTGAG"));  // [["T","A"],["T","A"],["G","C"],["A","T"],["G","C"]]
// console.log(pairElement("CTCTA"));  // [["C","G"],["T","A"],["C","G"],["T","A"],["A","T"]]
///////////////////////////////////////////////////////////////////////////////
// Missing letters
// https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/intermediate-algorithm-scripting/missing-letters
// Find the missing letter in the passed letter range and return it.

// If all letters are present in the range, return undefined.

function fearNotLetter(str) {
    return str;
  }
  
console.log(fearNotLetter("abce")); // 'd'
console.log(fearNotLetter("abcdefghjklmno"));   // 'i'
console.log(fearNotLetter("stvwx"));    // 'u'
console.log(fearNotLetter("bcdf")); // 'e'
console.log(fearNotLetter("abcdefghijklmnopqrstuvwxyz"));   // undefined
///////////////////////////////////////////////////////////////////////////////
// 