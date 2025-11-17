import React from 'react';
import { Helmet } from 'react-helmet-async';
import { ArrowLeft, Zap, Clock, Battery, TrendingUp, Calculator, CheckCircle, AlertTriangle, Home, Gauge } from 'lucide-react';
import Header from '../components/Header';

export default function LadezeitPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-white">
      {/* SEO Meta Tags */}
      <Helmet>
        <title>Wie lange lädt ein E-Auto? Ladezeiten-Guide 2025 | e-Autowelt</title>
        <meta name="description" content="Wie lange lädt ein E-Auto? Von 20 Min bis 24h - alle Ladezeiten im Vergleich. Steckdose, Wallbox, Schnellladen + Berechnungsformel erklärt!" />
      </Helmet>
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
              src="/images/ratgeber/elektroauto-laden-ladezeit-hero.jpg"
              alt="Elektroauto wird an Schnellladestation geladen - Ladezeiten im Vergleich"
              className="w-full h-full object-cover opacity-90"
              loading="eager"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
            <div className="absolute bottom-0 left-0 right-0 p-6 md:p-10 text-white">
              <div className="flex items-center gap-3 mb-3">
                <div className="bg-white/30 backdrop-blur-md p-2 rounded-lg shadow-lg">
                  <Zap className="w-6 h-6 md:w-8 md:h-8" />
                </div>
                <span className="text-xs md:text-sm bg-white/30 backdrop-blur-md px-3 py-1 rounded-full font-semibold shadow-lg">📖 7 Min. Lesezeit</span>
                <span className="text-xs md:text-sm bg-white/30 backdrop-blur-md px-3 py-1 rounded-full font-semibold shadow-lg">Aktualisiert am 23. Mai 2025</span>
              </div>
              <h1 className="text-2xl md:text-4xl lg:text-5xl font-bold leading-tight">
                Wie lange lädt ein E-Auto? Der komplette Ladezeiten-Guide 2025
              </h1>
            </div>
          </div>

          {/* Article Content */}
          <div className="p-6 md:p-10">
            {/* Intro */}
            <div className="mb-8 md:mb-12">
              <p className="text-lg md:text-xl text-gray-600 leading-relaxed mb-4">
                Die Ladezeit eines Elektroautos hängt von mehreren Faktoren ab: der Batteriegröße, der Ladeleistung und der gewählten Lademethode. Wir erklären Ihnen übersichtlich, wie lange Ihr E-Auto wirklich lädt – von der Haushaltssteckdose bis zum Ultraschnelllader.
              </p>
              <div className="bg-blue-50 rounded-xl p-6">
                <p className="text-base md:text-lg text-gray-700 leading-relaxed">
                  Die häufigste Frage von E-Auto-Interessierten lautet: "Wie lange dauert das Laden eigentlich?" Die Antwort ist nicht pauschal, denn die Ladezeit variiert je nach Situation erheblich – von wenigen Minuten an einer Hochleistungs-Schnellladestation bis zu mehreren Stunden an der heimischen Steckdose. 
                  <strong> Dieser Guide zeigt Ihnen genau, mit welchen Ladezeiten Sie in der Praxis rechnen können.</strong>
                </p>
              </div>
            </div>

            {/* Inhaltsverzeichnis */}
            <nav className="bg-gray-50 rounded-xl p-6 mb-8 md:mb-12">
              <h2 className="text-xl md:text-2xl font-bold text-gray-800 mb-4">
                Inhaltsverzeichnis
              </h2>
              <ol className="space-y-2 text-sm md:text-base">
                <li><a href="#variationen" className="text-blue-600 hover:underline">1. Warum variieren die Ladezeiten so stark?</a></li>
                <li><a href="#vergleich" className="text-blue-600 hover:underline">2. Ladezeiten im Vergleich: Steckdose, Wallbox & Schnellladen</a></li>
                <li className="ml-6"><a href="#steckdose" className="text-blue-600 hover:underline">2.1 Haushaltssteckdose (230 V)</a></li>
                <li className="ml-6"><a href="#wallbox" className="text-blue-600 hover:underline">2.2 Wallbox (AC-Laden)</a></li>
                <li className="ml-6"><a href="#schnellladen" className="text-blue-600 hover:underline">2.3 Schnellladen (DC/HPC)</a></li>
                <li><a href="#faktoren" className="text-blue-600 hover:underline">3. Wichtige Faktoren, die die Ladezeit beeinflussen</a></li>
                <li><a href="#berechnung" className="text-blue-600 hover:underline">4. Ladezeit selbst berechnen (einfache Formel)</a></li>
                <li><a href="#beispiel" className="text-blue-600 hover:underline">5. Praxisbeispiel: 60 kWh Akku – Ladezeiten im Detail</a></li>
                <li><a href="#tipps" className="text-blue-600 hover:underline">6. Tipps für schnelleres & effizienteres Laden</a></li>
                <li><a href="#fazit" className="text-blue-600 hover:underline">7. Fazit</a></li>
              </ol>
            </nav>

            {/* Section 1: Warum variieren die Ladezeiten */}
            <section id="variationen" className="mb-8 md:mb-12">
              <h2 className="text-xl md:text-3xl font-bold text-gray-800 mb-4 md:mb-6 flex items-center gap-3">
                <Clock className="w-6 h-6 md:w-8 md:h-8 text-blue-600" />
                Warum variieren die Ladezeiten so stark?
              </h2>
              
              <p className="text-sm md:text-base text-gray-700 leading-relaxed mb-6">
                Anders als beim Tanken eines Verbrenners, wo der Vorgang in wenigen Minuten abgeschlossen ist, können die Ladezeiten eines Elektroautos zwischen 20 Minuten und 24 Stunden variieren. Diese enormen Unterschiede ergeben sich aus dem Zusammenspiel mehrerer technischer Faktoren, die alle gleichzeitig eine Rolle spielen.
              </p>

              <div className="bg-blue-50 rounded-xl p-4 md:p-6 mb-6">
                <h3 className="text-lg md:text-xl font-bold text-gray-800 mb-4">Die drei entscheidenden Faktoren:</h3>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <div className="bg-blue-600 text-white rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0 font-bold">1</div>
                    <div>
                      <div className="font-semibold text-gray-800 text-sm md:text-base mb-1">Batteriekapazität (kWh)</div>
                      <div className="text-xs md:text-sm text-gray-600">
                        Die Größe der Batterie bestimmt, wie viel Energie insgesamt geladen werden muss. Ein Kleinwagen mit 40 kWh Akku ist deutlich schneller voll als ein SUV mit 100 kWh Batterie – genauso wie ein kleiner Tank schneller gefüllt ist als ein großer.
                      </div>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-3">
                    <div className="bg-blue-600 text-white rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0 font-bold">2</div>
                    <div>
                      <div className="font-semibold text-gray-800 text-sm md:text-base mb-1">Ladeleistung (kW)</div>
                      <div className="text-xs md:text-sm text-gray-600">
                        Die Geschwindigkeit, mit der Energie in die Batterie fließt, wird durch die Ladeleistung bestimmt. Eine Haushaltssteckdose liefert nur 2,3 kW, während moderne Schnellladesäulen bis zu 350 kW erreichen können – das ist ein Faktor von mehr als 150!
                      </div>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-3">
                    <div className="bg-blue-600 text-white rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0 font-bold">3</div>
                    <div>
                      <div className="font-semibold text-gray-800 text-sm md:text-base mb-1">Ladestand & Ladekurve</div>
                      <div className="text-xs md:text-sm text-gray-600">
                        Die Batterie lädt nicht gleichmäßig schnell: Von 0-80% geht es meist rasant, danach wird die Ladeleistung zum Schutz der Batterie deutlich reduziert. Dieser Effekt, bekannt als "Ladekurve", sorgt dafür, dass die letzten 20% oft genauso lange dauern wie die ersten 80%.
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4">
                <div className="flex items-start gap-3">
                  <AlertTriangle className="w-5 h-5 text-yellow-600 flex-shrink-0 mt-0.5" />
                  <div>
                    <div className="font-semibold text-gray-800 text-sm md:text-base mb-1">Wichtig zu wissen:</div>
                    <p className="text-xs md:text-sm text-gray-700">
                      Die maximale Ladeleistung wird immer durch das schwächste Glied in der Kette begrenzt. Wenn Ihr Auto maximal 100 kW laden kann, nützt Ihnen eine 350 kW Ladesäule nichts – Sie laden trotzdem nur mit 100 kW. Umgekehrt gilt: Eine 11 kW Wallbox kann ein Auto, das 150 kW Schnellladen unterstützt, nur mit maximal 11 kW laden.
                    </p>
                  </div>
                </div>
              </div>
            </section>

            {/* Section 2: Ladezeiten im Vergleich */}
            <section id="vergleich" className="mb-8 md:mb-12">
              <h2 className="text-xl md:text-3xl font-bold text-gray-800 mb-4 md:mb-6 flex items-center gap-3">
                <Gauge className="w-6 h-6 md:w-8 md:h-8 text-green-600" />
                Ladezeiten im Vergleich: Steckdose, Wallbox & Schnellladen
              </h2>

              <p className="text-sm md:text-base text-gray-700 leading-relaxed mb-6">
                Je nach Lademethode ergeben sich drastisch unterschiedliche Ladezeiten für die gleiche Batterie. Die folgende Übersicht zeigt Ihnen die drei gängigsten Lademöglichkeiten und ihre jeweiligen Vor- und Nachteile in der praktischen Anwendung.
              </p>

              {/* Hero Image 2 - Ladezeiten Vergleich */}
              <div className="my-8 rounded-xl overflow-hidden shadow-lg">
                <img 
                  src="/images/ratgeber/elektroauto-ladezeiten-vergleich.jpg"
                  alt="Ladezeiten-Vergleich Elektroauto: Steckdose vs Wallbox vs Schnellladen"
                  className="w-full h-auto"
                  loading="lazy"
                />
                <div className="bg-gray-50 p-4 text-xs md:text-sm text-gray-600 italic">
                  Vergleich der Ladezeiten: Von 24 Stunden (Steckdose) bis 20 Minuten (Schnellladen)
                </div>
              </div>

              {/* 2.1 Haushaltssteckdose */}
              <div id="steckdose" className="mb-8">
                <h3 className="text-lg md:text-2xl font-bold text-gray-800 mb-4 flex items-center gap-3">
                  <Home className="w-5 h-5 md:w-6 md:h-6 text-red-600" />
                  2.1 Haushaltssteckdose (230 V, 2,3 kW)
                </h3>
                
                <div className="bg-red-50 rounded-xl p-4 md:p-6 mb-4">
                  <div className="grid md:grid-cols-2 gap-4 mb-4">
                    <div>
                      <div className="font-semibold text-gray-800 mb-2">Technische Daten:</div>
                      <ul className="text-sm text-gray-700 space-y-1">
                        <li>• <strong>Ladeleistung:</strong> 2,3 kW (10 Ampere)</li>
                        <li>• <strong>Ladegeschwindigkeit:</strong> ca. 10-15 km Reichweite pro Stunde</li>
                        <li>• <strong>Volle Ladung (60 kWh):</strong> 24-26 Stunden</li>
                      </ul>
                    </div>
                    <div>
                      <div className="font-semibold text-gray-800 mb-2">Geeignet für:</div>
                      <ul className="text-sm text-gray-700 space-y-1">
                        <li>✓ Notfälle & Übergangslösungen</li>
                        <li>✓ Sehr kurze Strecken (nur nachladen)</li>
                        <li>✓ Plug-in-Hybride mit kleinem Akku</li>
                      </ul>
                    </div>
                  </div>

                  <div className="bg-white rounded-lg p-4 border-l-4 border-red-500">
                    <div className="flex items-start gap-3">
                      <AlertTriangle className="w-5 h-5 text-red-600 flex-shrink-0 mt-0.5" />
                      <div>
                        <div className="font-semibold text-gray-800 text-sm md:text-base mb-1">Achtung: Brandgefahr!</div>
                        <p className="text-xs md:text-sm text-gray-700">
                          Normale Haushaltssteckdosen sind nicht für dauerhafte hohe Belastung ausgelegt. Bei regelmäßigem Laden über mehrere Stunden können Kabel und Steckdosen überhitzen, was im schlimmsten Fall zu Kabelbränden führen kann. Laut ADAC sollte die Steckdose nur als absolute Notlösung verwendet werden – nie als dauerhafte Lademethode.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                <p className="text-sm md:text-base text-gray-700 leading-relaxed">
                  <strong>Fazit Haushaltssteckdose:</strong> Aufgrund der extrem langen Ladezeiten und der Sicherheitsrisiken ist die normale Steckdose keine praktikable Dauerlösung für E-Autos. Sie eignet sich maximal als Notbehelf, wenn keine andere Lademöglichkeit verfügbar ist, oder für Plug-in-Hybride, die nur eine kleine Batterie von 10-15 kWh nachladen müssen.
                </p>
              </div>

              {/* 2.2 Wallbox */}
              <div id="wallbox" className="mb-8">
                <h3 className="text-lg md:text-2xl font-bold text-gray-800 mb-4 flex items-center gap-3">
                  <Battery className="w-5 h-5 md:w-6 md:h-6 text-blue-600" />
                  2.2 Wallbox (AC-Laden, 11 kW oder 22 kW)
                </h3>
                
                <div className="bg-blue-50 rounded-xl p-4 md:p-6 mb-4">
                  <div className="grid md:grid-cols-2 gap-4 mb-4">
                    <div>
                      <div className="font-semibold text-gray-800 mb-2">Wallbox 11 kW (Standard):</div>
                      <ul className="text-sm text-gray-700 space-y-1">
                        <li>• <strong>Ladeleistung:</strong> 11 kW (16 Ampere, 3-phasig)</li>
                        <li>• <strong>Ladegeschwindigkeit:</strong> ca. 60-70 km Reichweite pro Stunde</li>
                        <li>• <strong>Volle Ladung (60 kWh):</strong> 5-6 Stunden</li>
                        <li>• <strong>Kosten:</strong> 500-1.500€ + Installation</li>
                      </ul>
                    </div>
                    <div>
                      <div className="font-semibold text-gray-800 mb-2">Wallbox 22 kW (Optional):</div>
                      <ul className="text-sm text-gray-700 space-y-1">
                        <li>• <strong>Ladeleistung:</strong> 22 kW (32 Ampere, 3-phasig)</li>
                        <li>• <strong>Ladegeschwindigkeit:</strong> ca. 120-140 km Reichweite pro Stunde</li>
                        <li>• <strong>Volle Ladung (60 kWh):</strong> 2,5-3 Stunden</li>
                        <li>• <strong>Kosten:</strong> 800-2.000€ + Installation</li>
                      </ul>
                    </div>
                  </div>

                  <div className="bg-white rounded-lg p-4">
                    <div className="font-semibold text-gray-800 mb-2 flex items-center gap-2">
                      <CheckCircle className="w-5 h-5 text-green-600" />
                      Ideal für:
                    </div>
                    <ul className="text-sm text-gray-700 space-y-1 ml-7">
                      <li>✓ Tägliches Laden zuhause (über Nacht)</li>
                      <li>✓ Firmenparkplätze & Arbeitgeber-Ladeinfrastruktur</li>
                      <li>✓ Längerfristiges Parken (Hotels, Tiefgaragen)</li>
                      <li>✓ Kostenoptimiertes Laden mit eigenem Photovoltaik-Strom</li>
                    </ul>
                  </div>
                </div>

                <div className="bg-green-50 border-l-4 border-green-500 p-4 mb-4">
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                    <div>
                      <div className="font-semibold text-gray-800 text-sm md:text-base mb-1">Empfehlung: 11 kW Wallbox ist meist ausreichend</div>
                      <p className="text-xs md:text-sm text-gray-700">
                        Für die meisten Nutzer reicht eine 11 kW Wallbox vollkommen aus, da das Auto typischerweise 8-12 Stunden pro Nacht steht und in dieser Zeit problemlos vollgeladen werden kann. Eine 22 kW Wallbox erfordert zudem eine teurere Installation und viele E-Autos können sowieso nur maximal 11 kW AC-Laden (z.B. VW ID.3, Renault Zoe). Die Mehrkosten lohnen sich daher nur in Ausnahmefällen.
                      </p>
                    </div>
                  </div>
                </div>

                <p className="text-sm md:text-base text-gray-700 leading-relaxed">
                  <strong>Fazit Wallbox:</strong> Die Wallbox ist die optimale Ladelösung für den Alltag und sollte von jedem E-Auto-Besitzer mit eigener Garage oder Stellplatz installiert werden. Die Kombination aus komfortabler Ladegeschwindigkeit, Sicherheit und relativ moderaten Anschaffungskosten macht sie zur klaren Empfehlung für das heimische Laden.
                </p>
              </div>

              {/* 2.3 Schnellladen */}
              <div id="schnellladen" className="mb-8">
                <h3 className="text-lg md:text-2xl font-bold text-gray-800 mb-4 flex items-center gap-3">
                  <Zap className="w-5 h-5 md:w-6 md:h-6 text-purple-600" />
                  2.3 Schnellladen (DC/HPC, 50-350 kW)
                </h3>
                
                <div className="bg-purple-50 rounded-xl p-4 md:p-6 mb-4">
                  <p className="text-sm md:text-base text-gray-700 mb-4 leading-relaxed">
                    Beim Gleichstrom-Schnellladen (DC = Direct Current) wird die Batterie direkt mit hoher Leistung geladen, wodurch extrem kurze Ladezeiten möglich werden. Diese Technologie ist vor allem für Langstreckenfahrten unverzichtbar und findet sich typischerweise an Autobahnen und Hauptverkehrsstraßen.
                  </p>

                  <div className="space-y-4">
                    <div className="bg-white rounded-lg p-4">
                      <div className="font-semibold text-gray-800 mb-2">DC-Schnellladen (50 kW) - Standard:</div>
                      <ul className="text-sm text-gray-700 space-y-1">
                        <li>• <strong>Ladegeschwindigkeit:</strong> ca. 200-250 km Reichweite pro Stunde</li>
                        <li>• <strong>80% Ladung (60 kWh):</strong> 45-60 Minuten</li>
                        <li>• <strong>Kosten:</strong> 40-60 Cent/kWh (ca. 18-30€ für 60 kWh)</li>
                        <li>• <strong>Verfügbarkeit:</strong> Weit verbreitet an Autobahnen</li>
                      </ul>
                    </div>

                    <div className="bg-white rounded-lg p-4">
                      <div className="font-semibold text-gray-800 mb-2">High Power Charging / HPC (150-350 kW):</div>
                      <ul className="text-sm text-gray-700 space-y-1">
                        <li>• <strong>Ladegeschwindigkeit:</strong> bis zu 1.500 km Reichweite pro Stunde</li>
                        <li>• <strong>80% Ladung (60 kWh):</strong> 15-25 Minuten</li>
                        <li>• <strong>Kosten:</strong> 50-80 Cent/kWh (ca. 24-40€ für 60 kWh)</li>
                        <li>• <strong>Verfügbarkeit:</strong> Ionity, Fastned, Tesla Supercharger</li>
                      </ul>
                    </div>
                  </div>
                </div>

                {/* Hero Image 3 - Schnellladestation */}
                <div className="my-8 rounded-xl overflow-hidden shadow-lg">
                  <img 
                    src="/images/ratgeber/elektroauto-schnellladen-hpc.jpg"
                    alt="Elektroauto an High Power Charging Station (HPC) - Schnellladen mit 350 kW"
                    className="w-full h-auto"
                    loading="lazy"
                  />
                  <div className="bg-gray-50 p-4 text-xs md:text-sm text-gray-600 italic">
                    High Power Charging ermöglicht ultraschnelles Laden mit bis zu 350 kW Leistung
                  </div>
                </div>

                <div className="bg-blue-50 border-l-4 border-blue-500 p-4 mb-4">
                  <div className="flex items-start gap-3">
                    <Zap className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                    <div>
                      <div className="font-semibold text-gray-800 text-sm md:text-base mb-1">Wichtig: Nicht jedes Auto kann ultraschnell laden</div>
                      <p className="text-xs md:text-sm text-gray-700">
                        Die maximale Ladegeschwindigkeit hängt vom Fahrzeug ab. Während moderne Modelle wie der Hyundai Ioniq 5 oder Porsche Taycan mit 800-Volt-Technologie bis zu 270 kW laden können, schaffen viele gängige E-Autos wie der VW ID.3 oder Nissan Leaf maximal 100-125 kW. An einer 350 kW Ladesäule laden diese Fahrzeuge also trotzdem nur mit ihrer jeweiligen Maximalleistung.
                      </p>
                    </div>
                  </div>
                </div>

                <p className="text-sm md:text-base text-gray-700 leading-relaxed">
                  <strong>Fazit Schnellladen:</strong> DC-Schnellladen ist die ideale Lösung für Langstrecken und Reisen, sollte aber aufgrund der höheren Kosten und der erhöhten Batteriebelastung nicht als primäre Lademethode im Alltag genutzt werden. Für die tägliche Nutzung ist die heimische Wallbox deutlich schonender und wirtschaftlicher.
                </p>
              </div>
            </section>

            {/* Section 3: Faktoren */}
            <section id="faktoren" className="mb-8 md:mb-12">
              <h2 className="text-xl md:text-3xl font-bold text-gray-800 mb-4 md:mb-6 flex items-center gap-3">
                <TrendingUp className="w-6 h-6 md:w-8 md:h-8 text-orange-600" />
                Wichtige Faktoren, die die Ladezeit beeinflussen
              </h2>

              <p className="text-sm md:text-base text-gray-700 leading-relaxed mb-6">
                Neben der grundsätzlichen Ladeleistung spielen noch weitere Faktoren eine wichtige Rolle, die in der Praxis die tatsächliche Ladezeit erheblich beeinflussen können. Diese sollten Sie bei der Planung Ihrer Ladevorgänge unbedingt berücksichtigen.
              </p>

              <div className="space-y-4">
                <div className="bg-gray-50 rounded-xl p-4 md:p-6">
                  <div className="flex items-start gap-3 mb-3">
                    <div className="bg-orange-100 p-2 rounded-lg">
                      <AlertTriangle className="w-5 h-5 text-orange-600" />
                    </div>
                    <h3 className="text-lg md:text-xl font-bold text-gray-800">1. Temperatur der Batterie</h3>
                  </div>
                  <p className="text-sm md:text-base text-gray-700 leading-relaxed">
                    Lithium-Ionen-Batterien arbeiten am effizientesten bei Temperaturen zwischen 20-30°C. Bei Kälte (unter 0°C) kann die Ladeleistung um bis zu 50% reduziert sein, da die Batterie zunächst aufgewärmt werden muss, um Schäden zu vermeiden. Auch bei großer Hitze (über 40°C) drosselt das Batteriemanagementsystem die Ladeleistung zum Schutz der Zellen. Moderne E-Autos verfügen daher über aktive Thermomanagement-Systeme, die die Batterie vorkonditionieren können.
                  </p>
                </div>

                <div className="bg-gray-50 rounded-xl p-4 md:p-6">
                  <div className="flex items-start gap-3 mb-3">
                    <div className="bg-blue-100 p-2 rounded-lg">
                      <Battery className="w-5 h-5 text-blue-600" />
                    </div>
                    <h3 className="text-lg md:text-xl font-bold text-gray-800">2. Aktueller Ladestand (SOC)</h3>
                  </div>
                  <p className="text-sm md:text-base text-gray-700 leading-relaxed">
                    Die Ladekurve eines E-Autos ist nicht linear: Von 0% bis etwa 80% State of Charge (SOC) lädt die Batterie mit nahezu voller Geschwindigkeit, danach wird die Leistung kontinuierlich reduziert. Der Grund: Bei hohem Ladestand steigt die Zellspannung, was zu erhöhter Belastung führt. Zum Schutz der Batterie wird die Ladeleistung ab 80% typischerweise auf 50 kW oder weniger gedrosselt. Daher gilt: Für schnelles Nachladen auf Langstrecken nur bis 80% laden und dann weiterfahren.
                  </p>
                </div>

                <div className="bg-gray-50 rounded-xl p-4 md:p-6">
                  <div className="flex items-start gap-3 mb-3">
                    <div className="bg-green-100 p-2 rounded-lg">
                      <Zap className="w-5 h-5 text-green-600" />
                    </div>
                    <h3 className="text-lg md:text-xl font-bold text-gray-800">3. Batteriechemie & Zelltechnologie</h3>
                  </div>
                  <p className="text-sm md:text-base text-gray-700 leading-relaxed">
                    Nicht alle Batterien sind gleich: Moderne NMC-Zellen (Nickel-Mangan-Cobalt) erlauben höhere Laderaten als ältere LFP-Batterien (Lithium-Eisenphosphat). Fahrzeuge mit 800-Volt-Architektur (z.B. Porsche Taycan, Hyundai Ioniq 5) können deutlich schneller laden als herkömmliche 400-Volt-Systeme, da bei gleicher Leistung weniger Strom fließt, was Verluste reduziert und höhere Ladegeschwindigkeiten ermöglicht.
                  </p>
                </div>

                <div className="bg-gray-50 rounded-xl p-4 md:p-6">
                  <div className="flex items-start gap-3 mb-3">
                    <div className="bg-purple-100 p-2 rounded-lg">
                      <Gauge className="w-5 h-5 text-purple-600" />
                    </div>
                    <h3 className="text-lg md:text-xl font-bold text-gray-800">4. Auslastung der Ladestation</h3>
                  </div>
                  <p className="text-sm md:text-base text-gray-700 leading-relaxed">
                    An Schnellladestationen teilen sich oft mehrere Ladepunkte die verfügbare Gesamtleistung. Wenn also an einem Ionity-Standort mit 350 kW Anschlussleistung bereits zwei Fahrzeuge laden, kann es sein, dass Ihr Auto nicht mehr mit maximaler Geschwindigkeit laden kann. Dieser sogenannte "Load Balancing"-Effekt sorgt dafür, dass die verfügbare Leistung fair auf alle Nutzer verteilt wird, kann aber die individuelle Ladezeit verlängern.
                  </p>
                </div>
              </div>
            </section>

            {/* Section 4: Berechnung */}
            <section id="berechnung" className="mb-8 md:mb-12">
              <h2 className="text-xl md:text-3xl font-bold text-gray-800 mb-4 md:mb-6 flex items-center gap-3">
                <Calculator className="w-6 h-6 md:w-8 md:h-8 text-blue-600" />
                Ladezeit selbst berechnen (einfache Formel)
              </h2>

              <p className="text-sm md:text-base text-gray-700 leading-relaxed mb-6">
                Mit einer einfachen Formel können Sie die theoretische Ladezeit für Ihr Elektroauto schnell selbst berechnen. Beachten Sie dabei, dass dies nur ein Richtwert ist, da Ladeverluste und die in der Praxis variierende Ladekurve nicht berücksichtigt werden.
              </p>

              <div className="bg-gradient-to-br from-blue-50 to-green-50 rounded-xl p-6 md:p-8 mb-6">
                <h3 className="text-lg md:text-xl font-bold text-gray-800 mb-4 text-center">Die Ladezeit-Formel</h3>
                
                <div className="bg-white rounded-lg p-6 mb-6 shadow-md">
                  <div className="text-center mb-4">
                    <div className="text-2xl md:text-3xl font-bold text-gray-800 mb-2">
                      Ladezeit (h) = Batteriekapazität (kWh) ÷ Ladeleistung (kW)
                    </div>
                  </div>
                  
                  <div className="grid md:grid-cols-3 gap-4 text-sm">
                    <div className="bg-blue-50 p-4 rounded-lg text-center">
                      <div className="font-semibold text-gray-800 mb-1">Batteriekapazität</div>
                      <div className="text-gray-600">Größe des Akkus in kWh (z.B. 60 kWh)</div>
                    </div>
                    <div className="bg-green-50 p-4 rounded-lg text-center">
                      <div className="font-semibold text-gray-800 mb-1">Ladeleistung</div>
                      <div className="text-gray-600">Power der Ladestation in kW (z.B. 11 kW)</div>
                    </div>
                    <div className="bg-purple-50 p-4 rounded-lg text-center">
                      <div className="font-semibold text-gray-800 mb-1">Ladezeit</div>
                      <div className="text-gray-600">Dauer in Stunden (z.B. 5,5 h)</div>
                    </div>
                  </div>
                </div>

                <div className="bg-yellow-50 rounded-lg p-4 border-l-4 border-yellow-400">
                  <div className="font-semibold text-gray-800 mb-2">Wichtig: Praxis-Zuschlag einrechnen!</div>
                  <p className="text-sm text-gray-700">
                    In der Realität müssen Sie etwa 10-20% mehr Zeit einplanen, da beim Laden Energie verloren geht (Wirkungsgrad liegt bei ca. 85-95%) und die Ladeleistung gegen Ende des Ladevorgangs reduziert wird. Die Formel gibt Ihnen also einen Mindestwert – rechnen Sie im Alltag besser mit etwas mehr Puffer.
                  </p>
                </div>
              </div>
            </section>

            {/* Section 5: Beispiel */}
            <section id="beispiel" className="mb-8 md:mb-12">
              <h2 className="text-xl md:text-3xl font-bold text-gray-800 mb-4 md:mb-6">
                Praxisbeispiel: 60 kWh Akku – Ladezeiten im Detail
              </h2>

              <p className="text-sm md:text-base text-gray-700 leading-relaxed mb-6">
                Anhand eines konkreten Beispiels zeigen wir Ihnen, wie lange das Laden eines typischen Elektroautos mit 60 kWh Batteriekapazität (z.B. VW ID.3, Nissan Leaf, Hyundai Kona Electric) bei verschiedenen Lademethoden dauert.
              </p>

              <div className="overflow-x-auto">
                <table className="w-full bg-white rounded-xl overflow-hidden shadow-lg">
                  <thead className="bg-gradient-to-r from-blue-600 to-green-600 text-white">
                    <tr>
                      <th className="p-3 md:p-4 text-left text-sm md:text-base">Lademethode</th>
                      <th className="p-3 md:p-4 text-left text-sm md:text-base">Leistung</th>
                      <th className="p-3 md:p-4 text-left text-sm md:text-base">0% → 100%</th>
                      <th className="p-3 md:p-4 text-left text-sm md:text-base">20% → 80%</th>
                      <th className="p-3 md:p-4 text-left text-sm md:text-base">Kosten*</th>
                    </tr>
                  </thead>
                  <tbody className="text-sm md:text-base">
                    <tr className="border-b border-gray-200 hover:bg-gray-50">
                      <td className="p-3 md:p-4 font-semibold text-gray-800">Steckdose</td>
                      <td className="p-3 md:p-4 text-gray-700">2,3 kW</td>
                      <td className="p-3 md:p-4 text-gray-700">~26 Stunden</td>
                      <td className="p-3 md:p-4 text-gray-700">~16 Stunden</td>
                      <td className="p-3 md:p-4 text-green-600 font-semibold">~18€</td>
                    </tr>
                    <tr className="border-b border-gray-200 hover:bg-gray-50 bg-blue-50">
                      <td className="p-3 md:p-4 font-semibold text-gray-800">Wallbox 11 kW</td>
                      <td className="p-3 md:p-4 text-gray-700">11 kW</td>
                      <td className="p-3 md:p-4 text-gray-700">~6 Stunden</td>
                      <td className="p-3 md:p-4 text-gray-700">~3,5 Stunden</td>
                      <td className="p-3 md:p-4 text-green-600 font-semibold">~18€</td>
                    </tr>
                    <tr className="border-b border-gray-200 hover:bg-gray-50">
                      <td className="p-3 md:p-4 font-semibold text-gray-800">Wallbox 22 kW</td>
                      <td className="p-3 md:p-4 text-gray-700">22 kW**</td>
                      <td className="p-3 md:p-4 text-gray-700">~3 Stunden</td>
                      <td className="p-3 md:p-4 text-gray-700">~1,5 Stunden</td>
                      <td className="p-3 md:p-4 text-green-600 font-semibold">~18€</td>
                    </tr>
                    <tr className="border-b border-gray-200 hover:bg-gray-50">
                      <td className="p-3 md:p-4 font-semibold text-gray-800">DC Schnell 50 kW</td>
                      <td className="p-3 md:p-4 text-gray-700">50 kW</td>
                      <td className="p-3 md:p-4 text-gray-700">~75 Min.</td>
                      <td className="p-3 md:p-4 text-gray-700">~45 Min.</td>
                      <td className="p-3 md:p-4 text-orange-600 font-semibold">~30€</td>
                    </tr>
                    <tr className="border-b border-gray-200 hover:bg-gray-50 bg-purple-50">
                      <td className="p-3 md:p-4 font-semibold text-gray-800">HPC 150 kW</td>
                      <td className="p-3 md:p-4 text-gray-700">150 kW***</td>
                      <td className="p-3 md:p-4 text-gray-700">~40 Min.</td>
                      <td className="p-3 md:p-4 text-gray-700">~20 Min.</td>
                      <td className="p-3 md:p-4 text-red-600 font-semibold">~36€</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <div className="mt-6 space-y-3 text-xs md:text-sm text-gray-600">
                <p>* Geschätzte Kosten basierend auf: Haushaltsstrom 30 Cent/kWh, DC-Schnellladen 50 Cent/kWh, HPC 60 Cent/kWh</p>
                <p>** Viele E-Autos können nur maximal 11 kW AC laden, dann gelten die Werte der 11 kW Wallbox</p>
                <p>*** Maximale Ladeleistung wird oft nur kurzzeitig erreicht, dann gedrosselt (Ladekurve)</p>
              </div>

              <div className="bg-green-50 rounded-xl p-4 md:p-6 mt-6">
                <h4 className="font-semibold text-gray-800 mb-2 flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-green-600" />
                  Empfehlung aus der Praxis:
                </h4>
                <p className="text-sm md:text-base text-gray-700 leading-relaxed">
                  Für den Alltag: Laden Sie Ihr Auto über Nacht an der 11 kW Wallbox – das ist am schonendsten für die Batterie und kostengünstig. Für Langstrecken: Nutzen Sie Schnellladestationen und laden Sie nur bis 80%, dann ist das Verhältnis zwischen Ladezeit und nachgeladener Energie optimal. Die letzten 20% dauern überproportional lange und kosten viel Zeit.
                </p>
              </div>
            </section>

            {/* Section 6: Tipps */}
            <section id="tipps" className="mb-8 md:mb-12">
              <h2 className="text-xl md:text-3xl font-bold text-gray-800 mb-4 md:mb-6 flex items-center gap-3">
                <CheckCircle className="w-6 h-6 md:w-8 md:h-8 text-green-600" />
                Tipps für schnelleres & effizienteres Laden
              </h2>

              <p className="text-sm md:text-base text-gray-700 leading-relaxed mb-6">
                Mit den folgenden Praxis-Tipps können Sie Ihre Ladezeiten optimieren, die Batteriegesundheit schonen und gleichzeitig Kosten sparen. Diese Empfehlungen basieren auf den Erfahrungen tausender E-Auto-Fahrer und wissenschaftlichen Studien zur Batteriealterung.
              </p>

              <div className="grid md:grid-cols-2 gap-4">
                <div className="bg-blue-50 rounded-xl p-4 md:p-6">
                  <div className="flex items-start gap-3 mb-3">
                    <div className="bg-blue-600 text-white rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0 font-bold">1</div>
                    <h3 className="text-base md:text-lg font-bold text-gray-800">Batterie vorkonditionieren</h3>
                  </div>
                  <p className="text-sm md:text-base text-gray-700 leading-relaxed">
                    Viele moderne E-Autos können die Batterie während der Fahrt zur Ladestation vorheizen oder -kühlen, wenn Sie das Ziel im Navi eingeben. Dadurch erreichen Sie optimale Ladetemperatur und können deutlich schneller laden, besonders im Winter.
                  </p>
                </div>

                <div className="bg-green-50 rounded-xl p-4 md:p-6">
                  <div className="flex items-start gap-3 mb-3">
                    <div className="bg-green-600 text-white rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0 font-bold">2</div>
                    <h3 className="text-base md:text-lg font-bold text-gray-800">Nur bis 80% schnellladen</h3>
                  </div>
                  <p className="text-sm md:text-base text-gray-700 leading-relaxed">
                    Auf Langstrecken macht es keinen Sinn, auf 100% zu laden. Die letzten 20% dauern oft genauso lange wie die ersten 60%. Laden Sie lieber öfter bis 80% und fahren Sie weiter – das spart insgesamt Zeit und schont die Batterie.
                  </p>
                </div>

                <div className="bg-purple-50 rounded-xl p-4 md:p-6">
                  <div className="flex items-start gap-3 mb-3">
                    <div className="bg-purple-600 text-white rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0 font-bold">3</div>
                    <h3 className="text-base md:text-lg font-bold text-gray-800">Ladestand 20-80% halten</h3>
                  </div>
                  <p className="text-sm md:text-base text-gray-700 leading-relaxed">
                    Für maximale Batteriegesundheit sollten Sie im Alltag den Ladestand zwischen 20% und 80% halten. Vollständige Ladungen auf 100% sind nur vor längeren Fahrten nötig und belasten die Batterie unnötig, wenn das Auto danach nur steht.
                  </p>
                </div>

                <div className="bg-yellow-50 rounded-xl p-4 md:p-6">
                  <div className="flex items-start gap-3 mb-3">
                    <div className="bg-yellow-600 text-white rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0 font-bold">4</div>
                    <h3 className="text-base md:text-lg font-bold text-gray-800">Günstige Ladezeiten nutzen</h3>
                  </div>
                  <p className="text-sm md:text-base text-gray-700 leading-relaxed">
                    Mit einem intelligenten Stromtarif können Sie nachts zu günstigeren Konditionen laden. Viele Wallboxen und E-Autos erlauben zeitgesteuertes Laden, sodass der Ladevorgang automatisch in der günstigen Tarifzeit startet – ideal in Kombination mit Photovoltaik.
                  </p>
                </div>

                <div className="bg-red-50 rounded-xl p-4 md:p-6">
                  <div className="flex items-start gap-3 mb-3">
                    <div className="bg-red-600 text-white rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0 font-bold">5</div>
                    <h3 className="text-base md:text-lg font-bold text-gray-800">Schnellladen mit Bedacht</h3>
                  </div>
                  <p className="text-sm md:text-base text-gray-700 leading-relaxed">
                    Häufiges DC-Schnellladen kann die Batteriealterung beschleunigen, da hohe Ladeströme mehr Hitze erzeugen. Nutzen Sie Schnellladen primär auf Reisen, aber laden Sie im Alltag lieber schonend an der Wallbox mit moderater Geschwindigkeit.
                  </p>
                </div>

                <div className="bg-orange-50 rounded-xl p-4 md:p-6">
                  <div className="flex items-start gap-3 mb-3">
                    <div className="bg-orange-600 text-white rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0 font-bold">6</div>
                    <h3 className="text-base md:text-lg font-bold text-gray-800">Lade-Apps vergleichen</h3>
                  </div>
                  <p className="text-sm md:text-base text-gray-700 leading-relaxed">
                    Die Preise an öffentlichen Ladesäulen variieren stark je nach Anbieter und Tarif. Apps wie EnBW Mobility+, Plugsurfing oder Maingau bieten oft günstigere Konditionen als Ad-hoc-Laden. Vergleichen Sie Tarife und nutzen Sie Flatrate-Optionen, wenn Sie viel unterwegs laden.
                  </p>
                </div>
              </div>
            </section>

            {/* Section 7: Fazit */}
            <section id="fazit">
              <div className="bg-gradient-to-r from-blue-600 to-green-600 rounded-xl p-6 md:p-8 text-white">
                <h2 className="text-2xl md:text-3xl font-bold mb-4">
                  Fazit: Die richtige Lademethode für jede Situation
                </h2>
                <p className="text-base md:text-lg leading-relaxed mb-4">
                  Die Ladezeit eines Elektroautos variiert zwischen 20 Minuten und 24 Stunden – entscheidend ist die Wahl der passenden Lademethode für Ihre Bedürfnisse:
                </p>
                <ul className="list-disc list-inside space-y-2 text-base md:text-lg mb-6">
                  <li><strong>Alltag zuhause:</strong> 11 kW Wallbox über Nacht – optimal für Batterie und Geldbeutel</li>
                  <li><strong>Langstrecke & Reisen:</strong> DC-Schnellladen bis 80% – alle 2-3 Stunden kurze Ladepause</li>
                  <li><strong>Notfall:</strong> Haushaltssteckdose nur als absolute Notlösung verwenden</li>
                  <li><strong>Batteriegesundheit:</strong> Ladestand 20-80% halten, Schnellladen in Maßen nutzen</li>
                </ul>
                <p className="text-lg font-semibold">
                  Mit der richtigen Ladestrategie ist ein Elektroauto im Alltag mindestens genauso praktisch wie ein Verbrenner – und auf Langstrecken dank immer besserer Ladeinfrastruktur kaum noch eingeschränkt.
                </p>
              </div>
            </section>
          </div>

          {/* Article Footer */}
          <footer className="mt-12 pt-8 border-t border-gray-200 px-6 md:px-10 pb-8">
            <div className="bg-gray-50 rounded-xl p-4 md:p-6">
              <h3 className="text-base md:text-lg font-bold text-gray-800 mb-3">Quellen & Weitere Informationen</h3>
              <ul className="text-xs md:text-sm text-gray-600 space-y-2">
                <li>• ADAC (2024): "Elektroauto laden: Ladezeiten, Kosten und Tipps" – 
                  <a href="https://www.adac.de/rund-ums-fahrzeug/elektromobilitaet/laden/ladezeiten-elektroauto/" className="text-blue-600 hover:underline ml-1" target="_blank" rel="noopener">
                    adac.de/elektromobilitaet/laden
                  </a>
                </li>
                <li>• TÜV SÜD (2024): "Sicher laden: Wallbox vs. Haushaltssteckdose" – Technischer Bericht zu Ladeinfrastruktur und Sicherheit</li>
                <li>• Fraunhofer ISI (2024): "Batterieforschung: Ladeverhalten und Lebensdauer von Li-Ionen-Batterien"</li>
                <li>• Bundesnetzagentur (2025): Ladesäulenregister Deutschland – Aktuelle Statistiken zur öffentlichen Ladeinfrastruktur</li>
                <li>• Tesla, VW, BMW, Hyundai: Offizielle technische Datenblätter der Fahrzeughersteller (Januar 2025)</li>
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
                <a href="/ratgeber/mythen" className="block text-blue-600 hover:underline text-sm md:text-base">
                  → Die 10 größten E-Auto Mythen aufgeklärt
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
