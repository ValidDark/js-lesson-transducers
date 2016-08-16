'use strict'

function noArgs(){
  console.log('no arg')
}

function oneArg(x){
  console.log(`x: ${x}`)
}

function oneArgWithDefault (x = 'default') {
  console.log(`x: ${x}`)
}

function twoArgs( x, y) {
  console.log(`x: ${x}`)
  console.log(`y: ${y}`)
}

function twoArgsWithDefault (x, y = 'default') {
  console.log(`x: ${x}`)
  console.log(`y: ${y}`)
}

function restParams(...args){
  console.log(rest)
}

function oneArgWithRestParams( x, ...rest) {
  console.log(`x: ${x}`)
  console.log(rest)
}

function singleLineValueReturn () {
  return 'returned' + ' ' + 'value'
}

function multiLineValueReturn () {
  console.log('multi line')
  return 'returned value'
}

let x = 10
function singleLineNoReturn () {
  x += 10
}

function multiLineNoReturn () {
  console.log(`x: ${x}`)
  x += 10
}

console.log(singleLineValueReturn())
console.log(multiLineValueReturn())
console.log(singleLineNoReturn())
console.log(multiLineNoReturn())
