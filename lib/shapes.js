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

    render() {
        return `<circle cx="150" cy="100" r="100" fill="${this.color}"/>`;
    }
}

class Square extends Shape {
    constructor(color) {
        super("Square", color);
    }

    render() {
        return `<rect x="50" y="0" width="200" height="200" fill="${this.color}"/>`;
    }
}

class Triangle extends Shape {
    constructor(color) {
        super("Triangle", color);
    }

    render() {
        return `<polygon points="150,0 50,200 250,200" fill="${this.color}"/>`;
    }
}

/* EXPORTS */
module.exports = {
    Shape,
    Circle,
    Square,
    Triangle
}