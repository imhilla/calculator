import Operate from './operate';

const Calculate = (() => {
  const calculate = (dataObject, buttonName) => {
    // eslint-disable-next-line
    var { total, next, operation } = dataObject;
    const operationArray = ['+', '-', 'X', '÷', '%']
    operationArray.forEach((item) => {
      if (buttonName === item) {
        var newDataO = Operate.operate(total = 5, next = 4, operation = `${item}`);
        dataObject.total = newDataO
        return dataObject
      }
    })

    const newNext = dataObject.next
    let store = []
    store.push(newNext)
    store.join()
    store.push(buttonName)
    store.join()
    dataObject.next = store
    console.log(dataObject.next)

  };
  return { calculate };
})();

export default Calculate;
