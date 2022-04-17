
 // Your code here

function createEmployeeRecord(array) {
  // console.log(array)
  let object = {
      firstName: array[0],
      familyName: array[1],
      title: array[2],
      payPerHour: array[3],
      timeInEvents: [],
      timeOutEvents: [],

  }
  return object
}

function createEmployeeRecords(array) {
  // console.log(array)
  return array.map(element => createEmployeeRecord(element))
}

function createTimeInEvent(object, date) {
  // console.log("hi", object, date)
  let timeInObject = {
      type: "TimeIn",
      hour: parseInt(date.split(` `)[1]),
      date: date.split(` `)[0],
  }
  object.timeInEvents.push(timeInObject)
  return object
}

function createTimeOutEvent(object, date) {
  // console.log("bye", object, date)
  let timeOutObject = {
      type: "TimeOut",
      hour: parseInt(date.split(` `)[1]),
      date: date.split(` `)[0],
  }
  object.timeOutEvents.push(timeOutObject)
  return object
}

function hoursWorkedOnDate(object, date) {
  const timeIn = object.timeInEvents.find(element => element.date === date)
  console.log("time in", timeIn)
  const timeOut = object.timeOutEvents.find(element => element.date === date)
  return (timeOut.hour - timeIn.hour) / 100
}

function wagesEarnedOnDate(object, date) {
  const timeIn = object.timeInEvents.find(element => element.date === date)
  const timeOut = object.timeOutEvents.find(element => element.date === date)
  return (timeOut.hour - timeIn.hour) / 100 * object.payPerHour
}

function allWagesFor(object) {
  let allWages = object.timeInEvents.map(element => wagesEarnedOnDate(object, element.date))
  console.log("wages", allWages)
  let total = 0
  allWages.forEach(element => total = element + total)
  return total
}
function calculatePayroll(array){
   let sum =  array.reduce((memo, rec) => {
       return(memo + allWagesFor(rec))

    }, 0)
  return sum

}