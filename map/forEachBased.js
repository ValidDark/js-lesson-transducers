'use strict'

function forEachBasedMap (array, func) {
  let result = []

  array.forEach(function (element) {
    result.push(func(element))
  })

  return result
}

module.exports =
  forEachBasedMap
