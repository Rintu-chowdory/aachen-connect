import { useState } from 'react'
import { ChevronDown } from 'lucide-react'
import { useLang } from '../context/LangContext'

export default function Datenschutz() {
  const [expandedSection, setExpandedSection] = useState(0)
  const { lang, tr } = useLang()

  const sections = [
    {
      title: 'Verantwortlicher für die Datenverarbeitung',
      icon: '👤',
      content: `Aachen Connect ist das offizielle Bürgerportal der Stadt Aachen und verantwortlich für die Verarbeitung Ihrer personenbezogenen Daten gemäß Artikel 4 Absatz 7 DSGVO.

Verantwortlicher:
Stadt Aachen
Büro des Oberbürgermeisters - Datenschutz
Aachener Straße 1
52062 Aachen
Telefon: 0241 432-0
E-Mail: datenschutz@aachen.de

Datenschutzbeauftragter der Stadt Aachen:
datenschutzbeauftragter@aachen.de`
    },
    {
      title: 'Erhebung und Verarbeitung von Daten',
      icon: '📊',
      content: `Aachen Connect erhebt und verarbeitet folgende personenbezogene Daten:

1. Registrierungsdaten: Name, E-Mail-Adresse, optionale Telefonnummer, Wohnort in Aachen
2. Veranstaltungsdaten: Bei Anmeldungen zu Aachen-Events (Kulturveranstaltungen, Bürgerbeteiligung, Stadtteilveranstaltungen)
3. Serviceanfragen: Anfragen zu städtischen Services und Bürgerbeschwerden
4. Technische Daten: IP-Adresse, Browser-Informationen, Cookies, Zugriffsprotokolle zur Sicherheit und Betriebsoptimierung
5. Nutzungsdaten: Welche Services Sie nutzen, um unser Portal zu verbessern

Rechtsgrundlage: Artikel 6 Absatz 1 Buchstabe c und e DSGVO (Erfüllung rechtlicher Verpflichtungen, Aufgaben im öffentlichen Interesse)`
    },
    {
      title: 'Google OAuth Authentifizierung',
      icon: '🔐',
      content: `Zur Vereinfachung der Registrierung nutzen wir Google OAuth. Dies ermöglicht Ihnen, sich mit Ihrem Google-Konto bei Aachen Connect anzumelden, ohne ein separates Passwort zu erstellen.

Bei der Google OAuth-Anmeldung übermittelt Google folgende Daten:
- Google-ID (eindeutige Benutzerkennung)
- E-Mail-Adresse aus Ihrem Google-Konto
- Profilname (optional)

Wir speichern diese Daten, um Sie wiederzuerkennen und zukünftige Anmeldungen zu vereinfachen. Ihr Google-Passwort bleibt privat und wird von uns nicht gespeichert.

Sie können die Autorisierung von Aachen Connect in Ihren Google-Kontoeinstellungen unter "Verbundene Apps" jederzeit widerrufen.`
    },
    {
      title: 'Veranstaltungen und Bürgerbeteiligung',
      icon: '🎪',
      content: `Wenn Sie sich für Aachen-Veranstaltungen anmelden oder an Bürgerbeteiligungsprozessen teilnehmen:

- Ihre Registrierungsdaten werden an die zuständige Aachener Dienststelle weitergeleitet
- Bei Veranstaltungen können Fotos entstehen; diese werden nur mit Ihrer Einwilligung veröffentlicht
- Ihre Daten werden für die Organisa tion der Veranstaltung und eventuelle Rückmeldungen genutzt
- Ihre Kontaktdaten werden nicht an Dritte weitergegeben, es sei denn, dies ist für die Veranstaltung notwendig

Speicherdauer: Registrierungsdaten für Veranstaltungen werden nach 12 Monaten nach Veranstaltungsende gelöscht.`
    },
    {
      title: 'Ihre Rechte nach DSGVO',
      icon: '⚖️',
      content: `Die DSGVO gewährt Ihnen folgende Rechte:

1. Auskunftsrecht (Art. 15 DSGVO): Sie können jederzeit einsehen, welche Daten wir über Sie speichern
2. Berichtigungsrecht (Art. 16 DSGVO): Fehlerhafte Daten können Sie korrigieren
3. Löschungsrecht (Art. 17 DSGVO): "Recht auf Vergessenwerden" - Sie können die Löschung Ihrer Daten fordern, es sei denn, wir sind gesetzlich zur Aufbewahrung verpflichtet
4. Einschränkungsrecht (Art. 18 DSGVO): Sie können die Verarbeitung einschränken
5. Datenportabilität (Art. 20 DSGVO): Sie erhalten Ihre Daten in strukturiertem, gängigem Format
6. Widerspruchsrecht (Art. 21 DSGVO): Sie können der Verarbeitung widersprechen

Um diese Rechte auszuüben, kontaktieren Sie: datenschutz@aachen.de`
    },
    {
      title: 'Datensicherheit und Speicherdauer',
      icon: '🔒',
      content: `Ihre Daten sind durch folgende Maßnahmen geschützt:

- HTTPS-Verschlüsselung für alle Datenübertragungen
- Sichere Server-Infrastruktur mit regelmäßigen Sicherheitsaudits
- Zugriffsbeschränkungen: Nur autorisierte Mitarbeiter der Stadt Aachen dürfen auf Ihre Daten zugreifen
- Regelmäßige Datensicherungen
- Notfallplan für Datenpannen

Speicherdauer:
- Registrierungsdaten: Während Ihrer Mitgliedschaft + 12 Monate danach
- Veranstaltungsdaten: Bis 12 Monate nach der Veranstaltung
- Technische Logs: Maximal 6 Monate
- Serviceanfragen: 5 Jahre (gesetzliche Aufbewahrungsfrist für Verwaltungsdokumente)`
    },
    {
      title: 'Weitergabe an Dritte',
      icon: '🔗',
      content: `Ihre Daten werden nicht an kommerzielle Unternehmen verkauft oder weitergegeben. Eine Weitergabe erfolgt nur:

1. An andere städtische Dienststellen (z.B. Kulturamt bei Veranstaltungen)
2. An externe IT-Dienstleister, die unter Datenverarbeitungsverträgen (Art. 28 DSGVO) arbeiten
3. Wenn gesetzlich verpflichtet (z.B. Polizei, Staatsanwaltschaft)
4. Zur Erfüllung städtischer Pflichten

Bei internationalen Datenübertragungen (z.B. zu US-Servern) sichern wir einen angemessenen Datenschutz durch EU-Standard-Vertragsklauseln.`
    },
    {
      title: 'Cookies und Tracking',
      icon: '🍪',
      content: `Aachen Connect verwendet Cookies zu Ihrem Schutz:

- Session-Cookies: Halten Ihre Anmeldung aktiv (werden nach dem Schließen des Browsers gelöscht)
- Erforderliche Cookies: Für Funktionalität und Sicherheit notwendig
- Analytik-Cookies: Helfen uns zu verstehen, wie Sie unser Portal nutzen (optional)

Sie können Cookies in Ihren Browser-Einstellungen deaktivieren. Beachten Sie, dass dies die Funktionalität von Aachen Connect einschränken kann.`
    },
    {
      title: 'Beschwerderecht und Kontakt',
      icon: '📧',
      content: `Bei Fragen zum Datenschutz oder zur Ausübung Ihrer Rechte kontaktieren Sie:

Datenschutzbüro der Stadt Aachen
E-Mail: datenschutz@aachen.de
Telefon: 0241 432-0 (Hauptvermittlung)
Adresse: Stadt Aachen, Büro des Oberbürgermeisters, Aachener Straße 1, 52062 Aachen

Sie haben auch das Recht, sich beim Datenschutzbeauftragten der Stadt Aachen oder der Landesbeauftragten für Datenschutz Nordrhein-Westfalen zu beschweren.

Beschwerde bei der Landesbeauftragten für Datenschutz NRW:
Tel-Fax: 0211 38424-0
post@ldi.nrw.de`
    }
  ]

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100 py-12">
      <div className="max-w-4xl mx-auto px-4">
        <div className="mb-12">
          <h1 className="text-4xl font-bold mb-3 text-[#003D73]">Datenschutzerklärung</h1>
          <p className="text-gray-600 dark:text-gray-400">Aachen Connect – Datenschutz nach DSGVO</p>
        </div>

        <div className="space-y-4">
          {sections.map((section, idx) => (
            <div
              key={idx}
              className="border border-gray-300 dark:border-gray-700 rounded-lg overflow-hidden hover:shadow-md dark:hover:shadow-lg transition-all"
            >
              <button
                onClick={() => setExpandedSection(expandedSection === idx ? -1 : idx)}
                className="w-full p-5 flex items-center gap-4 hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors text-left"
              >
                <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-gradient-to-br from-[#003D73] to-[#004A8D] flex items-center justify-center font-bold text-white text-sm">
                  {idx + 1}
                </div>
                <div className="flex-1">
                  <h2 className="text-lg font-semibold">{section.icon} {section.title}</h2>
                </div>
                <ChevronDown
                  size={20}
                  className={`transition-transform ${
                    expandedSection === idx ? 'transform rotate-180' : ''
                  }`}
                />
              </button>

              {expandedSection === idx && (
                <div className="px-5 pb-5 pt-2 border-t border-gray-300 dark:border-gray-700 bg-gray-50 dark:bg-gray-800">
                  <p className="text-gray-700 dark:text-gray-300 leading-relaxed whitespace-pre-wrap">
                    {section.content}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="mt-12 p-6 rounded-lg bg-[#003D73]/10 dark:bg-[#003D73]/20 border border-[#003D73]/30">
          <p className="text-sm text-gray-700 dark:text-gray-300">
            Diese Datenschutzerklärung wurde zuletzt aktualisiert am 21. Juni 2026 und unterliegt der DSGVO (Datenschutz-Grundverordnung).
            <br />
            <br />
            <strong>Geltungsbereich:</strong> Diese Erklärung gilt für das Portal Aachen Connect, ein Projekt der Stadt Aachen. Für externe verlinkten Seiten gelten deren eigene Datenschutzerklärungen.
          </p>
        </div>
      </div>
    </div>
  )
}
