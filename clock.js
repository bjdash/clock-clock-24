class Clock {
    hour;
    min;
    constructor(parent) {
        this.hour = document.createElement('div');
        this.hour.classList.add('hour');
        this.hour.style.transform = 'rotate(0deg)';
        this.min = document.createElement('div');
        this.min.classList.add('min');
        this.min.style.transform = 'rotate(0deg)';

        let dot = document.createElement('div');
        dot.classList.add('dot');
        let clock = document.createElement('div');
        clock.classList.add('clock');
        clock.appendChild(dot);
        clock.appendChild(this.hour);
        clock.appendChild(this.min);
        document.getElementById(parent).appendChild(clock)
    }

    rotate(to) {
        let { hour, min } = to;
        if (onlyClockwise) {
            let hourAngle = this.getAngle(this.hour);
            let minAngle = this.getAngle(this.min);
            if (hourAngle > hour) {
                hour = hourAngle + 360 - (hourAngle % 360) + hour;
                min = minAngle + 360 - (minAngle % 360) + min;
            }
        }
        this.hour.style.transform = `rotate(${hour}deg)`
        this.min.style.transform = `rotate(${min}deg)`
    }

    getAngle(ele) {
        return parseInt(ele.style.transform.replace('rotate(', '').replace('deg)', ''))
    }
}