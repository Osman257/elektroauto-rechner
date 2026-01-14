import React, { useEffect } from 'react';
import SEO from '../components/SEO';
import Header from '../components/Header';
import { 
  ArrowLeft,
  Zap,
  Home,
  Euro,
  CheckCircle,
  AlertCircle,
  Battery,
  Wallet,
  Calculator,
  Lightbulb,
  Shield,
  Smartphone,
  Sun,
  Car,
  Settings,
  Users
} from 'lucide-react';

export default function WallboxTypenPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-white">
      {/* SEO */}
      <SEO 
        title="Wallbox-Typen 2025: Welche Ladestation passt zu mir? | e-Autowelt"
        description="Wallbox-Vergleich 2025: Von 11 kW bis 22 kW, mit oder ohne Lastmanagement. Finden Sie die perfekte Ladestation für Ihr E-Auto – inkl. Kaufberatung & Preisübersicht."
        keywords="Wallbox Typen, Wallbox Vergleich, Ladestation E-Auto, 11 kW Wallbox, 22 kW Wallbox, Wallbox mit Lastmanagement, intelligente Wallbox, Wallbox kaufen, Easee Home, go-e Charger, Webasto Live, Juice Booster, KEBA KeContact"
        canonicalPath="/ratgeber/wallbox-typen-vergleich"
        ogImage="/images/ratgeber/wallbox-typen-og.jpg"
        ogType="article"
        publishedDate="2025-01-14T12:00:00Z"
        modifiedDate="2025-01-14T12:00:00Z"
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

        <article className="bg-white rounded-2xl shadow-xl overflow-hidden">
          
    {/* Hero Image */}
          <div className="relative h-64 md:h-96 bg-gradient-to-br from-green-500 to-blue-600 overflow-hidden">
            <img 
              src="/images/ratgeber/wallbox-typen-hero.webp"
              alt="Verschiedene Wallbox-Typen im Vergleich"
              className="w-full h-full object-cover opacity-95"
              loading="lazy"
              decoding="async"

            />
            */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
            <div className="absolute bottom-0 left-0 right-0 p-6 md:p-10 text-white">
              <div className="flex items-center gap-3 mb-3 flex-wrap">
                <div className="bg-white/30 backdrop-blur-md p-2 rounded-lg shadow-lg">
                  <Zap className="w-6 h-6 md:w-8 md:h-8" />
                </div>
                <span className="text-xs md:text-sm bg-white/30 backdrop-blur-md px-3 py-1 rounded-full font-semibold shadow-lg">
                  📖 18 Min. Lesezeit
                </span>
                <span className="text-xs md:text-sm bg-white/30 backdrop-blur-md px-3 py-1 rounded-full font-semibold shadow-lg">
                  Aktualisiert am 14. Januar 2025
                </span>
              </div>
              <h1 className="text-2xl md:text-4xl lg:text-5xl font-bold leading-tight">
                Wallbox-Typen im Vergleich: Welche Ladestation passt zu Ihnen?
              </h1>
            </div>
          </div>

          <div className="p-6 md:p-10">
            {/* Intro */}
            <div className="mb-8 md:mb-12">
              <p className="text-lg md:text-xl text-gray-600 leading-relaxed mb-4">
                Sie haben sich für ein Elektroauto entschieden! Doch jetzt steht die nächste wichtige Frage an: <strong>Welche Wallbox ist die richtige für Sie?</strong> Der Markt bietet eine verwirrende Vielfalt an Ladestationen mit unterschiedlichen Leistungen, Funktionen und Preisen. Von der einfachen 11-kW-Box bis zur intelligenten 22-kW-Wallbox mit Solaranbindung – die Auswahl kann überwältigend sein.
              </p>
              <div className="bg-blue-50 border-2 border-blue-200 rounded-xl p-6">
                <p className="text-base md:text-lg text-gray-700 leading-relaxed">
                  <strong className="text-blue-700">⚡ Schnell-Überblick:</strong> Die meisten E-Auto-Besitzer sind mit einer <strong>11-kW-Wallbox</strong> (ab ca. 400€) bestens bedient – sie lädt über Nacht jedes Auto voll und benötigt keine Genehmigung. Wer ein Fahrzeug mit großem Akku (über 77 kWh) fährt oder häufig schnell laden muss, sollte eine <strong>22-kW-Variante</strong> (ab ca. 600€) in Betracht ziehen. <strong>Intelligente Funktionen</strong> wie Lastmanagement oder PV-Überschussladen lohnen sich besonders bei Solaranlagen oder Mehrfamilienhäusern!
                </p>
              </div>
            </div>

            {/* Inhaltsverzeichnis */}
            <nav className="bg-gray-50 rounded-xl p-6 mb-8 md:mb-12">
              <h2 className="text-xl md:text-2xl font-bold text-gray-800 mb-4">
                Inhaltsverzeichnis
              </h2>
              <ol className="space-y-2 text-sm md:text-base">
                <li><a href="#grundlagen" className="text-blue-600 hover:underline">1. Wallbox-Grundlagen: Was Sie wissen müssen</a></li>
                <li><a href="#leistungsklassen" className="text-blue-600 hover:underline">2. Leistungsklassen: 11 kW vs. 22 kW</a></li>
                <li><a href="#wallbox-typen" className="text-blue-600 hover:underline">3. Wallbox-Typen im Detail</a></li>
                <li><a href="#beliebte-modelle" className="text-blue-600 hover:underline">4. Die beliebtesten Wallbox-Modelle im Vergleich</a></li>
                <li><a href="#funktionen" className="text-blue-600 hover:underline">5. Wichtige Funktionen & Features</a></li>
                <li><a href="#entscheidungshilfe" className="text-blue-600 hover:underline">6. Welche Wallbox passt zu mir?</a></li>
                <li><a href="#kosten" className="text-blue-600 hover:underline">7. Kosten & Preisübersicht</a></li>
                <li><a href="#installation" className="text-blue-600 hover:underline">8. Installation & Genehmigungen</a></li>
                <li><a href="#fazit" className="text-blue-600 hover:underline">9. Fazit & Empfehlungen</a></li>
              </ol>
            </nav>

            {/* Section 1: Grundlagen */}
            <section id="grundlagen" className="mb-12 scroll-mt-24">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                1. Wallbox-Grundlagen: Was Sie wissen müssen
              </h2>
              
              <p className="text-gray-700 mb-4 leading-relaxed">
                Eine Wallbox ist eine fest installierte Ladestation für Elektroautos, die an der Wand Ihrer Garage oder Ihres Carports montiert wird. Im Gegensatz zum mitgelieferten Notladekabel (ICCB), das an die normale Haushaltssteckdose angeschlossen wird, bietet eine Wallbox <strong>deutlich höhere Ladeleistungen und mehr Sicherheit</strong>.
              </p>

              <div className="bg-yellow-50 border-l-4 border-yellow-500 p-6 mb-6">
                <div className="flex items-start">
                  <AlertCircle className="w-6 h-6 text-yellow-600 mr-3 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-bold text-lg text-gray-900 mb-2">Warum nicht einfach die Haushaltssteckdose nutzen?</h3>
                    <p className="text-gray-700">Die normale Schuko-Steckdose liefert maximal <strong>2,3 kW</strong> und ist für Dauerbelastung nicht ausgelegt. Ein E-Auto mit 60 kWh Akku bräuchte über <strong>26 Stunden</strong> für eine Vollladung – mit einer 11-kW-Wallbox sind es nur etwa 6 Stunden. Zudem besteht bei dauerhafter Nutzung der Haushaltssteckdose <strong>Brandgefahr</strong>.</p>
                  </div>
                </div>
              </div>

              {/* Vergleichskarten */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
                <div className="bg-red-50 p-5 rounded-lg border-2 border-red-200">
                  <div className="text-sm text-red-600 font-semibold mb-1">Haushaltssteckdose</div>
                  <div className="text-2xl font-bold text-red-700">2,3 kW</div>
                  <div className="text-xs text-gray-600 mt-1">~26h für 60 kWh</div>
                </div>
                <div className="bg-emerald-50 p-5 rounded-lg border-2 border-emerald-500">
                  <div className="text-sm text-emerald-600 font-semibold mb-1">11 kW Wallbox</div>
                  <div className="text-2xl font-bold text-emerald-700">11 kW</div>
                  <div className="text-xs text-gray-600 mt-1">~6h für 60 kWh</div>
                </div>
                <div className="bg-blue-50 p-5 rounded-lg border-2 border-blue-500">
                  <div className="text-sm text-blue-600 font-semibold mb-1">22 kW Wallbox</div>
                  <div className="text-2xl font-bold text-blue-700">22 kW</div>
                  <div className="text-xs text-gray-600 mt-1">~3h für 60 kWh</div>
                </div>
              </div>

              <p className="text-gray-700 mb-4 leading-relaxed">
                Alle Wallboxen nutzen den <strong>Typ-2-Stecker</strong> – den europäischen Standard für AC-Laden. Dieser ist an allen modernen Elektroautos und öffentlichen Ladestationen zu finden. Die Kommunikation zwischen Wallbox und Fahrzeug erfolgt über ein standardisiertes Protokoll, das die maximale Ladeleistung aushandelt.
              </p>
            </section>

            {/* Section 2: Leistungsklassen */}
            <section id="leistungsklassen" className="mb-12 scroll-mt-24">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                2. Leistungsklassen: 11 kW vs. 22 kW
              </h2>

              <p className="text-gray-700 mb-6 leading-relaxed">
                Die wichtigste Entscheidung bei der Wallbox-Wahl ist die <strong>Ladeleistung</strong>. In Deutschland sind zwei Klassen relevant: 11 kW (dreiphasig mit 16 Ampere) und 22 kW (dreiphasig mit 32 Ampere). Die Unterschiede sind erheblich – aber nicht immer ist mehr Leistung die bessere Wahl.
              </p>

              {/* 11 kW Box */}
              <div className="bg-emerald-50 border-2 border-emerald-300 rounded-xl p-6 mb-6">
                <div className="flex items-start mb-4">
                  <div className="bg-emerald-500 p-2 rounded-lg mr-4">
                    <Battery className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900">11 kW Wallbox – Der Allrounder</h3>
                    <p className="text-emerald-700 font-semibold">Empfehlung für 90% aller E-Auto-Besitzer</p>
                  </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-2 flex items-center gap-2">
                      <CheckCircle className="w-5 h-5 text-emerald-600" /> Vorteile
                    </h4>
                    <ul className="text-gray-700 space-y-1 text-sm">
                      <li>• Keine Genehmigung erforderlich (nur Anmeldung)</li>
                      <li>• Günstigere Anschaffungskosten (ab ~400€)</li>
                      <li>• Geringere Installationskosten</li>
                      <li>• Ausreichend für Nachtladung</li>
                      <li>• Schont den Akku durch moderates Laden</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-2 flex items-center gap-2">
                      <AlertCircle className="w-5 h-5 text-yellow-600" /> Zu beachten
                    </h4>
                    <ul className="text-gray-700 space-y-1 text-sm">
                      <li>• Längere Ladezeit bei großen Akkus</li>
                      <li>• Bei täglichem Vielfahren evtl. knapp</li>
                    </ul>
                  </div>
                </div>
                <div className="bg-white rounded-lg p-4">
                  <p className="text-sm text-gray-600">
                    <strong>Rechenbeispiel:</strong> Ein VW ID.4 mit 77 kWh Akku lädt in etwa <strong>7 Stunden</strong> von 10% auf 80%. Über Nacht (22 Uhr bis 6 Uhr) ist das Auto morgens voll geladen.
                  </p>
                </div>
              </div>

              {/* 22 kW Box */}
              <div className="bg-blue-50 border-2 border-blue-300 rounded-xl p-6 mb-6">
                <div className="flex items-start mb-4">
                  <div className="bg-blue-500 p-2 rounded-lg mr-4">
                    <Zap className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900">22 kW Wallbox – Die Schnelle</h3>
                    <p className="text-blue-700 font-semibold">Für Vielfahrer und große Akkus</p>
                  </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-2 flex items-center gap-2">
                      <CheckCircle className="w-5 h-5 text-emerald-600" /> Vorteile
                    </h4>
                    <ul className="text-gray-700 space-y-1 text-sm">
                      <li>• Doppelte Ladegeschwindigkeit</li>
                      <li>• Zukunftssicher für größere Akkus</li>
                      <li>• Ideal bei unregelmäßigen Standzeiten</li>
                      <li>• Mehrere Fahrzeuge nacheinander laden</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-2 flex items-center gap-2">
                      <AlertCircle className="w-5 h-5 text-yellow-600" /> Zu beachten
                    </h4>
                    <ul className="text-gray-700 space-y-1 text-sm">
                      <li>• Genehmigung durch Netzbetreiber nötig</li>
                      <li>• Höhere Anschaffungskosten (ab ~600€)</li>
                      <li>• Stärkerer Hausanschluss erforderlich</li>
                      <li>• Viele Autos laden max. mit 11 kW AC</li>
                    </ul>
                  </div>
                </div>
                <div className="bg-white rounded-lg p-4">
                  <p className="text-sm text-gray-600">
                    <strong>Wichtig:</strong> Nicht jedes E-Auto kann 22 kW AC-Ladeleistung nutzen! Viele Modelle wie der Tesla Model 3 oder VW ID.3 laden maximal mit <strong>11 kW</strong>. Prüfen Sie vor dem Kauf die Spezifikationen Ihres Fahrzeugs.
                  </p>
                </div>
              </div>

              {/* Vergleichstabelle */}
              <div className="overflow-x-auto mb-6">
                <table className="w-full border-collapse text-sm">
                  <thead>
                    <tr className="bg-gray-100">
                      <th className="border border-gray-300 p-3 text-left font-semibold">Kriterium</th>
                      <th className="border border-gray-300 p-3 text-center font-semibold text-emerald-700">11 kW</th>
                      <th className="border border-gray-300 p-3 text-center font-semibold text-blue-700">22 kW</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="border border-gray-300 p-3">Genehmigung</td>
                      <td className="border border-gray-300 p-3 text-center bg-emerald-50">Nur Anmeldung</td>
                      <td className="border border-gray-300 p-3 text-center bg-yellow-50">Genehmigung nötig</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 p-3">Preis ab</td>
                      <td className="border border-gray-300 p-3 text-center">~400€</td>
                      <td className="border border-gray-300 p-3 text-center">~600€</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 p-3">Ladezeit 60 kWh</td>
                      <td className="border border-gray-300 p-3 text-center">~6 Stunden</td>
                      <td className="border border-gray-300 p-3 text-center">~3 Stunden</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 p-3">Hausanschluss</td>
                      <td className="border border-gray-300 p-3 text-center">Standard reicht</td>
                      <td className="border border-gray-300 p-3 text-center">Evtl. Verstärkung nötig</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 p-3">Fahrzeugkompatibilität</td>
                      <td className="border border-gray-300 p-3 text-center bg-emerald-50">Alle E-Autos</td>
                      <td className="border border-gray-300 p-3 text-center bg-yellow-50">Nur einige nutzen 22 kW</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            {/* Section 3: Wallbox-Typen */}
            <section id="wallbox-typen" className="mb-12 scroll-mt-24">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                3. Wallbox-Typen im Detail
              </h2>

              <p className="text-gray-700 mb-6 leading-relaxed">
                Neben der Ladeleistung unterscheiden sich Wallboxen auch in ihrer <strong>Ausstattung und Funktionalität</strong>. Je nach Einsatzzweck und persönlichen Anforderungen gibt es verschiedene Typen:
              </p>

              {/* Typ 1: Basis-Wallbox */}
              <div className="border-2 border-gray-200 rounded-xl p-6 mb-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="bg-gray-500 p-2 rounded-lg">
                    <Home className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900">Basis-Wallbox (ohne Extras)</h3>
                    <span className="text-sm text-gray-500">Preis: 400€ – 700€</span>
                  </div>
                </div>
                <p className="text-gray-700 mb-4">
                  Die einfachste und günstigste Variante. Lädt zuverlässig, bietet aber keine zusätzlichen Funktionen wie App-Steuerung oder Lastmanagement. Ideal für Einzelgaragen ohne spezielle Anforderungen.
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="bg-emerald-100 text-emerald-700 text-xs px-3 py-1 rounded-full">✓ Günstig</span>
                  <span className="bg-emerald-100 text-emerald-700 text-xs px-3 py-1 rounded-full">✓ Einfache Installation</span>
                  <span className="bg-emerald-100 text-emerald-700 text-xs px-3 py-1 rounded-full">✓ Zuverlässig</span>
                  <span className="bg-gray-100 text-gray-600 text-xs px-3 py-1 rounded-full">○ Keine App</span>
                  <span className="bg-gray-100 text-gray-600 text-xs px-3 py-1 rounded-full">○ Kein Lastmanagement</span>
                </div>
                <p className="text-sm text-gray-600">
                  <strong>Beispiele:</strong> Heidelberg Wallbox Energy Control, go-e Charger Gemini (Basic-Version), ABL eMH1
                </p>
              </div>

              {/* Typ 2: Smarte Wallbox */}
              <div className="border-2 border-blue-300 rounded-xl p-6 mb-6 bg-blue-50/30">
                <div className="flex items-center gap-3 mb-4">
                  <div className="bg-blue-500 p-2 rounded-lg">
                    <Smartphone className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900">Smarte Wallbox (mit App & WLAN)</h3>
                    <span className="text-sm text-blue-600 font-semibold">Beliebteste Wahl</span>
                  </div>
                </div>
                <p className="text-gray-700 mb-4">
                  Bietet App-Steuerung, Verbrauchsübersicht und zeitgesteuerte Ladevorgänge. Perfekt für alle, die ihren Ladestrom im Blick behalten und günstigen Nachtstrom nutzen wollen.
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="bg-emerald-100 text-emerald-700 text-xs px-3 py-1 rounded-full">✓ App-Steuerung</span>
                  <span className="bg-emerald-100 text-emerald-700 text-xs px-3 py-1 rounded-full">✓ Ladestatistiken</span>
                  <span className="bg-emerald-100 text-emerald-700 text-xs px-3 py-1 rounded-full">✓ Zeitsteuerung</span>
                  <span className="bg-emerald-100 text-emerald-700 text-xs px-3 py-1 rounded-full">✓ WLAN/LAN</span>
                  <span className="bg-blue-100 text-blue-700 text-xs px-3 py-1 rounded-full">~ Mittlerer Preis</span>
                </div>
                <p className="text-sm text-gray-600">
                  <strong>Beispiele:</strong> Easee Home, Webasto Live, Juice Booster 2, go-e Charger Gemini flex
                </p>
              </div>

              {/* Typ 3: Wallbox mit Lastmanagement */}
              <div className="border-2 border-purple-300 rounded-xl p-6 mb-6 bg-purple-50/30">
                <div className="flex items-center gap-3 mb-4">
                  <div className="bg-purple-500 p-2 rounded-lg">
                    <Settings className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900">Wallbox mit Lastmanagement</h3>
                    <span className="text-sm text-purple-600 font-semibold">Für Mehrfamilienhäuser & Tiefgaragen</span>
                  </div>
                </div>
                <p className="text-gray-700 mb-4">
                  Verteilt die verfügbare Ladeleistung intelligent auf mehrere Fahrzeuge. Verhindert Überlastung des Hausanschlusses und ist bei mehreren Ladepunkten oft vorgeschrieben.
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="bg-emerald-100 text-emerald-700 text-xs px-3 py-1 rounded-full">✓ Statisches Lastmanagement</span>
                  <span className="bg-emerald-100 text-emerald-700 text-xs px-3 py-1 rounded-full">✓ Dynamisches Lastmanagement</span>
                  <span className="bg-emerald-100 text-emerald-700 text-xs px-3 py-1 rounded-full">✓ Mehrere Ladepunkte</span>
                  <span className="bg-yellow-100 text-yellow-700 text-xs px-3 py-1 rounded-full">! Höherer Preis</span>
                </div>
                <div className="bg-white rounded-lg p-4 mt-4">
                  <p className="text-sm text-gray-700">
                    <strong>Statisch vs. Dynamisch:</strong> Statisches Lastmanagement verteilt eine feste Leistung gleichmäßig. Dynamisches Lastmanagement misst den aktuellen Hausverbrauch und passt die Ladeleistung in Echtzeit an – so nutzen Sie immer die maximal verfügbare Kapazität.
                  </p>
                </div>
                <p className="text-sm text-gray-600 mt-4">
                  <strong>Beispiele:</strong> KEBA KeContact P30, ABL eMH3, Mennekes Amtron Xtra
                </p>
              </div>

              {/* Typ 4: Solar-Wallbox */}
              <div className="border-2 border-yellow-300 rounded-xl p-6 mb-6 bg-yellow-50/30">
                <div className="flex items-center gap-3 mb-4">
                  <div className="bg-yellow-500 p-2 rounded-lg">
                    <Sun className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900">Solar-Wallbox (PV-Überschussladen)</h3>
                    <span className="text-sm text-yellow-600 font-semibold">Für PV-Anlagen-Besitzer</span>
                  </div>
                </div>
                <p className="text-gray-700 mb-4">
                  Lädt bevorzugt mit selbst erzeugtem Solarstrom. Kommuniziert mit dem Wechselrichter und passt die Ladeleistung an die aktuelle PV-Produktion an. So fahren Sie mit eigenem Sonnenstrom!
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="bg-emerald-100 text-emerald-700 text-xs px-3 py-1 rounded-full">✓ PV-Überschussladen</span>
                  <span className="bg-emerald-100 text-emerald-700 text-xs px-3 py-1 rounded-full">✓ Eigenverbrauch maximieren</span>
                  <span className="bg-emerald-100 text-emerald-700 text-xs px-3 py-1 rounded-full">✓ Stromkosten senken</span>
                  <span className="bg-yellow-100 text-yellow-700 text-xs px-3 py-1 rounded-full">! Wechselrichter-Kompatibilität prüfen</span>
                </div>
                <div className="bg-white rounded-lg p-4 mt-4">
                  <p className="text-sm text-gray-700">
                    <strong>Rechenbeispiel:</strong> Mit einer 10 kWp PV-Anlage und 15.000 km Jahresfahrleistung können Sie etwa <strong>2.000 kWh</strong> Solarstrom ins Auto laden. Bei einem Strompreis von 35 ct/kWh sparen Sie rund <strong>700€ pro Jahr</strong>.
                  </p>
                </div>
                <p className="text-sm text-gray-600 mt-4">
                  <strong>Beispiele:</strong> Fronius Wattpilot, SMA EV Charger, KOSTAL ENECTOR, go-e mit SolarEdge-Anbindung
                </p>
              </div>

              {/* Typ 5: Abrechnungsfähige Wallbox */}
              <div className="border-2 border-emerald-300 rounded-xl p-6 mb-6 bg-emerald-50/30">
                <div className="flex items-center gap-3 mb-4">
                  <div className="bg-emerald-500 p-2 rounded-lg">
                    <Euro className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900">Eichrechtskonforme Wallbox</h3>
                    <span className="text-sm text-emerald-600 font-semibold">Für Dienstwagen & gewerbliche Nutzung</span>
                  </div>
                </div>
                <p className="text-gray-700 mb-4">
                  Mit geeichtem Stromzähler für rechtssichere Abrechnungen. Notwendig, wenn Sie den Ladestrom mit dem Arbeitgeber oder Mietern abrechnen möchten.
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="bg-emerald-100 text-emerald-700 text-xs px-3 py-1 rounded-full">✓ Geeichter MID-Zähler</span>
                  <span className="bg-emerald-100 text-emerald-700 text-xs px-3 py-1 rounded-full">✓ Rechtssichere Abrechnung</span>
                  <span className="bg-emerald-100 text-emerald-700 text-xs px-3 py-1 rounded-full">✓ Dienstwagenabrechnung</span>
                  <span className="bg-yellow-100 text-yellow-700 text-xs px-3 py-1 rounded-full">! Höhere Kosten</span>
                </div>
                <p className="text-sm text-gray-600">
                  <strong>Beispiele:</strong> KEBA KeContact P30 c-series, Webasto Live mit MID-Zähler, Mennekes Amtron Professional
                </p>
              </div>

              {/* Typ 6: Bidirektionale Wallbox */}
              <div className="border-2 border-indigo-300 rounded-xl p-6 mb-6 bg-indigo-50/30">
                <div className="flex items-center gap-3 mb-4">
                  <div className="bg-indigo-500 p-2 rounded-lg">
                    <Battery className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900">Bidirektionale Wallbox (V2H/V2G)</h3>
                    <span className="text-sm text-indigo-600 font-semibold">Die Zukunft des Ladens</span>
                  </div>
                </div>
                <p className="text-gray-700 mb-4">
                  Kann nicht nur laden, sondern auch Strom vom Auto zurück ins Haus (V2H) oder Netz (V2G) speisen. Das Elektroauto wird zum Hausspeicher – ideal in Kombination mit PV-Anlagen.
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="bg-emerald-100 text-emerald-700 text-xs px-3 py-1 rounded-full">✓ Vehicle-to-Home (V2H)</span>
                  <span className="bg-emerald-100 text-emerald-700 text-xs px-3 py-1 rounded-full">✓ Vehicle-to-Grid (V2G)</span>
                  <span className="bg-emerald-100 text-emerald-700 text-xs px-3 py-1 rounded-full">✓ Notstromfähig</span>
                  <span className="bg-red-100 text-red-700 text-xs px-3 py-1 rounded-full">! Sehr teuer (ab 4.000€)</span>
                  <span className="bg-red-100 text-red-700 text-xs px-3 py-1 rounded-full">! Wenige kompatible Autos</span>
                </div>
                <div className="bg-white rounded-lg p-4 mt-4">
                  <p className="text-sm text-gray-700">
                    <strong>Hinweis:</strong> Aktuell unterstützen nur wenige Fahrzeuge bidirektionales Laden (z.B. Hyundai Ioniq 5/6, Kia EV6, VW ID. Modelle mit entsprechender Software). Die Technologie ist noch in der Entwicklung, wird aber in den nächsten Jahren zum Standard werden.
                  </p>
                </div>
                <p className="text-sm text-gray-600 mt-4">
                  <strong>Beispiele:</strong> Wallbox Quasar 2, SMA EV Charger (V2H-fähig), ABB Terra AC Wallbox
                </p>
              </div>
            </section>

            {/* Section 4: Beliebte Modelle im Detail */}
            <section id="beliebte-modelle" className="mb-12 scroll-mt-24">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                4. Die beliebtesten Wallbox-Modelle im Vergleich
              </h2>

              <p className="text-gray-700 mb-6 leading-relaxed">
                Der Wallbox-Markt ist unübersichtlich – hunderte Modelle buhlen um Ihre Aufmerksamkeit. Wir haben die <strong>beliebtesten und am besten getesteten Wallboxen</strong> detailliert unter die Lupe genommen. Von der kompakten Easee bis zum robusten Juice Booster: Hier finden Sie alle wichtigen Details.
              </p>

              {/* Easee Home / Charge */}
              <div className="bg-gradient-to-r from-teal-50 to-emerald-50 border-2 border-teal-300 rounded-2xl p-6 mb-8">
                <div className="flex items-center justify-between mb-4 flex-wrap gap-4">
                  <div className="flex items-center gap-3">
                    <div className="bg-teal-500 p-3 rounded-xl">
                      <Zap className="w-8 h-8 text-white" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-gray-900">Easee Home / Charge</h3>
                      <p className="text-teal-600 font-semibold">Der Design-Sieger aus Norwegen</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="text-2xl font-bold text-teal-700">ab 849€</div>
                    <div className="text-sm text-gray-500">UVP 2025</div>
                  </div>
                </div>

                <p className="text-gray-700 mb-4 leading-relaxed">
                  Die Easee-Wallboxen gehören zu den <strong>kompaktesten und elegantesten Ladestationen</strong> auf dem Markt. Mit nur 1,5 kg Gewicht und Abmessungen von 25x19x10 cm passt sie in jeden Schuhkarton – und an jede Wand. Im ADAC-Test erreichte sie die Note 1,9 (gut) und überzeugte besonders durch <strong>einfaches Handling und sichere Ladefunktion</strong>.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-4">
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-3">Technische Daten</h4>
                    <ul className="text-sm text-gray-700 space-y-2">
                      <li className="flex justify-between"><span>Ladeleistung:</span> <span className="font-semibold">bis 22 kW (3x32A)</span></li>
                      <li className="flex justify-between"><span>Anschluss:</span> <span className="font-semibold">Typ-2 Buchse</span></li>
                      <li className="flex justify-between"><span>Konnektivität:</span> <span className="font-semibold">WLAN, LTE (eSIM), Bluetooth</span></li>
                      <li className="flex justify-between"><span>Schutzart:</span> <span className="font-semibold">IP54 (spritzwassergeschützt)</span></li>
                      <li className="flex justify-between"><span>Gewicht:</span> <span className="font-semibold">nur 1,5 kg</span></li>
                      <li className="flex justify-between"><span>DC-Fehlerschutz:</span> <span className="font-semibold">extern (FI Typ A reicht)</span></li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-3">Besondere Features</h4>
                    <ul className="text-sm text-gray-700 space-y-2">
                      <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-emerald-500" /> Modularer Aufbau (Charge Berry)</li>
                      <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-emerald-500" /> Integrierte eSIM (lebenslang kostenlos)</li>
                      <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-emerald-500" /> Easee Equalizer für Lastmanagement</li>
                      <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-emerald-500" /> PV-Überschussladen möglich</li>
                      <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-emerald-500" /> RFID-Zugangskontrolle</li>
                      <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-emerald-500" /> §14a EnWG-konform</li>
                    </ul>
                  </div>
                </div>

                <div className="bg-white rounded-xl p-4 mb-4">
                  <h4 className="font-semibold text-gray-800 mb-2">💡 Easee Equalizer – Das Geheimnis der smarten Steuerung</h4>
                  <p className="text-sm text-gray-700">
                    Der optional erhältliche <strong>Easee Equalizer</strong> (ca. 300€) macht die Wallbox zum intelligenten Energiemanager. Er misst in Echtzeit den Hausverbrauch und passt die Ladeleistung automatisch an – so wird die Hauptsicherung nie überlastet. Für PV-Anlagen-Besitzer ermöglicht er echtes Überschussladen: Das Auto wird bevorzugt mit Solarstrom geladen.
                  </p>
                </div>

                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="bg-emerald-100 text-emerald-700 text-xs px-3 py-1 rounded-full font-semibold">✓ ADAC Note 1,9</span>
                  <span className="bg-emerald-100 text-emerald-700 text-xs px-3 py-1 rounded-full font-semibold">✓ Stiftung Warentest GUT</span>
                  <span className="bg-emerald-100 text-emerald-700 text-xs px-3 py-1 rounded-full font-semibold">✓ Extrem kompakt</span>
                  <span className="bg-emerald-100 text-emerald-700 text-xs px-3 py-1 rounded-full font-semibold">✓ 5 Farben verfügbar</span>
                  <span className="bg-yellow-100 text-yellow-700 text-xs px-3 py-1 rounded-full font-semibold">○ Kein fest montiertes Kabel</span>
                </div>

                <div className="bg-teal-100 rounded-lg p-4">
                  <p className="text-sm text-teal-800">
                    <strong>Fazit:</strong> Die Easee ist perfekt für Design-bewusste Nutzer, die eine unauffällige aber hochfunktionale Wallbox suchen. Besonders stark in Kombination mit PV-Anlagen und bei mehreren Ladepunkten dank intelligentem Lastmanagement. Einziger Nachteil: Sie benötigen ein separates Ladekabel.
                  </p>
                </div>
              </div>

              {/* go-e Charger Gemini */}
              <div className="bg-gradient-to-r from-orange-50 to-amber-50 border-2 border-orange-300 rounded-2xl p-6 mb-8">
                <div className="flex items-center justify-between mb-4 flex-wrap gap-4">
                  <div className="flex items-center gap-3">
                    <div className="bg-orange-500 p-3 rounded-xl">
                      <Battery className="w-8 h-8 text-white" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-gray-900">go-e Charger Gemini (flex)</h3>
                      <p className="text-orange-600 font-semibold">Der Preis-Leistungs-Sieger aus Österreich</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="text-2xl font-bold text-orange-700">ab 539€</div>
                    <div className="text-sm text-gray-500">UVP 2025</div>
                  </div>
                </div>

                <p className="text-gray-700 mb-4 leading-relaxed">
                  Der go-e Charger Gemini ist der <strong>meistverkaufte Wallbox-Charger</strong> in Deutschland – und das aus gutem Grund. Im Auto Bild/P3-Test wurde er zum <strong>Preis-Leistungs-Sieger</strong> gekürt (Note 1,0). Die flex-Variante mit CEE-Stecker ist besonders beliebt: Sie kann ohne Elektriker angeschlossen und mobil genutzt werden.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-4">
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-3">Technische Daten</h4>
                    <ul className="text-sm text-gray-700 space-y-2">
                      <li className="flex justify-between"><span>Ladeleistung:</span> <span className="font-semibold">11 kW oder 22 kW</span></li>
                      <li className="flex justify-between"><span>Anschluss:</span> <span className="font-semibold">Typ-2 Kabel (5m)</span></li>
                      <li className="flex justify-between"><span>Flex-Variante:</span> <span className="font-semibold">CEE-Stecker (16A/32A)</span></li>
                      <li className="flex justify-between"><span>Konnektivität:</span> <span className="font-semibold">WLAN, optional LTE (2.0)</span></li>
                      <li className="flex justify-between"><span>Schutzart:</span> <span className="font-semibold">IP65 (staub- & strahlwasserdicht)</span></li>
                      <li className="flex justify-between"><span>Gewicht:</span> <span className="font-semibold">ca. 1,7 kg</span></li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-3">Besondere Features</h4>
                    <ul className="text-sm text-gray-700 space-y-2">
                      <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-emerald-500" /> Integrierter DC-Fehlerschutz</li>
                      <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-emerald-500" /> RFID für bis zu 10 Nutzer</li>
                      <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-emerald-500" /> App mit flexiblen Stromtarifen</li>
                      <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-emerald-500" /> go-e Controller für PV-Laden</li>
                      <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-emerald-500" /> OCPP 1.6 Schnittstelle</li>
                      <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-emerald-500" /> Mobil einsetzbar (flex)</li>
                    </ul>
                  </div>
                </div>

                <div className="bg-white rounded-xl p-4 mb-4">
                  <h4 className="font-semibold text-gray-800 mb-2">🔌 Gemini vs. Gemini flex – Was ist der Unterschied?</h4>
                  <p className="text-sm text-gray-700">
                    Der <strong>Gemini</strong> ist für die feste Wandmontage konzipiert und wird vom Elektriker an die Hausinstallation angeschlossen. Der <strong>Gemini flex</strong> hat einen CEE-Stecker und kann direkt an eine Drehstromsteckdose angeschlossen werden – ideal für Mieter, mobile Nutzung im Urlaub oder wenn bereits eine CEE-Dose vorhanden ist. Beide Varianten bieten identische Funktionen und kosten etwa gleich viel.
                  </p>
                </div>

                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="bg-emerald-100 text-emerald-700 text-xs px-3 py-1 rounded-full font-semibold">✓ Preis-Leistungs-Sieger</span>
                  <span className="bg-emerald-100 text-emerald-700 text-xs px-3 py-1 rounded-full font-semibold">✓ ADAC Testsieger-Nachfolger</span>
                  <span className="bg-emerald-100 text-emerald-700 text-xs px-3 py-1 rounded-full font-semibold">✓ Mobile Nutzung möglich</span>
                  <span className="bg-emerald-100 text-emerald-700 text-xs px-3 py-1 rounded-full font-semibold">✓ Made in Austria</span>
                  <span className="bg-emerald-100 text-emerald-700 text-xs px-3 py-1 rounded-full font-semibold">✓ Keine Elektrikerkosten (flex)</span>
                </div>

                <div className="bg-orange-100 rounded-lg p-4">
                  <p className="text-sm text-orange-800">
                    <strong>Fazit:</strong> Der go-e Charger Gemini bietet das beste Preis-Leistungs-Verhältnis am Markt. Die flex-Variante ist perfekt für alle, die Installationskosten sparen oder die Wallbox auch unterwegs nutzen wollen. Die umfangreiche App und die OCPP-Schnittstelle machen ihn zukunftssicher.
                  </p>
                </div>
              </div>

              {/* Webasto Live */}
              <div className="bg-gradient-to-r from-blue-50 to-indigo-50 border-2 border-blue-300 rounded-2xl p-6 mb-8">
                <div className="flex items-center justify-between mb-4 flex-wrap gap-4">
                  <div className="flex items-center gap-3">
                    <div className="bg-blue-600 p-3 rounded-xl">
                      <Settings className="w-8 h-8 text-white" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-gray-900">Webasto Live</h3>
                      <p className="text-blue-600 font-semibold">Die Profi-Lösung Made in Germany</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="text-2xl font-bold text-blue-700">ab 1.299€</div>
                    <div className="text-sm text-gray-500">UVP 2025</div>
                  </div>
                </div>

                <p className="text-gray-700 mb-4 leading-relaxed">
                  Webasto ist ein etablierter deutscher Automobilzulieferer, der auch <strong>Batterien für Elektroautos</strong> produziert. Die Webasto Live ist die intelligente Premium-Wallbox für anspruchsvolle Nutzer: Mit <strong>RFID-Zugangskontrolle, MID-zertifiziertem Zähler und Lastmanagement für bis zu 250 Ladepunkte</strong> ist sie auch für gewerbliche Anwendungen bestens geeignet.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-4">
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-3">Technische Daten</h4>
                    <ul className="text-sm text-gray-700 space-y-2">
                      <li className="flex justify-between"><span>Ladeleistung:</span> <span className="font-semibold">11 kW oder 22 kW</span></li>
                      <li className="flex justify-between"><span>Kabellänge:</span> <span className="font-semibold">4,5m oder 7m</span></li>
                      <li className="flex justify-between"><span>Konnektivität:</span> <span className="font-semibold">4G, LAN, WLAN</span></li>
                      <li className="flex justify-between"><span>Schutzart:</span> <span className="font-semibold">IP54</span></li>
                      <li className="flex justify-between"><span>Energiezähler:</span> <span className="font-semibold">MID-zertifiziert</span></li>
                      <li className="flex justify-between"><span>Herstellung:</span> <span className="font-semibold">Deutschland</span></li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-3">Besondere Features</h4>
                    <ul className="text-sm text-gray-700 space-y-2">
                      <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-emerald-500" /> RFID-Zugangskontrolle</li>
                      <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-emerald-500" /> Lastmanagement bis 250 Ladepunkte</li>
                      <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-emerald-500" /> Webasto ChargeConnect App</li>
                      <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-emerald-500" /> Cloud-Portal für Flottenmanagement</li>
                      <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-emerald-500" /> OCPP-kompatibel</li>
                      <li className="flex items-center gap-2"><AlertCircle className="w-4 h-4 text-yellow-500" /> Externer FI Typ B erforderlich</li>
                    </ul>
                  </div>
                </div>

                <div className="bg-white rounded-xl p-4 mb-4">
                  <h4 className="font-semibold text-gray-800 mb-2">🏢 Die Webasto-Familie: Pure, Next, Live, Unite</h4>
                  <p className="text-sm text-gray-700">
                    Webasto bietet vier Wallbox-Modelle: Die <strong>Pure</strong> (ab 595€) ist eine einfache Wallbox ohne smarte Funktionen. Die <strong>Next</strong> (ab 799€) bietet App-Steuerung und QR-Code-Zugang. Die <strong>Live</strong> ist die vollausgestattete Version mit RFID und MID-Zähler. Die neue <strong>Unite</strong> (ab 1.299€) kombiniert alle Features mit einem eleganten Design und eingebautem DC-Fehlerschutz.
                  </p>
                </div>

                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="bg-emerald-100 text-emerald-700 text-xs px-3 py-1 rounded-full font-semibold">✓ Made in Germany</span>
                  <span className="bg-emerald-100 text-emerald-700 text-xs px-3 py-1 rounded-full font-semibold">✓ Gewerbetauglich</span>
                  <span className="bg-emerald-100 text-emerald-700 text-xs px-3 py-1 rounded-full font-semibold">✓ MID-Zähler</span>
                  <span className="bg-emerald-100 text-emerald-700 text-xs px-3 py-1 rounded-full font-semibold">✓ Großes Lastmanagement</span>
                  <span className="bg-yellow-100 text-yellow-700 text-xs px-3 py-1 rounded-full font-semibold">○ Höherer Preis</span>
                </div>

                <div className="bg-blue-100 rounded-lg p-4">
                  <p className="text-sm text-blue-800">
                    <strong>Fazit:</strong> Die Webasto Live ist die richtige Wahl für Unternehmen, Mehrfamilienhäuser und alle, die eine professionelle Lösung mit rechtssicherer Abrechnung benötigen. Für den reinen Privatgebrauch ist sie allerdings überdimensioniert – hier reicht oft die günstigere Webasto Pure oder Next.
                  </p>
                </div>
              </div>

              {/* Juice Booster 2 */}
              <div className="bg-gradient-to-r from-red-50 to-rose-50 border-2 border-red-300 rounded-2xl p-6 mb-8">
                <div className="flex items-center justify-between mb-4 flex-wrap gap-4">
                  <div className="flex items-center gap-3">
                    <div className="bg-red-500 p-3 rounded-xl">
                      <Car className="w-8 h-8 text-white" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-gray-900">Juice Booster 2</h3>
                      <p className="text-red-600 font-semibold">Das Schweizer Taschenmesser für E-Autofahrer</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="text-2xl font-bold text-red-700">ab 999€</div>
                    <div className="text-sm text-gray-500">Basic Set</div>
                  </div>
                </div>

                <p className="text-gray-700 mb-4 leading-relaxed">
                  Der Juice Booster 2 aus der Schweiz ist <strong>keine gewöhnliche Wallbox</strong> – er ist ein 3-in-1-Ladegerät: Mobile Ladestation, Wandladestation und Typ-2-Ladekabel in einem. Mit seinem patentierten Adapter-System kann er an <strong>über 30 verschiedene Steckdosen</strong> weltweit angeschlossen werden. Im ADAC-Test für mobile Wallboxen erreichte er den Testsieg.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-4">
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-3">Technische Daten</h4>
                    <ul className="text-sm text-gray-700 space-y-2">
                      <li className="flex justify-between"><span>Ladeleistung:</span> <span className="font-semibold">bis 22 kW (3x32A)</span></li>
                      <li className="flex justify-between"><span>Kabellänge:</span> <span className="font-semibold">3,1m zum Auto</span></li>
                      <li className="flex justify-between"><span>Adapter:</span> <span className="font-semibold">über 30 verfügbar</span></li>
                      <li className="flex justify-between"><span>Schutzart:</span> <span className="font-semibold">IP67 (wasserdicht)</span></li>
                      <li className="flex justify-between"><span>Gewicht:</span> <span className="font-semibold">ca. 1 kg (Grundgerät)</span></li>
                      <li className="flex justify-between"><span>Material:</span> <span className="font-semibold">Aluminium (überfahrbar)</span></li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-3">Besondere Features</h4>
                    <ul className="text-sm text-gray-700 space-y-2">
                      <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-emerald-500" /> Automatische Adaptererkennung</li>
                      <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-emerald-500" /> Temperaturüberwachung im Stecker</li>
                      <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-emerald-500" /> TÜV SÜD-geprüft</li>
                      <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-emerald-500" /> Überrollsicher bis 3 Tonnen</li>
                      <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-emerald-500" /> Optional als Wandladestation</li>
                      <li className="flex items-center gap-2"><AlertCircle className="w-4 h-4 text-yellow-500" /> Keine App-Steuerung</li>
                    </ul>
                  </div>
                </div>

                <div className="bg-white rounded-xl p-4 mb-4">
                  <h4 className="font-semibold text-gray-800 mb-2">🌍 Perfekt für Vielreisende</h4>
                  <p className="text-sm text-gray-700">
                    Mit dem Juice Booster und dem passenden Adapter-Set sind Sie in ganz Europa unabhängig von öffentlichen Ladesäulen. Ob Campingplatz in Frankreich, Hotel in Italien oder Ferienhaus in Skandinavien – Sie finden immer eine Steckdose. Das <strong>Europa Travel Set</strong> (ab 1.150€) enthält alle wichtigen Adapter für die beliebtesten Reiseländer.
                  </p>
                </div>

                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="bg-emerald-100 text-emerald-700 text-xs px-3 py-1 rounded-full font-semibold">✓ ADAC Testsieger (mobil)</span>
                  <span className="bg-emerald-100 text-emerald-700 text-xs px-3 py-1 rounded-full font-semibold">✓ Weltweit einsetzbar</span>
                  <span className="bg-emerald-100 text-emerald-700 text-xs px-3 py-1 rounded-full font-semibold">✓ Extrem robust</span>
                  <span className="bg-emerald-100 text-emerald-700 text-xs px-3 py-1 rounded-full font-semibold">✓ Swiss Made</span>
                  <span className="bg-yellow-100 text-yellow-700 text-xs px-3 py-1 rounded-full font-semibold">○ Keine smarten Funktionen</span>
                </div>

                <div className="bg-red-100 rounded-lg p-4">
                  <p className="text-sm text-red-800">
                    <strong>Fazit:</strong> Der Juice Booster 2 ist die erste Wahl für alle, die viel unterwegs sind und maximale Flexibilität brauchen. Auch als dauerhafte Heimlösung mit der optionalen Wandhalterung geeignet. Einziger Nachteil: Keine smarten Funktionen wie App-Steuerung oder PV-Anbindung.
                  </p>
                </div>
              </div>

              {/* KEBA KeContact P30 */}
              <div className="bg-gradient-to-r from-gray-50 to-slate-100 border-2 border-gray-400 rounded-2xl p-6 mb-8">
                <div className="flex items-center justify-between mb-4 flex-wrap gap-4">
                  <div className="flex items-center gap-3">
                    <div className="bg-gray-700 p-3 rounded-xl">
                      <Shield className="w-8 h-8 text-white" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-gray-900">KEBA KeContact P30</h3>
                      <p className="text-gray-600 font-semibold">Der Klassiker aus Österreich</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="text-2xl font-bold text-gray-700">ab 699€</div>
                    <div className="text-sm text-gray-500">DE Edition</div>
                  </div>
                </div>

                <p className="text-gray-700 mb-4 leading-relaxed">
                  Die KEBA KeContact P30 ist ein <strong>absoluter Klassiker</strong> unter den Wallboxen und wird seit Jahren von Fachleuten empfohlen. Im gemeinsamen Test von ADAC und ÖAMTC erreichte sie die <strong>Note 1,3 (sehr gut)</strong> und den Testsieg in ihrer Kategorie. Besonders überzeugen die <strong>modulare Bauweise und die vielfältigen Konfigurationsmöglichkeiten</strong>.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-4">
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-3">Technische Daten</h4>
                    <ul className="text-sm text-gray-700 space-y-2">
                      <li className="flex justify-between"><span>Ladeleistung:</span> <span className="font-semibold">bis 22 kW</span></li>
                      <li className="flex justify-between"><span>Kabellänge:</span> <span className="font-semibold">4m oder 6m</span></li>
                      <li className="flex justify-between"><span>Display:</span> <span className="font-semibold">LED-Segment (Energiezähler)</span></li>
                      <li className="flex justify-between"><span>Schutzart:</span> <span className="font-semibold">IP54</span></li>
                      <li className="flex justify-between"><span>DC-Fehlerschutz:</span> <span className="font-semibold">integriert</span></li>
                      <li className="flex justify-between"><span>Herstellung:</span> <span className="font-semibold">Österreich</span></li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-3">Besondere Features</h4>
                    <ul className="text-sm text-gray-700 space-y-2">
                      <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-emerald-500" /> Integrierter DC-Fehlerschutz</li>
                      <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-emerald-500" /> Modulares System (c/x-series)</li>
                      <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-emerald-500" /> MID-geeichte Variante verfügbar</li>
                      <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-emerald-500" /> PV-Überschussladen möglich</li>
                      <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-emerald-500" /> Lastmanagement (bis 15 Slaves)</li>
                      <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-emerald-500" /> Z.E. Ready zertifiziert</li>
                    </ul>
                  </div>
                </div>

                <div className="bg-white rounded-xl p-4 mb-4">
                  <h4 className="font-semibold text-gray-800 mb-2">📊 KEBA-Serien im Überblick</h4>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
                    <div className="bg-gray-50 rounded-lg p-3">
                      <p className="font-semibold text-gray-800">c-series</p>
                      <p className="text-gray-600">Basis-Version mit RFID und Energiezähler. Kann als Slave ins Lastmanagement eingebunden werden.</p>
                    </div>
                    <div className="bg-gray-50 rounded-lg p-3">
                      <p className="font-semibold text-gray-800">x-series</p>
                      <p className="text-gray-600">Premium-Version als Master. Netzwerkfähig, optional eichrechtskonform. Für komplexe Installationen.</p>
                    </div>
                    <div className="bg-gray-50 rounded-lg p-3">
                      <p className="font-semibold text-gray-800">DE Edition</p>
                      <p className="text-gray-600">Günstige KfW-förderfähige Version. 11 kW mit 4m Kabel. Ideal für den Einstieg.</p>
                    </div>
                  </div>
                </div>

                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="bg-emerald-100 text-emerald-700 text-xs px-3 py-1 rounded-full font-semibold">✓ ADAC Note 1,3</span>
                  <span className="bg-emerald-100 text-emerald-700 text-xs px-3 py-1 rounded-full font-semibold">✓ Testsieger ÖAMTC</span>
                  <span className="bg-emerald-100 text-emerald-700 text-xs px-3 py-1 rounded-full font-semibold">✓ Made in Austria</span>
                  <span className="bg-emerald-100 text-emerald-700 text-xs px-3 py-1 rounded-full font-semibold">✓ Sehr zuverlässig</span>
                  <span className="bg-yellow-100 text-yellow-700 text-xs px-3 py-1 rounded-full font-semibold">○ Keine App (Basis)</span>
                </div>

                <div className="bg-gray-200 rounded-lg p-4">
                  <p className="text-sm text-gray-800">
                    <strong>Fazit:</strong> Die KEBA KeContact P30 ist die solide Wahl für alle, die eine zuverlässige Wallbox ohne Schnickschnack suchen. Besonders attraktiv ist die günstige Deutschland Edition (ab 699€) mit KfW-Förderung. Für Mehrfamilienhäuser und gewerbliche Anwendungen empfehlen wir die x-series mit Lastmanagement.
                  </p>
                </div>
              </div>

              {/* Vergleichstabelle */}
              <h3 className="text-xl font-bold text-gray-900 mb-4">Alle Modelle im direkten Vergleich</h3>
              <div className="overflow-x-auto mb-6">
                <table className="w-full border-collapse text-sm">
                  <thead>
                    <tr className="bg-gray-800 text-white">
                      <th className="border border-gray-600 p-3 text-left">Modell</th>
                      <th className="border border-gray-600 p-3 text-center">Preis ab</th>
                      <th className="border border-gray-600 p-3 text-center">Leistung</th>
                      <th className="border border-gray-600 p-3 text-center">App</th>
                      <th className="border border-gray-600 p-3 text-center">PV-Laden</th>
                      <th className="border border-gray-600 p-3 text-center">Mobil</th>
                      <th className="border border-gray-600 p-3 text-center">Testnote</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="bg-teal-50">
                      <td className="border border-gray-300 p-3 font-semibold">Easee Home</td>
                      <td className="border border-gray-300 p-3 text-center">849€</td>
                      <td className="border border-gray-300 p-3 text-center">22 kW</td>
                      <td className="border border-gray-300 p-3 text-center">✓</td>
                      <td className="border border-gray-300 p-3 text-center">✓*</td>
                      <td className="border border-gray-300 p-3 text-center">–</td>
                      <td className="border border-gray-300 p-3 text-center font-semibold">1,9</td>
                    </tr>
                    <tr className="bg-orange-50">
                      <td className="border border-gray-300 p-3 font-semibold">go-e Gemini flex</td>
                      <td className="border border-gray-300 p-3 text-center">539€</td>
                      <td className="border border-gray-300 p-3 text-center">11/22 kW</td>
                      <td className="border border-gray-300 p-3 text-center">✓</td>
                      <td className="border border-gray-300 p-3 text-center">✓*</td>
                      <td className="border border-gray-300 p-3 text-center">✓</td>
                      <td className="border border-gray-300 p-3 text-center font-semibold">1,0**</td>
                    </tr>
                    <tr className="bg-blue-50">
                      <td className="border border-gray-300 p-3 font-semibold">Webasto Live</td>
                      <td className="border border-gray-300 p-3 text-center">1.299€</td>
                      <td className="border border-gray-300 p-3 text-center">11/22 kW</td>
                      <td className="border border-gray-300 p-3 text-center">✓</td>
                      <td className="border border-gray-300 p-3 text-center">✓</td>
                      <td className="border border-gray-300 p-3 text-center">–</td>
                      <td className="border border-gray-300 p-3 text-center font-semibold">–</td>
                    </tr>
                    <tr className="bg-red-50">
                      <td className="border border-gray-300 p-3 font-semibold">Juice Booster 2</td>
                      <td className="border border-gray-300 p-3 text-center">999€</td>
                      <td className="border border-gray-300 p-3 text-center">22 kW</td>
                      <td className="border border-gray-300 p-3 text-center">–</td>
                      <td className="border border-gray-300 p-3 text-center">–</td>
                      <td className="border border-gray-300 p-3 text-center">✓</td>
                      <td className="border border-gray-300 p-3 text-center font-semibold">1,6</td>
                    </tr>
                    <tr className="bg-gray-50">
                      <td className="border border-gray-300 p-3 font-semibold">KEBA P30 DE</td>
                      <td className="border border-gray-300 p-3 text-center">699€</td>
                      <td className="border border-gray-300 p-3 text-center">11 kW</td>
                      <td className="border border-gray-300 p-3 text-center">–</td>
                      <td className="border border-gray-300 p-3 text-center">✓*</td>
                      <td className="border border-gray-300 p-3 text-center">–</td>
                      <td className="border border-gray-300 p-3 text-center font-semibold">1,3</td>
                    </tr>
                  </tbody>
                </table>
                <p className="text-xs text-gray-500 mt-2">* Mit optionalem Zubehör (Controller/Equalizer) | ** Preis-Leistungs-Wertung</p>
              </div>
            </section>

            {/* Section 5: Funktionen */}
            <section id="funktionen" className="mb-12 scroll-mt-24">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                5. Wichtige Funktionen & Features
              </h2>

              <p className="text-gray-700 mb-6 leading-relaxed">
                Moderne Wallboxen bieten eine Vielzahl an Funktionen. Nicht alle sind für jeden Nutzer relevant – aber manche können echtes Geld sparen oder den Alltag deutlich vereinfachen.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Feature 1 */}
                <div className="bg-gray-50 rounded-xl p-5">
                  <div className="flex items-center gap-3 mb-3">
                    <Smartphone className="w-6 h-6 text-blue-600" />
                    <h4 className="font-bold text-gray-900">App-Steuerung & WLAN</h4>
                  </div>
                  <p className="text-sm text-gray-700 mb-2">
                    Starten und stoppen Sie Ladevorgänge per Smartphone. Überwachen Sie den Verbrauch und setzen Sie Timer für günstige Nachtstromtarife.
                  </p>
                  <span className="text-xs text-emerald-600 font-semibold">Empfohlen für: Alle Nutzer</span>
                </div>

                {/* Feature 2 */}
                <div className="bg-gray-50 rounded-xl p-5">
                  <div className="flex items-center gap-3 mb-3">
                    <Shield className="w-6 h-6 text-blue-600" />
                    <h4 className="font-bold text-gray-900">Zugangskontrolle (RFID)</h4>
                  </div>
                  <p className="text-sm text-gray-700 mb-2">
                    Schützen Sie Ihre Wallbox vor unbefugter Nutzung. Nur autorisierte Personen mit RFID-Karte können laden.
                  </p>
                  <span className="text-xs text-emerald-600 font-semibold">Empfohlen für: Öffentlich zugängliche Stellplätze</span>
                </div>

                {/* Feature 3 */}
                <div className="bg-gray-50 rounded-xl p-5">
                  <div className="flex items-center gap-3 mb-3">
                    <Settings className="w-6 h-6 text-blue-600" />
                    <h4 className="font-bold text-gray-900">Lastmanagement</h4>
                  </div>
                  <p className="text-sm text-gray-700 mb-2">
                    Verteilt die Ladeleistung intelligent. Verhindert Überlastung bei mehreren Ladepunkten oder hohem Hausverbrauch.
                  </p>
                  <span className="text-xs text-emerald-600 font-semibold">Empfohlen für: Mehrfamilienhäuser, 2+ E-Autos</span>
                </div>

                {/* Feature 4 */}
                <div className="bg-gray-50 rounded-xl p-5">
                  <div className="flex items-center gap-3 mb-3">
                    <Sun className="w-6 h-6 text-yellow-600" />
                    <h4 className="font-bold text-gray-900">PV-Überschussladen</h4>
                  </div>
                  <p className="text-sm text-gray-700 mb-2">
                    Lädt automatisch mit Solarstrom-Überschuss. Maximiert Eigenverbrauch und senkt Stromkosten erheblich.
                  </p>
                  <span className="text-xs text-emerald-600 font-semibold">Empfohlen für: PV-Anlagen-Besitzer</span>
                </div>

                {/* Feature 5 */}
                <div className="bg-gray-50 rounded-xl p-5">
                  <div className="flex items-center gap-3 mb-3">
                    <Euro className="w-6 h-6 text-emerald-600" />
                    <h4 className="font-bold text-gray-900">Integrierter Stromzähler</h4>
                  </div>
                  <p className="text-sm text-gray-700 mb-2">
                    Zeigt den exakten Verbrauch. MID-geeichte Zähler ermöglichen rechtssichere Abrechnungen.
                  </p>
                  <span className="text-xs text-emerald-600 font-semibold">Empfohlen für: Dienstwagen, Vermieter</span>
                </div>

                {/* Feature 6 */}
                <div className="bg-gray-50 rounded-xl p-5">
                  <div className="flex items-center gap-3 mb-3">
                    <Car className="w-6 h-6 text-blue-600" />
                    <h4 className="font-bold text-gray-900">Fest montiertes Kabel</h4>
                  </div>
                  <p className="text-sm text-gray-700 mb-2">
                    Spart das Hantieren mit dem Ladekabel. Einfach anstecken und fertig. Kabellänge meist 5-7,5 Meter.
                  </p>
                  <span className="text-xs text-emerald-600 font-semibold">Empfohlen für: Komfort-liebende Nutzer</span>
                </div>
              </div>

              <div className="bg-blue-50 border-l-4 border-blue-500 p-6 mt-6">
                <div className="flex items-start">
                  <Lightbulb className="w-6 h-6 text-blue-600 mr-3 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-bold text-lg text-gray-900 mb-2">Tipp: Zukunftssicher kaufen</h3>
                    <p className="text-gray-700">
                      Wählen Sie eine Wallbox mit <strong>OCPP-Schnittstelle</strong> (Open Charge Point Protocol). Dieser offene Standard ermöglicht Software-Updates und Integration mit verschiedenen Energiemanagement-Systemen – auch in Zukunft.
                    </p>
                  </div>
                </div>
              </div>
            </section>

            {/* Section 5: Entscheidungshilfe */}
            <section id="entscheidungshilfe" className="mb-12 scroll-mt-24">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                6. Welche Wallbox passt zu mir?
              </h2>

              <p className="text-gray-700 mb-6 leading-relaxed">
                Die perfekte Wallbox hängt von Ihrer individuellen Situation ab. Nutzen Sie unseren Entscheidungsbaum, um die beste Wahl zu treffen:
              </p>

              {/* Entscheidungsbaum */}
              <div className="space-y-6">
                {/* Szenario 1 */}
                <div className="bg-emerald-50 border-2 border-emerald-300 rounded-xl p-6">
                  <div className="flex items-center gap-3 mb-3">
                    <Users className="w-8 h-8 text-emerald-600" />
                    <h3 className="text-lg font-bold text-gray-900">Einfamilienhaus mit einem E-Auto</h3>
                  </div>
                  <p className="text-gray-700 mb-4">
                    Sie haben ein Einfamilienhaus, einen Stellplatz und ein Elektroauto. Sie laden hauptsächlich über Nacht.
                  </p>
                  <div className="bg-white rounded-lg p-4">
                    <p className="font-semibold text-emerald-700 mb-2">👉 Empfehlung: 11 kW smarte Wallbox</p>
                    <p className="text-sm text-gray-600">
                      Eine smarte 11-kW-Wallbox mit App-Steuerung reicht völlig aus. Mit Zeitsteuerung können Sie günstige Nachtstromtarife nutzen. Budget: 500-900€
                    </p>
                  </div>
                </div>

                {/* Szenario 2 */}
                <div className="bg-yellow-50 border-2 border-yellow-300 rounded-xl p-6">
                  <div className="flex items-center gap-3 mb-3">
                    <Sun className="w-8 h-8 text-yellow-600" />
                    <h3 className="text-lg font-bold text-gray-900">Eigenheim mit Solaranlage</h3>
                  </div>
                  <p className="text-gray-700 mb-4">
                    Sie haben eine PV-Anlage und möchten Ihr E-Auto möglichst mit eigenem Solarstrom laden.
                  </p>
                  <div className="bg-white rounded-lg p-4">
                    <p className="font-semibold text-yellow-700 mb-2">👉 Empfehlung: 11 kW Solar-Wallbox</p>
                    <p className="text-sm text-gray-600">
                      Wählen Sie eine Wallbox mit PV-Überschussladen, die mit Ihrem Wechselrichter kompatibel ist. Die Mehrkosten (100-300€) amortisieren sich schnell. Budget: 700-1.200€
                    </p>
                  </div>
                </div>

                {/* Szenario 3 */}
                <div className="bg-blue-50 border-2 border-blue-300 rounded-xl p-6">
                  <div className="flex items-center gap-3 mb-3">
                    <Car className="w-8 h-8 text-blue-600" />
                    <h3 className="text-lg font-bold text-gray-900">Zwei E-Autos im Haushalt</h3>
                  </div>
                  <p className="text-gray-700 mb-4">
                    Sie haben bereits zwei Elektroautos oder planen die Anschaffung eines zweiten.
                  </p>
                  <div className="bg-white rounded-lg p-4">
                    <p className="font-semibold text-blue-700 mb-2">👉 Empfehlung: 2x 11 kW mit Lastmanagement</p>
                    <p className="text-sm text-gray-600">
                      Zwei Wallboxen mit dynamischem Lastmanagement verteilen die verfügbare Leistung optimal. Alternativ: Eine Wallbox mit zwei Ladepunkten (Doppel-Wallbox). Budget: 1.200-2.000€
                    </p>
                  </div>
                </div>

                {/* Szenario 4 */}
                <div className="bg-purple-50 border-2 border-purple-300 rounded-xl p-6">
                  <div className="flex items-center gap-3 mb-3">
                    <Wallet className="w-8 h-8 text-purple-600" />
                    <h3 className="text-lg font-bold text-gray-900">Dienstwagen mit Heimladung</h3>
                  </div>
                  <p className="text-gray-700 mb-4">
                    Sie fahren einen Dienstwagen und rechnen den Ladestrom mit Ihrem Arbeitgeber ab.
                  </p>
                  <div className="bg-white rounded-lg p-4">
                    <p className="font-semibold text-purple-700 mb-2">👉 Empfehlung: Eichrechtskonforme Wallbox</p>
                    <p className="text-sm text-gray-600">
                      Sie benötigen eine Wallbox mit MID-geeichtem Zähler für rechtssichere Abrechnungen. Viele Arbeitgeber übernehmen die Kosten oder bezuschussen die Installation. Budget: 1.000-1.500€
                    </p>
                  </div>
                </div>

                {/* Szenario 5 */}
                <div className="bg-indigo-50 border-2 border-indigo-300 rounded-xl p-6">
                  <div className="flex items-center gap-3 mb-3">
                    <Home className="w-8 h-8 text-indigo-600" />
                    <h3 className="text-lg font-bold text-gray-900">Mehrfamilienhaus / Tiefgarage</h3>
                  </div>
                  <p className="text-gray-700 mb-4">
                    Sie wohnen zur Miete oder in einer WEG und möchten einen Ladepunkt in der Tiefgarage.
                  </p>
                  <div className="bg-white rounded-lg p-4">
                    <p className="font-semibold text-indigo-700 mb-2">👉 Empfehlung: Wallbox mit Lastmanagement & RFID</p>
                    <p className="text-sm text-gray-600">
                      Hier ist ein Gesamtkonzept wichtig. Sprechen Sie mit der Hausverwaltung über ein Backend-System, das mehrere Ladepunkte verwalten kann. Einzelkosten: 800-1.200€ + Infrastruktur
                    </p>
                  </div>
                </div>

                {/* Szenario 6 */}
                <div className="bg-red-50 border-2 border-red-300 rounded-xl p-6">
                  <div className="flex items-center gap-3 mb-3">
                    <Zap className="w-8 h-8 text-red-600" />
                    <h3 className="text-lg font-bold text-gray-900">Vielfahrer mit großem Akku</h3>
                  </div>
                  <p className="text-gray-700 mb-4">
                    Sie fahren täglich über 100 km und haben ein Fahrzeug mit großem Akku (80+ kWh), das 22 kW AC laden kann.
                  </p>
                  <div className="bg-white rounded-lg p-4">
                    <p className="font-semibold text-red-700 mb-2">👉 Empfehlung: 22 kW Wallbox</p>
                    <p className="text-sm text-gray-600">
                      Prüfen Sie zunächst, ob Ihr Fahrzeug tatsächlich 22 kW AC-Laden unterstützt (z.B. Renault Zoe, Mercedes EQE/EQS). Beantragen Sie die Genehmigung beim Netzbetreiber. Budget: 800-1.500€
                    </p>
                  </div>
                </div>
              </div>
            </section>

            {/* Section 6: Kosten */}
            <section id="kosten" className="mb-12 scroll-mt-24">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                7. Kosten & Preisübersicht
              </h2>

              <p className="text-gray-700 mb-6 leading-relaxed">
                Die Gesamtkosten einer Wallbox setzen sich aus dem <strong>Kaufpreis</strong> und den <strong>Installationskosten</strong> zusammen. Je nach Aufwand und örtlichen Gegebenheiten variieren die Preise erheblich.
              </p>

              {/* Preisübersicht Wallboxen */}
              <div className="overflow-x-auto mb-6">
                <table className="w-full border-collapse text-sm">
                  <thead>
                    <tr className="bg-emerald-100">
                      <th className="border border-gray-300 p-3 text-left font-semibold">Wallbox-Typ</th>
                      <th className="border border-gray-300 p-3 text-center font-semibold">Preisspanne</th>
                      <th className="border border-gray-300 p-3 text-center font-semibold">Durchschnitt</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="border border-gray-300 p-3">Basis 11 kW (ohne Extras)</td>
                      <td className="border border-gray-300 p-3 text-center">400€ – 700€</td>
                      <td className="border border-gray-300 p-3 text-center font-semibold">~550€</td>
                    </tr>
                    <tr className="bg-gray-50">
                      <td className="border border-gray-300 p-3">Smart 11 kW (App, WLAN)</td>
                      <td className="border border-gray-300 p-3 text-center">500€ – 900€</td>
                      <td className="border border-gray-300 p-3 text-center font-semibold">~700€</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 p-3">11 kW mit PV-Anbindung</td>
                      <td className="border border-gray-300 p-3 text-center">700€ – 1.200€</td>
                      <td className="border border-gray-300 p-3 text-center font-semibold">~950€</td>
                    </tr>
                    <tr className="bg-gray-50">
                      <td className="border border-gray-300 p-3">22 kW Wallbox</td>
                      <td className="border border-gray-300 p-3 text-center">600€ – 1.500€</td>
                      <td className="border border-gray-300 p-3 text-center font-semibold">~1.000€</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 p-3">Eichrechtskonform (MID)</td>
                      <td className="border border-gray-300 p-3 text-center">1.000€ – 1.800€</td>
                      <td className="border border-gray-300 p-3 text-center font-semibold">~1.400€</td>
                    </tr>
                    <tr className="bg-gray-50">
                      <td className="border border-gray-300 p-3">Bidirektional (V2H/V2G)</td>
                      <td className="border border-gray-300 p-3 text-center">4.000€ – 8.000€</td>
                      <td className="border border-gray-300 p-3 text-center font-semibold">~5.500€</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              {/* Installationskosten */}
              <h3 className="text-xl font-bold text-gray-900 mb-4">Installationskosten</h3>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div className="bg-emerald-50 p-5 rounded-lg border-2 border-emerald-300">
                  <div className="text-sm text-emerald-600 font-semibold mb-1">Einfache Installation</div>
                  <div className="text-2xl font-bold text-emerald-700">500€ – 1.000€</div>
                  <div className="text-xs text-gray-600 mt-2">
                    Kurze Kabelwege, Unterverteilung in der Nähe, keine Grabungsarbeiten
                  </div>
                </div>
                <div className="bg-yellow-50 p-5 rounded-lg border-2 border-yellow-300">
                  <div className="text-sm text-yellow-600 font-semibold mb-1">Aufwendige Installation</div>
                  <div className="text-2xl font-bold text-yellow-700">1.500€ – 3.000€</div>
                  <div className="text-xs text-gray-600 mt-2">
                    Lange Kabelwege, neuer FI-Schutzschalter, Grabungsarbeiten, Zählerschrank-Anpassung
                  </div>
                </div>
              </div>

              <div className="bg-blue-50 border-l-4 border-blue-500 p-6 mb-6">
                <div className="flex items-start">
                  <Lightbulb className="w-6 h-6 text-blue-600 mr-3 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-bold text-lg text-gray-900 mb-2">Spartipp: Angebote vergleichen!</h3>
                    <p className="text-gray-700">
                      Holen Sie <strong>mindestens 3 Angebote</strong> von verschiedenen Elektrikern ein. Die Preisunterschiede können mehrere hundert Euro betragen. Achten Sie auf einen festen Komplettpreis inkl. aller Materialien und Arbeiten.
                    </p>
                  </div>
                </div>
              </div>

              {/* Gesamtkosten */}
              <div className="bg-gradient-to-r from-emerald-500 to-teal-500 rounded-xl p-6 text-white">
                <h3 className="text-xl font-bold mb-4">Typische Gesamtkosten</h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="bg-white/20 backdrop-blur-sm rounded-lg p-4 text-center">
                    <div className="text-sm opacity-90">Budget-Lösung</div>
                    <div className="text-3xl font-bold">900€ – 1.500€</div>
                    <div className="text-xs opacity-80 mt-1">Basis-Wallbox + einfache Installation</div>
                  </div>
                  <div className="bg-white/30 backdrop-blur-sm rounded-lg p-4 text-center border-2 border-white/50">
                    <div className="text-sm opacity-90">Standard-Lösung</div>
                    <div className="text-3xl font-bold">1.500€ – 2.500€</div>
                    <div className="text-xs opacity-80 mt-1">Smart-Wallbox + normale Installation</div>
                  </div>
                  <div className="bg-white/20 backdrop-blur-sm rounded-lg p-4 text-center">
                    <div className="text-sm opacity-90">Premium-Lösung</div>
                    <div className="text-3xl font-bold">2.500€ – 4.000€</div>
                    <div className="text-xs opacity-80 mt-1">Solar-Wallbox + aufwendige Installation</div>
                  </div>
                </div>
              </div>
            </section>

            {/* Section 7: Installation */}
            <section id="installation" className="mb-12 scroll-mt-24">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                8. Installation & Genehmigungen
              </h2>

              <p className="text-gray-700 mb-6 leading-relaxed">
                Eine Wallbox muss von einem <strong>qualifizierten Elektriker</strong> installiert werden – das ist gesetzlich vorgeschrieben. Dazu kommen Anmelde- und gegebenenfalls Genehmigungspflichten beim Netzbetreiber.
              </p>

              {/* Schritt-für-Schritt */}
              <div className="space-y-4 mb-6">
                <div className="flex items-start gap-4 bg-gray-50 rounded-lg p-4">
                  <div className="bg-blue-600 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold flex-shrink-0">1</div>
                  <div>
                    <h4 className="font-bold text-gray-900">Wallbox auswählen</h4>
                    <p className="text-sm text-gray-600">Entscheiden Sie sich basierend auf Ihren Anforderungen für ein Modell. Prüfen Sie Kompatibilität mit Ihrem Fahrzeug und ggf. Ihrer PV-Anlage.</p>
                  </div>
                </div>
                <div className="flex items-start gap-4 bg-gray-50 rounded-lg p-4">
                  <div className="bg-blue-600 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold flex-shrink-0">2</div>
                  <div>
                    <h4 className="font-bold text-gray-900">Elektriker beauftragen</h4>
                    <p className="text-sm text-gray-600">Ein Fachbetrieb prüft die Gegebenheiten vor Ort, erstellt ein Angebot und übernimmt später die Installation sowie die Anmeldung beim Netzbetreiber.</p>
                  </div>
                </div>
                <div className="flex items-start gap-4 bg-gray-50 rounded-lg p-4">
                  <div className="bg-blue-600 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold flex-shrink-0">3</div>
                  <div>
                    <h4 className="font-bold text-gray-900">Anmeldung beim Netzbetreiber</h4>
                    <p className="text-sm text-gray-600">Jede Wallbox muss beim Netzbetreiber <strong>angemeldet</strong> werden. Bei 11 kW reicht eine Anmeldung, bei 22 kW ist eine <strong>Genehmigung</strong> erforderlich.</p>
                  </div>
                </div>
                <div className="flex items-start gap-4 bg-gray-50 rounded-lg p-4">
                  <div className="bg-blue-600 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold flex-shrink-0">4</div>
                  <div>
                    <h4 className="font-bold text-gray-900">Installation & Inbetriebnahme</h4>
                    <p className="text-sm text-gray-600">Der Elektriker montiert die Wallbox, verlegt die Kabel und nimmt die Ladestation in Betrieb. Sie erhalten eine Prüfdokumentation.</p>
                  </div>
                </div>
              </div>

              {/* Anmeldung vs. Genehmigung */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div className="bg-emerald-50 border-2 border-emerald-300 rounded-xl p-5">
                  <h4 className="font-bold text-emerald-700 mb-2">✓ 11 kW: Nur Anmeldung</h4>
                  <ul className="text-sm text-gray-700 space-y-1">
                    <li>• Anmeldung durch Elektriker</li>
                    <li>• Keine Genehmigung nötig</li>
                    <li>• Installation kann sofort beginnen</li>
                    <li>• Netzbetreiber kann nicht ablehnen</li>
                  </ul>
                </div>
                <div className="bg-yellow-50 border-2 border-yellow-300 rounded-xl p-5">
                  <h4 className="font-bold text-yellow-700 mb-2">⚠ 22 kW: Genehmigung erforderlich</h4>
                  <ul className="text-sm text-gray-700 space-y-1">
                    <li>• Antrag beim Netzbetreiber</li>
                    <li>• Bearbeitungszeit: 2-8 Wochen</li>
                    <li>• Kann bei Netzengpässen abgelehnt werden</li>
                    <li>• Evtl. Verstärkung des Hausanschlusses nötig</li>
                  </ul>
                </div>
              </div>

              <div className="bg-red-50 border-l-4 border-red-500 p-6">
                <div className="flex items-start">
                  <AlertCircle className="w-6 h-6 text-red-600 mr-3 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-bold text-lg text-gray-900 mb-2">Wichtig: Keine Eigeninstallation!</h3>
                    <p className="text-gray-700">
                      Die Installation einer Wallbox darf <strong>nur von einem eingetragenen Elektrofachbetrieb</strong> durchgeführt werden. Eine Selbstmontage ist gesetzlich verboten, gefährlich und führt zum Erlöschen von Garantie und Versicherungsschutz.
                    </p>
                  </div>
                </div>
              </div>
            </section>

            {/* Fazit */}
            <section id="fazit" className="mb-8 md:mb-12">
              <div className="bg-gradient-to-r from-blue-600 to-emerald-600 rounded-xl p-6 md:p-8 text-white">
                <h2 className="text-2xl md:text-3xl font-bold mb-4">
                  Fazit: So finden Sie die perfekte Wallbox
                </h2>
                <p className="text-base md:text-lg leading-relaxed mb-4">
                  Die Wahl der richtigen Wallbox ist weniger kompliziert als es zunächst scheint: Für <strong>90% aller E-Auto-Besitzer</strong> ist eine <strong>smarte 11-kW-Wallbox</strong> zwischen 500 und 900€ die beste Wahl. Sie lädt über Nacht jedes Auto voll, benötigt keine Genehmigung und bietet mit App-Steuerung und Zeitprogrammierung alle wichtigen Funktionen.
                </p>
                <p className="text-base md:text-lg leading-relaxed mb-6">
                  <strong>PV-Anlagen-Besitzer</strong> sollten auf eine Wallbox mit Überschussladen achten – die Mehrkosten von 100-300€ rechnen sich schnell. Für <strong>Mehrfamilienhäuser</strong> ist Lastmanagement unverzichtbar. Und wer einen <strong>Dienstwagen</strong> fährt, braucht eine eichrechtskonforme Lösung für die Abrechnung.
                </p>
                <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
                  <p className="text-lg font-semibold">
                    💡 <strong>Unser Top-Tipp:</strong> Investieren Sie lieber in eine gute Installation als in eine überteuerte Wallbox. Ein erfahrener Elektriker ist wichtiger als das teuerste Modell – und spart langfristig Geld und Ärger!
                  </p>
                </div>
              </div>
            </section>

            {/* CTA Box */}
            <div className="bg-gradient-to-r from-purple-600 to-blue-600 rounded-2xl p-8 text-center text-white mb-8">
              <h3 className="text-2xl font-bold mb-4">
                📊 Was kostet das Laden zu Hause?
              </h3>
              <p className="text-lg mb-6 max-w-2xl mx-auto">
                Berechnen Sie mit unserem TCO-Rechner die Gesamtkosten Ihres Elektroautos – inklusive Heimladen mit Ihrer neuen Wallbox!
              </p>
              <a 
                href="/rechner/tco"
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
            <li>• Bundesnetzagentur: Technische Anschlussbedingungen für Ladeeinrichtungen (Stand: 2024)</li>
            <li>• ADAC: Wallbox-Test und Vergleich (Stand: Dezember 2024)</li>
            <li>• VDE: Normen für Elektroinstallationen (DIN VDE 0100-722)</li>
            <li>• Herstellerangaben: KEBA, Webasto, go-e, Easee, ABL, Mennekes, Fronius</li>
            <li>• Preisrecherche: Online-Händler und Fachhandel (Stand: Januar 2025)</li>
          </ul>
          <p className="mt-4 leading-relaxed">
            <strong>Haftungsausschluss:</strong> Alle Angaben ohne Gewähr. Preise können je nach Händler und Region variieren. Die Installation einer Wallbox darf nur durch einen qualifizierten Elektrofachbetrieb erfolgen. Wir empfehlen, aktuelle Preise und technische Daten beim Hersteller oder Fachhändler zu prüfen.
          </p>
        </div>

        {/* Related Articles */}
        <div className="mt-8 bg-blue-50 rounded-xl p-6">
          <h3 className="text-lg font-bold text-gray-800 mb-4">
            📚 Weitere hilfreiche Artikel:
          </h3>
          <div className="space-y-2">
            <a href="/ratgeber/wallbox-kosten-installation" className="block text-blue-600 hover:underline text-sm md:text-base">
              → Wallbox-Installation: Kosten, Förderung & Ablauf 2025
            </a>
            <a href="/ratgeber/strompreise-2025" className="block text-blue-600 hover:underline text-sm md:text-base">
              → Strompreise 2025: Was kostet das Laden zu Hause?
            </a>
            <a href="/rechner/tco" className="block text-blue-600 hover:underline text-sm md:text-base">
              → TCO-Rechner: Gesamtkosten Elektroauto berechnen
            </a>
            <a href="/ratgeber/elektroauto-reichweite-winter" className="block text-blue-600 hover:underline text-sm md:text-base">
              → E-Auto Reichweite im Winter: Realistische Werte & Tipps
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