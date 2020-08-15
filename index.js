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

const createEmployeeRecord = (arr) => {
    const emp = {
        firstName: arr[0],
        familyName: arr[1],
        title: arr[2],
        payPerHour: arr[3],
        timeInEvents: [],
        timeOutEvents: []
    };
    return emp
}

const createEmployeeRecords = (arr) => {
    return arr.map(createEmployeeRecord) //Returns an array of objects
}

let createTimeInEvent = function (dateTime) {
    const dateTimeArr = dateTime.split(" ");
    const newEvent = {
        type: "TimeIn",
        date: dateTimeArr[0],
        hour: parseInt(dateTimeArr[1], 10)
    };
    this.timeInEvents.push(newEvent);
    return this
}

let createTimeOutEvent = function (dateTime) {
    const dateTimeArr = dateTime.split(" ");
    const newEvent = {
        type: "TimeOut",
        date: dateTimeArr[0],
        hour: parseInt(dateTimeArr[1], 10)
    };
    this.timeOutEvents.push(newEvent);
    return this
}

const hoursWorkedOnDate = function(date) {
    const timeInEvent = this.timeInEvents.find(event => event.date === date);
    const timeOutEvent = this.timeOutEvents.find(event => event.date === date);
    return ((timeOutEvent.hour - timeInEvent.hour) / 100)
}

const wagesEarnedOnDate = function(date) {
    return (this.payPerHour * (hoursWorkedOnDate.call(this, date)))
}

const calculatePayroll = (empArr) => {
    const wagesArr = empArr.map(record => allWagesFor.call(record));
    const reducer = (accumulator, currentValue) => accumulator + currentValue;
    return wagesArr.reduce(reducer)
}

const findEmployeeByFirstName = (emps, name) => {
    return emps.find(record => record.firstName === name)
}