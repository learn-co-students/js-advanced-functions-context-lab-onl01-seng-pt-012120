/* Your Code Here */

function createEmployeeRecord (array){
    let Employee = {};
    Employee.firstName = array[0];
    Employee.familyName = array[1];
    Employee.title = array[2];
    Employee.payPerHour = array[3];
    Employee.timeInEvents = [];
    Employee.timeOutEvents = []
    return Employee
}
function createEmployeeRecords(array){
    const map = array.map(employee => createEmployeeRecord(employee));
    return map
  }
  
  function createTimeInEvent(dateStamp){
    let dateArray = dateStamp.split(" ")
    let event = {}
    event.type = "TimeIn";
    event.hour = parseInt(dateArray[1], 10);
    event.date = dateArray[0]
    this.timeInEvents.push(event);

    return this
}

function createTimeOutEvent(dateStamp) {
    let dateArray = dateStamp.split(" ")
    let event = {}
    event.type = "TimeOut";
    event.hour = parseInt(dateArray[1], 10);
    event.date = dateArray[0]
    this.timeOutEvents.push(event);

    return this
}

function hoursWorkedOnDate(date) {
    let timeIn = this.timeInEvents.find(d => d.date === date)
    let timeOut = this.timeOutEvents.find(d => d.date === date)
    return (timeOut.hour - timeIn.hour) / 100
}

function wagesEarnedOnDate(date) {
    return hoursWorkedOnDate.call(this, date) * this.payPerHour
}

function calculatePayroll(array) {
    return array.reduce((total, emp) => total + allWagesFor.call(emp), 0)
}

function findEmployeeByFirstName (array, name) {
    return array.find(e => e.firstName === name)
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