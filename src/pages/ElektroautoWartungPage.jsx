import React, { useEffect } from 'react';
import SEO from '../components/SEO';
import Header from '../components/Header';
import { 
  ArrowLeft,
  Wrench,
  CheckCircle,
  XCircle,
  Euro,
  Battery,
  AlertCircle,
  Calculator,
  Lightbulb,
  Car,
  Clock,
  TrendingDown
} from 'lucide-react';

export default function ElektroautoWartungPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-white">
      {/* SEO */}
      <SEO 
        title="Elektroauto Wartung 2025: Was ist anders? Kosten & Intervalle | e-Autowelt"
        description="E-Auto Wartung: Was entfällt, was bleibt? ✓ 150-400€ jährlich ✓ Kein Ölwechsel ✓ Weniger Bremsverschleiß ✓ Batteriepflege-Tipps. Jetzt informieren!"
        keywords="elektroauto wartung, e-auto inspektion, wartungskosten elektroauto, e-auto service, elektroauto werkstatt, e-auto bremsen, batterie wartung"
        canonicalPath="/ratgeber/elektroauto-wartung"
        ogType="article"
        publishedDate="2025-12-28T12:00:00Z"
        modifiedDate="2025-12-28T12:00:00Z"
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
          <div className="relative h-64 md:h-96 bg-gradient-to-br from-emerald-600 to-teal-600 overflow-hidden">
 <img 
              src="/images/ratgeber/elektroauto-wartung-hero.webp"
              alt="Wartung von Elektroauto - Worauf Sie achten sollten"
              className="w-full h-full object-cover opacity-70"
              loading="lazy"
              decoding="async"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
            <div className="absolute bottom-0 left-0 right-0 p-6 md:p-10 text-white">
              <div className="flex flex-wrap items-center gap-3 mb-3">
                <div className="bg-white/30 backdrop-blur-md p-2 rounded-lg shadow-lg">
                  <Wrench className="w-6 h-6 md:w-8 md:h-8" />
                </div>
                <span className="text-xs md:text-sm bg-white/30 backdrop-blur-md px-3 py-1 rounded-full font-semibold shadow-lg">
                  📖 12 Min. Lesezeit
                </span>
                <span className="text-xs md:text-sm bg-white/30 backdrop-blur-md px-3 py-1 rounded-full font-semibold shadow-lg">
                  Aktualisiert am 28. Dezember 2025
                </span>
              </div>
              <h1 className="text-2xl md:text-4xl lg:text-5xl font-bold leading-tight">
                Elektroauto Wartung: Was ist anders als beim Verbrenner?
              </h1>
            </div>
          </div>

          <div className="p-6 md:p-10">
            {/* Intro */}
            <div className="mb-8 md:mb-12">
              <p className="text-lg md:text-xl text-gray-600 leading-relaxed mb-4">
                Kein Ölwechsel, keine Zündkerzen, keine Kupplung – Elektroautos gelten als wartungsarm. 
                Doch stimmt das wirklich? Und was müssen Sie bei der <strong>E-Auto Wartung</strong> trotzdem 
                beachten? Wir erklären, welche Inspektionen anfallen, was sie kosten und wo Sie bei der 
                <strong> Elektroauto Wartung</strong> tatsächlich sparen.
              </p>
              <div className="bg-blue-50 border-2 border-blue-200 rounded-xl p-6">
                <p className="text-base md:text-lg text-gray-700 leading-relaxed">
                  <strong className="text-blue-700">⚡ Schnell-Überblick:</strong> Die Wartungskosten 
                  eines E-Autos liegen bei <strong>150-400 Euro pro Jahr</strong> – rund 15-35% weniger 
                  als bei vergleichbaren Verbrennern. Bauteile wie Ölfilter, Zündkerzen und Auspuff entfallen 
                  komplett, dafür erfordern Hochvoltkomponenten und Batterie spezielle Aufmerksamkeit. 
                  <strong> Die Bremsen halten dank Rekuperation oft doppelt so lange!</strong>
                </p>
              </div>
            </div>

            {/* Inhaltsverzeichnis */}
            <nav className="bg-gray-50 rounded-xl p-6 mb-8 md:mb-12">
              <h2 className="text-xl md:text-2xl font-bold text-gray-800 mb-4">
                Inhaltsverzeichnis
              </h2>
              <ol className="space-y-2 text-sm md:text-base">
                <li><a href="#was-entfaellt" className="text-blue-600 hover:underline">1. Was entfällt bei der E-Auto Wartung?</a></li>
                <li><a href="#was-bleibt" className="text-blue-600 hover:underline">2. Was muss trotzdem gewartet werden?</a></li>
                <li><a href="#batterie-pflege" className="text-blue-600 hover:underline">3. Die Batterie: Herzstück Ihres E-Autos</a></li>
                <li><a href="#bremsen-rekuperation" className="text-blue-600 hover:underline">4. Bremsen und Rekuperation: Fluch und Segen</a></li>
                <li><a href="#reifen" className="text-blue-600 hover:underline">5. Reifenverschleiß: Die versteckte Kostenfalle</a></li>
                <li><a href="#wartungskosten" className="text-blue-600 hover:underline">6. Wartungskosten im direkten Vergleich</a></li>
                <li><a href="#intervalle" className="text-blue-600 hover:underline">7. Wartungsintervalle nach Herstellern</a></li>
                <li><a href="#werkstatt" className="text-blue-600 hover:underline">8. Werkstattwahl: Worauf Sie achten sollten</a></li>
                <li><a href="#tipps" className="text-blue-600 hover:underline">9. Fünf Tipps zur Kostenoptimierung</a></li>
                <li><a href="#fazit" className="text-blue-600 hover:underline">10. Fazit</a></li>
              </ol>
            </nav>

            {/* Section 1: Was entfällt */}
            <section id="was-entfaellt" className="mb-12 scroll-mt-24">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                1. Was entfällt bei der E-Auto Wartung?
              </h2>
              
              <div className="bg-emerald-50 border-l-4 border-emerald-500 p-6 mb-6">
                <div className="flex items-start">
                  <CheckCircle className="w-6 h-6 text-emerald-600 mr-3 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-bold text-lg text-gray-900 mb-2">Weniger Bauteile = Weniger Wartung</h3>
                    <p className="text-gray-700">Ein Elektromotor besteht aus nur etwa 20 beweglichen Teilen – ein Verbrennungsmotor aus über 2.000. Das macht sich bei der Wartung deutlich bemerkbar.</p>
                  </div>
                </div>
              </div>

              <p className="text-gray-700 mb-6 leading-relaxed">
                Der größte Vorteil eines Elektroautos zeigt sich bei einem Blick unter die Motorhaube: 
                Viele wartungsintensive Komponenten gibt es schlichtweg nicht. Das bedeutet weniger 
                Werkstattbesuche und geringere Kosten.
              </p>

              <h3 className="text-xl font-bold text-gray-800 mb-4">Diese Bauteile und Wartungsarbeiten entfallen komplett:</h3>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                <div className="bg-white p-4 rounded-lg border-2 border-emerald-200 shadow-sm">
                  <div className="flex items-center gap-3">
                    <XCircle className="w-5 h-5 text-emerald-600" />
                    <span className="font-medium text-gray-800">Ölwechsel</span>
                  </div>
                  <p className="text-sm text-gray-600 mt-1">Ersparnis: 80-150€ pro Jahr</p>
                </div>
                <div className="bg-white p-4 rounded-lg border-2 border-emerald-200 shadow-sm">
                  <div className="flex items-center gap-3">
                    <XCircle className="w-5 h-5 text-emerald-600" />
                    <span className="font-medium text-gray-800">Zündkerzen</span>
                  </div>
                  <p className="text-sm text-gray-600 mt-1">Ersparnis: 100-300€ alle 60.000 km</p>
                </div>
                <div className="bg-white p-4 rounded-lg border-2 border-emerald-200 shadow-sm">
                  <div className="flex items-center gap-3">
                    <XCircle className="w-5 h-5 text-emerald-600" />
                    <span className="font-medium text-gray-800">Zahnriemen</span>
                  </div>
                  <p className="text-sm text-gray-600 mt-1">Ersparnis: 400-800€ alle 100.000 km</p>
                </div>
                <div className="bg-white p-4 rounded-lg border-2 border-emerald-200 shadow-sm">
                  <div className="flex items-center gap-3">
                    <XCircle className="w-5 h-5 text-emerald-600" />
                    <span className="font-medium text-gray-800">Kupplung</span>
                  </div>
                  <p className="text-sm text-gray-600 mt-1">Ersparnis: 1.500-2.000€ bei Defekt</p>
                </div>
                <div className="bg-white p-4 rounded-lg border-2 border-emerald-200 shadow-sm">
                  <div className="flex items-center gap-3">
                    <XCircle className="w-5 h-5 text-emerald-600" />
                    <span className="font-medium text-gray-800">Auspuffanlage</span>
                  </div>
                  <p className="text-sm text-gray-600 mt-1">Ersparnis: 500-1.500€ bei Defekt</p>
                </div>
                <div className="bg-white p-4 rounded-lg border-2 border-emerald-200 shadow-sm">
                  <div className="flex items-center gap-3">
                    <XCircle className="w-5 h-5 text-emerald-600" />
                    <span className="font-medium text-gray-800">Kraftstofffilter</span>
                  </div>
                  <p className="text-sm text-gray-600 mt-1">Ersparnis: 50-100€ alle 2 Jahre</p>
                </div>
                <div className="bg-white p-4 rounded-lg border-2 border-emerald-200 shadow-sm">
                  <div className="flex items-center gap-3">
                    <XCircle className="w-5 h-5 text-emerald-600" />
                    <span className="font-medium text-gray-800">Abgasuntersuchung (AU)</span>
                  </div>
                  <p className="text-sm text-gray-600 mt-1">Ersparnis: ca. 40€ alle 2 Jahre</p>
                </div>
                <div className="bg-white p-4 rounded-lg border-2 border-emerald-200 shadow-sm">
                  <div className="flex items-center gap-3">
                    <XCircle className="w-5 h-5 text-emerald-600" />
                    <span className="font-medium text-gray-800">Getriebe-Wartung</span>
                  </div>
                  <p className="text-sm text-gray-600 mt-1">E-Autos: wartungsfreies 1-Gang-Getriebe</p>
                </div>
              </div>

              <p className="text-gray-700 leading-relaxed">
                Laut einer Langzeitstudie des Fraunhofer-Instituts summierten sich die Wartungs- und 
                Reparaturkosten eines VW Golf über acht Jahre auf rund <strong>7.800 Euro</strong> – 
                beim elektrischen VW ID.3 waren es nur <strong>3.300 Euro</strong>. Das entspricht 
                einer Ersparnis von über 50% bei den reinen Instandhaltungskosten.
              </p>
            </section>

            {/* Section 2: Was bleibt */}
            <section id="was-bleibt" className="mb-12 scroll-mt-24">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                2. Was muss trotzdem gewartet werden?
              </h2>
              
              <div className="bg-yellow-50 border-l-4 border-yellow-500 p-6 mb-6">
                <div className="flex items-start">
                  <AlertCircle className="w-6 h-6 text-yellow-600 mr-3 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-bold text-lg text-gray-900 mb-2">Wichtig: Wartungsfrei bedeutet nicht Inspektionsfrei</h3>
                    <p className="text-gray-700">Auch wenn viele Bauteile entfallen, sind regelmäßige Inspektionen für die Sicherheit und den Werterhalt Ihres E-Autos unverzichtbar.</p>
                  </div>
                </div>
              </div>

              <p className="text-gray-700 mb-6 leading-relaxed">
                Trotz des einfacheren Aufbaus gibt es Komponenten, die auch bei Elektroautos 
                regelmäßig überprüft und gewartet werden müssen. Einige davon sind sogar 
                E-Auto-spezifisch und erfordern besonderes Know-how.
              </p>

              <h3 className="text-xl font-bold text-gray-800 mb-4">Diese Wartungsarbeiten bleiben bestehen:</h3>

              <div className="space-y-4 mb-6">
                <div className="bg-white p-5 rounded-lg border border-gray-200 shadow-sm">
                  <h4 className="font-bold text-gray-800 mb-2">🔋 Hochvoltbatterie & Ladeelektronik</h4>
                  <p className="text-gray-600 text-sm">Sichtprüfung, Kapazitätstest, Überprüfung der Hochvoltleitungen und Ladeanschlüsse. Nur durch geschulte Fachkräfte!</p>
                </div>
                <div className="bg-white p-5 rounded-lg border border-gray-200 shadow-sm">
                  <h4 className="font-bold text-gray-800 mb-2">🛞 Bremsen & Bremsflüssigkeit</h4>
                  <p className="text-gray-600 text-sm">Bremsflüssigkeitswechsel alle 2-3 Jahre. Wegen Rekuperation weniger Verschleiß, aber Achtung vor Korrosion!</p>
                </div>
                <div className="bg-white p-5 rounded-lg border border-gray-200 shadow-sm">
                  <h4 className="font-bold text-gray-800 mb-2">❄️ Klimaanlage & Kühlsystem</h4>
                  <p className="text-gray-600 text-sm">Klimaservice, Kühlflüssigkeit für Batterie-Thermomanagement prüfen. Entscheidend für Akku-Lebensdauer!</p>
                </div>
                <div className="bg-white p-5 rounded-lg border border-gray-200 shadow-sm">
                  <h4 className="font-bold text-gray-800 mb-2">🔧 Fahrwerk & Lenkung</h4>
                  <p className="text-gray-600 text-sm">Stoßdämpfer, Achsgeometrie, Lenkung. Durch höheres Gewicht stärkere Belastung als bei Verbrennern!</p>
                </div>
                <div className="bg-white p-5 rounded-lg border border-gray-200 shadow-sm">
                  <h4 className="font-bold text-gray-800 mb-2">💡 Beleuchtung & Scheibenwischer</h4>
                  <p className="text-gray-600 text-sm">Funktionskontrolle, Wischblätter und Scheibenwischerflüssigkeit – wie bei jedem Fahrzeug.</p>
                </div>
                <div className="bg-white p-5 rounded-lg border border-gray-200 shadow-sm">
                  <h4 className="font-bold text-gray-800 mb-2">🔌 12V-Batterie</h4>
                  <p className="text-gray-600 text-sm">Auch E-Autos haben eine 12V-Bordnetzbatterie für Steuergeräte, Licht und Infotainment. Lebensdauer: 4-6 Jahre.</p>
                </div>
                <div className="bg-white p-5 rounded-lg border border-gray-200 shadow-sm">
                  <h4 className="font-bold text-gray-800 mb-2">🌬️ Innenraumfilter</h4>
                  <p className="text-gray-600 text-sm">Pollenfilter regelmäßig wechseln – besonders wichtig, da E-Autos oft mit Umluft und Klimaanlage fahren.</p>
                </div>
              </div>
            </section>

            {/* Section 3: Batterie */}
            <section id="batterie-pflege" className="mb-12 scroll-mt-24">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                3. Die Batterie: Herzstück Ihres E-Autos
              </h2>
              
              <div className="bg-blue-50 border-l-4 border-blue-500 p-6 mb-6">
                <div className="flex items-start">
                  <Battery className="w-6 h-6 text-blue-600 mr-3 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-bold text-lg text-gray-900 mb-2">8 Jahre Garantie sind Standard</h3>
                    <p className="text-gray-700">Die meisten Hersteller garantieren 8 Jahre oder 160.000 km mit mindestens 70% der ursprünglichen Kapazität. Moderne Akkus altern nur etwa 1,8% pro Jahr!</p>
                  </div>
                </div>
              </div>

              <p className="text-gray-700 mb-6 leading-relaxed">
                Die Hochvoltbatterie ist das teuerste Bauteil Ihres Elektroautos – aber auch eines der 
                langlebigsten. Aktuelle Studien zeigen: Bei richtiger Pflege können E-Auto-Batterien 
                <strong> 15-20 Jahre</strong> halten und dabei <strong>250.000 bis 500.000 Kilometer</strong> zurücklegen.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
                <div className="bg-white p-6 rounded-lg border-2 border-blue-500 shadow-sm text-center">
                  <div className="text-sm text-gray-600 mb-1">Durchschn. Alterung</div>
                  <div className="text-3xl font-bold text-blue-600">1,8%</div>
                  <div className="text-xs text-gray-500 mt-1">pro Jahr (Geotab-Studie)</div>
                </div>
                <div className="bg-white p-6 rounded-lg border-2 border-emerald-500 shadow-sm text-center">
                  <div className="text-sm text-gray-600 mb-1">Garantie (Standard)</div>
                  <div className="text-3xl font-bold text-emerald-600">8 Jahre</div>
                  <div className="text-xs text-gray-500 mt-1">oder 160.000 km</div>
                </div>
                <div className="bg-white p-6 rounded-lg border-2 border-purple-500 shadow-sm text-center">
                  <div className="text-sm text-gray-600 mb-1">Austauschkosten</div>
                  <div className="text-3xl font-bold text-purple-600">5.000-12.000€</div>
                  <div className="text-xs text-gray-500 mt-1">je nach Modell</div>
                </div>
              </div>

              <h3 className="text-xl font-bold text-gray-800 mb-4">So verlängern Sie die Batterie-Lebensdauer:</h3>

              <div className="bg-emerald-50 rounded-xl p-6 mb-6">
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-emerald-600 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700"><strong>Ladezustand zwischen 20-80% halten</strong> – Extreme belasten die Zellen</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-emerald-600 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700"><strong>Schnellladen nur bei Bedarf</strong> – DC-Laden stresst die Batterie durch Hitze</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-emerald-600 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700"><strong>Extreme Temperaturen vermeiden</strong> – Garage nutzen, Vorklimatisierung am Netz</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-emerald-600 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700"><strong>Software-Updates einspielen</strong> – Optimieren oft das Batteriemanagement</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-emerald-600 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700"><strong>Nicht leer stehen lassen</strong> – Tiefentladung kann Garantie kosten!</span>
                  </li>
                </ul>
              </div>

              <p className="text-gray-700 leading-relaxed">
                <strong>State of Health (SoH):</strong> Dieser Wert gibt an, wie viel Prozent der 
                ursprünglichen Kapazität noch vorhanden sind. Viele E-Autos zeigen ihn im Display an. 
                Ein SoH von 80% nach 8 Jahren gilt als völlig normal – Ihr E-Auto ist dann immer noch 
                alltagstauglich!
              </p>
            </section>

            {/* Section 4: Bremsen */}
            <section id="bremsen-rekuperation" className="mb-12 scroll-mt-24">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                4. Bremsen und Rekuperation: Fluch und Segen
              </h2>

              <p className="text-gray-700 mb-6 leading-relaxed">
                Die Rekuperation – also die Energierückgewinnung beim Bremsen – ist einer der größten 
                Vorteile von E-Autos. Sie erhöht die Reichweite um bis zu 20% und schont die 
                mechanischen Bremsen erheblich. Doch genau hier lauert eine Tücke.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div className="bg-emerald-50 rounded-xl p-6">
                  <h3 className="font-bold text-lg text-emerald-700 mb-3 flex items-center gap-2">
                    <CheckCircle className="w-5 h-5" />
                    Vorteile der Rekuperation
                  </h3>
                  <ul className="space-y-2 text-gray-700 text-sm">
                    <li>• Bremsbeläge halten oft 200.000+ km</li>
                    <li>• Rund 20% weniger Bremseingriffe</li>
                    <li>• Weniger Bremsstaub (Feinstaub)</li>
                    <li>• Energierückgewinnung bis 70%</li>
                    <li>• Reichweitenerhöhung bis 20%</li>
                  </ul>
                </div>
                <div className="bg-yellow-50 rounded-xl p-6">
                  <h3 className="font-bold text-lg text-yellow-700 mb-3 flex items-center gap-2">
                    <AlertCircle className="w-5 h-5" />
                    Das Korrosions-Problem
                  </h3>
                  <ul className="space-y-2 text-gray-700 text-sm">
                    <li>• Bremsscheiben können anrosten</li>
                    <li>• Bremsbeläge können "einschlafen"</li>
                    <li>• TÜV bemängelt oft Bremsfunktion</li>
                    <li>• Vorzeitiger Tausch wegen Rost</li>
                    <li>• Regelmäßiges kräftiges Bremsen nötig</li>
                  </ul>
                </div>
              </div>

              <div className="bg-blue-50 border-l-4 border-blue-500 p-6 mb-6">
                <div className="flex items-start">
                  <Lightbulb className="w-6 h-6 text-blue-600 mr-3 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-bold text-lg text-gray-900 mb-2">TÜV-Tipp: Regelmäßig richtig bremsen!</h3>
                    <p className="text-gray-700">Um Korrosion und das "Einschlafen" der Bremsen zu verhindern, 
                    sollten Sie mindestens einmal pro Woche bei mittlerer Geschwindigkeit kräftig bremsen. 
                    Das hält Beläge und Scheiben funktionsfähig.</p>
                  </div>
                </div>
              </div>

              <p className="text-gray-700 leading-relaxed">
                Der TÜV-Report 2025 zeigt: Mängel an der Bremsfunktion gehören zu den häufigsten 
                Schwachstellen bei E-Autos. Nicht wegen Verschleiß, sondern wegen mangelnder 
                Beanspruchung! Achten Sie bei der Inspektion besonders auf diesen Punkt.
              </p>
            </section>

            {/* Section 5: Reifen */}
            <section id="reifen" className="mb-12 scroll-mt-24">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                5. Reifenverschleiß: Die versteckte Kostenfalle
              </h2>
              
              <div className="bg-yellow-50 border-l-4 border-yellow-500 p-6 mb-6">
                <div className="flex items-start">
                  <AlertCircle className="w-6 h-6 text-yellow-600 mr-3 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-bold text-lg text-gray-900 mb-2">Achtung: Höherer Reifenverschleiß möglich</h3>
                    <p className="text-gray-700">E-Autos sind durch die Batterie 300-500 kg schwerer als vergleichbare 
                    Verbrenner. Das kann zu schnellerem Reifenverschleiß führen – der Kostenvorteil bei der 
                    Wartung wird dadurch teilweise aufgefressen.</p>
                  </div>
                </div>
              </div>

              <p className="text-gray-700 mb-6 leading-relaxed">
                Das hohe Gewicht und das sofort verfügbare Drehmoment von E-Autos belasten die Reifen 
                stärker. Laut ADAC steigt der Reifenabrieb proportional zum Fahrzeuggewicht. Doch 
                mit der richtigen Fahrweise und passenden Reifen können Sie gegensteuern.
              </p>

              <h3 className="text-xl font-bold text-gray-800 mb-4">Darauf sollten Sie bei E-Auto-Reifen achten:</h3>

              <div className="space-y-4 mb-6">
                <div className="flex items-start gap-4 bg-white p-4 rounded-lg border border-gray-200">
                  <div className="bg-blue-100 p-2 rounded-lg">
                    <span className="text-xl font-bold text-blue-600">1</span>
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-800">Höherer Tragfähigkeitsindex (LI)</h4>
                    <p className="text-gray-600 text-sm">Achten Sie auf Reifen mit ausreichender Tragfähigkeit für das höhere Fahrzeuggewicht.</p>
                  </div>
                </div>
                <div className="flex items-start gap-4 bg-white p-4 rounded-lg border border-gray-200">
                  <div className="bg-blue-100 p-2 rounded-lg">
                    <span className="text-xl font-bold text-blue-600">2</span>
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-800">Niedriger Rollwiderstand</h4>
                    <p className="text-gray-600 text-sm">Effizienzklasse A spart Energie und erhöht die Reichweite um bis zu 7%.</p>
                  </div>
                </div>
                <div className="flex items-start gap-4 bg-white p-4 rounded-lg border border-gray-200">
                  <div className="bg-blue-100 p-2 rounded-lg">
                    <span className="text-xl font-bold text-blue-600">3</span>
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-800">Geräuschoptimiert</h4>
                    <p className="text-gray-600 text-sm">Bei leisen E-Autos fallen Abrollgeräusche stärker auf – spezielle E-Auto-Reifen sind leiser.</p>
                  </div>
                </div>
                <div className="flex items-start gap-4 bg-white p-4 rounded-lg border border-gray-200">
                  <div className="bg-blue-100 p-2 rounded-lg">
                    <span className="text-xl font-bold text-blue-600">4</span>
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-800">Reifendruck regelmäßig prüfen</h4>
                    <p className="text-gray-600 text-sm">E-Autos benötigen oft etwas höheren Druck (35-45 PSI). Das mindert Verschleiß und erhöht Reichweite.</p>
                  </div>
                </div>
              </div>

              <p className="text-gray-700 leading-relaxed">
                <strong>Praxis-Erfahrung:</strong> Viele E-Auto-Fahrer berichten, dass bei 
                vorausschauender Fahrweise die Reifen ähnlich lange halten wie bei Verbrennern. 
                Wer allerdings die volle Beschleunigung häufig nutzt, muss mit deutlich 
                schnellerem Verschleiß rechnen.
              </p>
            </section>

            {/* Section 6: Wartungskosten */}
            <section id="wartungskosten" className="mb-12 scroll-mt-24">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                6. Wartungskosten im direkten Vergleich
              </h2>

              <p className="text-gray-700 mb-6 leading-relaxed">
                Die oft zitierten "35-40% Ersparnis" bei der E-Auto-Wartung stimmen nur bedingt. 
                Aktuelle Studien zeigen: Der Kostenvorteil liegt real bei etwa <strong>15-20%</strong>, 
                da höhere Reifenkosten und teurere Hochvolt-Arbeiten den Vorteil schmälern.
              </p>

              <div className="overflow-x-auto mb-6">
                <table className="w-full border-collapse bg-white rounded-lg overflow-hidden shadow-sm">
                  <thead className="bg-gray-100">
                    <tr>
                      <th className="p-4 text-left font-bold text-gray-800 border-b">Kostenart</th>
                      <th className="p-4 text-center font-bold text-gray-800 border-b">Elektroauto</th>
                      <th className="p-4 text-center font-bold text-gray-800 border-b">Verbrenner</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b">
                      <td className="p-4 text-gray-700">Jährliche Wartung</td>
                      <td className="p-4 text-center font-medium text-emerald-600">150-400€</td>
                      <td className="p-4 text-center font-medium text-gray-600">300-600€</td>
                    </tr>
                    <tr className="border-b bg-gray-50">
                      <td className="p-4 text-gray-700">Kleine Inspektion</td>
                      <td className="p-4 text-center font-medium text-emerald-600">80-150€</td>
                      <td className="p-4 text-center font-medium text-gray-600">150-300€</td>
                    </tr>
                    <tr className="border-b">
                      <td className="p-4 text-gray-700">Große Inspektion</td>
                      <td className="p-4 text-center font-medium text-emerald-600">200-300€</td>
                      <td className="p-4 text-center font-medium text-gray-600">400-800€</td>
                    </tr>
                    <tr className="border-b bg-gray-50">
                      <td className="p-4 text-gray-700">Bremsbeläge (Wechsel)</td>
                      <td className="p-4 text-center font-medium text-emerald-600">Selten nötig</td>
                      <td className="p-4 text-center font-medium text-gray-600">150-300€</td>
                    </tr>
                    <tr className="border-b">
                      <td className="p-4 text-gray-700">Reifen (4 Stück)</td>
                      <td className="p-4 text-center font-medium text-yellow-600">400-800€</td>
                      <td className="p-4 text-center font-medium text-gray-600">300-600€</td>
                    </tr>
                    <tr className="bg-emerald-50">
                      <td className="p-4 font-bold text-gray-800">Wartung über 8 Jahre*</td>
                      <td className="p-4 text-center font-bold text-emerald-600">ca. 3.300€</td>
                      <td className="p-4 text-center font-bold text-gray-600">ca. 7.800€</td>
                    </tr>
                  </tbody>
                </table>
                <p className="text-xs text-gray-500 mt-2">*Fraunhofer-Studie: VW ID.3 vs. VW Golf über 8 Jahre bei 15.000 km/Jahr</p>
              </div>

              <div className="bg-emerald-50 border-l-4 border-emerald-500 p-6">
                <div className="flex items-start">
                  <TrendingDown className="w-6 h-6 text-emerald-600 mr-3 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-bold text-lg text-gray-900 mb-2">Fazit zum Kostenvergleich</h3>
                    <p className="text-gray-700">Über die gesamte Haltedauer sparen E-Auto-Fahrer bei der 
                    Wartung etwa <strong>125 Euro pro Jahr</strong> – das entspricht rund 15% weniger 
                    als bei vergleichbaren Verbrennern. Die größten Einsparungen ergeben sich durch 
                    wegfallende Ölwechsel und deutlich längere Bremsbelag-Lebensdauer.</p>
                  </div>
                </div>
              </div>
            </section>

            {/* Section 7: Intervalle */}
            <section id="intervalle" className="mb-12 scroll-mt-24">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                7. Wartungsintervalle nach Herstellern
              </h2>

              <p className="text-gray-700 mb-6 leading-relaxed">
                Die Wartungsintervalle variieren je nach Hersteller erheblich. Während einige 
                Marken feste Jahresintervalle vorschreiben, setzen andere auf flexible, 
                bedarfsorientierte Systeme. Hier ein Überblick der wichtigsten Hersteller:
              </p>

              <div className="space-y-4 mb-6">
                <div className="bg-white p-5 rounded-lg border border-gray-200 shadow-sm">
                  <div className="flex justify-between items-start">
                    <h4 className="font-bold text-gray-800">VW ID-Familie</h4>
                    <span className="text-sm bg-blue-100 text-blue-700 px-2 py-1 rounded">2 Jahre</span>
                  </div>
                  <p className="text-gray-600 text-sm mt-2">Eine Inspektion alle 2 Jahre (keine km-Begrenzung), inkl. Bremsflüssigkeit und Innenraumfilter. Unterscheidung in große/kleine Inspektion entfällt.</p>
                </div>
                
                <div className="bg-white p-5 rounded-lg border border-gray-200 shadow-sm">
                  <div className="flex justify-between items-start">
                    <h4 className="font-bold text-gray-800">Tesla</h4>
                    <span className="text-sm bg-emerald-100 text-emerald-700 px-2 py-1 rounded">Empfohlen: 2 Jahre</span>
                  </div>
                  <p className="text-gray-600 text-sm mt-2">Keine vorgeschriebenen Intervalle. Empfehlung: alle 2 Jahre Inspektion. Viele Updates erfolgen "over the air" automatisch. Kosten: ca. 150-250€.</p>
                </div>

                <div className="bg-white p-5 rounded-lg border border-gray-200 shadow-sm">
                  <div className="flex justify-between items-start">
                    <h4 className="font-bold text-gray-800">BMW (iX, i4, i5 etc.)</h4>
                    <span className="text-sm bg-purple-100 text-purple-700 px-2 py-1 rounded">Bedarfsorientiert</span>
                  </div>
                  <p className="text-gray-600 text-sm mt-2">Flexible Wartungsintervalle je nach Fahrprofil. Das Fahrzeug zeigt den Service-Bedarf automatisch an. Condition Based Service (CBS).</p>
                </div>

                <div className="bg-white p-5 rounded-lg border border-gray-200 shadow-sm">
                  <div className="flex justify-between items-start">
                    <h4 className="font-bold text-gray-800">Hyundai / Kia</h4>
                    <span className="text-sm bg-yellow-100 text-yellow-700 px-2 py-1 rounded">1 Jahr / 15.000 km</span>
                  </div>
                  <p className="text-gray-600 text-sm mt-2">Jährliche Inspektion oder alle 15.000 km. Wichtig für Garantieerhalt der langen 7-Jahres-Garantie!</p>
                </div>

                <div className="bg-white p-5 rounded-lg border border-gray-200 shadow-sm">
                  <div className="flex justify-between items-start">
                    <h4 className="font-bold text-gray-800">Mercedes EQ-Modelle</h4>
                    <span className="text-sm bg-gray-100 text-gray-700 px-2 py-1 rounded">Flexibel</span>
                  </div>
                  <p className="text-gray-600 text-sm mt-2">Service-Intervall-Anzeige im Fahrzeug. Ferndiagnosen und Updates "over the air" möglich. Durchschnittlich alle 25.000 km oder 2 Jahre.</p>
                </div>
              </div>

              <div className="bg-blue-50 border-l-4 border-blue-500 p-6">
                <div className="flex items-start">
                  <Clock className="w-6 h-6 text-blue-600 mr-3 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-bold text-lg text-gray-900 mb-2">Wichtig: Hauptuntersuchung (HU/TÜV)</h3>
                    <p className="text-gray-700">Die gesetzliche HU alle 2 Jahre (beim Neuwagen erstmals nach 3 Jahren) 
                    bleibt auch bei E-Autos Pflicht. Die Abgasuntersuchung (AU) entfällt komplett – 
                    das spart bei jedem TÜV-Termin etwa 40 Euro.</p>
                  </div>
                </div>
              </div>
            </section>

            {/* Section 8: Werkstatt */}
            <section id="werkstatt" className="mb-12 scroll-mt-24">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                8. Werkstattwahl: Worauf Sie achten sollten
              </h2>

              <div className="bg-yellow-50 border-l-4 border-yellow-500 p-6 mb-6">
                <div className="flex items-start">
                  <AlertCircle className="w-6 h-6 text-yellow-600 mr-3 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-bold text-lg text-gray-900 mb-2">Nicht jede Werkstatt darf an E-Autos arbeiten!</h3>
                    <p className="text-gray-700">Für Arbeiten am Hochvoltsystem (alles ab 60V Gleichspannung) sind 
                    spezielle Qualifikationen nötig. Nur geschulte Fachkräfte mit entsprechender Zertifizierung 
                    dürfen diese durchführen.</p>
                  </div>
                </div>
              </div>

              <p className="text-gray-700 mb-6 leading-relaxed">
                Die gute Nachricht: Für die normale Wartung wie Bremsflüssigkeitswechsel, Reifenwechsel 
                oder Innenraumfilter können Sie auch freie Werkstätten nutzen – sofern diese nach 
                Herstellervorgaben arbeiten und Original-Ersatzteile verwenden.
              </p>

              <h3 className="text-xl font-bold text-gray-800 mb-4">Ihre Optionen:</h3>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div className="bg-white p-6 rounded-lg border border-gray-200 shadow-sm">
                  <h4 className="font-bold text-gray-800 mb-3">🏢 Vertragswerkstatt</h4>
                  <ul className="space-y-2 text-sm text-gray-600">
                    <li>✓ Garantieerhalt sichergestellt</li>
                    <li>✓ Geschultes HV-Personal</li>
                    <li>✓ Original-Ersatzteile</li>
                    <li>✓ Software-Updates</li>
                    <li>✗ Meist höhere Preise</li>
                  </ul>
                </div>
                <div className="bg-white p-6 rounded-lg border border-gray-200 shadow-sm">
                  <h4 className="font-bold text-gray-800 mb-3">🔧 Freie Werkstatt</h4>
                  <ul className="space-y-2 text-sm text-gray-600">
                    <li>✓ Oft 30% günstiger</li>
                    <li>✓ Kein Garantieverlust bei korrekter Arbeit</li>
                    <li>⚠️ HV-Qualifikation prüfen!</li>
                    <li>⚠️ Arbeit nach Herstellervorgabe?</li>
                    <li>⚠️ Teile in OE-Qualität?</li>
                  </ul>
                </div>
              </div>

              <p className="text-gray-700 leading-relaxed">
                <strong>Tipp:</strong> Fragen Sie bei freien Werkstätten gezielt nach der 
                Hochvolt-Qualifikation der Mitarbeiter. In Deutschland gibt es mittlerweile über 
                500 Werkstätten, die sich auf E-Fahrzeuge spezialisiert haben. Auch große Ketten 
                wie ATU bieten inzwischen E-Auto-Service an.
              </p>
            </section>

            {/* Section 9: Tipps */}
            <section id="tipps" className="mb-12 scroll-mt-24">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                9. 5 Tipps zur Kostenoptimierung
              </h2>

              <div className="space-y-4">
                <div className="bg-gradient-to-r from-emerald-50 to-teal-50 p-6 rounded-xl border border-emerald-200">
                  <div className="flex items-start gap-4">
                    <div className="bg-emerald-600 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold flex-shrink-0">1</div>
                    <div>
                      <h3 className="font-bold text-gray-800 mb-2">Wartungsvertrag prüfen</h3>
                      <p className="text-gray-600 text-sm">Viele Hersteller bieten Service-Pakete mit monatlicher Rate an. 
                      Bei VW "Wartung & Inspektion" oder BMW "Service Inclusive" können Sie Kosten planbarer machen 
                      und oft sparen.</p>
                    </div>
                  </div>
                </div>

                <div className="bg-gradient-to-r from-blue-50 to-indigo-50 p-6 rounded-xl border border-blue-200">
                  <div className="flex items-start gap-4">
                    <div className="bg-blue-600 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold flex-shrink-0">2</div>
                    <div>
                      <h3 className="font-bold text-gray-800 mb-2">Freie Werkstatt für Standardarbeiten</h3>
                      <p className="text-gray-600 text-sm">Für Reifenwechsel, Scheibenwischer oder Innenraumfilter 
                      brauchen Sie keine Vertragswerkstatt. Freie Betriebe sind hier oft 30% günstiger – 
                      ohne Garantieverlust!</p>
                    </div>
                  </div>
                </div>

                <div className="bg-gradient-to-r from-purple-50 to-pink-50 p-6 rounded-xl border border-purple-200">
                  <div className="flex items-start gap-4">
                    <div className="bg-purple-600 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold flex-shrink-0">3</div>
                    <div>
                      <h3 className="font-bold text-gray-800 mb-2">Rekuperation richtig nutzen</h3>
                      <p className="text-gray-600 text-sm">Vorausschauendes Fahren mit starker Rekuperation 
                      spart nicht nur Energie, sondern schont auch die Bremsen erheblich. One-Pedal-Driving 
                      ist hier ideal!</p>
                    </div>
                  </div>
                </div>

                <div className="bg-gradient-to-r from-yellow-50 to-orange-50 p-6 rounded-xl border border-yellow-200">
                  <div className="flex items-start gap-4">
                    <div className="bg-yellow-600 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold flex-shrink-0">4</div>
                    <div>
                      <h3 className="font-bold text-gray-800 mb-2">Batterie schonend laden</h3>
                      <p className="text-gray-600 text-sm">Laden Sie zu Hause mit der Wallbox statt ständig am 
                      Schnelllader. Das schont die Batterie und verhindert teure Kapazitätsverluste außerhalb 
                      der Garantie.</p>
                    </div>
                  </div>
                </div>

                <div className="bg-gradient-to-r from-teal-50 to-cyan-50 p-6 rounded-xl border border-teal-200">
                  <div className="flex items-start gap-4">
                    <div className="bg-teal-600 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold flex-shrink-0">5</div>
                    <div>
                      <h3 className="font-bold text-gray-800 mb-2">Kleine Arbeiten selbst erledigen</h3>
                      <p className="text-gray-600 text-sm">Scheibenwischerflüssigkeit nachfüllen, Reifendruck 
                      kontrollieren, Luftfilter wechseln – diese Dinge können Sie problemlos selbst machen 
                      und so Werkstattkosten sparen.</p>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* Fazit */}
            <section id="fazit" className="mb-8 md:mb-12">
              <div className="bg-gradient-to-r from-blue-600 to-green-600 rounded-xl p-6 md:p-8 text-white">
                <h2 className="text-2xl md:text-3xl font-bold mb-4">
                  Fazit: E-Auto Wartung ist einfacher – aber nicht kostenlos
                </h2>
                <p className="text-base md:text-lg leading-relaxed mb-4">
                  Die Wartung eines Elektroautos ist tatsächlich <strong>weniger aufwendig und günstiger</strong> als 
                  bei einem Verbrenner. Statt 35-40% liegt die reale Ersparnis aber eher bei <strong>15-20%</strong>, 
                  da höhere Reifen- und Hochvolt-Arbeitskosten den Vorteil schmälern.
                </p>
                <p className="text-base md:text-lg leading-relaxed mb-6">
                  Der Wegfall von Ölwechsel, Zündkerzen und Kupplung spart Zeit und Geld. Dafür erfordern 
                  Hochvoltkomponenten, Batteriepflege und die Besonderheiten der Rekuperation neue 
                  Aufmerksamkeit. Mit dem richtigen Wissen und vorausschauender Fahrweise profitieren 
                  Sie jedoch langfristig von deutlich niedrigeren Gesamtbetriebskosten.
                </p>
                <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
                  <p className="text-lg font-semibold">
                    💡 <strong>Unser Tipp:</strong> Nutzen Sie unseren TCO-Rechner, um die Gesamtkosten 
                    Ihres E-Autos inklusive Wartung mit einem Verbrenner zu vergleichen – 
                    oft ist der Stromer auf lange Sicht die günstigere Wahl!
                  </p>
                </div>
              </div>
            </section>

            {/* CTA Box */}
            <div className="bg-gradient-to-r from-purple-600 to-blue-600 rounded-2xl p-8 text-center text-white mb-8">
              <h3 className="text-2xl font-bold mb-4">
                📊 Berechnen Sie Ihre E-Auto-Kosten
              </h3>
              <p className="text-lg mb-6 max-w-2xl mx-auto">
                Finden Sie heraus, wie viel Sie mit einem Elektroauto wirklich sparen – 
                inklusive Wartung, Strom und Versicherung.
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
            <li>• ADAC: Vollkostenberechnung Elektroauto vs. Verbrenner (Oktober 2025)</li>
            <li>• Fraunhofer-Institut: Langzeitstudie Wartungskosten E-Fahrzeuge (2025)</li>
            <li>• TÜV-Report 2025: Mängelstatistik Elektrofahrzeuge</li>
            <li>• Geotab: Batterie-Lebensdauer-Studie mit 10.000 E-Fahrzeugen (2025)</li>
            <li>• Volkswagen, BMW, Tesla, Hyundai: Offizielle Service-Informationen</li>
          </ul>
          <p className="mt-4 leading-relaxed">
            <strong>Haftungsausschluss:</strong> Alle Angaben ohne Gewähr. Wartungskosten und 
            -intervalle können je nach Modell, Fahrweise und Werkstatt variieren. Die genannten 
            Preise sind Richtwerte für Deutschland (Stand: Dezember 2025). Für verbindliche 
            Informationen wenden Sie sich an Ihren Hersteller oder Ihre Vertragswerkstatt.
          </p>
        </div>

        {/* Related Articles */}
        <div className="mt-8 bg-blue-50 rounded-xl p-6">
          <h3 className="text-lg font-bold text-gray-800 mb-4">
            📚 Weitere hilfreiche Artikel:
          </h3>
          <div className="space-y-2">
            <a href="/ratgeber/strompreise-2025" className="block text-blue-600 hover:underline text-sm md:text-base">
              → Strompreise 2025: So laden Sie Ihr E-Auto günstig
            </a>
            <a href="/ratgeber/wallbox-kosten-installation" className="block text-blue-600 hover:underline text-sm md:text-base">
              → Wallbox Kosten & Installation: Der komplette Ratgeber
            </a>
            <a href="/rechner/kostenrechner" className="block text-blue-600 hover:underline text-sm md:text-base">
              → Kostenrechner: Elektroauto und Verbrenner im Kostenvergleich
            </a>
            <a href="/ratgeber/elektroauto-reichweite-winter-test" className="block text-blue-600 hover:underline text-sm md:text-base">
              → E-Auto im Winter: So maximieren Sie Ihre Reichweite
            </a>
            <a href="/rechner/gebrauchtwagenbatterierechner" className="block text-blue-600 hover:underline text-sm md:text-base">
              → Batterie-Gesundheits-Check für Gebrauchtwagen
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
