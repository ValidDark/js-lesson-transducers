'use strict'

const delegating = require('./delegating')
const forEachBased = require('./forEachBased')
const imperative = require('./imperative')
const reduceBased = require('./reduceBased')

module.exports = {
  delegating,
  forEachBased,
  imperative,
  reduceBased
}
