'use strict'

function imperativeReduce (array, func, init) {
  let result = init

  for (let element of array) {
    result = func(result, element)
  }

  return result
}

module.exports =
  imperativeReduce
