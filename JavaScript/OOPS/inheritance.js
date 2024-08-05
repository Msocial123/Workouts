// Base class
class Animal {
    constructor(name) {
        this.name = name;
    }

    speak() {
        console.log(`${this.name} makes a noise.`);
    }
}

// Derived class
class Dog extends Animal {
    speak() {
        console.log(`${this.name} barks.`);
    }
}

let myDog = new Dog('Rex');
myDog.speak(); // Output: Rex barks.
