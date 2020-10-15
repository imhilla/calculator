import Operate from './operate';

const Calculate = (() => {
  const calculate = (dataObject, buttonName) => {
    const newObj
    const { total, next, operation } = dataObject;
    if (buttonName === operation) {
      Operate.operate(total, next, operation);
      newObj = { total, next, operation };
      return newObj
    }
  };
  return calculate;
})();

export default Calculate;
