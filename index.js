function createEmployeeRecord(array) {
    return {
        firstName: array[0],
        familyName: array[1],
        title: array[2],
        payPerHour: array[3],
        timeInEvents: [],
        timeOutEvents: []
    }
};

function createEmployeeRecords(employees) {
    return employees.map(x => createEmployeeRecord(x))
};

function createTimeInEvent(dateTime) {
    let dateArray = dateTime.split(' ')
    this.timeInEvents.push({
        type: 'TimeIn',
        hour: parseInt(dateArray[1], 10),
        date: dateArray[0]
    })
    return this
};

function createTimeOutEvent(dateTime) {
    let dateArray = dateTime.split(' ')
    this.timeOutEvents.push({
        type: 'TimeOut',
        hour: parseInt(dateArray[1], 10),
        date: dateArray[0]
    })
    return this
};

function hoursWorkedOnDate(dateTime) {
    let timeIn = this.timeInEvents.filter(x => x.date == dateTime)
    let timeOut = this.timeOutEvents.filter(x => x.date == dateTime)
    return (timeOut[0].hour/100) - (timeIn[0].hour/100) 
};

function wagesEarnedOnDate(dateTime) {
    return hoursWorkedOnDate.call(this, dateTime) * this.payPerHour
};

function calculatePayroll(records) {
    return records.reduce(function(allValues, value) {
        return allValues + allWagesFor.call(value)
    }, 0)
};

function findEmployeeByFirstName(records, name) {
    let employee = records.find(x => x.firstName == name)
    return employee
};
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