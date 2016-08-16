'use strict'

const forEachBasedMap =
  (array, func) => {
    let result = []

    array.forEach(element => {
      result.push(func(element))
    })

    return result
  }

module.exports =
  forEachBasedMap
