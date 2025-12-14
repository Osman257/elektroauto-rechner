import React, { useEffect } from 'react';
import SEO from '../components/SEO';
import Header from '../components/Header';
import { 
  ArrowLeft,
  TrendingUp, 
  TrendingDown, 
  Home, 
  Zap, 
  PiggyBank, 
  AlertCircle, 
  CheckCircle, 
  Calculator, 
  Wallet,
  Euro, 
  Lightbulb, 
  ArrowRight, 
  Battery,
  BookOpen 
} from 'lucide-react';

export default function StrompreisePage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-white">
      <SEO 
        title="Strompreise 2025: Lohnt sich ein E-Auto noch? Kostenvergleich & Spartipps"
        description="Strompreise 2025: Durchschnitt 39,6 ct/kWh. E-Auto laden kostet 4,97€/100km vs. Benziner 10,28€. Lohnt sich Elektromobilität? Aktueller Kostenvergleich mit Spartipps."
        keywords="strompreis 2025, e-auto ladekosten, elektroauto stromkosten, laden zu hause, öffentliches laden, kostenvergleich e-auto, strompreisentwicklung"
        canonicalPath="/ratgeber/strompreise-2025"
        ogImage="/images/ratgeber/strompreise-2025-og.jpg"
        ogType="article"
        publishedDate="2025-12-13T12:00:00Z"
        modifiedDate="2025-12-13T12:00:00Z"
      />

      {/* Header */}
      <Header activeTab="ratgeber" />

      {/* Spacer */}
      <div className="h-20 md:h-24"></div>

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
          <div className="relative h-64 md:h-96 bg-gradient-to-br from-emerald-600 to-teal-600 overflow-hidden">
            <img 
              src="/images/ratgeber/strompreise-2025-hero.webp"
              alt="Strompreise 2025 - Lohnt sich ein E-Auto noch? Kostenvergleich Elektroauto vs Verbrenner"
              className="w-full h-full object-cover opacity-90"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
            <div className="absolute bottom-0 left-0 right-0 p-6 md:p-10 text-white">
              <div className="flex items-center gap-3 mb-3">
                <div className="bg-white/30 backdrop-blur-md p-2 rounded-lg shadow-lg">
                  <Wallet className="w-6 h-6 md:w-8 md:h-8" />
                </div>
                <span className="text-xs md:text-sm bg-white/30 backdrop-blur-md px-3 py-1 rounded-full font-semibold shadow-lg">📖 8 Min. Lesezeit</span>
                <span className="text-xs md:text-sm bg-white/30 backdrop-blur-md px-3 py-1 rounded-full font-semibold shadow-lg">Aktualisiert am 13. Dezember 2025</span>
              </div>
              <h1 className="text-2xl md:text-4xl lg:text-5xl font-bold leading-tight">
                Strompreise 2025: Lohnt sich ein E-Auto noch?
              </h1>
            </div>
          </div>

          {/* Article Content */}
          <div className="p-6 md:p-10">
            {/* Intro */}
            <div className="mb-8 md:mb-12">
              <p className="text-lg md:text-xl text-gray-600 leading-relaxed mb-4">
                Die Strompreise in Deutschland sind seit dem Höhepunkt der Energiekrise 2023 zwar deutlich gesunken, bleiben aber auf einem historisch hohen Niveau. Gleichzeitig steigen die Kosten für Benzin und Diesel durch die CO2-Bepreisung kontinuierlich an. Für E-Auto-Interessenten stellt sich daher die entscheidende Frage: <strong>Lohnt sich die Elektromobilität 2025 noch wirtschaftlich?</strong> Die Antwort hängt maßgeblich davon ab, wo und wie Sie laden.
              </p>
              <div className="bg-blue-50 border-2 border-blue-200 rounded-xl p-6">
                <p className="text-base md:text-lg text-gray-700 leading-relaxed">
                  <strong className="text-blue-700">⚡ Schnell-Überblick:</strong> Der durchschnittliche Strompreis liegt 2025 bei <strong>39,6 ct/kWh</strong> (günstigste Tarife ab 23 ct/kWh). Beim Laden zu Hause kostet ein E-Auto etwa <strong>4,97 €/100 km</strong> – halb so viel wie ein Benziner (10,28 €). An öffentlichen Schnellladern schmilzt der Vorteil jedoch: Hier können die Kosten auf über 12 €/100 km steigen. Mit der richtigen Strategie sparen E-Auto-Fahrer bei 15.000 km jährlich <strong>400-1.100 € gegenüber Verbrennern</strong>!
                </p>
              </div>
            </div>

            {/* Inhaltsverzeichnis */}
            <nav className="bg-gray-50 rounded-xl p-6 mb-8 md:mb-12">
              <h2 className="text-xl md:text-2xl font-bold text-gray-800 mb-4">
                Inhaltsverzeichnis
              </h2>
              <ol className="space-y-2 text-sm md:text-base">
                <li><a href="#strompreise-aktuell" className="text-blue-600 hover:underline">1. Aktuelle Strompreise 2025 im Überblick</a></li>
                <li><a href="#kostenvergleich" className="text-blue-600 hover:underline">2. E-Auto vs. Benziner vs. Diesel: Der große Kostenvergleich</a></li>
                <li><a href="#spartipps" className="text-blue-600 hover:underline">3. 5 Tipps: So senken Sie Ihre E-Auto Ladekosten</a></li>
                <li><a href="#zusatzvorteile" className="text-blue-600 hover:underline">4. Weitere Kostenvorteile von E-Autos</a></li>
                <li><a href="#fazit" className="text-blue-600 hover:underline">5. Fazit: Lohnt sich ein E-Auto 2025?</a></li>
                <li><a href="#ausblick" className="text-blue-600 hover:underline">6. Ausblick 2026 und Langfristperspektive</a></li>
              </ol>
            </nav>

            {/* Strompreis-Übersicht */}
            <section id="strompreise-aktuell" className="mb-12 scroll-mt-24">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                So viel kostet Strom 2025
              </h2>
        
        <div className="bg-emerald-50 border-l-4 border-emerald-500 p-6 mb-6">
          <div className="flex items-start">
            <Zap className="w-6 h-6 text-emerald-600 mr-3 flex-shrink-0 mt-1" />
            <div>
              <h3 className="font-bold text-lg text-gray-900 mb-2">Durchschnittlicher Strompreis Dezember 2025</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
                <div className="bg-white p-4 rounded-lg">
                  <div className="text-sm text-gray-600 mb-1">Grundversorgung</div>
                  <div className="text-2xl font-bold text-gray-900">42,9 Cent/kWh</div>
                </div>
                <div className="bg-white p-4 rounded-lg">
                  <div className="text-sm text-gray-600 mb-1">Günstiger Alternativtarif</div>
                  <div className="text-2xl font-bold text-emerald-600">23-27 Cent/kWh</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <p className="text-gray-700 mb-4">
          Die gute Nachricht: Die Strompreise sind 2025 gegenüber dem Rekordjahr 2023 deutlich gesunken. Damals kostete eine Kilowattstunde im Durchschnitt 47 Cent. Heute liegen die Preise für Neukunden bei günstigeren Anbietern zwischen 23 und 27 Cent pro kWh.
        </p>

        <p className="text-gray-700 mb-6">
          Wer noch in der teuren Grundversorgung steckt, zahlt allerdings weiterhin über 40 Cent pro kWh. Ein Anbieterwechsel kann die Stromrechnung um bis zu 36 Prozent senken – das sind bei einem 4-Personen-Haushalt knapp 750 Euro pro Jahr.
        </p>

        <div className="bg-gray-50 p-6 rounded-lg mb-6">
          <h3 className="font-bold text-lg mb-4 flex items-center">
            <TrendingDown className="w-5 h-5 text-emerald-600 mr-2" />
            Preisentwicklung
          </h3>
          <ul className="space-y-2 text-gray-700">
            <li className="flex items-start">
              <span className="text-emerald-600 mr-2">•</span>
              <span><strong>2023:</strong> Höchststand mit 47 Cent/kWh (Energiekrise)</span>
            </li>
            <li className="flex items-start">
              <span className="text-emerald-600 mr-2">•</span>
              <span><strong>Anfang 2025:</strong> Rückgang auf durchschnittlich 39,8 Cent/kWh</span>
            </li>
            <li className="flex items-start">
              <span className="text-emerald-600 mr-2">•</span>
              <span><strong>Dezember 2025:</strong> Günstigste Tarife bei 23-27 Cent/kWh</span>
            </li>
            <li className="flex items-start">
              <span className="text-emerald-600 mr-2">•</span>
              <span><strong>Prognose 2026:</strong> Weitere Senkung der Netzentgelte um bis zu 57% durch Bundeszuschuss</span>
            </li>
          </ul>
        </div>

        <div className="bg-blue-50 border-l-4 border-blue-500 p-6">
          <div className="flex items-start">
            <AlertCircle className="w-6 h-6 text-blue-600 mr-3 flex-shrink-0 mt-1" />
            <div>
              <h3 className="font-bold text-lg text-gray-900 mb-2">Ausblick 2026</h3>
              <p className="text-gray-700">
                Die Bundesregierung plant für 2026 einen Zuschuss von 6,5 Milliarden Euro zur Senkung der Netzentgelte. Das könnte die Strompreise um weitere 2-3 Cent pro kWh reduzieren und erstmals seit Jahren echte Entlastung bringen.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Kostenvergleich */}
      <section id="kostenvergleich" className="mb-12 scroll-mt-24">
        <h2 className="text-3xl font-bold text-gray-900 mb-6">
          E-Auto vs. Benziner vs. Diesel: Der große Kostenvergleich
        </h2>

        <p className="text-gray-700 mb-6">
          Die entscheidende Frage: Wie schneiden E-Autos bei den aktuellen Strompreisen im Vergleich zu Verbrennern ab? Die Antwort hängt stark davon ab, wo und wie man lädt.
        </p>

        <div className="space-y-8 mb-8">
          {/* Heimladen */}
          <div className="bg-emerald-50 p-6 rounded-lg">
            <div className="flex items-center mb-4">
              <Home className="w-8 h-8 text-emerald-600 mr-3" />
              <h3 className="text-2xl font-bold text-gray-900">Laden zu Hause</h3>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
              <div className="bg-white p-4 rounded-lg border-2 border-emerald-500">
                <div className="text-sm text-gray-600 mb-1">E-Auto</div>
                <div className="text-3xl font-bold text-emerald-600">4,97 €</div>
                <div className="text-xs text-gray-500 mt-1">pro 100 km</div>
              </div>
              <div className="bg-white p-4 rounded-lg">
                <div className="text-sm text-gray-600 mb-1">Diesel</div>
                <div className="text-3xl font-bold text-gray-900">7,68 €</div>
                <div className="text-xs text-gray-500 mt-1">pro 100 km</div>
              </div>
              <div className="bg-white p-4 rounded-lg">
                <div className="text-sm text-gray-600 mb-1">Benziner</div>
                <div className="text-3xl font-bold text-gray-900">10,28 €</div>
                <div className="text-xs text-gray-500 mt-1">pro 100 km</div>
              </div>
            </div>

            <div className="bg-white p-4 rounded-lg">
              <div className="flex items-center justify-between mb-2">
                <span className="font-semibold text-gray-900">Jahresersparnis bei 15.000 km</span>
                <PiggyBank className="w-5 h-5 text-emerald-600" />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <div className="text-sm text-gray-600">vs. Benziner</div>
                  <div className="text-xl font-bold text-emerald-600">+796 €</div>
                </div>
                <div>
                  <div className="text-sm text-gray-600">vs. Diesel</div>
                  <div className="text-xl font-bold text-emerald-600">+407 €</div>
                </div>
              </div>
            </div>

            <div className="mt-4 text-sm text-gray-700">
              <p className="mb-2"><strong>Rechnung:</strong> Durchschnittlicher E-Auto-Verbrauch 18 kWh/100km, Haushaltsstrompreis 27,6 Cent/kWh (günstigerer Alternativtarif)</p>
            </div>
          </div>

          {/* Öffentliches Laden */}
          <div className="bg-yellow-50 p-6 rounded-lg">
            <div className="flex items-center mb-4">
              <Zap className="w-8 h-8 text-yellow-600 mr-3" />
              <h3 className="text-2xl font-bold text-gray-900">Öffentliches Laden</h3>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
              <div className="bg-white p-4 rounded-lg">
                <div className="text-sm text-gray-600 mb-1">AC-Laden (22 kW)</div>
                <div className="text-2xl font-bold text-gray-900">35-55 ct/kWh</div>
                <div className="text-xs text-gray-500 mt-1">≈ 6,30-9,90 € pro 100 km</div>
              </div>
              <div className="bg-white p-4 rounded-lg">
                <div className="text-sm text-gray-600 mb-1">DC-Schnellladen</div>
                <div className="text-2xl font-bold text-gray-900">45-65 ct/kWh</div>
                <div className="text-xs text-gray-500 mt-1">≈ 8,10-11,70 € pro 100 km</div>
              </div>
              <div className="bg-white p-4 rounded-lg">
                <div className="text-sm text-gray-600 mb-1">HPC (>150 kW)</div>
                <div className="text-2xl font-bold text-gray-900">55-79 ct/kWh</div>
                <div className="text-xs text-gray-500 mt-1">≈ 9,90-14,22 € pro 100 km</div>
              </div>
            </div>

            <div className="bg-white p-4 rounded-lg">
              <div className="flex items-start">
                <AlertCircle className="w-5 h-5 text-yellow-600 mr-2 flex-shrink-0 mt-0.5" />
                <div className="text-sm text-gray-700">
                  <p className="font-semibold mb-2">Achtung: Der Preisvorteil schmilzt!</p>
                  <p>Bei ausschließlich öffentlichem Laden (60 Cent/kWh durchschnittlich) betragen die Kosten etwa 10,80 Euro pro 100 km. Damit liegt das E-Auto auf ähnlichem Niveau wie ein Benziner oder sogar leicht darüber.</p>
                </div>
              </div>
            </div>
          </div>

          {/* PV-Anlage */}
          <div className="bg-green-50 p-6 rounded-lg">
            <div className="flex items-center mb-4">
              <CheckCircle className="w-8 h-8 text-green-600 mr-3" />
              <h3 className="text-2xl font-bold text-gray-900">Laden mit eigener PV-Anlage</h3>
            </div>
            
            <div className="bg-white p-4 rounded-lg mb-4">
              <div className="text-center">
                <div className="text-sm text-gray-600 mb-1">Kosten bei eigenem Solarstrom</div>
                <div className="text-4xl font-bold text-green-600">1,80-2,70 €</div>
                <div className="text-xs text-gray-500 mt-1">pro 100 km (bei 10-15 ct/kWh Erzeugungskosten)</div>
              </div>
            </div>

            <div className="bg-white p-4 rounded-lg">
              <div className="font-semibold text-gray-900 mb-2">Jahresersparnis bei 15.000 km:</div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <div className="text-sm text-gray-600">vs. Benziner</div>
                  <div className="text-2xl font-bold text-green-600">+1.164 €</div>
                </div>
                <div>
                  <div className="text-sm text-gray-600">vs. Haushaltsstrom</div>
                  <div className="text-2xl font-bold text-green-600">+402 €</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        
      </section>

      {/* Spartipps */}
      <section id="spartipps" className="mb-12 scroll-mt-24">
        <h2 className="text-3xl font-bold text-gray-900 mb-6">
          5 Tipps: So senken Sie Ihre E-Auto Ladekosten
        </h2>

        <div className="space-y-4">
          <div className="bg-white border-l-4 border-emerald-500 p-6 shadow-sm">
            <h3 className="text-xl font-bold text-gray-900 mb-2">1. Stromanbieter wechseln</h3>
            <p className="text-gray-700">
              Raus aus der teuren Grundversorgung! Ein Wechsel zu einem günstigen Alternativtarif spart bis zu 20 Cent pro kWh. Bei 15.000 km Fahrleistung sind das über 500 Euro pro Jahr.
            </p>
          </div>

          <div className="bg-white border-l-4 border-emerald-500 p-6 shadow-sm">
            <h3 className="text-xl font-bold text-gray-900 mb-2">2. Nachtstrom nutzen</h3>
            <p className="text-gray-700">
              Spezielle Nachtstromtarife bieten zwischen 22 und 6 Uhr oft nur 20-25 Cent pro kWh. Mit intelligentem Lademanagement lädt Ihr E-Auto automatisch in den günstigsten Zeiten.
            </p>
          </div>

          <div className="bg-white border-l-4 border-emerald-500 p-6 shadow-sm">
            <h3 className="text-xl font-bold text-gray-900 mb-2">3. Arbeitgeber-Laden nutzen</h3>
            <p className="text-gray-700">
              Viele Arbeitgeber bieten kostenloses oder vergünstigtes Laden an. Nutzen Sie diese Möglichkeit – jede kWh zählt! Laut Studien finden 77% aller Ladevorgänge zu Hause statt, aber Arbeitgeber-Laden kann ein wichtiger Zusatz sein.
            </p>
          </div>

          <div className="bg-white border-l-4 border-emerald-500 p-6 shadow-sm">
            <h3 className="text-xl font-bold text-gray-900 mb-2">4. THG-Quote verkaufen</h3>
            <p className="text-gray-700">
              Als E-Auto-Besitzer können Sie Ihre CO2-Einsparungen verkaufen. Die THG-Quote bringt 2025 zwischen 50 und 115 Euro pro Jahr – das reduziert die effektiven Ladekosten um 25-30 Euro monatlich.
            </p>
          </div>

          <div className="bg-white border-l-4 border-emerald-500 p-6 shadow-sm">
            <h3 className="text-xl font-bold text-gray-900 mb-2">5. PV-Anlage als langfristige Investition</h3>
            <p className="text-gray-700">
              Mit eigener Photovoltaik-Anlage produzieren Sie Strom für 10-15 Cent pro kWh. Die Investition amortisiert sich durch die Einsparungen beim E-Auto-Laden und Haushaltsverbrauch oft schon nach 8-12 Jahren.
            </p>
          </div>
        </div>
      </section>

      {/* Zusätzliche Vorteile */}
      <section id="zusatzvorteile" className="mb-12 scroll-mt-24">
        <h2 className="text-3xl font-bold text-gray-900 mb-6">
          Weitere Kostenvorteile von E-Autos
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-blue-50 p-6 rounded-lg">
            <h3 className="text-lg font-bold text-gray-900 mb-3">Steuerbefreiung</h3>
            <p className="text-gray-700 text-sm mb-3">
              E-Autos mit Erstzulassung bis 31.12.2025 sind bis Ende 2030 von der Kfz-Steuer befreit. Wer 2025 kauft, spart noch mindestens 5 Jahre Steuern.
            </p>
            <div className="text-emerald-600 font-bold">Ersparnis: ~50-100 € pro Jahr</div>
          </div>

          <div className="bg-blue-50 p-6 rounded-lg">
            <h3 className="text-lg font-bold text-gray-900 mb-3">Wartungskosten</h3>
            <p className="text-gray-700 text-sm mb-3">
              Keine Ölwechsel, weniger Verschleißteile, längere Bremsbeläge durch Rekuperation. E-Autos sind in der Wartung deutlich günstiger als Verbrenner.
            </p>
            <div className="text-emerald-600 font-bold">Ersparnis: ~200-400 € pro Jahr</div>
          </div>

          <div className="bg-blue-50 p-6 rounded-lg">
            <h3 className="text-lg font-bold text-gray-900 mb-3">Dienstwagenbesteuerung</h3>
            <p className="text-gray-700 text-sm mb-3">
              Bei privater Nutzung müssen nur 0,25% des Bruttolistenpreises versteuert werden (bis 95.000 Euro), statt 1% bei Verbrennern.
            </p>
            <div className="text-emerald-600 font-bold">Ersparnis: bis zu mehrere hundert € monatlich</div>
          </div>

          <div className="bg-blue-50 p-6 rounded-lg">
            <h3 className="text-lg font-bold text-gray-900 mb-3">CO2-Preis-Entwicklung</h3>
            <p className="text-gray-700 text-sm mb-3">
              Der CO2-Preis steigt von 55 Euro (2025) auf 65 Euro (2026) pro Tonne. Das macht Benzin und Diesel kontinuierlich teurer, während Strom stabil bleibt.
            </p>
            <div className="text-emerald-600 font-bold">Trend: Preisvorteil wächst</div>
          </div>
        </div>
      </section>

      {/* Fazit */}
      <section id="fazit" className="mb-8 md:mb-12">
        <div className="bg-gradient-to-r from-blue-600 to-green-600 rounded-xl p-6 md:p-8 text-white">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">
            Fazit: Strompreise 2025 – E-Autos rechnen sich bei richtiger Ladestrategie
          </h2>
          <p className="text-base md:text-lg leading-relaxed mb-4">
            Die <strong>Strompreise 2025 liegen bei durchschnittlich 39,6 ct/kWh</strong>, mit günstigen Alternativtarifen ab 23 ct/kWh. Trotz des hohen Preisniveaus sind E-Autos beim <strong>Laden zu Hause weiterhin deutlich günstiger</strong> als Verbrenner: Mit 4,97 €/100 km sparen Sie gegenüber einem Benziner (10,28 €/100 km) rund 53% der Energiekosten. Bei 15.000 km jährlich sind das <strong>400-1.100 € Ersparnis</strong>.
          </p>
          <p className="text-base md:text-lg leading-relaxed mb-6">
            Der Schlüssel zum Erfolg liegt in der <strong>Ladestrategie</strong>: Wer 80% zu Hause oder beim Arbeitgeber lädt, profitiert maximal. An öffentlichen Schnellladern (55-79 ct/kWh) schmilzt der Vorteil dagegen deutlich. Mit der richtigen Kombination aus günstigen Stromtarifen, Nachtstrom-Nutzung, THG-Quote (50-115 €/Jahr) und eventuell einer PV-Anlage rechnet sich die Elektromobilität 2025 eindeutig.
          </p>
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
            <p className="text-lg font-semibold">
              Langfristig wird sich die Schere weiter öffnen: Während Benzin und Diesel durch steigende CO2-Preise teurer werden (2026: +3 Cent/Liter), sinken die Strompreise 2026 voraussichtlich durch Netzentgelt-Zuschüsse um 2-3 Cent/kWh. Der <strong>beste Zeitpunkt für den E-Auto-Einstieg ist jetzt</strong> – nutzen Sie unsere Rechner für Ihre persönliche Kalkulation!
            </p>
          </div>
        </div>
      </section>

      {/* CTA Box */}
      <div className="bg-gradient-to-r from-purple-600 to-blue-600 rounded-2xl p-8 text-center text-white mb-8">
        <h3 className="text-2xl font-bold mb-4">
          📊 Berechnen Sie Ihre E-Auto-Kosten
        </h3>
        <p className="text-lg mb-6 max-w-2xl mx-auto">
          Mit unserem TCO-Rechner können Sie die Gesamtkosten Ihres E-Autos inklusive Stromkosten berechnen und mit einem Verbrenner vergleichen.
        </p>
        <a 
          href="/rechner/kostenrechner"
          className="inline-flex items-center gap-3 bg-white text-blue-600 font-bold px-8 py-4 rounded-full hover:shadow-2xl hover:scale-105 transition-all duration-200"
        >
          <Calculator className="w-6 h-6" />
          Zum Kostenrechner
        </a>
      </div>
    </div>
  </article>

  {/* Quellen */}
  <div className="mt-8 bg-gray-100 rounded-xl p-6 text-sm text-gray-600">
    <h3 className="font-bold text-gray-800 mb-3">📚 Quellen & Referenzen:</h3>
    <ul className="space-y-1 text-xs">
      <li>• Strompreis-Daten: BDEW Strompreisanalyse 2025, Verivox Verbraucherpreisindex, Check24 Strompreisvergleich (Dezember 2025)</li>
      <li>• Kostenvergleiche: ADAC Kostenvergleich E-Auto vs. Verbrenner (Oktober 2025), BMWK Energiekostenvergleich</li>
      <li>• Ladeinfrastruktur: Bundesnetzagentur Ladesäulenregister, BDEW Ladesäulen-Statistik (Dezember 2025)</li>
      <li>• Prognosen: BMWK Strompreisprognose bis 2040, Agora Energiewende, Fraunhofer ISE Analysen</li>
      <li>• Spritpreise: Statistisches Bundesamt, Mineralölwirtschaftsverband (Dezember 2025)</li>
      <li>• CO2-Preise: Bundesministerium für Wirtschaft und Klimaschutz, nationale CO2-Bepreisung</li>
    </ul>
    <p className="mt-4 leading-relaxed">
      <strong>Haftungsausschluss:</strong> Alle Angaben ohne Gewähr. Preise können regional variieren und sich ändern. Strompreise basieren auf bundesweiten Durchschnittswerten und können je nach Anbieter und Region abweichen. Die angegebenen Kostenvergleiche dienen der Orientierung und ersetzen keine individuelle Kalkulation. Förderungen und steuerliche Vorteile können sich ändern.
    </p>
  </div>

  {/* Related Articles */}
  <div className="mt-8 bg-blue-50 rounded-xl p-6">
    <h3 className="text-lg font-bold text-gray-800 mb-4">📚 Weitere hilfreiche Artikel:</h3>
    <div className="space-y-2">
      <a href="/ratgeber/wallbox-kosten-installation" className="block text-blue-600 hover:underline text-sm md:text-base">
        → Wallbox Kosten & Installation 2025: Kompletter Guide
      </a>
      <a href="/rechner/kostenrechner" className="block text-blue-600 hover:underline text-sm md:text-base">
        → TCO-Rechner: E-Auto vs Verbrenner Kostenvergleich
      </a>
      <a href="/ratgeber/thg-quote" className="block text-blue-600 hover:underline text-sm md:text-base">
        → THG-Quote 2025: Bis zu 400€ pro Jahr mit E-Auto verdienen
      </a>
      <a href="/ratgeber/elektroauto-reichweite-winter-test" className="block text-blue-600 hover:underline text-sm md:text-base">
        → Elektroauto im Winter: Reichweite & Realtest
      </a>
    </div>
  </div>
</div>

      {/* Site Footer */}
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