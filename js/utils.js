// Hilfsfunktionen für die Anwendung

// Formatierung des Datums für Nachrichten
function formatTime(timestamp) {
    const date = new Date(timestamp);
    return date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
}

// Formatierung des Datums für Kontaktliste
function formatDate(timestamp) {
    const now = new Date();
    const date = new Date(timestamp);
    const diff = now.getTime() - date.getTime();
    const days = Math.floor(diff / (1000 * 60 * 60 * 24));

    if (days === 0) {
        return date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
    } else if (days === 1) {
        return 'Gestern';
    } else {
        return date.toLocaleDateString([], { day: '2-digit', month: '2-digit' });
    }
}

// Generiert eine eindeutige ID
function generateId() {
    return Date.now().toString(36) + Math.random().toString(36).substr(2);
}

// Prüft, ob ein Element im sichtbaren Bereich ist
function isElementInViewport(el) {
    const rect = el.getBoundingClientRect();
    return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
}

// Führt einen sanften Scroll zu einem Element durch
function smoothScrollToElement(element) {
    element.scrollIntoView({ behavior: 'smooth', block: 'end' });
}

// Verzögerte Funktion (Debounce)
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}