import React from 'react';
import SEO from '../components/SEO';
import { DollarSign, Zap, TrendingUp, CheckCircle, Users, Award, ArrowLeft, Calculator, AlertCircle, Euro } from 'lucide-react';
import Header from '../components/Header';

export default function ThgQuotePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-green-50">
<SEO
  title="THG-Quote 2025: Bis zu 400€ verdienen - Anbieter-Vergleich | e-Autowelt"
  description="THG-Quote 2025: Verdienen Sie bis zu 400€ jährlich mit Ihrem E-Auto. Anbieter-Vergleich, Anleitung & alle Infos zum CO2-Zertifikate verkaufen!"
  canonicalPath="/ratgeber/thg-quote"
  keywords="thg-quote, thg-prämie, elektroauto prämie, co2-zertifikate verkaufen, thg-quote 2025, elektroauto geld verdienen"
  ogImage="/images/ratgeber/thg-quote-og.jpg"
  ogType="article"
  publishedDate="2025-01-15T10:00:00Z"
  modifiedDate="2025-01-15T10:00:00Z"
/>
      {/* Wiederverwendbarer Header */}
      <Header activeTab="ratgeber" />

      {/* Spacer for fixed header */}
      <div className="h-20 md:h-24"></div>

      <article className="max-w-4xl mx-auto px-4 md:px-8 py-8 md:py-12">
        {/* Zurück-Link */}
        <a 
          href="/ratgeber" 
          className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-700 mb-6 md:mb-8 font-medium transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          Zurück zur Übersicht
        </a>

        {/* Hero Section with Image */}
        <div className="bg-white rounded-2xl shadow-xl overflow-hidden mb-8">
          {/* Hero Image */}
          <div className="relative h-64 md:h-96 bg-gradient-to-br from-green-500 to-blue-600 overflow-hidden">
            <img 
              src="/images/ratgeber/thg-quote-geld-verdienen-hero.jpg"
              alt="THG-Quote 2025: Bis zu 400€ Prämie für E-Auto-Besitzer verdienen"
              className="w-full h-full object-cover opacity-90"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
            <div className="absolute bottom-0 left-0 right-0 p-6 md:p-10 text-white">
              <div className="flex items-center gap-3 mb-3">
                <div className="bg-white/30 backdrop-blur-md p-2 rounded-lg shadow-lg">
                  <DollarSign className="w-6 h-6 md:w-8 md:h-8" />
                </div>
                <span className="text-xs md:text-sm bg-white/30 backdrop-blur-md px-3 py-1 rounded-full font-semibold shadow-lg">⏱️ 5 Min. Lesezeit</span>
                <span className="text-xs md:text-sm bg-white/30 backdrop-blur-md px-3 py-1 rounded-full font-semibold shadow-lg">Aktualisiert am 14. Oktober 2025</span>
              </div>
              <h1 className="text-2xl md:text-4xl lg:text-5xl font-bold leading-tight">
                THG-Quote 2025: Bis zu 400€ Prämie für E-Auto-Besitzer
              </h1>
            </div>
          </div>

          {/* Article Content */}
          <div className="p-6 md:p-10">
            {/* Intro */}
            <div className="mb-8 md:mb-12">
              <p className="text-lg md:text-xl text-gray-600 leading-relaxed mb-4">
                Mit der THG-Quote verdienen E-Auto-Besitzer jährlich 200-400 € – einfach durch den Verkauf 
                ihrer CO₂-Einsparung. Hier erfahren Sie alles über Anbieter, Auszahlungen und wie Sie das 
                Maximum herausholen.
              </p>
            </div>

            {/* Hero Benefit */}
            <div className="bg-gradient-to-r from-green-600 to-blue-600 rounded-xl p-6 md:p-8 text-white mb-8 md:mb-12 text-center">
              <p className="text-2xl md:text-3xl font-bold mb-2">💰 200-400 € pro Jahr</p>
              <p className="text-base md:text-lg">Mögliche Prämie für jeden E-Auto-Besitzer!</p>
            </div>

            {/* Inhaltsverzeichnis */}
            <nav className="bg-gray-50 rounded-xl p-6 mb-8 md:mb-12">
              <h2 className="text-xl md:text-2xl font-bold text-gray-800 mb-4">
                Inhaltsverzeichnis
              </h2>
              <ol className="space-y-2 text-sm md:text-base">
                <li><a href="#was-ist-thg" className="text-blue-600 hover:underline">1. Was ist die THG-Quote?</a></li>
                <li><a href="#wie-funktioniert" className="text-blue-600 hover:underline">2. Wie funktioniert der Verkauf?</a></li>
                <li><a href="#anbieter" className="text-blue-600 hover:underline">3. Die besten THG-Anbieter im Vergleich</a></li>
                <li><a href="#anmeldung" className="text-blue-600 hover:underline">4. So melden Sie sich an (Schritt-für-Schritt)</a></li>
                <li><a href="#tipps" className="text-blue-600 hover:underline">5. Tipps für maximale Prämie</a></li>
                <li><a href="#faq" className="text-blue-600 hover:underline">6. Häufige Fragen (FAQ)</a></li>
              </ol>
            </nav>

            {/* Section 1: Was ist THG */}
            <section id="was-ist-thg" className="mb-12 md:mb-16">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-6 md:mb-8 flex items-center gap-3">
                <Award className="w-6 h-6 md:w-8 md:h-8 text-green-600" />
                Was ist die THG-Quote?
              </h2>
              
              <p className="text-base md:text-lg text-gray-700 leading-relaxed mb-6">
                Die <strong>Treibhausgasminderungsquote (THG-Quote)</strong> ist ein staatliches Instrument 
                zur CO₂-Reduktion im Verkehrssektor. Hier eine vereinfachte Darstellung:
              </p>

              {/* IMAGE 1: THG-Quote System erklärt */}
              <div className="my-8 rounded-xl overflow-hidden shadow-lg">
                <img 
                  src="/images/ratgeber/thg-quote-system-erklaert.jpg"
                  alt="THG-Quote System: Wie E-Auto-Besitzer CO2-Einsparungen an Mineralölkonzerne verkaufen"
                  className="w-full h-auto"
                  loading="lazy"
                />
                <div className="bg-gray-50 p-4 text-xs md:text-sm text-gray-600 italic">
                  Das THG-Quote System: Von der CO₂-Einsparung bis zur Auszahlung an E-Auto-Besitzer
                </div>
              </div>

              <div className="bg-blue-50 p-6 rounded-xl mb-6">
                <h3 className="text-xl md:text-2xl font-bold text-gray-800 mb-4">
                  So funktioniert das System:
                </h3>
                <div className="space-y-4 text-sm md:text-base text-gray-700">
                  <div className="flex items-start gap-3">
                    <span className="text-2xl font-bold text-blue-600 flex-shrink-0">1</span>
                    <p>
                      <strong>Mineralölkonzerne müssen CO₂ reduzieren:</strong> Unternehmen wie Shell, Aral, Total 
                      sind verpflichtet, ihren CO₂-Ausstoß jährlich zu senken (aktuell um 10-14%).
                    </p>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="text-2xl font-bold text-blue-600 flex-shrink-0">2</span>
                    <p>
                      <strong>E-Auto-Fahrer sparen CO₂:</strong> Wer elektrisch fährt statt Benzin zu tanken, 
                      spart messbar CO₂ ein. Diese Einsparung wird vom Staat zertifiziert.
                    </p>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="text-2xl font-bold text-blue-600 flex-shrink-0">3</span>
                    <p>
                      <strong>Verkauf der Einsparung:</strong> E-Auto-Besitzer können ihre CO₂-Einsparung an 
                      Mineralölkonzerne verkaufen. Diese rechnen es auf ihre Quote an – und zahlen dafür.
                    </p>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="text-2xl font-bold text-blue-600 flex-shrink-0">4</span>
                    <p>
                      <strong>THG-Dienstleister bündeln:</strong> Anbieter wie eQuota, geld-für-eAuto, ADAC 
                      bündeln tausende E-Autos und verkaufen die Quote gebündelt – höherer Preis für alle!
                    </p>
                  </div>
                </div>
              </div>

              <h3 className="text-xl md:text-2xl font-bold text-gray-800 mb-4">
                Wer kann die THG-Quote verkaufen?
              </h3>

              <div className="grid md:grid-cols-2 gap-4 mb-6">
                <div className="bg-green-50 p-4 rounded-lg">
                  <h4 className="font-bold text-gray-800 mb-3 flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-green-600" />
                    ✅ Berechtigt:
                  </h4>
                  <ul className="space-y-2 text-sm md:text-base text-gray-700">
                    <li>• Vollelektrische Autos (BEV)</li>
                    <li>• Elektrische Motorräder & Roller</li>
                    <li>• E-Transporter & E-LKW</li>
                    <li>• Brennstoffzellen-Fahrzeuge</li>
                    <li>• E-Busse (Firmen)</li>
                  </ul>
                </div>

                <div className="bg-red-50 p-4 rounded-lg">
                  <h4 className="font-bold text-gray-800 mb-3 flex items-center gap-2">
                    <AlertCircle className="w-5 h-5 text-red-600" />
                    ❌ NICHT berechtigt:
                  </h4>
                  <ul className="space-y-2 text-sm md:text-base text-gray-700">
                    <li>• Plug-in-Hybride (PHEV)</li>
                    <li>• Vollhybride (HEV)</li>
                    <li>• Verbrenner</li>
                    <li>• Mildhybride</li>
                    <li>• E-Bikes / Pedelecs</li>
                  </ul>
                </div>
              </div>

              <div className="bg-yellow-50 border-l-4 border-yellow-600 p-6 rounded-r-lg">
                <div className="flex items-start gap-3">
                  <AlertCircle className="w-5 h-5 text-yellow-600 flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-bold text-gray-800 mb-2">Wichtig:</h4>
                    <p className="text-sm md:text-base text-gray-700">
                      Sie müssen <strong>Fahrzeughalter</strong> (nicht nur Nutzer) sein, um die THG-Quote 
                      zu verkaufen. Bei Leasing: Sie als Leasingnehmer sind berechtigt, nicht die Leasingbank!
                    </p>
                  </div>
                </div>
              </div>
            </section>

            {/* Section 2: Wie funktioniert */}
            <section id="wie-funktioniert" className="mb-12 md:mb-16">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-6 md:mb-8 flex items-center gap-3">
                <Zap className="w-6 h-6 md:w-8 md:h-8 text-blue-600" />
                Wie funktioniert der Verkauf?
              </h2>

              <p className="text-base md:text-lg text-gray-700 leading-relaxed mb-6">
                Der Prozess ist denkbar einfach und dauert nur wenige Minuten:
              </p>


              <div className="space-y-4">
                <div className="bg-blue-50 border-l-4 border-blue-600 p-6 rounded-r-lg">
                  <div className="flex items-start gap-4">
                    <span className="text-3xl font-bold text-blue-600 flex-shrink-0">1</span>
                    <div>
                      <h3 className="text-lg md:text-xl font-bold text-gray-800 mb-2">
                        Anbieter auswählen
                      </h3>
                      <p className="text-sm md:text-base text-gray-700">
                        Vergleichen Sie die Anbieter (siehe unten) und wählen Sie den für Sie besten aus. 
                        Achten Sie auf Sofortauszahlung vs. Flex-Modelle.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="bg-blue-50 border-l-4 border-blue-600 p-6 rounded-r-lg">
                  <div className="flex items-start gap-4">
                    <span className="text-3xl font-bold text-blue-600 flex-shrink-0">2</span>
                    <div>
                      <h3 className="text-lg md:text-xl font-bold text-gray-800 mb-2">
                        Registrieren & Fahrzeugschein hochladen
                      </h3>
                      <p className="text-sm md:text-base text-gray-700 mb-3">
                        Erstellen Sie einen Account beim Anbieter. Laden Sie ein Foto oder Scan Ihrer 
                        Zulassungsbescheinigung Teil I (Fahrzeugschein) hoch. 
                      </p>
                      <div className="bg-white/50 p-3 rounded-lg">
                        <p className="text-xs md:text-sm text-gray-600">
                          💡 <strong>Tipp:</strong> Vorder- UND Rückseite des Fahrzeugscheins hochladen. 
                          Manche Anbieter brauchen beide Seiten.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-blue-50 border-l-4 border-blue-600 p-6 rounded-r-lg">
                  <div className="flex items-start gap-4">
                    <span className="text-3xl font-bold text-blue-600 flex-shrink-0">3</span>
                    <div>
                      <h3 className="text-lg md:text-xl font-bold text-gray-800 mb-2">
                        Prüfung & Zertifizierung
                      </h3>
                      <p className="text-sm md:text-base text-gray-700">
                        Der Anbieter prüft Ihre Daten und beantragt beim Umweltbundesamt die Zertifizierung 
                        Ihrer CO₂-Einsparung. Dieser Prozess dauert 2-8 Wochen. Ab jetzt können Sie nur noch warten.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="bg-green-50 border-l-4 border-green-600 p-6 rounded-r-lg">
                  <div className="flex items-start gap-4">
                    <span className="text-3xl font-bold text-green-600 flex-shrink-0">4</span>
                    <div>
                      <h3 className="text-lg md:text-xl font-bold text-gray-800 mb-2">
                        Auszahlung erhalten 💰
                      </h3>
                      <p className="text-sm md:text-base text-gray-700">
                        Nach erfolgreicher Zertifizierung wird die Prämie auf Ihr Konto überwiesen. 
                        <strong> Fertig!</strong> Im nächsten Jahr können Sie erneut verkaufen.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-yellow-50 border-l-4 border-yellow-400 p-6 rounded-r-lg mt-6">
                <h4 className="font-bold text-gray-800 mb-2">⏱️ Zeitrahmen:</h4>
                <p className="text-sm md:text-base text-gray-700">
                  Von der Anmeldung bis zur Auszahlung dauert es je nach Anbieter <strong>2-12 Wochen</strong>. 
                  Sofortauszahler zahlen innerhalb von 2-3 Werktagen, Flex-Modelle erst nach der Zertifizierung.
                </p>
              </div>
            </section>

            {/* Section 3: Anbieter-Vergleich */}
            <section id="anbieter" className="mb-12 md:mb-16">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-6 md:mb-8 flex items-center gap-3">
                <TrendingUp className="w-6 h-6 md:w-8 md:h-8 text-green-600" />
                Die besten THG-Anbieter im Vergleich
              </h2>

              <p className="text-base md:text-lg text-gray-700 leading-relaxed mb-6">
                Es gibt dutzende THG-Anbieter, hier sind einige Beispiele:
              </p>


              <div className="space-y-6">
                {/* Anbieter 1 */}
                <div className="bg-white border-2 border-green-500 rounded-xl p-6 md:p-8">
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <h3 className="text-xl md:text-2xl font-bold text-gray-800 mb-2">
                        🥇 eQuota 
                      </h3>
                      <div className="flex items-center gap-2 mb-2">

                      </div>
                    </div>
                    <div className="text-right">
                      <div className="text-3xl font-bold text-green-600">350€</div>
                      <div className="text-sm text-gray-500">Flex-Prämie 2025</div>
                    </div>
                  </div>
                  <div className="grid md:grid-cols-2 gap-4 text-sm md:text-base text-gray-700">
                    <div>
                      <strong>✅ Vorteile:</strong>
                      <ul className="mt-2 space-y-1">
                        <li>• Höchste Flex-Prämie (350€)</li>
                        <li>• Optional: Sofort-Garantie (280€)</li>
                        <li>• Sehr hohe Erfolgsquote (98%)</li>
                        <li>• Transparente Abrechnung</li>
                      </ul>
                    </div>
                    <div>
                      <strong>⚠️ Nachteile:</strong>
                      <ul className="mt-2 space-y-1">
                        <li>• Flex-Modell: Auszahlung nach 8-12 Wochen</li>
                      </ul>
                    </div>
                  </div>
                </div>

                {/* Anbieter 2 */}
                <div className="bg-white border-2 border-blue-400 rounded-xl p-6 md:p-8">
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <h3 className="text-xl md:text-2xl font-bold text-gray-800 mb-2">
                        🥈 geld-für-eAuto
                      </h3>
                      <div className="flex items-center gap-2 mb-2">

                      </div>
                    </div>
                    <div className="text-right">
                      <div className="text-3xl font-bold text-blue-600">300€</div>
                      <div className="text-sm text-gray-500">Sofort-Garantie</div>
                    </div>
                  </div>
                  <div className="grid md:grid-cols-2 gap-4 text-sm md:text-base text-gray-700">
                    <div>
                      <strong>✅ Vorteile:</strong>
                      <ul className="mt-2 space-y-1">
                        <li>• Sofortzahlung in 2-3 Tagen</li>
                        <li>• Garantierte 300€</li>
                        <li>• Sehr nutzerfreundlich</li>
                        <li>• Keine Wartezeit</li>
                      </ul>
                    </div>
                    <div>
                      <strong>⚠️ Nachteile:</strong>
                      <ul className="mt-2 space-y-1">
                        <li>• Etwas niedrigere Prämie als Flex-Modelle</li>
                      </ul>
                    </div>
                  </div>
                </div>

                {/* Anbieter 3 */}
                <div className="bg-white border-2 border-gray-300 rounded-xl p-6 md:p-8">
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <h3 className="text-xl md:text-2xl font-bold text-gray-800 mb-2">
                        🥉 ADAC e-Charge
                      </h3>
                      <div className="flex items-center gap-2 mb-2">
     
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="text-3xl font-bold text-gray-800">320€</div>
                      <div className="text-sm text-gray-500">Flex-Prämie 2025</div>
                    </div>
                  </div>
                  <div className="grid md:grid-cols-2 gap-4 text-sm md:text-base text-gray-700">
                    <div>
                      <strong>✅ Vorteile:</strong>
                      <ul className="mt-2 space-y-1">
                        <li>• ADAC als Vertrauensmarke</li>
                        <li>• Solide Prämie</li>
                        <li>• Guter Service</li>
                        <li>• Für ADAC-Mitglieder Bonus</li>
                      </ul>
                    </div>
                    <div>
                      <strong>⚠️ Nachteile:</strong>
                      <ul className="mt-2 space-y-1">
                        <li>• Nicht die höchste Prämie</li>
                        <li>• Flex-Modell mit Wartezeit</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-blue-50 p-6 rounded-xl mt-8">
                <h4 className="font-bold text-gray-800 mb-3 flex items-center gap-2">
                  <Users className="w-5 h-5 text-blue-600" />
                  Welches Modell ist das richtige für mich?
                </h4>
                <div className="space-y-2 text-sm md:text-base text-gray-700">
                  <p>
                    <strong>Flex-Modell (z.B. eQuota, ADAC):</strong> Sie warten 8-12 Wochen, bekommen dafür 
                    die höchste Prämie (320-350€). Ideal, wenn Sie nicht aufs Geld angewiesen sind.
                  </p>
                  <p>
                    <strong>Sofort-Garantie (z.B. geld-für-eAuto):</strong> Sie bekommen das Geld sofort (2-3 Tage), 
                    dafür etwas weniger (280-300€). Ideal für schnelle Liquidität.
                  </p>
                </div>
              </div>
            </section>

            {/* Section 4: Anmeldung */}
            <section id="anmeldung" className="mb-12 md:mb-16">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-6 md:mb-8">
                So melden Sie sich an (Schritt-für-Schritt)
              </h2>

              <div className="bg-gradient-to-br from-green-50 to-blue-50 rounded-xl p-6 md:p-8">
                <h3 className="text-xl md:text-2xl font-bold text-gray-800 mb-6">
                  📋 Checkliste: Das brauchen Sie
                </h3>
                <div className="space-y-3">
                  {[
                    'Zulassungsbescheinigung Teil I (Fahrzeugschein) – Vorder- UND Rückseite',
                    'Smartphone oder Scanner für Foto des Fahrzeugscheins',
                    'Bankverbindung (IBAN) für die Auszahlung',
                    'E-Mail-Adresse für Registrierung',
                    '5 Minuten Zeit – mehr nicht!'
                  ].map((item, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                      <span className="text-sm md:text-base text-gray-700">{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-8 space-y-4">
                <div className="bg-white border-l-4 border-green-600 p-6 rounded-r-lg shadow-md">
                  <h4 className="font-bold text-gray-800 mb-2 flex items-center gap-2">
                    <span className="bg-green-600 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold">1</span>
                    Anbieter-Website aufrufen
                  </h4>
                  <p className="text-sm md:text-base text-gray-700">
                    Gehen Sie auf die Website Ihres gewählten Anbieters (z.B. equota.de, geld-fuer-eauto.de).
                  </p>
                </div>

                <div className="bg-white border-l-4 border-green-600 p-6 rounded-r-lg shadow-md">
                  <h4 className="font-bold text-gray-800 mb-2 flex items-center gap-2">
                    <span className="bg-green-600 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold">2</span>
                    Registrieren
                  </h4>
                  <p className="text-sm md:text-base text-gray-700">
                    Erstellen Sie einen Account mit E-Mail und Passwort. Bestätigen Sie die E-Mail-Adresse.
                  </p>
                </div>

                <div className="bg-white border-l-4 border-green-600 p-6 rounded-r-lg shadow-md">
                  <h4 className="font-bold text-gray-800 mb-2 flex items-center gap-2">
                    <span className="bg-green-600 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold">3</span>
                    Fahrzeugdaten eingeben
                  </h4>
                  <p className="text-sm md:text-base text-gray-700">
                    Geben Sie Ihre Fahrzeugdaten ein (meist automatisch aus Fahrzeugschein ausgelesen). 
                    Achten Sie auf korrekte Angaben!
                  </p>
                </div>

                <div className="bg-white border-l-4 border-green-600 p-6 rounded-r-lg shadow-md">
                  <h4 className="font-bold text-gray-800 mb-2 flex items-center gap-2">
                    <span className="bg-green-600 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold">4</span>
                    Fahrzeugschein hochladen
                  </h4>
                  <p className="text-sm md:text-base text-gray-700 mb-2">
                    Fotografieren Sie Ihren Fahrzeugschein (Vorder- UND Rückseite) und laden Sie die Bilder hoch.
                  </p>
                  <div className="bg-yellow-50 p-3 rounded-lg">
                    <p className="text-xs md:text-sm text-gray-600">
                      ⚠️ <strong>Wichtig:</strong> Foto muss gut lesbar sein! Keine Schatten, keine Unschärfe. 
                      Sonst wird Ihr Antrag abgelehnt.
                    </p>
                  </div>
                </div>

                <div className="bg-white border-l-4 border-green-600 p-6 rounded-r-lg shadow-md">
                  <h4 className="font-bold text-gray-800 mb-2 flex items-center gap-2">
                    <span className="bg-green-600 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold">5</span>
                    Bankverbindung angeben
                  </h4>
                  <p className="text-sm md:text-base text-gray-700">
                    Geben Sie Ihre IBAN ein, auf die die Prämie überwiesen werden soll.
                  </p>
                </div>

                <div className="bg-white border-l-4 border-green-600 p-6 rounded-r-lg shadow-md">
                  <h4 className="font-bold text-gray-800 mb-2 flex items-center gap-2">
                    <span className="bg-green-600 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold">6</span>
                    Absenden & zurücklehnen
                  </h4>
                  <p className="text-sm md:text-base text-gray-700">
                    Klicken Sie auf "Absenden" – fertig! Der Anbieter kümmert sich um alles weitere. 
                    Sie bekommen eine Bestätigungs-E-Mail und später eine Info über die Auszahlung.
                  </p>
                </div>
              </div>
            </section>

            {/* Section 5: Tipps */}
            <section id="tipps" className="mb-12 md:mb-16">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-6 md:mb-8 flex items-center gap-3">
                <TrendingUp className="w-6 h-6 md:w-8 md:h-8 text-green-600" />
                Tipps für maximale Prämie
              </h2>

              <div className="grid md:grid-cols-2 gap-4">
                <div className="bg-green-50 p-4 rounded-lg">
                  <h4 className="font-bold text-gray-800 mb-2 flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-green-600" />
                    Früh anmelden
                  </h4>
                  <p className="text-sm md:text-base text-gray-700">
                    Melden Sie sich <strong>Anfang des Jahres</strong> an! Je früher, desto höher oft die Prämie 
                    (Nachfrage ist noch gering). Ab Herbst sinken die Prämien meist.
                  </p>
                </div>

                <div className="bg-green-50 p-4 rounded-lg">
                  <h4 className="font-bold text-gray-800 mb-2 flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-green-600" />
                    Anbieter jährlich vergleichen
                  </h4>
                  <p className="text-sm md:text-base text-gray-700">
                    Sie sind NICHT an einen Anbieter gebunden! Jedes Jahr können Sie neu wählen. 
                    Vergleichen lohnt sich – Unterschied bis zu 100 €!
                  </p>
                </div>

                <div className="bg-green-50 p-4 rounded-lg">
                  <h4 className="font-bold text-gray-800 mb-2 flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-green-600" />
                    Mehrere E-Autos?
                  </h4>
                  <p className="text-sm md:text-base text-gray-700">
                    Manche Anbieter geben <strong>Mengenrabatte</strong> (z.B. +10 € pro Fahrzeug ab 3 Autos). 
                    Perfekt für Familien oder Unternehmen!
                  </p>
                </div>

                <div className="bg-green-50 p-4 rounded-lg">
                  <h4 className="font-bold text-gray-800 mb-2 flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-green-600" />
                    Freunde werben
                  </h4>
                  <p className="text-sm md:text-base text-gray-700">
                    Viele Anbieter zahlen Werbeprämien (20-50 € pro geworbenem Freund). 
                    Teilen Sie Ihren Referral-Link und verdienen Sie extra!
                  </p>
                </div>

                <div className="bg-green-50 p-4 rounded-lg">
                  <h4 className="font-bold text-gray-800 mb-2 flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-green-600" />
                    Erinnerung aktivieren
                  </h4>
                  <p className="text-sm md:text-base text-gray-700">
                    Aktivieren Sie die automatische Erinnerung beim Anbieter. So vergessen Sie nicht, 
                    die Quote im nächsten Jahr erneut zu verkaufen!
                  </p>
                </div>

                <div className="bg-green-50 p-4 rounded-lg">
                  <h4 className="font-bold text-gray-800 mb-2 flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-green-600" />
                    Steuern beachten
                  </h4>
                  <p className="text-sm md:text-base text-gray-700">
                    THG-Prämien sind <strong>steuerpflichtig</strong> (sonstige Einkünfte). 
                    Unter 256 €/Jahr aber steuerfrei (Freigrenze)!
                  </p>
                </div>
              </div>
            </section>

            {/* Section 6: FAQ */}
            <section id="faq" className="mb-8">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-6 md:mb-8">
                Häufige Fragen (FAQ)
              </h2>

              <div className="space-y-4">
                <div className="bg-gray-50 p-6 rounded-xl">
                  <h4 className="font-bold text-gray-800 mb-2">Kann ich die THG-Quote auch verkaufen, wenn ich mein E-Auto geleast habe?</h4>
                  <p className="text-sm md:text-base text-gray-700">
                    <strong>Ja!</strong> Als Leasingnehmer sind Sie Fahrzeughalter und damit berechtigt. 
                    Die Leasingbank hat keinen Anspruch auf die THG-Quote.
                  </p>
                </div>

                <div className="bg-gray-50 p-6 rounded-xl">
                  <h4 className="font-bold text-gray-800 mb-2">Funktioniert es auch bei gebrauchten E-Autos?</h4>
                  <p className="text-sm md:text-base text-gray-700">
                    <strong>Ja!</strong> Das Alter des Fahrzeugs ist egal. Hauptsache Sie sind aktueller Halter 
                    laut Zulassungsbescheinigung.
                  </p>
                </div>

                <div className="bg-gray-50 p-6 rounded-xl">
                  <h4 className="font-bold text-gray-800 mb-2">Was passiert, wenn ich das Auto im Laufe des Jahres verkaufe?</h4>
                  <p className="text-sm md:text-base text-gray-700">
                    Die THG-Quote gilt für das <strong>gesamte Kalenderjahr</strong>. Wer am 1. Januar Halter war, 
                    kann die Quote für das ganze Jahr verkaufen – auch bei späterem Verkauf.
                  </p>
                </div>

                <div className="bg-gray-50 p-6 rounded-xl">
                  <h4 className="font-bold text-gray-800 mb-2">Muss ich die Prämie versteuern?</h4>
                  <p className="text-sm md:text-base text-gray-700">
                    <strong>Ja</strong>, als "sonstige Einkünfte". ABER: Unter 256 €/Jahr greift die Freigrenze 
                    (komplett steuerfrei). Darüber: nur der übersteigende Betrag wird versteuert.
                  </p>
                </div>

                <div className="bg-gray-50 p-6 rounded-xl">
                  <h4 className="font-bold text-gray-800 mb-2">Wie lange gilt die THG-Quote noch?</h4>
                  <p className="text-sm md:text-base text-gray-700">
                    Die THG-Quote ist bis mindestens <strong>2030</strong> gesetzlich verankert. 
                    Prämien können aber sinken, wenn mehr E-Autos zugelassen werden (höheres Angebot).
                  </p>
                </div>

                <div className="bg-gray-50 p-6 rounded-xl">
                  <h4 className="font-bold text-gray-800 mb-2">Kann die Quote abgelehnt werden?</h4>
                  <p className="text-sm md:text-base text-gray-700">
                    Sehr selten. Ablehnungsgründe: Fahrzeugschein unleserlich, Fahrzeug nicht rein elektrisch, 
                    Quote wurde bereits von jemand anderem für dieses Fahrzeug verkauft. Seriöse Anbieter helfen bei Problemen.
                  </p>
                </div>
              </div>
            </section>


              {/* Fazit */}
            <div className="bg-gradient-to-r from-green-600 to-blue-600 rounded-xl p-6 md:p-8 text-white mt-12">
              <h2 className="text-2xl md:text-3xl font-bold mb-4">
                Fazit: 200-400 € geschenkt – jedes Jahr!
              </h2>
              <p className="text-base md:text-lg leading-relaxed">
                Die THG-Quote ist das einfachste Geld, das Sie als E-Auto-Besitzer verdienen können. 
                <strong> 5 Minuten Aufwand, keinerlei Kosten, jährlich wiederholbar.</strong>
              </p>
            </div>
          </div>


          {/* Article Footer */}
          <footer className="mt-12 pt-8 border-t border-gray-200 px-6 md:px-10 pb-8">
            <div className="bg-gray-50 rounded-xl p-4 md:p-6">
              <h3 className="text-base md:text-lg font-bold text-gray-800 mb-2">Quellen & Weitere Informationen</h3>
              <ul className="text-xs md:text-sm text-gray-600 space-y-1">
                <li>• Umweltbundesamt (2025): Treibhausgasminderungsquote im Verkehr</li>
                <li>• Bundesregierung: THG-Quote - Rechtliche Grundlagen</li>
                <li>• ADAC (2025): THG-Quote Anbietervergleich und Praxistest</li>
                <li>• Verbraucherzentrale: THG-Quote verkaufen - Ratgeber</li>
              </ul>
            </div>
          </footer>
        </div>

        {/* Zurück-Link unten */}
        <div className="mt-8 text-center">
          <a 
            href="/ratgeber" 
            className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-700 font-medium transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            Zurück zur Ratgeber-Übersicht
          </a>
        </div>
      </article>

      {/* Footer */}
      <footer className="bg-white mt-12 md:mt-20 py-6 md:py-8 border-t border-gray-200">
        <div className="max-w-6xl mx-auto px-4 md:px-8">
          <div className="flex flex-wrap justify-center gap-4 md:gap-6 mb-4 md:mb-6">
            <a href="/impressum" className="text-sm md:text-base text-gray-600 hover:text-gray-900 transition-colors">
              Impressum
            </a>
            <span className="text-gray-400">|</span>
            <a href="/datenschutz" className="text-sm md:text-base text-gray-600 hover:text-gray-900 transition-colors">
              Datenschutz
            </a>
          </div>
          <div className="text-center text-xs md:text-sm text-gray-500">
            <p>© 2025 e-Autowelt. Alle Angaben ohne Gewähr.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
