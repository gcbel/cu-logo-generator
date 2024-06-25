const {Shape, Square, Circle, Triangle} = require('/shapes.js');

describe('Shapes', () => {
    describe('unavailable shapes', () => {
        it("should throw an error if shape is not available in possible shapes", () => {
            const shape = new Shape("Star");
            const expectedError = new Error("Please enter a valid shape.")
            expect(shape).toThrow(expectedError);
        });
    });

    describe('available shapes', () => {
        it("should throw an error if shape is not available in possible shapes", () => {
            const shape = new Shape("Circle");
            expect(shape).isEqual("meep");
        });
    });
});