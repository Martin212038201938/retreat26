/**
 * Google Apps Script — Summer Camp Anmeldung
 *
 * SETUP:
 * 1. Erstelle ein neues Google Sheet
 * 2. Öffne Erweiterungen → Apps Script
 * 3. Füge diesen Code ein
 * 4. Klicke auf "Bereitstellen" → "Neue Bereitstellung"
 * 5. Typ: Web-App, Zugriff: "Jeder", Ausführen als: "Ich"
 * 6. Kopiere die Web-App-URL und trage sie in config.js als GOOGLE_SCRIPT_URL ein
 */

function doPost(e) {
  try {
    var sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
    var data = JSON.parse(e.postData.contents);

    // Header-Zeile anlegen falls leer
    if (sheet.getLastRow() === 0) {
      sheet.appendRow([
        'Zeitstempel',
        'Name',
        'E-Mail',
        'Status',
        'Tage',
        'Erwachsene',
        'Kinder',
        'Haustiere'
      ]);
    }

    var row = [
      new Date().toISOString(),
      data.name || '',
      data.email || '',
      data.status || '',
      (data.tage || []).join(', '),
      data.erwachsene || '',
      data.kinder || '',
      data.haustiere || ''
    ];

    sheet.appendRow(row);

    return ContentService
      .createTextOutput(JSON.stringify({ result: 'ok' }))
      .setMimeType(ContentService.MimeType.JSON);

  } catch (error) {
    return ContentService
      .createTextOutput(JSON.stringify({ result: 'error', message: error.toString() }))
      .setMimeType(ContentService.MimeType.JSON);
  }
}

function doGet(e) {
  return ContentService
    .createTextOutput(JSON.stringify({ status: 'Summer Camp Script aktiv' }))
    .setMimeType(ContentService.MimeType.JSON);
}
