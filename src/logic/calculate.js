import Operate from './operate';

const Calculate = (() => {
  const calculate = (dataObject, buttonName) => {
    // eslint-disable-next-line
    var { total, next, operation } = dataObject;
    const operationArray = ['+', '-', 'X', '÷', '%']
    console.log(dataObject)
    operationArray.forEach((item) => {
      if (buttonName === item) {
        const newDataO = Operate.operate(total=5, next=4, operation = `${item}`);
        console.log(newDataO)
        return newDataO
      } 
    })
  };
  return { calculate };
})();

export default Calculate;
