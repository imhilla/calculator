import { number } from 'prop-types';
import Operate from './operate';

const Calculate = (() => {
  const calculate = (dataObject, buttonName) => {
    // eslint-disable-next-line
    var { total, next, operation } = dataObject;
    let numberOne;
    let numberTwo;
    const newNext = dataObject.next;
    const store = [];
    store.push(newNext);
    store.join();
    store.push(buttonName);
    store.join();
    dataObject.next = store;
    const operationArray = ['+', '-', 'X', '÷', '%', '='];
    operationArray.forEach(item => {
      if (buttonName === item) {
        numberOne = dataObject.next;
        numberOne = numberOne.join().replace(/,/g, '');
        numberOne = numberOne.slice(0, -1);
        if (buttonName == '=' || numberOne.includes('+') || numberOne.includes('-')
          || numberOne.includes('X') || numberOne.includes('÷') || numberOne.includes('%')) {
          const splited = numberOne.split('');
          splited.forEach((match, index) => {
            if (match === 'X' || match === '+' || match === '-' || match === '÷' || match === '%') {
              let newNoOne = splited.slice(0, index).join('');
              let newNoTwo = splited.slice(index + 1).join('');
              let operation = splited.slice(index, index + 1);
              operation = operation[0];
              newNoOne = parseInt(newNoOne);
              newNoTwo = parseInt(newNoTwo);
              // remember item === next symbol
              const newDataO = Operate.operate(newNoOne, newNoTwo, operation);
              dataObject.total = newDataO;
              if (buttonName !== '=') {
                dataObject.next = `${newDataO}${item}`;
              } else {
                dataObject.next = newDataO;
              }
              return dataObject;
            }
          });
        }
      }
    });
    if (buttonName === 'AC') {
      dataObject.next = null;
      window.location.reload();
    }
  };

  return { calculate };
})();

export default Calculate;
