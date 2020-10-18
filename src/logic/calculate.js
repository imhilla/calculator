import Operate from './operate';

const Calculate = (() => {
  const calculate = (dataObject, buttonName) => {
    // eslint-disable-next-line
    let numberOne;
    const newNext = dataObject.next;
    const store = [];
    store.push(newNext);
    store.join();
    store.push(buttonName);
    store.join();
    const clonedDataO = dataObject;
    clonedDataO.next = store;
    const operationArray = ['+', '-', 'X', '÷', '%', '='];
    operationArray.forEach(item => {
      if (buttonName === item) {
        numberOne = dataObject.next;
        numberOne = numberOne.join().replace(/,/g, '');
        numberOne = numberOne.slice(0, -1);
        if (buttonName === '=' || numberOne.includes('+') || numberOne.includes('-')
          || numberOne.includes('X') || numberOne.includes('÷') || numberOne.includes('%')) {
          const splited = numberOne.split('');
          splited.forEach((match, index) => {
            if (match === 'X' || match === '+' || match === '-' || match === '÷' || match === '%') {
              let newNoOne = splited.slice(0, index).join('');
              let newNoTwo = splited.slice(index + 1).join('');
              let operation = splited.slice(index, index + 1);
              // eslint-disable-next-line
              operation = operation[0];
              newNoOne = parseInt(newNoOne, 10);
              newNoTwo = parseInt(newNoTwo, 10);
              const newDataO = Operate.operate(newNoOne, newNoTwo, operation);
              clonedDataO.total = newDataO;
              if (buttonName !== '=') {
                clonedDataO.next = `${newDataO}${item}`;
              } else {
                clonedDataO.next = newDataO;
              }
              return dataObject;
            }
            return dataObject;
          });
        }
      }
    });
    if (buttonName === 'AC') {
      clonedDataO.next = null;
      window.location.reload();
    }
    if (buttonName === '+/-') {
      let myResult = dataObject.result;
      myResult = (myResult.join().replace(/,/g, '')) * (-1);
      const clonned = dataObject;
      clonned.next = myResult;
    }
  };

  return { calculate };
})();

export default Calculate;
