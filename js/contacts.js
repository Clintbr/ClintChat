// Verwaltung der Kontaktliste

let currentContactId = null;

// Kontaktliste rendern
function renderContacts() {
    const contacts = getContacts();
    const contactsList = document.getElementById('contacts-list');
    const messages = JSON.parse(localStorage.getItem(STORAGE_KEYS.MESSAGES) || '{}');

    contactsList.innerHTML = '';

    contacts.forEach(contact => {
        const contactMessages = messages[contact.id] || [];
        const lastMessage = contactMessages.length > 0 ? contactMessages[contactMessages.length - 1] : null;
        const unreadCount = contactMessages.filter(msg => msg.sender !== 'current' && !msg.read).length;

        const contactElement = document.createElement('div');
        contactElement.className = `contact-item ${currentContactId === contact.id ? 'active' : ''}`;
        contactElement.dataset.contactId = contact.id;

        contactElement.innerHTML = `
            <img src="${contact.avatar}" alt="${contact.name}" class="contact-img">
            <div class="contact-details">
                <div class="contact-name">${contact.name}</div>
                <div class="contact-lastmsg">${lastMessage ? lastMessage.text : 'Noch keine Nachrichten'}</div>
            </div>
            <div class="contact-meta">
                <div class="contact-time">${lastMessage ? formatDate(lastMessage.timestamp) : ''}</div>
                ${unreadCount > 0 ? `<div class="contact-unread">${unreadCount}</div>` : ''}
            </div>
        `;

        contactElement.addEventListener('click', () => {
            selectContact(contact.id);
        });

        contactsList.appendChild(contactElement);
    });
}

// Kontakt auswählen
function selectContact(contactId) {
    currentContactId = contactId;

    // Aktive Klasse in der Kontaktliste setzen
    document.querySelectorAll('.contact-item').forEach(item => {
        item.classList.remove('active');
    });
    document.querySelector(`.contact-item[data-contact-id="${contactId}"]`).classList.add('active');

    // Chat-Bereich aktualisieren
    displayChat(contactId);

    // Auf mobilen Geräten die Sidebar ausblenden
    if (window.innerWidth <= 600) {
        document.querySelector('.sidebar').classList.remove('active');
    }
}

// Kontaktinformationen im Chat-Header anzeigen
function updateChatHeader(contact) {
    document.getElementById('chat-contact-img').src = contact.avatar;
    document.getElementById('chat-contact-name').textContent = contact.name;
    document.getElementById('chat-contact-status').textContent = contact.status;
}