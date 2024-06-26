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

    describe('circle', () => {
        it("should correctly render XLM content for a circle", () => {
            const circle = new Circle("#366699").render();
            expect(circle).toEqual("<circle cx=\"150\" cy=\"100\" r=\"100\" fill=\"#366699\"/>");
        });
    });

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

    describe('square', () => {
        it("should correctly render XLM content for a square", () => {
            const square = new Square("#306939").render();
            expect(square).toEqual("<rect x=\"50\" y=\"0\" width=\"200\" height=\"200\" fill=\"#306939\"/>");
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

    describe('triangle', () => {
        it("should correctly render XLM content for a triangle", () => {
            const triangle = new Triangle("#9e1e98").render();
            expect(triangle).toEqual("<polygon points=\"150,0 50,200 250,200\" fill=\"#9e1e98\"/>");
        });
    });
});