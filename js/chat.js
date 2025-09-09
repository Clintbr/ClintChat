// Verwaltung der Chat-Funktionalität

// Chat für einen bestimmten Kontakt anzeigen
function displayChat(contactId) {
    const welcomeScreen = document.getElementById('welcome-screen');
    const activeChat = document.getElementById('active-chat');
    const contacts = getContacts();
    const contact = contacts.find(c => c.id === contactId);

    if (contact) {
        welcomeScreen.style.display = 'none';
        activeChat.style.display = 'flex';

        updateChatHeader(contact);
        renderMessages(contactId);

        // Als gelesen markieren
        markMessagesAsRead(contactId);
    }
}

// Nachrichten rendern
function renderMessages(contactId) {
    const messagesContainer = document.getElementById('messages-container');
    const messages = getMessages(contactId);
    const currentUser = getCurrentUser();

    messagesContainer.innerHTML = '';

    messages.forEach(message => {
        const messageElement = document.createElement('div');
        messageElement.className = `message ${message.sender === 'current' ? 'message-sent' : 'message-received'}`;

        messageElement.innerHTML = `
            <div class="message-text">${message.text}</div>
            <div class="message-time">${formatTime(message.timestamp)}</div>
        `;

        messagesContainer.appendChild(messageElement);
    });

    // Zum Ende scrollen
    if (messagesContainer.lastElementChild) {
        smoothScrollToElement(messagesContainer.lastElementChild);
    }
}

// Nachricht senden
function sendMessage() {
    if (!currentContactId) return;

    const messageInput = document.getElementById('message-input');
    const text = messageInput.value.trim();

    if (text === '') return;

    const message = {
        id: generateId(),
        sender: 'current',
        text: text,
        timestamp: Date.now(),
        read: false
    };

    // Nachricht speichern
    saveMessage(currentContactId, message);

    // Nachrichten neu rendern
    renderMessages(currentContactId);

    // Kontaktliste aktualisieren
    renderContacts();

    // Eingabefeld leeren
    messageInput.value = '';

    // Automatische Antwort simulieren
    simulateReply();
}

// Automatische Antwort simulieren
function simulateReply() {
    if (!currentContactId) return;

    const contacts = getContacts();
    const contact = contacts.find(c => c.id === currentContactId);

    if (contact && Math.random() > 0.0) { // 100% Chance auf Antwort
        setTimeout(() => {
            const replies = [
                'Das klingt gut!',
                'Interessant...',
                'Kannst du mir mehr dazu erzählen?',
                'Verstanden!',
                'Ich melde mich später nochmal!',
                'Das werde ich mir merken.',
                'Danke für die Information!'
            ];

            const replyMessage = {
                id: generateId(),
                sender: currentContactId,
                text: replies[Math.floor(Math.random() * replies.length)],
                timestamp: Date.now(),
                read: false
            };

            saveMessage(currentContactId, replyMessage);
            renderMessages(currentContactId);
            renderContacts();
        }, 1000 + Math.random() * 2000); // Verzögerung von 1-3 Sekunden
    }
}

// Nachrichten als gelesen markieren
function markMessagesAsRead(contactId) {
    const allMessages = JSON.parse(localStorage.getItem(STORAGE_KEYS.MESSAGES) || '{}');

    if (allMessages[contactId]) {
        allMessages[contactId] = allMessages[contactId].map(message => {
            if (message.sender !== 'current') {
                return { ...message, read: true };
            }
            return message;
        });

        localStorage.setItem(STORAGE_KEYS.MESSAGES, JSON.stringify(allMessages));
        renderContacts();
    }
}

// Event-Listener für das Senden von Nachrichten
function setupMessageListeners() {
    const messageInput = document.getElementById('message-input');
    const sendButton = document.getElementById('send-message-btn');

    // Nachricht mit Klick auf Button senden
    sendButton.addEventListener('click', sendMessage);

    // Nachricht mit Enter-Taste senden
    messageInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
            sendMessage();
        }
    });
}