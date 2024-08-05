class Person {
    constructor(name) {
        let _name = name; // Private variable

        this.getName = function() {
            return _name;
        }

        this.setName = function(name) {
            _name = name;
        }
    }
}

let person = new Person('John');
console.log(person.getName()); // Output: John
person.setName('Doe');
console.log(person.getName()); // Output: Doe
