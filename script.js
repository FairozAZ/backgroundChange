// local time
const time = document.querySelector('.time');
const showAmPm = true;

function showTime(){
    let today = new Date(),
        hour = today.getHours(),
        min = today.getMinutes(),
        sec = today.getSeconds();

    const am_pm = hour >= 12 ? 'PM' : 'AM';

    hour = hour % 12 || 12;

    time.innerHTML = `${addZero(hour)}<span>:</span>${addZero(min)}<span>:</span>${addZero(sec)} ${showAmPm ? am_pm : ''}`;

    setTimeout(showTime, 1000);
}

function addZero(n){
    return (parseInt(n, 10) < 10 ? '0' : '') + n;
}

showTime();
        

// backgroundImage set
const container = document.querySelector('.container');
const greeting = document.querySelector('.greeting');

function setBackgroundGreet(){
    let today = new Date(),
    // let today = new Date(2023, 5, 14, 21, 33, 30),
        hour = today.getHours();

    if(hour > 5 && hour < 12){
        container.style.backgroundImage = 'url(./morning.jpg)';
        greeting.textContent = 'Good Morning';
    } else if(hour > 11 && hour < 19){
        container.style.backgroundImage = 'url(./afternoon.jpg)';
        greeting.textContent = 'Good Afternoon';
    } else if(hour > 18 && hour < 21){
        container.style.backgroundImage = 'url(./evening.jpg)';
        greeting.textContent = 'Good Evening';
    }
    else {
        container.style.backgroundImage = 'url(./night.jpg)';
        greeting.textContent = 'Good Night';
        container.style.color = 'yellow';
    }
}

setBackgroundGreet();