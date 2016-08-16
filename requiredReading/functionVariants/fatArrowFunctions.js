'use strict'

const noArgs =
  () => {
  console.log('no arg return ')
  }

const oneArgWithParens =
  (x) => {
  console.log(`x: ${x}`)
  }

  const oneArgNoParens =
   x => {
  console.log(`x: ${x}`)
  }

  const oneArgWithDefault =
    (x = 'default') => {
      console.log(`x: ${x}`)
    }

const twoArgs =
  (x, y) => {
    console.log(`x: ${x}`)
    console.log(`y: ${y}`)
  }

  const twoArgsWithDefault =
    (x, y = 'default') => {
      console.log(`x: ${x}`)
      console.log(`y: ${y}`)
    }

  const restParams =
    (...args) => {
      console.log(args)
    }

    const oneArgWithRestParams =
    ( x, ...rest) => {
      console.log(`x: ${x}`)
      console.log(rest)
    }

  const singleLineValueReturn =
  () => 'returned value'

  const multiLineValueReturn =
  () => { console.log('multi line')
    return 'returned value' }

    const singleLineNoReturn =
    () => { x += 10 }

    const multiLineNoReturn =
    () => {
      console.log(`x: ${x}`)
      x += 10
          }
