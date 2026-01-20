import React, { useEffect } from 'react';
import SEO from '../components/SEO';
import Header from '../components/Header';
import { 
  ArrowLeft,
  Zap,
  Euro,
  Smartphone,
  CreditCard,
  MapPin,
  AlertCircle,
  CheckCircle,
  Calculator,
  Lightbulb,
  TrendingDown,
  Clock,
  Shield,
  Search
} from 'lucide-react';

export default function OeffentlichesLadenPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-white">
      <SEO 
        title="Öffentliches Laden 2026: Kosten, Apps & Ladekarten-Vergleich | e-Autowelt"
        description="Öffentlich laden in Deutschland: Aktuelle Preise von 0,49-0,89€/kWh, die besten Lade-Apps im Test & Ladekarten-Vergleich. So sparen Sie bis zu 30% beim Laden unterwegs!"
        keywords="öffentliches laden kosten, lade-apps test, ladekarten vergleich, elektroauto laden unterwegs, EnBW mobility+, Maingau Autostrom, ad-hoc laden"
        canonicalPath="/ratgeber/oeffentliches-laden-kosten-apps-ladekarten"
        ogImage="/images/ratgeber/oeffentliches-laden-hero.webp"
        ogType="article"
        publishedDate="2026-01-19T12:00:00Z"
        modifiedDate="2026-01-19T12:00:00Z"
      />

      <Header activeTab="ratgeber" />

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

        <article className="bg-white rounded-2xl shadow-xl overflow-hidden">
          {/* Hero Image */}
          <div className="relative h-64 md:h-96 bg-gradient-to-br from-blue-600 to-purple-600 overflow-hidden">
            <img 
              src="/images/ratgeber/oeffentliches-laden-hero.webp"
              alt="Elektroauto an öffentlicher Schnellladesäule mit Smartphone-App"
              className="w-full h-full object-cover opacity-90"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
            <div className="absolute bottom-0 left-0 right-0 p-6 md:p-10 text-white">
              <div className="flex flex-wrap items-center gap-3 mb-3">
                <div className="bg-white/30 backdrop-blur-md p-2 rounded-lg shadow-lg">
                  <Zap className="w-6 h-6 md:w-8 md:h-8" />
                </div>
                <span className="text-xs md:text-sm bg-white/30 backdrop-blur-md px-3 py-1 rounded-full font-semibold shadow-lg">
                  📖 12 Min. Lesezeit
                </span>
                <span className="text-xs md:text-sm bg-white/30 backdrop-blur-md px-3 py-1 rounded-full font-semibold shadow-lg">
                  Aktualisiert am 19. Januar 2026
                </span>
              </div>
              <h1 className="text-2xl md:text-4xl lg:text-5xl font-bold leading-tight">
                Öffentliches Laden 2026: Kosten, Apps & Ladekarten im Vergleich
              </h1>
            </div>
          </div>

          <div className="p-6 md:p-10">
            {/* Intro */}
            <div className="mb-8 md:mb-12">
              <p className="text-lg md:text-xl text-gray-600 leading-relaxed mb-4">
                Wer sein <strong>Elektroauto öffentlich laden</strong> möchte, steht vor einem echten Tarifdschungel: 
                Über 200 verschiedene Ladekarten, unzählige Apps und Preise, die je nach Anbieter um bis zu 
                50 Cent pro kWh variieren können. Doch keine Sorge – mit dem richtigen Wissen und der 
                passenden Ladekarte sparen Sie bares Geld und laden entspannt unterwegs.
              </p>
              <div className="bg-blue-50 border-2 border-blue-200 rounded-xl p-6">
                <p className="text-base md:text-lg text-gray-700 leading-relaxed">
                  <strong className="text-blue-700">⚡ Schnell-Überblick:</strong> Deutschland verfügt über 
                  <strong> rund 185.000 öffentliche Ladepunkte</strong> (Stand: November 2025), davon über 
                  45.000 Schnellladepunkte. Die Kosten liegen zwischen <strong>0,49€ und 0,89€ pro kWh</strong> – 
                  je nach Anbieter und Tarif. EnBW mobility+ ist Testsieger bei den freien Anbietern, 
                  während Maingau Autostrom durch günstige Preise ohne Grundgebühr punktet.
                </p>
              </div>
            </div>

            {/* Inhaltsverzeichnis */}
            <nav className="bg-gray-50 rounded-xl p-6 mb-8 md:mb-12">
              <h2 className="text-xl md:text-2xl font-bold text-gray-800 mb-4">
                Inhaltsverzeichnis
              </h2>
              <ol className="space-y-2 text-sm md:text-base">
                <li><a href="#kosten" className="text-blue-600 hover:underline">1. Was kostet öffentliches Laden 2026?</a></li>
                <li><a href="#ladekarten" className="text-blue-600 hover:underline">2. Die besten Ladekarten im Vergleich</a></li>
                <li><a href="#apps" className="text-blue-600 hover:underline">3. Lade-Apps im Test: Welche ist die Beste?</a></li>
                <li><a href="#ad-hoc" className="text-blue-600 hover:underline">4. Ad-hoc-Laden ohne Vertrag</a></li>
                <li><a href="#ladeinfrastruktur" className="text-blue-600 hover:underline">5. Ladeinfrastruktur in Deutschland</a></li>
                <li><a href="#tipps" className="text-blue-600 hover:underline">6. 7 Tipps für günstiges Laden unterwegs</a></li>
                <li><a href="#fazit" className="text-blue-600 hover:underline">7. Fazit</a></li>
              </ol>
            </nav>

            {/* Section 1: Kosten */}
            <section id="kosten" className="mb-12 scroll-mt-24">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                1. Was kostet öffentliches Laden 2026?
              </h2>

              <p className="text-gray-700 mb-4 leading-relaxed">
                Die Kosten für das <strong>öffentliche Laden</strong> Ihres Elektroautos variieren 2025 stark – 
                je nach Anbieter, Ladeart und Tarifmodell. Grundsätzlich gilt: Wer mit Ladekarte oder App lädt, 
                zahlt weniger als beim spontanen Ad-hoc-Laden ohne Vertrag.
              </p>

              <div className="bg-emerald-50 border-l-4 border-emerald-500 p-6 mb-6">
                <div className="flex items-start">
                  <Euro className="w-6 h-6 text-emerald-600 mr-3 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-bold text-lg text-gray-900 mb-2">Aktuelle Durchschnittspreise</h3>
                    <p className="text-gray-700">
                      An <strong>AC-Normalladepunkten</strong> zahlen Sie im Schnitt etwa <strong>0,52€ pro kWh</strong>. 
                      An <strong>DC-Schnellladern</strong> liegt der Preis bei durchschnittlich <strong>0,60€ pro kWh</strong>. 
                      Zum Vergleich: Zuhause laden Sie für etwa 0,33-0,35€/kWh.
                    </p>
                  </div>
                </div>
              </div>

              <h3 className="text-xl md:text-2xl font-bold text-gray-800 mb-4">
                Preisübersicht nach Ladeart
              </h3>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div className="bg-white p-6 rounded-lg border-2 border-blue-500 shadow-sm">
                  <div className="text-sm text-gray-600 mb-1">AC-Laden (Wechselstrom)</div>
                  <div className="text-3xl font-bold text-blue-600">0,47 - 0,59€</div>
                  <div className="text-xs text-gray-500 mt-1">pro kWh mit Ladekarte</div>
                </div>
                <div className="bg-white p-6 rounded-lg border-2 border-purple-500 shadow-sm">
                  <div className="text-sm text-gray-600 mb-1">DC-Schnellladen (Gleichstrom)</div>
                  <div className="text-3xl font-bold text-purple-600">0,55 - 0,79€</div>
                  <div className="text-xs text-gray-500 mt-1">pro kWh mit Ladekarte</div>
                </div>
                <div className="bg-white p-6 rounded-lg border-2 border-orange-500 shadow-sm">
                  <div className="text-sm text-gray-600 mb-1">IONITY (Schnellladen)</div>
                  <div className="text-3xl font-bold text-orange-600">0,49 - 0,75€</div>
                  <div className="text-xs text-gray-500 mt-1">je nach Tarif (Abo vs. Ad-hoc)</div>
                </div>
                <div className="bg-white p-6 rounded-lg border-2 border-red-500 shadow-sm">
                  <div className="text-sm text-gray-600 mb-1">Ad-hoc-Laden (ohne Vertrag)</div>
                  <div className="text-3xl font-bold text-red-600">0,69 - 0,89€</div>
                  <div className="text-xs text-gray-500 mt-1">pro kWh – deutlich teurer!</div>
                </div>
              </div>

              <h3 className="text-xl md:text-2xl font-bold text-gray-800 mb-4">
                Rechenbeispiel: 100 km Reichweite laden
              </h3>

              <p className="text-gray-700 mb-4 leading-relaxed">
                Bei einem durchschnittlichen Verbrauch von 20 kWh pro 100 km ergeben sich folgende Kosten:
              </p>

              <div className="overflow-x-auto mb-6">
                <table className="w-full border-collapse bg-white rounded-lg overflow-hidden shadow-sm">
                  <thead className="bg-gray-100">
                    <tr>
                      <th className="px-4 py-3 text-left text-sm font-bold text-gray-700">Lademethode</th>
                      <th className="px-4 py-3 text-right text-sm font-bold text-gray-700">Kosten/100 km</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200">
                    <tr>
                      <td className="px-4 py-3 text-gray-700">Zuhause (Wallbox, 0,35€/kWh)</td>
                      <td className="px-4 py-3 text-right font-semibold text-emerald-600">7,00€</td>
                    </tr>
                    <tr>
                      <td className="px-4 py-3 text-gray-700">Öffentlich AC (0,52€/kWh)</td>
                      <td className="px-4 py-3 text-right font-semibold text-blue-600">10,40€</td>
                    </tr>
                    <tr>
                      <td className="px-4 py-3 text-gray-700">Schnellladen DC (0,60€/kWh)</td>
                      <td className="px-4 py-3 text-right font-semibold text-purple-600">12,00€</td>
                    </tr>
                    <tr>
                      <td className="px-4 py-3 text-gray-700">Ad-hoc Schnellladen (0,79€/kWh)</td>
                      <td className="px-4 py-3 text-right font-semibold text-red-600">15,80€</td>
                    </tr>
                    <tr className="bg-gray-50">
                      <td className="px-4 py-3 text-gray-700">Zum Vergleich: Benziner (8l/100km)</td>
                      <td className="px-4 py-3 text-right font-semibold text-gray-600">~12,80€</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <div className="bg-yellow-50 border-l-4 border-yellow-500 p-6 mb-6">
                <div className="flex items-start">
                  <AlertCircle className="w-6 h-6 text-yellow-600 mr-3 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-bold text-lg text-gray-900 mb-2">Vorsicht: Blockiergebühren</h3>
                    <p className="text-gray-700">
                      Viele Anbieter erheben <strong>Blockiergebühren</strong>, wenn Sie nach dem Laden zu lange 
                      an der Säule stehen. Typisch sind 10-15 Cent pro Minute nach 60-180 Minuten. 
                      Bei Maingau sind die Standzeitzuschläge auf maximal 12€ pro Ladevorgang gedeckelt.
                    </p>
                  </div>
                </div>
              </div>
            </section>

            {/* Section 2: Ladekarten */}
            <section id="ladekarten" className="mb-12 scroll-mt-24">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                2. Die besten Ladekarten im Vergleich
              </h2>

              <p className="text-gray-700 mb-4 leading-relaxed">
                Eine <strong>Ladekarte</strong> ist der Schlüssel zu günstigem Laden unterwegs. Sie ermöglicht 
                den Zugang zu Ladenetzen verschiedener Betreiber (Roaming) und bietet meist bessere Preise 
                als das spontane Ad-hoc-Laden. Wir stellen die wichtigsten Anbieter vor.
              </p>

              <h3 className="text-xl md:text-2xl font-bold text-gray-800 mb-4">
                Top-Ladekarten ohne Grundgebühr
              </h3>

              {/* Maingau */}
              <div className="bg-white border-2 border-gray-200 rounded-xl p-6 mb-4 hover:border-emerald-500 transition-colors">
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h4 className="text-lg font-bold text-gray-900">Maingau Autostrom</h4>
                    <span className="text-sm text-emerald-600 font-medium">Preis-Leistungs-Tipp</span>
                  </div>
                  <div className="text-right">
                    <div className="text-2xl font-bold text-emerald-600">0€</div>
                    <div className="text-xs text-gray-500">Grundgebühr</div>
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-4 mb-4">
                  <div>
                    <div className="text-sm text-gray-600">AC-Laden</div>
                    <div className="font-bold text-gray-900">0,49€/kWh</div>
                  </div>
                  <div>
                    <div className="text-sm text-gray-600">DC-Schnellladen</div>
                    <div className="font-bold text-gray-900">0,59€/kWh</div>
                  </div>
                </div>
                <p className="text-sm text-gray-600">
                  ✓ Europaweit einheitliche Preise ✓ Transparente Tarifstruktur ✓ Blockiergebühren gedeckelt
                </p>
              </div>

              {/* ADAC e-Charge */}
              <div className="bg-white border-2 border-gray-200 rounded-xl p-6 mb-4 hover:border-yellow-500 transition-colors">
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h4 className="text-lg font-bold text-gray-900">ADAC e-Charge (mit Aral Pulse)</h4>
                    <span className="text-sm text-yellow-600 font-medium">Für ADAC-Mitglieder</span>
                  </div>
                  <div className="text-right">
                    <div className="text-2xl font-bold text-yellow-600">0€</div>
                    <div className="text-xs text-gray-500">für Mitglieder</div>
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-4 mb-4">
                  <div>
                    <div className="text-sm text-gray-600">Aral Pulse Stationen</div>
                    <div className="font-bold text-gray-900">0,55€/kWh</div>
                  </div>
                  <div>
                    <div className="text-sm text-gray-600">Roaming (andere Betreiber)</div>
                    <div className="font-bold text-gray-900">0,75€/kWh</div>
                  </div>
                </div>
                <p className="text-sm text-gray-600">
                  ✓ Einheitspreis für AC und DC ✓ Keine Blockiergebühr an Aral Pulse ✓ Gutes Autobahnnetz
                </p>
              </div>

              {/* Entega */}
              <div className="bg-white border-2 border-gray-200 rounded-xl p-6 mb-6 hover:border-blue-500 transition-colors">
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h4 className="text-lg font-bold text-gray-900">Entega Ladekarte</h4>
                    <span className="text-sm text-blue-600 font-medium">Günstig bei IONITY</span>
                  </div>
                  <div className="text-right">
                    <div className="text-2xl font-bold text-blue-600">0€</div>
                    <div className="text-xs text-gray-500">Grundgebühr</div>
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-4 mb-4">
                  <div>
                    <div className="text-sm text-gray-600">AC-Laden</div>
                    <div className="font-bold text-gray-900">0,49€/kWh</div>
                  </div>
                  <div>
                    <div className="text-sm text-gray-600">IONITY</div>
                    <div className="font-bold text-gray-900">günstige Konditionen</div>
                  </div>
                </div>
                <p className="text-sm text-gray-600">
                  ✓ Keine monatlichen Kosten ✓ Attraktive IONITY-Preise ✓ Gute Netzabdeckung
                </p>
              </div>

              <h3 className="text-xl md:text-2xl font-bold text-gray-800 mb-4">
                Premium-Tarife mit Grundgebühr
              </h3>

              {/* EnBW */}
              <div className="bg-gradient-to-r from-blue-50 to-purple-50 border-2 border-blue-500 rounded-xl p-6 mb-4">
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h4 className="text-lg font-bold text-gray-900">EnBW mobility+ Viellader-Tarif</h4>
                    <span className="text-sm text-blue-600 font-medium">🏆 Testsieger Connect 2025</span>
                  </div>
                  <div className="text-right">
                    <div className="text-2xl font-bold text-blue-600">5,99€</div>
                    <div className="text-xs text-gray-500">pro Monat</div>
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-4 mb-4">
                  <div>
                    <div className="text-sm text-gray-600">EnBW-Ladepunkte</div>
                    <div className="font-bold text-gray-900">ab 0,39€/kWh</div>
                  </div>
                  <div>
                    <div className="text-sm text-gray-600">Roaming</div>
                    <div className="font-bold text-gray-900">0,56-0,89€/kWh</div>
                  </div>
                </div>
                <p className="text-sm text-gray-600">
                  ✓ Größtes Schnellladenetz in Deutschland (8.000+ HPC) ✓ Beste App im Test ✓ 900.000 Ladepunkte in Europa
                </p>
              </div>

              {/* IONITY */}
              <div className="bg-white border-2 border-gray-200 rounded-xl p-6 mb-6 hover:border-orange-500 transition-colors">
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h4 className="text-lg font-bold text-gray-900">IONITY Passport Motion</h4>
                    <span className="text-sm text-orange-600 font-medium">Für Langstreckenfahrer</span>
                  </div>
                  <div className="text-right">
                    <div className="text-2xl font-bold text-orange-600">5,99€</div>
                    <div className="text-xs text-gray-500">pro Monat</div>
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-4 mb-4">
                  <div>
                    <div className="text-sm text-gray-600">IONITY-Stationen</div>
                    <div className="font-bold text-gray-900">0,49€/kWh</div>
                  </div>
                  <div>
                    <div className="text-sm text-gray-600">Ladeleistung</div>
                    <div className="font-bold text-gray-900">bis 350 kW</div>
                  </div>
                </div>
                <p className="text-sm text-gray-600">
                  ✓ Europaweit an Autobahnen ✓ Ultraschnelles Laden ✓ Lohnt sich ab ~24 kWh/Monat
                </p>
              </div>

              <div className="bg-emerald-50 border-l-4 border-emerald-500 p-6 mb-6">
                <div className="flex items-start">
                  <Lightbulb className="w-6 h-6 text-emerald-600 mr-3 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-bold text-lg text-gray-900 mb-2">Unsere Empfehlung</h3>
                    <p className="text-gray-700">
                      Als Basis sollten Sie mindestens <strong>2-3 Ladekarten ohne Grundgebühr</strong> besitzen 
                      (z.B. Maingau + Entega + ADAC). Vielfahrer profitieren zusätzlich vom EnBW Viellader-Tarif 
                      oder IONITY Passport. So sind Sie für jede Situation optimal aufgestellt.
                    </p>
                  </div>
                </div>
              </div>
            </section>

            {/* Section 3: Apps */}
            <section id="apps" className="mb-12 scroll-mt-24">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                3. Lade-Apps im Test: Welche ist die Beste?
              </h2>

              <p className="text-gray-700 mb-4 leading-relaxed">
                Eine gute <strong>Lade-App</strong> zeigt nicht nur freie Ladestationen, sondern auch aktuelle 
                Preise, Steckertypen und ermöglicht das Starten und Bezahlen des Ladevorgangs. Im Test 
                des eMobility Excellence Report 2025 schnitten diese Apps am besten ab:
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                {/* EnBW mobility+ */}
                <div className="bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl p-6 text-white">
                  <div className="flex items-center gap-2 mb-3">
                    <h4 className="text-lg font-bold">EnBW mobility+</h4>
                  </div>
                  <p className="text-sm text-white/90 mb-4">
                    Testsieger bei AUTO BILD – beste Kombination aus Funktionalität, Bedienbarkeit und Netzabdeckung.
                  </p>
                  <ul className="text-sm space-y-1">
                    <li>✓ 900.000+ Ladepunkte in 17 Ländern</li>
                    <li>✓ Echtzeit-Verfügbarkeit</li>
                    <li>✓ Preisanzeige vor dem Laden</li>
                    <li>✓ "Besetzt seit"-Funktion</li>
                  </ul>
                </div>

                {/* A Better Route Planner */}
                <div className="bg-gradient-to-br from-emerald-500 to-teal-600 rounded-xl p-6 text-white">
                  <div className="flex items-center gap-2 mb-3">
                    <h4 className="text-lg font-bold">A Better Routeplanner (ABRP)</h4>
                  </div>
                  <p className="text-sm text-white/90 mb-4">
                    Beste App für Routenplanung mit Ladestopps – berücksichtigt Verbrauch, Wetter und Verkehr.
                  </p>
                  <ul className="text-sm space-y-1">
                    <li>✓ Intelligente Routenplanung</li>
                    <li>✓ Fahrzeugspezifische Berechnung</li>
                    <li>✓ Live-Daten zum Verbrauch</li>
                    <li>✓ Kostenlose Basisversion</li>
                  </ul>
                </div>

                {/* Maingau */}
                <div className="bg-gradient-to-br from-orange-500 to-red-600 rounded-xl p-6 text-white">
                  <div className="flex items-center gap-2 mb-3">
                    <h4 className="text-lg font-bold">Maingau Autostrom</h4>
                  </div>
                  <p className="text-sm text-white/90 mb-4">
                    Übersichtliche App mit transparenten Preisen – perfekt für preisbewusste Fahrer.
                  </p>
                  <ul className="text-sm space-y-1">
                    <li>✓ 600.000+ Ladepunkte in Europa</li>
                    <li>✓ Europaweite Einheitspreise</li>
                    <li>✓ Einfache Bedienung</li>
                    <li>✓ Kostenlose Nutzung</li>
                  </ul>
                </div>

                {/* PlugShare */}
                <div className="bg-gradient-to-br from-gray-600 to-gray-800 rounded-xl p-6 text-white">
                  <div className="flex items-center gap-2 mb-3">
                    <h4 className="text-lg font-bold">PlugShare</h4>
                  </div>
                  <p className="text-sm text-white/90 mb-4">
                    Größte Community-basierte Datenbank mit Nutzerbewertungen und Fotos.
                  </p>
                  <ul className="text-sm space-y-1">
                    <li>✓ 300.000+ Ladestationen weltweit</li>
                    <li>✓ Nutzerbewertungen & Fotos</li>
                    <li>✓ Filter nach Steckertyp</li>
                    <li>✓ Gratis ohne Registrierung</li>
                  </ul>
                </div>
              </div>

              <h3 className="text-xl md:text-2xl font-bold text-gray-800 mb-4">
                Hersteller-Apps
              </h3>

              <p className="text-gray-700 mb-4 leading-relaxed">
                Im Test der Hersteller-Apps schneidet der <strong>Porsche Charging Service Plus</strong> am 
                besten ab, gefolgt von <strong>Mercedes MB.CHARGE Public L</strong>. Diese Apps bieten oft 
                exklusive Vorteile wie reservierte Ladeplätze oder günstigere Tarife für Fahrzeuge der eigenen Marke.
              </p>
            </section>

            {/* Section 4: Ad-hoc-Laden */}
            <section id="ad-hoc" className="mb-12 scroll-mt-24">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                4. Ad-hoc-Laden ohne Vertrag
              </h2>

              <p className="text-gray-700 mb-4 leading-relaxed">
                <strong>Ad-hoc-Laden</strong> bezeichnet das spontane Laden ohne Ladekarte oder Vertrag. 
                Seit 2017 müssen alle öffentlichen Ladesäulen in Deutschland diese Möglichkeit anbieten. 
                Die Bezahlung erfolgt per Kreditkarte, QR-Code oder direkt am Kartenterminal.
              </p>

              <div className="bg-blue-50 border-l-4 border-blue-500 p-6 mb-6">
                <div className="flex items-start">
                  <CreditCard className="w-6 h-6 text-blue-600 mr-3 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-bold text-lg text-gray-900 mb-2">AFIR-Verordnung seit 2024</h3>
                    <p className="text-gray-700">
                      Die EU-Verordnung AFIR schreibt vor, dass alle neuen <strong>Schnellladesäulen ab 50 kW </strong> 
                      ein Kartenterminal für kontaktloses Bezahlen mit Kredit- oder Debitkarte haben müssen. 
                      Bei AC-Ladepunkten reicht auch eine QR-Code-basierte Bezahlung.
                    </p>
                  </div>
                </div>
              </div>

              <h3 className="text-xl md:text-2xl font-bold text-gray-800 mb-4">
                So funktioniert Ad-hoc-Laden
              </h3>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
                <div className="bg-white border-2 border-gray-200 rounded-xl p-4 text-center">
                  <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-3">
                    <span className="text-xl font-bold text-blue-600">1</span>
                  </div>
                  <h4 className="font-bold text-gray-900 mb-2">Anschließen</h4>
                  <p className="text-sm text-gray-600">Fahrzeug an die Ladesäule anschließen</p>
                </div>
                <div className="bg-white border-2 border-gray-200 rounded-xl p-4 text-center">
                  <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-3">
                    <span className="text-xl font-bold text-blue-600">2</span>
                  </div>
                  <h4 className="font-bold text-gray-900 mb-2">Bezahlen</h4>
                  <p className="text-sm text-gray-600">QR-Code scannen oder Karte vorhalten</p>
                </div>
                <div className="bg-white border-2 border-gray-200 rounded-xl p-4 text-center">
                  <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-3">
                    <span className="text-xl font-bold text-blue-600">3</span>
                  </div>
                  <h4 className="font-bold text-gray-900 mb-2">Laden</h4>
                  <p className="text-sm text-gray-600">Ladevorgang startet automatisch</p>
                </div>
              </div>

              <div className="bg-red-50 border-l-4 border-red-500 p-6 mb-6">
                <div className="flex items-start">
                  <AlertCircle className="w-6 h-6 text-red-600 mr-3 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-bold text-lg text-gray-900 mb-2">Ad-hoc-Laden ist teurer!</h3>
                    <p className="text-gray-700">
                      ADAC-Tests zeigen: <strong>Ad-hoc-Laden kostet bis zu 62% mehr</strong> als Vertragstarife. 
                      Beispiel EnBW: 0,87€/kWh ad-hoc vs. 0,39€/kWh mit Viellader-Tarif. Nutzen Sie Ad-hoc nur 
                      als Notlösung und besorgen Sie sich kostenlose Ladekarten für regelmäßiges Laden.
                    </p>
                  </div>
                </div>
              </div>

              <h3 className="text-xl md:text-2xl font-bold text-gray-800 mb-4">
                Plug & Charge – die Zukunft des Ladens
              </h3>

              <p className="text-gray-700 mb-4 leading-relaxed">
                <strong>Plug & Charge</strong> macht Ladekarten und Apps überflüssig: Einfach einstecken, 
                und das Auto authentifiziert sich automatisch. Die Zahlung läuft über einen hinterlegten 
                Vertrag. Unterstützt wird dies bereits von vielen Herstellern wie BMW, Mercedes und Porsche 
                sowie Ladenetzwerken wie IONITY und Aral Pulse.
              </p>
            </section>

            {/* Section 5: Ladeinfrastruktur */}
            <section id="ladeinfrastruktur" className="mb-12 scroll-mt-24">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                5. Ladeinfrastruktur in Deutschland
              </h2>

              <p className="text-gray-700 mb-4 leading-relaxed">
                Deutschland baut seine <strong>Ladeinfrastruktur</strong> kontinuierlich aus. Die Zahlen 
                der Bundesnetzagentur zeigen einen deutlichen Trend zu mehr Schnellladepunkten.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
                <div className="bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl p-4 text-white text-center">
                  <div className="text-3xl font-bold mb-1">184.606</div>
                  <div className="text-sm text-white/80">öffentliche Ladepunkte</div>
                  <div className="text-xs text-white/60 mt-1">Stand: November 2025</div>
                </div>
                <div className="bg-gradient-to-br from-purple-500 to-purple-600 rounded-xl p-4 text-white text-center">
                  <div className="text-3xl font-bold mb-1">45.321</div>
                  <div className="text-sm text-white/80">Schnellladepunkte (DC)</div>
                  <div className="text-xs text-white/60 mt-1">+34% zum Vorjahr</div>
                </div>
                <div className="bg-gradient-to-br from-emerald-500 to-emerald-600 rounded-xl p-4 text-white text-center">
                  <div className="text-3xl font-bold mb-1">7,6 GW</div>
                  <div className="text-sm text-white/80">Gesamtladeleistung</div>
                  <div className="text-xs text-white/60 mt-1">+29% zum Vorjahr</div>
                </div>
                <div className="bg-gradient-to-br from-orange-500 to-orange-600 rounded-xl p-4 text-white text-center">
                  <div className="text-3xl font-bold mb-1">17:1</div>
                  <div className="text-sm text-white/80">E-Autos pro Ladepunkt</div>
                  <div className="text-xs text-white/60 mt-1">gutes Verhältnis</div>
                </div>
              </div>

              <h3 className="text-xl md:text-2xl font-bold text-gray-800 mb-4">
                Die größten Betreiber in Deutschland
              </h3>

              <div className="overflow-x-auto mb-6">
                <table className="w-full border-collapse bg-white rounded-lg overflow-hidden shadow-sm">
                  <thead className="bg-gray-100">
                    <tr>
                      <th className="px-4 py-3 text-left text-sm font-bold text-gray-700">Betreiber</th>
                      <th className="px-4 py-3 text-right text-sm font-bold text-gray-700">Ladepunkte</th>
                      <th className="px-4 py-3 text-right text-sm font-bold text-gray-700">Ladeleistung</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200">
                    <tr>
                      <td className="px-4 py-3 text-gray-700 font-medium">🥇 EnBW mobility+</td>
                      <td className="px-4 py-3 text-right">11.154</td>
                      <td className="px-4 py-3 text-right">980.697 kW</td>
                    </tr>
                    <tr>
                      <td className="px-4 py-3 text-gray-700 font-medium">🥈 Tesla Supercharger</td>
                      <td className="px-4 py-3 text-right">3.665</td>
                      <td className="px-4 py-3 text-right">906.250 kW</td>
                    </tr>
                    <tr>
                      <td className="px-4 py-3 text-gray-700 font-medium">🥉 E.ON Drive</td>
                      <td className="px-4 py-3 text-right">4.705</td>
                      <td className="px-4 py-3 text-right">~400.000 kW</td>
                    </tr>
                    <tr>
                      <td className="px-4 py-3 text-gray-700 font-medium">IONITY</td>
                      <td className="px-4 py-3 text-right">~1.600</td>
                      <td className="px-4 py-3 text-right">425.100 kW</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <div className="bg-emerald-50 border-l-4 border-emerald-500 p-6 mb-6">
                <div className="flex items-start">
                  <TrendingDown className="w-6 h-6 text-emerald-600 mr-3 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-bold text-lg text-gray-900 mb-2">Deutschlandnetz wächst</h3>
                    <p className="text-gray-700">
                      Das staatlich geförderte <strong>Deutschlandnetz</strong> umfasst bereits 130 Standorte – 
                      ein Viertel der geplanten Größe. Bis Ende 2026 sollen 8.784 Schnellladepunkte entstehen, 
                      sodass überall in Deutschland maximal 2 km zur nächsten Ladestation sind.
                    </p>
                  </div>
                </div>
              </div>
            </section>

            {/* Section 6: Tipps */}
            <section id="tipps" className="mb-12 scroll-mt-24">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                6. 7 Tipps für günstiges Laden unterwegs
              </h2>

              <div className="space-y-4">
                <div className="bg-white border-2 border-gray-200 rounded-xl p-5 hover:border-emerald-500 transition-colors">
                  <div className="flex items-start gap-4">
                    <div className="w-8 h-8 bg-emerald-100 rounded-full flex items-center justify-center flex-shrink-0">
                      <span className="text-emerald-600 font-bold">1</span>
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-900 mb-1">Mehrere Ladekarten ohne Grundgebühr</h4>
                      <p className="text-gray-600 text-sm">
                        Besorgen Sie sich 2-3 kostenlose Ladekarten (Maingau, Entega, ADAC). So haben Sie 
                        immer eine günstige Option und sind flexibel bei verschiedenen Anbietern.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="bg-white border-2 border-gray-200 rounded-xl p-5 hover:border-emerald-500 transition-colors">
                  <div className="flex items-start gap-4">
                    <div className="w-8 h-8 bg-emerald-100 rounded-full flex items-center justify-center flex-shrink-0">
                      <span className="text-emerald-600 font-bold">2</span>
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-900 mb-1">Preise vor dem Laden vergleichen</h4>
                      <p className="text-gray-600 text-sm">
                        Apps wie EnBW mobility+ zeigen die aktuellen Preise an. Preisunterschiede von 
                        50 Cent/kWh sind keine Seltenheit – ein Blick lohnt sich!
                      </p>
                    </div>
                  </div>
                </div>

                <div className="bg-white border-2 border-gray-200 rounded-xl p-5 hover:border-emerald-500 transition-colors">
                  <div className="flex items-start gap-4">
                    <div className="w-8 h-8 bg-emerald-100 rounded-full flex items-center justify-center flex-shrink-0">
                      <span className="text-emerald-600 font-bold">3</span>
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-900 mb-1">Supermarkt-Ladestationen nutzen</h4>
                      <p className="text-gray-600 text-sm">
                        ALDI, Lidl, Kaufland und Co. bieten oft günstigere Tarife als Autobahn-Raststätten. 
                        Manche Supermärkte laden sogar kostenlos – zumindest für Kunden.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="bg-white border-2 border-gray-200 rounded-xl p-5 hover:border-emerald-500 transition-colors">
                  <div className="flex items-start gap-4">
                    <div className="w-8 h-8 bg-emerald-100 rounded-full flex items-center justify-center flex-shrink-0">
                      <span className="text-emerald-600 font-bold">4</span>
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-900 mb-1">Blockiergebühren vermeiden</h4>
                      <p className="text-gray-600 text-sm">
                        Fahren Sie Ihr Auto weg, sobald der Ladevorgang beendet ist. Viele Anbieter 
                        erheben ab 60-180 Minuten Blockiergebühren von 10-15 Cent pro Minute.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="bg-white border-2 border-gray-200 rounded-xl p-5 hover:border-emerald-500 transition-colors">
                  <div className="flex items-start gap-4">
                    <div className="w-8 h-8 bg-emerald-100 rounded-full flex items-center justify-center flex-shrink-0">
                      <span className="text-emerald-600 font-bold">5</span>
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-900 mb-1">20-80%-Regel beachten</h4>
                      <p className="text-gray-600 text-sm">
                        Laden Sie nur auf 80% auf – danach sinkt die Ladegeschwindigkeit stark ab. 
                        Das spart Zeit und schont die Batterie.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="bg-white border-2 border-gray-200 rounded-xl p-5 hover:border-emerald-500 transition-colors">
                  <div className="flex items-start gap-4">
                    <div className="w-8 h-8 bg-emerald-100 rounded-full flex items-center justify-center flex-shrink-0">
                      <span className="text-emerald-600 font-bold">6</span>
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-900 mb-1">Dynamische Preise nutzen</h4>
                      <p className="text-gray-600 text-sm">
                        Shell Recharge und andere testen dynamische Preise: Mittags und nachts ist es 
                        oft günstiger. Bis zu 6 Cent/kWh Unterschied im Tagesverlauf sind möglich.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="bg-white border-2 border-gray-200 rounded-xl p-5 hover:border-emerald-500 transition-colors">
                  <div className="flex items-start gap-4">
                    <div className="w-8 h-8 bg-emerald-100 rounded-full flex items-center justify-center flex-shrink-0">
                      <span className="text-emerald-600 font-bold">7</span>
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-900 mb-1">Ad-hoc-Laden vermeiden</h4>
                      <p className="text-gray-600 text-sm">
                        Laden ohne Vertrag kostet bis zu 62% mehr. Nutzen Sie Ad-hoc nur im Notfall 
                        und besorgen Sie sich vorher kostenlose Ladekarten.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* Fazit */}
            <section id="fazit" className="mb-8 md:mb-12">
              <div className="bg-gradient-to-r from-blue-600 to-green-600 rounded-xl p-6 md:p-8 text-white">
                <h2 className="text-2xl md:text-3xl font-bold mb-4">
                  Fazit: So laden Sie günstig und stressfrei
                </h2>
                <p className="text-base md:text-lg leading-relaxed mb-4">
                  <strong>Öffentliches Laden</strong> in Deutschland ist so einfach wie nie: Mit über 
                  <strong> 184.000 Ladepunkten</strong> und wachsender Schnellladeinfrastruktur müssen Sie 
                  selten weit fahren. Die Kosten variieren zwischen <strong>0,39€ und 0,89€ pro kWh</strong> – 
                  mit der richtigen Strategie sparen Sie bis zu 50%.
                </p>
                <p className="text-base md:text-lg leading-relaxed mb-6">
                  Unsere Empfehlung: Starten Sie mit <strong>2-3 kostenlosen Ladekarten</strong> (Maingau, 
                  Entega, ADAC) für maximale Flexibilität. Vielfahrer profitieren vom EnBW Viellader-Tarif 
                  oder IONITY Passport. Vermeiden Sie Ad-hoc-Laden – es kostet bis zu 62% mehr!
                </p>
                <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
                  <p className="text-lg font-semibold">
                    💡 <strong>Tipp:</strong> Nutzen Sie unseren Ladekosten-Rechner, um die optimale 
                    Ladekarten-Kombination für Ihr Fahrprofil zu finden!
                  </p>
                </div>
              </div>
            </section>

            {/* CTA Box */}
            <div className="bg-gradient-to-r from-purple-600 to-blue-600 rounded-2xl p-8 text-center text-white mb-8">
              <h3 className="text-2xl font-bold mb-4">
                📊 Gesamtkosten berechnen
              </h3>
              <p className="text-lg mb-6 max-w-2xl mx-auto">
                Vergleichen Sie die Kosten mit dem Expertenmodus für Heimladen und öffentliches Laden.
              </p>
              <a 
                href="/rechner/kostenrechner"
                className="inline-flex items-center gap-3 bg-white text-blue-600 font-bold px-8 py-4 rounded-full hover:shadow-2xl hover:scale-105 transition-all duration-200"
              >
                <Calculator className="w-6 h-6" />
                Zum Gesamtkosten-Rechner
              </a>
            </div>

            {/* Quellen */}
            <div className="mt-8 bg-gray-100 rounded-xl p-6 text-sm text-gray-600">
              <h3 className="font-bold text-gray-800 mb-3">📚 Quellen & Referenzen:</h3>
              <ul className="space-y-1 text-xs">
                <li>• Bundesnetzagentur: Ladesäulenregister (Stand: November 2025)</li>
                <li>• ADAC: Ladetarife für Elektroautos, Marktübersicht 2025</li>
                <li>• AUTO BILD / P3 / Charging Radar: eMobility Excellence Report 2025</li>
                <li>• LichtBlick: Ladesäulencheck 2025</li>
                <li>• connect Ladenetztest 2025</li>
                <li>• VDA E-Ladenetz-Ranking (Stand: Juli 2025)</li>
              </ul>
              <p className="mt-4 leading-relaxed">
                <strong>Haftungsausschluss:</strong> Alle Angaben ohne Gewähr. Die genannten Preise 
                können sich jederzeit ändern und variieren je nach Standort und Tarif. Wir empfehlen, 
                aktuelle Preise vor dem Ladevorgang in der jeweiligen App zu prüfen.
              </p>
            </div>
          </div>
        </article>

        {/* Related Articles */}
        <div className="mt-8 bg-blue-50 rounded-xl p-6">
          <h3 className="text-lg font-bold text-gray-800 mb-4">
            📚 Weitere hilfreiche Artikel:
          </h3>
          <div className="space-y-2">
            <a href="/ratgeber/strompreise-2025" className="block text-blue-600 hover:underline text-sm md:text-base">
              → Strompreise 2025: So viel kostet eine Kilowattstunde
            </a>
            <a href="/ratgeber/wallbox-kosten-installation" className="block text-blue-600 hover:underline text-sm md:text-base">
              → Wallbox-Kosten & Installation: Der komplette Guide
            </a>

            <a href="/ratgeber/elektroauto-reichweite-winter-test" className="block text-blue-600 hover:underline text-sm md:text-base">
              → E-Auto Reichweite im Winter: ADAC-Test & Tipps
            </a>
            <a href="/rechner/kostenrechner" className="block text-blue-600 hover:underline text-sm md:text-base">
              → TCO-Rechner: Gesamtkosten E-Auto vs. Verbrenner
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
