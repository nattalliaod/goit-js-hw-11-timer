// import refs from './refs'

class CountdownTimer {
    constructor({ targetDate, selector }) {
      this.selector = selector
      this.targetDate = targetDate
      this.refs = this._getRefs(selector)
    
      this.start()
  }
  _getRefs(root) {
    const refs = {}
     refs.daysC = document.querySelector(`${root} [data-value="days"]`),
     refs.hoursC = document.querySelector(`${root} [data-value="hours"]`),
     refs.minsC = document.querySelector(`${root} [data-value="mins"]`),
     refs.secondsC = document.querySelector(`${root} [data-value="secs"]`)
       return refs
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



