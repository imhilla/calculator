import Operate from './operate';

const Calculate = (() => {
  const calculate = (dataObject, buttonName) => {
    const { total, next, operation } = dataObject;
    if (buttonName === operation) {
      Operate.operate(total, next, buttonName);
    }
  };
  return calculate;
})();

export default Calculate;
