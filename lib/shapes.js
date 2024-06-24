/* VARIABLES */
const shapes = ["Circle", "Square", "Triangle"]

/* CLASSES */
class Shape {
    constructor(shape, color) {
        if (!shapes.includes(shape)) {throw new Error("Please enter a valid shape.")};
        this.shape = shape;
        this.color = color;
    }
}

class Circle extends Shape {
    constructor(color) {
        super("Circle", color);
    }

    draw() {
        return `<circle r="50" fill="${this.color}"/>`;
    }
}

class Square extends Shape {
    constructor(color) {
        super("Square", color);
    }

    draw() {
        return `<rect width="50" height="50" fill="${this.color}"/>`;
    }
}

class Triangle extends Shape {
    constructor(color) {
        super("Triangle", color);
    }

    draw() {
        return `<polygon points="50,0 0,100 100,100" fill="${this.color}"/>`;
    }
}

module.exports = {
    Shape,
    Circle,
    Square,
    Triangle
}