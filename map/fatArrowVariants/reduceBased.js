'use strict'

const reduceBasedMap =
  (array, func) =>
    array.reduce(
      (result, element) =>
        [...result, func(element)],
      []
    )

module.exports =
  reduceBasedMap
