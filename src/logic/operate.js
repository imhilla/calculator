import Big from 'big.js';

const Operate = (() => {
  let result
  let one;
  let two;
  const operate = (numberOne, numberTwo, operation) => {
    one = Big(numberOne)
    two = Big(numberTwo)
    if (operation === "-") {
      result = one - two
    } else if (operation === "+") {
      result = one + two
    } else if (operation === "X") {
      result = one * two
    } else if (operation === "÷") {
      result = one / two
    } else if (operation === "%") {
      result = (one / 100) * two
    }
    return result
  }
  return { operate }
})();

export default Operate
