'use strict'

function forEachBasedReduce (array, func, init) {
  let result = init

  array.forEach(function (element) {
    result = func(element)
  })

  return result
}

module.exports =
  forEachBasedReduce
