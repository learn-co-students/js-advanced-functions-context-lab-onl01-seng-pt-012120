/* Your Code Here */

/*
 We're giving you this function. Take a look at it, you might see some usage
 that's new and different. That's because we're avoiding a well-known, but
 sneaky bug that we'll cover in the next few lessons!

 As a result, the lessons for this function will pass *and* it will be available
 for you to use if you need it!
 */
 let createEmployeeRecord = function(arr){
   return {
    firstName: arr[0],
    familyName: arr[1],
    title: arr[2],
    payPerHour : arr[3],
    timeInEvents: [],
    timeOutEvents: []
  }
 }

let createEmployeeRecords = function(arr) {
  return arr.map(createEmployeeRecord)
}

let createTimeInEvent =  function(dateTime) {
  let hour = parseInt(dateTime.split(" ")[1]);
  let date = dateTime.split(" ")[0];
  this.timeInEvents.push({
    type: "TimeIn",
    hour: hour,
    date: date
  })
  return this;
}

let createTimeOutEvent = function(dateTime) {
  let hour = parseInt(dateTime.split(" ")[1]);
  let date = dateTime.split(" ")[0];
  this.timeOutEvents.push({
    type: "TimeOut",
    hour: hour,
    date: date
  })
  return this;
}

let hoursWorkedOnDate = function(date) {
  const timeIn = this.timeInEvents.find((e) => e.date === date ).hour
  const timeOut = this.timeOutEvents.find((e) => e.date === date ).hour
  return (timeOut - timeIn)/100
}

let wagesEarnedOnDate = function(date) {
  const workedHours = hoursWorkedOnDate.call(this, date);
  const payRate = this.payPerHour;
  return workedHours * payRate;
}

let allWagesFor = function () {
    let eligibleDates = this.timeInEvents.map(function (e) {
        return e.date
    })

    let payable = eligibleDates.reduce(function (memo, d) {
        return memo + wagesEarnedOnDate.call(this, d)
    }.bind(this), 0) // <== Hm, why did we need to add bind() there? We'll discuss soon!

    return payable
}

let findEmployeeByFirstName = function(arr, firstName) {
  return arr.find((e) => e.firstName === firstName )
}

function calculatePayroll(employees) {
    return employees.map(employee => allWagesFor.call(employee)).reduce((total, i) => total + i, 0);
}
