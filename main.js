// JavaScript to update current time in UTC and current day
function updateTimeAndDay() {
    const now = new Date();
    const utcTime = now.toUTCString().split(" ")[4];
    const currentDay = now.toLocaleDateString('en-US', { weekday: 'long' });

    document.querySelector('[data-testid="currentTimeUTC"]').textContent = utcTime;
    document.querySelector('[data-testid="currentDay"]').textContent = currentDay;
}

setInterval(updateTimeAndDay, 1000);
updateTimeAndDay();
