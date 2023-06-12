// class constructor and inherited structures
class Shape {
    constructor() {
      this.color = '';
    }
    setColor(colorOption) {
      this.color = colorOption;
    }
  }
  
  class Triangle extends Shape {
    constructor(){
      super();
    }
    generate() {
      return `<polygon points="150, 18 244, 182 56, 182" fill="${this.color}" />`;
    }
  }
  
  class Square extends Shape {
    constructor(){
      super();
    }
    generate() {
      return `<rect x="73" y="40" width="160" height="160" fill="${this.color}" />`;
    }
  }
  
  class Circle extends Shape {
    constructor(){
      super();
    }
    generate() {
      return `<circle cx="150" cy="115" r="80" fill="${this.color}" />`;
    }
  };
  
let triangleOne = new Triangle();
triangleOne.setColor('White');
let shapeSVG = triangleOne.generate();

  // module exports
  module.exports = { Triangle, Square, Circle };