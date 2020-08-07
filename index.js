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

    function createEmployeeRecord(worker){
        let newWorker = []
        newWorker.firstName = worker[0]
        newWorker.familyName = worker[1]
        newWorker.title = worker[2]
        newWorker.payPerHour = worker[3]
        newWorker.timeInEvents = []
        newWorker.timeOutEvents = []
        return newWorker
   
    }

    function createEmployeeRecords(workers){
        let workerList = []
        for (const array of workers){
            let newWorker = createEmployeeRecord(array)
            workerList.push(newWorker)
        }
        return workerList
    }
   
    function createTimeInEvent(timeIn){

        let splitTime = timeIn.split(" ")
        this.timeInEvents.push({
            type: "TimeIn",
            date: splitTime[0],
            hour: parseInt(splitTime[1])
        }
   
        )
        return this
    }
   

 function createTimeOutEvent(timeOut){
    let splitTime = timeOut.split(" ")
    this.timeOutEvents.push({
        type: "TimeOut",
        date: splitTime[0],
        hour: parseInt(splitTime[1])
    }

    )
    return this
}

function hoursWorkedOnDate(date){
    let inEvent = this.timeInEvents.find(function(punch){
        return punch.date === date
    })
    let outEvent = this.timeOutEvents.find(function(punch){
        return punch.date === date
    })
    let hoursWorked = (outEvent.hour - inEvent.hour) / 100
    return hoursWorked
}

function wagesEarnedOnDate(date){
    let hours = hoursWorkedOnDate.call(this, date)
    return hours * this.payPerHour
}

function calculatePayroll(employees){
    let employeeWages = employees.map(function(employee){
        return allWagesFor.call(employee)
    })

    return employeeWages.reduce(function(total, i){
        return total +i
    })
}


function findEmployeeByFirstName(employees, name){
    return employees.find(function(e){ return e.firstName === name})

}
