import { number } from 'prop-types';
import Operate from './operate';

const Calculate = (() => {
  const calculate = (dataObject, buttonName) => {
    // eslint-disable-next-line
    var { total, next, operation } = dataObject;
    let numberOne
    let numberTwo
    // if (buttonName !== '+' && buttonName !== '-' && buttonName !== 'X' && buttonName !== '÷' && buttonName !== '%') {
    const newNext = dataObject.next
    let store = []
    store.push(newNext)
    store.join()
    store.push(buttonName)
    store.join()
    dataObject.next = store
    // }
    const operationArray = ['+', '-', 'X', '÷', '%']
    operationArray.forEach((item) => {
      if (buttonName === item) {
        numberOne = dataObject.next
        numberOne = numberOne.join().replace(/,/g, '')
        numberOne = numberOne.slice(0, -1);
        var newDataO = Operate.operate(total = numberOne, numberTwo = 4, operation = `${item}`);
        dataObject.total = newDataO
        return dataObject
      }
    })

  };
  return { calculate };
})();

export default Calculate;
