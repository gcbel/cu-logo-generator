const {Shape, Square, Circle, Triangle} = require('./shapes.js');

describe('Shapes', () => {
    describe('shape', () => {
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

    describe('circle', () => {
        it("should pass if circle correctly initialized with hex color", () => {
            const circle = new Circle("#366699");
            expect(circle).toEqual({"color": "#366699", "shape": "Circle"});
        });
    });

    // describe('circle', () => {
    //     it("should correctly render XLM content", () => {
    //         const circle = new Circle("#366699");
    //         const callBack = () => circle.render()
    //         expect(callBack).toEqual({"color": "#366699", "shape": "Circle"});
    //     });
    // });

    describe('square', () => {
        it("should pass if square correctly initialized", () => {
            const square = new Square("black");
            expect(square).toEqual({"color": "black", "shape": "Square"});
        });
    });

    describe('square', () => {
        it("should pass if square correctly initialized with hex color", () => {
            const square = new Square("#306939");
            expect(square).toEqual({"color": "#306939", "shape": "Square"});
        });
    });

    describe('triangle', () => {
        it("should pass if triangle correctly initialized", () => {
            const triangle = new Triangle("black");
            expect(triangle).toEqual({"color": "black", "shape": "Triangle"});
        });
    });

    describe('triangle', () => {
        it("should pass if triangle correctly initialized with hex color", () => {
            const triangle = new Triangle("#9e1e98");
            expect(triangle).toEqual({"color": "#9e1e98", "shape": "Triangle"});
        });
    });
});