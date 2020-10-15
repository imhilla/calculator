import Operate from './operate';

const Calculate = (() => {
  const calculate = (dataObject, buttonName) => {
    const newObj
    const newTotal
    const { total, next, operation } = dataObject;
    if (buttonName === operation) {
      newTotal = Operate.operate(total, next, buttonName);
      newObj = { total: newTotal, next, operation };
      return newObj
    }
  };
  return calculate;
})();

export default Calculate;
