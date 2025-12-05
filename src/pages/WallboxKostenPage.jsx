import React, { useEffect } from 'react';
import { 
  ArrowLeft, 
  Zap,
  Euro,
  Home,
  AlertTriangle,
  CheckCircle,
  Wrench,
  Cable,
  TrendingUp,
  Calculator
} from 'lucide-react';
import SEO from '../components/SEO';
import Header from '../components/Header';

export default function WallboxKostenPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-white">
      <SEO
        title="Wallbox Kosten & Installation 2025: Preise, Förderung | e-Autowelt"
        description="Wallbox Kosten 2025: 800-3.500€ inkl. Installation. Aktuelle Preise, Installationskosten, Fördermöglichkeiten und Spartipps für Ihre private Ladestation."
        canonicalPath="/ratgeber/wallbox-kosten-installation"
        keywords="wallbox kosten, wallbox installation, wallbox förderung, ladestation kosten, wallbox kaufen, e-auto zuhause laden"
        ogImage="/images/ratgeber/wallbox-kosten-og.jpg"
        ogType="article"
        publishedDate="2025-01-28T12:00:00Z"
        modifiedDate="2025-01-28T12:00:00Z"
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
          <div className="relative h-64 md:h-96 bg-gradient-to-br from-blue-600 to-purple-600 overflow-hidden">
            <img 
              src="/images/ratgeber/wallbox-kosten-hero.webp"
              alt="Wallbox Kosten und Installation 2025 - Private Ladestation für E-Autos"
              className="w-full h-full object-cover opacity-90"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
            <div className="absolute bottom-0 left-0 right-0 p-6 md:p-10 text-white">
              <div className="flex items-center gap-3 mb-3">
                <div className="bg-white/30 backdrop-blur-md p-2 rounded-lg shadow-lg">
                  <Cable className="w-6 h-6 md:w-8 md:h-8" />
                </div>
                <span className="text-xs md:text-sm bg-white/30 backdrop-blur-md px-3 py-1 rounded-full font-semibold shadow-lg">📖 10 Min. Lesezeit</span>
                <span className="text-xs md:text-sm bg-white/30 backdrop-blur-md px-3 py-1 rounded-full font-semibold shadow-lg">Aktualisiert am 2. Dezember 2025</span>
              </div>
              <h1 className="text-2xl md:text-4xl lg:text-5xl font-bold leading-tight">
                Wallbox Kosten & Installation 2025: Was Sie wirklich zahlen
              </h1>
            </div>
          </div>

          {/* Article Content */}
          <div className="p-6 md:p-10">
            {/* Intro */}
            <div className="mb-8 md:mb-12">
              <p className="text-lg md:text-xl text-gray-600 leading-relaxed mb-4">
                Eine eigene Wallbox ist für E-Auto-Besitzer die komfortabelste und günstigste Lösung zum Laden zuhause. Doch was kostet eine Wallbox wirklich? Die Gesamtkosten bewegen sich zwischen <strong>800 und 3.500 Euro</strong> – je nach Modell, Ausstattung und Installationsaufwand. In diesem umfassenden Guide erfahren Sie alles über Anschaffungskosten, Installation, Fördermöglichkeiten und wie sich die Investition rechnet.
              </p>
              <div className="bg-blue-50 border-2 border-blue-200 rounded-xl p-6">
                <p className="text-base md:text-lg text-gray-700 leading-relaxed">
                  <strong className="text-blue-700">⚡ Schnell-Überblick:</strong> Eine <strong>11 kW Wallbox</strong> kostet zwischen 500-1.200 Euro, die Installation weitere 500-3.000 Euro. Bundesweite Förderungen gibt es 2025 nicht mehr, aber einige Bundesländer (NRW, Baden-Württemberg) bieten Zuschüsse bis 2.500 Euro. Das Laden zuhause kostet etwa <strong>5,25 €/100 km</strong> – halb so viel wie an öffentlichen Ladesäulen!
                </p>
              </div>
            </div>

            {/* Inhaltsverzeichnis */}
            <nav className="bg-gray-50 rounded-xl p-6 mb-8 md:mb-12">
              <h2 className="text-xl md:text-2xl font-bold text-gray-800 mb-4">
                Inhaltsverzeichnis
              </h2>
              <ol className="space-y-2 text-sm md:text-base">
                <li><a href="#anschaffungskosten" className="text-blue-600 hover:underline">1. Wallbox Anschaffungskosten im Überblick</a></li>
                <li><a href="#installationskosten" className="text-blue-600 hover:underline">2. Installationskosten: Was kommt dazu?</a></li>
                <li><a href="#gesamtkosten" className="text-blue-600 hover:underline">3. Gesamtkosten-Rechnung: Einfamilienhaus vs. Mehrfamilienhaus</a></li>
                <li><a href="#foerderung" className="text-blue-600 hover:underline">4. Förderung 2025: Diese Zuschüsse gibt es noch</a></li>
                <li><a href="#11kw-vs-22kw" className="text-blue-600 hover:underline">5. 11 kW vs. 22 kW: Welche Wallbox brauche ich?</a></li>
                <li><a href="#laufende-kosten" className="text-blue-600 hover:underline">6. Laufende Kosten & Stromkosten</a></li>
                <li><a href="#einsparungen" className="text-blue-600 hover:underline">7. Einsparungen: Wann rechnet sich die Wallbox?</a></li>
                <li><a href="#mieter-eigentuemer" className="text-blue-600 hover:underline">8. Wallbox als Mieter oder Eigentümer</a></li>
                <li><a href="#spartipps" className="text-blue-600 hover:underline">9. 7 Tipps zum Sparen bei der Wallbox</a></li>
                <li><a href="#fazit" className="text-blue-600 hover:underline">10. Fazit & Kaufempfehlungen</a></li>
              </ol>
            </nav>

            {/* Section 1: Anschaffungskosten */}
            <section id="anschaffungskosten" className="mb-8 md:mb-12">
              <h2 className="text-xl md:text-3xl font-bold text-gray-800 mb-4 md:mb-6 flex items-center gap-3">
                <Euro className="w-6 h-6 md:w-8 md:h-8 text-blue-600" />
                Wallbox Anschaffungskosten im Überblick
              </h2>
              
              <p className="text-sm md:text-base text-gray-700 leading-relaxed mb-6">
                Die Preise für Wallboxen variieren stark je nach Hersteller, Ladeleistung und Ausstattung. Hier der aktuelle Marktüberblick 2025:
              </p>

              {/* Preistabelle */}
              <div className="overflow-x-auto mb-6">
                <table className="w-full bg-white rounded-xl overflow-hidden shadow-lg">
                  <thead className="bg-gradient-to-r from-blue-600 to-purple-600 text-white">
                    <tr>
                      <th className="p-3 md:p-4 text-left text-xs md:text-sm">Kategorie</th>
                      <th className="p-3 md:p-4 text-left text-xs md:text-sm">Preisspanne</th>
                      <th className="p-3 md:p-4 text-left text-xs md:text-sm">Typische Ausstattung</th>
                    </tr>
                  </thead>
                  <tbody className="text-xs md:text-sm">
                    <tr className="border-b border-gray-200 hover:bg-gray-50">
                      <td className="p-3 md:p-4 font-semibold">Einstiegsmodelle</td>
                      <td className="p-3 md:p-4"><strong className="text-green-700">200-500 €</strong></td>
                      <td className="p-3 md:p-4 text-gray-700">11 kW, Basis-Funktionen, ohne Extras</td>
                    </tr>
                    <tr className="border-b border-gray-200 hover:bg-gray-50 bg-blue-50">
                      <td className="p-3 md:p-4 font-semibold">Mittelklasse (Empfohlen)</td>
                      <td className="p-3 md:p-4"><strong className="text-blue-700">500-1.200 €</strong></td>
                      <td className="p-3 md:p-4 text-gray-700">11 kW, WLAN, App-Steuerung, DC-Fehlerstrom</td>
                    </tr>
                    <tr className="border-b border-gray-200 hover:bg-gray-50">
                      <td className="p-3 md:p-4 font-semibold">Premium-Modelle</td>
                      <td className="p-3 md:p-4"><strong className="text-orange-700">1.200-2.000 €</strong></td>
                      <td className="p-3 md:p-4 text-gray-700">11/22 kW, PV-Steuerung, Lastmanagement, MID-Zähler</td>
                    </tr>
                  </tbody>
                </table>
                <div className="text-xs text-gray-500 mt-2 italic">Quelle: ADAC, Enpal, Vattenfall (Stand Januar 2025)</div>
              </div>

              {/* Feature-Cards */}
              <div className="space-y-4">
                <h3 className="font-bold text-gray-800 mb-3">Wichtige Ausstattungsmerkmale und ihr Einfluss auf den Preis:</h3>
                
                <div className="bg-green-50 border-l-4 border-green-600 rounded-lg p-6">
                  <h4 className="font-bold text-green-800 mb-2 flex items-center gap-2">
                    Standard (meist im Preis enthalten)
                  </h4>
                  <ul className="text-sm text-gray-700 space-y-1">
                    <li>• Typ-2-Ladekabel (fest oder abnehmbar)</li>
                    <li>• Wetterfestes Gehäuse (IP54)</li>
                    <li>• LED-Statusanzeige</li>
                    <li>• Basis-Sicherheit (AC-Fehlerstrom)</li>
                  </ul>
                </div>

                <div className="bg-blue-50 border-l-4 border-blue-600 rounded-lg p-6">
                  <h4 className="font-bold text-blue-800 mb-2 flex items-center gap-2">
                    Empfehlenswert (+150-300 €)
                  </h4>
                  <ul className="text-sm text-gray-700 space-y-1">
                    <li>• <strong>DC-Fehlerstrom-Erkennung:</strong> Spart 300-500€ bei Installation!</li>
                    <li>• <strong>WLAN/LAN:</strong> Fernsteuerung per App</li>
                    <li>• <strong>Zugangsschutz (RFID):</strong> Gegen unbefugte Nutzung</li>
                    <li>• <strong>§14a EnWG-konform:</strong> Steuerbar durch Netzbetreiber (Pflicht seit 2025!)</li>
                  </ul>
                </div>

                <div className="bg-purple-50 border-l-4 border-purple-600 rounded-lg p-6">
                  <h4 className="font-bold text-purple-800 mb-2 flex items-center gap-2">
                    Premium-Features (+300-800 €)
                  </h4>
                  <ul className="text-sm text-gray-700 space-y-1">
                    <li>• <strong>PV-Überschussladen:</strong> Automatisch mit Solarstrom laden</li>
                    <li>• <strong>Lastmanagement:</strong> Für mehrere Wallboxen gleichzeitig</li>
                    <li>• <strong>MID-Zähler (eichrechtskonform):</strong> Für Dienstwagen-Abrechnung</li>
                    <li>• <strong>Bidirektionales Laden (V2H/V2G):</strong> Auto als Stromspeicher nutzen</li>
                  </ul>
                </div>
              </div>
            </section>

            {/* Section 2: Installationskosten */}
            <section id="installationskosten" className="mb-8 md:mb-12">
              <h2 className="text-xl md:text-3xl font-bold text-gray-800 mb-4 md:mb-6 flex items-center gap-3">
                <Wrench className="w-6 h-6 md:w-8 md:h-8 text-orange-600" />
                Installationskosten: Was kommt dazu?
              </h2>

              <p className="text-sm md:text-base text-gray-700 leading-relaxed mb-6">
                Die Installation einer Wallbox darf nur durch einen zertifizierten Elektrofachbetrieb erfolgen. Die Kosten variieren je nach baulichen Gegebenheiten erheblich:
              </p>

              {/* Installationskosten-Tabelle */}
              <div className="overflow-x-auto mb-6">
                <table className="w-full bg-white rounded-xl overflow-hidden shadow-lg">
                  <thead className="bg-gradient-to-r from-orange-600 to-red-600 text-white">
                    <tr>
                      <th className="p-3 text-left text-xs md:text-sm">Kostenfaktor</th>
                      <th className="p-3 text-left text-xs md:text-sm">Preisspanne</th>
                      <th className="p-3 text-left text-xs md:text-sm">Wann notwendig?</th>
                    </tr>
                  </thead>
                  <tbody className="text-xs md:text-sm">
                    <tr className="border-b hover:bg-gray-50">
                      <td className="p-3 font-semibold">Basis-Installation</td>
                      <td className="p-3"><strong className="text-green-700">500-800 €</strong></td>
                      <td className="p-3 text-gray-700">Kurze Kabelwege (&lt;5m), moderner Sicherungskasten</td>
                    </tr>
                    <tr className="border-b hover:bg-gray-50">
                      <td className="p-3 font-semibold">Kabelverlegung (pro Meter)</td>
                      <td className="p-3"><strong className="text-blue-700">10-30 €/m</strong></td>
                      <td className="p-3 text-gray-700">Längere Distanz zum Verteilerkasten</td>
                    </tr>
                    <tr className="border-b hover:bg-gray-50">
                      <td className="p-3 font-semibold">Wanddurchbrüche</td>
                      <td className="p-3"><strong className="text-orange-700">150-500 €</strong></td>
                      <td className="p-3 text-gray-700">Montage in Garage/Carport</td>
                    </tr>
                    <tr className="border-b hover:bg-gray-50">
                      <td className="p-3 font-semibold">FI-Schutzschalter</td>
                      <td className="p-3"><strong className="text-orange-700">100-300 €</strong></td>
                      <td className="p-3 text-gray-700">Wenn nicht in Wallbox integriert</td>
                    </tr>
                    <tr className="border-b hover:bg-gray-50">
                      <td className="p-3 font-semibold">Zählerschrank-Modernisierung</td>
                      <td className="p-3"><strong className="text-red-700">500-2.000 €</strong></td>
                      <td className="p-3 text-gray-700">Bei Altbauten (vor 1990)</td>
                    </tr>
                    <tr className="border-b hover:bg-gray-50">
                      <td className="p-3 font-semibold">Hausanschluss-Verstärkung</td>
                      <td className="p-3"><strong className="text-red-700">1.000-3.000 €</strong></td>
                      <td className="p-3 text-gray-700">Zu schwacher Hausanschluss (&lt;30A)</td>
                    </tr>
                    <tr className="border-b hover:bg-gray-50">
                      <td className="p-3 font-semibold">Anmeldung Netzbetreiber</td>
                      <td className="p-3"><strong className="text-green-700">0-500 €</strong></td>
                      <td className="p-3 text-gray-700">Meist im Service enthalten, bei 22 kW Genehmigung nötig</td>
                    </tr>
                  </tbody>
                </table>
                <div className="text-xs text-gray-500 mt-2 italic">Quelle: ADAC, Enpal (Stand Januar 2025)</div>
              </div>

              {/* Beispiel-Szenarien */}
              <div className="space-y-4">
                <h3 className="font-bold text-gray-800 mb-3">Beispiel-Szenarien für Installationskosten:</h3>

                <div className="bg-green-50 rounded-xl p-6">
                  <div className="flex items-start gap-3 mb-3">
                    <div className="bg-green-600 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold flex-shrink-0">✓</div>
                    <div>
                      <h4 className="font-bold text-gray-800 mb-2">Ideal-Fall (Garage direkt am Haus)</h4>
                      <div className="text-sm text-gray-700 space-y-1">
                        <div>• Moderne Elektrik (nach 2000)</div>
                        <div>• Sicherungskasten 3-5m entfernt</div>
                        <div>• Kein Durchbruch nötig</div>
                        <div>• Wallbox mit DC-Fehlerstrom</div>
                        <div className="pt-2 font-bold text-green-700">→ Installationskosten: 500-800 €</div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-orange-50 rounded-xl p-6">
                  <div className="flex items-start gap-3 mb-3">
                    <div className="bg-orange-600 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold flex-shrink-0">~</div>
                    <div>
                      <h4 className="font-bold text-gray-800 mb-2">Standard-Fall (Carport/freistehende Garage)</h4>
                      <div className="text-sm text-gray-700 space-y-1">
                        <div>• Elektrik ausreichend (1990-2010)</div>
                        <div>• Sicherungskasten 10-15m entfernt</div>
                        <div>• 1-2 Wanddurchbrüche</div>
                        <div>• Zusätzlicher FI-Schalter nötig</div>
                        <div className="pt-2 font-bold text-orange-700">→ Installationskosten: 1.200-2.000 €</div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-red-50 rounded-xl p-6">
                  <div className="flex items-start gap-3 mb-3">
                    <div className="bg-red-600 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold flex-shrink-0">!</div>
                    <div>
                      <h4 className="font-bold text-gray-800 mb-2">Aufwändig (Altbau/weite Entfernung)</h4>
                      <div className="text-sm text-gray-700 space-y-1">
                        <div>• Alte Elektrik (vor 1990)</div>
                        <div>• Sicherungskasten 20+ m entfernt</div>
                        <div>• Mehrere Durchbrüche/Erdarbeiten</div>
                        <div>• Zählerschrank-Modernisierung nötig</div>
                        <div className="pt-2 font-bold text-red-700">→ Installationskosten: 2.500-3.500 €</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* Section 3: Gesamtkosten */}
            <section id="gesamtkosten" className="mb-8 md:mb-12">
              <h2 className="text-xl md:text-3xl font-bold text-gray-800 mb-4 md:mb-6 flex items-center gap-3">
                <Home className="w-6 h-6 md:w-8 md:h-8 text-purple-600" />
                Gesamtkosten-Rechnung: Einfamilienhaus vs. Mehrfamilienhaus
              </h2>

              <p className="text-sm md:text-base text-gray-700 leading-relaxed mb-6">
                Die Gesamtkosten unterscheiden sich deutlich je nach Wohnsituation:
              </p>

              <div className="grid md:grid-cols-2 gap-6 mb-6">
                {/* Einfamilienhaus */}
                <div className="bg-white rounded-xl border-2 border-green-500 p-6">
                  <div className="text-3xl mb-3">🏠</div>
                  <h3 className="font-bold text-gray-800 mb-4">Einfamilienhaus / Reihenhaus</h3>
                  <div className="space-y-3 text-sm text-gray-700">
                    <div>
                      <div className="font-semibold mb-1">Wallbox (Mittelklasse):</div>
                      <div>700 € (11 kW, WLAN, DC-Fehlerstrom)</div>
                    </div>
                    <div>
                      <div className="font-semibold mb-1">Installation:</div>
                      <div>1.200 € (Standard-Szenario)</div>
                    </div>
                    <div>
                      <div className="font-semibold mb-1">Anmeldung Netzbetreiber:</div>
                      <div>0 € (meist im Service enthalten)</div>
                    </div>
                    <div className="border-t pt-3 mt-3">
                      <div className="font-bold text-lg text-green-700">Gesamt: 1.900 €</div>
                      <div className="text-xs text-gray-600 mt-1">Typische Preisspanne: 1.200-2.500 €</div>
                    </div>
                  </div>
                </div>

                {/* Mehrfamilienhaus */}
                <div className="bg-white rounded-xl border-2 border-orange-500 p-6">
                  <div className="text-3xl mb-3">🏢</div>
                  <h3 className="font-bold text-gray-800 mb-4">Mehrfamilienhaus / Tiefgarage</h3>
                  <div className="space-y-3 text-sm text-gray-700">
                    <div>
                      <div className="font-semibold mb-1">Wallbox (pro Ladepunkt):</div>
                      <div>700 €</div>
                    </div>
                    <div>
                      <div className="font-semibold mb-1">Installation (komplex):</div>
                      <div>2.500 € (längere Kabelwege, Unterverteilung)</div>
                    </div>
                    <div>
                      <div className="font-semibold mb-1">Lastmanagement (bei mehreren Wallboxen):</div>
                      <div>500-1.000 €</div>
                    </div>
                    <div className="border-t pt-3 mt-3">
                      <div className="font-bold text-lg text-orange-700">Gesamt: 3.200-3.700 €</div>
                      <div className="text-xs text-gray-600 mt-1">Bei mehreren Ladepunkten: Kosten pro Box sinken</div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-blue-50 rounded-xl p-6">
                <h3 className="font-bold text-gray-800 mb-2">💡 Spartipp: Mehrere Wallboxen gleichzeitig</h3>
                <p className="text-sm text-gray-700">
                  Wenn mehrere Parteien gleichzeitig Wallboxen installieren lassen (z.B. in einer WEG), sinken die Kosten pro Ladepunkt deutlich: Gemeinsame Leitungsverlegung und Lastmanagement-System sparen 30-50% gegenüber einzelner Installation! Bei 4 Wallboxen: Statt 4× 3.500€ = <strong>14.000€</strong> nur etwa <strong>8.000-10.000€ gesamt</strong>.
                </p>
              </div>
            </section>

            {/* Section 4: Förderung */}
            <section id="foerderung" className="mb-8 md:mb-12">
              <h2 className="text-xl md:text-3xl font-bold text-gray-800 mb-4 md:mb-6 flex items-center gap-3">
                <TrendingUp className="w-6 h-6 md:w-8 md:h-8 text-green-600" />
                Förderung 2025: Diese Zuschüsse gibt es noch
              </h2>

              <div className="bg-orange-50 border-2 border-orange-500 rounded-xl p-6 mb-6">
                <h3 className="font-bold text-orange-800 mb-3">⚠️ Wichtig: Bundesförderung eingestellt!</h3>
                <p className="text-sm text-gray-700 leading-relaxed mb-2">
                  Die KfW-Förderung für private Wallboxen (KfW 440, KfW 442) ist seit 2024 ausgelaufen und wird 2025 nicht fortgeführt. <strong>Für 2026 plant die Bundesregierung</strong> ein neues Förderprogramm speziell für <strong>Mehrparteienhäuser</strong> (im "Masterplan Ladeinfrastruktur 2030"). Details folgen Anfang 2026.
                </p>
                <p className="text-sm text-gray-700">
                  <strong>Aktuell</strong> gibt es nur noch <strong>regionale Förderungen</strong> von Bundesländern, Städten und Energieversorgern!
                </p>
              </div>

              {/* Bundesländer-Förderungen */}
              <div className="space-y-6 mb-6">
                <h3 className="font-bold text-gray-800 mb-3">🗺️ Bundesländer-Förderungen 2025:</h3>

                <div className="bg-green-50 rounded-xl p-6 border-2 border-green-500">
                  <div className="flex items-start justify-between gap-4 mb-3">
                    <div>
                      <h4 className="font-bold text-green-800 text-lg">Nordrhein-Westfalen (NRW)</h4>
                      <p className="text-sm text-gray-600">Programm: progres.nrw – Emissionsarme Mobilität</p>
                    </div>
                    <div className="text-right">
                      <div className="text-2xl font-bold text-green-700">bis 1.500 €</div>
                      <div className="text-xs text-gray-500">pro Ladepunkt</div>
                    </div>
                  </div>
                  <div className="text-sm text-gray-700 space-y-2">
                    <div><strong>Förderung:</strong></div>
                    <ul className="space-y-1 ml-4">
                      <li>• <strong>40%</strong> der Kosten, max. <strong>1.500 €</strong> pro Ladepunkt</li>
                      <li>• Bei großen Parkplätzen (&gt;20 Stellplätze): 20% der Installationskosten (bis 50.000 €)</li>
                      <li>• Netzanschluss: 20% bis 10.000 €</li>
                    </ul>
                    <div className="mt-3"><strong>Voraussetzungen:</strong></div>
                    <ul className="space-y-1 ml-4">
                      <li>• Betrieb mit <strong>Ökostrom</strong> (oder PV-Anlage)</li>
                      <li>• Für Privatpersonen, Mieter, Eigentümergemeinschaften</li>
                      <li>• Gültig bis: <strong>31.12.2025</strong></li>
                    </ul>
                    <a href="https://www.elektromobilitaet.nrw/" target="_blank" rel="noopener" className="text-blue-600 hover:underline mt-2 inline-block">→ Mehr Infos zu progres.nrw</a>
                  </div>
                </div>

                <div className="bg-blue-50 rounded-xl p-6 border-2 border-blue-500">
                  <div className="flex items-start justify-between gap-4 mb-3">
                    <div>
                      <h4 className="font-bold text-blue-800 text-lg">Baden-Württemberg</h4>
                      <p className="text-sm text-gray-600">Programme: Charge@BW, BW-e-Solar-Gutschein</p>
                    </div>
                    <div className="text-right">
                      <div className="text-2xl font-bold text-blue-700">bis 2.500 €</div>
                      <div className="text-xs text-gray-500">pro Ladeplatz</div>
                    </div>
                  </div>
                  <div className="text-sm text-gray-700 space-y-2">
                    <div><strong>Charge@BW (WEG):</strong></div>
                    <ul className="space-y-1 ml-4">
                      <li>• Bis <strong>2.500 €</strong> für Elektroinstallationen in Wohnungseigentümergemeinschaften</li>
                      <li>• Fördert vorbereitende Maßnahmen (nicht die Wallbox selbst)</li>
                    </ul>
                    <div className="mt-2"><strong>BW-e-Solar-Gutschein:</strong></div>
                    <ul className="space-y-1 ml-4">
                      <li>• <strong>500 €</strong> beim Kauf eines E-Autos + Wallbox + PV-Anlage</li>
                      <li>• Nur in Kombination mit eigenem Solarstrom</li>
                    </ul>
                    <a href="https://www.l-bank.de/produkte/finanzhilfen/bw-e-solar-gutschein.html" target="_blank" rel="noopener" className="text-blue-600 hover:underline mt-2 inline-block">→ Mehr Infos zur L-Bank Förderung</a>
                  </div>
                </div>

                <div className="bg-purple-50 rounded-xl p-6 border-2 border-purple-500">
                  <div className="flex items-start justify-between gap-4 mb-3">
                    <div>
                      <h4 className="font-bold text-purple-800 text-lg">Berlin (WELMO)</h4>
                      <p className="text-sm text-gray-600">Für Unternehmen, Freiberufler</p>
                    </div>
                    <div className="text-right">
                      <div className="text-2xl font-bold text-purple-700">bis 2.500 €</div>
                      <div className="text-xs text-gray-500">pro Ladepunkt</div>
                    </div>
                  </div>
                  <div className="text-sm text-gray-700 space-y-2">
                    <div><strong>Förderung:</strong></div>
                    <ul className="space-y-1 ml-4">
                      <li>• <strong>50%</strong> der Gesamtkosten, max. <strong>2.500 €</strong></li>
                      <li>• Wallboxen bis 22 kW</li>
                      <li>• Nur für gewerbliche Nutzer</li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Kommunale Förderungen */}
              <div className="bg-gray-50 rounded-xl p-6 mb-6">
                <h3 className="font-bold text-gray-800 mb-3">🏙️ Ausgewählte Städte mit Förderung:</h3>
                <div className="grid md:grid-cols-2 gap-4 text-sm">
                  <div>
                    <h4 className="font-bold mb-1">München</h4>
                    <p className="text-gray-700">Bis 40% der Kosten, max. 3.000 € (Mehrfamilienhäuser)</p>
                  </div>
                  <div>
                    <h4 className="font-bold mb-1">Stuttgart</h4>
                    <p className="text-gray-700">Bis 1.000 € pro Ladepunkt (2+ Stellplätze)</p>
                  </div>
                  <div>
                    <h4 className="font-bold mb-1">Heidelberg</h4>
                    <p className="text-gray-700">50% des Kaufpreises, max. 1.000 €</p>
                  </div>
                  <div>
                    <h4 className="font-bold mb-1">Limburg</h4>
                    <p className="text-gray-700">25% der Nettokosten, max. 500 €</p>
                  </div>
                </div>
                <p className="text-xs text-gray-600 mt-3 italic">
                  Viele weitere Städte bieten eigene Programme, einfach bei der eigenen Kommune informieren.
                </p>
              </div>

              {/* Antragstellung */}
              <div className="bg-yellow-50 border-2 border-yellow-500 rounded-xl p-6">
                <h3 className="font-bold text-yellow-800 mb-3">📝 Wichtig bei der Antragstellung:</h3>
                <ol className="space-y-2 text-sm text-gray-700">
                  <li className="flex items-start gap-2">
                    <span className="font-bold text-yellow-700">1.</span>
                    <div><strong>Antrag VOR dem Kauf stellen!</strong> Bei den meisten Programmen Pflicht.</div>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="font-bold text-yellow-700">2.</span>
                    <div>Kostenvoranschlag vom Elektriker einholen</div>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="font-bold text-yellow-700">3.</span>
                    <div>Förderzusage abwarten (nicht sofort kaufen!)</div>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="font-bold text-yellow-700">4.</span>
                    <div>Nach Installation: Rechnungen und Nachweise einreichen</div>
                  </li>
                </ol>
              </div>
            </section>

            {/* Section 5: 11kW vs 22kW */}
            <section id="11kw-vs-22kw" className="mb-8 md:mb-12">
              <h2 className="text-xl md:text-3xl font-bold text-gray-800 mb-4 md:mb-6 flex items-center gap-3">
                <Zap className="w-6 h-6 md:w-8 md:h-8 text-yellow-600" />
                11 kW vs. 22 kW: Welche Wallbox brauche ich?
              </h2>

              <p className="text-sm md:text-base text-gray-700 leading-relaxed mb-6">
                Die Ladeleistung beeinflusst sowohl Preis als auch Ladezeit. Für die meisten Privathaushalte reicht eine 11 kW Wallbox vollkommen aus:
              </p>

              <div className="grid md:grid-cols-2 gap-6 mb-6">
                {/* 11 kW */}
                <div className="bg-green-50 rounded-xl p-6 border-2 border-green-500">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="font-bold text-gray-800 text-lg">11 kW Wallbox</h3>
                    <div className="bg-green-600 text-white px-3 py-1 rounded-full text-sm font-bold">Empfohlen</div>
                  </div>
                  <div className="space-y-3 text-sm text-gray-700">
                    <div>
                      <div className="font-semibold mb-1">✅ Vorteile:</div>
                      <ul className="space-y-1 ml-4">
                        <li>• Keine Genehmigung nötig (nur Meldepflicht)</li>
                        <li>• Günstiger (500-1.200 €)</li>
                        <li>• Für 95% der E-Autos ausreichend</li>
                        <li>• Schont Hauselektrik</li>
                      </ul>
                    </div>
                    <div>
                      <div className="font-semibold mb-1">Ladezeiten (Beispiele):</div>
                      <ul className="space-y-1 ml-4 text-xs">
                        <li>• VW ID.3 (58 kWh): <strong>~5,5h</strong> (0→100%)</li>
                        <li>• Tesla Model 3 (60 kWh): <strong>~6h</strong></li>
                        <li>• Hyundai Ioniq 5 (72 kWh): <strong>~7h</strong></li>
                      </ul>
                    </div>
                    <div className="text-xs text-gray-600 italic">
                      💡 Über Nacht ist das Auto immer voll!
                    </div>
                  </div>
                </div>

                {/* 22 kW */}
                <div className="bg-orange-50 rounded-xl p-6 border-2 border-orange-500">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="font-bold text-gray-800 text-lg">22 kW Wallbox</h3>
                    <div className="bg-orange-600 text-white px-3 py-1 rounded-full text-sm font-bold">Spezialfälle</div>
                  </div>
                  <div className="space-y-3 text-sm text-gray-700">
                    <div>
                      <div className="font-semibold mb-1">⚠️ Zu beachten:</div>
                      <ul className="space-y-1 ml-4">
                        <li>• <strong>Genehmigungspflichtig</strong> beim Netzbetreiber</li>
                        <li>• Teurer (1.000-2.000 €)</li>
                        <li>• Genehmigung kann Kosten verursachen (bis 500 €)</li>
                        <li>• Viele E-Autos laden nur mit 11 kW!</li>
                      </ul>
                    </div>
                    <div>
                      <div className="font-semibold mb-1">Sinnvoll für:</div>
                      <ul className="space-y-1 ml-4">
                        <li>• Vielfahrer (&gt;30.000 km/Jahr)</li>
                        <li>• Mehrere E-Autos im Haushalt</li>
                        <li>• Große Batterien (&gt;80 kWh)</li>
                        <li>• Gewerbliche Nutzung</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-blue-50 rounded-xl p-6">
                <h3 className="font-bold text-gray-800 mb-2">💡 Empfehlung:</h3>
                <p className="text-sm text-gray-700 leading-relaxed">
                  <strong>Für 95% der Privatnutzer reicht eine 11 kW Wallbox!</strong> Sie laden über Nacht (8h) etwa 80 kWh – das entspricht 500 km Reichweite. Eine 22 kW Wallbox spart Ihnen nur 2-3 Stunden, kostet aber deutlich mehr und erfordert Genehmigung. Ausnahme: Sie fahren täglich >200 km oder haben mehrere E-Autos.
                </p>
              </div>
            </section>

            {/* Section 6: Laufende Kosten */}
            <section id="laufende-kosten" className="mb-8 md:mb-12">
              <h2 className="text-xl md:text-3xl font-bold text-gray-800 mb-4 md:mb-6 flex items-center gap-3">
                <Calculator className="w-6 h-6 md:w-8 md:h-8 text-purple-600" />
                Laufende Kosten & Stromkosten
              </h2>

              <p className="text-sm md:text-base text-gray-700 leading-relaxed mb-6">
                Nach der Anschaffung fallen nur minimale laufende Kosten an. Die Hauptkosten sind die Stromkosten fürs Laden:
              </p>

              {/* Stromkosten-Vergleich */}
              <div className="overflow-x-auto mb-6">
                <table className="w-full bg-white rounded-xl overflow-hidden shadow-lg">
                  <thead className="bg-gradient-to-r from-purple-600 to-blue-600 text-white">
                    <tr>
                      <th className="p-3 text-left text-xs md:text-sm">Lade-Option</th>
                      <th className="p-3 text-left text-xs md:text-sm">Kosten pro kWh</th>
                      <th className="p-3 text-left text-xs md:text-sm">Kosten/100 km*</th>
                      <th className="p-3 text-left text-xs md:text-sm">Pro Jahr**</th>
                    </tr>
                  </thead>
                  <tbody className="text-xs md:text-sm">
                    <tr className="border-b hover:bg-gray-50 bg-green-50">
                      <td className="p-3 font-semibold">Wallbox + PV-Anlage (Solarstrom)</td>
                      <td className="p-3"><strong className="text-green-700">~0,10 €</strong></td>
                      <td className="p-3"><strong className="text-green-700">1,50 €</strong></td>
                      <td className="p-3"><strong className="text-green-700">225 €</strong></td>
                    </tr>
                    <tr className="border-b hover:bg-gray-50 bg-blue-50">
                      <td className="p-3 font-semibold">Wallbox + Haushaltsstrom</td>
                      <td className="p-3"><strong className="text-blue-700">~0,30 €</strong></td>
                      <td className="p-3"><strong className="text-blue-700">4,50 €</strong></td>
                      <td className="p-3"><strong className="text-blue-700">675 €</strong></td>
                    </tr>
                    <tr className="border-b hover:bg-gray-50">
                      <td className="p-3 font-semibold">Wallbox + Autostrom-Tarif</td>
                      <td className="p-3"><strong className="text-green-600">~0,25 €</strong></td>
                      <td className="p-3"><strong className="text-green-600">3,75 €</strong></td>
                      <td className="p-3"><strong className="text-green-600">563 €</strong></td>
                    </tr>
                    <tr className="border-b hover:bg-gray-50 bg-yellow-50">
                      <td className="p-3 font-semibold">Öffentliche Ladestation (AC)</td>
                      <td className="p-3"><strong className="text-orange-700">~0,45 €</strong></td>
                      <td className="p-3"><strong className="text-orange-700">6,75 €</strong></td>
                      <td className="p-3"><strong className="text-orange-700">1.013 €</strong></td>
                    </tr>
                    <tr className="border-b hover:bg-gray-50 bg-red-50">
                      <td className="p-3 font-semibold">Schnelllader (DC, Autobahn)</td>
                      <td className="p-3"><strong className="text-red-700">~0,60 €</strong></td>
                      <td className="p-3"><strong className="text-red-700">9,00 €</strong></td>
                      <td className="p-3"><strong className="text-red-700">1.350 €</strong></td>
                    </tr>
                  </tbody>
                </table>
                <div className="text-xs text-gray-500 mt-2 space-y-1">
                  <div>*bei 15 kWh/100km durchschnittlichem Verbrauch</div>
                  <div>**bei 15.000 km/Jahr</div>
                  <div>Quelle: Vattenfall, EnBW, ADAC (Stand Januar 2025)</div>
                </div>
              </div>

              {/* Weitere laufende Kosten */}
              <div className="bg-gray-50 rounded-xl p-6 mb-6">
                <h3 className="font-bold text-gray-800 mb-3">Weitere laufende Kosten:</h3>
                <div className="space-y-2 text-sm text-gray-700">
                  <div className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                    <div><strong>Wartung:</strong> Nicht verpflichtend, empfohlen alle 2-4 Jahre (~100-200 €)</div>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                    <div><strong>Versicherung:</strong> Meist in Hausrat-/Gebäudeversicherung enthalten (0-50 €/Jahr)</div>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                    <div><strong>Strom-Grundgebühr (separater Zähler):</strong> Optional, ca. 50-100 €/Jahr</div>
                  </div>
                </div>
              </div>

              {/* Einsparungs-Rechnung */}
              <div className="bg-green-50 border-2 border-green-500 rounded-xl p-6">
                <h3 className="font-bold text-green-800 mb-3">Einsparung: Wallbox vs. öffentliches Laden</h3>
                <div className="text-sm text-gray-700">
                  <div className="mb-2"><strong>Beispiel: 15.000 km/Jahr, 15 kWh/100km</strong></div>
                  <div className="space-y-2">
                    <div>Wallbox (Haushaltsstrom): <strong>675 €/Jahr</strong></div>
                    <div>Öffentliche Ladesäule: <strong>1.013 €/Jahr</strong></div>
                    <div className="border-t pt-2 mt-2 font-bold text-lg text-green-700">
                      Ersparnis: 338 €/Jahr
                    </div>
                    <div className="text-xs text-gray-600 italic">
                      → Nach 5-6 Jahren hat sich die Wallbox amortisiert!
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* Section 7: Einsparungen */}
            <section id="einsparungen" className="mb-8 md:mb-12">
              <h2 className="text-xl md:text-3xl font-bold text-gray-800 mb-4 md:mb-6 flex items-center gap-3">
                <TrendingUp className="w-6 h-6 md:w-8 md:h-8 text-green-600" />
                Einsparungen: Wann rechnet sich die Wallbox?
              </h2>

              <p className="text-sm md:text-base text-gray-700 leading-relaxed mb-6">
                Trotz Anfangsinvestition lohnt sich eine Wallbox finanziell – vor allem bei hoher Fahrleistung:
              </p>

              {/* Amortisations-Rechnung */}
              <div className="space-y-6 mb-6">
                <div className="bg-white rounded-xl border-2 border-blue-500 p-6">
                  <h3 className="font-bold text-gray-800 mb-4">Beispiel 1: Durchschnitts-Fahrer (15.000 km/Jahr)</h3>
                  <div className="space-y-3 text-sm text-gray-700">
                    <div>
                      <div className="font-semibold mb-1">Investition:</div>
                      <div>Wallbox + Installation: <strong>1.900 €</strong></div>
                    </div>
                    <div>
                      <div className="font-semibold mb-1">Jährliche Einsparung:</div>
                      <ul className="ml-4 space-y-1">
                        <li>• Wallbox (Haushaltsstrom): 675 €/Jahr</li>
                        <li>• Öffentliches Laden: 1.013 €/Jahr</li>
                        <li>• <strong className="text-green-700">Ersparnis: 338 €/Jahr</strong></li>
                      </ul>
                    </div>
                    <div className="border-t pt-3">
                      <div className="font-bold text-lg text-blue-700">⏱️ Amortisation nach: ~5,6 Jahren</div>
                    </div>
                  </div>
                </div>

                <div className="bg-white rounded-xl border-2 border-green-500 p-6">
                  <h3 className="font-bold text-gray-800 mb-4">Beispiel 2: Vielfahrer (25.000 km/Jahr)</h3>
                  <div className="space-y-3 text-sm text-gray-700">
                    <div>
                      <div className="font-semibold mb-1">Investition:</div>
                      <div>Wallbox + Installation: <strong>1.900 €</strong></div>
                    </div>
                    <div>
                      <div className="font-semibold mb-1">Jährliche Einsparung:</div>
                      <ul className="ml-4 space-y-1">
                        <li>• Wallbox: 1.125 €/Jahr</li>
                        <li>• Öffentlich: 1.688 €/Jahr</li>
                        <li>• <strong className="text-green-700">Ersparnis: 563 €/Jahr</strong></li>
                      </ul>
                    </div>
                    <div className="border-t pt-3">
                      <div className="font-bold text-lg text-green-700">⏱️ Amortisation nach: ~3,4 Jahren</div>
                    </div>
                  </div>
                </div>

                <div className="bg-white rounded-xl border-2 border-purple-500 p-6">
                  <h3 className="font-bold text-gray-800 mb-4">Beispiel 3: Mit PV-Anlage (15.000 km/Jahr)</h3>
                  <div className="space-y-3 text-sm text-gray-700">
                    <div>
                      <div className="font-semibold mb-1">Investition:</div>
                      <div>Wallbox + Installation: <strong>1.900 €</strong></div>
                    </div>
                    <div>
                      <div className="font-semibold mb-1">Jährliche Einsparung:</div>
                      <ul className="ml-4 space-y-1">
                        <li>• Wallbox (50% Solarstrom): 450 €/Jahr</li>
                        <li>• Öffentlich: 1.013 €/Jahr</li>
                        <li>• <strong className="text-green-700">Ersparnis: 563 €/Jahr</strong></li>
                      </ul>
                    </div>
                    <div className="border-t pt-3">
                      <div className="font-bold text-lg text-purple-700">⏱️ Amortisation nach: ~3,4 Jahren</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Zusätzliche Einsparungen */}
              <div className="bg-blue-50 rounded-xl p-6">
                <h3 className="font-bold text-gray-800 mb-3">💡 Zusätzliche Einsparmöglichkeiten:</h3>
                <div className="space-y-2 text-sm text-gray-700">
                  <div className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                    <div><strong>THG-Quote:</strong> 100-350 €/Jahr für Ihr E-Auto (verkaufen Sie Ihre CO₂-Einsparung)</div>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                    <div><strong>Reduzierte Netzentgelte (§14a EnWG):</strong> 110-190 €/Jahr Vergütung vom Netzbetreiber für steuerbare Wallbox</div>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                    <div><strong>Zeitvariable Tarife:</strong> Ab 2025 möglich – Laden nachts zu günstigeren Preisen</div>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                    <div><strong>Steuerliche Absetzung (Dienstwagen):</strong> Wallbox als Betriebsausgabe oder Werbungskosten</div>
                  </div>
                </div>
              </div>
            </section>

            {/* Section 8: Mieter/Eigentümer */}
            <section id="mieter-eigentuemer" className="mb-8 md:mb-12">
              <h2 className="text-xl md:text-3xl font-bold text-gray-800 mb-4 md:mb-6 flex items-center gap-3">
                <Home className="w-6 h-6 md:w-8 md:h-8 text-orange-600" />
                Wallbox als Mieter oder Eigentümer
              </h2>

              <p className="text-sm md:text-base text-gray-700 leading-relaxed mb-6">
                Seit Dezember 2020 haben Mieter und Wohnungseigentümer ein <strong>gesetzliches Recht auf eine Wallbox</strong>. So funktioniert's:
              </p>

              <div className="space-y-6">
                {/* Eigenheim */}
                <div className="bg-green-50 rounded-xl p-6 border-2 border-green-500">
                  <h3 className="font-bold text-gray-800 mb-4 flex items-center gap-2">
                    <CheckCircle className="w-6 h-6 text-green-600" />
                    Eigenheim / Eigentumswohnung (alleiniger Eigentümer)
                  </h3>
                  <div className="text-sm text-gray-700 space-y-2">
                    <div><strong>Einfachster Fall:</strong></div>
                    <ul className="ml-4 space-y-1">
                      <li>• Keine Genehmigung nötig</li>
                      <li>• Sie tragen alle Kosten</li>
                      <li>• Freie Wahl der Wallbox und des Installateurs</li>
                      <li>• Nur Anmeldung beim Netzbetreiber erforderlich</li>
                    </ul>
                  </div>
                </div>

                {/* WEG */}
                <div className="bg-blue-50 rounded-xl p-6 border-2 border-blue-500">
                  <h3 className="font-bold text-gray-800 mb-4 flex items-center gap-2">
                    <AlertTriangle className="w-6 h-6 text-blue-600" />
                    Wohnungseigentümergemeinschaft (WEG)
                  </h3>
                  <div className="text-sm text-gray-700 space-y-3">
                    <div>
                      <strong>Rechtslage seit 2020:</strong>
                      <p className="mt-1">Sie haben einen <strong>gesetzlichen Anspruch</strong> auf Wallbox-Installation (§ 20 WEG). Die WEG darf nicht grundsätzlich ablehnen!</p>
                    </div>
                    <div>
                      <strong>Ablauf:</strong>
                      <ol className="ml-4 space-y-1 list-decimal">
                        <li>Schriftlichen Antrag an Verwaltung stellen</li>
                        <li>Kostenvoranschlag beifügen (2-3 Angebote)</li>
                        <li>WEG-Versammlung: Beschluss über "Wie" (nicht "Ob")</li>
                        <li>Sie tragen die Kosten (es sei denn, WEG beschließt Kostenteilung)</li>
                        <li>Bei Auszug: Wallbox bleibt oder Sie zahlen Rückbau</li>
                      </ol>
                    </div>
                    <div className="bg-white rounded-lg p-3 mt-2">
                      <strong className="text-blue-700">💡 Tipp:</strong> Prüfen Sie, ob andere Eigentümer auch Interesse haben – gemeinsame Installation spart Kosten!
                    </div>
                  </div>
                </div>

                {/* Mieter */}
                <div className="bg-orange-50 rounded-xl p-6 border-2 border-orange-500">
                  <h3 className="font-bold text-gray-800 mb-4 flex items-center gap-2">
                    <AlertTriangle className="w-6 h-6 text-orange-600" />
                    Mietverhältnis
                  </h3>
                  <div className="text-sm text-gray-700 space-y-3">
                    <div>
                      <strong>Rechtslage seit 2020:</strong>
                      <p className="mt-1">Sie haben einen <strong>gesetzlichen Anspruch</strong> auf Wallbox-Installation (§ 554 BGB). Der Vermieter darf nur in Ausnahmefällen ablehnen (z.B. bei unverhältnismäßigen Kosten).</p>
                    </div>
                    <div>
                      <strong>Ablauf:</strong>
                      <ol className="ml-4 space-y-1 list-decimal">
                        <li>Schriftlichen Antrag an Vermieter stellen</li>
                        <li>Fachgerechte Installationsplanung vorlegen</li>
                        <li>Vermieter prüft technische Machbarkeit</li>
                        <li>Sie tragen alle Kosten (Installation + Betrieb)</li>
                        <li>Bei Auszug: Rückbaupflicht (sofern nicht anders vereinbart)</li>
                      </ol>
                    </div>
                    <div>
                      <strong>Kosten-Regelung:</strong>
                      <ul className="ml-4 space-y-1">
                        <li>• <strong>Mieter zahlt:</strong> Wallbox, Installation, Strom</li>
                        <li>• <strong>Vermieter kann zahlen:</strong> Grundinstallation (z.B. Zählerschrank-Upgrade) → diese Kosten können auf alle Mieter umgelegt werden</li>
                      </ul>
                    </div>
                    <div className="bg-white rounded-lg p-3 mt-2">
                      <strong className="text-orange-700">💡 Verhandlungstipp:</strong> Bieten Sie an, die Wallbox bei Auszug zu lassen – der Vermieter wertet damit die Immobilie auf!
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* Section 9: Spartipps */}
            <section id="spartipps" className="mb-8 md:mb-12">
              <h2 className="text-xl md:text-3xl font-bold text-gray-800 mb-4 md:mb-6 flex items-center gap-3">
                <CheckCircle className="w-6 h-6 md:w-8 md:h-8 text-green-600" />
                7 Tipps zum Sparen bei der Wallbox
              </h2>

              <div className="grid md:grid-cols-2 gap-4">
                <div className="bg-green-50 rounded-xl p-6">
                  <div className="flex items-start gap-3">
                    <div className="bg-green-600 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold flex-shrink-0">1</div>
                    <div>
                      <h3 className="font-bold text-gray-800 mb-2">Wallbox mit DC-Fehlerstrom kaufen</h3>
                      <p className="text-sm text-gray-700">Integrierte DC-Fehlerstrom-Erkennung spart 300-500 € bei der Installation, da kein separater FI-Schutzschalter nötig ist!</p>
                    </div>
                  </div>
                </div>

                <div className="bg-blue-50 rounded-xl p-6">
                  <div className="flex items-start gap-3">
                    <div className="bg-blue-600 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold flex-shrink-0">2</div>
                    <div>
                      <h3 className="font-bold text-gray-800 mb-2">Mehrere Angebote einholen</h3>
                      <p className="text-sm text-gray-700">Preise variieren um 30-50%! Holen Sie mindestens 3 Kostenvoranschläge von Elektrofachbetrieben ein.</p>
                    </div>
                  </div>
                </div>

                <div className="bg-purple-50 rounded-xl p-6">
                  <div className="flex items-start gap-3">
                    <div className="bg-purple-600 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold flex-shrink-0">3</div>
                    <div>
                      <h3 className="font-bold text-gray-800 mb-2">Förderung VOR Kauf beantragen</h3>
                      <p className="text-sm text-gray-700">Förderungen gibt es nur, wenn Sie VORHER den Antrag stellen. Nachträgliche Förderung ist nicht möglich!</p>
                    </div>
                  </div>
                </div>

                <div className="bg-orange-50 rounded-xl p-6">
                  <div className="flex items-start gap-3">
                    <div className="bg-orange-600 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold flex-shrink-0">4</div>
                    <div>
                      <h3 className="font-bold text-gray-800 mb-2">Günstige Standort-Wahl</h3>
                      <p className="text-sm text-gray-700">Je näher am Sicherungskasten, desto günstiger. Jeder Meter Kabelweg kostet 10-30 €. Wanddurchbrüche vermeiden!</p>
                    </div>
                  </div>
                </div>

                <div className="bg-teal-50 rounded-xl p-6">
                  <div className="flex items-start gap-3">
                    <div className="bg-teal-600 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold flex-shrink-0">5</div>
                    <div>
                      <h3 className="font-bold text-gray-800 mb-2">Autostrom-Tarif nutzen</h3>
                      <p className="text-sm text-gray-700">Spezielle E-Auto-Tarife kosten 0,25-0,28 €/kWh statt 0,35 €. Ersparnis: ~100 €/Jahr bei 15.000 km!</p>
                    </div>
                  </div>
                </div>

                <div className="bg-pink-50 rounded-xl p-6">
                  <div className="flex items-start gap-3">
                    <div className="bg-pink-600 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold flex-shrink-0">6</div>
                    <div>
                      <h3 className="font-bold text-gray-800 mb-2">PV-Anlage kombinieren</h3>
                      <p className="text-sm text-gray-700">Mit Solarstrom laden Sie für ~0,10 €/kWh. Bei 50% Eigenverbrauch sparen Sie 300 €/Jahr!</p>
                    </div>
                  </div>
                </div>

                <div className="bg-yellow-50 rounded-xl p-6">
                  <div className="flex items-start gap-3">
                    <div className="bg-yellow-600 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold flex-shrink-0">7</div>
                    <div>
                      <h3 className="font-bold text-gray-800 mb-2">11 kW statt 22 kW</h3>
                      <p className="text-sm text-gray-700">11 kW reicht für 95% der Nutzer, kostet 30-50% weniger und braucht keine Genehmigung!</p>
                    </div>
                  </div>
                </div>

              </div>
            </section>

            {/* Section 10: Fazit */}
            <section id="fazit" className="mb-8 md:mb-12">
          

               {/* Section 10: Fazit */}
            <section id="fazit" className="mb-8 md:mb-12">
            <section id="fazit" className="mb-8">
              <div className="bg-gradient-to-r from-blue-600 to-green-600 rounded-xl p-6 md:p-8 text-white">
                <h2 className="text-2xl md:text-3xl font-bold mb-4">
                Fazit: Die Auswahl einer Wallbox ist leichter als gedacht und spart Geld
                </h2>
                <p className="text-base md:text-lg leading-relaxed mb-4">
                  Eine <strong>Wallbox kostet 2025 zwischen 800 und 3.500 Euro</strong> inkl. Installation. Die genauen Kosten hängen von der Wallbox-Ausstattung (500-2.000 €) und den Installationsbedingungen (500-3.000 €) ab. Für die meisten Privatnutzer ist eine <strong>11 kW Wallbox mit WLAN, App-Steuerung und DC-Fehlerstrom</strong> die beste Wahl – sie kostet komplett installiert etwa <strong>1.500-2.200 Euro</strong>.
                </p>
                <div className="space-y-3 text-base md:text-lg mb-6">
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
                  <p className="text-lg font-semibold">
                  Bundesweite Förderungen gibt es 2025 nicht mehr, aber <strong>NRW</strong> (bis 1.500 €) und <strong>Baden-Württemberg</strong> (bis 2.500 €) bieten noch Zuschüsse. Die Wallbox rechnet sich bereits nach <strong>3-6 Jahren</strong> durch günstigere Stromkosten gegenüber öffentlichen Ladestationen. Mit PV-Anlage sogar noch schneller!
                  </p>
                </div>
              </div>
            </section>
                        </section>

            </section>

            {/* Call-to-Action */}
            <div className="bg-gradient-to-r from-purple-600 to-blue-600 rounded-2xl p-8 text-center text-white">
              <h3 className="text-2xl font-bold mb-4">
                📊 Berechnen Sie Ihre E-Auto-Kosten
              </h3>
              <p className="text-lg mb-6 max-w-2xl mx-auto">
                Mit unserem TCO-Rechner können Sie die Gesamtkosten Ihres E-Autos inklusive Stromkosten für die Wallbox berechnen und mit einem Verbrenner vergleichen.
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
            <li>• Wallbox-Preise & Kosten: ADAC Wallbox-Test, Enpal, Vattenfall (Stand Januar 2025)</li>
            <li>• Installationskosten: ADAC Stichproben 2024/2025, Solar Conze, eMova</li>
            <li>• Förderungen: EnBW, ADAC, KfW, L-Bank Baden-Württemberg, ElektroMobilitätNRW</li>
            <li>• Stromkosten: Vattenfall, EnBW mobility+, ADAC (Durchschnittspreise 2025)</li>
            <li>• Rechtliche Grundlagen: § 20 WEG, § 554 BGB (Recht auf Wallbox)</li>
            <li>• §14a EnWG: Steuerbare Verbrauchseinrichtungen (ab 2025)</li>
          </ul>
          <p className="mt-4 leading-relaxed">
            <strong>Haftungsausschluss:</strong> Alle Angaben ohne Gewähr. Preise und Förderungen können regional variieren und sich ändern. Förderanträge müssen in der Regel vor dem Kauf gestellt werden. Installationen dürfen nur durch zertifizierte Elektrofachbetriebe erfolgen. Wir empfehlen, aktuelle Förderungen bei Ihrer Kommune und Ihrem Bundesland zu prüfen.
          </p>
        </div>

      </div>
    </div>
  );
}
