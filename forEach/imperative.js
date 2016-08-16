'use strict'

function imperativeForEach (array, func) {
  for (let element of array) {
    func(element)
  }
}

module.exports =
  imperativeForEach
