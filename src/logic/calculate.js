import Operate from './operate';

const Calculate = (() => {
  const calculate = (dataObject, buttonName) => {
    const { next, operation } = dataObject;
    let { total } = dataObject;
    if (buttonName === operation) {
      total = Operate.operate(total, next, buttonName);
    }
    dataObject.total = total;

    return dataObject
  }
  return calculate
})();

export default Calculate;
