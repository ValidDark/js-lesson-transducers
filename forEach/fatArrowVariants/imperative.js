'use strict'

const imperativeForEach =
  (array, func) => {
    for (let element of array) {
      func(element)
    }
  }

module.exports =
  imperativeForEach
