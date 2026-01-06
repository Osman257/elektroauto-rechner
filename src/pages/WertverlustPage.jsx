import React, { useEffect } from 'react';
import { 
  ArrowLeft, 
  TrendingDown, 
  DollarSign, 
  Calendar, 
  AlertTriangle, 
  CheckCircle, 
  Info  // ← NEU hinzufügen!
} from 'lucide-react';
import SEO from '../components/SEO';
import Header from '../components/Header';
export default function WertverlustPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-white">
      <SEO
        title="Wertverlust E-Auto: So viel verliert Ihr Stromer wirklich (2025)"
        description="E-Auto Wertverlust nach 3 Jahren: ~50% vs. 36% beim Benziner. ✓ Tabelle mit Restwerten ✓ Die wertstabilsten Modelle → Jetzt checken!"
        canonicalPath="/ratgeber/wertverlust"
        keywords="elektroauto wertverlust, e-auto restwert, wertverlust verbrenner, elektroauto vs verbrenner wertverlust, restwert elektroauto"
        ogImage="/images/ratgeber/wertverlust-og.jpg"
        ogType="article"
        publishedDate="2025-01-19T10:00:00Z"
        modifiedDate="2025-01-19T10:00:00Z"
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
          <div className="relative h-64 md:h-96 bg-gradient-to-br from-red-600 to-orange-600 overflow-hidden">
            <img 
              src="/images/ratgeber/elektroauto-wertverlust-vs-verbrenner.webp"
              alt="Elektroauto Wertverlust vs Verbrenner 2025 - Restwert-Vergleich nach 3 Jahren"
              className="w-full h-full object-cover opacity-90"
              loading="lazy"
              decoding="async"
              
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
            <div className="absolute bottom-0 left-0 right-0 p-6 md:p-10 text-white">
              <div className="flex items-center gap-3 mb-3">
                <div className="bg-white/30 backdrop-blur-md p-2 rounded-lg shadow-lg">
                  <TrendingDown className="w-6 h-6 md:w-8 md:h-8" />
                </div>
                <span className="text-xs md:text-sm bg-white/30 backdrop-blur-md px-3 py-1 rounded-full font-semibold shadow-lg">📊 11 Min. Lesezeit</span>
                <span className="text-xs md:text-sm bg-white/30 backdrop-blur-md px-3 py-1 rounded-full font-semibold shadow-lg">Aktualisiert am 6. Juni 2025</span>
              </div>
              <h1 className="text-2xl md:text-4xl lg:text-5xl font-bold leading-tight">
                Wertverlust bei Elektroautos im Vergleich zu Verbrennern: Der große Restwert-Vergleich 2025
              </h1>
            </div>
          </div>

          {/* Article Content */}
          <div className="p-6 md:p-10">
            {/* Intro */}
            <div className="mb-8 md:mb-12">
              <p className="text-lg md:text-xl text-gray-600 leading-relaxed mb-4">
                Der Wertverlust ist ein entscheidender Kostenfaktor beim Autokauf – und hier zeigen sich zwischen Elektroautos und Verbrennern deutliche Unterschiede. Während E-Autos nach 3 Jahren durchschnittlich 38-50% ihres Wertes verlieren, liegen Verbrenner bei 29-32%. Doch die Situation ist differenzierter als es scheint: Neue Daten zeigen, dass junge E-Autos (unter 1 Jahr) sogar wertstabiler sind als Verbrenner.
              </p>
              <div className="bg-orange-50 rounded-xl p-6">
                <p className="text-base md:text-lg text-gray-700 leading-relaxed">
                  <strong className="text-orange-700">Wichtig zu wissen:</strong> Der Wertverlust von Elektroautos hängt stark vom Alter, der Technologie-Generation und dem Segment ab. Premium-E-Autos (Porsche Taycan, BMW iX) verlieren bis zu 65% in 5 Jahren, während Tesla-Modelle mit nur 15-20% deutlich wertstabiler sind. Die Entwicklung ist dynamisch und verbessert sich zugunsten der E-Autos.
                </p>
              </div>
            </div>

            {/* Inhaltsverzeichnis */}
            <nav className="bg-gray-50 rounded-xl p-6 mb-8 md:mb-12">
              <h2 className="text-xl md:text-2xl font-bold text-gray-800 mb-4">
                Inhaltsverzeichnis
              </h2>
              <ol className="space-y-2 text-sm md:text-base">
                <li><a href="#aktuell" className="text-blue-600 hover:underline">1. Aktuelle Zahlen 2025: Wertverlust im direkten Vergleich</a></li>
                <li><a href="#entwicklung" className="text-blue-600 hover:underline">2. Entwicklung über die Jahre: 1, 3, 5 Jahre</a></li>
                <li><a href="#ursachen-eauto" className="text-blue-600 hover:underline">3. Warum verlieren E-Autos stärker an Wert?</a></li>
                <li><a href="#modelle" className="text-blue-600 hover:underline">4. Welche E-Autos sind am wertstabilsten?</a></li>
                <li><a href="#verbrenner" className="text-blue-600 hover:underline">5. Wertverlust bei Verbrennern im Detail</a></li>
                <li><a href="#segmente" className="text-blue-600 hover:underline">6. Wertverlust nach Fahrzeug-Segmenten</a></li>
                <li><a href="#minimieren" className="text-blue-600 hover:underline">7. So minimieren Sie den Wertverlust</a></li>
                <li><a href="#prognose" className="text-blue-600 hover:underline">8. Prognose: Wie entwickelt sich der Wertverlust?</a></li>
                <li><a href="#fazit" className="text-blue-600 hover:underline">9. Fazit: Lohnt sich der E-Auto-Kauf trotz Wertverlust?</a></li>
              </ol>
            </nav>

            {/* Section 1: Aktuelle Zahlen */}
            <section id="aktuell" className="mb-8 md:mb-12">
              <h2 className="text-xl md:text-3xl font-bold text-gray-800 mb-4 md:mb-6 flex items-center gap-3">
                <DollarSign className="w-6 h-6 md:w-8 md:h-8 text-blue-600" />
                Aktuelle Zahlen 2025: Wertverlust im direkten Vergleich
              </h2>
              
              <p className="text-sm md:text-base text-gray-700 leading-relaxed mb-6">
                Die Deutsche Automobil Treuhand (DAT) liefert mit ihren regelmäßigen Analysen die zuverlässigsten Daten zum Wertverlust. Die aktuellen Zahlen für Anfang 2025 zeigen ein differenziertes Bild: Während die Gesamtsituation für E-Autos herausfordernder ist, gibt es erhebliche Unterschiede je nach Alter und Modell.
              </p>

              {/* Vergleichs-Tabelle */}
              <div className="overflow-x-auto mb-6">
                <table className="w-full bg-white rounded-xl overflow-hidden shadow-lg">
                  <thead className="bg-gradient-to-r from-blue-600 to-orange-600 text-white">
                    <tr>
                      <th className="p-3 md:p-4 text-left text-sm md:text-base">Alter</th>
                      <th className="p-3 md:p-4 text-right text-sm md:text-base">Elektroauto</th>
                      <th className="p-3 md:p-4 text-right text-sm md:text-base">Benziner</th>
                      <th className="p-3 md:p-4 text-right text-sm md:text-base">Diesel</th>
                    </tr>
                  </thead>
                  <tbody className="text-sm md:text-base">
                    <tr className="border-b border-gray-200 hover:bg-gray-50">
                      <td className="p-3 md:p-4 font-semibold text-gray-800">1 Jahr</td>
                      <td className="p-3 md:p-4 text-right text-green-600 font-bold">75% Restwert</td>
                      <td className="p-3 md:p-4 text-right text-gray-700">73% Restwert</td>
                      <td className="p-3 md:p-4 text-right text-gray-700">72% Restwert</td>
                    </tr>
                    <tr className="border-b border-gray-200 hover:bg-gray-50 bg-blue-50">
                      <td className="p-3 md:p-4 font-semibold text-gray-800">3 Jahre</td>
                      <td className="p-3 md:p-4 text-right text-orange-600 font-bold">50-62% Restwert</td>
                      <td className="p-3 md:p-4 text-right text-gray-700">68-70% Restwert</td>
                      <td className="p-3 md:p-4 text-right text-gray-700">66-68% Restwert</td>
                    </tr>
                    <tr className="border-b border-gray-200 hover:bg-gray-50">
                      <td className="p-3 md:p-4 font-semibold text-gray-800">4 Jahre</td>
                      <td className="p-3 md:p-4 text-right text-red-600 font-bold">50% Restwert</td>
                      <td className="p-3 md:p-4 text-right text-gray-700">55% Restwert</td>
                      <td className="p-3 md:p-4 text-right text-gray-700">54% Restwert</td>
                    </tr>
                    <tr className="border-b border-gray-200 hover:bg-gray-50">
                      <td className="p-3 md:p-4 font-semibold text-gray-800">5 Jahre</td>
                      <td className="p-3 md:p-4 text-right text-red-600 font-bold">35-50% Restwert</td>
                      <td className="p-3 md:p-4 text-right text-gray-700">49-51% Restwert</td>
                      <td className="p-3 md:p-4 text-right text-gray-700">47-49% Restwert</td>
                    </tr>
                  </tbody>
                </table>
                <div className="text-xs text-gray-500 mt-2 italic">Quelle: DAT, Allianz, AutoScout24 (2024/2025)</div>
              </div>

              {/* Key Facts Boxen */}
              <div className="grid md:grid-cols-3 gap-4 mb-6">
                <div className="bg-gradient-to-br from-green-50 to-green-100 rounded-xl p-6 text-center">
                  <div className="text-xs font-semibold text-gray-600 mb-2">1. Jahr (Vorteil E-Auto)</div>
                  <div className="text-3xl font-bold text-green-600 mb-2">+2-3%</div>
                  <div className="text-sm text-gray-700">Junge E-Autos sind wertstabiler als Verbrenner</div>
                </div>

                <div className="bg-gradient-to-br from-orange-50 to-orange-100 rounded-xl p-6 text-center border-2 border-orange-500">
                  <div className="text-xs font-semibold text-gray-600 mb-2">3 Jahre (Kritisch)</div>
                  <div className="text-3xl font-bold text-orange-600 mb-2">-8-12%</div>
                  <div className="text-sm text-gray-700">E-Autos verlieren deutlich mehr als Verbrenner</div>
                </div>

                <div className="bg-gradient-to-br from-red-50 to-red-100 rounded-xl p-6 text-center">
                  <div className="text-xs font-semibold text-gray-600 mb-2">5 Jahre (Maximal)</div>
                  <div className="text-3xl font-bold text-red-600 mb-2">50-65%</div>
                  <div className="text-sm text-gray-700">Wertverlust bei Premium-E-Autos</div>
                </div>
              </div>

              <div className="bg-blue-50 rounded-xl p-6">
                <h3 className="font-bold text-gray-800 mb-3 flex items-center gap-2">
                  <Info className="w-5 h-5 text-blue-600" />
                  Wichtige Erkenntnisse:
                </h3>
                <div className="space-y-3 text-sm md:text-base text-gray-700">
                  <div className="flex items-start gap-3">
                    <div>
                      <strong>Junge E-Autos (unter 12 Monate):</strong> Sind tatsächlich wertstabiler als Verbrenner mit durchschnittlich 75% Restwert vs. 73% bei Benzinern. Dies liegt an hoher Nachfrage und Garantien.
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div>
                      <strong>3-5 Jahre alte E-Autos:</strong> Verlieren überproportional an Wert. Hauptgründe sind Technologiesprünge (Reichweite, Ladegeschwindigkeit) und Unsicherheit über Batteriezustand.
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div>
                      <strong>Premium-Segment besonders betroffen:</strong> Porsche Taycan (-65%), BMW iX (-60%), Mercedes EQS (-55%) haben die höchsten Wertverluste, da Käufer neueste Technologie erwarten.
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div>
                      <strong>Tesla als Ausnahme:</strong> Model 3 und Model Y verlieren nur 15-25% in 3 Jahren dank transparenter Preispolitik und hoher Elektrokompetenz-Wahrnehmung.
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* Section 2: Entwicklung über Jahre */}
            <section id="entwicklung" className="mb-8 md:mb-12">
              <h2 className="text-xl md:text-3xl font-bold text-gray-800 mb-4 md:mb-6 flex items-center gap-3">
                <Calendar className="w-6 h-6 md:w-8 md:h-8 text-purple-600" />
                Entwicklung über die Jahre: 1, 3, 5 Jahre
              </h2>

              <p className="text-sm md:text-base text-gray-700 leading-relaxed mb-6">
                Der Wertverlust verläuft nicht linear, sondern folgt einer Kurve, die je nach Antriebsart unterschiedlich steil ist. Während Verbrenner relativ kontinuierlich an Wert verlieren, zeigen E-Autos eine "zweistufige" Entwicklung: Nach einem stabilen ersten Jahr folgt ab Jahr 2-3 ein beschleunigter Wertverlust.
              </p>

              {/* Jahr-für-Jahr Breakdown */}
              <div className="space-y-4 mb-6">
                {/* Jahr 1 */}
                <div className="bg-green-50 border-l-4 border-green-500 p-6 rounded-r-xl">
                  <div className="flex items-center gap-3 mb-3">
                    <h3 className="text-lg font-bold text-gray-800">Jahr 1: E-Autos im Vorteil</h3>
                  </div>
                  <div className="grid md:grid-cols-2 gap-4 text-sm text-gray-700">
                    <div>
                      <div className="font-semibold text-green-700 mb-2">Elektroauto:</div>
                      <ul className="space-y-1">
                        <li>• Restwert: <strong>75%</strong> (Wertverlust 25%)</li>
                        <li>• Grund: Hohe Nachfrage, volle Garantie</li>
                        <li>• Beispiel: VW ID.3 (45.000€) → 33.750€</li>
                      </ul>
                    </div>
                    <div>
                      <div className="font-semibold text-gray-700 mb-2">Verbrenner:</div>
                      <ul className="space-y-1">
                        <li>• Restwert: <strong>73%</strong> (Wertverlust 27%)</li>
                        <li>• Grund: Normaler Wertverlust</li>
                        <li>• Beispiel: VW Golf (35.000€) → 25.550€</li>
                      </ul>
                    </div>
                  </div>
                  <div className="mt-3 text-sm font-semibold text-green-700">
                    ✅ Ergebnis: E-Auto behält 2-3% mehr Wert
                  </div>
                </div>

                {/* Jahr 3 */}
                <div className="bg-orange-50 border-l-4 border-orange-500 p-6 rounded-r-xl">
                  <div className="flex items-center gap-3 mb-3">
                    <h3 className="text-lg font-bold text-gray-800">Jahr 3: Kipppunkt für E-Autos</h3>
                  </div>
                  <div className="grid md:grid-cols-2 gap-4 text-sm text-gray-700">
                    <div>
                      <div className="font-semibold text-orange-700 mb-2">Elektroauto:</div>
                      <ul className="space-y-1">
                        <li>• Restwert: <strong>50-62%</strong> (Wertverlust 38-50%)</li>
                        <li>• Grund: Neue Generation mit mehr Reichweite</li>
                        <li>• Beispiel: VW ID.3 (45.000€) → 22.500-27.900€</li>
                      </ul>
                    </div>
                    <div>
                      <div className="font-semibold text-gray-700 mb-2">Verbrenner:</div>
                      <ul className="space-y-1">
                        <li>• Restwert: <strong>68-70%</strong> (Wertverlust 30-32%)</li>
                        <li>• Grund: Stabile Nachfrage</li>
                        <li>• Beispiel: VW Golf (35.000€) → 23.800-24.500€</li>
                      </ul>
                    </div>
                  </div>
                  <div className="mt-3 text-sm font-semibold text-orange-700">
                    ⚠️ Ergebnis: E-Auto verliert 8-12% mehr als Verbrenner
                  </div>
                </div>

                {/* Jahr 5 */}
                <div className="bg-red-50 border-l-4 border-red-500 p-6 rounded-r-xl">
                  <div className="flex items-center gap-3 mb-3">
                    <h3 className="text-lg font-bold text-gray-800">Jahr 5: Maximaler Unterschied</h3>
                  </div>
                  <div className="grid md:grid-cols-2 gap-4 text-sm text-gray-700">
                    <div>
                      <div className="font-semibold text-red-700 mb-2">Elektroauto:</div>
                      <ul className="space-y-1">
                        <li>• Restwert: <strong>35-50%</strong> (Wertverlust 50-65%)</li>
                        <li>• Grund: Batterie-Alter, veraltete Technologie</li>
                        <li>• Beispiel: VW ID.3 (45.000€) → 15.750-22.500€</li>
                      </ul>
                    </div>
                    <div>
                      <div className="font-semibold text-gray-700 mb-2">Verbrenner:</div>
                      <ul className="space-y-1">
                        <li>• Restwert: <strong>49-51%</strong> (Wertverlust 49-51%)</li>
                        <li>• Grund: Bewährte Technologie</li>
                        <li>• Beispiel: VW Golf (35.000€) → 17.150-17.850€</li>
                      </ul>
                    </div>
                  </div>
                  <div className="mt-3 text-sm font-semibold text-red-700">
                    ❌ Ergebnis: E-Auto kann bis zu 15% weniger wert sein
                  </div>
                </div>
              </div>

              <div className="bg-purple-50 rounded-xl p-6">
                <h4 className="font-semibold text-gray-800 mb-3">Warum ist Jahr 3 der Kipppunkt?</h4>
                <p className="text-sm md:text-base text-gray-700 leading-relaxed">
                  Im dritten Jahr treffen mehrere Faktoren zusammen: Die Herstellergarantie läuft meist aus (8 Jahre/160.000 km für Batterie, aber psychologischer Effekt), neue Modelle mit deutlich besserer Reichweite kommen auf den Markt (+30-50% sind keine Seltenheit), und der Gebrauchtwagenmarkt ist noch klein, was die Preisfindung erschwert. Zusätzlich sinken Neuwagenpreise, wodurch der relative Wert von Gebrauchtwagen unter Druck gerät.
                </p>
              </div>
            </section>

            {/* Section 3: Ursachen E-Auto Wertverlust */}
            <section id="ursachen-eauto" className="mb-8 md:mb-12">
              <h2 className="text-xl md:text-3xl font-bold text-gray-800 mb-4 md:mb-6">
                Warum verlieren E-Autos stärker an Wert?
              </h2>

              <p className="text-sm md:text-base text-gray-700 leading-relaxed mb-6">
                Der höhere Wertverlust von Elektroautos hat mehrere, teilweise zusammenhängende Ursachen. Es ist wichtig zu verstehen, dass nicht alle E-Autos gleich stark betroffen sind und sich die Situation kontinuierlich verbessert.
              </p>

              {/* Ursachen-Cards */}
              <div className="space-y-4 mb-6">
                <div className="bg-white border-2 border-orange-200 rounded-xl p-6">
                  <h3 className="font-bold text-lg text-gray-800 mb-3">1. Rasanter Technologie-Fortschritt</h3>
                  <p className="text-sm md:text-base text-gray-700 mb-3">
                    Die Elektroauto-Technologie entwickelt sich extrem schnell. Ein 3 Jahre altes E-Auto hat oft nur 60% der Reichweite eines Neumodells und lädt deutlich langsamer. Beispiel: Ein VW ID.3 von 2021 mit 340 km Reichweite wirkt neben einem 2024er Modell mit 550 km veraltet.
                  </p>
                  <div className="bg-orange-50 rounded-lg p-4 text-sm text-gray-700">
                    <strong>Konkret:</strong> 2020er Nissan Leaf (40 kWh, 270 km) vs. 2024er Nissan Ariya (87 kWh, 500 km) – trotz nur 4 Jahren Unterschied fast doppelte Reichweite.
                  </div>
                </div>

                <div className="bg-white border-2 border-orange-200 rounded-xl p-6">
                  <h3 className="font-bold text-lg text-gray-800 mb-3">2. Batterie-Unsicherheit</h3>
                  <p className="text-sm md:text-base text-gray-700 mb-3">
                    Obwohl moderne Batterien sehr langlebig sind (oft 300.000+ km), besteht bei Käufern Unsicherheit über Zustand und potenzielle Austauschkosten (10.000-20.000€). Dies drückt den Preis, auch wenn die Sorge meist unbegründet ist.
                  </p>
                  <div className="bg-green-50 rounded-lg p-4 text-sm text-gray-700">
                    <strong>Gut zu wissen:</strong> Studien zeigen, dass Batterien auch nach 300.000 km noch 80-85% Kapazität behalten. Das Problem ist eher die Wahrnehmung als die Realität.
                  </div>
                </div>

                <div className="bg-white border-2 border-orange-200 rounded-xl p-6">
                  <h3 className="font-bold text-lg text-gray-800 mb-3">3. Überangebot an Leasing-Rückläufern</h3>
                  <p className="text-sm md:text-base text-gray-700 mb-3">
                    Viele E-Autos wurden geleast (oft 70-80% Quote). Nach 3 Jahren kommen diese massenhaft auf den Markt und treffen auf begrenzte Nachfrage. Große Autovermieter wie Sixt und Hertz verkauften 2024 über 40.000 E-Autos, was zusätzlichen Preisdruck erzeugte.
                  </p>
                </div>

                <div className="bg-white border-2 border-orange-200 rounded-xl p-6">
                  <h3 className="font-bold text-lg text-gray-800 mb-3">4. Förderprämien-Effekt</h3>
                  <p className="text-sm md:text-base text-gray-700 mb-3">
                    Bis Ende 2023 gab es bis zu 9.000€ Umweltprämie. Das machte Neuwagen attraktiver als Gebrauchte. Ein subventionierter Neuwagen für 35.000€ konkurrierte mit 3 Jahre alten Gebrauchten für 28.000€ – keine attraktive Ersparnis.
                  </p>
                  <div className="bg-blue-50 rounded-lg p-4 text-sm text-gray-700">
                    <strong>Nach Förderende:</strong> Die Situation normalisiert sich langsam. Gebrauchte werden attraktiver, da Neuwagenpreise wieder höher liegen.
                  </div>
                </div>

                <div className="bg-white border-2 border-orange-200 rounded-xl p-6">
                  <h3 className="font-bold text-lg text-gray-800 mb-3">5. Kleiner Gebrauchtwagenmarkt</h3>
                  <p className="text-sm md:text-base text-gray-700 mb-3">
                    Mit nur 3% E-Autos im Gesamtbestand ist der Gebrauchtwagenmarkt noch klein. Weniger Nachfrage + unsichere Preisfindung = höherer Wertverlust. In 2024 wurden nur 44.000 gebrauchte E-Autos umgeschrieben vs. über 6 Mio. Verbrenner.
                  </p>
                </div>
              </div>

              <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4">
                <div className="flex items-start gap-3">
                  <AlertTriangle className="w-5 h-5 text-yellow-600 flex-shrink-0 mt-0.5" />
                  <div>
                    <div className="font-semibold text-gray-800 text-sm md:text-base mb-1">Wichtig zu verstehen:</div>
                    <p className="text-xs md:text-sm text-gray-700">
                      Diese Faktoren sind temporär und typisch für neue Technologien. Der Verbrenner hatte in seinen Anfangsjahren (1900-1920) ähnliche Probleme. Bereits jetzt zeigt sich: Je reifer die E-Auto-Technologie wird, desto stabiler werden die Restwerte.
                    </p>
                  </div>
                </div>
              </div>
            </section>

            {/* Section 4: Wertstabile Modelle */}
            <section id="modelle" className="mb-8 md:mb-12">
              <h2 className="text-xl md:text-3xl font-bold text-gray-800 mb-4 md:mb-6">
                Welche E-Autos sind am wertstabilsten?
              </h2>

              <p className="text-sm md:text-base text-gray-700 leading-relaxed mb-6">
                Nicht alle E-Autos verlieren gleich stark an Wert. Bestimmte Modelle, Marken und Segmente zeigen deutlich bessere Restwerte. Hier ist die aktuelle Rangliste basierend auf DAT, AutoScout24 und Händlerdaten:
              </p>

              {/* Top Wertstabile E-Autos */}
              <div className="space-y-3 mb-6">
                <div className="bg-gradient-to-r from-yellow-50 to-yellow-100 border-2 border-yellow-500 rounded-xl p-4 flex items-center gap-4">
                  <div className="bg-yellow-500 text-white rounded-full w-12 h-12 flex items-center justify-center font-bold text-xl flex-shrink-0">🥇</div>
                  <div className="flex-1">
                    <div className="font-bold text-gray-800">Tesla Model 3 / Model Y</div>
                    <div className="text-sm text-gray-600">Wertverlust nach 3 Jahren: <strong className="text-green-600">15-20%</strong></div>
                    <div className="text-xs text-gray-500 mt-1">Grund: Transparente Preise, hohe Elektrokompetenz, beste Ladetechnik</div>
                  </div>
                </div>

                <div className="bg-gradient-to-r from-gray-50 to-gray-100 border-2 border-gray-400 rounded-xl p-4 flex items-center gap-4">
                  <div className="bg-gray-400 text-white rounded-full w-12 h-12 flex items-center justify-center font-bold text-xl flex-shrink-0">🥈</div>
                  <div className="flex-1">
                    <div className="font-bold text-gray-800">Hyundai Ioniq 5 / Kia EV6</div>
                    <div className="text-sm text-gray-600">Wertverlust nach 3 Jahren: <strong className="text-green-600">25-30%</strong></div>
                    <div className="text-xs text-gray-500 mt-1">Grund: 800V-Technik, gutes Preis-Leistungs-Verhältnis, lange Garantie</div>
                  </div>
                </div>

                <div className="bg-gradient-to-r from-orange-50 to-orange-100 border-2 border-orange-400 rounded-xl p-4 flex items-center gap-4">
                  <div className="bg-orange-400 text-white rounded-full w-12 h-12 flex items-center justify-center font-bold text-xl flex-shrink-0">🥉</div>
                  <div className="flex-1">
                    <div className="font-bold text-gray-800">Škoda Enyaq iV / VW ID.4</div>
                    <div className="text-sm text-gray-600">Wertverlust nach 3 Jahren: <strong className="text-orange-600">35-40%</strong></div>
                    <div className="text-xs text-gray-500 mt-1">Grund: VW-Konzern Zuverlässigkeit, MEB-Plattform, praktisches SUV-Format</div>
                  </div>
                </div>

                <div className="bg-white border border-gray-200 rounded-xl p-4">
                  <div className="grid md:grid-cols-2 gap-3 text-sm">
                    <div>
                      <div className="font-semibold text-gray-700 mb-2">4. Renault Zoe (35-40%)</div>
                      <div className="text-xs text-gray-600">Beliebtester Kleinwagen, große Community</div>
                    </div>
                    <div>
                      <div className="font-semibold text-gray-700 mb-2">5. VW ID.3 (40-45%)</div>
                      <div className="text-xs text-gray-600">Hohe Stückzahlen, Golf-Ersatz</div>
                    </div>
                    <div>
                      <div className="font-semibold text-gray-700 mb-2">6. Cupra Born (40-45%)</div>
                      <div className="text-xs text-gray-600">Sportliches Design, MEB-Basis</div>
                    </div>
                    <div>
                      <div className="font-semibold text-gray-700 mb-2">7. Polestar 2 (45-50%)</div>
                      <div className="text-xs text-gray-600">Premium-Anmutung, Volvo-Qualität</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Schlechteste Restwerte */}
              <div className="bg-red-50 rounded-xl p-6 mb-6">
                <h3 className="font-bold text-lg text-gray-800 mb-3 flex items-center gap-2">
                  <TrendingDown className="w-5 h-5 text-red-600" />
                  E-Autos mit höchstem Wertverlust (nach 3-5 Jahren):
                </h3>
                <div className="space-y-2 text-sm text-gray-700">
                  <div className="flex justify-between items-center">
                    <span>• BMW 7er (elektrisch)</span>
                    <strong className="text-red-600">-65%</strong>
                  </div>
                  <div className="flex justify-between items-center">
                    <span>• Porsche Taycan</span>
                    <strong className="text-red-600">-50-65%</strong>
                  </div>
                  <div className="flex justify-between items-center">
                    <span>• Mercedes EQS / EQE</span>
                    <strong className="text-red-600">-50-55%</strong>
                  </div>
                  <div className="flex justify-between items-center">
                    <span>• Audi e-tron (alte Generation)</span>
                    <strong className="text-red-600">-55-60%</strong>
                  </div>
                  <div className="flex justify-between items-center">
                    <span>• Jaguar I-Pace</span>
                    <strong className="text-red-600">-60%</strong>
                  </div>
                </div>
                <div className="mt-4 text-xs text-gray-600 italic">
                  Grund: Premium-Käufer erwarten neueste Technologie. Ältere Luxus-E-Autos wirken schnell veraltet.
                </div>
              </div>

              <div className="bg-blue-50 rounded-xl p-6">
                <h4 className="font-semibold text-gray-800 mb-3">Was macht ein E-Auto wertstabil?</h4>
                <ul className="space-y-2 text-sm md:text-base text-gray-700">
                  <li>✓ <strong>Transparente Preispolitik</strong> (Tesla Vorbild: keine Rabatte, klare Preise)</li>
                  <li>✓ <strong>Hohe Reichweite</strong> (min. 400 km real, besser 500+)</li>
                  <li>✓ <strong>Schnelles Laden</strong> (800V-Technik, 10-80% in unter 20 Min)</li>
                  <li>✓ <strong>Beliebtes Segment</strong> (Kompakt-SUV, Mittelklasse – keine Nische)</li>
                  <li>✓ <strong>Starke Marke</strong> mit Elektro-Kompetenz (Tesla, Hyundai/Kia)</li>
                  <li>✓ <strong>Lange Garantie</strong> (8 Jahre Batterie als Standard)</li>
                  <li>✓ <strong>Praktikabilität</strong> (Platz, Anhängerkupplung, Allrad optional)</li>
                </ul>
              </div>
            </section>

            {/* Section 5: Verbrenner Wertverlust */}
            <section id="verbrenner" className="mb-8 md:mb-12">
              <h2 className="text-xl md:text-3xl font-bold text-gray-800 mb-4 md:mb-6">
                Wertverlust bei Verbrennern im Detail
              </h2>

              <p className="text-sm md:text-base text-gray-700 leading-relaxed mb-6">
                Verbrenner zeigen einen stabileren, vorhersehbareren Wertverlust. Die Technologie ist ausgereift, der Gebrauchtwagenmarkt etabliert und Käufer kennen die Risiken. Dennoch gibt es auch hier erhebliche Unterschiede zwischen Modellen und Marken.
              </p>

              {/* Verbrenner Wertverlust Tabelle */}
              <div className="grid md:grid-cols-2 gap-4 mb-6">
                <div className="bg-white border-2 border-blue-200 rounded-xl p-6">
                  <h3 className="font-bold text-lg text-gray-800 mb-4">Benziner Wertverlust</h3>
                  <div className="space-y-3 text-sm text-gray-700">
                    <div className="flex justify-between items-center pb-2 border-b">
                      <span>Nach 1 Jahr:</span>
                      <strong>73% Restwert</strong>
                    </div>
                    <div className="flex justify-between items-center pb-2 border-b">
                      <span>Nach 3 Jahren:</span>
                      <strong>68-70% Restwert</strong>
                    </div>
                    <div className="flex justify-between items-center pb-2 border-b">
                      <span>Nach 5 Jahren:</span>
                      <strong>49-51% Restwert</strong>
                    </div>
                    <div className="flex justify-between items-center">
                      <span>Nach 8 Jahren:</span>
                      <strong>30-35% Restwert</strong>
                    </div>
                  </div>
                  <div className="mt-4 text-xs text-gray-600">
                    <strong>Wertstabilste Benziner:</strong> VW Golf, Audi A4, BMW 3er, Mercedes C-Klasse
                  </div>
                </div>

                <div className="bg-white border-2 border-gray-300 rounded-xl p-6">
                  <h3 className="font-bold text-lg text-gray-800 mb-4">Diesel Wertverlust</h3>
                  <div className="space-y-3 text-sm text-gray-700">
                    <div className="flex justify-between items-center pb-2 border-b">
                      <span>Nach 1 Jahr:</span>
                      <strong>72% Restwert</strong>
                    </div>
                    <div className="flex justify-between items-center pb-2 border-b">
                      <span>Nach 3 Jahren:</span>
                      <strong>66-68% Restwert</strong>
                    </div>
                    <div className="flex justify-between items-center pb-2 border-b">
                      <span>Nach 5 Jahren:</span>
                      <strong>47-49% Restwert</strong>
                    </div>
                    <div className="flex justify-between items-center">
                      <span>Nach 8 Jahren:</span>
                      <strong>28-32% Restwert</strong>
                    </div>
                  </div>
                  <div className="mt-4 text-xs text-gray-600">
                    <strong>Wertstabilste Diesel:</strong> BMW 5er, Audi Q5, VW Passat, Mercedes E-Klasse
                  </div>
                </div>
              </div>

              {/* Plug-in-Hybrid Warnung */}
              <div className="bg-red-50 border-l-4 border-red-500 p-6 mb-6">
                <div className="flex items-start gap-3">
                  <AlertTriangle className="w-6 h-6 text-red-600 flex-shrink-0 mt-0.5" />
                  <div>
                    <h3 className="font-bold text-lg text-gray-800 mb-2">Plug-in-Hybride: Der größte Wertverlust</h3>
                    <p className="text-sm md:text-base text-gray-700 mb-3">
                      Plug-in-Hybride (PHEV) zeigen den höchsten Wertverlust aller Antriebsarten: Nach 3 Jahren oft nur noch 50% Restwert, nach 5 Jahren teilweise unter 40%. Dies liegt an der Komplexität (teuerste Reparaturen), Unsicherheit über beide Antriebssysteme und wegfallender Förderung.
                    </p>
                    <div className="text-xs text-gray-600 italic">
                      Experte Ferdinand Dudenhöffer prognostizierte 2022 korrekt: "PHEVs droht dasselbe Schicksal wie dem Diesel."
                    </div>
                  </div>
                </div>
              </div>

              {/* Verbrenner Vorteile */}
              <div className="bg-gray-50 rounded-xl p-6">
                <h4 className="font-semibold text-gray-800 mb-3">Warum Verbrenner stabiler im Wert sind:</h4>
                <div className="grid md:grid-cols-2 gap-4 text-sm text-gray-700">
                  <div className="space-y-2">
                    <div className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-green-600 flex-shrink-0 mt-0.5" />
                      <span><strong>Ausgereifte Technologie:</strong> Kaum noch Entwicklungssprünge</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-green-600 flex-shrink-0 mt-0.5" />
                      <span><strong>Etablierter Markt:</strong> Klare Preisfindung durch Jahrzehnte Erfahrung</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-green-600 flex-shrink-0 mt-0.5" />
                      <span><strong>Hohe Nachfrage:</strong> 97% des Bestands sind Verbrenner</span>
                    </div>
                  </div>
                  <div className="space-y-2">
                    <div className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-green-600 flex-shrink-0 mt-0.5" />
                      <span><strong>Keine Batterie-Unsicherheit:</strong> Risiken sind bekannt</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-green-600 flex-shrink-0 mt-0.5" />
                      <span><strong>Lange Erfahrung:</strong> Käufer kennen Haltbarkeit</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-green-600 flex-shrink-0 mt-0.5" />
                      <span><strong>Infrastruktur:</strong> Tankstellen überall verfügbar</span>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* Section 6: Segmente */}
            <section id="segmente" className="mb-8 md:mb-12">
              <h2 className="text-xl md:text-3xl font-bold text-gray-800 mb-4 md:mb-6">
                Wertverlust nach Fahrzeug-Segmenten
              </h2>

              <p className="text-sm md:text-base text-gray-700 leading-relaxed mb-6">
                Der Wertverlust variiert stark je nach Fahrzeug-Segment. Während Kompakt-SUVs und Mittelklasse relativ wertstabil sind, verlieren Luxus-Limousinen und Kleinstwagen überproportional an Wert.
              </p>

              {/* Segment-Vergleich */}
              <div className="space-y-4 mb-6">
                <div className="bg-green-50 border-2 border-green-500 rounded-xl p-4">
                  <div className="flex justify-between items-center mb-2">
                    <h3 className="font-bold text-gray-800">Kompakt-SUV (Wertstabilstes Segment)</h3>
                    <span className="text-green-600 font-bold">35-40%</span>
                  </div>
                  <div className="text-sm text-gray-700">
                    <strong>E-Auto Beispiele:</strong> VW ID.4, Škoda Enyaq, Hyundai Ioniq 5, Tesla Model Y<br/>
                    <strong>Verbrenner:</strong> VW Tiguan, Audi Q3, BMW X1, Mercedes GLA<br/>
                    <strong>Warum stabil:</strong> Hohe Nachfrage, praktisch, ideal für Familien
                  </div>
                </div>

                <div className="bg-blue-50 border-2 border-blue-500 rounded-xl p-4">
                  <div className="flex justify-between items-center mb-2">
                    <h3 className="font-bold text-gray-800">Mittelklasse</h3>
                    <span className="text-blue-600 font-bold">40-45%</span>
                  </div>
                  <div className="text-sm text-gray-700">
                    <strong>E-Auto Beispiele:</strong> Tesla Model 3, VW ID.3, Polestar 2, Cupra Born<br/>
                    <strong>Verbrenner:</strong> VW Golf, BMW 3er, Audi A4, Mercedes C-Klasse<br/>
                    <strong>Warum stabil:</strong> Großes Käufersegment, Firmenwagen-tauglich
                  </div>
                </div>

                <div className="bg-orange-50 border-2 border-orange-500 rounded-xl p-4">
                  <div className="flex justify-between items-center mb-2">
                    <h3 className="font-bold text-gray-800">Kleinwagen</h3>
                    <span className="text-orange-600 font-bold">45-50%</span>
                  </div>
                  <div className="text-sm text-gray-700">
                    <strong>E-Auto Beispiele:</strong> Renault Zoe, VW e-Up, Fiat 500e, Mini Cooper SE<br/>
                    <strong>Verbrenner:</strong> VW Polo, Opel Corsa, Renault Clio, Ford Fiesta<br/>
                    <strong>Herausforderung:</strong> Preissensibles Segment, hohes Angebot
                  </div>
                </div>

                <div className="bg-red-50 border-2 border-red-500 rounded-xl p-4">
                  <div className="flex justify-between items-center mb-2">
                    <h3 className="font-bold text-gray-800">Oberklasse / Luxus</h3>
                    <span className="text-red-600 font-bold">50-65%</span>
                  </div>
                  <div className="text-sm text-gray-700">
                    <strong>E-Auto Beispiele:</strong> Porsche Taycan, Mercedes EQS, BMW iX, Audi e-tron GT<br/>
                    <strong>Verbrenner:</strong> Porsche Panamera, Mercedes S-Klasse, BMW 7er, Audi A8<br/>
                    <strong>Problem:</strong> Käufer wollen neueste Technik, hohe Austauschrate
                  </div>
                </div>
              </div>

              <div className="bg-purple-50 rounded-xl p-6">
                <h4 className="font-semibold text-gray-800 mb-3">Kaufempfehlung nach Segment:</h4>
                <div className="space-y-2 text-sm md:text-base text-gray-700">
                  <div><strong>Bester Wertverlust (E-Auto):</strong> Kompakt-SUV von etablierter Marke (VW, Škoda, Hyundai)</div>
                  <div><strong>Günstig gebraucht kaufen:</strong> Premium-E-Autos nach 3-4 Jahren (50-60% günstiger!)</div>
                  <div><strong>Vermeiden:</strong> Plug-in-Hybride und Luxus-E-Autos als Neuwagenka uf</div>
                  <div><strong>Langfrist-Investment:</strong> Tesla (wertstabilstes E-Auto) oder kompakte SUVs</div>
                </div>
              </div>
            </section>

            {/* Section 7: Wertverlust minimieren */}
            <section id="minimieren" className="mb-8 md:mb-12">
              <h2 className="text-xl md:text-3xl font-bold text-gray-800 mb-4 md:mb-6">
                So minimieren Sie den Wertverlust
              </h2>

              <p className="text-sm md:text-base text-gray-700 leading-relaxed mb-6">
                Auch wenn Sie den generellen Wertverlust nicht verhindern können, gibt es konkrete Maßnahmen, die den Restwert Ihres E-Autos deutlich verbessern können.
              </p>

              {/* Tipps als Cards */}
              <div className="grid md:grid-cols-2 gap-4 mb-6">
                <div className="bg-blue-50 border-l-4 border-blue-500 p-4">
                  <h3 className="font-bold text-gray-800 mb-2">1. Wertstabiles Modell wählen</h3>
                  <p className="text-sm text-gray-700">
                    Kaufen Sie Tesla, Hyundai/Kia oder VW-Konzern statt Nischen-Marken. Kompakt-SUVs halten Wert besser als Limousinen.
                  </p>
                </div>

                <div className="bg-blue-50 border-l-4 border-blue-500 p-4">
                  <h3 className="font-bold text-gray-800 mb-2">2. Batterie schonend behandeln</h3>
                  <p className="text-sm text-gray-700">
                    Laden Sie nur bis 80%, vermeiden Sie Tiefentladung unter 20%. Nutzen Sie seltener Schnelllader. Batterie-Zustand ist Wertfaktor #1.
                  </p>
                </div>

                <div className="bg-blue-50 border-l-4 border-blue-500 p-4">
                  <h3 className="font-bold text-gray-800 mb-2">3. Kilometerstand niedrig halten</h3>
                  <p className="text-sm text-gray-700">
                    Auch bei E-Autos wichtig: Unter 15.000 km/Jahr ist ideal. Jeder km zählt beim Restwert, auch wenn Verschleiß geringer ist.
                  </p>
                </div>

                <div className="bg-blue-50 border-l-4 border-blue-500 p-4">
                  <h3 className="font-bold text-gray-800 mb-2">4. Lückenlose Wartung</h3>
                  <p className="text-sm text-gray-700">
                    Scheckheft gepflegt halten, alle Inspektionen durchführen. Software-Updates nicht vergessen – zeigt Pflege.
                  </p>
                </div>

                <div className="bg-blue-50 border-l-4 border-blue-500 p-4">
                  <h3 className="font-bold text-gray-800 mb-2">5. Beliebte Ausstattung wählen</h3>
                  <p className="text-sm text-gray-700">
                    CCS-Schnellladen, große Batterie (75+ kWh), Wärmepumpe, ACC, Matrix-LED sind werterhaltende Extras.
                  </p>
                </div>

                <div className="bg-blue-50 border-l-4 border-blue-500 p-4">
                  <h3 className="font-bold text-gray-800 mb-2">6. Optimaler Verkaufszeitpunkt</h3>
                  <p className="text-sm text-gray-700">
                    Verkaufen Sie nach 1-2 Jahren (minimaler Verlust) oder nach 5+ Jahren (Verlust bereits eingetreten). Jahr 3-4 ist am schlechtesten.
                  </p>
                </div>

                <div className="bg-blue-50 border-l-4 border-blue-500 p-4">
                  <h3 className="font-bold text-gray-800 mb-2">7. Batterie-Check dokumentieren</h3>
                  <p className="text-sm text-gray-700">
                    Lassen Sie State of Health (SoH) prüfen und dokumentieren. &gt;90% SoH nach 3 Jahren ist ein starkes Verkaufsargument.
                  </p>
                </div>

                <div className="bg-blue-50 border-l-4 border-blue-500 p-4">
                  <h3 className="font-bold text-gray-800 mb-2">8. Leasing statt Kauf erwägen</h3>
                  <p className="text-sm text-gray-700">
                    Bei hohem Wertverlust trägt Leasinggeber Restwertrisiko. Vor allem für Premium-E-Autos sinnvoll.
                  </p>
                </div>
              </div>

              <div className="bg-green-50 rounded-xl p-6">
                <h4 className="font-semibold text-gray-800 mb-3 flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-green-600" />
                  Praxis-Beispiel:
                </h4>
                <p className="text-sm md:text-base text-gray-700">
                  Ein <strong>VW ID.4 (2024, 77 kWh)</strong> gekauft für 45.000€ mit:<br/>
                  ✓ Regelmäßiger Wartung<br/>
                  ✓ 12.000 km/Jahr<br/>
                  ✓ Batterie-SoH 95%<br/>
                  ✓ Vollausstattung (ACC, Matrix-LED, Wärmepumpe)<br/>
                  <br/>
                  <strong>Restwert nach 3 Jahren: ~27.000€ (60%)</strong> statt durchschnittlich 22.500€ (50%) = <span className="text-green-600 font-bold">+4.500€ mehr!</span>
                </p>
              </div>
            </section>

            {/* Section 8: Prognose */}
            <section id="prognose" className="mb-8 md:mb-12">
              <h2 className="text-xl md:text-3xl font-bold text-gray-800 mb-4 md:mb-6">
                Prognose: Wie entwickelt sich der Wertverlust?
              </h2>

              <p className="text-sm md:text-base text-gray-700 leading-relaxed mb-6">
                Die gute Nachricht: Alle Experten sind sich einig, dass sich die Restwert-Situation für E-Autos deutlich verbessern wird. Die Frage ist nur: Wann und wie stark? Hier sind die wichtigsten Trends und Prognosen für die nächsten Jahre.
              </p>

              {/* Trend-Prognosen */}
              <div className="space-y-4 mb-6">
                <div className="bg-green-50 border-2 border-green-500 rounded-xl p-6">
                  <h3 className="font-bold text-lg text-gray-800 mb-3">1. Technologie wird reifer (2025-2027)</h3>
                  <p className="text-sm md:text-base text-gray-700 mb-3">
                    Reichweiten pendeln sich bei 500-600 km ein, Ladezeiten standardisieren sich bei 15-20 Min (10-80%). Weniger "Generationssprünge" bedeuten stabilere Restwerte.
                  </p>
                  <div className="bg-green-100 rounded-lg p-3 text-sm text-gray-700">
                    <strong>Prognose:</strong> Ab 2027 nähern sich E-Auto Restwerte denen von Verbrennern an: 65-70% nach 3 Jahren statt aktuell 50-62%.
                  </div>
                </div>

                <div className="bg-blue-50 border-2 border-blue-500 rounded-xl p-6">
                  <h3 className="font-bold text-lg text-gray-800 mb-3">2. Gebrauchtwagenmarkt wächst (2025-2028)</h3>
                  <p className="text-sm md:text-base text-gray-700 mb-3">
                    Mit 3+ Millionen E-Autos im Bestand bis 2027 normalisiert sich der Markt. Mehr Angebot + mehr Nachfrage = stabile Preisfindung.
                  </p>
                  <div className="bg-blue-100 rounded-lg p-3 text-sm text-gray-700">
                    <strong>Prognose:</strong> 2028 werden ~150.000 gebrauchte E-Autos pro Jahr umgeschrieben (aktuell: 44.000). Markt wird "erwachsen".
                  </div>
                </div>

                <div className="bg-purple-50 border-2 border-purple-500 rounded-xl p-6">
                  <h3 className="font-bold text-lg text-gray-800 mb-3">3. Batterie-Mythos verschwindet (2025-2030)</h3>
                  <p className="text-sm md:text-base text-gray-700 mb-3">
                    Langzeitstudien beweisen: Batterien halten 300.000+ km und 15+ Jahre. Mit mehr Erfahrung schwindet die Unsicherheit, die aktuell Preise drückt.
                  </p>
                  <div className="bg-purple-100 rounded-lg p-3 text-sm text-gray-700">
                    <strong>Prognose:</strong> Batterie-Zustand wird zum klaren Bewertungskriterium wie Motorlaufleistung bei Verbrennern – aber ohne Angst-Premium.
                  </div>
                </div>

                <div className="bg-orange-50 border-2 border-orange-500 rounded-xl p-6">
                  <h3 className="font-bold text-lg text-gray-800 mb-3">4. Verbrenner verlieren an Wert (2026-2035)</h3>
                  <p className="text-sm md:text-base text-gray-700 mb-3">
                    Mit EU-Verbrenner-Verbot ab 2035 und steigenden CO₂-Steuern werden Diesel/Benziner weniger attraktiv. Der relative Vorteil schwindet.
                  </p>
                  <div className="bg-orange-100 rounded-lg p-3 text-sm text-gray-700">
                    <strong>Prognose:</strong> Ab 2030 könnten E-Autos wertstabiler als Verbrenner sein. Kipppunkt: Wenn >50% Neuzulassungen elektrisch sind.
                  </div>
                </div>
              </div>

              {/* Prognose-Szenarien */}
              <div className="bg-gradient-to-r from-blue-600 to-green-600 rounded-xl p-6 text-white">
                <h4 className="font-bold text-xl mb-4">Experten-Prognosen für 2028:</h4>
                <div className="grid md:grid-cols-3 gap-4">
                  <div className="bg-white/20 backdrop-blur-sm rounded-lg p-4">
                    <div className="text-sm font-semibold mb-2">Optimistisch</div>
                    <div className="text-3xl font-bold mb-2">70%</div>
                    <div className="text-xs">Restwert E-Auto nach 3 Jahren</div>
                  </div>
                  <div className="bg-white/30 backdrop-blur-sm rounded-lg p-4 border-2 border-white">
                    <div className="text-sm font-semibold mb-2">Realistisch</div>
                    <div className="text-3xl font-bold mb-2">65%</div>
                    <div className="text-xs">Restwert E-Auto nach 3 Jahren</div>
                  </div>
                  <div className="bg-white/20 backdrop-blur-sm rounded-lg p-4">
                    <div className="text-sm font-semibold mb-2">Konservativ</div>
                    <div className="text-3xl font-bold mb-2">58%</div>
                    <div className="text-xs">Restwert E-Auto nach 3 Jahren</div>
                  </div>
                </div>
                <p className="mt-4 text-sm">
                  Zum Vergleich: Verbrenner liegen 2028 voraussichtlich bei 65-68% nach 3 Jahren.
                </p>
              </div>
            </section>

            {/* Fazit */}
            <section id="fazit" className="mb-8">
              <div className="bg-gradient-to-r from-blue-600 to-green-600 rounded-xl p-6 md:p-8 text-white">
                <h2 className="text-2xl md:text-3xl font-bold mb-4">
                  Fazit: Lohnt sich der E-Auto-Kauf trotz Wertverlust?
                </h2>
                <p className="text-base md:text-lg leading-relaxed mb-4">
                  <strong>Ja, wenn Sie richtig kalkulieren!</strong> Der höhere Wertverlust ist real, aber nicht das ganze Bild:
                </p>
                <div className="space-y-3 text-base md:text-lg mb-6">
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-6 h-6 flex-shrink-0 mt-0.5" />
                    <span><strong>Geringere Betriebskosten</strong> kompensieren oft den höheren Wertverlust: Strom 50% günstiger als Benzin, Wartung 30-40% günstiger, THG-Quote bringt 300-400€/Jahr.</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-6 h-6 flex-shrink-0 mt-0.5" />
                    <span><strong>Die Situation verbessert sich:</strong> 2025-2028 werden E-Auto Restwerte deutlich stabiler. Wer jetzt kauft, profitiert morgen vom reifen Markt.</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-6 h-6 flex-shrink-0 mt-0.5" />
                    <span><strong>Vermeiden Sie Premium-E-Autos</strong> als Neukauf. Hier ist der Wertverlust dramatisch (-50-65%). Als Gebrauchtkauf nach 3-4 Jahren aber Schnäppchen!</span>
                  </div>
                </div>
                <div className="bg-white/20 backdrop-blur-sm rounded-lg p-4">
                  <p className="text-lg font-semibold">
                    <strong>Unsere Empfehlung:</strong> Kaufen Sie wertstabile E-Autos (Tesla, Hyundai/Kia, VW-Konzern SUVs), halten Sie sie mindestens 5 Jahre oder leasen Sie Premium-Modelle. Der TCO (Total Cost of Ownership) ist oft günstiger als beim Verbrenner – trotz höherem Wertverlust!
                  </p>
                </div>
              </div>
            </section>
          </div>

          {/* Article Footer */}
          <footer className="mt-12 pt-8 border-t border-gray-200 px-6 md:px-10 pb-8">
            <div className="bg-gray-50 rounded-xl p-4 md:p-6">
              <h3 className="text-base md:text-lg font-bold text-gray-800 mb-3">Quellen & Weitere Informationen</h3>
              <ul className="text-xs md:text-sm text-gray-600 space-y-2">
                <li>• Deutsche Automobil Treuhand (DAT) (2024): "Restwertentwicklung Elektrofahrzeuge und alternative Antriebe" – 
                  <a href="https://www.dat.de" className="text-blue-600 hover:underline ml-1" target="_blank" rel="noopener">
                    dat.de
                  </a>
                </li>
                <li>• AutoScout24 (2025): "Wertverlust-Analyse Elektroautos vs. Verbrenner" – Marktdaten aus über 1 Million Inseraten</li>
                <li>• Allianz (2024): "Elektroauto Wertverlust: Faktoren und Entwicklung" – Versicherungsdaten und Statistiken</li>
                <li>• Center Automotive Research (CAR) / Prof. Dudenhöffer (2023): "Restwertentwicklung BEV im Drei-Jahres-Vergleich"</li>
                <li>• eCarsTrade (2025): "Wertverlust-Studie Premium-Elektrofahrzeuge" – Firmenwagen-Marktanalyse</li>
                <li>• ADAC (2025): "Elektroauto Kostenvergleich" – Total Cost of Ownership inkl. Wertverlust</li>
              </ul>
            </div>

            {/* Related Articles */}
            <div className="mt-8 bg-blue-50 rounded-xl p-6">
              <h3 className="text-lg font-bold text-gray-800 mb-4">📚 Weitere hilfreiche Artikel:</h3>
              <div className="space-y-2">
                <a href="/rechner/kostenrechner" className="block text-blue-600 hover:underline text-sm md:text-base">
                  → Kostenrechner: E-Auto vs Verbrenner über 8 Jahre vergleichen
                </a>
                <a href="/ratgeber/kaufberatung" className="block text-blue-600 hover:underline text-sm md:text-base">
                  → Elektroauto Kaufberatung 2025: Welches E-Auto passt zu mir?
                </a>
                <a href="/ratgeber/thg-quote" className="block text-blue-600 hover:underline text-sm md:text-base">
                  → THG-Quote: Bis zu 400€ pro Jahr mit E-Auto verdienen
                </a>
                <a href="/ratgeber/verkaufszahlen" className="block text-blue-600 hover:underline text-sm md:text-base">
                  → Elektroauto Verkaufszahlen Deutschland 2025
                </a>
              </div>
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
