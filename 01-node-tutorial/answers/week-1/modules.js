const names = require('./names.js')
const concatNames = require('./utils')
const {colors, fruit, animals} = require('./alternative-flavor')
require('./mind-grenade.js')

const name1 = names.name1;
const name2 = names.name2;

// function inside utils
console.log(concatNames(name1, name2))

// variables from alternative-flavors
console.log(colors)
console.log(fruit)
console.log(animals)