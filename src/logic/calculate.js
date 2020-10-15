const Calculate = (() => {

  const calculate = (dataObject, buttonName) => {
    let total = dataObject.total
    let next = dataObject.next
    let operation = dataObject.operation
    if (buttonName === "X") {
      total = total * next
    } else if (buttonName === "-") {
      total = total - next
    } else if (buttonName === "÷") {
      total = total / next
    } else if (buttonName === "%") {
      total = total / 100
    }
    return dataObject
  }
  return { calculate }
})();

export default Calculate;