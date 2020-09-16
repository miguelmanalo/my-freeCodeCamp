///////////////////////////////////////////////////////////////////////////////
// Object Oriented Programming: Create a Basic JavaScript Object
// https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/object-oriented-programming/create-a-basic-javascript-object
// Create a dog object with name and numLegs properties, and set them to a string and a number, respectively.

// let dog = {
//     name: 'dog',
//     numLegs: 4,
// };

///////////////////////////////////////////////////////////////////////////////
// Use Dot Notation to Access the Properties of an Object
// https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/object-oriented-programming/use-dot-notation-to-access-the-properties-of-an-object

// Print both properties of the dog object to your console.

// let dog = {
//     name: "Spot",
//     numLegs: 4
// };
// Only change code below this line
// console.log(dog.name);
// console.log(dog.numLegs)

///////////////////////////////////////////////////////////////////////////////
// Create a Method on an Object
// https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/object-oriented-programming/create-a-method-on-an-object
// Using the dog object, give it a method called sayLegs. The method should return the sentence "This dog has 4 legs."

// let dog = {
//     name: "Spot",
//     numLegs: 4,
//     sayLegs: function () {return "This dog has 4 legs."}
// };
  
// console.log(dog.sayLegs());

///////////////////////////////////////////////////////////////////////////////
// Make Code More Reusable with the this Keyword
// https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/object-oriented-programming/make-code-more-reusable-with-the-this-keyword
// Modify the dog.sayLegs method to remove any references to dog. Use the duck example for guidance.

// let dog = {
//     name: "Spot",
//     numLegs: 4,
//     sayLegs: function() {return "This dog has " + this.numLegs + " legs.";}
// };
  
// console.log(dog.sayLegs());

///////////////////////////////////////////////////////////////////////////////
// Define a Constructor Function
// https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/object-oriented-programming/define-a-constructor-function
// Create a constructor, Dog, with properties name, color, and numLegs that are set to a string, a string, and a number, respectively.

// function Dog() {
//     this.name = 'Dog',
//     this.color = 'Brown',
//     this.numLegs = 4
// };

// const dog1 = new Dog('dig', 'beige', 3);
// console.log(dog1)

///////////////////////////////////////////////////////////////////////////////
// Use a Constructor to Create Objects
// https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/object-oriented-programming/use-a-constructor-to-create-objects
// Use the Dog constructor from the last lesson to create a new instance of Dog, assigning it to a variable hound.

// function Dog() {
//     this.name = "Rupert";
//     this.color = "brown";
//     this.numLegs = 4;
// }
// // Only change code below this line
// const hound = new Dog();
// console.log(hound)

///////////////////////////////////////////////////////////////////////////////
// Extend Constructors to Receive Arguments
// https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/object-oriented-programming/extend-constructors-to-receive-arguments
// Create another Dog constructor. This time, set it up to take the parameters name and color, and have the property numLegs fixed at 4. Then create a new Dog saved in a variable terrier. Pass it two strings as arguments for the name and color properties.

// function Dog(name, color) {
//     this.name = name;
//     this.color = color;
//     this.numLegs = 4;
// }

// const terrier = new Dog('dog2', 'blue');
// console.log(terrier);

///////////////////////////////////////////////////////////////////////////////
// Verify an Object's Constructor with instanceof
// https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/object-oriented-programming/verify-an-objects-constructor-with-instanceof
// Anytime a constructor function creates a new object, that object is said to be an instance of its constructor. JavaScript gives a convenient way to verify this with the instanceof operator. instanceof allows you to compare an object to a constructor, returning true or false based on whether or not that object was created with the constructor. Here's an example:

// let Bird = function(name, color) {
//     this.name = name;
//     this.color = color;
//     this.numLegs = 2;
//   }
  
// let crow = new Bird("Alexis", "black");
  
// console.log(crow instanceof Bird); // => true

// Create a new instance of the House constructor, calling it myHouse and passing a number of bedrooms. Then, use instanceof to verify that it is an instance of House.

// function House(numBedrooms) {
//     this.numBedrooms = numBedrooms;
// }
  
// Only change code below this line
// const myHouse = new House(3);
// console.log(myHouse instanceof House);

