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
};

function createEmployeeRecord(emplInfo) {
    emplInfo.push([],[]);
    let emplObj = {}, descriptions = ['firstName', 'familyName', 'title', 'payPerHour', 'timeInEvents', 'timeOutEvents'];
    descriptions.forEach((description, index) => {
        emplObj[description] = emplInfo[index]
    });

    return emplObj
};

function createEmployeeRecords(employeesInfo) {
    return employeesInfo.map(emplInfo => createEmployeeRecord.call(this, emplInfo))
};

function timeEvent(dateStamp, type) {
    let eventKeys = ['type','date', 'hour'],
        eventVal = [type],
        timeObj = {};
    eventVal.push(...dateStamp.split(' '))
        eventKeys.forEach((key, index) => {
            timeObj[key] = eventVal[index]
        });

        timeObj.hour = parseInt(timeObj.hour, 10);

        return timeObj;

};

function  createTimeInEvent(dateStamp) {
    let event = timeEvent(dateStamp, 'TimeIn');
    this.timeInEvents.push(event);
    return this
};

function createTimeOutEvent(dateStamp) {
    let event = timeEvent(dateStamp, 'TimeOut');
    this.timeOutEvents.push(event);
    return this
};

function hoursWorkedOnDate(date) {
    let timein = this.timeInEvents.find(obj => obj.date === date).hour;
    let timeout = this.timeOutEvents.find(obj => obj.date === date).hour;
    return (timeout - timein)/100
};

function wagesEarnedOnDate(date) {
    let hours = hoursWorkedOnDate.call(this, date);
    let rate = this.payPerHour;
    return hours * rate;
};

function findEmployeeByFirstName(srcArray, firstName) {
    return srcArray.find(empl => empl.firstName = firstName)
};

function calculatePayroll(emplRecords) {
    return emplRecords.reduce((total, empl) => total + allWagesFor.call(empl), 0)
}