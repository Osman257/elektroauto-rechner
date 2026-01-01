import React, { useEffect } from 'react';
import SEO from '../components/SEO';
import Header from '../components/Header';
import { 
  ArrowLeft,
  Zap,
  MapPin,
  Building2,
  Car,
  Smartphone,
  ShoppingCart,
  Briefcase,
  Clock,
  Euro,
  AlertCircle,
  CheckCircle,
  Calculator,
  Lightbulb,
  Battery,
  Scale,
  CreditCard,
  Home
} from 'lucide-react';

export default function LadenOhneWallboxPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-white">
      <SEO 
        title="Laden ohne Wallbox 2025: Alternativen für Mieter | e-Autowelt"
        description="E-Auto laden ohne Wallbox? Alle Alternativen für Mieter: 180.000 öffentliche Ladepunkte, mobile Wallboxen ab 600€, Supermarkt-Laden ab 29 Ct/kWh. Jetzt informieren!"
        keywords="elektroauto laden ohne wallbox, e-auto mieter laden, öffentliche ladestation, mobile wallbox, laden supermarkt, wemog mieter recht wallbox"
        canonicalPath="/ratgeber/laden-ohne-wallbox-mieter"
        ogImage="/images/ratgeber/laden-ohne-wallbox-hero.webp"
        ogType="article"
        publishedDate="2025-12-30T12:00:00Z"
        modifiedDate="2025-12-30T12:00:00Z"
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
          <div className="relative h-64 md:h-96 bg-gradient-to-br from-blue-600 to-cyan-600 overflow-hidden">
            <img 
              src="/images/ratgeber/laden-ohne-wallbox-hero.webp"
              alt="Elektroauto an öffentlicher Ladesäule - Alternativen für Mieter ohne eigene Wallbox"
              className="w-full h-full object-cover opacity-90"
              loading="lazy"
              width="1200"
              height="600"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
            <div className="absolute bottom-0 left-0 right-0 p-6 md:p-10 text-white">
              <div className="flex flex-wrap items-center gap-3 mb-3">
                <div className="bg-white/30 backdrop-blur-md p-2 rounded-lg shadow-lg">
                  <MapPin className="w-6 h-6 md:w-8 md:h-8" />
                </div>
                <span className="text-xs md:text-sm bg-white/30 backdrop-blur-md px-3 py-1 rounded-full font-semibold shadow-lg">
                  📖 14 Min. Lesezeit
                </span>
                <span className="text-xs md:text-sm bg-white/30 backdrop-blur-md px-3 py-1 rounded-full font-semibold shadow-lg">
                  Aktualisiert am 30. Dezember 2025
                </span>
              </div>
              <h1 className="text-2xl md:text-4xl lg:text-5xl font-bold leading-tight">
                Laden ohne eigene Wallbox: Alternativen für Mieter
              </h1>
            </div>
          </div>

          <div className="p-6 md:p-10">
            {/* Intro */}
            <div className="mb-8 md:mb-12">
              <p className="text-lg md:text-xl text-gray-600 leading-relaxed mb-4">
                Keine eigene Garage? Vermieter blockiert die Wallbox? Für viele Mieter scheint ein <strong>Elektroauto</strong> damit unmöglich. Doch die Realität sieht anders aus: Mit über <strong>180.000 öffentlichen Ladepunkten</strong> in Deutschland, günstigen Supermarkt-Ladern und cleveren mobilen Lösungen ist das E-Auto auch ohne eigene Wallbox alltagstauglich.
              </p>
              <div className="bg-blue-50 border-2 border-blue-200 rounded-xl p-6">
                <p className="text-base md:text-lg text-gray-700 leading-relaxed">
                  <strong className="text-blue-700">⚡ Schnell-Überblick:</strong> Deutschland hat aktuell <strong>180.000 öffentliche Ladepunkte</strong> – 34% mehr Schnelllader als im Vorjahr. Beim Supermarkt laden Sie ab <strong>29 Ct/kWh</strong> (günstiger als Haushaltsstrom!). Mobile Wallboxen gibt es ab <strong>600€</strong>. Und: Seit dem WEMoG 2020 haben Mieter ein <strong>Recht auf Wallbox-Installation</strong> – der Vermieter darf nur in Ausnahmefällen ablehnen!
                </p>
              </div>
            </div>

            {/* Inhaltsverzeichnis */}
            <nav className="bg-gray-50 rounded-xl p-6 mb-8 md:mb-12">
              <h2 className="text-xl md:text-2xl font-bold text-gray-800 mb-4">
                Inhaltsverzeichnis
              </h2>
              <ol className="space-y-2 text-sm md:text-base">
                <li><a href="#ladeinfrastruktur" className="text-blue-600 hover:underline">1. Öffentliche Ladeinfrastruktur in Deutschland</a></li>
                <li><a href="#supermarkt-laden" className="text-blue-600 hover:underline">2. Laden beim Supermarkt: Lidl, Aldi, Kaufland</a></li>
                <li><a href="#mobile-wallbox" className="text-blue-600 hover:underline">3. Mobile Wallbox: Die flexible Lösung</a></li>
                <li><a href="#arbeitgeber" className="text-blue-600 hover:underline">4. Laden beim Arbeitgeber</a></li>
                <li><a href="#ladetarife" className="text-blue-600 hover:underline">5. Ladetarife und Ladekarten im Vergleich</a></li>
                <li><a href="#recht-wallbox" className="text-blue-600 hover:underline">6. Ihr Recht auf eine Wallbox (WEMoG)</a></li>
                <li><a href="#kostenvergleich" className="text-blue-600 hover:underline">7. Kostenvergleich: Öffentlich vs. Zuhause</a></li>
                <li><a href="#tipps" className="text-blue-600 hover:underline">8. 5 Praxis-Tipps für Mieter</a></li>
                <li><a href="#fazit" className="text-blue-600 hover:underline">9. Fazit</a></li>
              </ol>
            </nav>

            {/* Section 1: Öffentliche Ladeinfrastruktur */}
            <section id="ladeinfrastruktur" className="mb-12 scroll-mt-24">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                1. Öffentliche Ladeinfrastruktur in Deutschland
              </h2>
              
              <div className="bg-emerald-50 border-l-4 border-emerald-500 p-6 mb-6">
                <div className="flex items-start">
                  <Zap className="w-6 h-6 text-emerald-600 mr-3 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-bold text-lg text-gray-900 mb-2">Rasanter Ausbau</h3>
                    <p className="text-gray-700">Stand November 2025: <strong>139.285 Normalladepunkte</strong> und <strong>45.321 Schnellladepunkte</strong> laut Bundesnetzagentur – mit einer Gesamtleistung von 7,57 GW.</p>
                  </div>
                </div>
              </div>

              <p className="text-gray-700 mb-4 leading-relaxed">
                Die Zeiten, in denen öffentliche Ladesäulen Mangelware waren, sind vorbei. Deutschland hat in den letzten Jahren massiv in die <strong>Ladeinfrastruktur</strong> investiert. Besonders der Ausbau der Schnelllader schreitet voran: Die Zahl der DC-Ladepunkte stieg innerhalb eines Jahres um <strong>34%</strong>.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
                <div className="bg-white p-6 rounded-lg border-2 border-blue-500 shadow-sm">
                  <div className="text-sm text-gray-600 mb-1">Ladepunkte gesamt</div>
                  <div className="text-3xl font-bold text-blue-600">~185.000</div>
                  <div className="text-xs text-gray-500 mt-1">Stand November 2025</div>
                </div>
                <div className="bg-white p-6 rounded-lg border-2 border-emerald-500 shadow-sm">
                  <div className="text-sm text-gray-600 mb-1">Schnellladepunkte</div>
                  <div className="text-3xl font-bold text-emerald-600">45.000+</div>
                  <div className="text-xs text-gray-500 mt-1">+34% zum Vorjahr</div>
                </div>
                <div className="bg-white p-6 rounded-lg border-2 border-purple-500 shadow-sm">
                  <div className="text-sm text-gray-600 mb-1">Gesamtleistung</div>
                  <div className="text-3xl font-bold text-purple-600">7,57 GW</div>
                  <div className="text-xs text-gray-500 mt-1">+29% zum Vorjahr</div>
                </div>
              </div>

              <p className="text-gray-700 mb-4 leading-relaxed">
                Besonders in Städten ist die Versorgung gut: Die nächste Ladesäule ist im Schnitt <strong>näher als die nächste Tankstelle</strong>. Die größten Betreiber sind EnBW (9.300+ Ladepunkte), E.ON (4.500+), Tesla (3.200+) und EWE Go (2.700+).
              </p>

              <h3 className="text-xl font-bold text-gray-800 mb-4 mt-8">Ladearten im Überblick</h3>
              
              <div className="overflow-x-auto mb-6">
                <table className="w-full border-collapse">
                  <thead>
                    <tr className="bg-gray-100">
                      <th className="border border-gray-300 px-4 py-3 text-left font-semibold">Ladeart</th>
                      <th className="border border-gray-300 px-4 py-3 text-left font-semibold">Leistung</th>
                      <th className="border border-gray-300 px-4 py-3 text-left font-semibold">Ladezeit (60 kWh)</th>
                      <th className="border border-gray-300 px-4 py-3 text-left font-semibold">Typischer Einsatz</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="border border-gray-300 px-4 py-3">AC (Normalladung)</td>
                      <td className="border border-gray-300 px-4 py-3">11-22 kW</td>
                      <td className="border border-gray-300 px-4 py-3">3-6 Stunden</td>
                      <td className="border border-gray-300 px-4 py-3">Parkplätze, Straßenlatern</td>
                    </tr>
                    <tr className="bg-gray-50">
                      <td className="border border-gray-300 px-4 py-3">DC (Schnellladung)</td>
                      <td className="border border-gray-300 px-4 py-3">50-100 kW</td>
                      <td className="border border-gray-300 px-4 py-3">40-70 Min.</td>
                      <td className="border border-gray-300 px-4 py-3">Supermärkte, Tankstellen</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 px-4 py-3">HPC (Ultraschnell)</td>
                      <td className="border border-gray-300 px-4 py-3">150-350 kW</td>
                      <td className="border border-gray-300 px-4 py-3">15-25 Min.</td>
                      <td className="border border-gray-300 px-4 py-3">Autobahn, Ladeparks</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            {/* Section 2: Supermarkt-Laden */}
            <section id="supermarkt-laden" className="mb-12 scroll-mt-24">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                2. Laden beim Supermarkt: Lidl, Aldi, Kaufland
              </h2>

              <div className="bg-emerald-50 border-l-4 border-emerald-500 p-6 mb-6">
                <div className="flex items-start">
                  <ShoppingCart className="w-6 h-6 text-emerald-600 mr-3 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-bold text-lg text-gray-900 mb-2">Günstiger als zuhause!</h3>
                    <p className="text-gray-700">Mit <strong>29 Ct/kWh</strong> für AC-Laden ist der Strom bei Lidl, Kaufland und Aldi günstiger als der durchschnittliche Haushaltsstrom (ca. 33 Ct/kWh).</p>
                  </div>
                </div>
              </div>

              <p className="text-gray-700 mb-4 leading-relaxed">
                Discounter haben sich zu den <strong>günstigsten Ladestationen</strong> in Deutschland entwickelt. Die Schwarz-Gruppe (Lidl/Kaufland) betreibt über 15.000 Ladepunkte, Aldi Süd über 3.200. Das Konzept ist einfach: Während Sie einkaufen, lädt Ihr Auto – oft günstiger als an der heimischen Wallbox!
              </p>

              <h3 className="text-xl font-bold text-gray-800 mb-4">Aktuelle Preise (Stand: Dezember 2025)</h3>
              
              <div className="overflow-x-auto mb-6">
                <table className="w-full border-collapse">
                  <thead>
                    <tr className="bg-gray-100">
                      <th className="border border-gray-300 px-4 py-3 text-left font-semibold">Anbieter</th>
                      <th className="border border-gray-300 px-4 py-3 text-left font-semibold">AC (≤22 kW)</th>
                      <th className="border border-gray-300 px-4 py-3 text-left font-semibold">DC (≤50 kW)</th>
                      <th className="border border-gray-300 px-4 py-3 text-left font-semibold">HPC (≥150 kW)</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="border border-gray-300 px-4 py-3 font-semibold">Lidl</td>
                      <td className="border border-gray-300 px-4 py-3 text-emerald-600 font-bold">0,29 €</td>
                      <td className="border border-gray-300 px-4 py-3">0,44 €</td>
                      <td className="border border-gray-300 px-4 py-3">0,47 €</td>
                    </tr>
                    <tr className="bg-gray-50">
                      <td className="border border-gray-300 px-4 py-3 font-semibold">Kaufland</td>
                      <td className="border border-gray-300 px-4 py-3 text-emerald-600 font-bold">0,29 €</td>
                      <td className="border border-gray-300 px-4 py-3">0,44 €</td>
                      <td className="border border-gray-300 px-4 py-3">0,47 €</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 px-4 py-3 font-semibold">Aldi Süd</td>
                      <td className="border border-gray-300 px-4 py-3 text-emerald-600 font-bold">0,29 €</td>
                      <td className="border border-gray-300 px-4 py-3">0,44 €</td>
                      <td className="border border-gray-300 px-4 py-3">0,47 €</td>
                    </tr>
                    <tr className="bg-gray-50">
                      <td className="border border-gray-300 px-4 py-3 font-semibold">IKEA</td>
                      <td className="border border-gray-300 px-4 py-3">0,49 €</td>
                      <td className="border border-gray-300 px-4 py-3">0,57 €</td>
                      <td className="border border-gray-300 px-4 py-3">0,69 €</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <div className="bg-yellow-50 border-l-4 border-yellow-500 p-6 mb-6">
                <div className="flex items-start">
                  <AlertCircle className="w-6 h-6 text-yellow-600 mr-3 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-bold text-lg text-gray-900 mb-2">Wichtig zu wissen</h3>
                    <p className="text-gray-700">Für Lidl und Kaufland benötigen Sie die jeweilige App mit hinterlegtem Bankkonto. Bei Aldi Süd funktioniert auch Girocard, Kreditkarte und Apple/Google Pay direkt an der Säule.</p>
                  </div>
                </div>
              </div>

              <p className="text-gray-700 mb-4 leading-relaxed">
                <strong>Rechenbeispiel:</strong> Für 100 km (ca. 20 kWh) zahlen Sie beim Schnellladen bei Aldi nur <strong>8,80€</strong>. Zum Vergleich: An vielen öffentlichen Säulen kostet das mit 52-60 Ct/kWh zwischen 10,40€ und 12€.
              </p>
            </section>

            {/* Section 3: Mobile Wallbox */}
            <section id="mobile-wallbox" className="mb-12 scroll-mt-24">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                3. Mobile Wallbox: Die flexible Lösung
              </h2>

              <div className="bg-blue-50 border-l-4 border-blue-500 p-6 mb-6">
                <div className="flex items-start">
                  <Car className="w-6 h-6 text-blue-600 mr-3 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-bold text-lg text-gray-900 mb-2">Was ist eine mobile Wallbox?</h3>
                    <p className="text-gray-700">Ein tragbares Ladegerät, das an verschiedene Steckdosen angeschlossen werden kann – von der normalen Schuko-Dose bis zur CEE-Starkstromdose. Perfekt für Mieter ohne feste Installation!</p>
                  </div>
                </div>
              </div>

              <p className="text-gray-700 mb-4 leading-relaxed">
                Mobile Wallboxen sind die <strong>ideale Lösung für Mieter</strong>: Sie brauchen keine Genehmigung für bauliche Veränderungen, können das Gerät bei Umzug mitnehmen und sind flexibel – ob zuhause an der Starkstromdose, im Urlaub oder beim Arbeitgeber.
              </p>

              <h3 className="text-xl font-bold text-gray-800 mb-4">Die besten mobilen Wallboxen 2025</h3>

              <div className="space-y-4 mb-6">
                <div className="bg-white p-6 rounded-lg border-2 border-emerald-500 shadow-sm">
                  <div className="flex justify-between items-start mb-2">
                    <h4 className="font-bold text-lg text-gray-900">NRGkick 32A</h4>
                    <span className="bg-emerald-100 text-emerald-700 px-3 py-1 rounded-full text-sm font-semibold">Testsieger</span>
                  </div>
                  <p className="text-gray-700 mb-3">Bis zu 22 kW Ladeleistung, patentierte Temperaturüberwachung, App-Steuerung, PV-Überschussladen möglich.</p>
                  <div className="flex flex-wrap gap-4 text-sm">
                    <span className="text-gray-600"><strong>Preis:</strong> ab 1.200€</span>
                    <span className="text-gray-600"><strong>Gewicht:</strong> ~4 kg</span>
                    <span className="text-gray-600"><strong>IP-Schutz:</strong> IP66</span>
                  </div>
                </div>

                <div className="bg-white p-6 rounded-lg border-2 border-blue-500 shadow-sm">
                  <div className="flex justify-between items-start mb-2">
                    <h4 className="font-bold text-lg text-gray-900">Juice Booster 3 air</h4>
                    <span className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-sm font-semibold">ADAC-Testsieger</span>
                  </div>
                  <p className="text-gray-700 mb-3">Kompakt (2 kg), 30+ Adapter verfügbar, überfahrbar bis 3 Tonnen, wasserdicht, -30 bis +50°C einsetzbar.</p>
                  <div className="flex flex-wrap gap-4 text-sm">
                    <span className="text-gray-600"><strong>Preis:</strong> ab 1.100€</span>
                    <span className="text-gray-600"><strong>Gewicht:</strong> ~2 kg</span>
                    <span className="text-gray-600"><strong>Leistung:</strong> bis 11 kW</span>
                  </div>
                </div>

                <div className="bg-white p-6 rounded-lg border-2 border-purple-500 shadow-sm">
                  <div className="flex justify-between items-start mb-2">
                    <h4 className="font-bold text-lg text-gray-900">go-e Charger Gemini flex</h4>
                    <span className="bg-purple-100 text-purple-700 px-3 py-1 rounded-full text-sm font-semibold">Preis-Leistung</span>
                  </div>
                  <p className="text-gray-700 mb-3">Kann auch als feste Wallbox montiert werden, umfangreiche App-Funktionen, PV-Überschussladen, WLAN.</p>
                  <div className="flex flex-wrap gap-4 text-sm">
                    <span className="text-gray-600"><strong>Preis:</strong> ab 600€</span>
                    <span className="text-gray-600"><strong>Leistung:</strong> bis 22 kW</span>
                    <span className="text-gray-600"><strong>IP-Schutz:</strong> IP54</span>
                  </div>
                </div>
              </div>

              <div className="bg-yellow-50 border-l-4 border-yellow-500 p-6 mb-6">
                <div className="flex items-start">
                  <AlertCircle className="w-6 h-6 text-yellow-600 mr-3 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-bold text-lg text-gray-900 mb-2">Anmeldepflicht beachten!</h3>
                    <p className="text-gray-700">Seit Januar 2024 müssen auch mobile Wallboxen beim Netzbetreiber angemeldet werden. 11 kW = anmeldepflichtig, 22 kW = genehmigungspflichtig. Die Anmeldung ist kostenlos und dauert meist nur wenige Tage.</p>
                  </div>
                </div>
              </div>

              <h3 className="text-xl font-bold text-gray-800 mb-4 mt-8">Ladeleistung je nach Steckdose</h3>
              
              <div className="overflow-x-auto mb-6">
                <table className="w-full border-collapse">
                  <thead>
                    <tr className="bg-gray-100">
                      <th className="border border-gray-300 px-4 py-3 text-left font-semibold">Steckdose</th>
                      <th className="border border-gray-300 px-4 py-3 text-left font-semibold">Leistung</th>
                      <th className="border border-gray-300 px-4 py-3 text-left font-semibold">Reichweite/Stunde</th>
                      <th className="border border-gray-300 px-4 py-3 text-left font-semibold">Hinweis</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="border border-gray-300 px-4 py-3">Schuko (230V/10A)</td>
                      <td className="border border-gray-300 px-4 py-3">2,3 kW</td>
                      <td className="border border-gray-300 px-4 py-3">~13 km/h</td>
                      <td className="border border-gray-300 px-4 py-3 text-yellow-600">Nur Notladung!</td>
                    </tr>
                    <tr className="bg-gray-50">
                      <td className="border border-gray-300 px-4 py-3">CEE blau (230V/16A)</td>
                      <td className="border border-gray-300 px-4 py-3">3,7 kW</td>
                      <td className="border border-gray-300 px-4 py-3">~20 km/h</td>
                      <td className="border border-gray-300 px-4 py-3">Camping üblich</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 px-4 py-3">CEE rot 16A (400V)</td>
                      <td className="border border-gray-300 px-4 py-3">11 kW</td>
                      <td className="border border-gray-300 px-4 py-3 text-emerald-600 font-semibold">~60 km/h</td>
                      <td className="border border-gray-300 px-4 py-3 text-emerald-600">Empfohlen!</td>
                    </tr>
                    <tr className="bg-gray-50">
                      <td className="border border-gray-300 px-4 py-3">CEE rot 32A (400V)</td>
                      <td className="border border-gray-300 px-4 py-3">22 kW</td>
                      <td className="border border-gray-300 px-4 py-3 text-emerald-600 font-semibold">~120 km/h</td>
                      <td className="border border-gray-300 px-4 py-3">Genehmigungspflichtig</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            {/* Section 4: Laden beim Arbeitgeber */}
            <section id="arbeitgeber" className="mb-12 scroll-mt-24">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                4. Laden beim Arbeitgeber
              </h2>

              <div className="bg-emerald-50 border-l-4 border-emerald-500 p-6 mb-6">
                <div className="flex items-start">
                  <Briefcase className="w-6 h-6 text-emerald-600 mr-3 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-bold text-lg text-gray-900 mb-2">Steuervorteil nutzen!</h3>
                    <p className="text-gray-700">Arbeitgeber dürfen den Ladestrom für private E-Autos <strong>kostenlos und steuerfrei</strong> zur Verfügung stellen – ein geldwerter Vorteil, der nicht versteuert werden muss!</p>
                  </div>
                </div>
              </div>

              <p className="text-gray-700 mb-4 leading-relaxed">
                Immer mehr Unternehmen stellen <strong>Lademöglichkeiten für Mitarbeiter</strong> bereit – nicht nur aus Umweltgründen, sondern auch als Benefit im Wettbewerb um Fachkräfte. Für Sie als Mieter ist das eine der komfortabelsten Lösungen: Sie fahren morgens zur Arbeit, stecken das Auto an und haben abends einen vollen Akku.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div className="bg-white p-6 rounded-lg border border-gray-200 shadow-sm">
                  <CheckCircle className="w-8 h-8 text-emerald-500 mb-3" />
                  <h4 className="font-bold text-gray-900 mb-2">Vorteile</h4>
                  <ul className="text-gray-700 space-y-2 text-sm">
                    <li>• Laden während der Arbeitszeit</li>
                    <li>• Oft kostenlos oder vergünstigt</li>
                    <li>• Steuerfreier geldwerter Vorteil</li>
                    <li>• Kein Aufwand für Sie</li>
                  </ul>
                </div>
                <div className="bg-white p-6 rounded-lg border border-gray-200 shadow-sm">
                  <AlertCircle className="w-8 h-8 text-yellow-500 mb-3" />
                  <h4 className="font-bold text-gray-900 mb-2">Zu beachten</h4>
                  <ul className="text-gray-700 space-y-2 text-sm">
                    <li>• Verfügbarkeit nicht garantiert</li>
                    <li>• Eventuell begrenzte Ladezeit</li>
                    <li>• Arbeitgeber entscheidet über Konditionen</li>
                    <li>• Bei Jobwechsel entfällt Option</li>
                  </ul>
                </div>
              </div>

              <p className="text-gray-700 mb-4 leading-relaxed">
                <strong>Tipp:</strong> Fragen Sie aktiv bei Ihrem Arbeitgeber nach! Viele Unternehmen planen den Aufbau von Ladeinfrastruktur oder haben bereits Ladesäulen, die noch nicht allen Mitarbeitern bekannt sind.
              </p>
            </section>

            {/* Section 5: Ladetarife */}
            <section id="ladetarife" className="mb-12 scroll-mt-24">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                5. Ladetarife und Ladekarten im Vergleich
              </h2>

              <p className="text-gray-700 mb-4 leading-relaxed">
                Der Ladestrommarkt ist ein <strong>Dschungel aus Tarifen</strong>. Mit der richtigen Ladekarte sparen Sie im Vergleich zum Ad-hoc-Laden (spontanes Laden ohne Vertrag) bis zu <strong>62%</strong> laut ADAC. Hier die wichtigsten Tarife im Überblick:
              </p>

              <div className="overflow-x-auto mb-6">
                <table className="w-full border-collapse text-sm">
                  <thead>
                    <tr className="bg-gray-100">
                      <th className="border border-gray-300 px-3 py-2 text-left font-semibold">Anbieter</th>
                      <th className="border border-gray-300 px-3 py-2 text-left font-semibold">Grundgebühr</th>
                      <th className="border border-gray-300 px-3 py-2 text-left font-semibold">AC-Preis</th>
                      <th className="border border-gray-300 px-3 py-2 text-left font-semibold">DC-Preis</th>
                      <th className="border border-gray-300 px-3 py-2 text-left font-semibold">Besonderheit</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="border border-gray-300 px-3 py-2 font-semibold">EnBW mobility+</td>
                      <td className="border border-gray-300 px-3 py-2">11,99 €/Mon.</td>
                      <td className="border border-gray-300 px-3 py-2">0,39 €</td>
                      <td className="border border-gray-300 px-3 py-2">0,49 €</td>
                      <td className="border border-gray-300 px-3 py-2">Größtes Netz</td>
                    </tr>
                    <tr className="bg-gray-50">
                      <td className="border border-gray-300 px-3 py-2 font-semibold">ADAC e-Charge</td>
                      <td className="border border-gray-300 px-3 py-2 text-emerald-600 font-bold">0 €</td>
                      <td className="border border-gray-300 px-3 py-2">0,55 €</td>
                      <td className="border border-gray-300 px-3 py-2">0,55 €</td>
                      <td className="border border-gray-300 px-3 py-2">Keine Grundgebühr</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 px-3 py-2 font-semibold">Maingau</td>
                      <td className="border border-gray-300 px-3 py-2 text-emerald-600 font-bold">0 €</td>
                      <td className="border border-gray-300 px-3 py-2">0,51 €</td>
                      <td className="border border-gray-300 px-3 py-2">0,56 €</td>
                      <td className="border border-gray-300 px-3 py-2">Gute Abdeckung</td>
                    </tr>
                    <tr className="bg-gray-50">
                      <td className="border border-gray-300 px-3 py-2 font-semibold">Shell Recharge</td>
                      <td className="border border-gray-300 px-3 py-2">5,99 €/Mon.</td>
                      <td className="border border-gray-300 px-3 py-2">0,44 €</td>
                      <td className="border border-gray-300 px-3 py-2">0,49 €</td>
                      <td className="border border-gray-300 px-3 py-2">Dynamische Preise</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 px-3 py-2 font-semibold">Ad-hoc (ohne Karte)</td>
                      <td className="border border-gray-300 px-3 py-2">-</td>
                      <td className="border border-gray-300 px-3 py-2 text-red-600">0,60-0,90 €</td>
                      <td className="border border-gray-300 px-3 py-2 text-red-600">0,70-1,00 €</td>
                      <td className="border border-gray-300 px-3 py-2 text-red-600">Teuer!</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <div className="bg-blue-50 border-l-4 border-blue-500 p-6 mb-6">
                <div className="flex items-start">
                  <Lightbulb className="w-6 h-6 text-blue-600 mr-3 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-bold text-lg text-gray-900 mb-2">Empfehlung für Mieter</h3>
                    <p className="text-gray-700">Besorgen Sie sich <strong>2-3 Ladekarten ohne Grundgebühr</strong> (z.B. ADAC, Maingau, EnBW Basic). So haben Sie maximale Flexibilität bei minimalen Fixkosten und können immer den günstigsten Preis wählen.</p>
                  </div>
                </div>
              </div>
            </section>

            {/* Section 6: Recht auf Wallbox */}
            <section id="recht-wallbox" className="mb-12 scroll-mt-24">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                6. Ihr Recht auf eine Wallbox (WEMoG)
              </h2>

              <div className="bg-emerald-50 border-l-4 border-emerald-500 p-6 mb-6">
                <div className="flex items-start">
                  <Scale className="w-6 h-6 text-emerald-600 mr-3 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-bold text-lg text-gray-900 mb-2">Gesetzlicher Anspruch seit 2020</h3>
                    <p className="text-gray-700">Das <strong>Wohnungseigentumsmodernisierungsgesetz (WEMoG)</strong> gibt Mietern seit Dezember 2020 das Recht, vom Vermieter die Erlaubnis zur Installation einer Wallbox zu verlangen (§554 BGB).</p>
                  </div>
                </div>
              </div>

              <p className="text-gray-700 mb-4 leading-relaxed">
                Viele Mieter wissen es nicht: Sie haben einen <strong>rechtlichen Anspruch</strong> auf die Genehmigung einer Wallbox! Der Vermieter kann nur in begründeten Ausnahmefällen ablehnen – etwa bei Denkmalschutz oder unverhältnismäßig hohen Kosten.
              </p>

              <h3 className="text-xl font-bold text-gray-800 mb-4">So gehen Sie vor:</h3>
              
              <div className="space-y-4 mb-6">
                <div className="flex items-start gap-4 bg-white p-4 rounded-lg border border-gray-200">
                  <div className="bg-blue-100 text-blue-700 w-8 h-8 rounded-full flex items-center justify-center font-bold flex-shrink-0">1</div>
                  <div>
                    <h4 className="font-bold text-gray-900">Informelles Gespräch</h4>
                    <p className="text-gray-700 text-sm">Sprechen Sie Ihren Vermieter an und erklären Sie Ihr Vorhaben. Oft sind Vermieter aufgeschlossener als erwartet – eine Wallbox wertet die Immobilie auf!</p>
                  </div>
                </div>
                <div className="flex items-start gap-4 bg-white p-4 rounded-lg border border-gray-200">
                  <div className="bg-blue-100 text-blue-700 w-8 h-8 rounded-full flex items-center justify-center font-bold flex-shrink-0">2</div>
                  <div>
                    <h4 className="font-bold text-gray-900">Schriftlicher Antrag</h4>
                    <p className="text-gray-700 text-sm">Stellen Sie einen formellen Antrag per E-Mail oder Brief. Beschreiben Sie technische Details, Position und dass die Installation durch einen Fachbetrieb erfolgt.</p>
                  </div>
                </div>
                <div className="flex items-start gap-4 bg-white p-4 rounded-lg border border-gray-200">
                  <div className="bg-blue-100 text-blue-700 w-8 h-8 rounded-full flex items-center justify-center font-bold flex-shrink-0">3</div>
                  <div>
                    <h4 className="font-bold text-gray-900">Kostenübernahme klären</h4>
                    <p className="text-gray-700 text-sm">Grundsätzlich tragen Sie als Mieter die Kosten. Verhandeln Sie aber über eine Kostenbeteiligung des Vermieters – er profitiert durch Wertsteigerung!</p>
                  </div>
                </div>
                <div className="flex items-start gap-4 bg-white p-4 rounded-lg border border-gray-200">
                  <div className="bg-blue-100 text-blue-700 w-8 h-8 rounded-full flex items-center justify-center font-bold flex-shrink-0">4</div>
                  <div>
                    <h4 className="font-bold text-gray-900">Netzbetreiber informieren</h4>
                    <p className="text-gray-700 text-sm">Nach Genehmigung melden Sie die Wallbox beim Netzbetreiber an. Seit Januar 2024 ist dies für alle Wallboxen Pflicht – auch für 11 kW.</p>
                  </div>
                </div>
              </div>

              <div className="bg-yellow-50 border-l-4 border-yellow-500 p-6 mb-6">
                <div className="flex items-start">
                  <AlertCircle className="w-6 h-6 text-yellow-600 mr-3 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-bold text-lg text-gray-900 mb-2">Wann darf der Vermieter ablehnen?</h3>
                    <p className="text-gray-700">Nur bei besonderen Umständen: Denkmalschutz, grundlegende Umgestaltung der Anlage, wenn andere Eigentümer unbillig benachteiligt würden, oder bei unverhältnismäßig hohen Kosten. Eine pauschale Ablehnung ist <strong>nicht zulässig!</strong></p>
                  </div>
                </div>
              </div>
            </section>

            {/* Section 7: Kostenvergleich */}
            <section id="kostenvergleich" className="mb-12 scroll-mt-24">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                7. Kostenvergleich: Öffentlich vs. Zuhause
              </h2>

              <p className="text-gray-700 mb-4 leading-relaxed">
                Die zentrale Frage für Mieter: Lohnt sich ein E-Auto auch ohne günstige Heimladung? Der LichtBlick Ladesäulencheck 2025 zeigt: Das Laden unterwegs ist im Schnitt <strong>teurer als zuhause</strong> – aber es gibt Möglichkeiten zu sparen.
              </p>

              <div className="overflow-x-auto mb-6">
                <table className="w-full border-collapse">
                  <thead>
                    <tr className="bg-gray-100">
                      <th className="border border-gray-300 px-4 py-3 text-left font-semibold">Ladeoption</th>
                      <th className="border border-gray-300 px-4 py-3 text-left font-semibold">Kosten/kWh</th>
                      <th className="border border-gray-300 px-4 py-3 text-left font-semibold">Kosten/100 km*</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="border border-gray-300 px-4 py-3">Wallbox zuhause</td>
                      <td className="border border-gray-300 px-4 py-3 text-emerald-600 font-bold">0,33 €</td>
                      <td className="border border-gray-300 px-4 py-3 text-emerald-600 font-bold">6,60 €</td>
                    </tr>
                    <tr className="bg-emerald-50">
                      <td className="border border-gray-300 px-4 py-3">Supermarkt (AC)</td>
                      <td className="border border-gray-300 px-4 py-3 text-emerald-600 font-bold">0,29 €</td>
                      <td className="border border-gray-300 px-4 py-3 text-emerald-600 font-bold">5,80 €</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 px-4 py-3">Öffentlich AC (Durchschnitt)</td>
                      <td className="border border-gray-300 px-4 py-3">0,52 €</td>
                      <td className="border border-gray-300 px-4 py-3">10,40 €</td>
                    </tr>
                    <tr className="bg-gray-50">
                      <td className="border border-gray-300 px-4 py-3">Öffentlich DC (Durchschnitt)</td>
                      <td className="border border-gray-300 px-4 py-3">0,60 €</td>
                      <td className="border border-gray-300 px-4 py-3">12,00 €</td>
                    </tr>
                    <tr className="bg-red-50">
                      <td className="border border-gray-300 px-4 py-3">Ad-hoc Autobahn</td>
                      <td className="border border-gray-300 px-4 py-3 text-red-600">0,79-0,89 €</td>
                      <td className="border border-gray-300 px-4 py-3 text-red-600">15,80-17,80 €</td>
                    </tr>
                    <tr className="bg-gray-100">
                      <td className="border border-gray-300 px-4 py-3 font-semibold">Benziner (Vergleich)</td>
                      <td className="border border-gray-300 px-4 py-3">-</td>
                      <td className="border border-gray-300 px-4 py-3">~10,20 €</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <p className="text-xs text-gray-500 mb-6">* Berechnung mit 20 kWh/100 km Durchschnittsverbrauch</p>

              <div className="bg-blue-50 border-l-4 border-blue-500 p-6 mb-6">
                <div className="flex items-start">
                  <Calculator className="w-6 h-6 text-blue-600 mr-3 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-bold text-lg text-gray-900 mb-2">Überraschung: Supermarkt schlägt Wallbox!</h3>
                    <p className="text-gray-700">Wer strategisch beim Supermarkt lädt, zahlt mit <strong>29 Ct/kWh weniger als der durchschnittliche Haushaltsstrom</strong> (33 Ct/kWh). Kombinieren Sie Einkaufen mit Laden und sparen Sie gegenüber der heimischen Wallbox!</p>
                  </div>
                </div>
              </div>
            </section>

            {/* Section 8: Praxis-Tipps */}
            <section id="tipps" className="mb-12 scroll-mt-24">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                8. 5 Praxis-Tipps für Mieter ohne Wallbox
              </h2>

              <div className="space-y-4 mb-6">
                <div className="bg-white p-6 rounded-lg border-l-4 border-emerald-500 shadow-sm">
                  <div className="flex items-start gap-4">
                    <div className="bg-emerald-100 text-emerald-700 w-10 h-10 rounded-full flex items-center justify-center font-bold text-lg flex-shrink-0">1</div>
                    <div>
                      <h3 className="font-bold text-lg text-gray-900 mb-2">Supermarkt-Routine etablieren</h3>
                      <p className="text-gray-700">Planen Sie Ihren Wocheneinkauf bei Aldi, Lidl oder Kaufland und laden Sie dabei. 30 Minuten Schnellladen = ~25 kWh = ~150 km Reichweite für nur 11,75€.</p>
                    </div>
                  </div>
                </div>

                <div className="bg-white p-6 rounded-lg border-l-4 border-blue-500 shadow-sm">
                  <div className="flex items-start gap-4">
                    <div className="bg-blue-100 text-blue-700 w-10 h-10 rounded-full flex items-center justify-center font-bold text-lg flex-shrink-0">2</div>
                    <div>
                      <h3 className="font-bold text-lg text-gray-900 mb-2">Lade-Apps strategisch nutzen</h3>
                      <p className="text-gray-700">Apps wie EnBW mobility+, ADAC e-Charge oder Chargemap zeigen freie Ladepunkte, Preise und Bewertungen. Planen Sie Ladestopps in Ihren Alltag ein.</p>
                    </div>
                  </div>
                </div>

                <div className="bg-white p-6 rounded-lg border-l-4 border-purple-500 shadow-sm">
                  <div className="flex items-start gap-4">
                    <div className="bg-purple-100 text-purple-700 w-10 h-10 rounded-full flex items-center justify-center font-bold text-lg flex-shrink-0">3</div>
                    <div>
                      <h3 className="font-bold text-lg text-gray-900 mb-2">Mobile Wallbox für Notfälle</h3>
                      <p className="text-gray-700">Mit einer mobilen Wallbox (ab 600€) können Sie an jeder Starkstromdose laden – bei Verwandten, im Urlaub oder auf dem Campingplatz. Die Investition lohnt sich!</p>
                    </div>
                  </div>
                </div>

                <div className="bg-white p-6 rounded-lg border-l-4 border-yellow-500 shadow-sm">
                  <div className="flex items-start gap-4">
                    <div className="bg-yellow-100 text-yellow-700 w-10 h-10 rounded-full flex items-center justify-center font-bold text-lg flex-shrink-0">4</div>
                    <div>
                      <h3 className="font-bold text-lg text-gray-900 mb-2">Arbeitgeber ansprechen</h3>
                      <p className="text-gray-700">Fragen Sie nach Lademöglichkeiten am Arbeitsplatz. Viele Unternehmen bieten kostenlosen Ladestrom als Mitarbeiter-Benefit – steuerfrei für Sie!</p>
                    </div>
                  </div>
                </div>

                <div className="bg-white p-6 rounded-lg border-l-4 border-red-500 shadow-sm">
                  <div className="flex items-start gap-4">
                    <div className="bg-red-100 text-red-700 w-10 h-10 rounded-full flex items-center justify-center font-bold text-lg flex-shrink-0">5</div>
                    <div>
                      <h3 className="font-bold text-lg text-gray-900 mb-2">Vermieter überzeugen</h3>
                      <p className="text-gray-700">Nutzen Sie Ihr Recht nach WEMoG! Eine Wallbox steigert den Immobilienwert. Argumentieren Sie mit der Rechtslage und bieten Sie an, alle Kosten zu tragen.</p>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* Fazit */}
            <section id="fazit" className="mb-8 md:mb-12">
              <div className="bg-gradient-to-r from-blue-600 to-cyan-600 rounded-xl p-6 md:p-8 text-white">
                <h2 className="text-2xl md:text-3xl font-bold mb-4">
                  Fazit: E-Auto ohne Wallbox? Kein Problem!
                </h2>
                <p className="text-base md:text-lg leading-relaxed mb-4">
                  Die Zeiten, in denen ein E-Auto ohne eigene Garage unmöglich war, sind vorbei. Mit <strong>180.000+ öffentlichen Ladepunkten</strong>, günstigen Supermarkt-Ladestationen ab <strong>29 Ct/kWh</strong> und mobilen Wallboxen ab <strong>600€</strong> haben Mieter heute alle Optionen.
                </p>
                <p className="text-base md:text-lg leading-relaxed mb-6">
                  Strategisch laden beim Einkaufen ist sogar <strong>günstiger als die heimische Wallbox</strong>. Und wer doch eine feste Lösung will: Das WEMoG gibt Ihnen das Recht dazu – der Vermieter kann nur in Ausnahmefällen ablehnen.
                </p>
                <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
                  <p className="text-lg font-semibold">
                    ⚡ <strong>Unser Rat:</strong> Starten Sie mit 2-3 kostenlosen Ladekarten, etablieren Sie eine Supermarkt-Laderoutine und sprechen Sie parallel mit Ihrem Vermieter über eine Wallbox. So fahren Sie elektrisch – egal ob Mieter oder Eigentümer!
                  </p>
                </div>
              </div>
            </section>

            {/* CTA Box */}
            <div className="bg-gradient-to-r from-purple-600 to-blue-600 rounded-2xl p-8 text-center text-white mb-8">
              <h3 className="text-2xl font-bold mb-4">
                📊 Was kostet Ihr E-Auto wirklich?
              </h3>
              <p className="text-lg mb-6 max-w-2xl mx-auto">
                Berechnen Sie mit unserem TCO-Rechner die Gesamtkosten Ihres Elektroautos – inklusive Ladekosten mit und ohne Wallbox.
              </p>
              <a 
                href="/rechner/tco-rechner"
                className="inline-flex items-center gap-3 bg-white text-blue-600 font-bold px-8 py-4 rounded-full hover:shadow-2xl hover:scale-105 transition-all duration-200"
              >
                <Calculator className="w-6 h-6" />
                Zum TCO-Rechner
              </a>
            </div>
          </div>
        </article>

        {/* Quellen */}
        <div className="mt-8 bg-gray-100 rounded-xl p-6 text-sm text-gray-600">
          <h3 className="font-bold text-gray-800 mb-3">📚 Quellen & Referenzen:</h3>
          <ul className="space-y-1 text-xs">
            <li>• Bundesnetzagentur: Ladesäulenregister (Stand: November 2025)</li>
            <li>• LichtBlick: Ladesäulencheck 2025</li>
            <li>• ADAC: Ladetarife für Elektroautos (Stand: Dezember 2025)</li>
            <li>• Schwarz-Gruppe (Lidl/Kaufland): Offizielle Ladepreise</li>
            <li>• WEMoG: Wohnungseigentumsmodernisierungsgesetz (seit 01.12.2020)</li>
            <li>• §554 BGB: Recht auf bauliche Veränderungen für Mieter</li>
            <li>• ADAC Test: Mobile Wallboxen 2024</li>
          </ul>
          <p className="mt-4 leading-relaxed">
            <strong>Haftungsausschluss:</strong> Alle Angaben ohne Gewähr. Preise können sich ändern und regional variieren. Die Installation von Wallboxen sollte immer durch einen zertifizierten Elektrofachbetrieb erfolgen. Bei rechtlichen Fragen zu Mieterverhältnissen empfehlen wir die Konsultation eines Fachanwalts.
          </p>
        </div>

        {/* Related Articles */}
        <div className="mt-8 bg-blue-50 rounded-xl p-6">
          <h3 className="text-lg font-bold text-gray-800 mb-4">
            📚 Weitere hilfreiche Artikel:
          </h3>
          <div className="space-y-2">
            <a href="/ratgeber/wallbox-kosten-installation" className="block text-blue-600 hover:underline text-sm md:text-base">
              → Wallbox-Kosten 2025: Installation, Förderung & laufende Kosten
            </a>
            <a href="/ratgeber/strompreise-2025" className="block text-blue-600 hover:underline text-sm md:text-base">
              → Strompreise für E-Autos 2025: So laden Sie günstig
            </a>
            <a href="/ratgeber/elektroauto-wartung" className="block text-blue-600 hover:underline text-sm md:text-base">
              → E-Auto Wartung: Was ist anders als beim Verbrenner?
            </a>
            <a href="/rechner/kostenrechner" className="block text-blue-600 hover:underline text-sm md:text-base">
              → TCO-Rechner: Gesamtkosten Ihres E-Autos berechnen
            </a>
            <a href="/rechner/gebrauchtwagenbatterierechner" className="block text-blue-600 hover:underline text-sm md:text-base">
              → Batterie-Check: Ist dieses gebrauchte E-Auto noch gut?
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
