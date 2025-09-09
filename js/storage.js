// Datenverwaltung mit localStorage

const STORAGE_KEYS = {
    CONTACTS: 'clintchat_contacts',
    MESSAGES: 'clintchat_messages',
    CURRENT_USER: 'clintchat_current_user'
};

// Initialisiere Standarddaten, falls nicht vorhanden
function initializeStorage() {
    if (!localStorage.getItem(STORAGE_KEYS.CONTACTS)) {
        const defaultContacts = [
            {
                id: '1',
                name: 'Maria Schmidt',
                avatar: 'https://ui-avatars.com/api/?name=Maria+Schmidt&background=random',
                status: 'Online',
                lastSeen: Date.now()
            },
            {
                id: '2',
                name: 'Thomas Müller',
                avatar: 'https://ui-avatars.com/api/?name=Thomas+Müller&background=random',
                status: 'Zuletzt online vor 5 Min.',
                lastSeen: Date.now() - 300000
            },
            {
                id: '3',
                name: 'Sarah Weber',
                avatar: 'https://ui-avatars.com/api/?name=Sarah+Weber&background=random',
                status: 'Online',
                lastSeen: Date.now()
            },
            {
                id: '4',
                name: 'Jan Hoffmann',
                avatar: 'https://ui-avatars.com/api/?name=Jan+Hoffmann&background=random',
                status: 'Zuletzt online vor 1 Std.',
                lastSeen: Date.now() - 3600000
            },
            {
                id: '5',
                name: 'Lisa Fischer',
                avatar: 'https://ui-avatars.com/api/?name=Lisa+Fischer&background=random',
                status: 'Online',
                lastSeen: Date.now()
            }
        ];
        localStorage.setItem(STORAGE_KEYS.CONTACTS, JSON.stringify(defaultContacts));
    }

    if (!localStorage.getItem(STORAGE_KEYS.MESSAGES)) {
        const defaultMessages = {
            '1': [
                {
                    id: generateId(),
                    sender: '1',
                    text: 'Hallo, wie geht es dir?',
                    timestamp: Date.now() - 86400000
                },
                {
                    id: generateId(),
                    sender: 'current',
                    text: 'Hallo Maria! Mir geht es gut, danke. Und dir?',
                    timestamp: Date.now() - 86300000
                },
                {
                    id: generateId(),
                    sender: '1',
                    text: 'Auch gut! Was machst du heute?',
                    timestamp: Date.now() - 86200000
                }
            ],
            '2': [
                {
                    id: generateId(),
                    sender: '2',
                    text: 'Hast du die Dokumente schon durchgesehen?',
                    timestamp: Date.now() - 172800000
                },
                {
                    id: generateId(),
                    sender: 'current',
                    text: 'Ja, ich schicke sie dir gleich zu.',
                    timestamp: Date.now() - 172700000
                }
            ],
            '3': [
                {
                    id: generateId(),
                    sender: 'current',
                    text: 'Hey Sarah, wollen wir uns heute Abend treffen?',
                    timestamp: Date.now() - 43200000
                },
                {
                    id: generateId(),
                    sender: '3',
                    text: 'Klingt gut! Wo sollen wir uns treffen?',
                    timestamp: Date.now() - 43100000
                }
            ]
        };
        localStorage.setItem(STORAGE_KEYS.MESSAGES, JSON.stringify(defaultMessages));
    }

    if (!localStorage.getItem(STORAGE_KEYS.CURRENT_USER)) {
        const currentUser = {
            id: 'current',
            name: 'Clint User',
            avatar: 'https://ui-avatars.com/api/?name=Clint+User&background=random'
        };
        localStorage.setItem(STORAGE_KEYS.CURRENT_USER, JSON.stringify(currentUser));
    }
}

// Kontakte abrufen
function getContacts() {
    return JSON.parse(localStorage.getItem(STORAGE_KEYS.CONTACTS) || '[]');
}

// Nachrichten für einen bestimmten Kontakt abrufen
function getMessages(contactId) {
    const allMessages = JSON.parse(localStorage.getItem(STORAGE_KEYS.MESSAGES) || '{}');
    return allMessages[contactId] || [];
}

// Nachricht speichern
function saveMessage(contactId, message) {
    const allMessages = JSON.parse(localStorage.getItem(STORAGE_KEYS.MESSAGES) || '{}');
    if (!allMessages[contactId]) {
        allMessages[contactId] = [];
    }

    allMessages[contactId].push(message);
    localStorage.setItem(STORAGE_KEYS.MESSAGES, JSON.stringify(allMessages));

    return allMessages[contactId];
}

// Aktuellen Benutzer abrufen
function getCurrentUser() {
    return JSON.parse(localStorage.getItem(STORAGE_KEYS.CURRENT_USER) || '{}');
}

// Kontaktinformationen aktualisieren
function updateContact(contactId, updates) {
    const contacts = getContacts();
    const contactIndex = contacts.findIndex(contact => contact.id === contactId);

    if (contactIndex !== -1) {
        contacts[contactIndex] = { ...contacts[contactIndex], ...updates };
        localStorage.setItem(STORAGE_KEYS.CONTACTS, JSON.stringify(contacts));
    }

    return contacts;
}