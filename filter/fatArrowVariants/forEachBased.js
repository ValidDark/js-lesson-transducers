'use strict'

const forEachBasedFilter =
  (array, func) => {
    let result = []

    array.forEach(element => {
      if (func(element)) {
        result.push(element)
      }
    })

    return result
  }

module.exports =
  forEachBasedFilter
