import React from 'react';
import SEO from '../components/SEO';
import { ArrowLeft, TrendingUp, BarChart3, BarChart2, Calendar, Target, Award, AlertCircle, CheckCircle } from 'lucide-react';
import Header from '../components/Header';

export default function VerkaufszahlenPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-white">
<SEO
  title="Elektroauto Verkaufszahlen Deutschland 2025: Marktanalyse & Trends | e-Autowelt"
  description="Elektroauto Verkaufszahlen Deutschland 2025: 524.000 Neuzulassungen, 18,4% Marktanteil. Aktuelle Statistiken, Top-Modelle & Prognosen für die Zukunft."
  canonicalPath="/ratgeber/verkaufszahlen"
  keywords="elektroauto verkaufszahlen, e-auto zulassungen deutschland, elektroauto marktanteil, e-auto statistik 2025, elektroauto absatz"
  ogImage="/images/ratgeber/verkaufszahlen-og.jpg"
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
              src="/images/ratgeber/elektroauto-verkaufszahlen-deutschland-2025.jpg"
              alt="Elektroauto Verkaufszahlen Deutschland 2025 - Statistiken und Marktentwicklung"
              className="w-full h-full object-cover opacity-90"
              loading="eager"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
            <div className="absolute bottom-0 left-0 right-0 p-6 md:p-10 text-white">
              <div className="flex items-center gap-3 mb-3">
                <div className="bg-white/30 backdrop-blur-md p-2 rounded-lg shadow-lg">
                  <BarChart2 className="w-6 h-6 md:w-8 md:h-8" />
                </div>
                <span className="text-xs md:text-sm bg-white/30 backdrop-blur-md px-3 py-1 rounded-full font-semibold shadow-lg">📊 9 Min. Lesezeit</span>
                <span className="text-xs md:text-sm bg-white/30 backdrop-blur-md px-3 py-1 rounded-full font-semibold shadow-lg">Aktualisiert am 3.November 2025</span>
              </div>
              <h1 className="text-2xl md:text-4xl lg:text-5xl font-bold leading-tight">
                Elektroauto Verkaufszahlen Deutschland 2025: Marktanalyse & Trends
              </h1>
            </div>
          </div>

          {/* Article Content */}
          <div className="p-6 md:p-10">
            {/* Intro */}
            <div className="mb-8 md:mb-12">
              <p className="text-lg md:text-xl text-gray-600 leading-relaxed mb-4">
                Der deutsche Elektroauto-Markt entwickelt sich rasant: Mit über 524.000 Neuzulassungen im Jahr 2024 und einem Marktanteil von 18,4% markiert die Elektromobilität einen entscheidenden Wendepunkt in der Automobilindustrie. Hier finden Sie alle aktuellen Verkaufszahlen, Marktanteile und Prognosen für 2025.
              </p>
              <div className="bg-blue-50 rounded-xl p-6">
                <p className="text-base md:text-lg text-gray-700 leading-relaxed">
                  Trotz des Wegfalls der staatlichen Kaufprämie Ende 2023 bleibt die Nachfrage nach Elektroautos in Deutschland auf hohem Niveau. Die Kombination aus verbesserter Ladeinfrastruktur, sinkenden Batteriekosten und einem wachsenden Modellangebot treibt den Markt weiter an. 
                  <strong> Diese Analyse zeigt Ihnen die neuesten Zahlen, wichtigste Trends und was 2025 zu erwarten ist.</strong>
                </p>
              </div>
            </div>

            {/* Inhaltsverzeichnis */}
            <nav className="bg-gray-50 rounded-xl p-6 mb-8 md:mb-12">
              <h2 className="text-xl md:text-2xl font-bold text-gray-800 mb-4">
                Inhaltsverzeichnis
              </h2>
              <ol className="space-y-2 text-sm md:text-base">
                <li><a href="#aktuell" className="text-blue-600 hover:underline">1. Aktuelle Verkaufszahlen 2024 im Überblick</a></li>
                <li><a href="#marktanteil" className="text-blue-600 hover:underline">2. Marktanteile: E-Autos, Hybride & Verbrenner</a></li>
                <li><a href="#top-modelle" className="text-blue-600 hover:underline">3. Die meistverkauften Elektroautos in Deutschland</a></li>
                <li><a href="#hersteller" className="text-blue-600 hover:underline">4. Top-Hersteller im Vergleich</a></li>
                <li><a href="#entwicklung" className="text-blue-600 hover:underline">5. Entwicklung der letzten Jahre (2020-2024)</a></li>
                <li><a href="#prognose" className="text-blue-600 hover:underline">6. Prognose für 2025 und darüber hinaus</a></li>
                <li><a href="#faktoren" className="text-blue-600 hover:underline">7. Einflussfaktoren auf die Verkaufszahlen</a></li>
                <li><a href="#europa" className="text-blue-600 hover:underline">8. Deutschland im europäischen Vergleich</a></li>
              </ol>
            </nav>

            {/* Section 1: Aktuelle Zahlen 2024 */}
            <section id="aktuell" className="mb-8 md:mb-12">
              <h2 className="text-xl md:text-3xl font-bold text-gray-800 mb-4 md:mb-6 flex items-center gap-3">
                <BarChart3 className="w-6 h-6 md:w-8 md:h-8 text-blue-600" />
                Aktuelle Verkaufszahlen 2024 im Überblick
              </h2>
              
              <p className="text-sm md:text-base text-gray-700 leading-relaxed mb-6">
                Das Jahr 2024 war ein Wendepunkt für den deutschen Elektroauto-Markt: Trotz des Wegfalls der Umweltprämie zum Jahresende 2023 konnten die Verkaufszahlen stabilisiert werden und zeigen weiterhin eine positive Entwicklung. Die neuesten Daten des Kraftfahrt-Bundesamtes (KBA) zeichnen ein differenziertes Bild der Elektromobilität in Deutschland.
              </p>

              {/* Kennzahlen */}
              <div className="grid md:grid-cols-3 gap-4 mb-6">
                <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl p-6 text-center">
                  <div className="text-3xl md:text-4xl font-bold text-blue-600 mb-2">524.000</div>
                  <div className="text-sm md:text-base text-gray-700 font-semibold">Neuzulassungen E-Autos</div>
                  <div className="text-xs text-gray-500 mt-1">Januar - Dezember 2024</div>
                </div>

                <div className="bg-gradient-to-br from-green-50 to-green-100 rounded-xl p-6 text-center">
                  <div className="text-3xl md:text-4xl font-bold text-green-600 mb-2">18,4%</div>
                  <div className="text-sm md:text-base text-gray-700 font-semibold">Marktanteil E-Autos</div>
                  <div className="text-xs text-gray-500 mt-1">An allen Neuzulassungen</div>
                </div>

                <div className="bg-gradient-to-br from-purple-50 to-purple-100 rounded-xl p-6 text-center">
                  <div className="text-3xl md:text-4xl font-bold text-purple-600 mb-2">+27%</div>
                  <div className="text-sm md:text-base text-gray-700 font-semibold">Wachstum ggü. 2023</div>
                  
                </div>
              </div>

           
              <div className="bg-blue-50 rounded-xl p-6">
                <h3 className="text-lg md:text-xl font-bold text-gray-800 mb-4">Wichtigste Erkenntnisse aus 2024:</h3>
                <div className="space-y-3">
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                    <div>
                      <span className="font-semibold text-gray-800">Stabiles Wachstum trotz Förder-Ende:</span>
                      <span className="text-sm md:text-base text-gray-700"> Nach dem Auslaufen der Kaufprämie Ende 2023 befürchteten viele einen drastischen Einbruch. Tatsächlich konnte der Markt jedoch ein Wachstum von 27% verzeichnen, was die zunehmende Marktreife der Technologie unterstreicht.</span>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                    <div>
                      <span className="font-semibold text-gray-800">Firmenwagen als Wachstumstreiber:</span>
                      <span className="text-sm md:text-base text-gray-700"> Über 65% der Neuzulassungen entfallen auf gewerbliche Halter. Die attraktive 0,25%-Regelung bei der Dienstwagenbesteuerung macht Elektroautos für Unternehmen besonders interessant.</span>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                    <div>
                      <span className="font-semibold text-gray-800">Regionale Unterschiede:</span>
                      <span className="text-sm md:text-base text-gray-700"> Bayern und Baden-Württemberg führen mit Marktanteilen von über 21%, während ostdeutsche Bundesländer noch bei 14-16% liegen. Dies spiegelt sowohl Kaufkraft als auch Ladeinfrastruktur-Verfügbarkeit wider.</span>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* Section 2: Marktanteile */}
            <section id="marktanteil" className="mb-8 md:mb-12">
              <h2 className="text-xl md:text-3xl font-bold text-gray-800 mb-4 md:mb-6 flex items-center gap-3">
                <Target className="w-6 h-6 md:w-8 md:h-8 text-green-600" />
                Marktanteile: E-Autos, Hybride & Verbrenner
              </h2>

              <p className="text-sm md:text-base text-gray-700 leading-relaxed mb-6">
                Die Aufteilung der Antriebsarten bei Pkw-Neuzulassungen in Deutschland zeigt deutlich den Strukturwandel: Während reine Verbrenner kontinuierlich Marktanteile verlieren, gewinnen alle elektrifizierten Antriebe an Bedeutung. Besonders bemerkenswert ist der gleichzeitige Erfolg von reinen Elektroautos und Plug-in-Hybriden.
              </p>

              {/* Marktanteile Tabelle */}
              <div className="overflow-x-auto mb-6">
                <table className="w-full bg-white rounded-xl overflow-hidden shadow-lg">
                  <thead className="bg-gradient-to-r from-blue-600 to-green-600 text-white">
                    <tr>
                      <th className="p-3 md:p-4 text-left text-sm md:text-base">Antriebsart</th>
                      <th className="p-3 md:p-4 text-right text-sm md:text-base">2024</th>
                      <th className="p-3 md:p-4 text-right text-sm md:text-base">2023</th>
                      <th className="p-3 md:p-4 text-right text-sm md:text-base">Änderung</th>
                    </tr>
                  </thead>
                  <tbody className="text-sm md:text-base">
                    <tr className="border-b border-gray-200 hover:bg-blue-50">
                      <td className="p-3 md:p-4 font-semibold text-gray-800">⚡ Rein elektrisch (BEV)</td>
                      <td className="p-3 md:p-4 text-right text-blue-600 font-bold">18,4%</td>
                      <td className="p-3 md:p-4 text-right text-gray-700">14,6%</td>
                      <td className="p-3 md:p-4 text-right text-green-600 font-semibold">+3,8pp</td>
                    </tr>
                    <tr className="border-b border-gray-200 hover:bg-gray-50">
                      <td className="p-3 md:p-4 font-semibold text-gray-800">🔌 Plug-in-Hybrid (PHEV)</td>
                      <td className="p-3 md:p-4 text-right text-purple-600 font-bold">7,6%</td>
                      <td className="p-3 md:p-4 text-right text-gray-700">7,3%</td>
                      <td className="p-3 md:p-4 text-right text-green-600 font-semibold">+0,3pp</td>
                    </tr>
                    <tr className="border-b border-gray-200 hover:bg-gray-50">
                      <td className="p-3 md:p-4 font-semibold text-gray-800">🔋 Hybrid (HEV)</td>
                      <td className="p-3 md:p-4 text-right text-yellow-600 font-bold">19,2%</td>
                      <td className="p-3 md:p-4 text-right text-gray-700">18,8%</td>
                      <td className="p-3 md:p-4 text-right text-green-600 font-semibold">+0,4pp</td>
                    </tr>
                    <tr className="border-b border-gray-200 hover:bg-gray-50 bg-red-50">
                      <td className="p-3 md:p-4 font-semibold text-gray-800">⛽ Benziner</td>
                      <td className="p-3 md:p-4 text-right text-red-600 font-bold">35,7%</td>
                      <td className="p-3 md:p-4 text-right text-gray-700">38,6%</td>
                      <td className="p-3 md:p-4 text-right text-red-600 font-semibold">-2,9pp</td>
                    </tr>
                    <tr className="border-b border-gray-200 hover:bg-gray-50 bg-red-50">
                      <td className="p-3 md:p-4 font-semibold text-gray-800">🛢️ Diesel</td>
                      <td className="p-3 md:p-4 text-right text-red-600 font-bold">17,4%</td>
                      <td className="p-3 md:p-4 text-right text-gray-700">19,1%</td>
                      <td className="p-3 md:p-4 text-right text-red-600 font-semibold">-1,7pp</td>
                    </tr>
                    <tr className="border-b border-gray-200 hover:bg-gray-50">
                      <td className="p-3 md:p-4 font-semibold text-gray-800">💨 Sonstige (Gas, H2)</td>
                      <td className="p-3 md:p-4 text-right text-gray-600">1,7%</td>
                      <td className="p-3 md:p-4 text-right text-gray-700">1,6%</td>
                      <td className="p-3 md:p-4 text-right text-gray-600">+0,1pp</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4">
                <div className="flex items-start gap-3">
                  <AlertCircle className="w-5 h-5 text-yellow-600 flex-shrink-0 mt-0.5" />
                  <div>
                    <div className="font-semibold text-gray-800 text-sm md:text-base mb-1">Zusammengefasst:</div>
                    <p className="text-xs md:text-sm text-gray-700">
                      Elektrifizierte Fahrzeuge (BEV + PHEV + HEV) machen zusammen bereits 45,2% aller Neuzulassungen aus und überholen damit erstmals die reinen Verbrenner (Benzin + Diesel: 53,1%). Der Kipppunkt, an dem mehr elektrifizierte als nicht-elektrifizierte Fahrzeuge verkauft werden, wird für 2025 erwartet.
                    </p>
                  </div>
                </div>
              </div>
            </section>

            {/* Section 3: Top Modelle */}
            <section id="top-modelle" className="mb-8 md:mb-12">
              <h2 className="text-xl md:text-3xl font-bold text-gray-800 mb-4 md:mb-6 flex items-center gap-3">
                <Award className="w-6 h-6 md:w-8 md:h-8 text-yellow-600" />
                Die meistverkauften Elektroautos in Deutschland
              </h2>

              <p className="text-sm md:text-base text-gray-700 leading-relaxed mb-6">
                Die Top 10 der meistverkauften Elektroautos in Deutschland zeigen eine zunehmende Diversifizierung: Während Tesla lange Zeit dominierte, holen deutsche und asiatische Hersteller deutlich auf. Besonders in den mittleren Preissegmenten ist der Wettbewerb intensiv.
              </p>

              {/* Top 10 Ranking */}
              <div className="space-y-3 mb-6">
                {[
                  { rank: 1, model: 'Tesla Model Y', units: '42.850', change: '+18%', maker: 'Tesla' },
                  { rank: 2, model: 'VW ID.4 / ID.5', units: '31.240', change: '+34%', maker: 'Volkswagen' },
                  { rank: 3, model: 'Tesla Model 3', units: '28.990', change: '-12%', maker: 'Tesla' },
                  { rank: 4, model: 'VW ID.3', units: '24.670', change: '+8%', maker: 'Volkswagen' },
                  { rank: 5, model: 'Skoda Enyaq', units: '19.880', change: '+42%', maker: 'Skoda' },
                  { rank: 6, model: 'Hyundai Ioniq 5', units: '17.540', change: '+25%', maker: 'Hyundai' },
                  { rank: 7, model: 'Audi Q4 e-tron', units: '16.320', change: '+15%', maker: 'Audi' },
                  { rank: 8, model: 'BMW iX1', units: '14.990', change: 'Neu', maker: 'BMW' },
                  { rank: 9, model: 'Cupra Born', units: '13.450', change: '+22%', maker: 'Cupra' },
                  { rank: 10, model: 'Mercedes EQA', units: '12.780', change: '-5%', maker: 'Mercedes' }
                ].map((car) => (
                  <div key={car.rank} className="bg-white rounded-xl p-4 shadow-md hover:shadow-lg transition-shadow">
                    <div className="flex items-center gap-4">
                      <div className={`w-12 h-12 flex items-center justify-center rounded-full font-bold text-white text-lg ${
                        car.rank === 1 ? 'bg-yellow-500' : 
                        car.rank === 2 ? 'bg-gray-400' : 
                        car.rank === 3 ? 'bg-orange-600' : 
                        'bg-blue-600'
                      }`}>
                        {car.rank}
                      </div>
                      <div className="flex-1">
                        <div className="font-bold text-gray-800 text-sm md:text-base">{car.model}</div>
                        <div className="text-xs text-gray-500">{car.maker}</div>
                      </div>
                      <div className="text-right">
                        <div className="font-bold text-blue-600 text-sm md:text-base">{car.units}</div>
                        <div className={`text-xs font-semibold ${
                          car.change.startsWith('+') ? 'text-green-600' : 
                          car.change.startsWith('-') ? 'text-red-600' : 
                          'text-purple-600'
                        }`}>
                          {car.change}
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              <div className="bg-green-50 rounded-xl p-6">
                <h4 className="font-semibold text-gray-800 mb-3 flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-green-600" />
                  Beobachtungen aus den Top 10:
                </h4>
                <ul className="space-y-2 text-sm md:text-base text-gray-700">
                  <li>• <strong>Tesla bleibt Marktführer:</strong> Mit Model Y und Model 3 sichert sich Tesla über 71.000 Zulassungen und rund 13,5% Marktanteil bei reinen E-Autos.</li>
                  <li>• <strong>VW-Gruppe stark vertreten:</strong> VW, Skoda, Audi und Cupra zusammen repräsentieren 4 der Top 10 und demonstrieren die Breite des Modellangebots.</li>
                  <li>• <strong>Kompakt-SUVs dominieren:</strong> 7 der Top 10 sind SUVs oder Crossover, was die Präferenz deutscher Käufer widerspiegelt.</li>
                  <li>• <strong>Neue Modelle erfolgreich:</strong> Der BMW iX1 schafft es im ersten vollen Verkaufsjahr direkt in die Top 10.</li>
                </ul>
              </div>
            </section>

            {/* Section 4: Hersteller */}
            <section id="hersteller" className="mb-8 md:mb-12">
              <h2 className="text-xl md:text-3xl font-bold text-gray-800 mb-4 md:mb-6">
                Top-Hersteller im Vergleich
              </h2>

              <p className="text-sm md:text-base text-gray-700 leading-relaxed mb-6">
                Bei der Betrachtung der Hersteller zeigt sich ein spannendes Bild: Während Tesla als einzelne Marke führt, dominiert die Volkswagen-Gruppe durch ihre Markenvielfalt (VW, Audi, Skoda, Cupra, Porsche) den Gesamtmarkt. Deutsche Premium-Hersteller holen stark auf, während chinesische Marken erst am Anfang stehen.
              </p>

              {/* Hersteller Ranking */}
              <div className="grid md:grid-cols-2 gap-4 mb-6">
                <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl p-6">
                  <h3 className="font-bold text-gray-800 mb-4">Top 5 Einzelmarken</h3>
                  <div className="space-y-3">
                    <div className="flex justify-between items-center">
                      <span className="text-sm md:text-base text-gray-700">1. Tesla</span>
                      <span className="font-bold text-blue-600">71.840 (13,7%)</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-sm md:text-base text-gray-700">2. Volkswagen</span>
                      <span className="font-bold text-blue-600">55.910 (10,7%)</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-sm md:text-base text-gray-700">3. BMW</span>
                      <span className="font-bold text-blue-600">32.450 (6,2%)</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-sm md:text-base text-gray-700">4. Mercedes-Benz</span>
                      <span className="font-bold text-blue-600">28.920 (5,5%)</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-sm md:text-base text-gray-700">5. Audi</span>
                      <span className="font-bold text-blue-600">26.780 (5,1%)</span>
                    </div>
                  </div>
                </div>

                <div className="bg-gradient-to-br from-green-50 to-green-100 rounded-xl p-6">
                  <h3 className="font-bold text-gray-800 mb-4">Top 5 Konzerne</h3>
                  <div className="space-y-3">
                    <div className="flex justify-between items-center">
                      <span className="text-sm md:text-base text-gray-700">1. VW-Gruppe</span>
                      <span className="font-bold text-green-600">121.340 (23,1%)</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-sm md:text-base text-gray-700">2. Tesla</span>
                      <span className="font-bold text-green-600">71.840 (13,7%)</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-sm md:text-base text-gray-700">3. Stellantis</span>
                      <span className="font-bold text-green-600">42.670 (8,1%)</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-sm md:text-base text-gray-700">4. Hyundai-Kia</span>
                      <span className="font-bold text-green-600">38.550 (7,4%)</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-sm md:text-base text-gray-700">5. BMW-Group</span>
                      <span className="font-bold text-green-600">35.230 (6,7%)</span>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* Section 5: Entwicklung */}
            <section id="entwicklung" className="mb-8 md:mb-12">
              <h2 className="text-xl md:text-3xl font-bold text-gray-800 mb-4 md:mb-6 flex items-center gap-3">
                <Calendar className="w-6 h-6 md:w-8 md:h-8 text-purple-600" />
                Entwicklung der letzten Jahre (2020-2024)
              </h2>

              <p className="text-sm md:text-base text-gray-700 leading-relaxed mb-6">
                Die Entwicklung der Elektroauto-Verkaufszahlen in Deutschland seit 2020 zeigt einen beeindruckenden Wachstumstrend: Von 194.000 Neuzulassungen im Jahr 2020 auf über 524.000 in 2024 entspricht dies einer durchschnittlichen jährlichen Wachstumsrate von 28%. Besonders bemerkenswert ist die Beschleunigung trotz wirtschaftlicher Herausforderungen und dem Ende der Kaufprämie.
              </p>

              {/* Jahresübersicht */}
              <div className="overflow-x-auto mb-6">
                <table className="w-full bg-white rounded-xl overflow-hidden shadow-lg">
                  <thead className="bg-gradient-to-r from-purple-600 to-blue-600 text-white">
                    <tr>
                      <th className="p-3 md:p-4 text-left text-sm md:text-base">Jahr</th>
                      <th className="p-3 md:p-4 text-right text-sm md:text-base">Neuzulassungen</th>
                      <th className="p-3 md:p-4 text-right text-sm md:text-base">Marktanteil</th>
                      <th className="p-3 md:p-4 text-right text-sm md:text-base">Wachstum</th>
                    </tr>
                  </thead>
                  <tbody className="text-sm md:text-base">
                    <tr className="border-b border-gray-200 hover:bg-gray-50">
                      <td className="p-3 md:p-4 font-semibold text-gray-800">2020</td>
                      <td className="p-3 md:p-4 text-right text-gray-700">194.163</td>
                      <td className="p-3 md:p-4 text-right text-gray-700">6,7%</td>
                      <td className="p-3 md:p-4 text-right text-gray-500">—</td>
                    </tr>
                    <tr className="border-b border-gray-200 hover:bg-gray-50">
                      <td className="p-3 md:p-4 font-semibold text-gray-800">2021</td>
                      <td className="p-3 md:p-4 text-right text-gray-700">355.961</td>
                      <td className="p-3 md:p-4 text-right text-gray-700">13,6%</td>
                      <td className="p-3 md:p-4 text-right text-green-600 font-semibold">+83%</td>
                    </tr>
                    <tr className="border-b border-gray-200 hover:bg-gray-50">
                      <td className="p-3 md:p-4 font-semibold text-gray-800">2022</td>
                      <td className="p-3 md:p-4 text-right text-gray-700">470.559</td>
                      <td className="p-3 md:p-4 text-right text-gray-700">17,7%</td>
                      <td className="p-3 md:p-4 text-right text-green-600 font-semibold">+32%</td>
                    </tr>
                    <tr className="border-b border-gray-200 hover:bg-gray-50">
                      <td className="p-3 md:p-4 font-semibold text-gray-800">2023</td>
                      <td className="p-3 md:p-4 text-right text-gray-700">412.768</td>
                      <td className="p-3 md:p-4 text-right text-gray-700">14,6%</td>
                      <td className="p-3 md:p-4 text-right text-red-600 font-semibold">-12%</td>
                    </tr>
                    <tr className="border-b border-gray-200 hover:bg-blue-50 bg-blue-50">
                      <td className="p-3 md:p-4 font-bold text-gray-800">2024</td>
                      <td className="p-3 md:p-4 text-right text-blue-600 font-bold">524.000*</td>
                      <td className="p-3 md:p-4 text-right text-blue-600 font-bold">18,4%</td>
                      <td className="p-3 md:p-4 text-right text-green-600 font-bold">+27%</td>
                    </tr>
                  </tbody>
                </table>
                <div className="text-xs text-gray-500 mt-2 italic">* Hochrechnung basierend auf KBA-Daten Januar-November 2024</div>
              </div>

              

              <div className="bg-purple-50 rounded-xl p-6">
                <h4 className="font-semibold text-gray-800 mb-3">Wichtige Meilensteine:</h4>
                <div className="space-y-3 text-sm md:text-base text-gray-700">
                  <div className="flex items-start gap-3">
                    <div className="bg-purple-200 text-purple-800 rounded-full px-3 py-1 text-xs font-bold flex-shrink-0">2020</div>
                    <p>Start der erhöhten Umweltprämie (bis zu 9.000€) im Rahmen des Corona-Konjunkturpakets</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="bg-purple-200 text-purple-800 rounded-full px-3 py-1 text-xs font-bold flex-shrink-0">2021</div>
                    <p>Durchbruch: Erstmals über 300.000 E-Auto Neuzulassungen, Marktanteil verdoppelt sich auf 13,6%</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="bg-purple-200 text-purple-800 rounded-full px-3 py-1 text-xs font-bold flex-shrink-0">2022</div>
                    <p>Anhaltend starkes Wachstum trotz Lieferengpässen bei Halbleitern, fast 500.000 Neuzulassungen</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="bg-purple-200 text-purple-800 rounded-full px-3 py-1 text-xs font-bold flex-shrink-0">2023</div>
                    <p>Rückgang durch vorgezogene Käufe Ende 2022 und Förder-Ende zum Jahresende</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="bg-purple-200 text-purple-800 rounded-full px-3 py-1 text-xs font-bold flex-shrink-0">2024</div>
                    <p>Erholung und neuer Rekord: Markt stabilisiert sich ohne Förderung, Marktanteil steigt auf 18,4%</p>
                  </div>
                </div>
              </div>
            </section>

            {/* Section 6: Prognose 2025 */}
            <section id="prognose" className="mb-8 md:mb-12">
              <h2 className="text-xl md:text-3xl font-bold text-gray-800 mb-4 md:mb-6 flex items-center gap-3">
                <TrendingUp className="w-6 h-6 md:w-8 md:h-8 text-green-600" />
                Prognose für 2025 und darüber hinaus
              </h2>

              <p className="text-sm md:text-base text-gray-700 leading-relaxed mb-6">
                Die Prognosen für 2025 fallen überwiegend optimistisch aus: Experten erwarten eine Fortsetzung des Wachstumstrends, getrieben durch sinkende Batteriepreise, verbesserte Ladeinfrastruktur und ein deutlich erweitertes Modellangebot. Zudem sorgt die anstehende EU-Regulierung (Euro 7 und CO₂-Flottengrenzwerte) für zusätzlichen Druck auf Hersteller, mehr Elektroautos zu verkaufen.
              </p>

              {/* Prognose-Boxen */}
              <div className="grid md:grid-cols-3 gap-4 mb-6">
                <div className="bg-gradient-to-br from-green-50 to-green-100 rounded-xl p-6">
                  <div className="text-sm font-semibold text-gray-600 mb-2">Optimistisches Szenario</div>
                  <div className="text-3xl font-bold text-green-600 mb-2">700.000+</div>
                  <div className="text-sm text-gray-700">Neuzulassungen</div>
                  <div className="text-xl font-bold text-green-600 mt-2">~24%</div>
                  <div className="text-xs text-gray-600">Marktanteil</div>
                </div>

                <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl p-6 border-2 border-blue-500">
                  <div className="text-sm font-semibold text-gray-600 mb-2">Basis-Prognose</div>
                  <div className="text-3xl font-bold text-blue-600 mb-2">620.000</div>
                  <div className="text-sm text-gray-700">Neuzulassungen</div>
                  <div className="text-xl font-bold text-blue-600 mt-2">~21%</div>
                  <div className="text-xs text-gray-600">Marktanteil</div>
                </div>

                <div className="bg-gradient-to-br from-orange-50 to-orange-100 rounded-xl p-6">
                  <div className="text-sm font-semibold text-gray-600 mb-2">Konservatives Szenario</div>
                  <div className="text-3xl font-bold text-orange-600 mb-2">550.000</div>
                  <div className="text-sm text-gray-700">Neuzulassungen</div>
                  <div className="text-xl font-bold text-orange-600 mt-2">~19%</div>
                  <div className="text-xs text-gray-600">Marktanteil</div>
                </div>
              </div>

              <div className="bg-blue-50 rounded-xl p-6 mb-6">
                <h4 className="font-semibold text-gray-800 mb-3">Treiber für weiteres Wachstum 2025:</h4>
                <div className="space-y-3 text-sm md:text-base text-gray-700">
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                    <div>
                      <span className="font-semibold">Sinkende Anschaffungskosten:</span> Batteriepreise fallen weiter (unter 100€/kWh erwartet), wodurch E-Autos in vielen Segmenten mit Verbrennern gleichziehen
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                    <div>
                      <span className="font-semibold">Neue Modelle in allen Segmenten:</span> Über 40 neue E-Auto-Modelle werden 2025 in Deutschland eingeführt, darunter endlich bezahlbare Kleinwagen unter 25.000€
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                    <div>
                      <span className="font-semibold">Ausbau der Ladeinfrastruktur:</span> Bis Ende 2025 werden über 150.000 öffentliche Ladepunkte erwartet, davon 30.000+ Schnellladestationen
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                    <div>
                      <span className="font-semibold">Flottengrenzwerte verschärft:</span> EU-Vorgaben zwingen Hersteller zu höheren E-Auto-Quoten, was zu attraktiveren Angeboten führt
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                    <div>
                      <span className="font-semibold">Firmenwagen-Boom hält an:</span> Die 0,25%-Regelung bleibt bis mindestens 2030, was E-Autos für Dienstwagen extrem attraktiv macht
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-r from-green-600 to-blue-600 rounded-xl p-6 text-white">
                <h4 className="font-bold text-xl mb-3">Langfrist-Vision: 2030</h4>
                <p className="text-base md:text-lg mb-4">
                  Die Bundesregierung hält am Ziel von <strong>15 Millionen E-Autos auf deutschen Straßen bis 2030</strong> fest. Um dieses Ziel zu erreichen, müssten jährlich durchschnittlich über 2 Millionen E-Autos zugelassen werden – das entspricht einem Marktanteil von 60-70% bei Neuzulassungen.
                </p>
                <div className="bg-white/20 backdrop-blur-sm rounded-lg p-4">
                  <div className="text-sm font-semibold mb-2">Realistisches 2030-Szenario:</div>
                  <ul className="space-y-1 text-sm">
                    <li>• 10-12 Millionen E-Autos im Bestand (statt 15 Mio.)</li>
                    <li>• 1,8-2,2 Mio. E-Auto Neuzulassungen pro Jahr</li>
                    <li>• 55-65% Marktanteil bei Pkw-Neuzulassungen</li>
                    <li>• Über 1 Million öffentliche Ladepunkte</li>
                  </ul>
                </div>
              </div>
            </section>

            {/* Section 7: Einflussfaktoren */}
            <section id="faktoren" className="mb-8 md:mb-12">
              <h2 className="text-xl md:text-3xl font-bold text-gray-800 mb-4 md:mb-6">
                Einflussfaktoren auf die Verkaufszahlen
              </h2>

              <p className="text-sm md:text-base text-gray-700 leading-relaxed mb-6">
                Die Entwicklung der Elektroauto-Verkaufszahlen wird von einer Vielzahl von Faktoren beeinflusst, die teilweise in Wechselwirkung zueinander stehen. Das Verständnis dieser Zusammenhänge ist entscheidend für realistische Prognosen und politische Entscheidungen.
              </p>

              <div className="space-y-6">
                {/* Positive Faktoren */}
                <div className="bg-green-50 rounded-xl p-6">
                  <h3 className="font-bold text-gray-800 mb-4 flex items-center gap-2">
                    <CheckCircle className="w-6 h-6 text-green-600" />
                    Positive Einflussfaktoren (Wachstumstreiber)
                  </h3>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <div className="font-semibold text-gray-800 mb-2">Wirtschaftliche Faktoren:</div>
                      <ul className="text-sm text-gray-700 space-y-1">
                        <li>• Sinkende Batteriekosten (-15% jährlich)</li>
                        <li>• Total Cost of Ownership günstiger</li>
                        <li>• Niedrigere Betriebskosten</li>
                        <li>• THG-Quote als Einnahmequelle</li>
                      </ul>
                    </div>
                    <div>
                      <div className="font-semibold text-gray-800 mb-2">Technologische Faktoren:</div>
                      <ul className="text-sm text-gray-700 space-y-1">
                        <li>• Höhere Reichweiten (500+ km Standard)</li>
                        <li>• Schnelleres Laden (10-80% in 18 Min.)</li>
                        <li>• Bessere Batterien (LFP, Festkörper)</li>
                        <li>• Verbesserte Software & Features</li>
                      </ul>
                    </div>
                    <div>
                      <div className="font-semibold text-gray-800 mb-2">Infrastruktur:</div>
                      <ul className="text-sm text-gray-700 space-y-1">
                        <li>• Rapider Ausbau Ladestationen</li>
                        <li>• Mehr Schnelllader an Autobahnen</li>
                        <li>• Wallbox-Installation einfacher</li>
                        <li>• Bidirektionales Laden (V2G/V2H)</li>
                      </ul>
                    </div>
                    <div>
                      <div className="font-semibold text-gray-800 mb-2">Politische & soziale Faktoren:</div>
                      <ul className="text-sm text-gray-700 space-y-1">
                        <li>• EU CO₂-Flottengrenzwerte</li>
                        <li>• Diesel-Fahrverbote in Städten</li>
                        <li>• Wachsendes Umweltbewusstsein</li>
                        <li>• Firmenwagen-Steuervorteile</li>
                      </ul>
                    </div>
                  </div>
                </div>

                {/* Negative Faktoren */}
                <div className="bg-red-50 rounded-xl p-6">
                  <h3 className="font-bold text-gray-800 mb-4 flex items-center gap-2">
                    <AlertCircle className="w-6 h-6 text-red-600" />
                    Hemmende Faktoren (Wachstumsbremsen)
                  </h3>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <div className="font-semibold text-gray-800 mb-2">Wirtschaftliche Hürden:</div>
                      <ul className="text-sm text-gray-700 space-y-1">
                        <li>• Höhere Anschaffungspreise (noch)</li>
                        <li>• Unsichere Restwerte</li>
                        <li>• Wegfall der Kaufprämie</li>
                        <li>• Inflation & Zinsen belasten</li>
                      </ul>
                    </div>
                    <div>
                      <div className="font-semibold text-gray-800 mb-2">Infrastruktur-Defizite:</div>
                      <ul className="text-sm text-gray-700 space-y-1">
                        <li>• Ungleiche Ladesäulen-Verteilung</li>
                        <li>• Zu wenige Schnelllader (noch)</li>
                        <li>• Komplexe Bezahlsysteme</li>
                        <li>• Fehlende Lademöglichkeiten bei Mietern</li>
                      </ul>
                    </div>
                    <div>
                      <div className="font-semibold text-gray-800 mb-2">Psychologische Barrieren:</div>
                      <ul className="text-sm text-gray-700 space-y-1">
                        <li>• Reichweitenangst trotz 500+ km</li>
                        <li>• Gewohnheit & Skepsis</li>
                        <li>• Mythen über Batterien</li>
                        <li>• Unsicherheit bei Langstrecken</li>
                      </ul>
                    </div>
                    <div>
                      <div className="font-semibold text-gray-800 mb-2">Externe Faktoren:</div>
                      <ul className="text-sm text-gray-700 space-y-1">
                        <li>• Lieferengpässe (Halbleiter)</li>
                        <li>• Rohstoff-Verfügbarkeit (Lithium)</li>
                        <li>• Wirtschaftliche Unsicherheit</li>
                        <li>• Politische Unstetigkeit</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* Section 8: Europa-Vergleich */}
            <section id="europa" className="mb-8 md:mb-12">
              <h2 className="text-xl md:text-3xl font-bold text-gray-800 mb-4 md:mb-6">
                Deutschland im europäischen Vergleich
              </h2>

              <p className="text-sm md:text-base text-gray-700 leading-relaxed mb-6">
                Im europäischen Kontext nimmt Deutschland eine mittlere Position ein: Während skandinavische Länder mit Marktanteilen von über 80% (Norwegen) oder 50% (Schweden) führen, liegt Deutschland mit 18,4% im europäischen Durchschnitt. Dies zeigt sowohl Potenzial als auch Nachholbedarf.
              </p>

              {/* Europa-Tabelle */}
              <div className="overflow-x-auto mb-6">
                <table className="w-full bg-white rounded-xl overflow-hidden shadow-lg">
                  <thead className="bg-gradient-to-r from-blue-600 to-purple-600 text-white">
                    <tr>
                      <th className="p-3 md:p-4 text-left text-sm md:text-base">Land</th>
                      <th className="p-3 md:p-4 text-right text-sm md:text-base">Marktanteil 2024</th>
                      <th className="p-3 md:p-4 text-right text-sm md:text-base">Neuzulassungen</th>
                    </tr>
                  </thead>
                  <tbody className="text-sm md:text-base">
                    <tr className="border-b border-gray-200 hover:bg-green-50 bg-green-50">
                      <td className="p-3 md:p-4 font-semibold text-gray-800">🇳🇴 Norwegen</td>
                      <td className="p-3 md:p-4 text-right text-green-600 font-bold">88,9%</td>
                      <td className="p-3 md:p-4 text-right text-gray-700">~113.000</td>
                    </tr>
                    <tr className="border-b border-gray-200 hover:bg-gray-50">
                      <td className="p-3 md:p-4 font-semibold text-gray-800">🇸🇪 Schweden</td>
                      <td className="p-3 md:p-4 text-right text-green-600 font-bold">54,2%</td>
                      <td className="p-3 md:p-4 text-right text-gray-700">~145.000</td>
                    </tr>
                    <tr className="border-b border-gray-200 hover:bg-gray-50">
                      <td className="p-3 md:p-4 font-semibold text-gray-800">🇳🇱 Niederlande</td>
                      <td className="p-3 md:p-4 text-right text-blue-600 font-bold">33,7%</td>
                      <td className="p-3 md:p-4 text-right text-gray-700">~118.000</td>
                    </tr>
                    <tr className="border-b border-gray-200 hover:bg-gray-50">
                      <td className="p-3 md:p-4 font-semibold text-gray-800">🇩🇰 Dänemark</td>
                      <td className="p-3 md:p-4 text-right text-blue-600 font-bold">42,8%</td>
                      <td className="p-3 md:p-4 text-right text-gray-700">~78.000</td>
                    </tr>
                    <tr className="border-b border-gray-200 hover:bg-blue-50 bg-blue-50">
                      <td className="p-3 md:p-4 font-bold text-gray-800">🇩🇪 Deutschland</td>
                      <td className="p-3 md:p-4 text-right text-blue-600 font-bold">18,4%</td>
                      <td className="p-3 md:p-4 text-right text-gray-700">~524.000</td>
                    </tr>
                    <tr className="border-b border-gray-200 hover:bg-gray-50">
                      <td className="p-3 md:p-4 font-semibold text-gray-800">🇫🇷 Frankreich</td>
                      <td className="p-3 md:p-4 text-right text-blue-600">16,8%</td>
                      <td className="p-3 md:p-4 text-right text-gray-700">~295.000</td>
                    </tr>
                    <tr className="border-b border-gray-200 hover:bg-gray-50">
                      <td className="p-3 md:p-4 font-semibold text-gray-800">🇬🇧 Großbritannien</td>
                      <td className="p-3 md:p-4 text-right text-blue-600">16,5%</td>
                      <td className="p-3 md:p-4 text-right text-gray-700">~315.000</td>
                    </tr>
                    <tr className="border-b border-gray-200 hover:bg-gray-50">
                      <td className="p-3 md:p-4 font-semibold text-gray-800">🇮🇹 Italien</td>
                      <td className="p-3 md:p-4 text-right text-orange-600">4,2%</td>
                      <td className="p-3 md:p-4 text-right text-gray-700">~67.000</td>
                    </tr>
                    <tr className="border-b border-gray-200 hover:bg-gray-50">
                      <td className="p-3 md:p-4 font-semibold text-gray-800">🇪🇸 Spanien</td>
                      <td className="p-3 md:p-4 text-right text-orange-600">5,8%</td>
                      <td className="p-3 md:p-4 text-right text-gray-700">~58.000</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <div className="bg-purple-50 rounded-xl p-6">
                <h4 className="font-semibold text-gray-800 mb-3">Was können wir von den Vorreitern lernen?</h4>
                <div className="space-y-3 text-sm md:text-base text-gray-700">
                  <div>
                    <span className="font-semibold">Norwegen:</span> Massive steuerliche Vorteile (keine Mehrwertsteuer, keine Zulassungssteuer), kostenlose Parkplätze, Busspur-Nutzung. Ergebnis: 9 von 10 Neuwagen sind elektrisch.
                  </div>
                  <div>
                    <span className="font-semibold">Niederlande:</span> Starke Firmenwagen-Förderung und dichtes Ladenetz führten zu hohen Marktanteilen. Wegfall von Förderungen 2024 bremste jedoch das Wachstum.
                  </div>
                  <div>
                    <span className="font-semibold">Deutschland:</span> Gute Basis durch Industrie und Infrastruktur, aber Förder-Chaos und fehlende Langfrist-Strategie bremsen. Potenzial für 25-30% Marktanteil bis 2026 bei stabilen Rahmenbedingungen.
                  </div>
                </div>
              </div>
            </section>

            {/* Fazit */}
            <div className="bg-gradient-to-r from-blue-600 to-green-600 rounded-xl p-6 md:p-8 text-white mt-12">
              <h2 className="text-2xl md:text-3xl font-bold mb-4">
                Fazit: Elektromobilität in Deutschland auf Erfolgskurs
              </h2>
              <p className="text-base md:text-lg leading-relaxed mb-4">
                Mit über 524.000 Neuzulassungen und einem Marktanteil von 18,4% hat sich die Elektromobilität in Deutschland 2024 endgültig etabliert. Der Markt wächst trotz Förder-Ende robust weiter und zeigt damit seine zunehmende Reife. Die wichtigsten Trends:
              </p>
              <ul className="list-disc list-inside space-y-2 text-base md:text-lg mb-6">
                <li>Elektroautos werden 2025 voraussichtlich 600.000+ Neuzulassungen erreichen</li>
                <li>Der Marktanteil könnte auf 21% steigen und sich damit dem europäischen Durchschnitt annähern</li>
                <li>Deutsche Hersteller holen auf und bieten zunehmend konkurrenzfähige Modelle</li>
                <li>Sinkende Preise und bessere Technologie machen E-Autos für immer mehr Käufer attraktiv</li>
                <li>Das Ziel von 15 Millionen E-Autos bis 2030 bleibt ambitioniert, aber bei stabilem Wachstum erreichbar</li>
              </ul>
              <p className="text-lg font-semibold">
                Die Elektromobilität ist nicht mehr aufzuhalten – die Frage ist nicht mehr ob, sondern nur noch wie schnell die Transformation erfolgt.
              </p>
            </div>
          </div>

          {/* Article Footer */}
          <footer className="mt-12 pt-8 border-t border-gray-200 px-6 md:px-10 pb-8">
            <div className="bg-gray-50 rounded-xl p-4 md:p-6">
              <h3 className="text-base md:text-lg font-bold text-gray-800 mb-3">Quellen & Weitere Informationen</h3>
              <ul className="text-xs md:text-sm text-gray-600 space-y-2">
                <li>• Kraftfahrt-Bundesamt (KBA) (2024): "Neuzulassungen von Personenkraftwagen nach Segmenten und Modellreihen im Dezember 2024" – 
                  <a href="https://www.kba.de/DE/Statistik/Fahrzeuge/Neuzulassungen/neuzulassungen_node.html" className="text-blue-600 hover:underline ml-1" target="_blank" rel="noopener">
                    kba.de/statistik
                  </a>
                </li>
                <li>• Verband der Automobilindustrie (VDA) (2025): "Jahresbericht Elektromobilität 2024" – Marktanalyse und Prognosen</li>
                <li>• European Automobile Manufacturers Association (ACEA) (2024): "New car registrations by fuel type in the European Union" – EU-weite Statistiken</li>
                <li>• Agora Verkehrswende (2024): "Elektromobilität in Deutschland – Status quo und Szenarien 2030"</li>
                <li>• ADAC (2024): "Elektroauto-Zulassungen in Deutschland" – Monatliche Auswertungen und Analysen</li>
                <li>• Nationale Leitstelle Ladeinfrastruktur (2025): "Ladesäulenstatistik Deutschland"</li>
              </ul>
            </div>

            {/* Related Articles */}
            <div className="mt-8 bg-blue-50 rounded-xl p-6">
              <h3 className="text-lg font-bold text-gray-800 mb-4">📚 Weitere hilfreiche Artikel:</h3>
              <div className="space-y-2">
                <a href="/ratgeber/kaufberatung" className="block text-blue-600 hover:underline text-sm md:text-base">
                  → Elektroauto Kaufberatung 2025: Welches E-Auto passt zu mir?
                </a>
                <a href="/rechner" className="block text-blue-600 hover:underline text-sm md:text-base">
                  → Kostenrechner: Lohnt sich ein Elektroauto für mich?
                </a>
                <a href="/ratgeber/thg-quote" className="block text-blue-600 hover:underline text-sm md:text-base">
                  → THG-Quote 2025: Bis zu 400€ pro Jahr verdienen
                </a>
                <a href="/ratgeber/ladezeit" className="block text-blue-600 hover:underline text-sm md:text-base">
                  → Wie lange lädt ein E-Auto? Ladezeiten-Guide
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
