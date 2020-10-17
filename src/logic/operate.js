import Big from 'big.js';

const Operate = (() => {
  const operate = (numberOne, numberTwo, operation) => {
    // eslint-disable-next-line
    let total;
    const one = Big(numberOne);
    const two = Big(numberTwo);
    if (operation === '-') {
      total = one - two;
    } else if (operation === '+') {
      total = parseInt(one, 10) + parseInt(two, 10);
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
