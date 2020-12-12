const initCommingSoon = () => {
    const endData = new Date('Jan 1 2021 00:00:00');

    const daysElem = document.querySelector('.js-timer-days');
    const hourElem = document.querySelector('.js-timer-hour');
    const minutesElem = document.querySelector('.js-timer-minutes');
    const secondsElem = document.querySelector('.js-timer-seconds');

    const daysText = document.querySelector('.js-timer-days-text');
    const hourText = document.querySelector('.js-timer-hour-text');
    const minutesText = document.querySelector('.js-timer-minutes-text');
    const secondsText = document.querySelector('.js-timer-seconds-text');

    const declOfNum = (number, titles) => {
        let cases = [2, 0, 1, 1, 1, 2];
        return titles[(number % 100 > 4 && number % 100 < 20) ? 2 : cases[(number % 10 < 5) ? number % 10 : 5]];
    }

    const timeCounter = () => {
        const now = new Date();
        const leftUntil = endData - now;

        const daysMillisecond = Math.floor(leftUntil / 1000 / 60 / 60 / 24);
        const hoursMillisecond = Math.floor(leftUntil / 1000 / 60 / 60) % 24;
        const minutesMillisecond = Math.floor(leftUntil / 1000 / 60) % 60;
        const secondsMillisecond = Math.floor(leftUntil / 1000) % 60;

        const days = daysMillisecond < 10 ? '0' + daysMillisecond : daysMillisecond;
        const hours = hoursMillisecond < 10 ? '0' + hoursMillisecond : hoursMillisecond;
        const minutes = minutesMillisecond < 10 ? '0' + minutesMillisecond : minutesMillisecond;
        const seconds = secondsMillisecond < 10 ? '0' + secondsMillisecond : secondsMillisecond;

        daysElem.textContent = days;
        hourElem.textContent = hours;
        minutesElem.textContent = minutes;
        secondsElem.textContent = seconds;

        daysText.textContent = declOfNum(days, ['день', 'дня', 'днів']);
        hourText.textContent = declOfNum(hours, ['година', 'години', 'годин']);
        minutesText.textContent = declOfNum(minutes, ['хвилина', 'хвилини', 'хвилин']);
        secondsText.textContent = declOfNum(seconds, ['секунда', 'секунди', 'секунд']);
    }

    timeCounter();
    setInterval(function() {
        timeCounter();
    }, 1000)    
}


export { initCommingSoon }