const hourHand = document.getElementById('hour-hand');
const minuteHand = document.getElementById('minute-hand');
const secondHand = document.getElementById('second-hand');
const degree = 360;
const totalHours = 12;
const totalMinutesAndSecond = 60;
const minusDegree = -90;
const secondToMilliSeconds = 1000;



function tik(){
    let date = new Date();
    hours = date.getHours();
    minutes = date.getMinutes();
    seconds = date.getSeconds();
    hours = hours > 12 ? hours -12 : hours == 0 ? 12 : hours;

    hours = ((degree/totalHours) * hours) + minusDegree;
    minutes = ((degree/totalMinutesAndSecond) * minutes) + minusDegree;
    seconds = ((degree/totalMinutesAndSecond) * seconds) + minusDegree;

    hourHand.style.transform = 'rotate(' + hours + 'deg)';
    minuteHand.style.transform = 'rotate(' + minutes +'deg)';
    secondHand.style.transform = 'rotate(' + seconds +'deg)';
}
setInterval(tik,secondToMilliSeconds);