// Defining a class
class Car {
    constructor(make, model, year) {
        this.make = make;
        this.model = model;
        this.year = year;
    }

    displayInfo() {
        return `${this.year} ${this.make} ${this.model}`;
    }
}

// Creating an object
let myCar = new Car('Toyota', 'Corolla', 2021);
console.log(myCar.displayInfo()); // Output: 2021 Toyota Corolla
