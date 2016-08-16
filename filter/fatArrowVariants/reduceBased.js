'use strict'

const reduceBasedFilter =
  (array, func) =>
    array.reduce(
      (result, element) =>
        func(element)
          ? [...result, func(element)]
          : result,
      []
    )

module.exports =
  reduceBasedFilter
