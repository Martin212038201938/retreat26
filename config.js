/**
 * Summer Camp Konfiguration
 *
 * TAGES-SLOTS HIER PFLEGEN — kein anderer Code muss geändert werden.
 * Einfach Einträge hinzufügen oder entfernen.
 */
const SUMMERCAMP_CONFIG = {
  /**
   * Google Apps Script Web-App URL
   * → Nach Deployment des Scripts hier eintragen
   */
  GOOGLE_SCRIPT_URL: 'HIER_GOOGLE_SCRIPT_URL_EINTRAGEN',

  /**
   * Tages-Slots für die Anmeldung
   * Format: { id: 'eindeutiger-key', label: 'Anzeige-Text' }
   */
  TAGE: [
    { id: 'sa-02-08', label: 'Samstag, 2. August' },
    { id: 'so-03-08', label: 'Sonntag, 3. August' },
    { id: 'mo-04-08', label: 'Montag, 4. August' },
    { id: 'di-05-08', label: 'Dienstag, 5. August' },
    { id: 'mi-06-08', label: 'Mittwoch, 6. August' },
    { id: 'do-07-08', label: 'Donnerstag, 7. August' },
    { id: 'fr-08-08', label: 'Freitag, 8. August' },
    { id: 'sa-09-08', label: 'Samstag, 9. August' },
  ],

  /**
   * Haustier-Optionen
   */
  HAUSTIERE_OPTIONEN: [
    'Keine',
    'Hund (1)',
    'Hunde (2+)',
    'Sonstige'
  ],

  /**
   * Event-Details (als Platzhalter — später befüllen)
   */
  EVENT: {
    titel: 'Summer Camp 2026',
    untertitel: 'Eine Woche mit Freunden',
    zeitraum: '2. – 9. August 2026',
    location: 'Wird noch bekannt gegeben',
    locationDetails: '',
    beschreibung: 'Ein großes Haus, gute Freunde, Pool, Grillen, entspannte Tage — komm vorbei, wann du willst.',
  }
};
