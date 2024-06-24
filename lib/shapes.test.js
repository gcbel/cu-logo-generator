const Shape = require('/shapes.js');

describe('Shapes', () => {
    describe('available shape', () => {
        it("should throw an error if shape is not available in possible shapes", () => {
            const shape = new Shape("circle");
            const expectedError = new Error("Please enter a valid shape.")
            expect(shape).toThrow(expectedError);
        });
    });
});