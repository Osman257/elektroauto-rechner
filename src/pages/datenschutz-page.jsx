import React from 'react';
import { Zap, Shield } from 'lucide-react';

export default function DatenschutzPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-green-50">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 bg-white shadow-md z-50">
        <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
          <a href="/start" className="flex items-center gap-3 hover:opacity-80 transition-opacity">
            <Zap className="w-8 h-8 text-blue-600" />
            <h1 className="text-2xl font-bold text-gray-800">Elektroauto-Rechner</h1>
          </a>
          <nav className="flex gap-6">
            <a 
              href="/rechner" 
              className="text-lg font-medium text-gray-700 hover:text-blue-600 transition-colors"
            >
              Rechner
            </a>
            <a 
              href="/informationen" 
              className="text-lg font-medium text-gray-700 hover:text-blue-600 transition-colors"
            >
              Informationen
            </a>
          </nav>
        </div>
      </header>

      {/* Spacer for fixed header */}
      <div className="h-20"></div>

      <div className="max-w-4xl mx-auto px-4 md:px-8 py-12">
        <div className="bg-white rounded-2xl shadow-2xl p-8 md:p-12">
          <div className="flex items-center gap-4 mb-8">
            <Shield className="w-12 h-12 text-blue-600" />
            <h2 className="text-4xl font-bold text-gray-800">Datenschutzerklärung</h2>
          </div>
          
          <div className="text-lg text-gray-700 space-y-8">
            <div>
              <p className="font-bold text-xl mb-3">1. Verantwortlicher</p>
              <p className="leading-relaxed">
                Osman Göbel<br />
                Schillerstr. 11<br />
                85123 Karlskron<br />
                E-Mail: osman.goebel@gmail.com
              </p>
            </div>
            
            <div className="pt-6 border-t-2 border-gray-200">
              <p className="font-bold text-xl mb-3">2. Allgemeines zur Datenverarbeitung</p>
              <p className="leading-relaxed">
                Wir verarbeiten personenbezogene Daten nur, soweit dies zur Bereitstellung einer 
                funktionsfähigen Website sowie unserer Inhalte und Leistungen erforderlich ist. Beim 
                Besuch unserer Seite werden technisch notwendige Daten durch unseren Hosting-Anbieter 
                (z. B. IP-Adresse, Zeitpunkt des Zugriffs, Browser, Referrer) in Server-Logs gespeichert. 
                Rechtsgrundlage ist Art. 6 Abs. 1 lit. f DSGVO (berechtigtes Interesse zur sicheren 
                Bereitstellung der Website).
              </p>
            </div>
            
            <div className="pt-6 border-t-2 border-gray-200">
              <p className="font-bold text-xl mb-3">3. Elektroauto-Kostenrechner</p>
              <p className="leading-relaxed">
                Die Nutzung des Rechners erfolgt ohne Angabe personenbezogener Daten. Eingaben 
                (z. B. Fahrzeugtyp, Verbrauch, Strompreise) werden ausschließlich für die Berechnung 
                genutzt und nicht gespeichert. Alle Berechnungen erfolgen lokal in Ihrem Browser.
              </p>
            </div>
            
            <div className="pt-6 border-t-2 border-gray-200">
              <p className="font-bold text-xl mb-3">4. Cookies & Google AdSense</p>
              <p className="leading-relaxed mb-4">
                Wir verwenden Google AdSense, einen Dienst der Google LLC, zur Einbindung von 
                Werbeanzeigen. Google kann hierfür Cookies und ähnliche Technologien nutzen, um die 
                Anzeigen anzuzeigen und zu optimieren.
              </p>
              <p className="leading-relaxed mb-4">
                Rechtsgrundlage ist Ihre Einwilligung nach Art. 6 Abs. 1 lit. a DSGVO. Sie können Ihre 
                Einwilligung jederzeit über „Cookie-Einstellungen" widerrufen.
              </p>
              <p className="leading-relaxed">
                Weitere Informationen zur Datenverarbeitung durch Google:{' '}
                <a 
                  href="https://policies.google.com/privacy" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:text-blue-800 underline"
                >
                  https://policies.google.com/privacy
                </a>
              </p>
            </div>
            
            <div className="pt-6 border-t-2 border-gray-200">
              <p className="font-bold text-xl mb-3">5. Hosting</p>
              <p className="leading-relaxed">
                Unsere Website wird bei einem Dienstleister in Deutschland gehostet, der im Rahmen 
                einer Auftragsverarbeitung nach Art. 28 DSGVO für uns tätig ist. Dieser Dienstleister 
                hat keinen Zugriff auf Ihre personenbezogenen Daten, außer soweit dies für die 
                Bereitstellung der Website technisch erforderlich ist.
              </p>
            </div>
            
            <div className="pt-6 border-t-2 border-gray-200">
              <p className="font-bold text-xl mb-3">6. Betroffenenrechte</p>
              <p className="leading-relaxed mb-4">
                Sie haben jederzeit das Recht auf:
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4 leading-relaxed">
                <li>Auskunft über Ihre gespeicherten personenbezogenen Daten (Art. 15 DSGVO)</li>
                <li>Berichtigung unrichtiger Daten (Art. 16 DSGVO)</li>
                <li>Löschung Ihrer Daten (Art. 17 DSGVO)</li>
                <li>Einschränkung der Verarbeitung (Art. 18 DSGVO)</li>
                <li>Datenübertragbarkeit (Art. 20 DSGVO)</li>
                <li>Widerspruch gegen die Verarbeitung (Art. 21 DSGVO)</li>
                <li>Beschwerde bei einer Aufsichtsbehörde (Art. 77 DSGVO)</li>
              </ul>
            </div>
            
            <div className="pt-6 border-t-2 border-gray-200">
              <p className="font-bold text-xl mb-3">7. Kontakt</p>
              <p className="leading-relaxed">
                Bei Fragen zum Datenschutz kontaktieren Sie uns bitte über die oben genannte 
                E-Mail-Adresse.
              </p>
            </div>
            
            <div className="pt-6 border-t-2 border-gray-200 bg-yellow-50 p-6 rounded-lg">
              <p className="font-bold text-2xl mb-4 text-gray-800">
                Haftungsausschluss – Elektroauto-Kostenrechner
              </p>
              <p className="leading-relaxed mb-4">
                Die Ergebnisse des Elektroauto-Kostenrechners basieren auf Nutzerangaben und 
                durchschnittlichen Referenzwerten. Es handelt sich um unverbindliche Berechnungen, 
                die lediglich eine grobe Einschätzung ermöglichen. Eine Gewähr für die Richtigkeit, 
                Vollständigkeit und Aktualität der Ergebnisse wird nicht übernommen. Änderungen von 
                Energiepreisen, Fahrzeugkosten oder individuellem Fahrverhalten können die tatsächlichen 
                Kosten beeinflussen.
              </p>
              <p className="leading-relaxed">
                Die Nutzung des Rechners erfolgt auf eigenes Risiko. Jegliche Haftung für 
                Vermögensschäden wird ausgeschlossen, sofern diese nicht auf Vorsatz oder grober 
                Fahrlässigkeit beruhen.
              </p>
            </div>
          </div>

          {/* Back to Start Button */}
          <div className="mt-12 text-center">
            <a 
              href="/start"
              className="inline-block bg-gradient-to-r from-blue-600 to-green-600 text-white text-lg font-bold px-8 py-3 rounded-full hover:shadow-xl transition-all transform hover:scale-105"
            >
              Zurück zur Startseite
            </a>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-white mt-12 py-8 border-t border-gray-200">
        <div className="max-w-6xl mx-auto px-4 md:px-8">
          <div className="flex flex-wrap justify-center gap-6 mb-6">
            <a href="/impressum" className="text-base text-gray-600 hover:text-gray-900 transition-colors">
              Impressum
            </a>
            <span className="text-gray-400">|</span>
            <a href="/datenschutz" className="text-base text-blue-600 font-semibold transition-colors">
              Datenschutz
            </a>
          </div>
          <div className="text-center text-sm text-gray-500">
            <p>© 2025 Elektroauto-Rechner. Alle Angaben ohne Gewähr.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
