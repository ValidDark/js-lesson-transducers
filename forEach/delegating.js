'use strict'

function delegatingForEach (array, func) {
  array.forEach(func)
}

module.exports =
  delegatingForEach
