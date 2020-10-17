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
    const operationArray = ['+', '-', 'X', '÷', '%', '=']
    operationArray.forEach((item) => {
      if (buttonName === item) {
        numberOne = dataObject.next
        numberOne = numberOne.join().replace(/,/g, '')
        numberOne = numberOne.slice(0, -1);
        if (buttonName == '=' || numberOne.includes('+') || numberOne.includes('-') ||
          numberOne.includes('X') || numberOne.includes('÷') || numberOne.includes('%')) {
          var splited = numberOne.split("")
          splited.forEach((match, index) => {
            if (match === 'X' || match === '+' || match === '-' || match === '÷' || match === '%') {
              var newNoOne = splited.slice(0, index).join('')
              var newNoTwo = splited.slice(index + 1).join('')
              var operation = splited.slice(index, index + 1)
              operation = operation[0]
              newNoOne = parseInt(newNoOne)
              newNoTwo = parseInt(newNoTwo)
              //remember item === next symbol
              var newDataO = Operate.operate(newNoOne, newNoTwo, operation);
              console.log(newDataO)
              dataObject.total = newDataO
              if (buttonName !== '=') {
                dataObject.next = newDataO + `${item}`
                // console.log(dataObject.total)
              }
              return dataObject
            }
          })

        };
      }
    })
  }


  return { calculate };
})();

export default Calculate;
