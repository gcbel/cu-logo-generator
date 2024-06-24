const Shape = require('/shapes');

describe('Shape', () => {
    describe('available shape', () => {
        it("should throw an error if shape is not covered in shapes", () => {
            const shape = new Shape("");
            expect(shape).toEqual({"authorName": "n"});
        });
    });
});