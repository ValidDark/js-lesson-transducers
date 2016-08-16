'use strict'

function reduceBasedMap (array, func) {
  return array.reduce(
    function (result, element) {
      return [...result, func(element)]
    },
    []
  )
}

module.exports =
  reduceBasedMap
