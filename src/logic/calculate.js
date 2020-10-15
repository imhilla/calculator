import Operate from './operate';

const Calculate = (() => {
  const calculate = (dataObject, buttonName) => {
    // eslint-disable-next-line
    var { total, next, operation } = dataObject;
    if (buttonName === operation) {
      Operate.operate(total, next, operation);
    }
    const newObj = { total, next, operation };
    return newObj;
  };
  return calculate;
})();

export default Calculate;
