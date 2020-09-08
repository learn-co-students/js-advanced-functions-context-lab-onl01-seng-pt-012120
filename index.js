/* Your Code Here */

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

function createEmployeeRecord(employee){
    let emp = {
      firstName: employee[0],
      familyName: employee[1],
      title: employee[2],
      payPerHour: employee[3],
      timeInEvents: [],
      timeOutEvents: []
    };
    return emp;
}

function createEmployeeRecords(array){
    return array.map(employee => createEmployeeRecord(employee))
}

function createTimeInEvent(date){
    let newTime = {
      type: 'TimeIn',
      hour: parseInt(date.split(" ")[1], 10),
      date: date.split(" ")[0]
    }
    this.timeInEvents.push(newTime)
    return this
}

function createTimeOutEvent(date){
    let newTime = {
      type: 'TimeOut',
      hour: parseInt(date.split(" ")[1], 10),
      date: date.split(" ")[0]
    }
    this.timeOutEvents.push(newTime)
    return this
}

function hoursWorkedOnDate(date) {

    let timeIn = this.timeInEvents.find(function(d) {
        return d.date === date
    })
    let timeOut = this.timeOutEvents.find(function(d){
         return d.date === date
    })
    return (timeOut.hour - timeIn.hour)/100
}

function wagesEarnedOnDate(date) {
    let hours = hoursWorkedOnDate.call(this, date)
    return hours * this.payPerHour
}


function findEmployeeByFirstName(collection, firstNameString) {
    let employee = collection.filter(d => d.firstName === firstNameString)[0]
    return employee
}

function calculatePayroll(employees) {
   return employees.reduce((total, e) => allWagesFor.call(e) + total, 0)
}