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

const createEmployeeRecord = (empA) => {
    return {
        firstName: empA[0],
        familyName: empA[1],
        title: empA[2],
        payPerHour: empA[3],
        timeInEvents: [],
        timeOutEvents: []
    }
};

const createEmployeeRecords = (arrEmp) =>{
    return arrEmp.map(emp=>{return createEmployeeRecord(emp)});
};

function createTimeInEvent(eventDate) {
    let d = eventDate.split(' ')[0];
    let h = eventDate.split(' ')[1];
    let event = {
        type: 'TimeIn',
        hour: parseInt(h),
        date: d
    };
    this.timeInEvents.push(event);
    return this;
};

function createTimeOutEvent(eventDate) {
    let d = eventDate.split(' ')[0];
    let h = eventDate.split(' ')[1];
    let event = {
        type: 'TimeOut',
        hour: parseInt(h),
        date: d
    };
    this.timeOutEvents.push(event);
    return this;
};

function hoursWorkedOnDate(date){
    let hourStart = this.timeInEvents.find(event => {
        if (event.date === date) {
            return event;
        };
    });
    let hourFinish = this.timeOutEvents.find(event => {
        if (event.date === date) {
            return event;
        }
    });
    return (hourFinish.hour / 100 - hourStart.hour / 100);
};

function wagesEarnedOnDate(clockDate){
    let wages = hoursWorkedOnDate.call(this,clockDate) * this.payPerHour;
    return wages;
};

const findEmployeeByFirstName = function(srcArray,firstName){
    return srcArray.find(emp=>{
        if (emp.firstName === firstName) {
            return emp;
        };
    });
};