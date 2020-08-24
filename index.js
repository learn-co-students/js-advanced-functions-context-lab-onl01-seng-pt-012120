/* Your Code Here */



let createEmployeeRecord = function(array){
    return {
        firstName: array[0],
        familyName: array[1],
        title: array[2],
        payPerHour: array[3],
        timeInEvents: [],
        timeOutEvents: []
    }
}

let createEmployeeRecords = function(employeeArrayData) {
    return employeeArrayData.map(function(array) {
        return createEmployeeRecord(array)
    })
}

let createTimeInEvent = function(dateTime) {
    let [date, hour] = dateTime.split(' ')
    this.timeInEvents.push({
        type: 'TimeIn',
        hour: parseInt(hour, 10),
        date,
    })
    return this
}

let createTimeOutEvent = function(dateTime) {
    let [date, hour] = dateTime.split(' ')
    this.timeOutEvents.push({
        type: 'TimeOut',
        hour: parseInt(hour, 10),
        date,
    })

    return this
}

function hoursWorkedOnDate(date) {
    const timeIn = this.timeInEvents.find(event => event.date === date);
    const timeOut = this.timeOutEvents.find(event => event.date === date);
    return (timeOut.hour -timeIn.hour)/100;
}

function wagesEarnedOnDate(date) {
    return hoursWorkedOnDate.call(this, date) * this.payPerHour
  }


function findEmployeeByFirstName(array, name) {
    return array.find(element => element.firstName === name)
  }

  function calculatePayroll(array) {
    return array.reduce((total, employee) => total += employee.timeOutEvents.reduce((total, event) => (total += wagesEarnedOnDate.call(employee, event.date)), 0), 0)
  }
/*
 We're giving you this function. Take a look at it, you might see some usage
 that's new and different. That's because we're avoiding a well-known, but
 sneaky bug that we'll cover in the next few lessons!

 As a result, the lessons for this function will pass *and* it will be available
 for you to use if you need it!
 */

let allWagesFor = function () {
    let eligibleDates = this.timeInEvents.map(function (e) {
        return e.date
    })

    let payable = eligibleDates.reduce(function (memo, d) {
        return memo + wagesEarnedOnDate.call(this, d)
    }.bind(this), 0) // <== Hm, why did we need to add bind() there? We'll discuss soon!

    return payable
}