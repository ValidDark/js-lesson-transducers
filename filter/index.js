'use strict'

const fatArrowVariants = require('./fatArrowVariants')

const delegating = require('./delegating')
const forEachBased = require('./forEachBased')
const imperative = require('./imperative')
const reduceBased = require('./reduceBased')

module.exports = {
  fatArrowVariants,
  delegating,
  forEachBased,
  imperative,
  reduceBased
}
