import React from 'react';
import SEO from '../components/SEO';
import { Lightbulb, XCircle, CheckCircle, Snowflake, Battery, DollarSign, Leaf, AlertTriangle, Zap, ArrowLeft, Calculator } from 'lucide-react';
import Header from '../components/Header';

export default function MythenPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-green-50">
<SEO
  title="10 Elektroauto Mythen aufgeklärt - Fakten statt Vorurteile | e-Autowelt"
  description="10 größte Elektroauto Mythen aufgeklärt: Reichweite, Batterie, Umwelt - wir zeigen wissenschaftlich belegte Fakten statt Vorurteile!"
  canonicalPath="/ratgeber/mythen"
  keywords="elektroauto mythen, e-auto vorurteile, elektroauto fakten, e-auto wahrheit, elektroauto reichweite"
  ogImage="/images/ratgeber/mythen-og.jpg"
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
          <div className="relative h-64 md:h-96 bg-gradient-to-br from-yellow-500 to-orange-600 overflow-hidden">
            <img 
              src="/images/ratgeber/elektroauto-mythen-hero.jpg"
              alt="Elektroauto Mythen aufgeklärt - Fakten statt Vorurteile 2025"
              className="w-full h-full object-cover opacity-90"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
            <div className="absolute bottom-0 left-0 right-0 p-6 md:p-10 text-white">
              <div className="flex items-center gap-3 mb-3">
                <div className="bg-white/30 backdrop-blur-md p-2 rounded-lg shadow-lg">
                  <Lightbulb className="w-6 h-6 md:w-8 md:h-8" />
                </div>
                <span className="text-xs md:text-sm bg-white/30 backdrop-blur-md px-3 py-1 rounded-full font-semibold shadow-lg">⏱️ 6 Min. Lesezeit</span>
                <span className="text-xs md:text-sm bg-white/30 backdrop-blur-md px-3 py-1 rounded-full font-semibold shadow-lg">Aktualisiert am 17. Januar 2025</span>
              </div>
              <h1 className="text-2xl md:text-4xl lg:text-5xl font-bold leading-tight">
                Elektroauto Mythen 2025: Fakten statt Vorurteile
              </h1>
            </div>
          </div>

          {/* Article Content */}
          <div className="p-6 md:p-10">
            {/* Intro */}
            <div className="mb-8 md:mb-12">
              <p className="text-lg md:text-xl text-gray-600 leading-relaxed mb-4">
                Reichweitenangst, explodierende Batterien, Umweltsünde? Wir räumen mit den hartnäckigsten 
                Vorurteilen über Elektroautos auf und zeigen Ihnen die wissenschaftlich belegten Fakten!
              </p>
              <div className="bg-blue-50 rounded-xl p-6">
                <p className="text-base md:text-lg text-gray-700 leading-relaxed">
                  Elektroautos polarisieren: Die einen sehen sie als Zukunft der Mobilität, die anderen 
                  verteufeln sie. Viele Vorurteile halten sich hartnäckig – obwohl sie längst widerlegt sind. 
                  <strong> Zeit für einen Faktencheck!</strong>
                </p>
              </div>
            </div>

            {/* Inhaltsverzeichnis */}
            <nav className="bg-gray-50 rounded-xl p-6 mb-8 md:mb-12">
              <h2 className="text-xl md:text-2xl font-bold text-gray-800 mb-4">
                Die 10 größten Mythen im Überblick
              </h2>
              <div className="grid md:grid-cols-2 gap-2 text-sm md:text-base">
                <a href="#mythos1" className="text-blue-600 hover:underline">1. E-Autos haben zu wenig Reichweite</a>
                <a href="#mythos2" className="text-blue-600 hover:underline">2. Batterien explodieren / brennen</a>
                <a href="#mythos3" className="text-blue-600 hover:underline">3. Batterieproduktion ist umweltschädlich</a>
                <a href="#mythos4" className="text-blue-600 hover:underline">4. Strom kommt aus Kohlekraftwerken</a>
                <a href="#mythos5" className="text-blue-600 hover:underline">5. Laden dauert ewig</a>
                <a href="#mythos6" className="text-blue-600 hover:underline">6. E-Autos funktionieren nicht im Winter</a>
                <a href="#mythos7" className="text-blue-600 hover:underline">7. Batterien halten nur 5 Jahre</a>
                <a href="#mythos8" className="text-blue-600 hover:underline">8. Das Stromnetz kollabiert</a>
                <a href="#mythos9" className="text-blue-600 hover:underline">9. Lithium & Kobalt werden knapp</a>
                <a href="#mythos10" className="text-blue-600 hover:underline">10. E-Autos sind zu teuer</a>
              </div>
            </nav>

            {/* Mythos 1 */}
            <section id="mythos1" className="mb-12 md:mb-16">
              <div className="flex items-start gap-4 mb-4">
                <div>
                  <h2 className="text-2xl md:text-3xl font-bold text-gray-800">
                    Mythos 1: E-Autos haben zu wenig Reichweite
                  </h2>
                </div>
              </div>

              <div className="bg-red-50 border-l-4 border-red-600 p-6 rounded-r-lg mb-6">
                <h3 className="font-bold text-gray-800 mb-2">❌ Der Mythos:</h3>
                <p className="text-sm md:text-base text-gray-700">
                  "Mit einem E-Auto kommt man ja nicht mal 200 km weit. Für Langstrecken unbrauchbar!"
                </p>
              </div>

              {/* IMAGE 1: Reichweiten-Vergleich */}
              <div className="my-8 rounded-xl overflow-hidden shadow-lg">
                <img 
                  src="/images/ratgeber/elektroauto-reichweiten-vergleich-2025.jpg"
                  alt="Elektroauto Reichweiten Vergleich 2025: Moderne E-Autos erreichen 350-600 km Reichweite"
                  className="w-full h-auto"
                  loading="lazy"
                />
                <div className="bg-gray-50 p-4 text-xs md:text-sm text-gray-600 italic">
                  Reichweiten moderner E-Autos 2025: Von 300 km (Kleinwagen) bis 600 km (Premium-Modelle)
                </div>
              </div>

              <div className="bg-green-50 border-l-4 border-green-600 p-6 rounded-r-lg mb-6">
                <h3 className="font-bold text-gray-800 mb-3">✅ Die Fakten:</h3>
                <div className="space-y-3 text-sm md:text-base text-gray-700">
                  <p>
                    <strong>Moderne E-Autos schaffen 350-600 km</strong> real (nicht nur WLTP!). 
                    Tesla Model 3 Long Range: bis zu 550 km. VW ID.4: 400-500 km. Hyundai Ioniq 5: 450-500 km.
                  </p>
                  <p>
                    <strong>Der Durchschnittsdeutsche fährt 40 km pro Tag.</strong> Das sind 280 km pro Woche. 
                    Selbst ein Kleinwagen mit 300 km Reichweite reicht für eine komplette Woche ohne Laden!
                  </p>
                  <p>
                    <strong>95% aller Fahrten sind unter 100 km.</strong> Die "Reichweitenangst" ist für 
                    die allermeisten unbegründet. Für die anderen 5% gibt es Schnelllader.
                  </p>
                </div>
              </div>

              <div className="bg-blue-50 p-6 rounded-xl">
                <h4 className="font-bold text-gray-800 mb-3 flex items-center gap-2">
                  <Lightbulb className="w-5 h-5 text-blue-600" />
                  Studienlage:
                </h4>
                <p className="text-sm md:text-base text-gray-700">
                  Fraunhofer ISI (2025): "<strong>350 km Reichweite reichen für über 98% der Autofahrer</strong> 
                  in Deutschland aus. Langstrecken über 500 km macht der Durchschnittsdeutsche nur 2-3x pro Jahr."
                </p>
              </div>
            </section>

            {/* Mythos 2 */}
            <section id="mythos2" className="mb-12 md:mb-16">
              <div className="flex items-start gap-4 mb-4">
                <div>
                  <h2 className="text-2xl md:text-3xl font-bold text-gray-800">
                    Mythos 2: E-Auto Batterien explodieren / brennen häufig
                  </h2>
                </div>
              </div>

              <div className="bg-red-50 border-l-4 border-red-600 p-6 rounded-r-lg mb-6">
                <h3 className="font-bold text-gray-800 mb-2">❌ Der Mythos:</h3>
                <p className="text-sm md:text-base text-gray-700">
                  "E-Autos brennen wie Zunder! Die Batterien sind tickende Zeitbomben!"
                </p>
              </div>

              {/* IMAGE 2: Brand-Statistiken */}
              <div className="my-8 rounded-xl overflow-hidden shadow-lg">
                <img 
                  src="/images/ratgeber/elektroauto-brand-statistik-vergleich.jpg"
                  alt="Elektroauto vs Verbrenner Brand-Statistik: E-Autos brennen 10x seltener"
                  className="w-full h-auto"
                  loading="lazy"
                />
                <div className="bg-gray-50 p-4 text-xs md:text-sm text-gray-600 italic">
                  Brand-Statistik 2024: E-Autos brennen 10x seltener als Verbrenner (25 vs 1.530 pro 100.000 Fahrzeuge)
                </div>
              </div>

              <div className="bg-green-50 border-l-4 border-green-600 p-6 rounded-r-lg mb-6">
                <h3 className="font-bold text-gray-800 mb-3">✅ Die Fakten:</h3>
                <div className="space-y-3 text-sm md:text-base text-gray-700">
                  <p>
                    <strong>E-Autos brennen 10x seltener als Verbrenner!</strong> Statistiken zeigen: 
                    Pro 100.000 E-Autos gibt es 25 Brände. Bei Verbrennern: 1.530 Brände pro 100.000 Fahrzeuge.
                  </p>
                  <p>
                    <strong>Batterien sind hochgesichert:</strong> Mehrfache Schutzebenen (Crashstrukturen, 
                    Kühlsystem, Battery Management System) verhindern Brände. Bei Unfällen schaltet sich die 
                    Batterie automatisch ab.
                  </p>
                  <p>
                    <strong>Löschen ist anders, aber nicht schwerer:</strong> Feuerwehr ist geschult. 
                    Ja, E-Auto-Brände brauchen mehr Wasser – aber sie kommen viel seltener vor!
                  </p>
                </div>
              </div>

              <div className="bg-yellow-50 p-6 rounded-xl">
                <div className="flex items-start gap-3">
                  <AlertTriangle className="w-6 h-6 text-yellow-600 flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-bold text-gray-800 mb-2">Warum der Mythos so hartnäckig ist:</h4>
                    <p className="text-sm md:text-base text-gray-700">
                      Jeder E-Auto-Brand wird medial ausgeschlachtet. Verbrenner-Brände (täglich >4.000!) sind 
                      keine Nachricht mehr. Klassischer Wahrnehmungsfehler!
                    </p>
                  </div>
                </div>
              </div>
            </section>

            {/* Mythos 3 */}
            <section id="mythos3" className="mb-12 md:mb-16">
              <div className="flex items-start gap-4 mb-4">
                <div>
                  <h2 className="text-2xl md:text-3xl font-bold text-gray-800">
                    Mythos 3: Die Batterieproduktion ist so umweltschädlich
                  </h2>
                </div>
              </div>

              <div className="bg-red-50 border-l-4 border-red-600 p-6 rounded-r-lg mb-6">
                <h3 className="font-bold text-gray-800 mb-2">❌ Der Mythos:</h3>
                <p className="text-sm md:text-base text-gray-700">
                  "E-Autos sind gar nicht umweltfreundlich! Die Batterie verursacht mehr CO₂ als ein Diesel!"
                </p>
              </div>

              {/* IMAGE 3: CO2-Bilanz Lebenszyklus */}
              <div className="my-8 rounded-xl overflow-hidden shadow-lg">
                <img 
                  src="/images/ratgeber/elektroauto-co2-bilanz-lebenszyklus.jpg"
                  alt="CO2-Bilanz E-Auto vs Verbrenner über Lebenszyklus: E-Auto 30-50% weniger Emissionen"
                  className="w-full h-auto"
                  loading="lazy"
                />
                <div className="bg-gray-50 p-4 text-xs md:text-sm text-gray-600 italic">
                  Lebenszyklus-CO₂-Bilanz: E-Auto vs Verbrenner (inkl. Produktion, Betrieb, Entsorgung)
                </div>
              </div>

              <div className="bg-green-50 border-l-4 border-green-600 p-6 rounded-r-lg mb-6">
                <h3 className="font-bold text-gray-800 mb-3">✅ Die Fakten:</h3>
                <div className="space-y-3 text-sm md:text-base text-gray-700">
                  <p>
                    <strong>Ja, Batterieproduktion verursacht CO₂</strong> – etwa 5-8 Tonnen für eine 60 kWh Batterie. 
                    <strong>ABER:</strong> Ein Verbrenner stößt 120-150 Tonnen CO₂ über seine Lebensdauer aus!
                  </p>
                  <p>
                    <strong>Break-Even nach 30.000-60.000 km:</strong> Ab dann ist das E-Auto klimafreundlicher. 
                    Je grüner der Strom, desto schneller amortisiert sich die Batterie-Produktion.
                  </p>
                  <p>
                    <strong>Batterieproduktion wird grüner:</strong> Immer mehr Fabriken nutzen erneuerbare Energie 
                    (Tesla Gigafactory: 100% Solar). CO₂-Fußabdruck sinkt jährlich um 5-10%.
                  </p>
                </div>
              </div>

              <div className="bg-blue-50 p-6 rounded-xl">
                <h4 className="font-bold text-gray-800 mb-3 flex items-center gap-2">
                  <Leaf className="w-5 h-5 text-green-600" />
                  Studienlage:
                </h4>
                <p className="text-sm md:text-base text-gray-700">
                  ICCT-Studie (2024): "<strong>E-Autos haben über den Lebenszyklus 30-50% weniger CO₂-Emissionen</strong> 
                  als Verbrenner – selbst bei durchschnittlichem EU-Strommix. Mit Ökostrom: bis zu 80% weniger!"
                </p>
              </div>
            </section>

            {/* Mythos 4 */}
            <section id="mythos4" className="mb-12 md:mb-16">
              <div className="flex items-start gap-4 mb-4">
                <div>
                  <h2 className="text-2xl md:text-3xl font-bold text-gray-800">
                    Mythos 4: E-Autos fahren mit Kohlestrom
                  </h2>
                </div>
              </div>

              <div className="bg-red-50 border-l-4 border-red-600 p-6 rounded-r-lg mb-6">
                <h3 className="font-bold text-gray-800 mb-2">❌ Der Mythos:</h3>
                <p className="text-sm md:text-base text-gray-700">
                  "E-Autos sind Kohle-Autos! Der Strom kommt doch aus Kohlekraftwerken!"
                </p>
              </div>

              <div className="bg-green-50 border-l-4 border-green-600 p-6 rounded-r-lg mb-6">
                <h3 className="font-bold text-gray-800 mb-3">✅ Die Fakten:</h3>
                <div className="space-y-3 text-sm md:text-base text-gray-700">
                  <p>
                    <strong>Deutscher Strommix 2025: 60% erneuerbare Energien</strong> (Wind, Solar, Wasser, Biomasse). 
                    Kohle nur noch 20% – Tendenz sinkend. Bis 2030: 80% Erneuerbare geplant.
                  </p>
                  <p>
                    <strong>Ökostrom-Tarife machen E-Autos CO₂-frei:</strong> Viele Anbieter (z.B. Lichtblick, Naturstrom) 
                    garantieren 100% Ökostrom. Kostet kaum mehr als Normaltarif!
                  </p>
                  <p>
                    <strong>Selbst mit Kohlestrom besser als Diesel:</strong> Moderne Kraftwerke haben 40% Wirkungsgrad. 
                    Verbrenner nur 20-25%. E-Motor: 90% Wirkungsgrad.
                  </p>
                </div>
              </div>

              <div className="bg-yellow-50 border-l-4 border-yellow-400 p-6 rounded-r-lg">
                <div className="flex items-start gap-3">
                  <Zap className="w-6 h-6 text-yellow-600 flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-bold text-gray-800 mb-2">Wichtig zu wissen:</h4>
                    <p className="text-sm md:text-base text-gray-700">
                      E-Autos werden mit jedem Jahr grüner, weil der Strommix immer sauberer wird. 
                      Verbrenner bleiben dreckig – egal ob 2025 oder 2035!
                    </p>
                  </div>
                </div>
              </div>
            </section>

            {/* Mythos 5 */}
            <section id="mythos5" className="mb-12 md:mb-16">
              <div className="flex items-start gap-4 mb-4">
                <div>
                  <h2 className="text-2xl md:text-3xl font-bold text-gray-800">
                    Mythos 5: Laden dauert ewig
                  </h2>
                </div>
              </div>

              <div className="bg-red-50 border-l-4 border-red-600 p-6 rounded-r-lg mb-6">
                <h3 className="font-bold text-gray-800 mb-2">❌ Der Mythos:</h3>
                <p className="text-sm md:text-base text-gray-700">
                  "E-Auto laden? Das dauert doch stundenlang! Beim Verbrenner tanke ich in 5 Minuten!"
                </p>
              </div>

              <div className="bg-green-50 border-l-4 border-green-600 p-6 rounded-r-lg mb-6">
                <h3 className="font-bold text-gray-800 mb-3">✅ Die Fakten:</h3>
                <div className="space-y-3 text-sm md:text-base text-gray-700">
                  <p>
                    <strong>Zuhause laden = 0 Minuten Wartezeit!</strong> Auto über Nacht an die Wallbox, morgens voll. 
                    Wie beim Smartphone – niemand beschwert sich über "Ladezeit" beim Handy!
                  </p>
                  <p>
                    <strong>Schnelllader für unterwegs: 20-30 Minuten für 80%</strong>. Moderne 800V-Systeme (Hyundai Ioniq 5, 
                    Porsche Taycan): 100 km Reichweite in 5 Minuten! Zeit für Toilette, Kaffee – fertig.
                  </p>
                  <p>
                    <strong>90% der Ladevorgänge zuhause oder beim Arbeitgeber</strong> – da ist Ladezeit irrelevant. 
                    Langstrecken? 30 Min. Pause alle 300 km ist sogar gesund (StVO empfiehlt 15 Min./2h Fahrt)!
                  </p>
                </div>
              </div>

              <div className="bg-blue-50 p-6 rounded-xl">
                <h4 className="font-bold text-gray-800 mb-3">Ladezeiten im Überblick:</h4>
                <div className="space-y-2 text-sm md:text-base text-gray-700">
                  <div className="flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0" />
                    <span><strong>Schuko (2,3 kW):</strong> 20-30h (nur Notlösung)</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0" />
                    <span><strong>Wallbox (11 kW):</strong> 6-8h für voll (über Nacht perfekt)</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0" />
                    <span><strong>AC-Lader (22 kW):</strong> 3-4h (öffentliche Parkplätze)</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0" />
                    <span><strong>DC-Schnelllader (50-150 kW):</strong> 30-60 Min.</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0" />
                    <span><strong>Ultraschnelllader (350 kW):</strong> 15-20 Min. (80%)</span>
                  </div>
                </div>
              </div>
            </section>

            {/* Mythos 6 */}
            <section id="mythos6" className="mb-12 md:mb-16">
              <div className="flex items-start gap-4 mb-4">
                <div>
                  <h2 className="text-2xl md:text-3xl font-bold text-gray-800">
                    Mythos 6: E-Autos funktionieren nicht im Winter
                  </h2>
                </div>
              </div>

              <div className="bg-red-50 border-l-4 border-red-600 p-6 rounded-r-lg mb-6">
                <h3 className="font-bold text-gray-800 mb-2">❌ Der Mythos:</h3>
                <p className="text-sm md:text-base text-gray-700">
                  "Im Winter brechen E-Autos zusammen! Die Reichweite halbiert sich und die Heizung frisst alles!"
                </p>
              </div>

              <div className="bg-green-50 border-l-4 border-green-600 p-6 rounded-r-lg mb-6">
                <h3 className="font-bold text-gray-800 mb-3">✅ Die Fakten:</h3>
                <div className="space-y-3 text-sm md:text-base text-gray-700">
                  <p>
                    <strong>Ja, Reichweite sinkt im Winter um 20-30%</strong> – aber das ist planbar! 
                    Wer im Sommer 400 km schafft, fährt im Winter 280-320 km. Immer noch mehr als genug für 98% der Fahrten!
                  </p>
                  <p>
                    <strong>Wärmepumpen minimieren Verluste:</strong> Moderne E-Autos (Tesla Model Y, VW ID.4, Hyundai Ioniq 5) 
                    haben Wärmepumpen. Die heizen effizienter als alte Heizwiderstände. Reichweiten-Verlust: nur 15-20%!
                  </p>
                  <p>
                    <strong>Vorklimatisierung an der Steckdose:</strong> Auto vorheizen, während es noch lädt = kein 
                    Reichweiten-Verlust. Bonus: Warmes Auto ohne Eiskratzen!
                  </p>
                  <p>
                    <strong>Verbrenner verbrauchen im Winter auch mehr</strong> – nur merkt man's nicht, weil tanken schneller geht. 
                    Stadtverkehr Winter: +20-30% Verbrauch auch beim Diesel!
                  </p>
                </div>
              </div>

              <div className="bg-blue-50 p-6 rounded-xl">
                <h4 className="font-bold text-gray-800 mb-3 flex items-center gap-2">
                  <Snowflake className="w-5 h-5 text-blue-600" />
                  Praxis-Tipp für den Winter:
                </h4>
                <p className="text-sm md:text-base text-gray-700">
                  Batterie möglichst warm halten (Garage nutzen), Sitzheizung statt Innenraumheizung, 
                  Eco-Modus aktivieren. So holt man auch im Winter 90% der Sommer-Reichweite raus!
                </p>
              </div>
            </section>

            {/* Mythos 7 */}
            <section id="mythos7" className="mb-12 md:mb-16">
              <div className="flex items-start gap-4 mb-4">
                <div>
                  <h2 className="text-2xl md:text-3xl font-bold text-gray-800">
                    Mythos 7: Batterien halten nur 5 Jahre
                  </h2>
                </div>
              </div>

              <div className="bg-red-50 border-l-4 border-red-600 p-6 rounded-r-lg mb-6">
                <h3 className="font-bold text-gray-800 mb-2">❌ Der Mythos:</h3>
                <p className="text-sm md:text-base text-gray-700">
                  "Nach 5 Jahren ist die Batterie tot! Dann muss man 20.000€ für eine neue zahlen!"
                </p>
              </div>

              <div className="bg-green-50 border-l-4 border-green-600 p-6 rounded-r-lg mb-6">
                <h3 className="font-bold text-gray-800 mb-3">✅ Die Fakten:</h3>
                <div className="space-y-3 text-sm md:text-base text-gray-700">
                  <p>
                    <strong>Moderne Batterien halten 15-20 Jahre!</strong> Tesla-Daten zeigen: Nach 300.000 km noch 
                    90% Kapazität. Nissan Leaf: Viele Exemplare mit 200.000+ km noch im Einsatz!
                  </p>
                  <p>
                    <strong>Garantie: 8 Jahre oder 160.000 km</strong> sind Standard bei fast allen Herstellern. 
                    Garantiert mindestens 70% Restkapazität. Praktisch: Die meisten liegen nach 8 Jahren bei 85-90%!
                  </p>
                  <p>
                    <strong>Degradation verlangsamt sich:</strong> Die ersten 10% gehen schnell (1-2 Jahre), 
                    danach wird's langsamer. Von 90% auf 80% dauert oft 5-10 Jahre!
                  </p>
                  <p>
                    <strong>Second-Life & Recycling:</strong> Alte E-Auto-Batterien werden zu Hausspeichern umfunktioniert. 
                    Danach: 95% der Materialien recycelbar. Keine Verschwendung!
                  </p>
                </div>
              </div>

              <div className="bg-blue-50 p-6 rounded-xl">
                <h4 className="font-bold text-gray-800 mb-3 flex items-center gap-2">
                  <Battery className="w-5 h-5 text-blue-600" />
                  So hält Ihre Batterie länger:
                </h4>
                <div className="space-y-2 text-sm md:text-base text-gray-700">
                  <div className="flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0" />
                    <span>Nicht immer auf 100% laden (80% reicht meist)</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0" />
                    <span>Nicht unter 20% leer fahren</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0" />
                    <span>Schnelllader sparsam nutzen (schont Batterie)</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0" />
                    <span>Extreme Temperaturen meiden (Garage hilft)</span>
                  </div>
                </div>
              </div>
            </section>

            {/* Mythos 8 */}
            <section id="mythos8" className="mb-12 md:mb-16">
              <div className="flex items-start gap-4 mb-4">
                <div>
                  <h2 className="text-2xl md:text-3xl font-bold text-gray-800">
                    Mythos 8: Das Stromnetz kollabiert
                  </h2>
                </div>
              </div>

              <div className="bg-red-50 border-l-4 border-red-600 p-6 rounded-r-lg mb-6">
                <h3 className="font-bold text-gray-800 mb-2">❌ Der Mythos:</h3>
                <p className="text-sm md:text-base text-gray-700">
                  "Wenn alle E-Autos laden, bricht das Stromnetz zusammen!"
                </p>
              </div>

              <div className="bg-green-50 border-l-4 border-green-600 p-6 rounded-r-lg mb-6">
                <h3 className="font-bold text-gray-800 mb-3">✅ Die Fakten:</h3>
                <div className="space-y-3 text-sm md:text-base text-gray-700">
                  <p>
                    <strong>Netze werden ausgebaut:</strong> Netzbetreiber wissen Bescheid und investieren Milliarden. 
                    Transformatoren werden verstärkt, Kabelstrecken aufgerüstet. Das passiert sowieso – für Wärmepumpen etc.
                  </p>
                  <p>
                    <strong>Intelligentes Laden verhindert Spitzen:</strong> Wallboxen laden nachts (wenn Nachfrage niedrig). 
                    Lastmanagement verteilt Ladung optimal. Bidirektionales Laden (V2G) stabilisiert sogar das Netz!
                  </p>
                  <p>
                    <strong>Zusätzlicher Strombedarf überschaubar:</strong> 20 Mio. E-Autos brauchen ~50 TWh/Jahr extra. 
                    Deutschland produziert 500 TWh/Jahr. Das sind nur <strong>10% mehr Bedarf</strong>.
                  </p>
                </div>
              </div>

              <div className="bg-yellow-50 border-l-4 border-yellow-400 p-6 rounded-r-lg">
                <div className="flex items-start gap-3">
                  <Zap className="w-6 h-6 text-yellow-600 flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-bold text-gray-800 mb-2">Interessanter Fakt:</h4>
                    <p className="text-sm md:text-base text-gray-700">
                      Die deutsche Raffinerie-Industrie verbraucht 40 TWh/Jahr für Benzin-/Dieselproduktion. 
                      E-Autos brauchen direkt Strom – die Raffinerien würden wegfallen. Am Ende: Fast gleicher Strombedarf!
                    </p>
                  </div>
                </div>
              </div>
            </section>

            {/* Mythos 9 */}
            <section id="mythos9" className="mb-12 md:mb-16">
              <div className="flex items-start gap-4 mb-4">
                <div>
                  <h2 className="text-2xl md:text-3xl font-bold text-gray-800">
                    Mythos 9: Lithium & Kobalt werden knapp / sind unethisch
                  </h2>
                </div>
              </div>

              <div className="bg-red-50 border-l-4 border-red-600 p-6 rounded-r-lg mb-6">
                <h3 className="font-bold text-gray-800 mb-2">❌ Der Mythos:</h3>
                <p className="text-sm md:text-base text-gray-700">
                  "Für E-Auto-Batterien wird die Umwelt zerstört und Kinder müssen schuften!"
                </p>
              </div>

              <div className="bg-green-50 border-l-4 border-green-600 p-6 rounded-r-lg mb-6">
                <h3 className="font-bold text-gray-800 mb-3">✅ Die Fakten:</h3>
                <div className="space-y-3 text-sm md:text-base text-gray-700">
                  <p>
                    <strong>Kobalt-Anteil sinkt drastisch:</strong> Moderne Batterien (LFP, LNMO) brauchen 
                    kein Kobalt mehr! Tesla Model 3 Standard: 0% Kobalt. Der Trend geht Weg vom Kobalt.
                  </p>
                  <p>
                    <strong>Lithium ist reichlich vorhanden:</strong> Vorkommen reichen für 3 Milliarden E-Autos. 
                    Abbau wird umweltfreundlicher (Direktlithiumextraktion statt Verdunstungsbecken). Recycling steigt.
                  </p>
                  <p>
                    <strong>Lieferketten werden transparenter:</strong> EU-Verordnung fordert Herkunftsnachweise. 
                    Seriöse Hersteller meiden Kinderarbeit. Kobalt-Recycling macht unabhängig von Minen.
                  </p>
                  <p>
                    <strong>Vergleich Ölförderung:</strong> Ölförderung zerstört massive Flächen, verschmutzt Meere 
                    (Deepwater Horizon), finanziert Kriege. Auch hier: nicht perfekt, aber E-Autos werden besser.
                  </p>
                </div>
              </div>
            </section>

            {/* Mythos 10 */}
            <section id="mythos10" className="mb-8">
              <div className="flex items-start gap-4 mb-4">
                <div>
                  <h2 className="text-2xl md:text-3xl font-bold text-gray-800">
                    Mythos 10: E-Autos sind zu teuer
                  </h2>
                </div>
              </div>

              <div className="bg-red-50 border-l-4 border-red-600 p-6 rounded-r-lg mb-6">
                <h3 className="font-bold text-gray-800 mb-2">❌ Der Mythos:</h3>
                <p className="text-sm md:text-base text-gray-700">
                  "E-Autos sind Luxus! Kein normaler Mensch kann sich das leisten!"
                </p>
              </div>

              {/* IMAGE 4: Kostenvergleich */}
              <div className="my-8 rounded-xl overflow-hidden shadow-lg">
                <img 
                  src="/images/ratgeber/elektroauto-kosten-vergleich-verbrenner.jpg"
                  alt="Elektroauto Gesamtkosten vs Verbrenner: 5.000-10.000€ Ersparnis über 8 Jahre"
                  className="w-full h-auto"
                  loading="lazy"
                />
                <div className="bg-gray-50 p-4 text-xs md:text-sm text-gray-600 italic">
                  Total Cost of Ownership: E-Auto vs Verbrenner über 8 Jahre (inkl. Anschaffung, Betrieb, Wartung, Steuern)
                </div>
              </div>

              <div className="bg-green-50 border-l-4 border-green-600 p-6 rounded-r-lg mb-6">
                <h3 className="font-bold text-gray-800 mb-3">✅ Die Fakten:</h3>
                <div className="space-y-3 text-sm md:text-base text-gray-700">
                  <p>
                    <strong>Anschaffungspreis höher, aber Gesamtkosten niedriger! </strong> 
                     Über 8 Jahre spart ein E-Auto 5.000-10.000€ durch niedrigere Betriebs-, Wartungs- und Steuerkosten.
                  </p>
                  <p>
                    <strong>Einstiegsmodelle ab 25.000€:</strong> Dacia Spring, Fiat 500e, VW ID.3 sind bezahlbare Modelle! 
                    Der Gebrauchtmarkt wächst z.B. gibt es den Nissan Leaf ab 10.000€ oder den Renault Zoe ab 12.000€.
                  </p>
                  <p>
                    <strong>Firmenwagenregelung:</strong> 0,25% statt 1% Versteuerung = massive Ersparnis für Dienstwagennutzer!
                  </p>
                  <p>
                    <strong>Leasing oft günstiger:</strong> E-Auto-Leasingraten teils niedriger als Verbrenner durch 
                    besseren Restwert und Förderungen.
                  </p>
                </div>
              </div>

              <div className="bg-blue-50 border-l-4 border-blue-600 p-6 rounded-r-lg">
                <div className="flex items-start gap-4">
                  <Calculator className="w-6 h-6 text-blue-600 flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-bold text-gray-800 mb-2">Rechnet es sich für Sie?</h4>
                    <p className="text-sm md:text-base text-gray-700 mb-4">
                      Nutzen Sie unseren kostenlosen Rechner und sehen Sie schwarz auf weiß, wie viel Sie 
                      mit einem E-Auto sparen – individuell berechnet für Ihre Situation!
                    </p>
                    <a 
                      href="/rechner/kostenrechner" 
                      className="inline-block bg-blue-600 text-white font-semibold px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors"
                    >
                      Zum Kostenrechner
                    </a>
                  </div>
                </div>
              </div>
            </section>

            {/* Fazit */}
            <div className="bg-gradient-to-r from-green-600 to-blue-600 rounded-xl p-6 md:p-8 text-white mt-12">
              <h2 className="text-2xl md:text-3xl font-bold mb-4">
                Fazit: Fakten schlagen Mythen
              </h2>
              <p className="text-base md:text-lg leading-relaxed">
                Die meisten Vorurteile über E-Autos sind längst widerlegt. Wissenschaftliche Studien zeigen: 
                E-Autos sind alltagstauglich, umweltfreundlicher als Verbrenner, und über die Gesamtkosten oft günstiger. 
                <strong> Die Fakten sprechen eine klare Sprache – probieren Sie es aus!</strong>
              </p>
            </div>
          </div>

          {/* Article Footer */}
          <footer className="mt-12 pt-8 border-t border-gray-200 px-6 md:px-10 pb-8">
            <div className="bg-gray-50 rounded-xl p-4 md:p-6">
              <h3 className="text-base md:text-lg font-bold text-gray-800 mb-2">Quellen & Weitere Informationen</h3>
              <ul className="text-xs md:text-sm text-gray-600 space-y-1">
                <li>• Fraunhofer ISI (2025): Elektromobilität - Faktencheck & Mythen</li>
                <li>• ICCT-Studie (2024): Lebenszyklusanalyse von Elektrofahrzeugen</li>
                <li>• ADAC (2025): E-Auto Brandstatistiken und Sicherheitsanalyse</li>
                <li>• Bundesnetzagentur: Strommix Deutschland & Netzausbau</li>
                <li>• Tesla Impact Report, BMW Nachhaltigkeitsbericht, VW Konzernangaben</li>
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
