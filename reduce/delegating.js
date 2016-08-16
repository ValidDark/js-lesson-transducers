'use strict'

function delegatingReduce (array, func, init) {
  return array.reduce(func, init)
}

module.exports =
  delegatingReduce
