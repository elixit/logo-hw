// using jest to test square background color
const get = require('./shapes')
let shapes = Square()
test('check square color', () => {
shapes.addColor("blue") 
expect(shapes.colorToshape()).toEqual(`<rect x="20" width="90" height="90" fill="blue"/>`)
})

const get = require('./shapes')
let cShapes = Circle()
test('check square color', () => {
cShapes.addColor("blue") 
expect(cShapes.colorToshape()).toEqual(`<circle cx="40" cy="50" r="55" fill=" fill="blue"/>`)
})

const get = require('./shapes')
let tShapes = Triangle()
test('check square color', () => {
tShapes.addColor("blue") 
expect(tShapes.colorToshape()).toEqual(`<polygon points="50,0 100,100 0,100" fill="blue"/>`)
})
