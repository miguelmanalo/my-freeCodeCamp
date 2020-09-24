// Using the Test Method
// https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/regular-expressions/using-the-test-method

// let testStr = "freeCodeCamp";
// let testRegex = /Code/;
// testRegex.test(testStr);
// // Returns true

// let myString = "Hello, World!";
// let myRegex = /Hello/;
// let result = myRegex.test(myString); // Change this line
// console.log(result);

////////////////////////////////////////////////////////////////////////////////////////

// Regular Expressions: Match Literal Strings
// https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/regular-expressions/match-literal-strings

// let testStr = "Hello, my name is Kevin.";
// let testRegex = /Kevin/;
// testRegex.test(testStr);
// // Returns true

// let wrongRegex = /kevin/;
// wrongRegex.test(testStr);
// // Returns false

// let waldoIsHiding = "Somewhere Waldo is hiding in this text.";
// let waldoRegex = /Waldo/; // Change this line
// let result = waldoRegex.test(waldoIsHiding);
// console.log(result);

////////////////////////////////////////////////////////////////////////////////////////
// Regular Expressions: Match a Literal String with Different Possibilities
// https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/regular-expressions/match-a-literal-string-with-different-possibilities

// let petString = "James has a pet cat.";
// let petRegex = /dog|bird|fish|cat/; // Change this line
// let result = petRegex.test(petString);
// console.log(result);


////////////////////////////////////////////////////////////////////////////////////////
// Regular Expressions: Ignore Case While Matching
// https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/regular-expressions/ignore-case-while-matching

// let myString = "freeCodeCamp";
// let fccRegex = /freecodecamp/i; // Change this line
// let result = fccRegex.test(myString);
// console.log(result);

////////////////////////////////////////////////////////////////////////////////////////
// Regular Expressions: Extract Matches
// https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/regular-expressions/extract-matches

// "Hello, World!".match(/Hello/);
// // Returns ["Hello"]
// let ourStr = "Regular expressions";
// let ourRegex = /expressions/;
// ourStr.match(ourRegex);
// // Returns ["expressions"]

// 'string'.match(/regex/);
// /regex/.test('string');

// let extractStr = "Extract the word 'coding' from this string.";
// let codingRegex = /coding/; // Change this line
// let result = extractStr.match(codingRegex); // Change this line

// console.log(result);

////////////////////////////////////////////////////////////////////////////////////////
// Regular Expressions: Find More Than the First Match
// https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/regular-expressions/find-more-than-the-first-match

// let testStr = "Repeat, Repeat, Repeat";
// let ourRegex = /Repeat/;
// testStr.match(ourRegex);
// // Returns ["Repeat"]

// let repeatRegex = /Repeat/g;
// testStr.match(repeatRegex);
// // Returns ["Repeat", "Repeat", "Repeat"]

// let twinkleStar = "Twinkle, twinkle, little star";
// let starRegex = /twinkle/gi; // Change this line
// let result = twinkleStar.match(starRegex); // Change this line
// console.log(result);

////////////////////////////////////////////////////////////////////////////////////////
// Regular Expressions: Match Anything with Wildcard Period
// https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/regular-expressions/match-anything-with-wildcard-period

// let humStr = "I'll hum a song";
// let hugStr = "Bear hug";
// let huRegex = /hu./;
// huRegex.test(humStr); // Returns true
// huRegex.test(hugStr); // Returns true

// let exampleStr = "Let's have fun with regular expressions!";
// let unRegex = /.un/; // Change this line
// let result = unRegex.test(exampleStr);
// console.log(result);

////////////////////////////////////////////////////////////////////////////////////////
// Regular Expressions: Match Single Character with Multiple Possibilities
// https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/regular-expressions/match-single-character-with-multiple-possibilities

// let bigStr = "big";
// let bagStr = "bag";
// let bugStr = "bug";
// let bogStr = "bog";
// let bgRegex = /b[aiu]g/;
// bigStr.match(bgRegex); // Returns ["big"]
// bagStr.match(bgRegex); // Returns ["bag"]
// bugStr.match(bgRegex); // Returns ["bug"]
// bogStr.match(bgRegex); // Returns null

// let quoteSample = "Beware of bugs in the above code; I have only proved it correct, not tried it.";
// let vowelRegex = /[aeiou]/gi; // Change this line
// let result = quoteSample.match(vowelRegex); // Change this line
// console.log(result)

