# ClintChat - Mini Chat App

![ClintChat Preview](chat-bilder/Clintchat-icon.png)

Eine moderne, WhatsApp-inspirierte Chat-Anwendung, die mit HTML, CSS und JavaScript implementiert wurde. ClintChat bietet eine intuitive Benutzeroberfläche und eine klare Projektstruktur, die als Grundlage für die Erweiterung mit einem Java-Backend dient.

## ✨ Funktionen

- **Moderne Benutzeroberfläche**: An WhatsApp angelehntes Design mit dunklem Modus
- **Responsive Design**: Optimiert für Desktop und mobile Geräte
- **Echtzeit-Messaging**: Nachrichten werden sofort angezeigt
- **Automatische Antworten**: Intelligente Antwort-Simulation
- **Lokaler Speicher**: Datenpersistenz mit localStorage
- **Mehrere Kontakte**: Vordefinierte Beispielkontakte
- **Lesebestätigungen**: Anzeige ungelesener Nachrichten

## 🚀 Schnellstart

### Voraussetzungen

- Moderner Webbrowser (Chrome, Firefox, Safari, Edge)
- Optional: Lokaler Webserver (für erweiterte Funktionen)

### Installation

1. Repository klonen oder herunterladen
2. Alle Dateien in einem Verzeichnis ablegen
3. `index.html` im Browser öffnen

```bash
# Beispiel mit integriertem Python-Webserver
python -m http.server 8000
# Anschließend im Browser: http://localhost:8000
```

## 📁 Projektstruktur

```
ClintChat/
├── index.html                 # Haupt-HTML-Datei
├── css/
│   ├── style.css             # Haupt-Stylesheet
│   └── responsive.css        # Responsive Design-Anpassungen
├── js/
│   ├── app.js                # Hauptanwendungslogik
│   ├── chat.js               # Chat-Funktionalität
│   ├── contacts.js           # Kontaktverwaltung
│   ├── storage.js            # Datenpersistenz (localStorage)
│   └── utils.js              # Hilfsfunktionen
├── bilder/
|   ├── Clintchat-icon.png
└── README.md                 # Diese Datei
```

## 🛠️ Technologien

- **Frontend**: HTML5, CSS3, Vanilla JavaScript (ES6+)
- **Styling**: Flexbox, CSS Grid, Custom Properties
- **Icons**: Font Awesome
- **Avatare**: UI Avatars API
- **Datenpersistenz**: Browser localStorage

## 📱 Verwendung

1. **Kontakt auswählen**: Klicken Sie in der linken Seitenleiste auf einen Kontakt
2. **Nachricht senden**: Geben Sie Text in das Eingabefeld ein und drücken Sie Enter oder klicken Sie auf das Sende-Icon
3. **Antwort erhalten**: Das System simuliert automatische Antworten nach 1-3 Sekunden
4. **Navigation**: Auf mobilen Geräten kann das Menü mit dem ☰ Icon ein- und ausgeblendet werden

## 🔧 Anpassungen

### Kontakte hinzufügen/bearbeiten

Kontakte können in der `initializeStorage()`-Funktion in `storage.js` angepasst werden:

```javascript
const defaultContacts = [
  {
    id: '1',
    name: 'Neuer Kontakt',
    avatar: 'https://ui-avatars.com/api/?name=Neuer+Kontakt&background=random',
    status: 'Online',
    lastSeen: Date.now()
  },
  // ... weitere Kontakte
];
```

### Styling anpassen

Farben und Design können über CSS Custom Properties in `style.css` angepasst werden:

```css
:root {
  --primary-bg: #111b21;
  --secondary-bg: #202c33;
  --message-sent: #005c4b;
  --message-received: #202c33;
  /* Weitere Farbvariablen */
}
```

### Automatische Antworten anpassen

Die Antwort-Simulation kann in der `simulateReply()`-Funktion in `chat.js` angepasst werden:

```javascript
const replies = [
  'Ihre benutzerdefinierte Antwort',
  'Weitere Antwortoptionen',
  // ... weitere Antworten
];
```

## 🧩 Erweiterung mit Java-Backend

Die aktuelle Implementierung verwendet localStorage für die Datenspeicherung. Für eine Produktivumgebung kann dies durch ein Java-Backend ersetzt werden:

### Backend-Integration

1. **RESTful API implementieren**:
   - `GET /contacts` - Kontaktliste abrufen
   - `GET /messages/{contactId}` - Nachrichten abrufen
   - `POST /messages` - Neue Nachricht senden

2. **WebSocket für Echtzeit-Updates**:
   - Statt Polling WebSockets für sofortige Nachrichtenübertragung

3. **Authentifizierung hinzufügen**:
   - JWT oder Session-basierte Authentifizierung

### Beispiel für Java-Integration

Ersetzen Sie die Funktionen in `storage.js` durch API-Aufrufe:

```javascript
// Beispiel für API-Aufruf an Java-Backend
async function getContacts() {
  const response = await fetch('http://localhost:8080/api/contacts');
  return await response.json();
}
```

## 🌐 Browserunterstützung

- Chrome (empfohlen)
- Firefox
- Safari
- Edge

## 📄 Lizenz

Dieses Projekt steht unter der MIT-Lizenz. Weitere Informationen finden Sie in der LICENSE-Datei.

## 🤝 Beitragen

Beiträge sind willkommen! Bitte beachten Sie folgende Schritte:

1. Forken Sie das Projekt
2. Erstellen Sie einen Feature-Branch (`git checkout -b feature/AmazingFeature`)
3. Committen Sie Ihre Änderungen (`git commit -m 'Add some AmazingFeature'`)
4. Pushen Sie den Branch (`git push origin feature/AmazingFeature`)
5. Öffnen Sie einen Pull Request

## 📧 Kontakt

Bei Fragen oder Anregungen wenden Sie sich bitte an:

- E-Mail: clint@example.com
- GitHub: [ClintChat Repository](https://github.com/Clintbr/ClintChat/)

## 🗺️ Roadmap

Geplante Erweiterungen für zukünftige Versionen:

- [ ] Dateianhänge unterstützen
- [ ] Gruppenchats implementieren
- [ ] Sprach- und Videoanrufe
- [ ] Verschlüsselung für Nachrichten
- [ ] Themes/Lichtmodus
- [ ] Benutzerdefinierte Benachrichtigungen

---

**Hinweis**: Dies ist eine Frontend-Demo-Implementation. Für eine Produktivumgebung wird ein sicheres Backend mit Authentifizierung und Datenvalidierung benötigt.
