// shapes constructor initializes 'addcolor' objects, 'chosenColor' added to 'shapes' class.
class shapes {
    addColor() {
      this.color = ('');
    }
    chosenColor(output) {
      this.color = output;
    }
  }
  
  
// colorToshape returns input and chosen color
  class Square extends shapes {
    colorToshape() {
      return `<rect x="20" width="90" height="90" fill="${this.shapeColor}"/>`;
    }
  }
  
  class Circle extends shapes {
    colorToshape() {
      return `<circle cx="40" cy="50" r="55" fill="${this.shapeColor}"/>`
    }
  }
  class Triangle extends shapes {
    colorToshape() {
      return `<polygon points="50,0 100,100 0,100" fill="${this.shapeColor}"/>`
    }
  }
// exports shape classes
  module.exports = {Square, Circle, Triangle};
