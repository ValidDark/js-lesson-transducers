'use strict'

const forEachBasedReduce =
  (array, func, init) => {
    let result = init

    array.forEach(element => {
      result = func(result, element)
    })

    return result
  }

module.exports =
  forEachBasedReduce
