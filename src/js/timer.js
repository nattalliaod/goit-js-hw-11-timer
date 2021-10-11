import refs from './refs'

class CountdownTimer {
    constructor({ targetDate, selector }) {
        const { daysC, hoursC, minsC, secondsC } = refs
        this.selector = selector;
        this.refs = { daysC, hoursC, minsC, secondsC }
        this.targetDate = targetDate;
    
        this.start()
    }

    start() {
    setInterval(() => {
      const deltaTime = this.targetDate - Date.now()
        // const timeComponents = this.getTimeComponents(deltaTime)
        // console.log(timeComponents);
        this.insertValues(this.getTimeComponents(deltaTime))
    }, 1000);
  }

    getTimeComponents(time) {
        const days = this.pad(Math.floor(time / (1000 * 60 * 60 * 24)));
      const hours = this.pad(Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)));
      const mins = this.pad(Math.floor((time % (1000 * 60 * 60)) / (1000 * 60)));
      const seconds = this.pad(Math.floor((time % (1000 * 60)) / 1000));

       return { days,hours, mins, seconds };
  }

    pad(value) {
      return String(value).padStart(2, '0');
  }

    insertValues({ days, hours, mins, seconds }) {
      this.refs.daysC.innerHTML = days;
      this.refs.hoursC.innerHTML = hours;
      this.refs.minsC.innerHTML = mins;
      this.refs.secondsC.innerHTML = seconds;
}
}

const timer = new CountdownTimer({

    selector: '#timer-1',
    targetDate: new Date('Jan 1, 2022'),
});



