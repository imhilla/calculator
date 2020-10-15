import Operate from './operate'

const Calculate = (() => {

  const calculate = (dataObject, buttonName) => {
    let total = dataObject.total
    let next = dataObject.next
    let operation = dataObject.operation
    if (buttonName === operation) {
      total = Operate.operate(total, next, buttonName)
    }
    dataObject.total = total

    return dataObject
  }
  return calculate
})();

export default Calculate;