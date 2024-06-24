/* VARIABLES */
const shapes = ["circle", "square", "triangle"]

/* SHAPE CLASS */
class Shape {
    constructor(shape) {
        if (!shapes.includes(shape)) {throw new Error("Please enter a valid shape.")};
    }
}