////////////////////////////////////////////////////////////////////////////////////////
// Regular Expressions: Match Letters of the Alphabet
// https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/regular-expressions/match-letters-of-the-alphabet

// let catStr = "cat";
// let batStr = "bat";
// let matStr = "mat";
// let bgRegex = /[a-e]at/;
// catStr.match(bgRegex); // Returns ["cat"]
// batStr.match(bgRegex); // Returns ["bat"]
// matStr.match(bgRegex); // Returns null

// let quoteSample = "The quick brown fox jumps over the lazy dog.";
// let alphabetRegex = /[a-z]/gi; // Change this line
// let result = quoteSample.match(alphabetRegex); // Change this line
// console.log(result);

////////////////////////////////////////////////////////////////////////////////////////
// Regular Expressions: Match Numbers and Letters of the Alphabet
// https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/regular-expressions/match-numbers-and-letters-of-the-alphabet

// let jennyStr = "Jenny8675309";
// let myRegex = /[a-z0-9]/ig;
// // matches all letters and numbers in jennyStr
// jennyStr.match(myRegex);

// let quoteSample = "Blueberry 3.141592653s are delicious.";
// let myRegex = /[h-s2-6]/gi; // Change this line
// let result = quoteSample.match(myRegex); // Change this line
// console.log(result)

////////////////////////////////////////////////////////////////////////////////////////
// Regular Expressions: Match Single Characters Not Specified
// https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/regular-expressions/match-single-characters-not-specified

let quoteSampleMice = "3 blind mice.";
let myRegexMice = /[^aeiou0-9]/gi; // Change this line
let resultMice = quoteSampleMice.match(myRegexMice); // Change this line
console.log(resultMice)

////////////////////////////////////////////////////////////////////////////////////////
// Regular Expressions: Match Characters that Occur One or More Times
// https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/regular-expressions/match-characters-that-occur-one-or-more-times

// let difficultSpelling = "Mississippi";
// let myRegex = /s+/gi; // Change this line
// let result = difficultSpelling.match(myRegex);
// console.log(result)

////////////////////////////////////////////////////////////////////////////////////////
// Regular Expressions: Match Characters that Occur Zero or More Times
// https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/regular-expressions/match-characters-that-occur-zero-or-more-times

// let soccerWord = "gooooooooal!";
// let gPhrase = "gut feeling";
// let oPhrase = "over the moon";
// let goRegex = /go*/;
// soccerWord.match(goRegex); // Returns ["goooooooo"]
// gPhrase.match(goRegex); // Returns ["g"]
// oPhrase.match(goRegex); // Returns null

// let chewieQuote = "Aaaaaaaaaaaaaaaarrrgh!";
// Only change code below this line
// let chewieRegex = /Aa*/; // Change this line
// Only change code above this line

// let result = chewieQuote.match(chewieRegex);
// console.log(result)


////////////////////////////////////////////////////////////////////////////////////////
// Regular Expressions: Find Characters with Lazy Matching
// https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/regular-expressions/find-characters-with-lazy-matching

// let text = "<h1>Winter is coming</h1>";
// let myRegex = /<.[0-9]?>/; // Change this line
// let result = text.match(myRegex);
// console.log(result)


////////////////////////////////////////////////////////////////////////////////////////
// Regular Expressions: Find One or More Criminals in a Hunt
// https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/regular-expressions/find-one-or-more-criminals-in-a-hunt

// "z"
// "zzzzzz"
// "ABCzzzz"
// "zzzzABC"
// "abczzzzzzzzzzzzzzzzzzzzzabc"

// ""
// "ABC"
// "abcabc"

// Write a greedy regex that finds one or more criminals within a group of other people. A criminal is represented by the capital letter C.

// let test1 = "C";
// let test2 = "CC";
// let test3 = "P1P5P4CCCP2P6P3";
// let test4 = "P6P2P7P4P5CCCCCP3P1";
// let test5 = "";
// let test6 = "P1P2P3";
// let test7 = "P2P1P5P4CCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCP3";

// let reCriminals = /C+/g; // Change this line

// console.log(test1.match(reCriminals));
// console.log(test2.match(reCriminals));
// console.log(test3.match(reCriminals));
// console.log(test4.match(reCriminals));
// console.log(test5.match(reCriminals));
// console.log(test6.match(reCriminals));
// console.log(test7.match(reCriminals));


