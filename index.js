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

const createEmployeeRecord = function(arr) {
  let a = 'closure?'
  return {
    firstName: arr[0],
    familyName: arr[1],
    title: arr[2],
    payPerHour: arr[3],
    timeInEvents: [],
    timeOutEvents: []
  }
}

const createEmployeeRecords = function(arr) {
  // ARGS:
  // Array of Employee Arrays

  // PROCESSING:
  // For each element of outer array => create an employee
  
  

  // RETURNS:
  // Array of Employee Objects 
  return arr.map(createEmployeeRecord)
}

const createTimeInEvent = function(timestamp) {
  this.timeInEvents.push({
    type: "TimeIn",
    date: timestamp.split(" ")[0],
    hour: parseInt(timestamp.split(" ")[1], 10)
  })
  return this
}

const createTimeOutEvent = function(timestamp) {
  this.timeOutEvents.push({
    type: "TimeOut",
    date: timestamp.split(" ")[0],
    hour: parseInt(timestamp.split(" ")[1], 10)
  })
  return this
}

const hoursWorkedOnDate = function(date) {
  // ARGS:
  // a date : "44-03-15"
  
  // PROCESSING:
  const inHour = this.timeInEvents.find(e => e.date === date).hour
  const outHour = this.timeOutEvents.find(e => e.date === date).hour

  // RETURNS:
  // Total hours worked on date
  return (outHour - inHour) * .01
}

const wagesEarnedOnDate = function(date) {
  // ARGS:
  // date : "44-03-15"

  // PROCESSING:
  const rate = this.payPerHour
  const hours = hoursWorkedOnDate.call(this, date)

  // RETURNS:
  // total amount of wages on given date
  return rate * hours
}

const findEmployeeByFirstName = function(emps, name) {
  return emps.find(e => e.firstName === name)
}

const calculatePayroll = function(emps) {
  // ARGS:
  // Array of Employee Records

  // PROCESSING:
  // make an array of all the days and map to:
  // make an array of all wages earned per day
  // then reduce that to return from function
  const wages = emps.map(e=>allWagesFor.call(e))
  // => [1260, 1155, 2550, 240, 4875, 1800]

  // RETURN:
  // Pay Owed For All Dates (one amount)
  return wages.reduce((e, total) => e + total)
}