class Shape {
    constructor(name) {
        this.name = name;
    }

    area() {
        console.log('Calculating area...');
    }
}

class Circle extends Shape {
    constructor(radius) {
        super('Circle');
        this.radius = radius;
    }

    area() {
        return Math.PI * this.radius * this.radius;
    }
}

class Square extends Shape {
    constructor(side) {
        super('Square');
        this.side = side;
    }

    area() {
        return this.side * this.side;
    }
}

let shapes = [new Circle(5), new Square(4)];
shapes.forEach(shape => {
    console.log(`${shape.name} area: ${shape.area()}`);
});