////////////////////////////////////////////////////////////////////////////////////////
// Regular Expressions: Match Beginning String Patterns
// https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/regular-expressions/match-beginning-string-patterns

// let firstString = "Ricky is first and can be found.";
// let firstRegex = /^Ricky/;
// firstRegex.test(firstString);
// // Returns true
// let notFirst = "You can't find Ricky now.";
// firstRegex.test(notFirst);
// // Returns false

// let rickyAndCal = "Cal and Ricky both like racing.";
// let calRegex = /^Cal/; // Change this line
// let result = calRegex.test(rickyAndCal);
// console.log(result)


////////////////////////////////////////////////////////////////////////////////////////
// Regular Expressions: Match Ending String Patterns
// https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/regular-expressions/match-ending-string-patterns

// let theEnding = "This is a never ending story";
// let storyRegex = /story$/;
// storyRegex.test(theEnding);
// // Returns true
// let noEnding = "Sometimes a story will have to end";
// storyRegex.test(noEnding);
// // Returns false

// let caboose = "The last car on a train is the caboose";
// let lastRegex = /caboose$/; // Change this line
// let result = lastRegex.test(caboose);
// console.log(result)


////////////////////////////////////////////////////////////////////////////////////////
// Regular Expressions: Match All Letters and Numbers
// https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/regular-expressions/match-all-letters-and-numbers

// let longHand = /[A-Za-z0-9_]+/;
// let shortHand = /\w+/;
// let numbers = "42";
// let varNames = "important_var";
// longHand.test(numbers); // Returns true
// shortHand.test(numbers); // Returns true
// longHand.test(varNames); // Returns true
// shortHand.test(varNames); // Returns true

// let quoteSample = "The five boxing wizards jump quickly.";
// let alphabetRegexV2 = /[A-Za-z0-9_]/g; // Change this line
// // let alphabetRegexV2 = /\w/g; // Change this line
// let result = quoteSample.match(alphabetRegexV2);
// console.log(result)

////////////////////////////////////////////////////////////////////////////////////////
// Regular Expressions: Match Everything But Letters and Numbers
// https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/regular-expressions/match-everything-but-letters-and-numbers

// let shortHand = /\W/;
// let numbers = "42%";
// let sentence = "Coding!";
// numbers.match(shortHand); // Returns ["%"]
// sentence.match(shortHand); // Returns ["!"]

// let quoteSample = "The five boxing wizards jump quickly.";
// let nonAlphabetRegex = /\W/g; // Change this line
// let result = quoteSample.match(nonAlphabetRegex).length;
// console.log(result);

////////////////////////////////////////////////////////////////////////////////////////
// Regular Expressions: Match All Numbers
// https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/regular-expressions/match-all-numbers

// let movieName = "2001: A Space Odyssey";
// let numRegex = /\d/g; // Change this line
// let result = movieName.match(numRegex).length;
// console.log(result);

////////////////////////////////////////////////////////////////////////////////////////
// Regular Expressions: Match All Non-Numbers
// https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/regular-expressions/match-all-non-numbers

let movieName = "2001: A Space Odyssey";
let noNumRegex = /\D/g; // Change this line
let resultMovie = movieName.match(noNumRegex);
console.log(resultMovie);

////////////////////////////////////////////////////////////////////////////////////////
// Regular Expressions: Restrict Possible Usernames
// https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/regular-expressions/restrict-possible-usernames

let username1 = "JACK";
let username2 = "J";
let username3 = "Jo";
let username4 = "Oceans11";
let username5 = "RegexGuru";
let username6 = "007";
let username7 = "9";
let username8 = "A1";
let username9 = "BadUs3rnam3";
let username10 = "Z97";
let username11 = "c57bT3";

let userCheck = /^[a-z][a-z]+\d*$|^[a-z]\d\d+$/i; // Change this line

let matching1 = username1.match(userCheck);
let matching2 = username2.match(userCheck);
let matching3 = username3.match(userCheck);
let matching4 = username4.match(userCheck);
let matching5 = username5.match(userCheck);
let matching6 = username6.match(userCheck);
let matching7 = username7.match(userCheck);
let matching8 = username8.match(userCheck);
let matching9 = username9.match(userCheck);
let matching10 = username10.match(userCheck);
let matching11 = username11.match(userCheck);

