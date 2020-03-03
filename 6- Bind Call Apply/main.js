/**
 * Bind Call and Apply Examples.
 */

/**
 * CALL: 
 * 
 * Lets you invoke the method of an object using the attributes
 * of another object.
 */

var person = {
    name: 'name',
    age: 9001,
    greeting: function (greetingToDisplay) {
        console.log("function invoked for: " + this.name + this.age);
        console.log(greetingToDisplay + " :)");
    }
}

person.greeting("Hello!");

var anotherPerson = {
    name: 'other name',
    age: 1,
    //This other person doesn't have a method.
}

person.greeting.call(anotherPerson, "other person greeting!!");

/**
 * BIND:
 * 
 * Lets you specifically set particular function parameters with
 * values and "bind" the function with that particular
 * function parameter to be used later.
 * 
 * Useful if you need to set some baseline parameter at
 * runtime that you aren't aware of at compile time, while
 * still retaining the flexibility of a function at runtime
 * for certain other parameters.
 */

