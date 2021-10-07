import refs from './refs'

const { daysC, hoursC, minsC, secondsC } = refs

class Timer {
  constructor({ targetDate, markup }) {
    this.refs = { daysC, hoursC, minsC, secondsC }
    this.targetDate = targetDate;
    this.deltaTime = 0;
    this.markup = markup;
    
  }

   start() {
   setInterval(() => {
     const currentTime = Date.now()
    //  console.log(currentTime);
     const deltaTime = this.targetDate - currentTime
    //  console.log(this.targetDate);
      const timeComponents = this.getTimeComponents(deltaTime)
        // console.log(timeComponents);
        this.insertValues(timeComponents)
    }, 1000);
  }

   getTimeComponents(time) {
    const days = this.pad(Math.floor(time / (1000 * 60 * 60 * 24)))
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

const timer = new Timer({

  targetDate: new Date(`jan 1, 2022`),
 
});
// Timer.start()
timer.start()