console.log(matching1, userCheck.test(username1))
console.log(matching2, userCheck.test(username2))  // null
console.log(matching3, userCheck.test(username3))
console.log(matching4, userCheck.test(username4))
console.log(matching5, userCheck.test(username5))
console.log(matching6, userCheck.test(username6))  // null
console.log(matching7, userCheck.test(username7))  // null
console.log(matching8, userCheck.test(username8))  // null
console.log(matching9, userCheck.test(username9))  // null
console.log(matching10, userCheck.test(username10))
console.log(matching11, userCheck.test(username11)) //null


////////////////////////////////////////////////////////////////////////////////////////
// Regular Expressions: Match Whitespace
// https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/regular-expressions/match-whitespace

// let whiteSpace = "Whitespace. Whitespace everywhere!"
// let spaceRegex = /\s/g;
// whiteSpace.match(spaceRegex);
// // Returns [" ", " "]

// let sample = "Whitespace is important in separating words";
// let countWhiteSpace = /\s/g; // Change this line
// let result = sample.match(countWhiteSpace);
// console.log(result)

////////////////////////////////////////////////////////////////////////////////////////
// Regular Expressions: Match Non-Whitespace Characters
// https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/regular-expressions/match-non-whitespace-characters

// let whiteSpace = "Whitespace. Whitespace everywhere!"
// let nonSpaceRegex = /\S/g;
// whiteSpace.match(nonSpaceRegex).length; // Returns 32

// let sample = "Whitespace is important in separating words";
// let countNonWhiteSpace = /\S/g; // Change this line
// let result = sample.match(countNonWhiteSpace);
// console.log(result)

////////////////////////////////////////////////////////////////////////////////////////
// Regular Expressions: Specify Upper and Lower Number of Matches
// https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/regular-expressions/specify-upper-and-lower-number-of-matches

// let A4 = "aaaah";
// let A2 = "aah";
// let multipleA = /a{3,5}h/;
// multipleA.test(A4); // Returns true
// multipleA.test(A2); // Returns false

// Change the regex ohRegex to match the entire phrase "Oh no" only when it has 3 to 6 letter h's.

// let ohStr = "Ohhh no";
// let ohRegex = /Oh{3,6} no/; // Change this line
// let result = ohRegex.test(ohStr);
// console.log(result)

////////////////////////////////////////////////////////////////////////////////////////
// Regular Expressions: Specify Only the Lower Number of Matches
// https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/regular-expressions/specify-only-the-lower-number-of-matches

// let A4 = "haaaah";
// let A2 = "haah";
// let A100 = "h" + "a".repeat(100) + "h";
// let multipleA = /ha{3,}h/;
// multipleA.test(A4); // Returns true
// multipleA.test(A2); // Returns false
// multipleA.test(A100); // Returns true

// Change the regex haRegex to match the word "Hazzah" only when it has four or more letter z's.

// let haStr = "Hazzzzah";
// let haRegex = /Haz{4,}ah/; // Change this line
// let result = haRegex.test(haStr);
// console.log(result)

////////////////////////////////////////////////////////////////////////////////////////
// Regular Expressions: Specify Exact Number of Matches
// https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/regular-expressions/specify-exact-number-of-matches

// let A4 = "haaaah";
// let A3 = "haaah";
// let A100 = "h" + "a".repeat(100) + "h";
// let multipleHA = /ha{3}h/;
// multipleHA.test(A4); // Returns false
// multipleHA.test(A3); // Returns true
// multipleHA.test(A100); // Returns false

// Change the regex timRegex to match the word "Timber" only when it has four letter m's.

// let timStr = "Timmmmber";
// let timRegex = /Tim{4}ber/; // Change this line
// let result = timRegex.test(timStr);
// console.log(result)

////////////////////////////////////////////////////////////////////////////////////////
// Regular Expressions: Check for All or None
// https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/regular-expressions/check-for-all-or-none

// let american = "color";
// let british = "colour";
// let rainbowRegex= /colou?r/;
// rainbowRegex.test(american); // Returns true
// rainbowRegex.test(british); // Returns true

// Change the regex favRegex to match both the American English (favorite) and the British English (favourite) version of the word.

// let favWord = "favorite";
// let favRegex = /favou?rite/; // Change this line
// let result = favRegex.test(favWord);
// console.log(result)

////////////////////////////////////////////////////////////////////////////////////////
// Regular Expressions: Positive and Negative Lookahead
// https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/regular-expressions/positive-and-negative-lookahead

