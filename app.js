let clocks = [[], [], [], []];
let onlyClockwise = true;
let paused = false;
let lastAnim = 3;
let animationDuration = '3s';
let timeBetweenAnimation = 10000;


init();
function init() {
    for (let digit = 0; digit < 4; digit++) {
        for (let i = 0; i < 6; i++) {
            clocks[digit].push(new Clock(`clock-cont-${digit}`))
        }
    }

    document.querySelectorAll('.clock').forEach(hour => hour.addEventListener('click', rotateBy5, false));

    document.addEventListener("visibilitychange", function () {
        if (document.hidden) {
            paused = true;
        } else {
            if (paused) {
                paused = false;
                start();
            }
        }
    });


    setTimeout(() => {
        start()
    }, 0);
}



function start() {
    let root = document.documentElement;
    root.style.setProperty('--anim-duration', animationDuration);
    showTime()
}

function showTime() {
    if (paused) return;
    let date = new Date();
    let min = date.getMinutes(), hr = date.getHours();
    console.log(`Time: hr: ${hr}: min: ${min}`);
    animate(NUMBERS[`${Math.floor(hr / 10)}`], 0);
    animate(NUMBERS[`${(hr % 10)}`], 1);
    animate(NUMBERS[`${Math.floor(min / 10)}`], 2);
    animate(NUMBERS[`${(min % 10)}`], 3);

    setTimeout(() => {
        showAnimation(getNextAnimation())
    }, timeBetweenAnimation);
}

function showAnimation(index, showTimeNext, shouldDelay) {
    if (paused) return;
    const animation = ANIMATIONS[index];
    console.log(`showing animation ${index} with delay ${shouldDelay}`)
    if (shouldDelay) {
        animate(animation[0], 0);
        setTimeout(() => { animate(animation[1], 1); }, 200);
        setTimeout(() => { animate(animation[2], 2); }, 400);
        setTimeout(() => { animate(animation[3], 3); }, 600);
    } else {
        animation.forEach((anim, digit) => {
            animate(anim, digit)
        });
    }

    setTimeout(() => {
        if (showTimeNext) {
            showTime()
        } else {
            let shouldAddDelay = Math.random() < 0.5;
            showAnimation(getNextAnimation(), true, shouldAddDelay)
        }
    }, timeBetweenAnimation);
}

function animate(anim, digit) {
    for (var i = 0; i < anim.length; i++) {
        clocks[digit][i].rotate(anim[i]);
    }
}

function getNextAnimation() {
    let animation = lastAnim + 1;
    if (animation >= ANIMATIONS.length) animation = 0;
    lastAnim = animation;
    return animation;
}


function rotateBy5(event) {
    let hand, rotateBy = 45;
    if (event.ctrlKey) {
        hand = this.querySelector('.hour');
    } else {
        hand = this.querySelector('.min');
    }
    if (event.shiftKey) rotateBy = 5;
    if (event.altKey) rotateBy = -5;
    var angle = getAngle(hand)
    hand.style.transform = `rotate(${(angle + rotateBy)}deg)`
}

function getAngle(ele) {
    let tm = getComputedStyle(ele).transform;
    var values = tm.split('(')[1].split(')')[0].split(',');
    var angle = Math.round(Math.atan2(values[1], values[0]) * (180 / Math.PI));
    angle = (angle < 0 ? angle + 360 : angle);
    return angle;
}



// clocks[0].map(c=>{
//     return {hour:getAngle(c.hour), min:getAngle(c.min)}
// })