///////////////////////////////////////////////////////////////////////////////
// Understand Own Properties
// https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/object-oriented-programming/understand-own-properties
// Add the own properties of canary to the array ownProps.

// function Bird(name) {
//     this.name = name;
//     this.numLegs = 2;
// }
  
// let canary = new Bird("Tweety");
// let ownProps = [];
// // Only change code below this line
// for (const property in canary) {
//     if (canary.hasOwnProperty(property)) ownProps.push(property);
// }

// console.log(ownProps);

///////////////////////////////////////////////////////////////////////////////
// Use Prototype Properties to Reduce Duplicate Code
// https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/object-oriented-programming/use-prototype-properties-to-reduce-duplicate-code
// Add a numLegs property to the prototype of Dog

// function Dog(name) {
//     this.name = name;
// }
  
// Dog.prototype.numLegs = 4;
  
// Only change code above this line
// let beagle = new Dog("Snoopy");
// console.log(beagle);
// console.log(beagle.hasOwnProperty('numLegs'));
// console.log(beagle.hasOwnProperty('name'));

///////////////////////////////////////////////////////////////////////////////
// Iterate Over All Properties
// https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/object-oriented-programming/iterate-over-all-properties
// Add all of the own properties of beagle to the array ownProps. Add all of the prototype properties of Dog to the array prototypeProps.

// function Dog(name) {
//     this.name = name;
// }
  
// Dog.prototype.numLegs = 4;
  
// let beagle = new Dog("Snoopy");
  
// let ownProps = [];
// let prototypeProps = [];
  
// Only change code below this line
// for (const property in beagle) {
//     beagle.hasOwnProperty(property) ? ownProps.push(property) : prototypeProps.push(property);
// }
// console.log(ownProps);
// console.log(prototypeProps);

///////////////////////////////////////////////////////////////////////////////
// Understand the Constructor Property
// https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/object-oriented-programming/understand-the-constructor-property
// Write a joinDogFraternity function that takes a candidate parameter and, using the constructor property, return true if the candidate is a Dog, otherwise return false.

// function Dog(name) {
//     this.name = name;
// }
  
// Only change code below this line
// const joinDogFraternity = candidate => candidate.constructor === Dog ? true : false;

// let beagle = new Dog("Snoopy");
// console.log(joinDogFraternity(beagle));

///////////////////////////////////////////////////////////////////////////////
// Change the Prototype to a New Object
// https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/object-oriented-programming/change-the-prototype-to-a-new-object
// Add the property numLegs and the two methods eat() and describe() to the prototype of Dog by setting the prototype to a new object.

// function Dog(name) {
//     this.name = name;
// }
  
// Dog.prototype = {
//     // Only change code below this line
//     numLegs: 4,
    
//     eat: function() {
//         console.log('eat');
//         return 'eat';
//     },

//     describe: function() {
//         console.log('My name is ' + this.name);
//         return 'My name is ' + this.name;
//     }
// };

// let beagle = new Dog("Snoopy");
// console.log(beagle.eat());
// console.log(beagle.describe());

///////////////////////////////////////////////////////////////////////////////
// Remember to Set the Constructor Property when Changing the Prototype
// https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/object-oriented-programming/remember-to-set-the-constructor-property-when-changing-the-prototype
// Define the constructor property on the Dog prototype.

// function Dog(name) {
//     this.name = name;
// }
  
// // Only change code below this line
// Dog.prototype = {
//     constructor: Dog,
//     numLegs: 4,
//     eat: function() {
//       console.log("nom nom nom");
//     },
//     describe: function() {
//       console.log("My name is " + this.name);
//     }
// };

///////////////////////////////////////////////////////////////////////////////
// Understand Where an Object’s Prototype Comes From
// https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/object-oriented-programming/understand-where-an-objects-prototype-comes-from

// function Bird(name) {
//     this.name = name;
//   }
  
//   let duck = new Bird("Donald");

// Bird.prototype.isPrototypeOf(duck); returns true

// Use isPrototypeOf to check the prototype of beagle.

// function Dog(name) {
//     this.name = name;
//   }
  
// let beagle = new Dog("Snoopy");
  
//   // Only change code below this line
// console.log(Dog.prototype.isPrototypeOf(beagle));

