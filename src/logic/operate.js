import Big from 'big.js';

const Operate = (() => {
  const operate = (numberOne, numberTwo, operation) => {
    // eslint-disable-next-line
    let total;
    // eslint-disable-next-line
    let one;
    // eslint-disable-next-line
    let two;
    one = Big(numberOne);
    two = Big(numberTwo);
    if (operation === '-') {
      total = one - two;
    } else if (operation === '+') {
      total = one + two;
    } else if (operation === 'X') {
      total = one * two;
    } else if (operation === '÷') {
      total = one / two;
    } else if (operation === '%') {
      total = (one / 100) * two;
    }
    return total;
  };
  return { operate };
})();

export default Operate;
