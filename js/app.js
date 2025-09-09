// Hauptanwendungslogik

// Initialisierung der Anwendung
function initApp() {
    // Storage initialisieren
    initializeStorage();

    // Event-Listener einrichten
    setupMessageListeners();

    // Kontaktliste rendern
    renderContacts();

    // Menü-Toggle für mobile Ansicht hinzufügen
    addMenuToggle();

    // Event-Listener für Fenstergrößenänderung
    window.addEventListener('resize', debounce(() => {
        if (window.innerWidth > 600) {
            document.querySelector('.sidebar').classList.remove('active');
        }
    }, 250));
}

// Menü-Toggle für mobile Ansicht hinzufügen
function addMenuToggle() {
    const menuToggle = document.createElement('button');
    menuToggle.className = 'menu-toggle';
    menuToggle.innerHTML = '<i class="fas fa-bars"></i>';

    menuToggle.addEventListener('click', () => {
        document.querySelector('.sidebar').classList.toggle('active');
    });

    document.body.appendChild(menuToggle);
}

// App initialisieren, wenn DOM geladen ist
document.addEventListener('DOMContentLoaded', initApp);