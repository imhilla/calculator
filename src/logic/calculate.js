import Operate from './operate';

const Calculate = (() => {
  const calculate = (dataObject, buttonName) => {
    const { total, next, operation } = dataObject;
    const finalTotal
    if (buttonName === operation) {
      finalTotal = Operate.operate(total, next, buttonName);
      return finalTotal
    }
    const newdataObject = { total: finalTotal, next, operation };
    return newdataObject;
  };
  return calculate;
})();

export default Calculate;
