let createEmployeeRecord = function(row) {
    return {
        firstName: row[0],
        familyName: row[1],
        title: row[2],
        payPerHour: row[3],
        timeInEvents: [],
        timeOutEvents: []
    }
}

let createEmployeeRecords = function(employeeData) {
    return employeeData.map(function(row) {
        return createEmployeeRecord(row)
    }) 
}


let createTimeInEvent = function(stamp) {
    let [date, hour] = stamp.split(' ')

    this.timeInEvents.push({
        type: "TimeIn",
        hour: parseInt(hour, 10),
        date,
    })

    return this
}

let createTimeOutEvent = function(stamp) {
    let [date, hour] = stamp.split(' ')

    this.timeOutEvents.push({
        type: "TimeOut",
        hour: parseInt(hour, 10),
        date,
    })

    return this
}

let hoursWorkedOnDate = function(formDate) {
    let clockedIn = this.timeInEvents.find(function(e){
        return e.date === formDate
    })

    let clockedOut = this.timeOutEvents.find(function(e){
        return e.date === formDate
    })

    return (clockedOut.hour - clockedIn.hour) / 100
}

let wagesEarnedOnDate = function(formDate) {
    let totalPay = hoursWorkedOnDate.call(this, formDate) * this.payPerHour
    return parseFloat(totalPay.toString())
}

let calculatePayroll = function(employeeArr) {
    let allEmployees = employeeArr.reduce(function(employee, day) {
        return employee + allWagesFor.call(day)
    },0)

    return allEmployees
}

let findEmployeeByFirstName = function(srcArray, firstName) {
    return srcArray.find(function(employee){
        return employee.firstName === firstName
    })
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


