import React, { useEffect } from 'react';
import { 
  ArrowLeft, 
  Battery, 
  Zap, 
  CheckCircle, 
  TrendingDown,
  Award,
  PlugZap,
  Info,
  DollarSign,
  Gauge,
  Wind,
  Calculator
} from 'lucide-react';
import SEO from '../components/SEO';
import Header from '../components/Header';

export default function EffizienteElektroautosPage() {

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-white">
      <SEO
        title="Die effizientesten Elektroautos 2025: Top Reichweite | e-Autowelt"
        description="Welche E-Autos sind am effizientesten? Ranking der sparsamsten Elektroautos 2025 mit maximaler Reichweite: Mercedes EQS, Tesla Model 3, Hyundai Ioniq 6 & mehr."
        canonicalPath="/ratgeber/effiziente-elektroautos"
        keywords="effiziente elektroautos, elektroauto reichweite, sparsame e-autos, verbrauch elektroauto, beste reichweite e-auto"
        ogImage="/images/ratgeber/effiziente-elektroautos-og.jpg"
        ogType="article"
        publishedDate="2025-01-28T12:00:00Z"
        modifiedDate="2025-01-28T12:00:00Z"
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
          <div className="relative h-64 md:h-96 bg-gradient-to-br from-green-600 to-blue-600 overflow-hidden">
            <img 
              src="/images/ratgeber/effiziente-elektroautos-hero.webp"
              alt="Die effizientesten Elektroautos 2025 mit großer Reichweite"
              className="w-full h-full object-cover opacity-90"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
            <div className="absolute bottom-0 left-0 right-0 p-6 md:p-10 text-white">
              <div className="flex items-center gap-3 mb-3">
                <div className="bg-white/30 backdrop-blur-md p-2 rounded-lg shadow-lg">
                  <PlugZap className="w-6 h-6 md:w-8 md:h-8" />
                </div>
                <span className="text-xs md:text-sm bg-white/30 backdrop-blur-md px-3 py-1 rounded-full font-semibold shadow-lg">📖 12 Min. Lesezeit</span>
                <span className="text-xs md:text-sm bg-white/30 backdrop-blur-md px-3 py-1 rounded-full font-semibold shadow-lg">Aktualisiert am 13. November 2025</span>
              </div>
              <h1 className="text-2xl md:text-4xl lg:text-5xl font-bold leading-tight">
                Die effizientesten Elektroautos 2025: Welche Modelle haben die beste Reichweite?
              </h1>
            </div>
          </div>

          {/* Article Content */}
          <div className="p-6 md:p-10">
            {/* Intro */}
            <div className="mb-8 md:mb-12">
              <p className="text-lg md:text-xl text-gray-600 leading-relaxed mb-4">
                Reichweite ist das Kaufargument Nummer 1 bei Elektroautos. Doch nicht jedes E-Auto fährt gleich weit: Während manche Modelle nur 300 km schaffen, kommen andere mit einer Ladung über 700 km weit. Der entscheidende Faktor ist nicht nur die Batteriegröße, sondern vor allem die <strong>Effizienz</strong> – also wie sparsam das Fahrzeug mit der verfügbaren Energie umgeht. In diesem Artikel zeigen wir Ihnen die sparsamsten und reichweitenstärksten E-Autos 2025.
              </p>
              <div className="bg-green-50 border-2 border-green-200 rounded-xl p-6">
                <p className="text-base md:text-lg text-gray-700 leading-relaxed">
                  <strong className="text-green-700">🔋 Wichtig zu wissen:</strong> Die offiziellen WLTP-Reichweiten sind Laborwerte und fallen in der Praxis oft 20-30% niedriger aus. Wir zeigen Ihnen sowohl die WLTP-Werte als auch realistische Praxis-Reichweiten bei gemischter Fahrweise (Stadt, Landstraße, Autobahn). Die effizientesten Modelle verbrauchen unter 15 kWh/100km – das entspricht etwa 1,5 Liter Benzin auf 100 km!
                </p>
              </div>
            </div>

            {/* Inhaltsverzeichnis */}
            <nav className="bg-gray-50 rounded-xl p-6 mb-8 md:mb-12">
              <h2 className="text-xl md:text-2xl font-bold text-gray-800 mb-4">
                Inhaltsverzeichnis
              </h2>
              <ol className="space-y-2 text-sm md:text-base">
                <li><a href="#effizienz" className="text-blue-600 hover:underline">1. Was macht ein E-Auto effizient?</a></li>
                <li><a href="#top10" className="text-blue-600 hover:underline">2. Top 10: Effizienteste E-Autos 2025</a></li>
                <li><a href="#reichweiten-champions" className="text-blue-600 hover:underline">3. Reichweiten-Champions: Über 600 km</a></li>
                <li><a href="#vergleich" className="text-blue-600 hover:underline">4. Vergleich: Kompakt vs. Limousine vs. SUV</a></li>
                <li><a href="#faktoren" className="text-blue-600 hover:underline">5. Faktoren für hohe Effizienz</a></li>
                <li><a href="#praxis" className="text-blue-600 hover:underline">6. WLTP vs. Praxis: Die Wahrheit über Reichweiten</a></li>
                <li><a href="#winter" className="text-blue-600 hover:underline">7. Reichweite im Winter</a></li>
                <li><a href="#tipps" className="text-blue-600 hover:underline">8. Tipps für maximale Reichweite</a></li>
                <li><a href="#kosten" className="text-blue-600 hover:underline">9. Effizienz = Niedrige Stromkosten</a></li>
                <li><a href="#fazit" className="text-blue-600 hover:underline">10. Fazit & Kaufempfehlungen</a></li>
              </ol>
            </nav>

            {/* Section 1: Was macht effizient */}
            <section id="effizienz" className="mb-8 md:mb-12">
              <h2 className="text-xl md:text-3xl font-bold text-gray-800 mb-4 md:mb-6 flex items-center gap-3">
                <Zap className="w-6 h-6 md:w-8 md:h-8 text-yellow-600" />
                Was macht ein Elektroauto effizient?
              </h2>
              
              <p className="text-sm md:text-base text-gray-700 leading-relaxed mb-6">
                Effizienz bei E-Autos wird in <strong>kWh pro 100 km</strong> gemessen – je niedriger der Wert, desto sparsamer das Fahrzeug. Zum Vergleich: Ein durchschnittliches E-Auto verbraucht etwa 18-20 kWh/100km, die sparsamsten Modelle liegen unter 14 kWh/100km.
              </p>

              {/* Vergleichsbox Verbrenner */}
              <div className="bg-blue-50 rounded-xl p-6 mb-6">
                <h3 className="font-bold text-gray-800 mb-4 flex items-center gap-2">
                  Effizienz-Vergleich: E-Auto vs. Verbrenner
                </h3>
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="bg-white rounded-lg p-4">
                    <div className="text-2xl mb-2">⚡</div>
                    <h4 className="font-bold text-gray-800 mb-2">Effizientes E-Auto</h4>
                    <div className="text-sm text-gray-700 space-y-1">
                      <div>Verbrauch: <strong>14 kWh/100km</strong></div>
                      <div>Kosten*: <strong>4,20 €/100km</strong></div>
                      <div className="text-xs text-gray-500">*bei 0,30 €/kWh</div>
                    </div>
                  </div>
                  <div className="bg-white rounded-lg p-4">
                    <div className="text-2xl mb-2">⛽</div>
                    <h4 className="font-bold text-gray-800 mb-2">Sparsamer Diesel</h4>
                    <div className="text-sm text-gray-700 space-y-1">
                      <div>Verbrauch: <strong>4,5 L/100km</strong></div>
                      <div>Kosten*: <strong>7,65 €/100km</strong></div>
                      <div className="text-xs text-gray-500">*bei 1,70 €/L</div>
                    </div>
                  </div>
                </div>
                <p className="text-sm text-gray-600 mt-4 italic">
                  Ein effizientes E-Auto spart pro 100 km etwa <strong>3,45 €</strong> gegenüber einem sparsamen Diesel – bei 15.000 km/Jahr sind das über 500 € jährlich!
                </p>
              </div>

              {/* Hauptfaktoren */}
              <div className="space-y-4">
                <h3 className="font-bold text-gray-800 mb-3">Die 5 wichtigsten Faktoren für hohe Effizienz:</h3>
                
                <div className="bg-white border-2 border-green-500 rounded-xl p-6">
                  <h4 className="font-bold text-green-800 mb-2 flex items-center gap-2">
                    1. Aerodynamik (cW-Wert)
                  </h4>
                  <p className="text-sm text-gray-700">
                    Der Luftwiderstand ist der größte Energiefresser bei höheren Geschwindigkeiten. Top-Modelle wie der Mercedes EQS erreichen einen cW-Wert von nur 0,20 – das ist Weltrekord. Zum Vergleich: Durchschnittliche SUVs liegen bei 0,30-0,35.
                  </p>
                </div>

                <div className="bg-white border-2 border-blue-500 rounded-xl p-6">
                  <h4 className="font-bold text-blue-800 mb-2 flex items-center gap-2">
                    2. Gewicht
                  </h4>
                  <p className="text-sm text-gray-700">
                    Leichtere Fahrzeuge verbrauchen weniger Energie. Ein Tesla Model 3 (1,8 Tonnen) ist deutlich effizienter als ein Audi e-tron (2,6 Tonnen), obwohl beide ähnlich große Batterien haben.
                  </p>
                </div>

                <div className="bg-white border-2 border-purple-500 rounded-xl p-6">
                  <h4 className="font-bold text-purple-800 mb-2 flex items-center gap-2">
                    3. Motor-Effizienz
                  </h4>
                  <p className="text-sm text-gray-700">
                    Moderne Elektromotoren haben einen Wirkungsgrad von 90-95%. Permanentmagnet-Synchronmotoren (wie bei Tesla) sind effizienter als Asynchronmotoren, aber teurer.
                  </p>
                </div>

                <div className="bg-white border-2 border-orange-500 rounded-xl p-6">
                  <h4 className="font-bold text-orange-800 mb-2 flex items-center gap-2">
                    4. Rollwiderstand (Reifen)
                  </h4>
                  <p className="text-sm text-gray-700">
                    Spezielle E-Auto-Reifen mit niedrigem Rollwiderstand können den Verbrauch um 5-10% senken. Schmale Reifen (wie beim Hyundai Ioniq 6) sind effizienter als breite Sportreifen.
                  </p>
                </div>

                <div className="bg-white border-2 border-red-500 rounded-xl p-6">
                  <h4 className="font-bold text-red-800 mb-2 flex items-center gap-2">
                    5. Rekuperation
                  </h4>
                  <p className="text-sm text-gray-700">
                    Effektive Energierückgewinnung beim Bremsen kann 15-25% der Energie zurückgewinnen. Moderne Systeme (wie One-Pedal-Driving) optimieren dies automatisch.
                  </p>
                </div>
              </div>
            </section>

            {/* Section 2: Top 10 Ranking */}
            <section id="top10" className="mb-8 md:mb-12">
              <h2 className="text-xl md:text-3xl font-bold text-gray-800 mb-4 md:mb-6 flex items-center gap-3">
                <Award className="w-6 h-6 md:w-8 md:h-8 text-yellow-600" />
                Top 10: Die effizientesten Elektroautos 2025
              </h2>

              <p className="text-sm md:text-base text-gray-700 leading-relaxed mb-6">
                Hier sind die sparsamsten E-Autos nach offiziellem WLTP-Verbrauch. Wir zeigen sowohl Effizienz als auch absolute Reichweite:
              </p>

              {/* Ranking Tabelle */}
              <div className="overflow-x-auto mb-6">
                <table className="w-full bg-white rounded-xl overflow-hidden shadow-lg">
                  <thead className="bg-gradient-to-r from-green-600 to-blue-600 text-white">
                    <tr>
                      <th className="p-3 md:p-4 text-left text-xs md:text-sm">#</th>
                      <th className="p-3 md:p-4 text-left text-xs md:text-sm">Modell</th>
                      <th className="p-3 md:p-4 text-left text-xs md:text-sm">Verbrauch (WLTP)</th>
                      <th className="p-3 md:p-4 text-left text-xs md:text-sm">Reichweite (WLTP)</th>
                      <th className="p-3 md:p-4 text-left text-xs md:text-sm">Batterie</th>
                    </tr>
                  </thead>
                  <tbody className="text-xs md:text-sm">
                    <tr className="border-b border-gray-200 hover:bg-gray-50 bg-yellow-50">
                      <td className="p-3 md:p-4 font-bold text-yellow-700">🥇 1</td>
                      <td className="p-3 md:p-4 font-semibold">Mercedes EQS 450+</td>
                      <td className="p-3 md:p-4"><strong className="text-green-700">13,6 kWh/100km</strong></td>
                      <td className="p-3 md:p-4 text-gray-700">782 km</td>
                      <td className="p-3 md:p-4 text-gray-700">107,8 kWh</td>
                    </tr>
                    <tr className="border-b border-gray-200 hover:bg-gray-50">
                      <td className="p-3 md:p-4 font-bold text-gray-400">🥈 2</td>
                      <td className="p-3 md:p-4 font-semibold">Tesla Model 3 Long Range</td>
                      <td className="p-3 md:p-4"><strong className="text-green-700">13,8 kWh/100km</strong></td>
                      <td className="p-3 md:p-4 text-gray-700">629 km</td>
                      <td className="p-3 md:p-4 text-gray-700">82 kWh</td>
                    </tr>
                    <tr className="border-b border-gray-200 hover:bg-gray-50">
                      <td className="p-3 md:p-4 font-bold text-orange-400">🥉 3</td>
                      <td className="p-3 md:p-4 font-semibold">Hyundai Ioniq 6 Long Range</td>
                      <td className="p-3 md:p-4"><strong className="text-green-700">13,9 kWh/100km</strong></td>
                      <td className="p-3 md:p-4 text-gray-700">614 km</td>
                      <td className="p-3 md:p-4 text-gray-700">77,4 kWh</td>
                    </tr>
                    <tr className="border-b border-gray-200 hover:bg-gray-50">
                      <td className="p-3 md:p-4 font-bold text-gray-700">4</td>
                      <td className="p-3 md:p-4 font-semibold">BMW i4 eDrive40</td>
                      <td className="p-3 md:p-4"><strong className="text-green-700">14,3 kWh/100km</strong></td>
                      <td className="p-3 md:p-4 text-gray-700">590 km</td>
                      <td className="p-3 md:p-4 text-gray-700">83,9 kWh</td>
                    </tr>
                    <tr className="border-b border-gray-200 hover:bg-gray-50">
                      <td className="p-3 md:p-4 font-bold text-gray-700">5</td>
                      <td className="p-3 md:p-4 font-semibold">Tesla Model Y Long Range</td>
                      <td className="p-3 md:p-4"><strong className="text-green-700">14,5 kWh/100km</strong></td>
                      <td className="p-3 md:p-4 text-gray-700">565 km</td>
                      <td className="p-3 md:p-4 text-gray-700">82 kWh</td>
                    </tr>
                    <tr className="border-b border-gray-200 hover:bg-gray-50">
                      <td className="p-3 md:p-4 font-bold text-gray-700">6</td>
                      <td className="p-3 md:p-4 font-semibold">Polestar 2 Long Range</td>
                      <td className="p-3 md:p-4"><strong className="text-green-700">14,8 kWh/100km</strong></td>
                      <td className="p-3 md:p-4 text-gray-700">654 km</td>
                      <td className="p-3 md:p-4 text-gray-700">82 kWh</td>
                    </tr>
                    <tr className="border-b border-gray-200 hover:bg-gray-50">
                      <td className="p-3 md:p-4 font-bold text-gray-700">7</td>
                      <td className="p-3 md:p-4 font-semibold">VW ID.7 Pro</td>
                      <td className="p-3 md:p-4"><strong className="text-green-700">14,9 kWh/100km</strong></td>
                      <td className="p-3 md:p-4 text-gray-700">621 km</td>
                      <td className="p-3 md:p-4 text-gray-700">77 kWh</td>
                    </tr>
                    <tr className="border-b border-gray-200 hover:bg-gray-50">
                      <td className="p-3 md:p-4 font-bold text-gray-700">8</td>
                      <td className="p-3 md:p-4 font-semibold">Renault Megane E-Tech</td>
                      <td className="p-3 md:p-4"><strong className="text-green-700">15,2 kWh/100km</strong></td>
                      <td className="p-3 md:p-4 text-gray-700">470 km</td>
                      <td className="p-3 md:p-4 text-gray-700">60 kWh</td>
                    </tr>
                    <tr className="border-b border-gray-200 hover:bg-gray-50">
                      <td className="p-3 md:p-4 font-bold text-gray-700">9</td>
                      <td className="p-3 md:p-4 font-semibold">Kia EV6 Long Range</td>
                      <td className="p-3 md:p-4"><strong className="text-green-700">15,4 kWh/100km</strong></td>
                      <td className="p-3 md:p-4 text-gray-700">528 km</td>
                      <td className="p-3 md:p-4 text-gray-700">77,4 kWh</td>
                    </tr>
                    <tr className="border-b border-gray-200 hover:bg-gray-50">
                      <td className="p-3 md:p-4 font-bold text-gray-700">10</td>
                      <td className="p-3 md:p-4 font-semibold">Nissan Ariya 87 kWh</td>
                      <td className="p-3 md:p-4"><strong className="text-green-700">15,6 kWh/100km</strong></td>
                      <td className="p-3 md:p-4 text-gray-700">533 km</td>
                      <td className="p-3 md:p-4 text-gray-700">87 kWh</td>
                    </tr>
                  </tbody>
                </table>
                <div className="text-xs text-gray-500 mt-2 italic">Quelle: WLTP-Herstellerangaben (Stand Januar 2025)</div>
              </div>

              {/* Sieger-Highlight */}
              <div className="bg-gradient-to-r from-yellow-100 to-green-100 border-2 border-yellow-400 rounded-xl p-6">
                <h3 className="font-bold text-gray-800 mb-3 flex items-center gap-2">
                  <Award className="w-6 h-6 text-yellow-600" />
                  Der Effizienz-Champion: Mercedes EQS 450+
                </h3>
                <p className="text-sm text-gray-700 leading-relaxed">
                  Mit nur <strong>13,6 kWh/100km</strong> ist der Mercedes EQS das sparsamste Serien-E-Auto der Welt. Der Weltrekord-cW-Wert von <strong>0,20</strong> und die ausgefeilte Aerodynamik machen es möglich. Mit der 107,8 kWh Batterie erreicht der EQS über <strong>780 km Reichweite</strong> – mehr als die meisten Verbrenner mit vollem Tank! Der Preis: Ab 106.000 €.
                </p>
              </div>
            </section>

            {/* Section 3: Reichweiten-Champions */}
            <section id="reichweiten-champions" className="mb-8 md:mb-12">
              <h2 className="text-xl md:text-3xl font-bold text-gray-800 mb-4 md:mb-6 flex items-center gap-3">
                <Battery className="w-6 h-6 md:w-8 md:h-8 text-green-600" />
                Reichweiten-Champions: Über 600 km mit einer Ladung
              </h2>

              <p className="text-sm md:text-base text-gray-700 leading-relaxed mb-6">
                Diese Modelle schaffen die größten Distanzen – perfekt für Langstrecken und Vielfahrer:
              </p>

              {/* Image im Artikel */}
              <div className="mb-8 rounded-xl overflow-hidden shadow-lg">
                <img 
                  src="/images/ratgeber/elektroauto-reichweite-vergleich.webp"
                  alt="Vergleich der Reichweiten verschiedener Elektroautos"
                  className="w-full h-auto"
                  loading="lazy"
                />
                <div className="bg-gray-100 p-4 text-xs text-gray-600 text-center italic">
                  Reichweiten-Vergleich: Die Top 5 E-Autos mit der größten WLTP-Reichweite (Stand 2025)
                </div>
              </div>

              {/* Reichweiten-Ranking */}
              <div className="space-y-4">
                <div className="bg-green-50 border-l-4 border-green-600 rounded-lg p-6">
                  <div className="flex items-start justify-between gap-4 mb-3">
                    <div>
                      <h3 className="font-bold text-gray-800 text-lg">1. Mercedes EQS 450+</h3>
                      <p className="text-sm text-gray-600">Luxus-Limousine</p>
                    </div>
                    <div className="text-right">
                      <div className="text-2xl font-bold text-green-700">782 km</div>
                      <div className="text-xs text-gray-500">WLTP</div>
                    </div>
                  </div>
                  <div className="grid md:grid-cols-3 gap-4 text-sm">
                    <div>
                      <div className="text-gray-600">Batterie:</div>
                      <div className="font-semibold">107,8 kWh</div>
                    </div>
                    <div>
                      <div className="text-gray-600">Verbrauch:</div>
                      <div className="font-semibold">13,6 kWh/100km</div>
                    </div>
                    <div>
                      <div className="text-gray-600">Preis ab:</div>
                      <div className="font-semibold">106.000 €</div>
                    </div>
                  </div>
                  <p className="text-sm text-gray-700 mt-3">
                    <strong>Highlight:</strong> Weltrekord-Aerodynamik (cW 0,20), Luxus pur, perfekt für Langstrecken-Vielfahrer.
                  </p>
                </div>

                <div className="bg-blue-50 border-l-4 border-blue-600 rounded-lg p-6">
                  <div className="flex items-start justify-between gap-4 mb-3">
                    <div>
                      <h3 className="font-bold text-gray-800 text-lg">2. BMW iX xDrive50</h3>
                      <p className="text-sm text-gray-600">Luxus-SUV</p>
                    </div>
                    <div className="text-right">
                      <div className="text-2xl font-bold text-blue-700">630 km</div>
                      <div className="text-xs text-gray-500">WLTP</div>
                    </div>
                  </div>
                  <div className="grid md:grid-cols-3 gap-4 text-sm">
                    <div>
                      <div className="text-gray-600">Batterie:</div>
                      <div className="font-semibold">111,5 kWh</div>
                    </div>
                    <div>
                      <div className="text-gray-600">Verbrauch:</div>
                      <div className="font-semibold">17,8 kWh/100km</div>
                    </div>
                    <div>
                      <div className="text-gray-600">Preis ab:</div>
                      <div className="font-semibold">99.300 €</div>
                    </div>
                  </div>
                  <p className="text-sm text-gray-700 mt-3">
                    <strong>Highlight:</strong> Größte nutzbare Batterie (111,5 kWh), Schnellladen mit 200 kW, Premium-SUV.
                  </p>
                </div>

                <div className="bg-purple-50 border-l-4 border-purple-600 rounded-lg p-6">
                  <div className="flex items-start justify-between gap-4 mb-3">
                    <div>
                      <h3 className="font-bold text-gray-800 text-lg">3. Tesla Model S Long Range</h3>
                      <p className="text-sm text-gray-600">Sport-Limousine</p>
                    </div>
                    <div className="text-right">
                      <div className="text-2xl font-bold text-purple-700">634 km</div>
                      <div className="text-xs text-gray-500">WLTP</div>
                    </div>
                  </div>
                  <div className="grid md:grid-cols-3 gap-4 text-sm">
                    <div>
                      <div className="text-gray-600">Batterie:</div>
                      <div className="font-semibold">100 kWh</div>
                    </div>
                    <div>
                      <div className="text-gray-600">Verbrauch:</div>
                      <div className="font-semibold">15,8 kWh/100km</div>
                    </div>
                    <div>
                      <div className="text-gray-600">Preis ab:</div>
                      <div className="font-semibold">89.990 €</div>
                    </div>
                  </div>
                  <p className="text-sm text-gray-700 mt-3">
                    <strong>Highlight:</strong> Top-Performance (3,2s auf 100 km/h), Tesla Supercharger-Netzwerk, Premium-Tech.
                  </p>
                </div>

                <div className="bg-orange-50 border-l-4 border-orange-600 rounded-lg p-6">
                  <div className="flex items-start justify-between gap-4 mb-3">
                    <div>
                      <h3 className="font-bold text-gray-800 text-lg">4. Tesla Model 3 Long Range</h3>
                      <p className="text-sm text-gray-600">Mittelklasse-Limousine</p>
                    </div>
                    <div className="text-right">
                      <div className="text-2xl font-bold text-orange-700">629 km</div>
                      <div className="text-xs text-gray-500">WLTP</div>
                    </div>
                  </div>
                  <div className="grid md:grid-cols-3 gap-4 text-sm">
                    <div>
                      <div className="text-gray-600">Batterie:</div>
                      <div className="font-semibold">82 kWh</div>
                    </div>
                    <div>
                      <div className="text-gray-600">Verbrauch:</div>
                      <div className="font-semibold">13,8 kWh/100km</div>
                    </div>
                    <div>
                      <div className="text-gray-600">Preis ab:</div>
                      <div className="font-semibold">49.990 €</div>
                    </div>
                  </div>
                  <p className="text-sm text-gray-700 mt-3">
                    <strong>Highlight:</strong> Bestes Preis-Leistungs-Verhältnis, sehr effizient, beliebtestes E-Auto weltweit.
                  </p>
                </div>

                <div className="bg-teal-50 border-l-4 border-teal-600 rounded-lg p-6">
                  <div className="flex items-start justify-between gap-4 mb-3">
                    <div>
                      <h3 className="font-bold text-gray-800 text-lg">5. VW ID.7 Pro</h3>
                      <p className="text-sm text-gray-600">Mittelklasse-Limousine</p>
                    </div>
                    <div className="text-right">
                      <div className="text-2xl font-bold text-teal-700">621 km</div>
                      <div className="text-xs text-gray-500">WLTP</div>
                    </div>
                  </div>
                  <div className="grid md:grid-cols-3 gap-4 text-sm">
                    <div>
                      <div className="text-gray-600">Batterie:</div>
                      <div className="font-semibold">77 kWh</div>
                    </div>
                    <div>
                      <div className="text-gray-600">Verbrauch:</div>
                      <div className="font-semibold">14,9 kWh/100km</div>
                    </div>
                    <div>
                      <div className="text-gray-600">Preis ab:</div>
                      <div className="font-semibold">54.795 €</div>
                    </div>
                  </div>
                  <p className="text-sm text-gray-700 mt-3">
                    <strong>Highlight:</strong> Komfortables Reise-Auto, gute Ausstattung, Volkswagen-Qualität.
                  </p>
                </div>
              </div>
            </section>

            {/* Section 4: Vergleich Kategorien */}
            <section id="vergleich" className="mb-8 md:mb-12">
              <h2 className="text-xl md:text-3xl font-bold text-gray-800 mb-4 md:mb-6 flex items-center gap-3">
                <Gauge className="w-6 h-6 md:w-8 md:h-8 text-blue-600" />
                Vergleich: Kompakt vs. Limousine vs. SUV
              </h2>

              <p className="text-sm md:text-base text-gray-700 leading-relaxed mb-6">
                Die Fahrzeugklasse hat großen Einfluss auf Effizienz und Reichweite:
              </p>

              <div className="grid md:grid-cols-3 gap-6">
                {/* Kompaktklasse */}
                <div className="bg-white rounded-xl border-2 border-green-500 p-6">
                  <h3 className="font-bold text-gray-800 mb-3">Kompaktklasse</h3>
                  <div className="space-y-2 text-sm text-gray-700 mb-4">
                    <div><strong>Verbrauch:</strong> 15-17 kWh/100km</div>
                    <div><strong>Reichweite:</strong> 350-450 km</div>
                    <div><strong>Batterie:</strong> 50-65 kWh</div>
                    <div><strong>Preis:</strong> 35.000-45.000 €</div>
                  </div>
                  <div className="border-t pt-3">
                    <div className="font-bold text-sm mb-2">Top-Modelle:</div>
                    <ul className="text-xs space-y-1">
                      <li>• Renault Megane E-Tech</li>
                      <li>• Cupra Born</li>
                      <li>• VW ID.3</li>
                    </ul>
                  </div>
                </div>

                {/* Limousine */}
                <div className="bg-white rounded-xl border-2 border-blue-500 p-6">
                  <h3 className="font-bold text-gray-800 mb-3">Limousine/Fastback</h3>
                  <div className="space-y-2 text-sm text-gray-700 mb-4">
                    <div><strong>Verbrauch:</strong> 13-15 kWh/100km</div>
                    <div><strong>Reichweite:</strong> 500-700 km</div>
                    <div><strong>Batterie:</strong> 75-110 kWh</div>
                    <div><strong>Preis:</strong> 48.000-110.000 €</div>
                  </div>
                  <div className="border-t pt-3">
                    <div className="font-bold text-sm mb-2">Top-Modelle:</div>
                    <ul className="text-xs space-y-1">
                      <li>• Mercedes EQS</li>
                      <li>• Tesla Model 3</li>
                      <li>• Hyundai Ioniq 6</li>
                    </ul>
                  </div>
                </div>

                {/* SUV */}
                <div className="bg-white rounded-xl border-2 border-orange-500 p-6">
                  <h3 className="font-bold text-gray-800 mb-3">SUV</h3>
                  <div className="space-y-2 text-sm text-gray-700 mb-4">
                    <div><strong>Verbrauch:</strong> 17-22 kWh/100km</div>
                    <div><strong>Reichweite:</strong> 400-600 km</div>
                    <div><strong>Batterie:</strong> 70-110 kWh</div>
                    <div><strong>Preis:</strong> 45.000-100.000 €</div>
                  </div>
                  <div className="border-t pt-3">
                    <div className="font-bold text-sm mb-2">Top-Modelle:</div>
                    <ul className="text-xs space-y-1">
                      <li>• Tesla Model Y</li>
                      <li>• Kia EV6</li>
                      <li>• BMW iX</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="bg-blue-50 rounded-xl p-6 mt-6">
                <h3 className="font-bold text-gray-800 mb-2">💡 Kauftipp:</h3>
                <p className="text-sm text-gray-700 leading-relaxed">
                  Limousinen und Fastbacks (wie Hyundai Ioniq 6, Tesla Model 3) bieten das beste Verhältnis aus Reichweite, Effizienz und Preis. Sie sind aerodynamischer als SUVs, aber praktischer als Kompakte. Für Familien mit Platzbedarf: Tesla Model Y oder Kia EV6 – beide schaffen über 500 km und sind alltagstauglich.
                </p>
              </div>
            </section>

            {/* Section 5: Faktoren */}
            <section id="faktoren" className="mb-8 md:mb-12">
              <h2 className="text-xl md:text-3xl font-bold text-gray-800 mb-4 md:mb-6 flex items-center gap-3">
                <Wind className="w-6 h-6 md:w-8 md:h-8 text-purple-600" />
                Faktoren für hohe Effizienz im Detail
              </h2>

              <p className="text-sm md:text-base text-gray-700 leading-relaxed mb-6">
                Warum sind manche E-Autos deutlich effizienter als andere? Hier die technischen Details:
              </p>

              {/* Aerodynamik Deep-Dive */}
              <div className="space-y-6">
                <div className="bg-green-50 rounded-xl p-6">
                  <h3 className="font-bold text-gray-800 mb-4">Aerodynamik: Der wichtigste Faktor</h3>
                  <p className="text-sm text-gray-700 mb-4">
                    Der Luftwiderstand steigt quadratisch mit der Geschwindigkeit. Bei 130 km/h macht er bereits 60-70% des Gesamtwiderstands aus. Ein niedriger cW-Wert ist daher essentiell:
                  </p>
                  <div className="overflow-x-auto">
                    <table className="w-full text-sm">
                      <thead className="bg-green-600 text-white">
                        <tr>
                          <th className="p-2 text-left">Modell</th>
                          <th className="p-2 text-left">cW-Wert</th>
                          <th className="p-2 text-left">Stirnfläche</th>
                          <th className="p-2 text-left">cW × A</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr className="border-b">
                          <td className="p-2">Mercedes EQS</td>
                          <td className="p-2 font-semibold text-green-700">0,20</td>
                          <td className="p-2">2,51 m²</td>
                          <td className="p-2 font-semibold">0,50</td>
                        </tr>
                        <tr className="border-b">
                          <td className="p-2">Hyundai Ioniq 6</td>
                          <td className="p-2 font-semibold text-green-700">0,21</td>
                          <td className="p-2">2,43 m²</td>
                          <td className="p-2 font-semibold">0,51</td>
                        </tr>
                        <tr className="border-b">
                          <td className="p-2">Tesla Model 3</td>
                          <td className="p-2 font-semibold text-green-600">0,23</td>
                          <td className="p-2">2,22 m²</td>
                          <td className="p-2 font-semibold">0,51</td>
                        </tr>
                        <tr className="border-b">
                          <td className="p-2">VW ID.4</td>
                          <td className="p-2 text-orange-600">0,28</td>
                          <td className="p-2">2,77 m²</td>
                          <td className="p-2">0,78</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                  <p className="text-xs text-gray-600 mt-3 italic">
                    cW × A (Luftwiderstandsbeiwert × Stirnfläche) = Gesamtluftwiderstand. Je niedriger, desto besser.
                  </p>
                </div>

                <div className="bg-blue-50 rounded-xl p-6">
                  <h3 className="font-bold text-gray-800 mb-4">Gewicht: Jedes Kilo zählt</h3>
                  <p className="text-sm text-gray-700 mb-3">
                    Im Stadt- und Landstraßenverkehr ist das Gewicht entscheidend. Leichtere Fahrzeuge beschleunigen effizienter und gewinnen beim Bremsen mehr Energie zurück:
                  </p>
                  <div className="grid md:grid-cols-2 gap-4 text-sm">
                    <div className="bg-white rounded-lg p-4">
                      <div className="font-bold mb-2">Tesla Model 3 SR+</div>
                      <div className="text-gray-700">
                        <div>Gewicht: <strong>1.830 kg</strong></div>
                        <div>Batterie: 60 kWh</div>
                        <div>Verbrauch: <strong>14,1 kWh/100km</strong></div>
                      </div>
                    </div>
                    <div className="bg-white rounded-lg p-4">
                      <div className="font-bold mb-2">Audi e-tron 55</div>
                      <div className="text-gray-700">
                        <div>Gewicht: <strong>2.565 kg</strong></div>
                        <div>Batterie: 95 kWh</div>
                        <div>Verbrauch: <strong>21,3 kWh/100km</strong></div>
                      </div>
                    </div>
                  </div>
                  <p className="text-xs text-gray-600 mt-3">
                    💡 <strong>735 kg Unterschied</strong> bedeuten <strong>+51% Verbrauch</strong> beim schwereren Fahrzeug!
                  </p>
                </div>

                <div className="bg-purple-50 rounded-xl p-6">
                  <h3 className="font-bold text-gray-800 mb-4">Motor-Technologie</h3>
                  <div className="space-y-3 text-sm text-gray-700">
                    <div className="bg-white rounded-lg p-4">
                      <h4 className="font-bold mb-2">Permanentmagnet-Synchronmotor (PSM)</h4>
                      <div className="space-y-1">
                        <div>✅ Wirkungsgrad: <strong>93-96%</strong></div>
                        <div>✅ Sehr effizient bei allen Geschwindigkeiten</div>
                        <div>❌ Teurer (seltene Erden benötigt)</div>
                        <div className="text-xs text-gray-600 italic mt-2">Verbaut in: Tesla, BMW, Hyundai, Kia</div>
                      </div>
                    </div>
                    <div className="bg-white rounded-lg p-4">
                      <h4 className="font-bold mb-2">Asynchronmotor (ASM)</h4>
                      <div className="space-y-1">
                        <div>✅ Günstigerer Bau</div>
                        <div>✅ Robust und wartungsarm</div>
                        <div>❌ Wirkungsgrad: <strong>88-92%</strong></div>
                        <div className="text-xs text-gray-600 italic mt-2">Verbaut in: ältere Renault, Audi e-tron</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* Section 6: WLTP vs Praxis */}
            <section id="praxis" className="mb-8 md:mb-12">
              <h2 className="text-xl md:text-3xl font-bold text-gray-800 mb-4 md:mb-6 flex items-center gap-3">
                <Info className="w-6 h-6 md:w-8 md:h-8 text-orange-600" />
                WLTP vs. Praxis: Die Wahrheit über Reichweiten
              </h2>

              <p className="text-sm md:text-base text-gray-700 leading-relaxed mb-6">
                WLTP-Werte sind Laborwerte unter idealen Bedingungen. In der Praxis weichen die Reichweiten oft deutlich ab:
              </p>

              <div className="bg-orange-50 border-2 border-orange-500 rounded-xl p-6 mb-6">
                <h3 className="font-bold text-orange-800 mb-3">Typische Abweichungen:</h3>
                <ul className="space-y-2 text-sm text-gray-700">
                  <li className="flex items-start gap-2">
                    <span className="text-orange-600 font-bold">•</span>
                    <div><strong>Stadt (30-50 km/h):</strong> +10 bis +20% mehr Reichweite als WLTP (Rekuperation wirkt optimal)</div>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-orange-600 font-bold">•</span>
                    <div><strong>Landstraße (80-100 km/h):</strong> -10 bis -15% weniger als WLTP</div>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-orange-600 font-bold">•</span>
                    <div><strong>Autobahn (130 km/h):</strong> -30 bis -40% weniger als WLTP (Luftwiderstand dominant)</div>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-orange-600 font-bold">•</span>
                    <div><strong>Winter (-10°C):</strong> -20 bis -35% weniger (Heizung + kalte Batterie)</div>
                  </li>
                </ul>
              </div>

              {/* Praxis-Tabelle */}
              <div className="overflow-x-auto mb-6">
                <table className="w-full bg-white rounded-xl overflow-hidden shadow-lg">
                  <thead className="bg-gradient-to-r from-orange-600 to-red-600 text-white">
                    <tr>
                      <th className="p-3 text-left text-xs md:text-sm">Modell</th>
                      <th className="p-3 text-left text-xs md:text-sm">WLTP</th>
                      <th className="p-3 text-left text-xs md:text-sm">Praxis (Ø)</th>
                      <th className="p-3 text-left text-xs md:text-sm">Autobahn 130</th>
                    </tr>
                  </thead>
                  <tbody className="text-xs md:text-sm">
                    <tr className="border-b hover:bg-gray-50">
                      <td className="p-3">Mercedes EQS 450+</td>
                      <td className="p-3 font-semibold">782 km</td>
                      <td className="p-3 text-green-700"><strong>620 km</strong> (-21%)</td>
                      <td className="p-3 text-orange-700">480 km (-39%)</td>
                    </tr>
                    <tr className="border-b hover:bg-gray-50">
                      <td className="p-3">Tesla Model 3 LR</td>
                      <td className="p-3 font-semibold">629 km</td>
                      <td className="p-3 text-green-700"><strong>510 km</strong> (-19%)</td>
                      <td className="p-3 text-orange-700">390 km (-38%)</td>
                    </tr>
                    <tr className="border-b hover:bg-gray-50">
                      <td className="p-3">Hyundai Ioniq 6 LR</td>
                      <td className="p-3 font-semibold">614 km</td>
                      <td className="p-3 text-green-700"><strong>500 km</strong> (-19%)</td>
                      <td className="p-3 text-orange-700">380 km (-38%)</td>
                    </tr>
                    <tr className="border-b hover:bg-gray-50">
                      <td className="p-3">VW ID.4 Pro</td>
                      <td className="p-3 font-semibold">520 km</td>
                      <td className="p-3 text-green-700"><strong>410 km</strong> (-21%)</td>
                      <td className="p-3 text-orange-700">300 km (-42%)</td>
                    </tr>
                  </tbody>
                </table>
                <div className="text-xs text-gray-500 mt-2 italic">Quelle: ADAC Ecotest, diverse Praxistests (2024/2025)</div>
              </div>

              <div className="bg-blue-50 rounded-xl p-6">
                <h3 className="font-bold text-gray-800 mb-2">💡 Faustregel für realistische Reichweiten:</h3>
                <p className="text-sm text-gray-700">
                  Rechnen Sie mit <strong>70-80% der WLTP-Reichweite</strong> für gemischte Fahrweise (Stadt + Autobahn). Bei reiner Autobahnfahrt mit 130 km/h: <strong>60-65% der WLTP-Reichweite</strong>. Planen Sie immer einen Sicherheitspuffer von 20% ein!
                </p>
              </div>
            </section>

            {/* Section 7: Winter */}
            <section id="winter" className="mb-8 md:mb-12">
              <h2 className="text-xl md:text-3xl font-bold text-gray-800 mb-4 md:mb-6 flex items-center gap-3">
                <TrendingDown className="w-6 h-6 md:w-8 md:h-8 text-blue-600" />
                Reichweite im Winter
              </h2>

              <p className="text-sm md:text-base text-gray-700 leading-relaxed mb-6">
                Kälte ist der größte Reichweiten-Killer bei E-Autos. Bei -10°C kann die Reichweite um bis zu 35% sinken:
              </p>

              <div className="grid md:grid-cols-2 gap-6 mb-6">
                <div className="bg-blue-50 rounded-xl p-6">
                  <h3 className="font-bold text-gray-800 mb-3">Warum sinkt die Reichweite?</h3>
                  <ul className="space-y-2 text-sm text-gray-700">
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-blue-600 flex-shrink-0 mt-0.5" />
                      <div><strong>Heizung:</strong> 2-5 kW Dauerlast für Innenraum (größter Faktor)</div>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-blue-600 flex-shrink-0 mt-0.5" />
                      <div><strong>Batterie-Temperierung:</strong> Kalte Batterien leisten weniger</div>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-blue-600 flex-shrink-0 mt-0.5" />
                      <div><strong>Höherer Innenwiderstand:</strong> Mehr Verlustleistung</div>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-blue-600 flex-shrink-0 mt-0.5" />
                      <div><strong>Rekuperation:</strong> Funktioniert bei kalter Batterie schlechter</div>
                    </li>
                  </ul>
                </div>

                <div className="bg-green-50 rounded-xl p-6">
                  <h3 className="font-bold text-gray-800 mb-3">Modelle mit Wärmepumpe</h3>
                  <p className="text-sm text-gray-700 mb-3">
                    Eine Wärmepumpe reduziert den Heizenergiebedarf um 30-50% gegenüber klassischen Heizwiderständen:
                  </p>
                  <ul className="space-y-1 text-sm text-gray-700">
                    <li>✅ Tesla Model 3/Y (serienmäßig)</li>
                    <li>✅ BMW iX, i4 (serienmäßig)</li>
                    <li>✅ Hyundai Ioniq 5/6 (serienmäßig)</li>
                    <li>✅ VW ID. Familie (optional, 1.200 €)</li>
                    <li>✅ Mercedes EQS (serienmäßig)</li>
                  </ul>
                  <p className="text-xs text-gray-600 mt-3 italic">
                    Im Winter Reichweiten-Verlust: Mit Wärmepumpe -20%, ohne -35%
                  </p>
                </div>
              </div>

              {/* Winter-Tipps */}
              <div className="bg-orange-50 border-2 border-orange-500 rounded-xl p-6">
                <h3 className="font-bold text-orange-800 mb-3">🔥 Tipps für mehr Reichweite im Winter:</h3>
                <div className="grid md:grid-cols-2 gap-4 text-sm text-gray-700">
                  <div>
                    <div className="font-semibold mb-1">1. Vorklimatisierung während Ladung</div>
                    <div className="text-xs">Auto wärmen, während es noch am Strom hängt</div>
                  </div>
                  <div>
                    <div className="font-semibold mb-1">2. Sitzheizung statt Luftheizung</div>
                    <div className="text-xs">Spart 1-2 kW Dauerverbrauch</div>
                  </div>
                  <div>
                    <div className="font-semibold mb-1">3. Eco-Modus aktivieren</div>
                    <div className="text-xs">Reduziert Heizleistung intelligent</div>
                  </div>
                  <div>
                    <div className="font-semibold mb-1">4. In Garage parken</div>
                    <div className="text-xs">+5°C Starttemperatur = 5% mehr Reichweite</div>
                  </div>
                </div>
              </div>
            </section>

            {/* Section 8: Tipps */}
            <section id="tipps" className="mb-8 md:mb-12">
              <h2 className="text-xl md:text-3xl font-bold text-gray-800 mb-4 md:mb-6 flex items-center gap-3">
                <CheckCircle className="w-6 h-6 md:w-8 md:h-8 text-green-600" />
                8 Tipps für maximale Reichweite
              </h2>

              <div className="grid md:grid-cols-2 gap-4">
                <div className="bg-green-50 rounded-xl p-6">
                  <div className="flex items-start gap-3">
                    <div className="bg-green-600 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold flex-shrink-0">1</div>
                    <div>
                      <h3 className="font-bold text-gray-800 mb-2">Geschwindigkeit reduzieren</h3>
                      <p className="text-sm text-gray-700">120 statt 130 km/h spart 15% Energie. 110 statt 130 km/h sogar 25%!</p>
                    </div>
                  </div>
                </div>

                <div className="bg-blue-50 rounded-xl p-6">
                  <div className="flex items-start gap-3">
                    <div className="bg-blue-600 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold flex-shrink-0">2</div>
                    <div>
                      <h3 className="font-bold text-gray-800 mb-2">Vorausschauend fahren</h3>
                      <p className="text-sm text-gray-700">Rekuperation nutzen statt Bremse. One-Pedal-Driving ist am effizientesten.</p>
                    </div>
                  </div>
                </div>

                <div className="bg-purple-50 rounded-xl p-6">
                  <div className="flex items-start gap-3">
                    <div className="bg-purple-600 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold flex-shrink-0">3</div>
                    <div>
                      <h3 className="font-bold text-gray-800 mb-2">Eco-Modus aktivieren</h3>
                      <p className="text-sm text-gray-700">Sanftere Beschleunigung und optimierte Klimaanlage sparen 10-15%.</p>
                    </div>
                  </div>
                </div>

                <div className="bg-orange-50 rounded-xl p-6">
                  <div className="flex items-start gap-3">
                    <div className="bg-orange-600 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold flex-shrink-0">4</div>
                    <div>
                      <h3 className="font-bold text-gray-800 mb-2">Reifendruck prüfen</h3>
                      <p className="text-sm text-gray-700">0,5 bar mehr als empfohlen senkt Rollwiderstand um 3-5%.</p>
                    </div>
                  </div>
                </div>

                <div className="bg-teal-50 rounded-xl p-6">
                  <div className="flex items-start gap-3">
                    <div className="bg-teal-600 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold flex-shrink-0">5</div>
                    <div>
                      <h3 className="font-bold text-gray-800 mb-2">Gewicht reduzieren</h3>
                      <p className="text-sm text-gray-700">100 kg Mehrgewicht = 1-2% mehr Verbrauch. Dachbox abbauen!</p>
                    </div>
                  </div>
                </div>

                <div className="bg-pink-50 rounded-xl p-6">
                  <div className="flex items-start gap-3">
                    <div className="bg-pink-600 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold flex-shrink-0">6</div>
                    <div>
                      <h3 className="font-bold text-gray-800 mb-2">Klimaanlage dosiert nutzen</h3>
                      <p className="text-sm text-gray-700">22°C statt 18°C spart im Sommer 10-15% Energie.</p>
                    </div>
                  </div>
                </div>

                <div className="bg-yellow-50 rounded-xl p-6">
                  <div className="flex items-start gap-3">
                    <div className="bg-yellow-600 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold flex-shrink-0">7</div>
                    <div>
                      <h3 className="font-bold text-gray-800 mb-2">Routen planen</h3>
                      <p className="text-sm text-gray-700">Autobahn vs. Landstraße: 30% Verbrauchsunterschied möglich!</p>
                    </div>
                  </div>
                </div>

                <div className="bg-indigo-50 rounded-xl p-6">
                  <div className="flex items-start gap-3">
                    <div className="bg-indigo-600 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold flex-shrink-0">8</div>
                    <div>
                      <h3 className="font-bold text-gray-800 mb-2">Batterietemperatur optimieren</h3>
                      <p className="text-sm text-gray-700">Vor Schnellladung vorheizen, nach Fahrt direkt laden.</p>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* Section 9: Kosten */}
            <section id="kosten" className="mb-8 md:mb-12">
              <h2 className="text-xl md:text-3xl font-bold text-gray-800 mb-4 md:mb-6 flex items-center gap-3">
                <DollarSign className="w-6 h-6 md:w-8 md:h-8 text-green-600" />
                Effizienz = Niedrige Stromkosten
              </h2>

              <p className="text-sm md:text-base text-gray-700 leading-relaxed mb-6">
                Die Effizienz wirkt sich direkt auf Ihre laufenden Kosten aus. Hier der Vergleich für 15.000 km/Jahr:
              </p>

              <div className="overflow-x-auto mb-6">
                <table className="w-full bg-white rounded-xl overflow-hidden shadow-lg">
                  <thead className="bg-gradient-to-r from-green-600 to-blue-600 text-white">
                    <tr>
                      <th className="p-3 text-left text-xs md:text-sm">Modell</th>
                      <th className="p-3 text-left text-xs md:text-sm">Verbrauch</th>
                      <th className="p-3 text-left text-xs md:text-sm">Kosten/Jahr*</th>
                      <th className="p-3 text-left text-xs md:text-sm">Ersparnis vs. Diesel**</th>
                    </tr>
                  </thead>
                  <tbody className="text-xs md:text-sm">
                    <tr className="border-b hover:bg-gray-50">
                      <td className="p-3 font-semibold">Mercedes EQS 450+</td>
                      <td className="p-3">13,6 kWh/100km</td>
                      <td className="p-3 text-green-700"><strong>612 €</strong></td>
                      <td className="p-3 text-green-700">+1.538 €</td>
                    </tr>
                    <tr className="border-b hover:bg-gray-50">
                      <td className="p-3 font-semibold">Tesla Model 3 LR</td>
                      <td className="p-3">13,8 kWh/100km</td>
                      <td className="p-3 text-green-700"><strong>621 €</strong></td>
                      <td className="p-3 text-green-700">+1.529 €</td>
                    </tr>
                    <tr className="border-b hover:bg-gray-50">
                      <td className="p-3 font-semibold">VW ID.3 Pro</td>
                      <td className="p-3">16,2 kWh/100km</td>
                      <td className="p-3 text-blue-700"><strong>729 €</strong></td>
                      <td className="p-3 text-blue-700">+1.421 €</td>
                    </tr>
                    <tr className="border-b hover:bg-gray-50">
                      <td className="p-3 font-semibold">Tesla Model Y LR</td>
                      <td className="p-3">17,1 kWh/100km</td>
                      <td className="p-3 text-blue-700"><strong>769 €</strong></td>
                      <td className="p-3 text-blue-700">+1.381 €</td>
                    </tr>
                    <tr className="border-b hover:bg-gray-50 bg-gray-100">
                      <td className="p-3 font-semibold">Vergleich: Diesel (5L/100km)</td>
                      <td className="p-3">5,0 L/100km</td>
                      <td className="p-3 text-orange-700"><strong>2.150 €</strong></td>
                      <td className="p-3">-</td>
                    </tr>
                  </tbody>
                </table>
                <div className="text-xs text-gray-500 mt-2 space-y-1">
                  <div>*Strompreis: 0,30 €/kWh (Haushaltsstrom, Wallbox)</div>
                  <div>**Diesel: 1,70 €/L, 5 L/100km = 2.150 €/Jahr</div>
                </div>
              </div>

              <div className="bg-green-50 border-2 border-green-500 rounded-xl p-6">
                <h3 className="font-bold text-green-800 mb-3">Beispielrechnung über 8 Jahre:</h3>
                <div className="grid md:grid-cols-2 gap-6 text-sm">
                  <div>
                    <h4 className="font-bold mb-2">Tesla Model 3 Long Range (effizient)</h4>
                    <div className="space-y-1 text-gray-700">
                      <div>Kaufpreis: 49.990 €</div>
                      <div>Stromkosten (120.000 km): 4.968 €</div>
                      <div>Wartung (8 Jahre): 2.400 €</div>
                      <div>Versicherung: 6.400 €</div>
                      <div>Steuer: 0 €</div>
                      <div className="border-t pt-2 font-bold">Gesamt: 63.758 €</div>
                    </div>
                  </div>
                  <div>
                    <h4 className="font-bold mb-2">Diesel 5er BMW (5L/100km)</h4>
                    <div className="space-y-1 text-gray-700">
                      <div>Kaufpreis: 55.000 €</div>
                      <div>Spritkosten (120.000 km): 10.200 €</div>
                      <div>Wartung (8 Jahre): 4.800 €</div>
                      <div>Versicherung: 6.000 €</div>
                      <div>Steuer: 1.600 €</div>
                      <div className="border-t pt-2 font-bold">Gesamt: 77.600 €</div>
                    </div>
                  </div>
                </div>
                <p className="mt-4 text-sm font-bold text-green-800">
                  ✅ Ersparnis mit effizientem E-Auto: <span className="text-xl">13.842 €</span>
                </p>
              </div>
            </section>

            {/* Section 10: Fazit */}
            <section id="fazit" className="mb-8 md:mb-12">

              {/* Fazit Box wie auf der Website */}
              <div className="bg-gradient-to-r from-blue-600 to-green-600 rounded-xl p-6 md:p-8 text-white mt-12">
              <h2 className="text-2xl md:text-3xl font-bold mb-4">
                Fazit: Elektromobilität in Deutschland auf Erfolgskurs
              </h2>
              <div className="bg-gradient-to-r from-blue-600 to-green-600 rounded-2xl p-8 text-white mb-8">
                <p className="text-lg mb-4">
                  Die <strong>effizientesten Elektroautos 2025</strong> verbrauchen unter 14 kWh/100km und erreichen Reichweiten von über 600 km. Der Mercedes EQS führt mit 13,6 kWh/100km und 782 km Reichweite, dicht gefolgt von Tesla Model 3 (13,8 kWh) und Hyundai Ioniq 6 (13,9 kWh).
                </p>
                  <p className="text-lg font-semibold">
                  Die <strong>wichtigsten Faktoren</strong> für hohe Effizienz sind Aerodynamik (cW-Wert unter 0,25), niedriges Gewicht und moderne Permanentmagnet-Motoren. In der Praxis erreichen Sie etwa <strong>70-80% der WLTP-Reichweite</strong> bei gemischter Fahrweise, auf der Autobahn mit 130 km/h eher 60-65%.
                </p>
              </div>
              </div>

            </section>

            {/* Call-to-Action */}
            <div className="bg-gradient-to-r from-purple-600 to-blue-600 rounded-2xl p-8 text-center text-white">
              <h3 className="text-2xl font-bold mb-4">
                📊 Vergleichen Sie die Gesamtkosten
              </h3>
              <p className="text-lg mb-6 max-w-2xl mx-auto">
                Mit unserem TCO-Rechner können Sie die Gesamtkosten verschiedener E-Autos vergleichen – inklusive Strom, Wartung, Versicherung und Wertverlust über die gesamte Nutzungsdauer.
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
            <li>• WLTP-Reichweiten: Offizielle Herstellerangaben (Stand Januar 2025)</li>
            <li>• Praxis-Reichweiten: ADAC Ecotest, diverse Fachmagazin-Tests (auto motor sport, AutoBild)</li>
            <li>• Verbrauchswerte: ADAC, TÜV, EPA (Environmental Protection Agency)</li>
            <li>• Aerodynamik-Daten: Herstellerangaben, Fachpublikationen</li>
            <li>• Kostenberechnungen: Eigene Berechnungen basierend auf Durchschnittspreisen 2025</li>
          </ul>
          <p className="mt-4 leading-relaxed">
            <strong>Haftungsausschluss:</strong> Alle Angaben ohne Gewähr. Reichweiten und Verbräuche können je nach Fahrweise, Witterung und Beladung abweichen. Preise sind unverbindliche Preisempfehlungen der Hersteller (Stand Januar 2025) und können regional variieren.
          </p>
        </div>

      </div>
    </div>
  );
}
