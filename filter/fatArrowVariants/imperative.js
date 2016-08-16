'use strict'

const imperativeFilter =
  (array, func) => {
    let result = []

    for (let element of array) {
      if (func(element)) {
        result.push(element)
      }
    }

    return result
  }

module.exports =
  imperativeFilter
