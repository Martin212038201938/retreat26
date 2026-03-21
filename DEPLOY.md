# Summer Camp Landingpage — Deployment-Anleitung

## Dateien

```
summercamp/
├── index.html              ← Hauptseite (HTML + CSS + JS, alles inline)
├── config.js               ← Tages-Slots, Event-Details, Google Script URL
├── google-apps-script.js   ← Code für Google Apps Script (Formular-Backend)
└── DEPLOY.md               ← Diese Anleitung
```

## 1. Google Sheet + Apps Script einrichten

1. Neues Google Sheet erstellen (z.B. "Summer Camp Anmeldungen")
2. Im Sheet: **Erweiterungen → Apps Script** öffnen
3. Den Inhalt von `google-apps-script.js` einfügen
4. **Bereitstellen → Neue Bereitstellung**:
   - Typ: **Web-App**
   - Ausführen als: **Ich**
   - Zugriff: **Jeder** (auch ohne Google-Konto)
5. Die generierte Web-App-URL kopieren
6. In `config.js` die URL bei `GOOGLE_SCRIPT_URL` eintragen

## 2. Tages-Slots anpassen

In `config.js` die `TAGE`-Array bearbeiten:

```js
TAGE: [
  { id: 'sa-02-08', label: 'Samstag, 2. August' },
  // Weitere Tage hinzufügen/ändern/entfernen
],
```

Event-Details ebenfalls in `config.js` unter `EVENT` anpassen.

## 3. Auf alwaysdata deployen

### Option A: Über alwaysdata Admin-Panel (SFTP)
1. Login: https://admin.alwaysdata.com (2FA erforderlich)
2. Unter **Dateien** den Ordner `www/summercamp/` erstellen
3. Dateien `index.html` und `config.js` hochladen
4. Unter **Sites** eine neue Site anlegen:
   - Adresse: `yellow-plane.com/summercamp`
   - Typ: **Statische Dateien**
   - Verzeichnis: `/www/summercamp/`

### Option B: Per SFTP-Client
```
Host: sftp-martin.alwaysdata.net
User: martin (oder Account-Name)
Port: 22
```
Dateien nach `~/www/summercamp/` hochladen.

### Option C: Alternatives Hosting (z.B. GitHub Pages)
Falls alwaysdata nicht funktioniert:
1. Neues GitHub-Repo erstellen
2. Dateien pushen
3. GitHub Pages aktivieren
4. yellow-plane.com/summercamp per CNAME oder Subdomain konfigurieren

## 4. Testen

- [ ] `yellow-plane.com/summercamp` aufrufen
- [ ] Anmeldung mit allen Feldern testen
- [ ] Absage testen (Details-Block muss verschwinden)
- [ ] Google Sheet prüfen ob Daten ankommen
- [ ] Auf Handy testen (QR-Code scannen)

## Hinweis

Die Seite funktioniert auch ohne Google Script (Demo-Modus). Solange
`GOOGLE_SCRIPT_URL` auf `'HIER_GOOGLE_SCRIPT_URL_EINTRAGEN'` steht,
wird eine Bestätigung angezeigt, aber keine Daten gespeichert.
