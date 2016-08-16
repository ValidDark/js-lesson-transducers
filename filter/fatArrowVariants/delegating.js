'use strict'

const delegatingFilter =
  (array, func) =>
    array.filter(func)

module.exports =
  delegatingFilter
