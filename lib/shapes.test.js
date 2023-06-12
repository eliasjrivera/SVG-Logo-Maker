// imported shapes
const { Triangle, Square, Circle } = require("./shapes.js");

// testing suites
describe('Triangle', () => {
  it('should test a triangle with a red background', () => {
    const shape = new Triangle();
    shape.setColor('red');
    expect(shape.generate()).toEqual('<polygon points="150, 18 244, 182 56, 182" fill="red" />');
  });
});

describe('Square', () => {
  test("should test a square with a #FF5733 background", () => {
    const shape = new Square();
    shape.setColor('#FF5733');
    expect(shape.generate()).toEqual('<rect x="73" y="40" width="160" height="160" fill="#FF5733" />');
  });
});

describe('Circle', () => {
  test('should test a circle with a blue background', () => {
    const shape = new Circle();
    shape.setColor('blue');
    expect(shape.generate()).toEqual('<circle cx="150" cy="115" r="80" fill="blue" />');
  });
});