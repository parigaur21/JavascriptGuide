# javascript and classes


//Javascript is prototype-based language and its classes are primarily syntactic sugar over existing prototype-based inheritance. 


## OOP
object:
- collection of properties and methods
- toLowerCase 

## why use OOP?
 - parts of oop::

 Object literal 
- Constructor function
- Prototypes
- Classes
- Instances (new, this)


## 4 Pillars
Abstraction - fetch()
Encapsulation - console
Inheritance - extends , achieved using prototypes
Polymorphism - operators(eg: +) 

********
## prototype
is a property of constructor functions used to define properties for instances.
__proto__ is a reference inside every object that points to its parent prototype



## prototype chain : 
It is the mechanism where JavaScript searches for properties in an object and, if not found, continues searching up its prototype chain until null.


## this / call / apply / bind / new
this refers to the object that is calling the function, and its value is determined at runtime based on how the function is invoked.

call and apply invoke the function immediately, while bind returns a new function with fixed this.
apply takes arguments as an array.

creates a new object, sets its prototype, binds this to it and returns the object.


## Closure 
A closure is a function that retains access to its lexical scope even after the outer function has finished execution. Used for data privacy, memoization , event handlers, and maintaining state.

## Lexical scope
Scope dtermined by where variables and functions are defined in the code, not when they are called.


## Hoisting
js moves variables and function declaration to the top of their scope during execution

## var / let / const
var is function-scoped and hoisted.
let and const are block-scoped.
const cannot be reassigned.