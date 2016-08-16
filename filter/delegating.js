'use strict'

function delegatingFilter (array, func) {
  return array.filter(func)
}

module.exports =
  delegatingFilter
