import React, { useEffect } from 'react';
import SEO from '../components/SEO';
import Header from '../components/Header';
import { 
  ArrowLeft,
  Car,
  CheckCircle,
  AlertCircle,
  Battery,
  Zap,
  Clock,
  FileText,
  Navigation,
  Gauge,
  ThermometerSun,
  Volume2,
  Smartphone,
  CreditCard,
  MapPin,
  Download,
  ArrowRight,
  Settings,
  ShieldCheck,
  Users
} from 'lucide-react';

export default function ElektroautoProbefahrtChecklistePage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-white">
      <SEO 
        title="Elektroauto Probefahrt Checkliste 2026: Worauf achten? | e-Autowelt"
        description="Umfassende Checkliste für die E-Auto Probefahrt: Rekuperation, One-Pedal-Driving, Reichweite & Laden testen. Plus: Spezial-Tipps für gebrauchte Elektroautos."
        keywords="elektroauto probefahrt, e-auto probefahrt checkliste, elektroauto testen, one-pedal-driving, rekuperation testen, e-auto kaufen probefahrt"
        canonicalPath="/ratgeber/elektroauto-probefahrt-checkliste"
        ogType="article"
        publishedDate="2026-01-13T12:00:00Z"
        modifiedDate="2026-01-13T12:00:00Z"
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
          <div className="relative h-64 md:h-96 bg-gradient-to-br from-blue-600 to-indigo-700 overflow-hidden">
           <img 
                    src="/images/ratgeber/probefahrt-hero.webp"
                    alt="Elektroauto Probefahrt Checkliste 2026: Worauf achten? | e-Autowelt"
                    className="w-full h-full object-cover group-hover:scale-80 transition-transform duration-300"
                    loading="lazy"
                    decoding="async"
                  />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
            <div className="absolute bottom-0 left-0 right-0 p-6 md:p-10 text-white">
              <div className="flex flex-wrap items-center gap-3 mb-3">
                <div className="bg-white/30 backdrop-blur-md p-2 rounded-lg shadow-lg">
                  <Car className="w-6 h-6 md:w-8 md:h-8" />
                </div>
                <span className="text-xs md:text-sm bg-white/30 backdrop-blur-md px-3 py-1 rounded-full font-semibold shadow-lg">
                  📖 10 Min. Lesezeit
                </span>
                <span className="text-xs md:text-sm bg-white/30 backdrop-blur-md px-3 py-1 rounded-full font-semibold shadow-lg">
                  Aktualisiert am 13. Januar 2026
                </span>
              </div>
              <h1 className="text-2xl md:text-4xl lg:text-5xl font-bold leading-tight">
                Elektroauto Probefahrt: Die ultimative Checkliste
              </h1>
            </div>
          </div>

          <div className="p-6 md:p-10">
            {/* Intro */}
            <div className="mb-8 md:mb-12">
              <p className="text-lg md:text-xl text-gray-600 leading-relaxed mb-4">
                Ein Elektroauto fährt sich <strong>grundlegend anders</strong> als ein Verbrenner. Rekuperation, One-Pedal-Driving, lautloser Antrieb und die beeindruckende Beschleunigung – das alles will bei einer Probefahrt getestet werden. Mit unserer Checkliste sind Sie optimal vorbereitet und vergessen keinen wichtigen Punkt.
              </p>
              <div className="bg-blue-50 border-2 border-blue-200 rounded-xl p-6">
                <p className="text-base md:text-lg text-gray-700 leading-relaxed">
                  <strong className="text-blue-700">⚡ Schnell-Überblick:</strong> Bringen Sie <strong>Führerschein und Ausweis</strong> mit, planen Sie mindestens <strong>1-2 Stunden</strong> ein und fahren Sie verschiedene Streckentypen (Stadt, Landstraße, Autobahn). Testen Sie unbedingt die <strong>Rekuperation</strong>, das <strong>Navigationssystem mit Ladestationen</strong> und – wenn möglich – einen echten <strong>Ladevorgang</strong>. Bei Gebrauchtwagen: Achten Sie auf den <strong>Batteriezustand (SOH)</strong>!
                </p>
              </div>
            </div>

            {/* Inhaltsverzeichnis */}
            <nav className="bg-gray-50 rounded-xl p-6 mb-8 md:mb-12">
              <h2 className="text-xl md:text-2xl font-bold text-gray-800 mb-4">
                Inhaltsverzeichnis
              </h2>
              <ol className="space-y-2 text-sm md:text-base">
                <li><a href="#vorbereitung" className="text-blue-600 hover:underline">1. Vor der Probefahrt: Was Sie mitbringen sollten</a></li>
                <li><a href="#einstieg" className="text-blue-600 hover:underline">2. Beim Einstieg: Sitzposition, Bedienung & Komfort</a></li>
                <li><a href="#fahren" className="text-blue-600 hover:underline">3. Während der Fahrt: Die E-Auto-Besonderheiten</a></li>
                <li><a href="#rekuperation" className="text-blue-600 hover:underline">4. Rekuperation & One-Pedal-Driving verstehen</a></li>
                <li><a href="#reichweite" className="text-blue-600 hover:underline">5. Reichweite & Verbrauch realistisch einschätzen</a></li>
                <li><a href="#laden" className="text-blue-600 hover:underline">6. Laden testen: Navigation & Ladevorgang</a></li>
                <li><a href="#gebraucht" className="text-blue-600 hover:underline">7. Spezial: Probefahrt mit gebrauchtem E-Auto</a></li>
                <li><a href="#checkliste" className="text-blue-600 hover:underline">8. Die komplette Checkliste zum Abhaken</a></li>
                <li><a href="#fazit" className="text-blue-600 hover:underline">9. Fazit</a></li>
              </ol>
            </nav>

            {/* Section 1: Vorbereitung */}
            <section id="vorbereitung" className="mb-12 scroll-mt-24">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                1. Vor der Probefahrt: Was Sie mitbringen sollten
              </h2>

              <div className="bg-emerald-50 border-l-4 border-emerald-500 p-6 mb-6">
                <div className="flex items-start">
                  <FileText className="w-6 h-6 text-emerald-600 mr-3 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-bold text-lg text-gray-900 mb-2">Pflicht-Dokumente</h3>
                    <p className="text-gray-700">Ohne gültigen <strong>Führerschein</strong> und <strong>Personalausweis</strong> keine Probefahrt! Manche Händler verlangen auch eine Kopie Ihrer Dokumente.</p>
                  </div>
                </div>
              </div>

              <p className="text-gray-700 mb-4 leading-relaxed">
                Eine gute Vorbereitung ist das A und O für eine erfolgreiche Probefahrt. Überlegen Sie sich vorher, was Ihnen bei Ihrem neuen E-Auto wichtig ist: Brauchen Sie viel Stauraum? Fahren Sie oft lange Strecken? Haben Sie Kinder oder Haustiere?
              </p>

              <div className="bg-gray-100 rounded-xl p-6 mb-6">
                <h3 className="font-bold text-lg text-gray-900 mb-4">Das sollten Sie zur Probefahrt mitbringen:</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-emerald-600 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700"><strong>Führerschein</strong> (Pflicht!)</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-emerald-600 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700"><strong>Personalausweis</strong> oder Reisepass</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-emerald-600 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700"><strong>Begleitperson</strong> (4 Augen sehen mehr)</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-emerald-600 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700"><strong>Notizen</strong> mit Ihren Fragen</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-emerald-600 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700"><strong>Kindersitz</strong> (falls relevant)</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-emerald-600 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700"><strong>Smartphone</strong> für App-Test</span>
                  </div>
                </div>
              </div>

              <div className="bg-yellow-50 border-l-4 border-yellow-500 p-6 mb-6">
                <div className="flex items-start">
                  <AlertCircle className="w-6 h-6 text-yellow-600 mr-3 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-bold text-lg text-gray-900 mb-2">Wichtig: Zeit einplanen!</h3>
                    <p className="text-gray-700">Planen Sie mindestens <strong>1-2 Stunden</strong> für die Probefahrt ein. Wenn der Händler Sie nur 10 Minuten fahren lässt, sollten Sie den Kauf überdenken. Fragen Sie nach einer <strong>24-Stunden-Probefahrt</strong> – viele Hersteller bieten das inzwischen an!</p>
                  </div>
                </div>
              </div>

              <p className="text-gray-700 mb-4 leading-relaxed">
                <strong>Vor der Probefahrt klären:</strong> Fragen Sie den Händler nach der <strong>Versicherung</strong> und der <strong>Selbstbeteiligung</strong> im Schadensfall. Bei Vorführwagen ist meist eine Vollkasko vorhanden, aber die Selbstbeteiligung kann mehrere hundert Euro betragen. Lassen Sie sich eine <strong>schriftliche Vereinbarung</strong> geben.
              </p>
            </section>

            {/* Section 2: Einstieg */}
            <section id="einstieg" className="mb-12 scroll-mt-24">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                2. Beim Einstieg: Sitzposition, Bedienung & Komfort
              </h2>

              <p className="text-gray-700 mb-4 leading-relaxed">
                Bevor Sie losfahren, nehmen Sie sich Zeit, das Fahrzeug kennenzulernen. Lassen Sie sich vom Verkäufer die wichtigsten Funktionen erklären – besonders die E-Auto-spezifischen Features.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div className="bg-white p-6 rounded-lg border-2 border-blue-500 shadow-sm">
                  <h4 className="font-bold text-gray-900 mb-3 flex items-center gap-2">
                    <Users className="w-5 h-5 text-blue-600" />
                    Sitzposition & Ergonomie
                  </h4>
                  <ul className="text-sm text-gray-600 space-y-2">
                    <li>• Sitz, Lenkrad und Spiegel einstellen</li>
                    <li>• Beinfreiheit vorne und hinten prüfen</li>
                    <li>• Übersichtlichkeit/Sicht nach außen</li>
                    <li>• Ein- und Ausstieg (auch hinten!)</li>
                    <li>• Kopffreiheit für große Personen</li>
                  </ul>
                </div>
                <div className="bg-white p-6 rounded-lg border-2 border-blue-500 shadow-sm">
                  <h4 className="font-bold text-gray-900 mb-3 flex items-center gap-2">
                    <Settings className="w-5 h-5 text-blue-600" />
                    Bedienung & Technik
                  </h4>
                  <ul className="text-sm text-gray-600 space-y-2">
                    <li>• Touchscreen-Bedienung intuitiv?</li>
                    <li>• Physische Tasten für Klimaanlage?</li>
                    <li>• Smartphone-Anbindung (Apple CarPlay/Android Auto)</li>
                    <li>• Sprachsteuerung testen</li>
                    <li>• Verarbeitungsqualität der Materialien</li>
                  </ul>
                </div>
              </div>

              <div className="bg-blue-50 border-l-4 border-blue-500 p-6 mb-6">
                <div className="flex items-start">
                  <Smartphone className="w-6 h-6 text-blue-600 mr-3 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-bold text-lg text-gray-900 mb-2">App-Integration testen</h3>
                    <p className="text-gray-700">Verbinden Sie Ihr Smartphone mit dem Fahrzeug! Funktionieren <strong>Apple CarPlay</strong> oder <strong>Android Auto</strong>? Viele E-Autos haben auch eigene Apps – fragen Sie den Händler, was damit möglich ist (Vorklimatisierung, Ladestand prüfen, etc.).</p>
                  </div>
                </div>
              </div>

              <p className="text-gray-700 mb-4 leading-relaxed">
                <strong>Kofferraum checken:</strong> E-Autos haben oft einen zusätzlichen <strong>Frunk</strong> (Front-Kofferraum) unter der Motorhaube. Prüfen Sie, ob der Stauraum für Ihren Alltag ausreicht – Kinderwagen, Einkäufe, Urlaubsgepäck. Achten Sie auch auf das <strong>Ladekabelfach</strong>: Ist das Typ-2-Kabel sicher verstaut?
              </p>
            </section>

            {/* Section 3: Während der Fahrt */}
            <section id="fahren" className="mb-12 scroll-mt-24">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                3. Während der Fahrt: Die E-Auto-Besonderheiten
              </h2>

              <div className="bg-red-50 border-l-4 border-red-500 p-6 mb-6">
                <div className="flex items-start">
                  <AlertCircle className="w-6 h-6 text-red-600 mr-3 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-bold text-lg text-gray-900 mb-2">Vorsicht bei der ersten Beschleunigung!</h3>
                    <p className="text-gray-700">E-Autos haben eine <strong>enorme Beschleunigung</strong>, die sofort einsetzt – kein Turboloch, kein Hochdrehen. Es kam schon vor, dass Testfahrer direkt gegen die nächste Wand gefahren sind! Gewöhnen Sie sich langsam an das Gaspedal.</p>
                  </div>
                </div>
              </div>

              <p className="text-gray-700 mb-4 leading-relaxed">
                Das Fahrgefühl eines Elektroautos ist völlig anders als bei einem Verbrenner. Der Motor ist fast <strong>lautlos</strong>, die Kraft steht <strong>sofort</strong> zur Verfügung, und das Fahrzeug gleitet geschmeidig dahin. Testen Sie verschiedene Fahrsituationen:
              </p>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
                <div className="bg-white p-5 rounded-lg border border-gray-200">
                  <div className="text-2xl mb-2">🏙️</div>
                  <h4 className="font-bold text-gray-900 mb-2">Stadtverkehr</h4>
                  <p className="text-sm text-gray-600">Ampelstarts, Einparken, Stop-and-Go. Hier zeigt sich One-Pedal-Driving von seiner besten Seite.</p>
                </div>
                <div className="bg-white p-5 rounded-lg border border-gray-200">
                  <div className="text-2xl mb-2">🛣️</div>
                  <h4 className="font-bold text-gray-900 mb-2">Landstraße</h4>
                  <p className="text-sm text-gray-600">Überholvorgänge, Kurvenverhalten, Federungskomfort. Testen Sie die Beschleunigung!</p>
                </div>
                <div className="bg-white p-5 rounded-lg border border-gray-200">
                  <div className="text-2xl mb-2">🚗💨</div>
                  <h4 className="font-bold text-gray-900 mb-2">Autobahn</h4>
                  <p className="text-sm text-gray-600">Windgeräusche, Stabilität bei Tempo 130+, Verbrauch bei hohen Geschwindigkeiten.</p>
                </div>
              </div>

              <div className="bg-gray-100 rounded-xl p-6 mb-6">
                <h3 className="font-bold text-lg text-gray-900 mb-4 flex items-center gap-2">
                  <Volume2 className="w-5 h-5 text-gray-600" />
                  Geräuschkulisse beachten
                </h3>
                <p className="text-gray-700 mb-3">
                  Ohne Motorgeräusche werden <strong>andere Geräusche hörbar</strong>, die Sie bei einem Verbrenner nie bemerkt hätten: Abrollgeräusche der Reifen, Windgeräusche, Klimaanlage. Achten Sie darauf, ob diese Geräusche Sie stören würden.
                </p>
                <p className="text-gray-700">
                  <strong>Tipp:</strong> Fahren Sie auch mal ohne Radio, um das Fahrzeug wirklich zu „hören". Knacken, Klappern oder Quietschen können auf Qualitätsprobleme hindeuten.
                </p>
              </div>

              <p className="text-gray-700 mb-4 leading-relaxed">
                <strong>Fahrmodi testen:</strong> Die meisten E-Autos haben verschiedene Fahrmodi (Eco, Normal, Sport). Im <strong>Eco-Modus</strong> ist die Beschleunigung sanfter und die Reichweite höher. Im <strong>Sport-Modus</strong> reagiert das Gaspedal direkter und die volle Leistung steht bereit. Probieren Sie beide aus!
              </p>
            </section>

            {/* Section 4: Rekuperation */}
            <section id="rekuperation" className="mb-12 scroll-mt-24">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                4. Rekuperation & One-Pedal-Driving verstehen
              </h2>

              <div className="bg-emerald-50 border-l-4 border-emerald-500 p-6 mb-6">
                <div className="flex items-start">
                  <Zap className="w-6 h-6 text-emerald-600 mr-3 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-bold text-lg text-gray-900 mb-2">Was ist Rekuperation?</h3>
                    <p className="text-gray-700">Beim Bremsen oder Gaswegnehmen arbeitet der Elektromotor als <strong>Generator</strong> und speist Energie zurück in die Batterie. Das erhöht die Reichweite um <strong>10-30%</strong> und schont die mechanischen Bremsen.</p>
                  </div>
                </div>
              </div>

              <p className="text-gray-700 mb-4 leading-relaxed">
                Die <strong>Rekuperation</strong> ist das Herzstück des elektrischen Fahrens. Je nach Einstellung und Fahrzeug kann die Verzögerung beim Gaswegnehmen so stark sein, dass Sie das Bremspedal im Alltag kaum noch brauchen – das nennt sich <strong>One-Pedal-Driving</strong>.
              </p>

              <div className="bg-white rounded-xl border-2 border-emerald-500 p-6 mb-6">
                <h3 className="font-bold text-lg text-gray-900 mb-4">So funktioniert One-Pedal-Driving:</h3>
                <div className="space-y-4">
                  <div className="flex items-start gap-4">
                    <div className="bg-emerald-100 rounded-full p-2 flex-shrink-0">
                      <span className="text-emerald-700 font-bold">1</span>
                    </div>
                    <div>
                      <p className="text-gray-700"><strong>Gaspedal drücken</strong> = Beschleunigen (wie gewohnt)</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="bg-emerald-100 rounded-full p-2 flex-shrink-0">
                      <span className="text-emerald-700 font-bold">2</span>
                    </div>
                    <div>
                      <p className="text-gray-700"><strong>Gaspedal loslassen</strong> = Auto bremst automatisch durch Rekuperation</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="bg-emerald-100 rounded-full p-2 flex-shrink-0">
                      <span className="text-emerald-700 font-bold">3</span>
                    </div>
                    <div>
                      <p className="text-gray-700"><strong>Komplett losgelassen</strong> = Auto kommt zum Stillstand (bei vielen Modellen)</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div className="bg-white p-6 rounded-lg border border-gray-200">
                  <h4 className="font-bold text-gray-900 mb-3 text-emerald-700">✓ Vorteile</h4>
                  <ul className="text-sm text-gray-600 space-y-2">
                    <li>• Energie zurückgewinnen = mehr Reichweite</li>
                    <li>• Weniger Bremsverschleiß</li>
                    <li>• Entspanntes Fahren im Stadtverkehr</li>
                    <li>• Nach Eingewöhnung sehr komfortabel</li>
                  </ul>
                </div>
                <div className="bg-white p-6 rounded-lg border border-gray-200">
                  <h4 className="font-bold text-gray-900 mb-3 text-yellow-700">⚠ Beachten</h4>
                  <ul className="text-sm text-gray-600 space-y-2">
                    <li>• Gewöhnungsphase nötig</li>
                    <li>• Bremslichter leuchten automatisch bei starker Rekuperation</li>
                    <li>• Nicht für Notbremsungen geeignet</li>
                    <li>• Bei Glätte/Schnee vorsichtig nutzen</li>
                  </ul>
                </div>
              </div>

              <div className="bg-blue-50 border-l-4 border-blue-500 p-6 mb-6">
                <div className="flex items-start">
                  <Settings className="w-6 h-6 text-blue-600 mr-3 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-bold text-lg text-gray-900 mb-2">Rekuperationsstufen testen</h3>
                    <p className="text-gray-700">Die meisten E-Autos bieten <strong>verschiedene Rekuperationsstufen</strong> – von „Segeln" (kein Widerstand) bis „maximale Rekuperation" (starkes Bremsen). Testen Sie alle Stufen! Bei VW-Modellen wählen Sie den <strong>B-Gang</strong>, bei Hyundai/Kia nutzen Sie die <strong>Schaltwippen</strong> am Lenkrad, bei Tesla ist es in den Einstellungen.</p>
                  </div>
                </div>
              </div>

              <p className="text-gray-700 mb-4 leading-relaxed">
                <strong>Wichtig:</strong> Jeder Hersteller implementiert One-Pedal-Driving etwas anders. Manche Autos kommen komplett zum Stillstand, andere rollen langsam weiter. Probieren Sie aus, welches Verhalten Ihnen besser gefällt – das kann ein Kaufkriterium sein!
              </p>
            </section>

            {/* Section 5: Reichweite */}
            <section id="reichweite" className="mb-12 scroll-mt-24">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                5. Reichweite & Verbrauch realistisch einschätzen
              </h2>

              <div className="bg-yellow-50 border-l-4 border-yellow-500 p-6 mb-6">
                <div className="flex items-start">
                  <Gauge className="w-6 h-6 text-yellow-600 mr-3 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-bold text-lg text-gray-900 mb-2">WLTP ≠ Realität</h3>
                    <p className="text-gray-700">Die WLTP-Reichweite ist ein standardisierter Testwert. In der Praxis erreichen Sie meist <strong>15-25% weniger</strong>, besonders auf der Autobahn oder im Winter.</p>
                  </div>
                </div>
              </div>

              <p className="text-gray-700 mb-4 leading-relaxed">
                Die <strong>Reichweite</strong> ist für viele das wichtigste Kriterium beim E-Auto-Kauf. Nutzen Sie die Probefahrt, um ein realistisches Gefühl für den Verbrauch zu bekommen – nicht die Herstellerangaben!
              </p>

              <div className="bg-gray-100 rounded-xl p-6 mb-6">
                <h3 className="font-bold text-lg text-gray-900 mb-4">So testen Sie die Reichweite richtig:</h3>
                <ol className="space-y-3 text-gray-700">
                  <li className="flex items-start gap-3">
                    <span className="bg-blue-600 text-white rounded-full w-6 h-6 flex items-center justify-center flex-shrink-0 text-sm font-bold">1</span>
                    <span>Starten Sie mit <strong>vollem Akku</strong> und notieren Sie die angezeigte Reichweite</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="bg-blue-600 text-white rounded-full w-6 h-6 flex items-center justify-center flex-shrink-0 text-sm font-bold">2</span>
                    <span>Setzen Sie den <strong>Bordcomputer zurück</strong> (Trip-Reset)</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="bg-blue-600 text-white rounded-full w-6 h-6 flex items-center justify-center flex-shrink-0 text-sm font-bold">3</span>
                    <span>Fahren Sie Ihre <strong>typische Alltagsstrecke</strong> (Arbeitsweg, Einkaufen)</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="bg-blue-600 text-white rounded-full w-6 h-6 flex items-center justify-center flex-shrink-0 text-sm font-bold">4</span>
                    <span>Vergleichen Sie <strong>gefahrene km</strong> mit <strong>verbrauchter Reichweite</strong></span>
                  </li>
                </ol>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
                <div className="bg-white p-5 rounded-lg border-2 border-emerald-500">
                  <div className="text-sm text-gray-600 mb-1">Stadtverkehr</div>
                  <div className="text-2xl font-bold text-emerald-600">14-18 kWh</div>
                  <div className="text-xs text-gray-500">/100 km typisch</div>
                </div>
                <div className="bg-white p-5 rounded-lg border-2 border-yellow-500">
                  <div className="text-sm text-gray-600 mb-1">Landstraße</div>
                  <div className="text-2xl font-bold text-yellow-600">16-20 kWh</div>
                  <div className="text-xs text-gray-500">/100 km typisch</div>
                </div>
                <div className="bg-white p-5 rounded-lg border-2 border-red-500">
                  <div className="text-sm text-gray-600 mb-1">Autobahn 130 km/h</div>
                  <div className="text-2xl font-bold text-red-600">20-28 kWh</div>
                  <div className="text-xs text-gray-500">/100 km typisch</div>
                </div>
              </div>

              <p className="text-gray-700 mb-4 leading-relaxed">
                <strong>Faktoren, die die Reichweite beeinflussen:</strong> Außentemperatur (Winter = -20-30%), Geschwindigkeit (über 100 km/h steigt der Verbrauch stark), Heizung/Klimaanlage, Fahrstil und Beladung. Fragen Sie den Verkäufer auch nach der <strong>Vorklimatisierung</strong> – damit können Sie im Winter das Auto vorheizen, während es noch an der Steckdose hängt.
              </p>
            </section>

            {/* Section 6: Laden */}
            <section id="laden" className="mb-12 scroll-mt-24">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                6. Laden testen: Navigation & Ladevorgang
              </h2>

              <div className="bg-emerald-50 border-l-4 border-emerald-500 p-6 mb-6">
                <div className="flex items-start">
                  <Navigation className="w-6 h-6 text-emerald-600 mr-3 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-bold text-lg text-gray-900 mb-2">Navigation mit Ladestationen</h3>
                    <p className="text-gray-700">Das <strong>Navigationssystem</strong> ist bei E-Autos wichtiger als beim Verbrenner! Es sollte Ladestationen anzeigen, die Route mit Ladestopps planen und den aktuellen Ladestand berücksichtigen.</p>
                  </div>
                </div>
              </div>

              <p className="text-gray-700 mb-4 leading-relaxed">
                Das Laden ist das „Tanken" der Elektromobilität – und es funktioniert anders. Nutzen Sie die Probefahrt, um das <strong>Navigationssystem</strong> kennenzulernen und idealerweise einen <strong>echten Ladevorgang</strong> zu testen.
              </p>

              <div className="bg-gray-100 rounded-xl p-6 mb-6">
                <h3 className="font-bold text-lg text-gray-900 mb-4">Das sollten Sie beim Navi testen:</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-emerald-600 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">Zeigt es <strong>Ladestationen</strong> auf der Karte an?</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-emerald-600 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">Werden <strong>Verfügbarkeit und Steckertyp</strong> angezeigt?</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-emerald-600 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">Plant es <strong>Ladestopps</strong> auf langen Strecken ein?</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-emerald-600 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">Zeigt es die <strong>geschätzte Ankunfts-Ladestand</strong> an?</span>
                  </div>
                </div>
              </div>

              <div className="bg-blue-50 border-l-4 border-blue-500 p-6 mb-6">
                <div className="flex items-start">
                  <CreditCard className="w-6 h-6 text-blue-600 mr-3 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-bold text-lg text-gray-900 mb-2">Ladevorgang testen</h3>
                    <p className="text-gray-700">Fragen Sie den Händler nach einer <strong>Ladekarte</strong> und testen Sie das Laden an einer öffentlichen Station! So lernen Sie: Wo ist die Ladebuchse? Wie funktioniert das Kabel? Wie startet man den Ladevorgang? Das erspart Ihnen später Stress.</p>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-xl border border-gray-200 p-6 mb-6">
                <h3 className="font-bold text-lg text-gray-900 mb-4">Ladekabel prüfen:</h3>
                <div className="space-y-3 text-gray-700">
                  <p>• Ist ein <strong>Typ-2-Kabel</strong> (für AC-Laden) im Lieferumfang?</p>
                  <p>• Wo ist das <strong>Ladekabelfach</strong>? Ist es praktisch erreichbar?</p>
                  <p>• Gibt es ein <strong>Notladekabel</strong> für die Haushaltssteckdose? (nur für Notfälle!)</p>
                  <p>• Wo befindet sich die <strong>Ladebuchse</strong>? (vorne, hinten, seitlich – wichtig für die Garage!)</p>
                </div>
              </div>
            </section>

            {/* Section 7: Gebrauchtwagen */}
            <section id="gebraucht" className="mb-12 scroll-mt-24">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                7. Spezial: Probefahrt mit gebrauchtem E-Auto
              </h2>

              <div className="bg-red-50 border-l-4 border-red-500 p-6 mb-6">
                <div className="flex items-start">
                  <Battery className="w-6 h-6 text-red-600 mr-3 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-bold text-lg text-gray-900 mb-2">Batteriezustand ist entscheidend!</h3>
                    <p className="text-gray-700">Die Batterie macht bis zu <strong>50% des Fahrzeugwerts</strong> aus. Bei gebrauchten E-Autos ist der <strong>State of Health (SOH)</strong> – also der Gesundheitszustand der Batterie – das wichtigste Kaufkriterium.</p>
                  </div>
                </div>
              </div>

              <p className="text-gray-700 mb-4 leading-relaxed">
                Bei einem gebrauchten Elektroauto gelten zusätzliche Prüfpunkte. Der Kilometerstand allein sagt wenig aus – eine Batterie mit 100.000 km kann besser sein als eine mit 50.000 km, je nach Nutzung und Ladeverhalten.
              </p>

              <div className="bg-gray-100 rounded-xl p-6 mb-6">
                <h3 className="font-bold text-lg text-gray-900 mb-4">So prüfen Sie den Batteriezustand:</h3>
                <div className="space-y-4">
                  <div className="bg-white p-4 rounded-lg">
                    <h4 className="font-bold text-gray-900 mb-2">Option 1: Professioneller Batterietest</h4>
                    <p className="text-gray-600 text-sm">DEKRA, TÜV oder ADAC bieten Batterietests an (ca. 100-150€). In nur 15 Minuten erhalten Sie ein <strong>zertifiziertes Batteriegutachten</strong> mit dem genauen SOH-Wert. Das ist die sicherste Methode!</p>
                  </div>
                  <div className="bg-white p-4 rounded-lg">
                    <h4 className="font-bold text-gray-900 mb-2">Option 2: Selbsttest bei der Probefahrt</h4>
                    <p className="text-gray-600 text-sm">Starten Sie mit <strong>100% Ladung</strong>, fahren Sie eine längere Strecke und vergleichen Sie die tatsächlich gefahrenen km mit der verbrauchten Reichweite. Große Abweichungen deuten auf Batteriealterung hin.</p>
                  </div>
                  <div className="bg-white p-4 rounded-lg">
                    <h4 className="font-bold text-gray-900 mb-2">Option 3: Aviloo-Testkit</h4>
                    <p className="text-gray-600 text-sm">Ein Diagnosegerät für ca. 99-149€, das Sie selbst an den OBD-Anschluss stecken. Sie fahren den Akku von 100% auf unter 10% leer und erhalten ein detailliertes Batteriezertifikat.</p>
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div className="bg-white p-6 rounded-lg border-2 border-emerald-500 shadow-sm">
                  <div className="text-sm text-gray-600 mb-1">Guter SOH-Wert</div>
                  <div className="text-3xl font-bold text-emerald-600">80-100%</div>
                  <div className="text-xs text-gray-500 mt-1">Batterie in gutem Zustand</div>
                </div>
                <div className="bg-white p-6 rounded-lg border-2 border-yellow-500 shadow-sm">
                  <div className="text-sm text-gray-600 mb-1">Akzeptabler SOH-Wert</div>
                  <div className="text-3xl font-bold text-yellow-600">70-80%</div>
                  <div className="text-xs text-gray-500 mt-1">Preisnachlass verhandeln!</div>
                </div>
              </div>

              <div className="bg-yellow-50 border-l-4 border-yellow-500 p-6 mb-6">
                <div className="flex items-start">
                  <AlertCircle className="w-6 h-6 text-yellow-600 mr-3 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-bold text-lg text-gray-900 mb-2">Weitere Punkte bei Gebrauchtwagen</h3>
                    <ul className="text-gray-700 space-y-1 text-sm">
                      <li>• <strong>Batteriegarantie:</strong> Ist sie noch gültig? Übertragbar?</li>
                      <li>• <strong>Schnellladehistorie:</strong> Viel DC-Schnellladen belastet die Batterie</li>
                      <li>• <strong>Servicehistorie:</strong> Wurden alle Updates durchgeführt?</li>
                      <li>• <strong>Schriftliche Vereinbarung:</strong> Mängel dokumentieren lassen!</li>
                    </ul>
                  </div>
                </div>
              </div>
            </section>

            {/* Section 8: Komplette Checkliste */}
            <section id="checkliste" className="mb-12 scroll-mt-24">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                8. Die komplette Checkliste zum Abhaken
              </h2>

              <p className="text-gray-700 mb-6 leading-relaxed">
                Hier finden Sie alle wichtigen Punkte auf einen Blick. Nutzen Sie diese Checkliste während Ihrer Probefahrt!
              </p>

              <div className="space-y-6">
                {/* Vor der Probefahrt */}
                <div className="bg-blue-50 rounded-xl p-6">
                  <h3 className="font-bold text-lg text-blue-800 mb-4">📋 Vor der Probefahrt</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    <label className="flex items-start gap-3 cursor-pointer">
                      <input type="checkbox" className="mt-1 w-5 h-5 rounded border-gray-300" />
                      <span className="text-gray-700">Führerschein & Ausweis dabei</span>
                    </label>
                    <label className="flex items-start gap-3 cursor-pointer">
                      <input type="checkbox" className="mt-1 w-5 h-5 rounded border-gray-300" />
                      <span className="text-gray-700">Termin mit genug Zeit vereinbart</span>
                    </label>
                    <label className="flex items-start gap-3 cursor-pointer">
                      <input type="checkbox" className="mt-1 w-5 h-5 rounded border-gray-300" />
                      <span className="text-gray-700">Versicherung & Selbstbeteiligung geklärt</span>
                    </label>
                    <label className="flex items-start gap-3 cursor-pointer">
                      <input type="checkbox" className="mt-1 w-5 h-5 rounded border-gray-300" />
                      <span className="text-gray-700">Schriftliche Vereinbarung erhalten</span>
                    </label>
                  </div>
                </div>

                {/* Im Stand */}
                <div className="bg-emerald-50 rounded-xl p-6">
                  <h3 className="font-bold text-lg text-emerald-800 mb-4">🚗 Im Stand prüfen</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    <label className="flex items-start gap-3 cursor-pointer">
                      <input type="checkbox" className="mt-1 w-5 h-5 rounded border-gray-300" />
                      <span className="text-gray-700">Sitzposition & Lenkrad einstellen</span>
                    </label>
                    <label className="flex items-start gap-3 cursor-pointer">
                      <input type="checkbox" className="mt-1 w-5 h-5 rounded border-gray-300" />
                      <span className="text-gray-700">Spiegel einstellen & Übersichtlichkeit prüfen</span>
                    </label>
                    <label className="flex items-start gap-3 cursor-pointer">
                      <input type="checkbox" className="mt-1 w-5 h-5 rounded border-gray-300" />
                      <span className="text-gray-700">Touchscreen & Bedienung testen</span>
                    </label>
                    <label className="flex items-start gap-3 cursor-pointer">
                      <input type="checkbox" className="mt-1 w-5 h-5 rounded border-gray-300" />
                      <span className="text-gray-700">Smartphone verbinden (CarPlay/Android Auto)</span>
                    </label>
                    <label className="flex items-start gap-3 cursor-pointer">
                      <input type="checkbox" className="mt-1 w-5 h-5 rounded border-gray-300" />
                      <span className="text-gray-700">Kofferraum & Frunk checken</span>
                    </label>
                    <label className="flex items-start gap-3 cursor-pointer">
                      <input type="checkbox" className="mt-1 w-5 h-5 rounded border-gray-300" />
                      <span className="text-gray-700">Rückbank & Platz für Mitfahrer</span>
                    </label>
                  </div>
                </div>

                {/* Während der Fahrt */}
                <div className="bg-purple-50 rounded-xl p-6">
                  <h3 className="font-bold text-lg text-purple-800 mb-4">🛣️ Während der Fahrt</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    <label className="flex items-start gap-3 cursor-pointer">
                      <input type="checkbox" className="mt-1 w-5 h-5 rounded border-gray-300" />
                      <span className="text-gray-700">Beschleunigung testen (vorsichtig!)</span>
                    </label>
                    <label className="flex items-start gap-3 cursor-pointer">
                      <input type="checkbox" className="mt-1 w-5 h-5 rounded border-gray-300" />
                      <span className="text-gray-700">Rekuperation / One-Pedal-Driving ausprobieren</span>
                    </label>
                    <label className="flex items-start gap-3 cursor-pointer">
                      <input type="checkbox" className="mt-1 w-5 h-5 rounded border-gray-300" />
                      <span className="text-gray-700">Verschiedene Fahrmodi testen (Eco/Sport)</span>
                    </label>
                    <label className="flex items-start gap-3 cursor-pointer">
                      <input type="checkbox" className="mt-1 w-5 h-5 rounded border-gray-300" />
                      <span className="text-gray-700">Stadt, Landstraße UND Autobahn fahren</span>
                    </label>
                    <label className="flex items-start gap-3 cursor-pointer">
                      <input type="checkbox" className="mt-1 w-5 h-5 rounded border-gray-300" />
                      <span className="text-gray-700">Geräuschkulisse beachten</span>
                    </label>
                    <label className="flex items-start gap-3 cursor-pointer">
                      <input type="checkbox" className="mt-1 w-5 h-5 rounded border-gray-300" />
                      <span className="text-gray-700">Einparken & Rangieren</span>
                    </label>
                  </div>
                </div>

                {/* Reichweite & Laden */}
                <div className="bg-yellow-50 rounded-xl p-6">
                  <h3 className="font-bold text-lg text-yellow-800 mb-4">🔋 Reichweite & Laden</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    <label className="flex items-start gap-3 cursor-pointer">
                      <input type="checkbox" className="mt-1 w-5 h-5 rounded border-gray-300" />
                      <span className="text-gray-700">Verbrauch während der Fahrt beobachten</span>
                    </label>
                    <label className="flex items-start gap-3 cursor-pointer">
                      <input type="checkbox" className="mt-1 w-5 h-5 rounded border-gray-300" />
                      <span className="text-gray-700">Navi mit Ladestationen testen</span>
                    </label>
                    <label className="flex items-start gap-3 cursor-pointer">
                      <input type="checkbox" className="mt-1 w-5 h-5 rounded border-gray-300" />
                      <span className="text-gray-700">Ladekabel & Ladebuchse checken</span>
                    </label>
                    <label className="flex items-start gap-3 cursor-pointer">
                      <input type="checkbox" className="mt-1 w-5 h-5 rounded border-gray-300" />
                      <span className="text-gray-700">Ladevorgang ausprobieren (wenn möglich)</span>
                    </label>
                  </div>
                </div>

                {/* Nur bei Gebrauchtwagen */}
                <div className="bg-red-50 rounded-xl p-6">
                  <h3 className="font-bold text-lg text-red-800 mb-4">🔍 Nur bei Gebrauchtwagen</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    <label className="flex items-start gap-3 cursor-pointer">
                      <input type="checkbox" className="mt-1 w-5 h-5 rounded border-gray-300" />
                      <span className="text-gray-700">Batteriezustand (SOH) erfragen/testen</span>
                    </label>
                    <label className="flex items-start gap-3 cursor-pointer">
                      <input type="checkbox" className="mt-1 w-5 h-5 rounded border-gray-300" />
                      <span className="text-gray-700">Batteriegarantie noch gültig?</span>
                    </label>
                    <label className="flex items-start gap-3 cursor-pointer">
                      <input type="checkbox" className="mt-1 w-5 h-5 rounded border-gray-300" />
                      <span className="text-gray-700">Servicehistorie vorhanden?</span>
                    </label>
                    <label className="flex items-start gap-3 cursor-pointer">
                      <input type="checkbox" className="mt-1 w-5 h-5 rounded border-gray-300" />
                      <span className="text-gray-700">Professionellen Batterietest machen lassen</span>
                    </label>
                  </div>
                </div>
              </div>
            </section>

            {/* Fazit */}
            <section id="fazit" className="mb-8 md:mb-12">
              <div className="bg-gradient-to-r from-blue-600 to-indigo-600 rounded-xl p-6 md:p-8 text-white">
                <h2 className="text-2xl md:text-3xl font-bold mb-4">
                  Fazit: Gut vorbereitet zur E-Auto Probefahrt
                </h2>
                <p className="text-base md:text-lg leading-relaxed mb-4">
                  Eine E-Auto Probefahrt ist anders als bei einem Verbrenner – und das ist gut so! Nutzen Sie die Gelegenheit, die <strong>Rekuperation</strong> und das <strong>One-Pedal-Driving</strong> kennenzulernen, das <strong>Navigationssystem mit Ladestationen</strong> zu testen und ein Gefühl für den <strong>realen Verbrauch</strong> zu bekommen.
                </p>
                <p className="text-base md:text-lg leading-relaxed mb-6">
                  Planen Sie genug Zeit ein, fahren Sie verschiedene Streckentypen und lassen Sie sich nicht drängen. Bei gebrauchten E-Autos ist ein <strong>professioneller Batterietest</strong> unbedingt empfehlenswert – die Batterie macht bis zu 50% des Fahrzeugwerts aus!
                </p>
                <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
                  <p className="text-lg font-semibold">
                    💡 <strong>Unser Tipp:</strong> Fragen Sie nach einer 24-Stunden-Probefahrt! So können Sie das E-Auto in Ihrem echten Alltag testen – inklusive Laden zu Hause oder an der Arbeit.
                  </p>
                </div>
              </div>
            </section>

            {/* CTA Box */}
            <div className="bg-gradient-to-r from-purple-600 to-blue-600 rounded-2xl p-8 text-center text-white mb-8">
              <h3 className="text-2xl font-bold mb-4">
                🔋 Gebrauchtes E-Auto im Blick?
              </h3>
              <p className="text-lg mb-6 max-w-2xl mx-auto">
                Mit unserem Batterie-Rechner können Sie den Zustand und Restwert der Batterie eines gebrauchten E-Autos einschätzen – noch vor der Probefahrt!
              </p>
              <a 
                href="/rechner/gebrauchtwagenbatterierechner"
                className="inline-flex items-center gap-3 bg-white text-blue-600 font-bold px-8 py-4 rounded-full hover:shadow-2xl hover:scale-105 transition-all duration-200"
              >
                <Battery className="w-6 h-6" />
                Zum Batterie-Rechner
              </a>
            </div>
          </div>
        </article>

        {/* Quellen */}
        <div className="mt-8 bg-gray-100 rounded-xl p-6 text-sm text-gray-600">
          <h3 className="font-bold text-gray-800 mb-3">📚 Quellen & Referenzen:</h3>
          <ul className="space-y-1 text-xs">
            <li>• ADAC: Tipps zur Probefahrt beim Autokauf (2025)</li>
            <li>• EnBW: E-Auto bei Probefahrt testen (2024)</li>
            <li>• DEKRA: Batterietest für Elektrofahrzeuge</li>
            <li>• Aviloo: Batteriediagnose für E-Autos</li>
            <li>• Wikipedia: One-Pedal-Driving</li>
          </ul>
          <p className="mt-4 leading-relaxed">
            <strong>Haftungsausschluss:</strong> Diese Checkliste dient als Orientierungshilfe. Die konkrete Vorgehensweise kann je nach Händler, Hersteller und Fahrzeugmodell variieren. Bei Gebrauchtwagenkäufen empfehlen wir zusätzlich eine professionelle Fahrzeugbewertung.
          </p>
        </div>

        {/* Related Articles */}
        <div className="mt-8 bg-blue-50 rounded-xl p-6">
          <h3 className="text-lg font-bold text-gray-800 mb-4">
            📚 Weitere hilfreiche Artikel:
          </h3>
          <div className="space-y-2">
            <a href="/rechner/gebrauchtwagenbatterierechner" className="block text-blue-600 hover:underline text-sm md:text-base">
              → Gebrauchtwagen-Batterierechner: Akkuzustand bewerten
            </a>
            <a href="/rechner/kostenrechner" className="block text-blue-600 hover:underline text-sm md:text-base">
              → TCO-Kostenrechner: E-Auto vs. Verbrenner
            </a>
            <a href="/ratgeber/elektroauto-reichweite-winter" className="block text-blue-600 hover:underline text-sm md:text-base">
              → E-Auto Reichweite im Winter: Tipps & Realwerte
            </a>
            <a href="/ratgeber/wallbox-kosten-installation" className="block text-blue-600 hover:underline text-sm md:text-base">
              → Wallbox kaufen 2026: Kosten, Förderung & Installation
            </a>
            <a href="/ratgeber/strompreise-2025" className="block text-blue-600 hover:underline text-sm md:text-base">
              → Strompreise 2025: Was kostet das Laden zu Hause?
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
