import Operate from './operate';

const Calculate = (() => {
  const calculate = (dataObject, buttonName) => {
    // eslint-disable-next-line
    var { total, next, operation } = dataObject;
    // console.log(dataObject)
    const operationArray = ['+', '-', 'X', '÷', '%']
    operationArray.forEach((item) => {
      if (buttonName === item) {
        var newDataO = Operate.operate(total = 5, next = 4, operation = `${item}`);
        dataObject.total = newDataO
        return dataObject
      }
    })
  };
  return { calculate };
})();

export default Calculate;
