const assert = require('assert');
var { splitExpenses } = require('./index');

// it('should return true', () => {
//   assert.equal(true, true)
// })

var testObj = {
  A: 50,
  B: 30
}

it('function should return null', () => {
  assert.equal(splitExpenses(testObj), null)
})

it('function should throw error if parameter is an integer', () => {
  assert.throws(() => { splitExpenses(5) }, (err) => err === 'Function only accepts object as its parameter.')
})

it('function should throw error if parameter is a string', () => {
  assert.throws(() => { splitExpenses("Hello") }, (err) => err === 'Function only accepts object as its parameter.')
})

it('function should throw error if parameter is an array', () => {
  assert.throws(() => { splitExpenses(["Hello"]) }, (err) => err === 'Function only accepts object as its parameter.')
})

it('function should throw error if parameter length is less than 1', () => {
  assert.throws(() => { splitExpenses({ a: 50 }) }, (err) => err === 'Object length cannot be less than or equal to 1.')
})

// assert.throws(() => {
//   sendMessage(12);  // usage of wanted function with test parameters
// }, Error)