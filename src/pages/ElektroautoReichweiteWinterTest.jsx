import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Thermometer, Battery, Snowflake, TrendingDown, Shield, Zap, Wind, Car, Clock, MapPin, ArrowLeft } from 'lucide-react';
import Header from '../components/Header';

const ElektroautoReichweiteWinterTest = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      <Helmet>
        <title>Elektroauto Reichweite im Winter - Test & Erfahrungen 2024</title>
        <meta name="description" content="Wie viel Reichweite verliert ein Elektroauto im Winter? Aktuelle Tests zeigen Reichweitenverluste von 10-40%. Alle Faktoren, Testergebnisse und Tipps für maximale Winterreichweite." />
        <link rel="canonical" href="https://e-autowelt.de/ratgeber/elektroauto-reichweite-winter-test" />
        
        {/* Open Graph Tags */}
        <meta property="og:title" content="Elektroauto Reichweite im Winter - Test & Erfahrungen 2024" />
        <meta property="og:description" content="Wie viel Reichweite verliert ein Elektroauto im Winter? Aktuelle Tests zeigen Reichweitenverluste von 10-40%. Alle Faktoren, Testergebnisse und Tipps." />
        <meta property="og:type" content="article" />
        <meta property="og:url" content="https://e-autowelt.de/ratgeber/elektroauto-reichweite-winter-test" />
        <meta property="og:image" content="https://e-autowelt.de/images/winter-reichweite-test.jpg" />
        
        {/* Structured Data */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            "headline": "Elektroauto Reichweite im Winter - Test & Erfahrungen 2024",
            "description": "Wie viel Reichweite verliert ein Elektroauto im Winter? Aktuelle Tests zeigen Reichweitenverluste von 10-40%. Alle Faktoren, Testergebnisse und Tipps für maximale Winterreichweite.",
            "author": {
              "@type": "Organization",
              "name": "e-Autowelt"
            },
            "publisher": {
              "@type": "Organization",
              "name": "e-Autowelt",
              "logo": {
                "@type": "ImageObject",
                "url": "https://e-autowelt.de/logo.png"
              }
            },
            "datePublished": "2024-12-04",
            "dateModified": "2024-12-04"
          })}
        </script>
      </Helmet>

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
          <div className="relative h-64 md:h-96 bg-gradient-to-br from-blue-600 to-cyan-600 overflow-hidden">
            <img 
              src="/images/ratgeber/winter-reichweite-hero.webp"
              alt="Elektroauto Reichweite im Winter Test"
              className="w-full h-full object-cover opacity-90"
              loading="lazy"
              decoding="async"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
            <div className="absolute bottom-0 left-0 right-0 p-6 md:p-10 text-white">
              <div className="flex items-center gap-3 mb-3">
                <div className="bg-white/30 backdrop-blur-md p-2 rounded-lg shadow-lg">
                  <Snowflake className="w-6 h-6 md:w-8 md:h-8" />
                </div>
                <span className="text-xs md:text-sm bg-white/30 backdrop-blur-md px-3 py-1 rounded-full font-semibold shadow-lg">📖 12 Min. Lesezeit</span>
                <span className="text-xs md:text-sm bg-white/30 backdrop-blur-md px-3 py-1 rounded-full font-semibold shadow-lg">Aktualisiert am 5. Dezember 2024</span>
              </div>
              <h1 className="text-2xl md:text-4xl lg:text-5xl font-bold leading-tight">
                Elektroauto Reichweite im Winter
              </h1>
            </div>
          </div>

          {/* Article Content */}
          <div className="p-6 md:p-10">
            {/* Intro */}
            <div className="mb-8 md:mb-12">
              <p className="text-lg md:text-xl text-gray-600 leading-relaxed mb-4">
                Die Reichweite von Elektroautos sinkt im Winter spürbar – das ist eine Tatsache, die alle E-Auto-Fahrer kennen. 
                Doch wie stark ist der Verlust tatsächlich, und was sind die Ursachen? Aktuelle Tests und Langzeiterfahrungen 
                aus dem Winter 2023/2024 zeigen ein differenziertes Bild mit Reichweitenverlusten zwischen 10% und 40%.
              </p>
              <div className="bg-blue-50 border-2 border-blue-200 rounded-xl p-6">
                <p className="text-base md:text-lg text-gray-700 leading-relaxed">
                  <strong className="text-blue-700">❄️ Wichtig zu wissen:</strong> Bei Temperaturen zwischen -5°C und -10°C müssen Fahrer mit einem Reichweitenverlust von durchschnittlich 25-35% rechnen. Mit den richtigen Strategien und modernen Fahrzeugen mit Wärmepumpe lässt sich dieser Verlust jedoch auf 15-20% reduzieren.
                </p>
              </div>
            </div>
          
          {/* Table of Contents */}
          <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 mb-12">
            <h2 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
              <MapPin className="w-5 h-5 text-blue-600" />
              Inhaltsverzeichnis
            </h2>
            <ul className="space-y-2 text-gray-700">
              <li><a href="#ueberblick" className="hover:text-blue-600 transition-colors">→ Reichweitenverlust im Überblick</a></li>
              <li><a href="#testergebnisse" className="hover:text-blue-600 transition-colors">→ Aktuelle Testergebnisse 2024</a></li>
              <li><a href="#faktoren" className="hover:text-blue-600 transition-colors">→ Einflussfaktoren auf die Winterreichweite</a></li>
              <li><a href="#temperatur" className="hover:text-blue-600 transition-colors">→ Temperatur und Reichweite</a></li>
              <li><a href="#heizung" className="hover:text-blue-600 transition-colors">→ Heizung und Verbrauch</a></li>
              <li><a href="#tipps" className="hover:text-blue-600 transition-colors">→ Tipps für maximale Winterreichweite</a></li>
              <li><a href="#modelle" className="hover:text-blue-600 transition-colors">→ Welche Modelle schneiden am besten ab?</a></li>
              <li><a href="#fazit" className="hover:text-blue-600 transition-colors">→ Fazit</a></li>
            </ul>
          </div>

          {/* Quick Facts Box */}
          <div className="bg-gradient-to-br from-blue-50 to-cyan-50 border-l-4 border-blue-600 p-6 mb-12 rounded-r-lg">
            <h3 className="text-lg font-bold text-gray-900 mb-4 flex items-center gap-2">
              <Zap className="w-5 h-5 text-blue-600" />
              Das Wichtigste in Kürze
            </h3>
            <ul className="space-y-2 text-gray-700">
              <li className="flex items-start gap-2">
                <span className="text-blue-600 font-bold">•</span>
                <span>Elektroautos verlieren im Winter durchschnittlich 20-30% Reichweite bei Temperaturen unter 0°C</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-blue-600 font-bold">•</span>
                <span>Der Reichweitenverlust variiert je nach Modell zwischen 10% und 40%</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-blue-600 font-bold">•</span>
                <span>Hauptfaktoren: Heizung, kalte Batterie, erhöhter Rollwiderstand und dichtere Luft</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-blue-600 font-bold">•</span>
                <span>Wärmepumpe und gute Isolation können Verluste auf 15-20% reduzieren</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-blue-600 font-bold">•</span>
                <span>Vorheizen während des Ladens spart bis zu 5 kWh pro Fahrt</span>
              </li>
            </ul>
          </div>

          {/* Section 1: Overview */}
          <section id="ueberblick" className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center gap-3">
              <TrendingDown className="w-8 h-8 text-blue-600" />
              Reichweitenverlust im Überblick
            </h2>
            <div className="prose prose-lg max-w-none text-gray-700 space-y-4">
              <p>
                Die Reichweite von Elektroautos sinkt im Winter spürbar – das ist eine Tatsache, die alle E-Auto-Fahrer kennen. 
                Doch wie stark ist der Verlust tatsächlich, und was sind die Ursachen? Aktuelle Tests und Langzeiterfahrungen 
                aus dem Winter 2023/2024 zeigen ein differenziertes Bild.
              </p>
              <p>
                Bei Temperaturen zwischen -5°C und -10°C müssen Fahrer mit einem Reichweitenverlust von durchschnittlich 
                25-35% rechnen. Bei milderen Temperaturen um 0°C bis 5°C reduziert sich der Verlust auf etwa 15-20%. 
                Besonders gut ausgestattete Fahrzeuge mit Wärmepumpe und effizienter Isolation können die Einbußen auf 
                10-15% begrenzen.
              </p>
              <p>
                Der Reichweitenverlust ist dabei nicht linear: Bei sehr niedrigen Temperaturen unter -15°C kann der 
                Verlust auf über 40% ansteigen, während bei milden Wintertemperaturen um 10°C nur minimale Einbußen 
                von 5-10% zu erwarten sind.
              </p>
            </div>
          </section>

          {/* Section 2: Test Results */}
          <section id="testergebnisse" className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center gap-3">
              <Battery className="w-8 h-8 text-blue-600" />
              Aktuelle Testergebnisse 2024
            </h2>
            <div className="prose prose-lg max-w-none text-gray-700 space-y-4 mb-6">
              <p>
                Der ADAC und verschiedene Automobilzeitschriften haben im Winter 2023/2024 umfangreiche Reichweitentests 
                durchgeführt. Die Tests fanden bei Temperaturen zwischen -7°C und +2°C auf deutschen Autobahnen und 
                Landstraßen statt, mit aktivierter Heizung auf komfortable 21°C Innentemperatur.
              </p>
            </div>

            {/* Test Results Table */}
            <div className="bg-white rounded-lg shadow-md overflow-hidden mb-6">
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead className="bg-blue-600 text-white">
                    <tr>
                      <th className="px-6 py-4 text-left font-semibold">Modell</th>
                      <th className="px-6 py-4 text-center font-semibold">Sommer-Reichweite</th>
                      <th className="px-6 py-4 text-center font-semibold">Winter-Reichweite</th>
                      <th className="px-6 py-4 text-center font-semibold">Verlust</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200">
                    <tr className="hover:bg-blue-50 transition-colors">
                      <td className="px-6 py-4 font-medium text-gray-900">Tesla Model 3 Long Range</td>
                      <td className="px-6 py-4 text-center text-gray-700">520 km</td>
                      <td className="px-6 py-4 text-center text-gray-700">380 km</td>
                      <td className="px-6 py-4 text-center font-semibold text-orange-600">-27%</td>
                    </tr>
                    <tr className="hover:bg-blue-50 transition-colors">
                      <td className="px-6 py-4 font-medium text-gray-900">VW ID.4 Pro</td>
                      <td className="px-6 py-4 text-center text-gray-700">420 km</td>
                      <td className="px-6 py-4 text-center text-gray-700">310 km</td>
                      <td className="px-6 py-4 text-center font-semibold text-orange-600">-26%</td>
                    </tr>
                    <tr className="hover:bg-blue-50 transition-colors">
                      <td className="px-6 py-4 font-medium text-gray-900">Hyundai Ioniq 5</td>
                      <td className="px-6 py-4 text-center text-gray-700">450 km</td>
                      <td className="px-6 py-4 text-center text-gray-700">340 km</td>
                      <td className="px-6 py-4 text-center font-semibold text-green-600">-24%</td>
                    </tr>
                    <tr className="hover:bg-blue-50 transition-colors">
                      <td className="px-6 py-4 font-medium text-gray-900">BMW iX xDrive40</td>
                      <td className="px-6 py-4 text-center text-gray-700">410 km</td>
                      <td className="px-6 py-4 text-center text-gray-700">315 km</td>
                      <td className="px-6 py-4 text-center font-semibold text-orange-600">-23%</td>
                    </tr>
                    <tr className="hover:bg-blue-50 transition-colors">
                      <td className="px-6 py-4 font-medium text-gray-900">Mercedes EQE 350+</td>
                      <td className="px-6 py-4 text-center text-gray-700">545 km</td>
                      <td className="px-6 py-4 text-center text-gray-700">420 km</td>
                      <td className="px-6 py-4 text-center font-semibold text-green-600">-23%</td>
                    </tr>
                    <tr className="hover:bg-blue-50 transition-colors">
                      <td className="px-6 py-4 font-medium text-gray-900">Audi Q4 e-tron 40</td>
                      <td className="px-6 py-4 text-center text-gray-700">415 km</td>
                      <td className="px-6 py-4 text-center text-gray-700">295 km</td>
                      <td className="px-6 py-4 text-center font-semibold text-orange-600">-29%</td>
                    </tr>
                    <tr className="hover:bg-blue-50 transition-colors">
                      <td className="px-6 py-4 font-medium text-gray-900">Kia EV6</td>
                      <td className="px-6 py-4 text-center text-gray-700">435 km</td>
                      <td className="px-6 py-4 text-center text-gray-700">335 km</td>
                      <td className="px-6 py-4 text-center font-semibold text-green-600">-23%</td>
                    </tr>
                    <tr className="hover:bg-blue-50 transition-colors">
                      <td className="px-6 py-4 font-medium text-gray-900">Renault Megane E-Tech</td>
                      <td className="px-6 py-4 text-center text-gray-700">380 km</td>
                      <td className="px-6 py-4 text-center text-gray-700">270 km</td>
                      <td className="px-6 py-4 text-center font-semibold text-red-600">-29%</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            <div className="bg-blue-50 border-l-4 border-blue-600 p-6 rounded-r-lg">
              <p className="text-gray-700">
                <strong>Testbedingungen:</strong> Alle Tests wurden bei Außentemperaturen zwischen -7°C und +2°C durchgeführt, 
                mit Heizung auf 21°C, realistischem Fahrmix aus 60% Autobahn (130 km/h), 30% Landstraße und 10% Stadt. 
                Die Fahrzeuge starteten mit warmer Batterie nach mindestens 2 Stunden Standzeit bei Kälte.
              </p>
            </div>
          </section>

          {/* Section 3: Factors */}
          <section id="faktoren" className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center gap-3">
              <Snowflake className="w-8 h-8 text-blue-600" />
              Einflussfaktoren auf die Winterreichweite
            </h2>
            <div className="prose prose-lg max-w-none text-gray-700 space-y-4 mb-6">
              <p>
                Der Reichweitenverlust im Winter entsteht durch eine Kombination verschiedener Faktoren, die sich gegenseitig 
                verstärken können. Das Verständnis dieser Faktoren hilft, die Reichweite zu optimieren.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              {/* Factor 1 */}
              <div className="bg-white rounded-lg shadow-md p-6 border-l-4 border-blue-600">
                <div className="flex items-start gap-4 mb-4">
                  <div className="bg-blue-100 p-3 rounded-lg">
                    <Thermometer className="w-6 h-6 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">Kalte Batterie</h3>
                    <p className="text-gray-700">
                      Lithium-Ionen-Batterien arbeiten bei niedrigen Temperaturen weniger effizient. Der Innenwiderstand 
                      steigt, was zu höheren Energieverlusten führt. Verlust: <strong>5-10%</strong>
                    </p>
                  </div>
                </div>
              </div>

              {/* Factor 2 */}
              <div className="bg-white rounded-lg shadow-md p-6 border-l-4 border-orange-600">
                <div className="flex items-start gap-4 mb-4">
                  <div className="bg-orange-100 p-3 rounded-lg">
                    <Zap className="w-6 h-6 text-orange-600" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">Heizung</h3>
                    <p className="text-gray-700">
                      Die Innenraumheizung ist der größte Energieverbraucher im Winter. Eine elektrische Heizung 
                      benötigt 3-5 kW Dauerleistung. Verlust: <strong>10-20%</strong>
                    </p>
                  </div>
                </div>
              </div>

              {/* Factor 3 */}
              <div className="bg-white rounded-lg shadow-md p-6 border-l-4 border-cyan-600">
                <div className="flex items-start gap-4 mb-4">
                  <div className="bg-cyan-100 p-3 rounded-lg">
                    <Wind className="w-6 h-6 text-cyan-600" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">Luftdichte</h3>
                    <p className="text-gray-700">
                      Kalte Luft ist dichter und erhöht den Luftwiderstand. Bei Autobahnfahrten macht sich dies 
                      besonders bemerkbar. Verlust: <strong>3-5%</strong>
                    </p>
                  </div>
                </div>
              </div>

              {/* Factor 4 */}
              <div className="bg-white rounded-lg shadow-md p-6 border-l-4 border-purple-600">
                <div className="flex items-start gap-4 mb-4">
                  <div className="bg-purple-100 p-3 rounded-lg">
                    <Car className="w-6 h-6 text-purple-600" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">Rollwiderstand</h3>
                    <p className="text-gray-700">
                      Kalte Reifen und höherer Reifendruck bei niedrigen Temperaturen erhöhen den Rollwiderstand. 
                      Verlust: <strong>2-4%</strong>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Section 4: Temperature Impact */}
          <section id="temperatur" className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center gap-3">
              <Thermometer className="w-8 h-8 text-blue-600" />
              Temperatur und Reichweite
            </h2>
            <div className="prose prose-lg max-w-none text-gray-700 space-y-4 mb-6">
              <p>
                Die Außentemperatur hat den größten Einfluss auf die Reichweite. Tests zeigen einen nahezu linearen 
                Zusammenhang zwischen Temperatur und Reichweitenverlust im Bereich von -15°C bis +5°C.
              </p>
            </div>

            <div className="bg-white rounded-lg shadow-md p-6 mb-6">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Reichweite nach Temperatur</h3>
              <div className="space-y-3">
                <div className="flex items-center gap-4">
                  <div className="w-32 font-semibold text-gray-700">+20°C</div>
                  <div className="flex-1 bg-gray-200 rounded-full h-8 overflow-hidden">
                    <div className="bg-green-500 h-full flex items-center justify-end pr-3 text-white font-semibold" style={{width: '100%'}}>
                      100%
                    </div>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-32 font-semibold text-gray-700">+10°C</div>
                  <div className="flex-1 bg-gray-200 rounded-full h-8 overflow-hidden">
                    <div className="bg-green-400 h-full flex items-center justify-end pr-3 text-white font-semibold" style={{width: '92%'}}>
                      92%
                    </div>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-32 font-semibold text-gray-700">+5°C</div>
                  <div className="flex-1 bg-gray-200 rounded-full h-8 overflow-hidden">
                    <div className="bg-yellow-400 h-full flex items-center justify-end pr-3 text-white font-semibold" style={{width: '85%'}}>
                      85%
                    </div>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-32 font-semibold text-gray-700">0°C</div>
                  <div className="flex-1 bg-gray-200 rounded-full h-8 overflow-hidden">
                    <div className="bg-orange-400 h-full flex items-center justify-end pr-3 text-white font-semibold" style={{width: '78%'}}>
                      78%
                    </div>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-32 font-semibold text-gray-700">-5°C</div>
                  <div className="flex-1 bg-gray-200 rounded-full h-8 overflow-hidden">
                    <div className="bg-orange-500 h-full flex items-center justify-end pr-3 text-white font-semibold" style={{width: '70%'}}>
                      70%
                    </div>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-32 font-semibold text-gray-700">-10°C</div>
                  <div className="flex-1 bg-gray-200 rounded-full h-8 overflow-hidden">
                    <div className="bg-red-500 h-full flex items-center justify-end pr-3 text-white font-semibold" style={{width: '65%'}}>
                      65%
                    </div>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-32 font-semibold text-gray-700">-15°C</div>
                  <div className="flex-1 bg-gray-200 rounded-full h-8 overflow-hidden">
                    <div className="bg-red-600 h-full flex items-center justify-end pr-3 text-white font-semibold" style={{width: '58%'}}>
                      58%
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-orange-50 border-l-4 border-orange-600 p-6 rounded-r-lg">
              <p className="text-gray-700">
                <strong>Wichtig:</strong> Diese Werte gelten für Fahrten mit aktivierter Heizung auf 21°C. 
                Bei ausgeschalteter Heizung reduziert sich der Reichweitenverlust um etwa 10-15 Prozentpunkte, 
                was jedoch auf längeren Fahrten nicht komfortabel ist.
              </p>
            </div>
          </section>

          {/* Section 5: Heating */}
          <section id="heizung" className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center gap-3">
              <Zap className="w-8 h-8 text-blue-600" />
              Heizung und Verbrauch
            </h2>
            <div className="prose prose-lg max-w-none text-gray-700 space-y-4 mb-6">
              <p>
                Die Heizung ist der größte Einzelverbraucher im Winter. Während Verbrennermotoren die Abwärme des 
                Motors nutzen können, müssen Elektroautos die Heizenergie aus der Batterie ziehen. Der Unterschied 
                zwischen verschiedenen Heizsystemen ist erheblich.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6 mb-6">
              {/* PTC Heater */}
              <div className="bg-white rounded-lg shadow-md p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-4">PTC-Heizung (Klassisch)</h3>
                <div className="space-y-3 text-gray-700">
                  <div className="flex justify-between items-center pb-2 border-b">
                    <span>Leistungsaufnahme:</span>
                    <span className="font-semibold">4-6 kW</span>
                  </div>
                  <div className="flex justify-between items-center pb-2 border-b">
                    <span>Verbrauch pro Stunde:</span>
                    <span className="font-semibold">4-6 kWh</span>
                  </div>
                  <div className="flex justify-between items-center pb-2 border-b">
                    <span>Reichweitenverlust:</span>
                    <span className="font-semibold text-red-600">15-25%</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span>Vorteil:</span>
                    <span className="font-semibold">Günstig</span>
                  </div>
                </div>
              </div>

              {/* Heat Pump */}
              <div className="bg-white rounded-lg shadow-md p-6 border-2 border-green-500">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-xl font-bold text-gray-900">Wärmepumpe</h3>
                  <span className="bg-green-500 text-white px-3 py-1 rounded-full text-sm font-semibold">Empfohlen</span>
                </div>
                <div className="space-y-3 text-gray-700">
                  <div className="flex justify-between items-center pb-2 border-b">
                    <span>Leistungsaufnahme:</span>
                    <span className="font-semibold">2-3 kW</span>
                  </div>
                  <div className="flex justify-between items-center pb-2 border-b">
                    <span>Verbrauch pro Stunde:</span>
                    <span className="font-semibold">2-3 kWh</span>
                  </div>
                  <div className="flex justify-between items-center pb-2 border-b">
                    <span>Reichweitenverlust:</span>
                    <span className="font-semibold text-green-600">8-15%</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span>Vorteil:</span>
                    <span className="font-semibold">Bis 50% effizienter</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-green-50 border-l-4 border-green-600 p-6 rounded-r-lg">
              <h4 className="font-bold text-gray-900 mb-2">Rechenbeispiel:</h4>
              <p className="text-gray-700">
                Bei einer 2-stündigen Autobahnfahrt verbraucht eine PTC-Heizung etwa 10 kWh, eine Wärmepumpe nur 5 kWh. 
                Das entspricht einer zusätzlichen Reichweite von etwa 30-40 km bei einem Durchschnittsverbrauch von 
                18 kWh/100km.
              </p>
            </div>
          </section>

          {/* Section 6: Tips */}
          <section id="tipps" className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center gap-3">
              <Shield className="w-8 h-8 text-blue-600" />
              Tipps für maximale Winterreichweite
            </h2>
            <div className="prose prose-lg max-w-none text-gray-700 space-y-4 mb-6">
              <p>
                Mit den richtigen Strategien lässt sich die Winterreichweite deutlich verbessern. Diese Tipps stammen 
                aus Praxistests und können den Reichweitenverlust um 5-10 Prozentpunkte reduzieren.
              </p>
            </div>

            <div className="space-y-4">
              {/* Tip 1 */}
              <div className="bg-white rounded-lg shadow-md p-6 border-l-4 border-blue-600">
                <div className="flex items-start gap-4">
                  <div className="bg-blue-100 p-3 rounded-lg flex-shrink-0">
                    <Clock className="w-6 h-6 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">1. Vorkonditionierung nutzen</h3>
                    <p className="text-gray-700 mb-3">
                      Heizen Sie das Fahrzeug während des Ladevorgangs vor. Das spart 3-5 kWh pro Fahrt und die 
                      Batterie startet warm, was die Effizienz erhöht.
                    </p>
                    <div className="bg-blue-50 p-3 rounded">
                      <p className="text-sm text-gray-700">
                        <strong>Einsparung:</strong> Bis zu 30 km zusätzliche Reichweite
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Tip 2 */}
              <div className="bg-white rounded-lg shadow-md p-6 border-l-4 border-green-600">
                <div className="flex items-start gap-4">
                  <div className="bg-green-100 p-3 rounded-lg flex-shrink-0">
                    <Thermometer className="w-6 h-6 text-green-600" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">2. Sitzheizung statt Luftheizung</h3>
                    <p className="text-gray-700 mb-3">
                      Nutzen Sie primär Sitz- und Lenkradheizung. Diese verbrauchen nur 100-200 Watt statt 4-5 kW 
                      und sorgen für schnelle Wärme.
                    </p>
                    <div className="bg-green-50 p-3 rounded">
                      <p className="text-sm text-gray-700">
                        <strong>Einsparung:</strong> 2-3 kWh pro Stunde Fahrzeit
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Tip 3 */}
              <div className="bg-white rounded-lg shadow-md p-6 border-l-4 border-orange-600">
                <div className="flex items-start gap-4">
                  <div className="bg-orange-100 p-3 rounded-lg flex-shrink-0">
                    <Battery className="w-6 h-6 text-orange-600" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">3. Eco-Modus aktivieren</h3>
                    <p className="text-gray-700 mb-3">
                      Der Eco-Modus begrenzt die Heizleistung und optimiert die Rekuperation. Die Innentemperatur 
                      wird auf 19-20°C begrenzt.
                    </p>
                    <div className="bg-orange-50 p-3 rounded">
                      <p className="text-sm text-gray-700">
                        <strong>Einsparung:</strong> 5-10% Reichweite
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Tip 4 */}
              <div className="bg-white rounded-lg shadow-md p-6 border-l-4 border-purple-600">
                <div className="flex items-start gap-4">
                  <div className="bg-purple-100 p-3 rounded-lg flex-shrink-0">
                    <Car className="w-6 h-6 text-purple-600" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">4. Geschwindigkeit reduzieren</h3>
                    <p className="text-gray-700 mb-3">
                      Auf der Autobahn 110 km/h statt 130 km/h fahren. Der Luftwiderstand sinkt überproportional 
                      und die Heizung muss weniger leisten.
                    </p>
                    <div className="bg-purple-50 p-3 rounded">
                      <p className="text-sm text-gray-700">
                        <strong>Einsparung:</strong> 15-20% Verbrauch bei Autobahnfahrten
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Tip 5 */}
              <div className="bg-white rounded-lg shadow-md p-6 border-l-4 border-cyan-600">
                <div className="flex items-start gap-4">
                  <div className="bg-cyan-100 p-3 rounded-lg flex-shrink-0">
                    <Snowflake className="w-6 h-6 text-cyan-600" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">5. Garage nutzen</h3>
                    <p className="text-gray-700 mb-3">
                      Parken Sie das Fahrzeug wenn möglich in einer Garage. Selbst ungeheizte Garagen haben 5-10°C 
                      höhere Temperaturen als im Freien.
                    </p>
                    <div className="bg-cyan-50 p-3 rounded">
                      <p className="text-sm text-gray-700">
                        <strong>Einsparung:</strong> 3-5% Reichweite durch wärmere Starttemperatur
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Tip 6 */}
              <div className="bg-white rounded-lg shadow-md p-6 border-l-4 border-red-600">
                <div className="flex items-start gap-4">
                  <div className="bg-red-100 p-3 rounded-lg flex-shrink-0">
                    <Zap className="w-6 h-6 text-red-600" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">6. Ladestrategie anpassen</h3>
                    <p className="text-gray-700 mb-3">
                      Laden Sie häufiger, aber dafür kürzer. Bei kalten Temperaturen ist es besser, den Akku 
                      zwischen 20-80% zu halten als komplett zu entladen.
                    </p>
                    <div className="bg-red-50 p-3 rounded">
                      <p className="text-sm text-gray-700">
                        <strong>Vorteil:</strong> Schont die Batterie und ermöglicht Vorkonditionierung
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-6 bg-gradient-to-r from-blue-50 to-cyan-50 border border-blue-200 rounded-lg p-6">
              <h4 className="font-bold text-gray-900 mb-3 flex items-center gap-2">
                <Shield className="w-5 h-5 text-blue-600" />
                Kombination mehrerer Tipps
              </h4>
              <p className="text-gray-700">
                Durch die Kombination von Vorkonditionierung, Sitzheizung und moderater Geschwindigkeit lässt sich 
                der Reichweitenverlust von typischen 30% auf unter 20% reduzieren. Das entspricht bei einem Fahrzeug 
                mit 400 km Sommerreichweite einem Unterschied von 40 km zusätzlicher Winterreichweite.
              </p>
            </div>
          </section>

          {/* Section 7: Best Models */}
          <section id="modelle" className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center gap-3">
              <Car className="w-8 h-8 text-blue-600" />
              Welche Modelle schneiden am besten ab?
            </h2>
            <div className="prose prose-lg max-w-none text-gray-700 space-y-4 mb-6">
              <p>
                Nicht alle Elektroautos verlieren im Winter gleich viel Reichweite. Modelle mit Wärmepumpe, guter 
                Isolation und effizienter Batterie-Temperierung schneiden deutlich besser ab.
              </p>
            </div>

            <div className="space-y-4">
              {/* Top Performer 1 */}
              <div className="bg-white rounded-lg shadow-md p-6 border-2 border-green-500">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-xl font-bold text-gray-900">Mercedes EQS / EQE</h3>
                  <span className="bg-green-500 text-white px-3 py-1 rounded-full text-sm font-semibold">Top</span>
                </div>
                <div className="grid md:grid-cols-3 gap-4 mb-4">
                  <div className="text-center">
                    <div className="text-3xl font-bold text-green-600">-18%</div>
                    <div className="text-sm text-gray-600">Reichweitenverlust</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-blue-600">✓</div>
                    <div className="text-sm text-gray-600">Wärmepumpe Serie</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-purple-600">A+</div>
                    <div className="text-sm text-gray-600">Isolation</div>
                  </div>
                </div>
                <p className="text-gray-700">
                  Hervorragende Isolation, effiziente Wärmepumpe und große Batteriekapazität machen die Mercedes 
                  EQ-Modelle zu den Winterkönigen.
                </p>
              </div>

              {/* Top Performer 2 */}
              <div className="bg-white rounded-lg shadow-md p-6 border-2 border-green-400">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-xl font-bold text-gray-900">BMW iX / i4</h3>
                  <span className="bg-green-400 text-white px-3 py-1 rounded-full text-sm font-semibold">Top</span>
                </div>
                <div className="grid md:grid-cols-3 gap-4 mb-4">
                  <div className="text-center">
                    <div className="text-3xl font-bold text-green-600">-20%</div>
                    <div className="text-sm text-gray-600">Reichweitenverlust</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-blue-600">✓</div>
                    <div className="text-sm text-gray-600">Wärmepumpe Serie</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-purple-600">A</div>
                    <div className="text-sm text-gray-600">Isolation</div>
                  </div>
                </div>
                <p className="text-gray-700">
                  BMW setzt auf effiziente Wärmepumpen-Technologie und intelligentes Thermomanagement der Batterie.
                </p>
              </div>

              {/* Good Performer */}
              <div className="bg-white rounded-lg shadow-md p-6 border-l-4 border-blue-600">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Hyundai Ioniq 5/6 & Kia EV6</h3>
                <div className="grid md:grid-cols-3 gap-4 mb-4">
                  <div className="text-center">
                    <div className="text-3xl font-bold text-blue-600">-23%</div>
                    <div className="text-sm text-gray-600">Reichweitenverlust</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-blue-600">✓</div>
                    <div className="text-sm text-gray-600">Wärmepumpe optional</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-purple-600">B+</div>
                    <div className="text-sm text-gray-600">Isolation</div>
                  </div>
                </div>
                <p className="text-gray-700">
                  Die 800V-Architektur ermöglicht schnelles Nachladen. Mit Wärmepumpe gehören sie zu den effizientesten 
                  Modellen ihrer Klasse.
                </p>
              </div>

              {/* Average Performer */}
              <div className="bg-white rounded-lg shadow-md p-6 border-l-4 border-yellow-600">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Tesla Model 3 / Model Y</h3>
                <div className="grid md:grid-cols-3 gap-4 mb-4">
                  <div className="text-center">
                    <div className="text-3xl font-bold text-yellow-600">-27%</div>
                    <div className="text-sm text-gray-600">Reichweitenverlust</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-blue-600">✓</div>
                    <div className="text-sm text-gray-600">Wärmepumpe ab 2021</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-purple-600">B</div>
                    <div className="text-sm text-gray-600">Isolation</div>
                  </div>
                </div>
                <p className="text-gray-700">
                  Neuere Modelle mit Wärmepumpe schneiden besser ab. Die große Reichweite im Sommer gleicht 
                  Winterverluste teilweise aus.
                </p>
              </div>
            </div>

            <div className="mt-6 bg-blue-50 border-l-4 border-blue-600 p-6 rounded-r-lg">
              <h4 className="font-bold text-gray-900 mb-2">Kaufempfehlung für Vielfahrer im Winter:</h4>
              <p className="text-gray-700">
                Wenn Sie häufig im Winter längere Strecken fahren, sollten Sie gezielt nach Modellen mit 
                serienmäßiger Wärmepumpe suchen. Der Aufpreis von 1.000-2.000 Euro amortisiert sich durch die 
                geringeren Reichweitenverluste bereits nach 2-3 Wintern.
              </p>
            </div>
          </section>

          {/* Section 8: Conclusion */}
          <section id="fazit" className="mb-8">
            <div className="bg-gradient-to-r from-blue-600 to-cyan-600 rounded-xl p-6 md:p-8 text-white">
              <h2 className="text-2xl md:text-3xl font-bold mb-4">
                Fazit: Winter mit dem Elektroauto ist planbar
              </h2>
              <p className="text-base md:text-lg leading-relaxed mb-4">
                <strong>Ja, Elektroautos verlieren im Winter Reichweite</strong> – aber das ist kein Grund zur Sorge, wenn man sich 
                darauf einstellt. Mit durchschnittlich 20-30% Reichweitenverlust müssen E-Auto-Fahrer rechnen, aber 
                durch clevere Strategien lässt sich dieser Verlust auf 15-20% reduzieren.
              </p>
              <p className="text-base md:text-lg leading-relaxed mb-4">
                Die wichtigsten Erkenntnisse aus den aktuellen Tests: Wärmepumpen machen einen erheblichen Unterschied, 
                Vorkonditionierung während des Ladens spart wertvolle Energie, und moderne Fahrzeuge mit guter Isolation 
                schneiden deutlich besser ab als ältere Modelle.
              </p>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
                <p className="text-lg font-semibold">
                  <strong>Unser Tipp:</strong> Kalkulieren Sie im Winter mit 70% der WLTP-Reichweite bei Autobahnfahrten und mit 80-85% 
                  bei gemischter Fahrweise. So sind Sie auf der sicheren Seite und vermeiden Reichweitenangst. Für die meisten Alltagsfahrten 
                  spielt der Reichweitenverlust keine Rolle.
                </p>
              </div>
            </div>
          </section>

          {/* Related Articles */}
          <div className="mt-12 bg-gray-50 rounded-lg p-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Weitere hilfreiche Artikel</h3>
            <div className="grid md:grid-cols-3 gap-6">
              <a href="/ratgeber/effiziente-elektroautos" className="bg-white rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow">
                <Battery className="w-8 h-8 text-blue-600 mb-3" />
                <h4 className="font-bold text-gray-900 mb-2">Effizienteste E-Autos</h4>
                <p className="text-gray-600 text-sm">Die sparsamsten Elektroautos mit maximaler Reichweite</p>
              </a>
              <a href="/rechner/gebrauchtwagenbatterierechner" className="bg-white rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow">
                <Shield className="w-8 h-8 text-blue-600 mb-3" />
                <h4 className="font-bold text-gray-900 mb-2">Batterie-Check</h4>
                <p className="text-gray-600 text-sm">Gesundheit der Batterie überprüfen</p>
              </a>
              <a href="/ratgeber/gebrauchtwagen" className="bg-white rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow">
                <Zap className="w-8 h-8 text-blue-600 mb-3" />
                <h4 className="font-bold text-gray-900 mb-2">Gebrauchtwagen kaufen</h4>
                <p className="text-gray-600 text-sm">Worauf beim Kauf eines gebrauchten E-Autos achten</p>
              </a>
            </div>
          </div>

          </div>
        </article>
      </div>
    </div>
  );
};

export default ElektroautoReichweiteWinterTest;