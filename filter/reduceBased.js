'use strict'

function reduceBasedFilter (array, func) {
  return array.reduce(
    function (result, element) {
      if (func(element)) {
        return [...result, element]
      } else {
        return result
      }
    },
    []
  )
}

module.exports =
  reduceBasedFilter
