'use strict'

function forEachBasedFilter (array, func) {
  let result = []

  array.forEach(function (element) {
    if (func(element)) {
      result.push(element)
    }
  })

  return result
}

module.exports =
  forEachBasedFilter
