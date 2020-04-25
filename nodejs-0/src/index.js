'use strict'

const fibonacci = () => {
  let fibSequence = [0,1]

  for (let i = 2; i < 15; i++){
    fibSequence[i] = fibSequence[i-1] + fibSequence[i-2]
  }
  return fibSequence
}

const isFibonnaci = (num) => {
  const fibArray = fibonacci()

  return fibArray.includes(num)
}

module.exports = {
    fibonacci,
    isFibonnaci
}