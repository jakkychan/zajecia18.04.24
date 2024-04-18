let intervalId;
let singleNotificationId = 0;
let intervalNotificationId = 0;
let isIntervalRunning = false;

// Funkcja wyświetlająca pojedyncze powiadomienie
function showNotification(type) {
    const notificationId = type === 'Pojedyncze' ? ++singleNotificationId : ++intervalNotificationId;

    const notificationText = `${type} powiadomienie ${notificationId}`;

    const notificationItem = document.createElement('li');
    notificationItem.textContent = notificationText;

    if (type === 'Pojedyncze') {
        document.getElementById('singleNotifications').appendChild(notificationItem);
    } else {
        document.getElementById('intervalNotifications').appendChild(notificationItem);
    }

    setTimeout(() => {
        notificationItem.remove();
    }, 5000); // Usunięcie powiadomienia po 5 sekundach
}

// Funkcja rozpoczynająca cykliczne powiadomienia
function startInterval() {
    if (!isIntervalRunning) {
        intervalId = setInterval(() => {
            showNotification('Cykliczne');
        }, 2000); // Cykliczne powiadomienie co 2 sekundy
        isIntervalRunning = true;
    }
}

// Funkcja zatrzymująca cykliczne powiadomienia
function stopInterval() {
    clearInterval(intervalId);
    isIntervalRunning = false;
}

// Funkcja aktualizująca timer online
function updateOnlineTimer() {
    const now = new Date();
    const hours = String(now.getHours()).padStart(2, '0');
    const minutes = String(now.getMinutes()).padStart(2, '0');
    const seconds = String(now.getSeconds()).padStart(2, '0');
    document.getElementById('timer').innerText = `${hours}:${minutes}:${seconds}`;
}

// Aktualizacja timer online co sekundę
setInterval(updateOnlineTimer, 1000);
