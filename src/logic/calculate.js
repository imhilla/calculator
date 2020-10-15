import Operate from './operate';

const Calculate = (() => {
  const calculate = (dataObject, buttonName) => {
    const newObj
    let newTotal
    const { total, next, operation } = dataObject;
    if (buttonName === operation) {
      Operate.operate(total, next, buttonName);
      newObj = { total, next, operation };
      return newObj
    }
  };
  return calculate;
})();

export default Calculate;
