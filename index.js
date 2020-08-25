/* Your Code Here */
function createEmployeeRecord(a) {
    return {firstName: a[0], familyName: a[1], title: a[2], payPerHour: a[3], timeInEvents: [], timeOutEvents: []}
}

function createEmployeeRecords(a) {
    return a.map(b => {return createEmployeeRecord(b)})
}

function createTimeInEvent(t) {
    let n = t.split(' ');
    this.timeInEvents = [{type: "TimeIn", date: n[0], hour: parseInt(n[1])}, ...this.timeInEvents];
    return this
}

function createTimeOutEvent(t) {
    let n = t.split(" ");
    this.timeOutEvents = [{type: "TimeOut", date: n[0], hour: parseInt(n[1])}, ...this.timeOutEvents];
    return this
}

function hoursWorkedOnDate(d) {
    let a = this.timeOutEvents.find(x => {return (x.date === d)});
    let b = this.timeInEvents.filter(x => {return (x.date === d)});
    let n = 0;
    let c;
    for (const z of b) {let h = z.hour; if (h > n) {n = h; c = z}}
    return ((a.hour - c.hour) / 100)
}

function wagesEarnedOnDate(d) {
    return this.payPerHour * hoursWorkedOnDate.call(this, d)
}

function calculatePayroll(e) {
    return e.reduce((m, i) => m + allWagesFor.call(i), 0)
}

function findEmployeeByFirstName(a, n) {
    return a.find(e => {return (e.firstName === n)})
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