///////////////////////////////////////////////////////////////////////////////
// Understand the Prototype Chain
// https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/object-oriented-programming/understand-the-prototype-chain
// Modify the code to show the correct prototype chain.

// function Dog(name) {
//     this.name = name;
//   }
  
//   let beagle = new Dog("Snoopy");
  
//   console.log(Dog.prototype.isPrototypeOf(beagle));  // yields true
  
//   // Fix the code below so that it evaluates to true
//   console.log(Object.prototype.isPrototypeOf(Dog.prototype));

///////////////////////////////////////////////////////////////////////////////
// Use Inheritance So You Don't Repeat Yourself
// https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/object-oriented-programming/use-inheritance-so-you-dont-repeat-yourself
// The eat method is repeated in both Cat and Bear. Edit the code in the spirit of DRY by moving the eat method to the Animal supertype.

// function Cat(name) {
//     this.name = name;
// }
  
// Cat.prototype = {
//     constructor: Cat,
// };
  
// function Bear(name) {
//     this.name = name;
// }
  
// Bear.prototype = {
//     constructor: Bear,
// };
  
// function Animal() { }
  
// Animal.prototype = {
//     constructor: Animal,
//     eat: function() {
//         console.log("nom nom nom");
//       }
// };

///////////////////////////////////////////////////////////////////////////////
// Inherit Behaviors from a Supertype
// https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/object-oriented-programming/inherit-behaviors-from-a-supertype
// Use Object.create to make two instances of Animal named duck and beagle.

// function Animal() { }

// Animal.prototype = {
//   constructor: Animal,
//   eat: function() {
//     console.log("nom nom nom");
//   }
// };

// Only change code below this line

// let duck = Object.create(Animal.prototype); // Change this line
// let beagle = Object.create(Animal.prototype); // Change this line
// console.log(duck.eat());
// console.log(beagle);

///////////////////////////////////////////////////////////////////////////////
// Set the Child's Prototype to an Instance of the Parent
// https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/object-oriented-programming/set-the-childs-prototype-to-an-instance-of-the-parent
// Modify the code so that instances of Dog inherit from Animal.

// function Animal() { }

// Animal.prototype = {
//   constructor: Animal,
//   eat: function() {
//     console.log("nom nom nom");
//   }
// };

// function Dog() { }

// // Only change code below this line
// Dog.prototype = Object.create(Animal.prototype);

// let beagle = new Dog();
// console.log(beagle.eat());

///////////////////////////////////////////////////////////////////////////////
// Reset an Inherited Constructor Property
// https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/object-oriented-programming/reset-an-inherited-constructor-property
// Fix the code so duck.constructor and beagle.constructor return their respective constructors.

// function Animal() { }
// function Bird() { }
// function Dog() { }

// Bird.prototype = Object.create(Animal.prototype);
// Dog.prototype = Object.create(Animal.prototype);

// // Only change code below this line
// Bird.prototype.constructor = Bird;
// Dog.prototype.constructor = Dog;

// let duck = new Bird();
// let beagle = new Dog();
// console.log(duck);
// console.log(beagle);

///////////////////////////////////////////////////////////////////////////////
// Add Methods After Inheritance
// https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/object-oriented-programming/add-methods-after-inheritance
// Add all necessary code so the Dog object inherits from Animal and the Dog's prototype constructor is set to Dog. Then add a bark() method to the Dog object so that beagle can both eat() and bark(). The bark() method should print "Woof!" to the console.

// function Animal() { }
// Animal.prototype.eat = function() { console.log("nom nom nom"); };

// function Dog() { }

// // Only change code below this line
// Dog.prototype = Object.create(Animal.prototype);
// Dog.prototype.constructor = Dog;

// Dog.prototype.bark = function () {
//     console.log('Woof!');
// };



// // Only change code above this line

// let beagle = new Dog();
// console.log(beagle.bark());

///////////////////////////////////////////////////////////////////////////////
// Override Inherited Methods
// https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/object-oriented-programming/override-inherited-methods
// Override the fly() method for Penguin so that it returns "Alas, this is a flightless bird."

// function Bird() { }

// Bird.prototype.fly = function() { return "I am flying!"; };

