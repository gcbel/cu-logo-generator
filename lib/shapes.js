/* CLASSES */
class Shape {
    constructor(shape, color) {
        this.shape = shape;
        this.color = color;
    }
}

class Circle extends Shape {
    constructor(color) {
        super("Circle", color);
    }

    draw() {
        return `<circle r="100" fill="${this.color}"/>`;
    }
}

class Square extends Shape {
    constructor(color) {
        super("Square", color);
    }

    draw() {
        return `<rect width="200" height="200" fill="${this.color}"/>`;
    }
}

class Triangle extends Shape {
    constructor(color) {
        super("Triangle", color);
    }

    draw() {
        return `<polygon points="100,0 0,200 200,200" fill="${this.color}"/>`;
    }
}

/* EXPORTS */
module.exports = {
    Shape,
    Circle,
    Square,
    Triangle
}