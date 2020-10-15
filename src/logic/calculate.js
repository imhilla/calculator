import Operate from './operate';

const Calculate = (() => {
  const calculate = (dataObject, buttonName) => {
    const { next, operation } = dataObject;
    let { total } = dataObject;

    if (buttonName === operation) {
      let finalTotal = Operate.operate(total, next, buttonName);
      return finalTotal
    }
    dataObject = { total: finalTotal, next: next, operation: operation }
    return dataObject;
  };
  return calculate;
})();

export default Calculate;
