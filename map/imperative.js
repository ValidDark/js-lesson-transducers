'use strict'

function imperativeMap (array, func) {
  let result = []

  for (let element of array) {
    result.push(func(element))
  }

  return result
}

module.exports =
  imperativeMap