// function Penguin() { }
// Penguin.prototype = Object.create(Bird.prototype);
// Penguin.prototype.constructor = Penguin;

// // Only change code below this line

// Penguin.prototype.fly = function() { return "Alas, this is a flightless bird."; };

// // Only change code above this line

// let penguin = new Penguin();
// console.log(penguin.fly());

///////////////////////////////////////////////////////////////////////////////
// Use a Mixin to Add Common Behavior Between Unrelated Objects
// https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/object-oriented-programming/use-a-mixin-to-add-common-behavior-between-unrelated-objects

// The flyMixin takes any object and gives it the fly method.

// let bird = {
//   name: "Donald",
//   numLegs: 2
// };

// let plane = {
//   model: "777",
//   numPassengers: 524
// };

// flyMixin(bird);
// flyMixin(plane);

// Create a mixin named glideMixin that defines a method named glide. Then use the glideMixin to give both bird and boat the ability to glide.

// let bird = {
//     name: "Donald",
//     numLegs: 2
// };
  
// let boat = {
//     name: "Warrior",
//     type: "race-boat"
// };
  
// // Only change code below this line
// const glideMixin = obj => {
//     obj.glide = function () {
//         console.log('I can glide!');
//         return 'I can glide!'
//     }
// }

// glideMixin(boat);
// glideMixin(bird);
// console.log(bird.glide());
// console.log(boat.glide());

///////////////////////////////////////////////////////////////////////////////
// Use Closure to Protect Properties Within an Object from Being Modified Externally
// https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/object-oriented-programming/use-closure-to-protect-properties-within-an-object-from-being-modified-externally

// function Bird() {
//   let hatchedEgg = 10; // private variable

//   /* publicly available method that a bird object can use */
//   this.getHatchedEggCount = function() { 
//     return hatchedEgg;
//   };
// }
// let ducky = new Bird();
// ducky.getHatchedEggCount(); // returns 10

// Change how weight is declared in the Bird function so it is a private variable. Then, create a method getWeight that returns the value of weight 15.

// function Bird() {
//     // private variable
//     let weight = 15;

//     // privileged public access
//     this.getWeight = function () {
//         console.log(weight);
//         return weight;
//     }
// }

// const bird2 = new Bird();
// console.log(bird2);
// console.log(bird2.getWeight());

///////////////////////////////////////////////////////////////////////////////
// Understand the Immediately Invoked Function Expression (IIFE)
// https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/object-oriented-programming/understand-the-immediately-invoked-function-expression-iife

// (function () {
//     console.log("Chirp, chirp!");
//   })(); // this is an anonymous function expression that executes right away
//   // Outputs "Chirp, chirp!" immediately

// Rewrite the function makeNest and remove its call so instead it's an anonymous immediately invoked function expression (IIFE).

// function makeNest() {
//     console.log("A cozy nest is ready");
//     return "A cozy nest is ready";
// }
  
// console.log(makeNest());

// (function () {
//     console.log("A cozy nest is ready");
//     return "A cozy nest is ready";
// })();

///////////////////////////////////////////////////////////////////////////////
// Use an IIFE to Create a Module
// https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/object-oriented-programming/use-an-iife-to-create-a-module

// let motionModule = (function () {
//   return {
//     glideMixin: function(obj) {
//       obj.glide = function() {
//         console.log("Gliding on the water");
//       };
//     },
//     flyMixin: function(obj) {
//       obj.fly = function() {
//         console.log("Flying, wooosh!");
//       };
//     }
//   }
// })(); // The two parentheses cause the function to be immediately invoked

// motionModule.glideMixin(duck);
// duck.glide();

// Create a module named funModule to wrap the two mixins isCuteMixin and singMixin. funModule should return an object.

// let singMixin = function(obj) {
//     obj.sing = function() {
//       console.log("Singing to an awesome tune");
//     };
// };
  
const funModule = (function () {
    return {
        isCuteMixin: function (obj) {
            obj.isCute = function () {
                return true;
            }
        },

        singMixin: function (obj) {
            obj.sing = function () {
                console.log("Singing to an awesome tune");
                return "Singing to an awesome tune";

            }
        }
    }
})();

const duck = {};

// funModule.singMixin(duck);
// console.log(duck.sing());