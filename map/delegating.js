'use strict'

function delegatingMap (array, func) {
  return array.map(func)
}

module.exports =
  delegatingMap
