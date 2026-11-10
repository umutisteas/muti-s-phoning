// Live Clock
function updateClock() {
    const now = new Date();
    let hours = now.getHours();
    const minutes = String(now.getMinutes()).padStart(2, '0');
    hours = hours % 12 || 12;
    
    document.getElementById('clock').innerText = `${hours}:${minutes}`;
}
setInterval(updateClock, 1000);
updateClock();

// Lock Screen Unlock
document.getElementById('lockScreen').addEventListener('click', () => {
    document.getElementById('lockScreen').classList.remove('active');
    document.getElementById('homeScreen').classList.add('active');
});

// App Router
function openApp(appId) {
    document.getElementById('homeScreen').classList.remove('active');
    document.getElementById(appId).classList.add('active');
}

function closeApp() {
    document.querySelectorAll('.app-view').forEach(app => app.classList.remove('active'));
    document.getElementById('homeScreen').classList.add('active');
}
