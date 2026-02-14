import React, { useEffect } from 'react';
import SEO from '../components/SEO';
import Header from '../components/Header';
import { 
  ArrowLeft,
  Euro,
  Zap,
  Battery,
  CheckCircle,
  AlertCircle,
  Calculator,
  Wallet,
  TrendingDown,
  Car,
  FileText,
  ArrowRight
} from 'lucide-react';

export default function EAutoUnter10000Page() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-white">
      <SEO 
        title="E-Auto unter 10.000€: Diese 5 Modelle gibt es 2026 wirklich | e-Autowelt"
        description="E-Auto Neuwagen unter 10.000€ kaufen ✓ Dacia Spring ab 5.900€ ✓ Citroën ë-C3 ab 7.990€ ✓ Alle Förderungen 2026 ✓ Preisvergleich & Tipps für den günstigsten Stromer!"
        keywords="E-Auto unter 10000 Euro, günstigstes Elektroauto 2026, Dacia Spring Preis, Citroën e-C3 günstig, E-Auto Förderung 2026, Elektroauto Neuwagen billig"
        canonicalPath="/ratgeber/e-auto-neuwagen-unter-10000-euro"
        ogImage="/images/ratgeber/e-auto-unter-10000-og.jpg"
        ogType="article"
        publishedDate="2026-02-03T12:00:00Z"
        modifiedDate="2026-02-03T12:00:00Z"
      />

      <Header activeTab="ratgeber" />
      <div className="h-20 md:h-24"></div>

      <div className="max-w-4xl mx-auto px-3 md:px-4 py-8">
        <div className="mb-6">
          <a href="/ratgeber" className="inline-flex items-center gap-2 text-sm md:text-base text-blue-600 hover:text-blue-700 font-medium">
            <ArrowLeft className="w-4 h-4" />
            Zurück zur Übersicht
          </a>
        </div>

        <article className="bg-white rounded-2xl shadow-xl overflow-hidden">
          <div className="relative h-64 md:h-96 bg-gradient-to-br from-emerald-600 to-teal-600 overflow-hidden">
            <img 
              src="/images/ratgeber/e-auto-unter-10000-hero.webp"
              alt="Günstige Elektroautos unter 10.000 Euro - Dacia Spring und Citroën ë-C3"
              className="w-full h-full object-cover opacity-90"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 to-transparent"></div>
            <div className="absolute bottom-0 left-0 right-0 p-6 md:p-10 text-white">
              <div className="flex items-center gap-3 mb-3 flex-wrap">
                <div className="bg-white/30 backdrop-blur-md p-2 rounded-lg shadow-lg">
                  <Euro className="w-6 h-6 md:w-8 md:h-8" />
                </div>
                <span className="text-xs md:text-sm bg-white/30 backdrop-blur-md px-3 py-1 rounded-full font-semibold shadow-lg">
                  📖 8 Min. Lesezeit
                </span>
                <span className="text-xs md:text-sm bg-white/30 backdrop-blur-md px-3 py-1 rounded-full font-semibold shadow-lg">
                  Aktualisiert am 03. Februar 2026
                </span>
              </div>
              <h1 className="text-2xl md:text-4xl lg:text-5xl font-bold leading-tight">
                E-Auto Neuwagen unter 10.000€: Die günstigsten Stromer 2026
              </h1>
            </div>
          </div>

          <div className="p-6 md:p-10">
            <div className="mb-8 md:mb-12">
              <p className="text-lg md:text-xl text-gray-600 leading-relaxed mb-4">
                Ein <strong>Elektroauto-Neuwagen für unter 10.000 Euro</strong> – was vor wenigen Jahren noch undenkbar schien, ist 2026 Realität. Dank der neuen staatlichen E-Auto-Förderung und aggressiven Herstellerrabatten können Sie jetzt zu Preisen in die Elektromobilität einsteigen, die unter manchem Gebrauchtwagen liegen.
              </p>
              <div className="bg-emerald-50 border-2 border-emerald-200 rounded-xl p-6">
                <p className="text-base md:text-lg text-gray-700 leading-relaxed">
                  <strong className="text-emerald-700">⚡ Schnell-Überblick:</strong> Der <strong>Dacia Spring</strong> ist ab 5.900€ erhältlich (mit maximaler Förderung), der <strong>Citroën ë-C3</strong> ab 7.990€. Die neue Bundesförderung bringt bis zu 6.000€ Zuschuss, viele Hersteller verdoppeln diesen Betrag. <strong>Wichtig: Diese Schnäppchen-Preise gelten nur für bestimmte Haushalte und sind zeitlich befristet!</strong>
                </p>
              </div>
            </div>

            <nav className="bg-gray-50 rounded-xl p-6 mb-8 md:mb-12">
              <h2 className="text-xl md:text-2xl font-bold text-gray-800 mb-4">Inhaltsverzeichnis</h2>
              <ol className="space-y-2 text-sm md:text-base">
                <li><a href="#foerderung-2026" className="text-blue-600 hover:underline">1. E-Auto-Förderung 2026: So kommen Sie unter 10.000€</a></li>
                <li><a href="#dacia-spring" className="text-blue-600 hover:underline">2. Dacia Spring: Der Preisbrecher ab 5.900€</a></li>
                <li><a href="#citroen-ec3" className="text-blue-600 hover:underline">3. Citroën ë-C3: Premium-Alternative ab 7.990€</a></li>
                <li><a href="#leapmotor-t03" className="text-blue-600 hover:underline">4. Leapmotor T03: China-Geheimtipp ab 12.900€</a></li>
                <li><a href="#vergleich" className="text-blue-600 hover:underline">5. Vergleich: Welches E-Auto passt zu Ihnen?</a></li>
                <li><a href="#voraussetzungen" className="text-blue-600 hover:underline">6. Voraussetzungen für die Maximalförderung</a></li>
                <li><a href="#fazit" className="text-blue-600 hover:underline">7. Fazit: Jetzt zuschlagen oder warten?</a></li>
              </ol>
            </nav>

            <section id="foerderung-2026" className="mb-12 scroll-mt-24">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">E-Auto-Förderung 2026: So kommen Sie unter 10.000€</h2>
              
              <p className="text-gray-700 mb-4 leading-relaxed">
                Die Bundesregierung hat im Januar 2026 ein neues Förderprogramm für Elektroautos gestartet. Anders als beim alten Umweltbonus ist die neue Förderung sozial gestaffelt – je nach Einkommen und Familiengröße erhalten Sie zwischen 1.500€ und 6.000€ Zuschuss.
              </p>

              <div className="bg-blue-50 border-l-4 border-blue-500 p-6 mb-6">
                <div className="flex items-start">
                  <Zap className="w-6 h-6 text-blue-600 mr-3 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-bold text-lg text-gray-900 mb-2">So funktioniert die Staffelung</h3>
                    <p className="text-gray-700">
                      <strong>Basis:</strong> 3.000€ für reine E-Autos (1.500€ für Plug-in-Hybride). <strong>Kinderbonus:</strong> +500€ pro Kind (max. 2 Kinder = 1.000€). <strong>Einkommensbonus:</strong> Weitere +1.000€ bei unter 45.000€ Jahreseinkommen. <strong>Maximum:</strong> 6.000€ für Haushalte unter 45.000€ mit 2+ Kindern.
                    </p>
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
                <div className="bg-white p-5 rounded-lg border-2 border-emerald-500 shadow-sm">
                  <div className="text-sm text-gray-600 mb-1">Maximale Förderung</div>
                  <div className="text-3xl font-bold text-emerald-600">6.000 €</div>
                  <div className="text-xs text-gray-500 mt-1">bei niedr. Einkommen + Kinder</div>
                </div>
                <div className="bg-white p-5 rounded-lg border-2 border-blue-500 shadow-sm">
                  <div className="text-sm text-gray-600 mb-1">Einkommensgrenze</div>
                  <div className="text-3xl font-bold text-blue-600">80.000 €</div>
                  <div className="text-xs text-gray-500 mt-1">zu versteuerndes Jahreseinkommen</div>
                </div>
                <div className="bg-white p-5 rounded-lg border-2 border-purple-500 shadow-sm">
                  <div className="text-sm text-gray-600 mb-1">Mindesthaltedauer</div>
                  <div className="text-3xl font-bold text-purple-600">36 Monate</div>
                  <div className="text-xs text-gray-500 mt-1">ab Erstzulassung</div>
                </div>
              </div>

              <p className="text-gray-700 mb-4 leading-relaxed">
                <strong>Der Clou:</strong> Viele Hersteller gewähren zusätzlich eigene Rabatte, die sich mit der staatlichen Förderung kombinieren lassen. Citroën verdoppelt sogar den Förderbetrag – wer 6.000€ vom Staat bekommt, erhält nochmal 6.000€ von Citroën. Dacia gibt pauschal 5.000€ Elektrobonus auf den Spring.
              </p>
            </section>

            <section id="dacia-spring" className="mb-12 scroll-mt-24">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Dacia Spring: Der Preisbrecher ab 5.900€</h2>

              <p className="text-gray-700 mb-4 leading-relaxed">
                Der <strong>Dacia Spring</strong> ist und bleibt das günstigste Elektroauto Deutschlands – und 2026 erreicht er Preisregionen, die selbst Branchenkenner überraschen. Mit dem Dacia Elektrobonus von 5.000€ sinkt der Einstiegspreis auf <strong>11.900€</strong>. Wer zusätzlich die maximale staatliche Förderung erhält, zahlt effektiv nur noch <strong>5.900€</strong>.
              </p>

              <div className="bg-emerald-50 border-l-4 border-emerald-500 p-6 mb-6">
                <div className="flex items-start">
                  <TrendingDown className="w-6 h-6 text-emerald-600 mr-3 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-bold text-lg text-gray-900 mb-2">Dacia Spring Preisberechnung</h3>
                    <p className="text-gray-700">
                      Listenpreis: <strong>16.900€</strong> → Minus 5.000€ Dacia Elektrobonus = <strong>11.900€</strong> → Minus 6.000€ staatliche Förderung (maximal) = <strong>5.900€</strong>
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-gray-50 rounded-xl p-6 mb-6">
                <h3 className="font-bold text-lg text-gray-900 mb-4">Technische Daten Dacia Spring 2026</h3>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  <div><div className="text-sm text-gray-500">Reichweite (WLTP)</div><div className="text-lg font-bold text-gray-800">225 km</div></div>
                  <div><div className="text-sm text-gray-500">Batterie</div><div className="text-lg font-bold text-gray-800">24,3 kWh (LFP)</div></div>
                  <div><div className="text-sm text-gray-500">Leistung</div><div className="text-lg font-bold text-gray-800">48 kW (65 PS)</div></div>
                  <div><div className="text-sm text-gray-500">Schnellladen</div><div className="text-lg font-bold text-gray-800">bis 40 kW DC</div></div>
                  <div><div className="text-sm text-gray-500">Verbrauch</div><div className="text-lg font-bold text-gray-800">12,7 kWh/100km</div></div>
                  <div><div className="text-sm text-gray-500">Länge</div><div className="text-lg font-bold text-gray-800">3,70 m</div></div>
                  <div><div className="text-sm text-gray-500">Leergewicht</div><div className="text-lg font-bold text-gray-800">995 kg</div></div>
                  <div><div className="text-sm text-gray-500">Kofferraum</div><div className="text-lg font-bold text-gray-800">308 Liter</div></div>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                <div className="bg-green-50 p-4 rounded-lg">
                  <h4 className="font-bold text-green-700 mb-2 flex items-center gap-2"><CheckCircle className="w-5 h-5" /> Vorteile</h4>
                  <ul className="text-sm text-gray-700 space-y-1">
                    <li>• Unschlagbar günstiger Preis</li>
                    <li>• Extrem niedriger Verbrauch</li>
                    <li>• Neue LFP-Batterie (langlebig)</li>
                    <li>• Perfekt für Stadt und Pendler</li>
                    <li>• 4 vollwertige Sitzplätze</li>
                  </ul>
                </div>
                <div className="bg-yellow-50 p-4 rounded-lg">
                  <h4 className="font-bold text-yellow-700 mb-2 flex items-center gap-2"><AlertCircle className="w-5 h-5" /> Einschränkungen</h4>
                  <ul className="text-sm text-gray-700 space-y-1">
                    <li>• Begrenzte Reichweite (225 km)</li>
                    <li>• Langsames AC-Laden (7 kW)</li>
                    <li>• Einfache Ausstattung</li>
                    <li>• Nicht für Autobahn-Langstrecken</li>
                    <li>• Höchstgeschwindigkeit: 125 km/h</li>
                  </ul>
                </div>
              </div>

              <div className="bg-yellow-50 border-l-4 border-yellow-500 p-6 mb-6">
                <div className="flex items-start">
                  <AlertCircle className="w-6 h-6 text-yellow-600 mr-3 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-bold text-lg text-gray-900 mb-2">Wichtig: Aktion befristet!</h3>
                    <p className="text-gray-700">
                      Der Dacia Elektrobonus gilt nur für Bestellungen bis zum <strong>28. Februar 2026</strong>. Zulassung muss bis 30. September 2026 erfolgen. Schnell sein lohnt sich!
                    </p>
                  </div>
                </div>
              </div>
            </section>

            <section id="citroen-ec3" className="mb-12 scroll-mt-24">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Citroën ë-C3: Premium-Alternative ab 7.990€</h2>

              <p className="text-gray-700 mb-4 leading-relaxed">
                Der <strong>Citroën ë-C3</strong> ist die interessanteste Neuheit im Segment der günstigen Elektroautos. Mit mehr Reichweite, Platz und Komfort als der Dacia Spring positioniert er sich als "Made in Europe"-Alternative zu den Billig-Stromern. Das Beste: Citroën verdoppelt die staatliche Förderung – bei maximaler Berechtigung sind bis zu <strong>12.000€ Ersparnis</strong> möglich.
              </p>

              <div className="bg-blue-50 border-l-4 border-blue-500 p-6 mb-6">
                <div className="flex items-start">
                  <TrendingDown className="w-6 h-6 text-blue-600 mr-3 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-bold text-lg text-gray-900 mb-2">Citroën ë-C3 Preisberechnung</h3>
                    <p className="text-gray-700">
                      Listenpreis Urban Range: <strong>19.990€</strong> → Minus 6.000€ staatliche Förderung → Minus 6.000€ Citroën-Verdopplung = <strong>7.990€</strong>
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-gray-50 rounded-xl p-6 mb-6">
                <h3 className="font-bold text-lg text-gray-900 mb-4">Technische Daten Citroën ë-C3 2026</h3>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  <div><div className="text-sm text-gray-500">Reichweite (WLTP)</div><div className="text-lg font-bold text-gray-800">212–320 km</div></div>
                  <div><div className="text-sm text-gray-500">Batterie</div><div className="text-lg font-bold text-gray-800">30–44 kWh (LFP)</div></div>
                  <div><div className="text-sm text-gray-500">Leistung</div><div className="text-lg font-bold text-gray-800">83 kW (113 PS)</div></div>
                  <div><div className="text-sm text-gray-500">Schnellladen</div><div className="text-lg font-bold text-gray-800">bis 100 kW DC</div></div>
                  <div><div className="text-sm text-gray-500">0-100 km/h</div><div className="text-lg font-bold text-gray-800">11 Sekunden</div></div>
                  <div><div className="text-sm text-gray-500">Länge</div><div className="text-lg font-bold text-gray-800">4,01 m</div></div>
                  <div><div className="text-sm text-gray-500">Höchstgeschw.</div><div className="text-lg font-bold text-gray-800">135 km/h</div></div>
                  <div><div className="text-sm text-gray-500">Kofferraum</div><div className="text-lg font-bold text-gray-800">310 Liter</div></div>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                <div className="bg-green-50 p-4 rounded-lg">
                  <h4 className="font-bold text-green-700 mb-2 flex items-center gap-2"><CheckCircle className="w-5 h-5" /> Vorteile</h4>
                  <ul className="text-sm text-gray-700 space-y-1">
                    <li>• Deutlich mehr Reichweite</li>
                    <li>• Schnellladen bis 100 kW</li>
                    <li>• Komfortables Fahrwerk</li>
                    <li>• Made in Europe (Slowakei)</li>
                    <li>• Modernes Design</li>
                  </ul>
                </div>
                <div className="bg-yellow-50 p-4 rounded-lg">
                  <h4 className="font-bold text-yellow-700 mb-2 flex items-center gap-2"><AlertCircle className="w-5 h-5" /> Einschränkungen</h4>
                  <ul className="text-sm text-gray-700 space-y-1">
                    <li>• Basisversion spartanisch ausgestattet</li>
                    <li>• Schnellladen kostet Aufpreis (30 kWh)</li>
                    <li>• Höchstgeschwindigkeit begrenzt</li>
                    <li>• Kein CarPlay/Android Auto Serie</li>
                    <li>• Aktion nur bis 31. März 2026</li>
                  </ul>
                </div>
              </div>

              <p className="text-gray-700 mb-4 leading-relaxed">
                <strong>Unser Tipp:</strong> Wer etwas mehr Budget hat, sollte zur Version mit 44-kWh-Batterie greifen (ab 23.300€ Liste). Mit maximaler Förderung+Bonus liegt der Preis dann bei etwa 11.300€ – für 320 km Reichweite und 100 kW Schnellladen ein exzellentes Preis-Leistungs-Verhältnis.
              </p>
            </section>

            <section id="leapmotor-t03" className="mb-12 scroll-mt-24">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Leapmotor T03: Der China-Geheimtipp ab 12.900€</h2>

              <p className="text-gray-700 mb-4 leading-relaxed">
                Der <strong>Leapmotor T03</strong> ist die spannende Alternative für alle, die knapp über der Fördergrenze liegen oder mehr Ausstattung wollen. Mit einem Listenpreis von 18.900€ und staatlicher Maximalförderung landet er bei etwa <strong>12.900€</strong>. Der Clou: Das Auto kommt mit Vollausstattung inklusive Panoramadach, 10-Zoll-Display und Rückfahrkamera.
              </p>

              <div className="bg-gray-50 rounded-xl p-6 mb-6">
                <h3 className="font-bold text-lg text-gray-900 mb-4">Technische Daten Leapmotor T03</h3>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  <div><div className="text-sm text-gray-500">Reichweite (WLTP)</div><div className="text-lg font-bold text-gray-800">265 km</div></div>
                  <div><div className="text-sm text-gray-500">Batterie</div><div className="text-lg font-bold text-gray-800">37,3 kWh (LFP)</div></div>
                  <div><div className="text-sm text-gray-500">Leistung</div><div className="text-lg font-bold text-gray-800">70 kW (95 PS)</div></div>
                  <div><div className="text-sm text-gray-500">Schnellladen</div><div className="text-lg font-bold text-gray-800">bis 48 kW DC</div></div>
                  <div><div className="text-sm text-gray-500">Verbrauch</div><div className="text-lg font-bold text-gray-800">14,5 kWh/100km</div></div>
                  <div><div className="text-sm text-gray-500">Länge</div><div className="text-lg font-bold text-gray-800">3,62 m</div></div>
                  <div><div className="text-sm text-gray-500">Höchstgeschw.</div><div className="text-lg font-bold text-gray-800">130 km/h</div></div>
                  <div><div className="text-sm text-gray-500">Kofferraum</div><div className="text-lg font-bold text-gray-800">210–508 L</div></div>
                </div>
              </div>

              <div className="bg-purple-50 border-l-4 border-purple-500 p-6 mb-6">
                <div className="flex items-start">
                  <CheckCircle className="w-6 h-6 text-purple-600 mr-3 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-bold text-lg text-gray-900 mb-2">Vollausstattung serienmäßig</h3>
                    <p className="text-gray-700">
                      Panorama-Glasdach, 10-Zoll-Touchscreen mit Navigation, Rückfahrkamera, Parksensoren, Klimaautomatik, elektrische Fensterheber rundum, 10 Assistenzsysteme, 6 Airbags – alles ohne Aufpreis.
                    </p>
                  </div>
                </div>
              </div>

              <p className="text-gray-700 mb-4 leading-relaxed">
                <strong>Gut zu wissen:</strong> Leapmotor gehört zu 51% dem Stellantis-Konzern (Opel, Citroën, Peugeot). Service und Garantie laufen über das etablierte Händlernetz mit deutschlandweit rund 40 Stützpunkten. Die Produktion erfolgt teilweise in Polen, was Strafzölle vermeidet.
              </p>
            </section>

            <section id="vergleich" className="mb-12 scroll-mt-24">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Vergleich: Welches E-Auto passt zu Ihnen?</h2>

              <div className="overflow-x-auto mb-6">
                <table className="w-full border-collapse">
                  <thead>
                    <tr className="bg-gray-100">
                      <th className="border border-gray-300 p-3 text-left">Kriterium</th>
                      <th className="border border-gray-300 p-3 text-center">Dacia Spring</th>
                      <th className="border border-gray-300 p-3 text-center">Citroën ë-C3</th>
                      <th className="border border-gray-300 p-3 text-center">Leapmotor T03</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="border border-gray-300 p-3 font-medium">Effektivpreis (max. Förd.)</td>
                      <td className="border border-gray-300 p-3 text-center font-bold text-emerald-600">ab 5.900€</td>
                      <td className="border border-gray-300 p-3 text-center font-bold text-blue-600">ab 7.990€</td>
                      <td className="border border-gray-300 p-3 text-center font-bold text-purple-600">ab 12.900€</td>
                    </tr>
                    <tr className="bg-gray-50">
                      <td className="border border-gray-300 p-3 font-medium">Listenpreis</td>
                      <td className="border border-gray-300 p-3 text-center">16.900€</td>
                      <td className="border border-gray-300 p-3 text-center">19.990€</td>
                      <td className="border border-gray-300 p-3 text-center">18.900€</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 p-3 font-medium">Reichweite (WLTP)</td>
                      <td className="border border-gray-300 p-3 text-center">225 km</td>
                      <td className="border border-gray-300 p-3 text-center">212–320 km</td>
                      <td className="border border-gray-300 p-3 text-center">265 km</td>
                    </tr>
                    <tr className="bg-gray-50">
                      <td className="border border-gray-300 p-3 font-medium">Schnellladen (DC)</td>
                      <td className="border border-gray-300 p-3 text-center">40 kW</td>
                      <td className="border border-gray-300 p-3 text-center">30–100 kW</td>
                      <td className="border border-gray-300 p-3 text-center">48 kW</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 p-3 font-medium">Leistung</td>
                      <td className="border border-gray-300 p-3 text-center">48 kW (65 PS)</td>
                      <td className="border border-gray-300 p-3 text-center">83 kW (113 PS)</td>
                      <td className="border border-gray-300 p-3 text-center">70 kW (95 PS)</td>
                    </tr>
                    <tr className="bg-gray-50">
                      <td className="border border-gray-300 p-3 font-medium">Ausstattung</td>
                      <td className="border border-gray-300 p-3 text-center">Basis</td>
                      <td className="border border-gray-300 p-3 text-center">Basis</td>
                      <td className="border border-gray-300 p-3 text-center">Voll</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 p-3 font-medium">Ideal für</td>
                      <td className="border border-gray-300 p-3 text-center text-sm">Stadtpendler, Zweitwagen</td>
                      <td className="border border-gray-300 p-3 text-center text-sm">Alltagsfahrer, auch Überland</td>
                      <td className="border border-gray-300 p-3 text-center text-sm">Ausstattungs-Fans</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="bg-emerald-50 p-4 rounded-lg border-2 border-emerald-200">
                  <h4 className="font-bold text-emerald-700 mb-2">🏆 Dacia Spring wählen, wenn:</h4>
                  <ul className="text-sm text-gray-700 space-y-1">
                    <li>• Budget absolut minimieren</li>
                    <li>• Kurze Strecken (&lt;50 km/Tag)</li>
                    <li>• Zweitwagen/Stadtauto</li>
                    <li>• Heimlademöglichkeit</li>
                  </ul>
                </div>
                <div className="bg-blue-50 p-4 rounded-lg border-2 border-blue-200">
                  <h4 className="font-bold text-blue-700 mb-2">🏆 Citroën ë-C3 wählen, wenn:</h4>
                  <ul className="text-sm text-gray-700 space-y-1">
                    <li>• Mehr Reichweite wichtig</li>
                    <li>• Schnellladen nutzen</li>
                    <li>• Europäische Produktion</li>
                    <li>• Komfort Priorität</li>
                  </ul>
                </div>
                <div className="bg-purple-50 p-4 rounded-lg border-2 border-purple-200">
                  <h4 className="font-bold text-purple-700 mb-2">🏆 Leapmotor T03 wählen, wenn:</h4>
                  <ul className="text-sm text-gray-700 space-y-1">
                    <li>• Vollausstattung wichtig</li>
                    <li>• Kein Aufpreis-Ärger</li>
                    <li>• Auch ohne max. Förderung ok</li>
                    <li>• China-Marken kein Problem</li>
                  </ul>
                </div>
              </div>
            </section>

            <section id="voraussetzungen" className="mb-12 scroll-mt-24">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Voraussetzungen für die Maximalförderung</h2>

              <p className="text-gray-700 mb-4 leading-relaxed">
                Die Traumpreise von 5.900€ für den Dacia Spring oder 7.990€ für den Citroën ë-C3 gelten nur, wenn Sie die maximale Förderung erhalten. Dafür müssen folgende Voraussetzungen erfüllt sein:
              </p>

              <div className="bg-gray-50 rounded-xl p-6 mb-6">
                <h3 className="font-bold text-lg text-gray-900 mb-4">Checkliste für 6.000€ Förderung</h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700"><strong>Zu versteuerndes Haushaltseinkommen max. 45.000€</strong> (für den Einkommensbonus von 1.000€)</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700"><strong>Mindestens 2 Kinder unter 18 Jahren</strong> im Haushalt (für den vollen Kinderbonus von 1.000€)</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700"><strong>Neuwagen</strong> – Gebrauchte sind nicht förderfähig</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700"><strong>Erstzulassung ab 1. Januar 2026</strong> in Deutschland</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700"><strong>Mindesthaltedauer 36 Monate</strong> – kein Verkauf vor Ablauf</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700"><strong>Privatperson</strong> – Unternehmen/Gewerbetreibende sind ausgeschlossen</span>
                  </li>
                </ul>
              </div>

              <div className="bg-blue-50 border-l-4 border-blue-500 p-6 mb-6">
                <div className="flex items-start">
                  <Calculator className="w-6 h-6 text-blue-600 mr-3 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-bold text-lg text-gray-900 mb-2">Einkommensgrenze mit Kindern</h3>
                    <p className="text-gray-700">
                      Die Grundgrenze von 80.000€ erhöht sich um 5.000€ pro Kind. Bei 2 Kindern sind also bis zu 90.000€ Jahreseinkommen förderfähig – allerdings dann "nur" mit der Basisförderung von 3.000€ plus Kinderbonus.
                    </p>
                  </div>
                </div>
              </div>

              <p className="text-gray-700 mb-4 leading-relaxed">
                <strong>Antragstellung:</strong> Das Online-Portal wird voraussichtlich im Mai 2026 freigeschaltet. Die Förderung kann rückwirkend für alle Zulassungen ab 1. Januar 2026 beantragt werden – Sie können also jetzt kaufen und später den Antrag stellen.
              </p>
            </section>

            <section id="fazit" className="mb-8 md:mb-12">
              <div className="bg-gradient-to-r from-emerald-600 to-teal-600 rounded-xl p-6 md:p-8 text-white">
                <h2 className="text-2xl md:text-3xl font-bold mb-4">Fazit: Jetzt zuschlagen oder warten?</h2>
                <p className="text-base md:text-lg leading-relaxed mb-4">
                  Die Kombination aus neuer Bundesförderung und Herstellerrabatten macht 2026 zum bisher besten Jahr für den Einstieg in die Elektromobilität. Ein <strong>E-Auto-Neuwagen ab 5.900€</strong> ist kein Marketing-Gag, sondern Realität – allerdings nur für Haushalte, die alle Fördervoraussetzungen erfüllen.
                </p>
                <p className="text-base md:text-lg leading-relaxed mb-6">
                  Wer über der Einkommensgrenze liegt, zahlt immer noch sehr faire Preise: Der Dacia Spring für 11.900€ oder der Leapmotor T03 für 18.900€ sind auch ohne staatliche Förderung konkurrenzfähig. <strong>Wichtig:</strong> Die Herstelleraktionen sind befristet – beim Spring bis Ende Februar, bei Citroën bis Ende März 2026.
                </p>
                <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
                  <p className="text-lg font-semibold">
                    ⚡ <strong>Unsere Empfehlung:</strong> Wer ein günstiges E-Auto sucht und die Förderkriterien erfüllt, sollte jetzt handeln. So günstig war Elektromobilität noch nie – und ob diese Angebote wiederkommen, ist ungewiss.
                  </p>
                </div>
              </div>
            </section>

            <div className="bg-gradient-to-r from-purple-600 to-blue-600 rounded-2xl p-8 text-center text-white mb-8">
              <h3 className="text-2xl font-bold mb-4">📊 Lohnt sich ein E-Auto für Sie?</h3>
              <p className="text-lg mb-6 max-w-2xl mx-auto">
                Berechnen Sie mit unserem kostenlosen TCO-Rechner, ob sich der Umstieg auf ein Elektroauto für Ihre individuelle Situation lohnt – inklusive aller Kosten und der neuen Förderung.
              </p>
              <a 
                href="/rechner/kostenrechner"
                className="inline-flex items-center gap-3 bg-white text-blue-600 font-bold px-8 py-4 rounded-full hover:shadow-2xl hover:scale-105 transition-all duration-200"
              >
                <Calculator className="w-6 h-6" />
                Jetzt Kosten vergleichen
              </a>
            </div>
          </div>
        </article>

        <div className="mt-8 bg-gray-100 rounded-xl p-6 text-sm text-gray-600">
          <h3 className="font-bold text-gray-800 mb-3">📚 Quellen & Referenzen:</h3>
          <ul className="space-y-1 text-xs">
            <li>• Bundesministerium für Umwelt (BMUKN): E-Auto-Förderprogramm, Pressemitteilung vom 19.01.2026</li>
            <li>• Dacia Deutschland: Elektrobonus-Aktion, Stand Januar 2026</li>
            <li>• Citroën Deutschland: Förderverdopplung-Aktion, Stand Januar 2026</li>
            <li>• ADAC: Autokostenvergleich Elektroautos, Stand Februar 2026</li>
            <li>• Carwow: Marktpreisanalyse günstige E-Autos, Stand Februar 2026</li>
          </ul>
          <p className="mt-4 leading-relaxed">
            <strong>Haftungsausschluss:</strong> Alle Angaben ohne Gewähr. Preise können sich jederzeit ändern. Die genannten Effektivpreise setzen die maximale staatliche Förderung und die aktuellen Herstellerrabatte voraus. Bitte prüfen Sie Ihre individuelle Förderberechtigung und die aktuellen Konditionen direkt beim Händler bzw. auf der BAFA-Website.
          </p>
        </div>

        <div className="mt-8 bg-blue-50 rounded-xl p-6">
          <h3 className="text-lg font-bold text-gray-800 mb-4">📚 Weitere hilfreiche Artikel:</h3>
          <div className="space-y-2">
            <a href="/ratgeber/strompreise-2025" className="block text-blue-600 hover:underline text-sm md:text-base">→ Strompreise 2025/2026: Was kostet Laden zu Hause?</a>
            <a href="/ratgeber/wallbox-kosten-installation" className="block text-blue-600 hover:underline text-sm md:text-base">→ Wallbox Kosten & Installation: Der komplette Guide</a>
            <a href="/ratgeber/elektroauto-reichweite-winter-test" className="block text-blue-600 hover:underline text-sm md:text-base">→ E-Auto Reichweite im Winter: Was Sie wissen müssen</a>
            <a href="/rechner/kostenrechner" className="block text-blue-600 hover:underline text-sm md:text-base">→ TCO-Rechner: E-Auto vs. Verbrenner Kostenvergleich</a>
          </div>
        </div>
      </div>

      <footer className="bg-white border-t border-gray-200 mt-12 md:mt-16 py-8">
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex flex-wrap justify-center gap-6 mb-6">
            <a href="/impressum" className="text-sm md:text-base text-gray-600 hover:text-gray-900 hover:underline transition-all duration-200">Impressum</a>
            <span className="text-gray-400">|</span>
            <a href="/datenschutz" className="text-sm md:text-base text-gray-600 hover:text-gray-900 hover:underline transition-all duration-200">Datenschutz</a>
          </div>
          <div className="text-center text-xs md:text-sm text-gray-500">
            <p>© 2026 e-Autowelt. Alle Angaben ohne Gewähr.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
