'use strict'

const delegatingReduce =
  (array, func, init) =>
    array.reduce(func, init)

module.exports =
  delegatingReduce
