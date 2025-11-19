import React from 'react';
import SEO from '../components/SEO';
import { ArrowLeft, Car, ShoppingCart, Battery, Zap, MapPin, Euro, TrendingUp, CheckCircle, AlertTriangle } from 'lucide-react';
import Header from '../components/Header';

export default function KaufberatungPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-white">
<SEO
  title="Elektroauto Kaufberatung 2025: Welches E-Auto passt zu mir? | e-Autowelt"
  description="Elektroauto Kaufberatung 2025: Reichweite, Ladezeiten, Modelle im Vergleich. Der komplette Guide für Ihre Entscheidung - wissenschaftlich fundiert!"
  canonicalPath="/ratgeber/kaufberatung"
  keywords="elektroauto kaufen, e-auto kaufberatung, elektroauto vergleich, welches e-auto kaufen, e-auto modelle"
  ogImage="/images/ratgeber/kaufberatung-og.jpg"
  ogType="article"
  publishedDate="2025-01-15T10:00:00Z"
  modifiedDate="2025-01-15T10:00:00Z"
/>
      {/* Header */}
      <Header activeTab="ratgeber" />

      {/* Spacer */}
      <div className="h-20"></div>

      <div className="max-w-4xl mx-auto px-3 md:px-4 py-8">
        {/* Breadcrumb */}
        <div className="mb-6">
          <a
            href="/ratgeber"
            className="inline-flex items-center gap-2 text-sm md:text-base text-blue-600 hover:text-blue-700 font-medium"
          >
            <ArrowLeft className="w-4 h-4" />
            Zurück zur Übersicht
          </a>
        </div>

        {/* Article */}
        <article className="bg-white rounded-2xl shadow-xl overflow-hidden">
          {/* Hero Image */}
          <div className="relative h-64 md:h-96 bg-gradient-to-br from-blue-600 to-green-600 overflow-hidden">
            <img 
              src="/images/ratgeber/elektroauto-kaufberatung-hero.jpg"
              alt="Elektroauto wird geladen - Kaufberatung 2025"
              className="w-full h-full object-cover opacity-90"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
            <div className="absolute bottom-0 left-0 right-0 p-6 md:p-10 text-white">
              <div className="flex items-center gap-3 mb-3">
                <div className="bg-white/30 backdrop-blur-md p-2 rounded-lg shadow-lg">
                  <ShoppingCart className="w-6 h-6 md:w-8 md:h-8" />
                </div>
                <span className="text-xs md:text-sm bg-white/30 backdrop-blur-md px-3 py-1 rounded-full font-semibold shadow-lg">📖 8 Min. Lesezeit</span>
                <span className="text-xs md:text-sm bg-white/30 backdrop-blur-md px-3 py-1 rounded-full font-semibold shadow-lg">Aktualisiert am 1. September 2025</span>
              </div>
              <h1 className="text-2xl md:text-4xl lg:text-5xl font-bold leading-tight">
                Elektroauto Kaufberatung 2025: Der komplette Guide
              </h1>
            </div>
          </div>

          {/* Article Content */}
          <div className="p-6 md:p-10">
            {/* Intro */}
            <div className="mb-8 md:mb-12">
              <p className="text-lg md:text-xl text-gray-600 leading-relaxed mb-4">
                Alles was Sie vor dem Kauf eines Elektroautos wissen müssen: Reichweite, Lademöglichkeiten, Modellvergleich und worauf Sie wirklich achten sollten.
              </p>
              <div className="bg-blue-50 rounded-xl p-6">
                <p className="text-base md:text-lg text-gray-700 leading-relaxed">
                  Der Kauf eines Elektroautos ist eine wichtige Entscheidung. Im Gegensatz zu Verbrennern gibt es einige Besonderheiten zu beachten. 
                  <strong> Dieser Guide hilft Ihnen, das perfekte E-Auto für Ihre Bedürfnisse zu finden.</strong>
                </p>
              </div>
            </div>

            {/* Inhaltsverzeichnis */}
            <nav className="bg-gray-50 rounded-xl p-6 mb-8 md:mb-12">
              <h2 className="text-xl md:text-2xl font-bold text-gray-800 mb-4">
                Inhaltsverzeichnis
              </h2>
              <ol className="space-y-2 text-sm md:text-base">
                <li><a href="#reichweite" className="text-blue-600 hover:underline">1. Reichweite: Wie viel brauche ich wirklich?</a></li>
                <li><a href="#ladeinfrastruktur" className="text-blue-600 hover:underline">2. Lademöglichkeiten: Zuhause, Arbeit oder unterwegs?</a></li>
                <li><a href="#kosten" className="text-blue-600 hover:underline">3. Kosten: Was kostet ein E-Auto wirklich?</a></li>
                <li><a href="#modellauswahl" className="text-blue-600 hover:underline">4. Modellauswahl: Welches E-Auto passt zu mir?</a></li>
                <li><a href="#checkliste" className="text-blue-600 hover:underline">5. Checkliste: Darauf sollten Sie achten</a></li>
              </ol>
            </nav>

            {/* Section 1: Reichweite */}
            <section id="reichweite" className="mb-8 md:mb-12">
              <h2 className="text-xl md:text-3xl font-bold text-gray-800 mb-4 md:mb-6 flex items-center gap-3">
                <Battery className="w-6 h-6 md:w-8 md:h-8 text-blue-600" />
                Reichweite: Wie viel brauche ich wirklich?
              </h2>
              
              <p className="text-sm md:text-base text-gray-700 leading-relaxed mb-6">
                Die Reichweitenangst ist oft unbegründet. Die meisten Menschen fahren täglich weniger als 50 km. Hier sind die wichtigsten Fakten:
              </p>

              {/* Reichweiten-Bild */}
              <div className="my-8 rounded-xl overflow-hidden shadow-lg">
                <img 
                  src="/images/ratgeber/elektroauto-reichweite-kategorien.jpg"
                  alt="Elektroauto Reichweiten-Kategorien 2025: Stadtauto, Mittelklasse und Langstrecke im Vergleich"
                  className="w-full h-auto"
                  loading="lazy"
                />
                <div className="bg-gray-50 p-4 text-xs md:text-sm text-gray-600 italic">
                  Reichweiten-Kategorien: Von Stadtauto (200-300 km) bis Langstrecke (500+ km)
                </div>
              </div>

              <div className="bg-blue-50 rounded-xl p-4 md:p-6 mb-6">
                <h3 className="text-lg md:text-xl font-bold text-gray-800 mb-4">Reichweiten-Kategorien 2025</h3>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-1" />
                    <div>
                      <div className="font-semibold text-gray-800 text-sm md:text-base">Stadtauto (200-300 km)</div>
                      <div className="text-xs md:text-sm text-gray-600">Ideal für: Pendler, Zweitwagen, Stadtverkehr</div>
                      <div className="text-xs md:text-sm text-gray-500 mt-1">Beispiele: Renault Zoe, VW e-Up, Fiat 500e</div>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-1" />
                    <div>
                      <div className="font-semibold text-gray-800 text-sm md:text-base">Mittelklasse (350-500 km)</div>
                      <div className="text-xs md:text-sm text-gray-600">Ideal für: Familien, Langstrecken-gelegentlich</div>
                      <div className="text-xs md:text-sm text-gray-500 mt-1">Beispiele: VW ID.4, Tesla Model 3, Hyundai Ioniq 5</div>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-1" />
                    <div>
                      <div className="font-semibold text-gray-800 text-sm md:text-base">Langstrecke (500+ km)</div>
                      <div className="text-xs md:text-sm text-gray-600">Ideal für: Vielfahrer, Geschäftsreisen, Urlaub</div>
                      <div className="text-xs md:text-sm text-gray-500 mt-1">Beispiele: Tesla Model S, BMW iX, Mercedes EQS</div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 mb-4">
                <div className="flex items-start gap-3">
                  <AlertTriangle className="w-5 h-5 text-yellow-600 flex-shrink-0 mt-0.5" />
                  <div>
                    <div className="font-semibold text-gray-800 text-sm md:text-base mb-1">Wichtig: WLTP vs. Realität</div>
                    <p className="text-xs md:text-sm text-gray-700">
                      Die WLTP-Reichweite ist ein Laborwert. In der Praxis liegt die reale Reichweite etwa 15-30% darunter, je nach Fahrstil und Jahreszeit. Im Winter kann die Reichweite um bis zu 30% sinken.
                    </p>
                  </div>
                </div>
              </div>
            </section>

            {/* Section 2: Ladeinfrastruktur */}
            <section id="ladeinfrastruktur" className="mb-8 md:mb-12">
              <h2 className="text-xl md:text-3xl font-bold text-gray-800 mb-4 md:mb-6 flex items-center gap-3">
                <Zap className="w-6 h-6 md:w-8 md:h-8 text-green-600" />
                Lademöglichkeiten: Zuhause, Arbeit oder unterwegs?
              </h2>

              <p className="text-sm md:text-base text-gray-700 leading-relaxed mb-4">
                Die Ladeinfrastruktur ist entscheidend für den Alltag mit einem E-Auto. Idealerweise haben Sie eine dieser Möglichkeiten:
              </p>

              <div className="space-y-4 mb-6">
                <div className="bg-green-50 rounded-xl p-4 md:p-6">
                  <h3 className="text-lg md:text-xl font-bold text-gray-800 mb-3 flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-green-600" />
                    Option 1: Laden zuhause (ideal!)
                  </h3>
                  <ul className="space-y-2 text-sm md:text-base text-gray-700">
                    <li>• <strong>Eigene Wallbox:</strong> Kostet 500-2.000€ + Installation. Lädt über Nacht (11 kW = ~300 km in 6-8h)</li>
                    <li>• <strong>Steckdose (Notlösung):</strong> Sehr langsam (2,3 kW = ~100 km in 10h), nur temporär</li>
                    <li>• <strong>Förderung:</strong> KfW-Zuschuss für Wallbox (aktuell ausgelaufen, aber prüfen!)</li>
                  </ul>
                </div>

                <div className="bg-blue-50 rounded-xl p-4 md:p-6">
                  <h3 className="text-lg md:text-xl font-bold text-gray-800 mb-3 flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-blue-600" />
                    Option 2: Laden beim Arbeitgeber
                  </h3>
                  <ul className="space-y-2 text-sm md:text-base text-gray-700">
                    <li>• Immer mehr Firmen bieten kostenlose Ladestationen</li>
                    <li>• Auto lädt während der Arbeitszeit = praktisch & kostenlos</li>
                    <li>• Arbeitgeber kann Wallbox steuerlich absetzen</li>
                  </ul>
                </div>

                <div className="bg-purple-50 rounded-xl p-4 md:p-6">
                  <h3 className="text-lg md:text-xl font-bold text-gray-800 mb-3 flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-purple-600" />
                    Option 3: Öffentliche Ladeinfrastruktur
                  </h3>
                  <ul className="space-y-2 text-sm md:text-base text-gray-700">
                    <li>• <strong>AC-Laden (11-22 kW):</strong> An Supermärkten, Parkplätzen (2-4h für voll)</li>
                    <li>• <strong>DC-Schnellladen (50-350 kW):</strong> An Autobahnen (20-40 Min. für 80%)</li>
                    <li>• <strong>Kosten:</strong> 30-80 Cent/kWh je nach Anbieter und Ladeleistung</li>
                    <li>• <strong>Apps:</strong> PlugShare, EnBW, Ionity für Ladesäulen-Suche</li>
                  </ul>
                </div>
              </div>

              <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4">
                <div className="flex items-start gap-3">
                  <AlertTriangle className="w-5 h-5 text-yellow-600 flex-shrink-0 mt-0.5" />
                  <div>
                    <div className="font-semibold text-gray-800 text-sm md:text-base mb-1">Ohne eigene Lademöglichkeit?</div>
                    <p className="text-xs md:text-sm text-gray-700">
                      E-Auto nur mit öffentlichen Ladesäulen ist möglich, aber umständlicher und teurer. Prüfen Sie vorher: Gibt es Ladesäulen in der Nähe? Wie oft müssen Sie laden?
                    </p>
                  </div>
                </div>
              </div>
            </section>

            {/* Section 3: Kosten */}
            <section id="kosten" className="mb-8 md:mb-12">
              <h2 className="text-xl md:text-3xl font-bold text-gray-800 mb-4 md:mb-6 flex items-center gap-3">
                <Euro className="w-6 h-6 md:w-8 md:h-8 text-green-600" />
                Kosten: Was kostet ein E-Auto wirklich?
              </h2>

              <p className="text-sm md:text-base text-gray-700 leading-relaxed mb-4">
                E-Autos sind in der Anschaffung teurer, aber in den Gesamtkosten oft günstiger. Hier die wichtigsten Kostenfaktoren:
              </p>

              <div className="space-y-4 mb-6">
                <div className="bg-blue-50 p-4 md:p-6 rounded-xl">
                  <h3 className="text-lg md:text-xl font-bold text-gray-800 mb-3">💰 Anschaffungskosten</h3>
                  <p className="text-sm md:text-base text-gray-700 mb-2">
                    E-Autos kosten aktuell 5.000-15.000€ mehr als vergleichbare Verbrenner. Aber:
                  </p>
                  <ul className="text-sm md:text-base text-gray-700 space-y-1">
                    <li>• Preise fallen kontinuierlich (Batterie-Preise -80% seit 2013)</li>
                    <li>• Gebrauchtmarkt wächst: Nissan Leaf ab 10.000€, Renault Zoe ab 12.000€</li>
                    <li>• Leasing oft günstiger durch bessere Restwerte</li>
                  </ul>
                </div>

                <div className="bg-green-50 p-4 md:p-6 rounded-xl">
                  <h3 className="text-lg md:text-xl font-bold text-gray-800 mb-3">⚡ Betriebskosten (hier sparen Sie!)</h3>
                  <ul className="text-sm md:text-base text-gray-700 space-y-2">
                    <li>• <strong>Strom statt Benzin:</strong> 4-6€/100km vs. 8-12€/100km (bei Heimladung)</li>
                    <li>• <strong>Wartung:</strong> 35% günstiger (kein Ölwechsel, Zahnriemen, Auspuff, etc.)</li>
                    <li>• <strong>Versicherung:</strong> Oft 10-20% günstiger als Verbrenner</li>
                    <li>• <strong>KFZ-Steuer:</strong> 10 Jahre komplett befreit (bis 2030)</li>
                    <li>• <strong>Firmenwagen:</strong> 0,25% statt 1% Versteuerung = massive Ersparnis</li>
                  </ul>
                </div>
              </div>

              <div className="bg-gradient-to-br from-blue-50 to-green-50 p-6 md:p-8 rounded-xl">
                <h3 className="text-lg md:text-xl font-bold text-gray-800 mb-4">
                  💡 Rechnet sich ein E-Auto für mich?
                </h3>
                <p className="text-sm md:text-base text-gray-700 mb-4">
                  Über 8 Jahre Nutzungsdauer spart ein E-Auto trotz höherer Anschaffung oft 5.000-10.000€. 
                  Je mehr Sie fahren, desto schneller amortisiert sich der Mehrpreis.
                </p>
                <div className="flex gap-4">
                  <a 
                    href="/rechner"
                    className="inline-flex items-center gap-2 bg-blue-600 text-white px-6 py-3 rounded-xl font-semibold hover:bg-blue-700 transition-all"
                  >
                    <TrendingUp className="w-5 h-5" />
                    Zum Kostenrechner
                  </a>
                </div>
              </div>
            </section>

            {/* Section 4: Modellauswahl */}
            <section id="modellauswahl" className="mb-8 md:mb-12">
              <h2 className="text-xl md:text-3xl font-bold text-gray-800 mb-4 md:mb-6 flex items-center gap-3">
                <Car className="w-6 h-6 md:w-8 md:h-8 text-purple-600" />
                Modellauswahl: Welches E-Auto passt zu mir?
              </h2>

              <p className="text-sm md:text-base text-gray-700 leading-relaxed mb-4">
                Die Auswahl ist riesig. Hier sind die wichtigsten Kategorien und unsere Empfehlungen:
              </p>

              <div className="space-y-6">
                <div className="border-l-4 border-blue-500 pl-4">
                  <h3 className="text-lg md:text-xl font-bold text-gray-800 mb-2">Kleinwagen (20.000-30.000 €)</h3>
                  <p className="text-xs md:text-sm text-gray-600 mb-2">Ideal für: Stadt, Kurzstrecken, Zweitwagen</p>
                  <ul className="text-xs md:text-sm text-gray-700 space-y-1">
                    <li>• <strong>Renault Zoe</strong> - Klassiker, zuverlässig, gutes Preis-Leistungs-Verhältnis</li>
                    <li>• <strong>VW e-Up</strong> - Kompakt, wendig, ideal für die Stadt</li>
                    <li>• <strong>Fiat 500e</strong> - Stylish, modern, gut ausgestattet</li>
                  </ul>
                </div>

                <div className="border-l-4 border-green-500 pl-4">
                  <h3 className="text-lg md:text-xl font-bold text-gray-800 mb-2">Kompaktklasse (30.000-45.000 €)</h3>
                  <p className="text-xs md:text-sm text-gray-600 mb-2">Ideal für: Familien, Alltagsauto, mittlere Strecken</p>
                  <ul className="text-xs md:text-sm text-gray-700 space-y-1">
                    <li>• <strong>VW ID.3</strong> - Bestseller, große Reichweite, gute Ausstattung</li>
                    <li>• <strong>Hyundai Kona Electric</strong> - Praktisch, zuverlässig, SUV-Look</li>
                    <li>• <strong>Nissan Leaf</strong> - Bewährt, millionenfach verkauft, günstig gebraucht</li>
                  </ul>
                </div>

                <div className="border-l-4 border-purple-500 pl-4">
                  <h3 className="text-lg md:text-xl font-bold text-gray-800 mb-2">SUV & Mittelklasse (40.000-60.000 €)</h3>
                  <p className="text-xs md:text-sm text-gray-600 mb-2">Ideal für: Familien, Langstrecken, Komfort</p>
                  <ul className="text-xs md:text-sm text-gray-700 space-y-1">
                    <li>• <strong>VW ID.4 / ID.5</strong> - Geräumig, komfortabel, gute Reichweite</li>
                    <li>• <strong>Tesla Model Y</strong> - Schnell laden, großer Stauraum, tech-lastig</li>
                    <li>• <strong>Hyundai Ioniq 5</strong> - Ultraschnellladen (800V), modernes Design</li>
                  </ul>
                </div>

                <div className="border-l-4 border-yellow-500 pl-4">
                  <h3 className="text-lg md:text-xl font-bold text-gray-800 mb-2">Premium (60.000+ €)</h3>
                  <p className="text-xs md:text-sm text-gray-600 mb-2">Ideal für: Langstrecken, Geschäftsreisen, maximaler Komfort</p>
                  <ul className="text-xs md:text-sm text-gray-700 space-y-1">
                    <li>• <strong>Tesla Model 3 / Model S</strong> - Supercharger-Netzwerk, Autopilot</li>
                    <li>• <strong>BMW iX / i4</strong> - Luxus, Fahrdynamik, deutsche Qualität</li>
                    <li>• <strong>Mercedes EQS / EQE</strong> - Maximum an Komfort und Reichweite</li>
                  </ul>
                </div>
              </div>
            </section>

            {/* Section 5: Checkliste */}
            <section id="checkliste" className="mb-8 md:mb-12">
              <h2 className="text-xl md:text-3xl font-bold text-gray-800 mb-4 md:mb-6">
                Checkliste: Darauf sollten Sie achten
              </h2>

              <div className="bg-gradient-to-br from-green-50 to-blue-50 rounded-xl p-6 md:p-8">
                <h3 className="text-lg md:text-xl font-bold text-gray-800 mb-4">Vor dem Kauf prüfen:</h3>
                <div className="space-y-3">
                  {[
                    'Lademöglichkeit zuhause oder beim Arbeitgeber vorhanden?',
                    'Welche Reichweite benötige ich wirklich im Alltag?',
                    'Passt das Auto in mein Budget (inkl. Wallbox-Installation)?',
                    'Wie oft fahre ich Langstrecken? (Schnelllademöglichkeiten prüfen)',
                    'Gibt es Förderungen für mein Wunschmodell?',
                    'Probefahrt gemacht? (Wichtig für Fahrgefühl und Bedienung)',
                    'Garantie auf die Batterie geprüft? (meist 8 Jahre/160.000 km)',
                    'Gebrauchtwagen: Batteriezustand prüfen lassen!'
                  ].map((item, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                      <span className="text-sm md:text-base text-gray-700">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </section>

            {/* Fazit */}
            <div className="bg-gradient-to-r from-green-600 to-blue-600 rounded-xl p-6 md:p-8 text-white mt-12">
              <h2 className="text-2xl md:text-3xl font-bold mb-4">
                Fazit: Ist ein Elektroauto das Richtige für mich?
              </h2>
              <p className="text-base md:text-lg leading-relaxed mb-4">
                Ein Elektroauto lohnt sich besonders, wenn Sie:
              </p>
              <ul className="list-disc list-inside space-y-2 text-base md:text-lg mb-6">
                <li>Regelmäßig zuhause oder beim Arbeitgeber laden können</li>
                <li>Täglich weniger als 200 km fahren</li>
                <li>Langfristig denken und Gesamtkosten betrachten</li>
                <li>Wert auf Umweltschutz legen</li>
              </ul>
              <p className="text-lg font-semibold">
                Der beste erste Schritt: Nutzen Sie unseren kostenlosen Kostenrechner, um herauszufinden, 
                ob und wie viel Sie mit einem Elektroauto sparen können.
              </p>
            </div>
          </div>

          {/* Article Footer */}
          <footer className="mt-12 pt-8 border-t border-gray-200 px-6 md:px-10 pb-8">
            <div className="bg-gray-50 rounded-xl p-4 md:p-6">
              <h3 className="text-base md:text-lg font-bold text-gray-800 mb-2">Quellen & Weitere Informationen</h3>
              <ul className="text-xs md:text-sm text-gray-600 space-y-1">
                <li>• Fraunhofer ISI (2025): Batterien für Elektroautos - Faktencheck</li>
                <li>• ADAC Autokatalog: Elektrofahrzeuge - Technische Daten</li>
                <li>• Aktuelle Modellübersichten und Tests von Auto Motor Sport, ADAC</li>
              </ul>
            </div>
          </footer>
        </article>
      </div>

      {/* Footer */}
      <footer className="bg-white border-t border-gray-200 mt-12 md:mt-16 py-8">
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex flex-wrap justify-center gap-6 mb-6">
            <a
              href="/impressum"
              className="text-sm md:text-base text-gray-600 hover:text-gray-900 hover:underline transition-all duration-200"
            >
              Impressum
            </a>
            <span className="text-gray-400">|</span>
            <a
              href="/datenschutz"
              className="text-sm md:text-base text-gray-600 hover:text-gray-900 hover:underline transition-all duration-200"
            >
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
