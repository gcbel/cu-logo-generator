const {Shape, Square, Circle, Triangle} = require('./shapes.js');

describe('Shapes', () => {
    describe('unavailable shape', () => {
        it("should throw an error if shape is not available in possible shapes", () => {
            const shape = new Shape("Star", "black");
            const callBack = () => shape.render()
            const expectedError = new Error(`'${shape.shape}' is not a supported shape!`)
            expect(callBack).toThrow(expectedError);
        });
    });

    describe('circle', () => {
        it("should pass if circle correctly initialized", () => {
            const circle = new Circle("black");
            expect(circle).toEqual({"color": "black", "shape": "Circle"});
        });
    });

    describe('square', () => {
        it("should pass if square correctly initialized", () => {
            const square = new Square("black");
            expect(square).toEqual({"color": "black", "shape": "Square"});
        });
    });

    describe('triangle', () => {
        it("should pass if triangle correctly initialized", () => {
            const triangle = new Triangle("black");
            expect(triangle).toEqual({"color": "black", "shape": "Triangle"});
        });
    });
});