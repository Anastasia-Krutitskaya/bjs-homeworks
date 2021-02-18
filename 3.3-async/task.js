class AlarmClock {
    constructor(id) {
        this.alarmCollection = [];
        this.timerId = null
    }

    addClock(t, fn, id) {
        if (!id) {
            throw new Error('Параметр id не передан')
        }
        const findResult = this.alarmCollection.find(alarm => alarm.id === id);
        if (findResult) {
            console.error('Будильник с таким id уже существует')
            return this.alarmCollection
        }
        const alarm = {
            id: id,
            time: t,
            callback: fn
        }
        this.alarmCollection.push(alarm);
        return this.alarmCollection
    }
    
    removeClock(id) {
        const position = this.alarmCollection.findIndex(element => {
            if (element.id === id) {
               return true
            }
         });
        if ( position > -1 ) {
            this.alarmCollection.splice(position,1);
            return true
        } else {
            return false
        }
    }

    getCurrentFormattedTime() {
        const date = new Date;
        let h = date.getHours();
        let m = date.getMinutes();
        if (h < 10) {
            h = `0${h}`
        }
        if (m < 10) {
            m = `0${m}`
        }
        return `${h}:${m}`;
    }

    checkClock(alarm) {
        if (alarm.time === this.getCurrentFormattedTime()) {
            alarm.callback()
        }
    }

    start() {
        const func = () => {
            this.alarmCollection.forEach(alarm => this.checkClock(alarm));
        };
        if (!this.timerId) {
            this.timerId = setInterval(func,1000);
        }
    }

    stop() {
        if (this.timerId) {
            clearTimeout(this.timerId);
            this.timerId = null
        }
    }

    printAlarms() {
        this.alarmCollection.forEach(alarm => { console.log(`Будильник №${alarm.id} заведен на ${alarm.time}`) })
    }

    clearAlarms() {
        clearTimeout(this.timerId);
        this.alarmCollection = []
    }
}

function testCase() {
    const phoneAlarm = new AlarmClock;
    phoneAlarm.addClock('7:00', () => console.log("Get up!"), 1);
    // phoneAlarm.addClock('7:00', () => console.log("Get up!"), );
    phoneAlarm.addClock('7:01', () => { console.log("YOU! Get up!"); phoneAlarm.removeClock(2)}, 2);
    phoneAlarm.addClock('7:02', () => { 
        console.log("Will you get up?"); 
        phoneAlarm.stop();
        phoneAlarm.clearAlarms();
        phoneAlarm.printAlarms()}, 3);
    // phoneAlarm.addClock('7:05', () => console.log("Get up finaly!"), 1);    
    phoneAlarm.printAlarms();
    phoneAlarm.start();
}

testCase();