// let quit = "qu";
// let noquit = "qt";
// let quRegex= /q(?=u)/;
// let qRegex = /q(?!u)/;
// quit.match(quRegex); // Returns ["q"]
// noquit.match(qRegex); // Returns ["q"]

// let password = "abc123";
// let checkPass = /(?=\w{3,6})(?=\D*\d)/;
// checkPass.test(password); // Returns true

// Use lookaheads in the pwRegex to match passwords that are greater than 5 characters long, do not begin with numbers, and have two consecutive digits.

// let sampleWord = "astronaut";
// let pwRegex = /^\D(?=\w{5,})(?=\w*\d\d+)/; // Change this line
// freeCodeCamp solution
// var pwRegex =  /^\D(?=\w{5})(?=\w*\d{2})/;
// let result = pwRegex.test(sampleWord);

// console.log(result)

////////////////////////////////////////////////////////////////////////////////////////
// Regular Expressions: Check For Mixed Grouping of Characters
// https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/regular-expressions/check-for-mixed-grouping-of-characters

// let testStr = "Pumpkin";
// let testRegex = /P(engu|umpk)in/;
// testRegex.test(testStr);
// // Returns true

// Fix the regex so that it checks for the names of Franklin Roosevelt or Eleanor Roosevelt in a case sensitive manner and it should make concessions for middle names.

// Then fix the code so that the regex that you have created is checked against myString and either true or false is returned depending on whether the regex matches.

// let myStringPrez = "Eleanor Roosevelt";
// let myRegexPrez = /(Franklin|Eleanor)(\D*)Roosevelt/; // Change this line
// let resultPrez = myRegexPrez.test(myStringPrez); // Change this line
// console.log(resultPrez);
// After passing the challenge experiment with myString and see how the grouping works


////////////////////////////////////////////////////////////////////////////////////////
// Regular Expressions: Reuse Patterns Using Capture Groups
// https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/regular-expressions/reuse-patterns-using-capture-groups

// let repeatStr = "regex regex";
// let repeatRegex = /(\w+)\s\1/;
// repeatRegex.test(repeatStr); // Returns true
// repeatStr.match(repeatRegex); // Returns ["regex regex", "regex"]

// Using the .match() method on a string will return an array with the string it matches, along with its capture group.

// Use capture groups in reRegex to match numbers that are repeated only three times in a string, each separated by a space.

// let repeatNum = "42 42 42";
// let reRegex = /^(\d+\s*)/; // Change this line
// // freeCodeCamp answer
// let reRegexfCC = /^(\d+)\s\1\s\1$/;
// let result = reRegex.test(repeatNum);
// console.log(result);
// console.log(reRegexfCC.test(repeatNum)); 
// console.log(repeatNum.match(reRegexfCC)); 

////////////////////////////////////////////////////////////////////////////////////////
// Regular Expressions: Use Capture Groups to Search and Replace
// https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/regular-expressions/use-capture-groups-to-search-and-replace

// let wrongText = "The sky is silver.";
// let silverRegex = /silver/;
// wrongText.replace(silverRegex, "blue");
// // Returns "The sky is blue."

// "Code Camp".replace(/(\w+)\s(\w+)/, '$2 $1');
// // Returns "Camp Code"

// Write a regex fixRegex using three capture groups that will search for each word in the string "one two three". Then update the replaceText variable to replace "one two three" with the string "three two one" and assign the result to the result variable. Make sure you are utilizing capture groups in the replacement string using the dollar sign ($) syntax.

// let str = "one two three";
// let fixRegex = /(\w+)\s(\w+)\s(\w+)/; // Change this line
// let replaceText = "$3 $2 $1"; // Change this line
// let result = str.replace(fixRegex, replaceText);
// console.log(result);

////////////////////////////////////////////////////////////////////////////////////////
// Regular Expressions: Remove Whitespace from Start and End
// https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/regular-expressions/remove-whitespace-from-start-and-end

// Write a regex and use the appropriate string methods to remove whitespace at the beginning and end of strings.

// Note: The String.prototype.trim() method would work here, but you'll need to complete this challenge using regular expressions.

let hello = "   Hello, World!  ";
let wsRegex = /(\s\s+)/g; // Change this line
let result = hello.replace(wsRegex, ''); // Change this line
console.log(result);
console.log('Hello, World!')

////////////////////////////////////////////////////////////////////////////////////////
