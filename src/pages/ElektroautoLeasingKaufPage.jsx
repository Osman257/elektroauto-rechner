import React, { useEffect } from 'react';
import SEO from '../components/SEO';
import Header from '../components/Header';
import { 
  ArrowLeft,
  Car,
  CreditCard,
  TrendingDown,
  Calculator,
  CheckCircle,
  XCircle,
  ScrollText,
  AlertCircle,
  Lightbulb,
  Euro,
  Clock,
  Shield,
  Briefcase,
  Users,
  Battery,
  RefreshCw,
  FileText,
  Scale
} from 'lucide-react';

export default function ElektroautoLeasingKaufPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-white">
      <SEO 
        title="E-Auto Leasing oder Kauf: Was lohnt sich wirklich? | e-Autowelt"
        description="Elektroauto leasen oder kaufen? Kostenvergleich mit Rechenbeispielen, Steuervorteile für Dienstwagen (0,25%), Wertverlust-Analyse & Entscheidungshilfe. Jetzt informieren!"
        keywords="elektroauto leasing oder kauf, e-auto leasen, elektroauto finanzieren, dienstwagen elektro steuer, e-auto wertverlust, leasing vergleich"
        canonicalPath="/ratgeber/elektroauto-leasing-oder-kauf"
        ogImage="/images/ratgeber/elektroauto-leasing-kauf-hero.webp"
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
          <div className="relative h-64 md:h-96 bg-gradient-to-br from-purple-600 to-blue-600 overflow-hidden">
            {/* TODO: Hero-Bild ersetzen mit /images/ratgeber/elektroauto-leasing-kauf-hero.webp */}
            <img 
              src="/images/ratgeber/elektroauto-leasing-kauf-hero.webp"
              alt="Elektroauto Leasing oder Kauf - Vergleich der Finanzierungsoptionen für E-Autos"
              className="w-full h-full object-cover opacity-90"
              loading="lazy"
              width="1200"
              height="600"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
            <div className="absolute bottom-0 left-0 right-0 p-6 md:p-10 text-white">
              <div className="flex flex-wrap items-center gap-3 mb-3">
                <div className="bg-white/30 backdrop-blur-md p-2 rounded-lg shadow-lg">
                  <ScrollText className="w-6 h-6 md:w-8 md:h-8" />
                </div>
                <span className="text-xs md:text-sm bg-white/30 backdrop-blur-md px-3 py-1 rounded-full font-semibold shadow-lg">
                  📖 12 Min. Lesezeit
                </span>
                <span className="text-xs md:text-sm bg-white/30 backdrop-blur-md px-3 py-1 rounded-full font-semibold shadow-lg">
                  Aktualisiert am 05. Januar 2026
                </span>
              </div>
              <h1 className="text-2xl md:text-4xl lg:text-5xl font-bold leading-tight">
                Elektroauto Leasing oder Kauf: Was lohnt sich?
              </h1>
            </div>
          </div>

          <div className="p-6 md:p-10">
            {/* Intro */}
            <div className="mb-8 md:mb-12">
              <p className="text-lg md:text-xl text-gray-600 leading-relaxed mb-4">
                Ein neues <strong>Elektroauto</strong> anschaffen – aber wie finanzieren? Die Frage "Leasing oder Kauf" ist bei E-Autos komplexer als bei Verbrennern: <strong>Rasante Technologie-Entwicklung</strong>, hoher Wertverlust und attraktive Steuervorteile für Dienstwagen machen die Entscheidung zur strategischen Frage.
              </p>
              <div className="bg-blue-50 border-2 border-blue-200 rounded-xl p-6">
                <p className="text-base md:text-lg text-gray-700 leading-relaxed">
                  <strong className="text-blue-700">⚡ Schnell-Überblick:</strong> Elektroautos verlieren nach 3 Jahren durchschnittlich <strong>50% ihres Wertes</strong> (vs. 36% bei Benzinern). Leasing schützt vor diesem Risiko – ab <strong>99€/Monat</strong> für Kleinwagen. Als Dienstwagen versteuern Sie E-Autos mit nur <strong>0,25%</strong> des Listenpreises (statt 1% bei Verbrennern). Fazit: Bei Unsicherheit → Leasing. Bei Langzeitnutzung (7+ Jahre) → Kauf.
                </p>
              </div>
            </div>

            {/* Inhaltsverzeichnis */}
            <nav className="bg-gray-50 rounded-xl p-6 mb-8 md:mb-12">
              <h2 className="text-xl md:text-2xl font-bold text-gray-800 mb-4">
                Inhaltsverzeichnis
              </h2>
              <ol className="space-y-2 text-sm md:text-base">
                <li><a href="#grundlagen" className="text-blue-600 hover:underline">1. Leasing vs. Kauf: Die Grundlagen</a></li>
                <li><a href="#wertverlust" className="text-blue-600 hover:underline">2. Wertverlust bei E-Autos: Das unterschätzte Risiko</a></li>
                <li><a href="#kostenvergleich" className="text-blue-600 hover:underline">3. Kostenvergleich mit Rechenbeispiel</a></li>
                <li><a href="#steuervorteile" className="text-blue-600 hover:underline">4. Steuervorteile: Dienstwagen & Gewerbe</a></li>
                <li><a href="#vorteile-nachteile" className="text-blue-600 hover:underline">5. Vorteile & Nachteile im Überblick</a></li>
                <li><a href="#wann-leasing" className="text-blue-600 hover:underline">6. Wann Leasing die bessere Wahl ist</a></li>
                <li><a href="#wann-kauf" className="text-blue-600 hover:underline">7. Wann Kauf die bessere Wahl ist</a></li>
                <li><a href="#alternativen" className="text-blue-600 hover:underline">8. Alternativen: Auto-Abo & Finanzierung</a></li>
                <li><a href="#fazit" className="text-blue-600 hover:underline">9. Fazit & Entscheidungshilfe</a></li>
              </ol>
            </nav>

            {/* Section 1: Grundlagen */}
            <section id="grundlagen" className="mb-12 scroll-mt-24">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                1. Leasing oder Kauf: Die Grundlagen
              </h2>

              <p className="text-gray-700 mb-4 leading-relaxed">
                Beim <strong>Kauf</strong> erwerben Sie das Fahrzeug vollständig – bar oder per Kredit. Sie sind Eigentümer, tragen aber auch das volle Risiko für Wertverlust und Reparaturen. Beim <strong>Leasing</strong> mieten Sie das Auto für eine feste Laufzeit (meist 24-48 Monate) und zahlen monatliche Raten für die Nutzung.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div className="bg-white p-6 rounded-lg border-2 border-blue-500 shadow-sm">
                  <div className="flex items-center gap-3 mb-4">
                    <CreditCard className="w-8 h-8 text-blue-600" />
                    <h3 className="font-bold text-xl text-gray-900">Leasing</h3>
                  </div>
                  <ul className="space-y-2 text-gray-700 text-sm">
                    <li>• Monatliche Rate für Nutzungsrecht</li>
                    <li>• Fahrzeug bleibt Eigentum des Leasinggebers</li>
                    <li>• Rückgabe nach Vertragsende</li>
                    <li>• Kilometerleasing = Standard</li>
                    <li>• Laufzeit: 12-48 Monate</li>
                  </ul>
                </div>
                <div className="bg-white p-6 rounded-lg border-2 border-emerald-500 shadow-sm">
                  <div className="flex items-center gap-3 mb-4">
                    <Car className="w-8 h-8 text-emerald-600" />
                    <h3 className="font-bold text-xl text-gray-900">Kauf</h3>
                  </div>
                  <ul className="space-y-2 text-gray-700 text-sm">
                    <li>• Einmalzahlung oder Kredit</li>
                    <li>• Sie werden Eigentümer</li>
                    <li>• Freie Nutzung ohne Limits</li>
                    <li>• Wiederverkauf jederzeit möglich</li>
                    <li>• Wertverlust-Risiko bei Ihnen</li>
                  </ul>
                </div>
              </div>

              <div className="bg-blue-50 border-l-4 border-blue-500 p-6 mb-6">
                <div className="flex items-start">
                  <Lightbulb className="w-6 h-6 text-blue-600 mr-3 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-bold text-lg text-gray-900 mb-2">Kilometerleasing erklärt</h3>
                    <p className="text-gray-700">Beim heute üblichen <strong>Kilometerleasing</strong> vereinbaren Sie eine jährliche Fahrleistung (z.B. 10.000 km). Fahren Sie mehr, zahlen Sie nach (ca. 10-30 Ct/km). Fahren Sie weniger, bekommen Sie Geld zurück. Das <strong>Restwertrisiko</strong> trägt der Leasinggeber – ein großer Vorteil bei E-Autos!</p>
                  </div>
                </div>
              </div>
            </section>

            {/* Section 2: Wertverlust */}
            <section id="wertverlust" className="mb-12 scroll-mt-24">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                2. Wertverlust bei E-Autos: Das unterschätzte Risiko
              </h2>

              <div className="bg-red-50 border-l-4 border-red-500 p-6 mb-6">
                <div className="flex items-start">
                  <TrendingDown className="w-6 h-6 text-red-600 mr-3 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-bold text-lg text-gray-900 mb-2">E-Autos verlieren schneller an Wert</h3>
                    <p className="text-gray-700">Laut DAT (Deutsche Automobil Treuhand) beträgt der Restwert eines <strong>3 Jahre alten E-Autos nur noch ~50%</strong> des Neupreises. Benziner behalten im gleichen Zeitraum noch ~64% ihres Wertes.</p>
                  </div>
                </div>
              </div>

              <p className="text-gray-700 mb-4 leading-relaxed">
                Der schnelle Wertverlust bei Elektroautos hat mehrere Ursachen: Die <strong>Technologie entwickelt sich rasant</strong> – ein 3 Jahre altes E-Auto hat oft deutlich weniger Reichweite und längere Ladezeiten als aktuelle Modelle. Hinzu kommt der wegfallende Umweltbonus seit Ende 2023, der gebrauchte E-Autos gegenüber geförderten Neuwagen unattraktiver macht.
              </p>

              <h3 className="text-xl font-bold text-gray-800 mb-4">Wertverlust nach Fahrzeugalter</h3>
              
              <div className="overflow-x-auto mb-6">
                <table className="w-full border-collapse">
                  <thead>
                    <tr className="bg-gray-100">
                      <th className="border border-gray-300 px-4 py-3 text-left font-semibold">Fahrzeugalter</th>
                      <th className="border border-gray-300 px-4 py-3 text-left font-semibold">Elektroauto</th>
                      <th className="border border-gray-300 px-4 py-3 text-left font-semibold">Benziner</th>
                      <th className="border border-gray-300 px-4 py-3 text-left font-semibold">Differenz</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="border border-gray-300 px-4 py-3">Nach 1 Jahr</td>
                      <td className="border border-gray-300 px-4 py-3">~75% Restwert</td>
                      <td className="border border-gray-300 px-4 py-3">~75% Restwert</td>
                      <td className="border border-gray-300 px-4 py-3 text-gray-500">≈ gleich</td>
                    </tr>
                    <tr className="bg-gray-50">
                      <td className="border border-gray-300 px-4 py-3">Nach 3 Jahren</td>
                      <td className="border border-gray-300 px-4 py-3 text-red-600 font-semibold">~50% Restwert</td>
                      <td className="border border-gray-300 px-4 py-3">~64% Restwert</td>
                      <td className="border border-gray-300 px-4 py-3 text-red-600">-14 Prozentpunkte</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 px-4 py-3">Nach 5 Jahren</td>
                      <td className="border border-gray-300 px-4 py-3 text-red-600 font-semibold">~40-45% Restwert</td>
                      <td className="border border-gray-300 px-4 py-3">~50-55% Restwert</td>
                      <td className="border border-gray-300 px-4 py-3 text-red-600">-10-15 Prozentpunkte</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <p className="text-xs text-gray-500 mb-6">Quelle: DAT, AutoScout24, eigene Berechnungen (Stand: 2025)</p>

              <div className="bg-emerald-50 border-l-4 border-emerald-500 p-6 mb-6">
                <div className="flex items-start">
                  <CheckCircle className="w-6 h-6 text-emerald-600 mr-3 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-bold text-lg text-gray-900 mb-2">Wertstabile E-Auto-Modelle</h3>
                    <p className="text-gray-700">Premium-Marken wie <strong>Tesla, BMW, Mercedes</strong> verlieren mit 40-45% nach 3 Jahren weniger als Volumenmodelle (50-60%). Auch beliebte Segmente wie Kompakt-SUVs (z.B. Skoda Enyaq, VW ID.4) sind wertstabiler.</p>
                  </div>
                </div>
              </div>
            </section>

            {/* Section 3: Kostenvergleich */}
            <section id="kostenvergleich" className="mb-12 scroll-mt-24">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                3. Kostenvergleich mit Rechenbeispiel
              </h2>

              <p className="text-gray-700 mb-4 leading-relaxed">
                Die Frage "Was ist günstiger?" lässt sich nicht pauschal beantworten – es hängt von Nutzungsdauer, Fahrleistung und Modell ab. Hier ein konkretes Rechenbeispiel:
              </p>

              <div className="bg-gray-50 rounded-xl p-6 mb-6">
                <h3 className="text-xl font-bold text-gray-800 mb-4">📊 Beispiel: VW ID.4 Pro (Listenpreis ~45.000€)</h3>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="bg-white p-5 rounded-lg border border-gray-200">
                    <h4 className="font-bold text-blue-600 mb-3">Option A: Leasing (36 Monate)</h4>
                    <div className="space-y-2 text-sm">
                      <div className="flex justify-between">
                        <span>Monatliche Rate:</span>
                        <span className="font-semibold">399€</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Sonderzahlung:</span>
                        <span className="font-semibold">0€</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Gesamtkosten (36 Mon.):</span>
                        <span className="font-semibold">14.364€</span>
                      </div>
                      <div className="flex justify-between">
                        <span>+ Versicherung (36 Mon.):</span>
                        <span className="font-semibold">~2.700€</span>
                      </div>
                      <div className="flex justify-between border-t pt-2 mt-2">
                        <span className="font-bold">Gesamt nach 3 Jahren:</span>
                        <span className="font-bold text-blue-600">~17.064€</span>
                      </div>
                    </div>
                  </div>
                  
                  <div className="bg-white p-5 rounded-lg border border-gray-200">
                    <h4 className="font-bold text-emerald-600 mb-3">Option B: Barkauf</h4>
                    <div className="space-y-2 text-sm">
                      <div className="flex justify-between">
                        <span>Kaufpreis:</span>
                        <span className="font-semibold">45.000€</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Restwert nach 3 Jahren (~50%):</span>
                        <span className="font-semibold">-22.500€</span>
                      </div>
                      <div className="flex justify-between">
                        <span>= Wertverlust:</span>
                        <span className="font-semibold text-red-600">22.500€</span>
                      </div>
                      <div className="flex justify-between">
                        <span>+ Versicherung (36 Mon.):</span>
                        <span className="font-semibold">~2.700€</span>
                      </div>
                      <div className="flex justify-between border-t pt-2 mt-2">
                        <span className="font-bold">Gesamt nach 3 Jahren:</span>
                        <span className="font-bold text-emerald-600">~25.200€</span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="mt-4 p-4 bg-blue-100 rounded-lg">
                  <p className="text-sm text-gray-700">
                    <strong>Ergebnis nach 3 Jahren:</strong> Leasing ist in diesem Beispiel <strong>~8.100€ günstiger</strong> als der Barkauf – hauptsächlich wegen des hohen Wertverlusts beim Kauf. Bei längerer Nutzungsdauer (7+ Jahre) dreht sich das Bild zugunsten des Kaufs.
                  </p>
                </div>
              </div>

              <div className="bg-yellow-50 border-l-4 border-yellow-500 p-6 mb-6">
                <div className="flex items-start">
                  <AlertCircle className="w-6 h-6 text-yellow-600 mr-3 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-bold text-lg text-gray-900 mb-2">Wichtig: Kreditkosten nicht vergessen!</h3>
                    <p className="text-gray-700">Bei Finanzierung über Kredit kommen noch <strong>Zinsen</strong> hinzu (aktuell ca. 5-8% p.a.). Das macht den Kauf im Vergleich zum Leasing noch teurer. Nur bei Barzahlung entfallen diese Zusatzkosten.</p>
                  </div>
                </div>
              </div>
            </section>

            {/* Section 4: Steuervorteile */}
            <section id="steuervorteile" className="mb-12 scroll-mt-24">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                4. Steuervorteile: Dienstwagen & Gewerbe
              </h2>

              <div className="bg-emerald-50 border-l-4 border-emerald-500 p-6 mb-6">
                <div className="flex items-start">
                  <Briefcase className="w-6 h-6 text-emerald-600 mr-3 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-bold text-lg text-gray-900 mb-2">0,25%-Regelung für E-Dienstwagen</h3>
                    <p className="text-gray-700">Bei E-Autos mit Bruttolistenpreis <strong>unter 70.000€</strong> müssen Sie als Dienstwagennutzer nur <strong>0,25%</strong> des Listenpreises monatlich als geldwerten Vorteil versteuern. Bei Verbrennern sind es 1% – das macht E-Autos als Firmenwagen extrem attraktiv!</p>
                  </div>
                </div>
              </div>

              <h3 className="text-xl font-bold text-gray-800 mb-4">Versteuerung Dienstwagen: E-Auto vs. Verbrenner</h3>

              <div className="overflow-x-auto mb-6">
                <table className="w-full border-collapse">
                  <thead>
                    <tr className="bg-gray-100">
                      <th className="border border-gray-300 px-4 py-3 text-left font-semibold">Fahrzeugtyp</th>
                      <th className="border border-gray-300 px-4 py-3 text-left font-semibold">Listenpreis</th>
                      <th className="border border-gray-300 px-4 py-3 text-left font-semibold">Steuersatz</th>
                      <th className="border border-gray-300 px-4 py-3 text-left font-semibold">Monatl. geldwerter Vorteil</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="bg-emerald-50">
                      <td className="border border-gray-300 px-4 py-3 font-semibold">E-Auto (≤70.000€)</td>
                      <td className="border border-gray-300 px-4 py-3">50.000€</td>
                      <td className="border border-gray-300 px-4 py-3 text-emerald-600 font-bold">0,25%</td>
                      <td className="border border-gray-300 px-4 py-3 text-emerald-600 font-bold">125€</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 px-4 py-3 font-semibold">E-Auto (&gt;70.000€)</td>
                      <td className="border border-gray-300 px-4 py-3">90.000€</td>
                      <td className="border border-gray-300 px-4 py-3">0,5%</td>
                      <td className="border border-gray-300 px-4 py-3">450€</td>
                    </tr>
                    <tr className="bg-gray-50">
                      <td className="border border-gray-300 px-4 py-3 font-semibold">Plug-in-Hybrid</td>
                      <td className="border border-gray-300 px-4 py-3">50.000€</td>
                      <td className="border border-gray-300 px-4 py-3">0,5%</td>
                      <td className="border border-gray-300 px-4 py-3">250€</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 px-4 py-3 font-semibold">Verbrenner</td>
                      <td className="border border-gray-300 px-4 py-3">50.000€</td>
                      <td className="border border-gray-300 px-4 py-3 text-red-600 font-bold">1,0%</td>
                      <td className="border border-gray-300 px-4 py-3 text-red-600 font-bold">500€</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <p className="text-gray-700 mb-4 leading-relaxed">
                <strong>Rechenbeispiel:</strong> Bei einem Steuersatz von 42% spart der E-Dienstwagen-Fahrer im Vergleich zum Verbrenner monatlich: (500€ - 125€) × 42% = <strong>157,50€ netto</strong>. Das sind über <strong>1.890€ pro Jahr</strong> – allein durch die günstigere Versteuerung!
              </p>

              <h3 className="text-xl font-bold text-gray-800 mb-4 mt-8">Weitere Steuervorteile</h3>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                <div className="bg-white p-4 rounded-lg border border-gray-200">
                  <h4 className="font-bold text-gray-900 mb-2">🏢 Für Gewerbetreibende</h4>
                  <ul className="text-sm text-gray-700 space-y-1">
                    <li>• Leasingraten als Betriebsausgabe absetzbar</li>
                    <li>• 40% Sonderabschreibung im 1. Jahr (Kauf)</li>
                    <li>• Vorsteuerabzug bei Neuwagen</li>
                  </ul>
                </div>
                <div className="bg-white p-4 rounded-lg border border-gray-200">
                  <h4 className="font-bold text-gray-900 mb-2">🏠 Für Privatpersonen</h4>
                  <ul className="text-sm text-gray-700 space-y-1">
                    <li>• Kfz-Steuerbefreiung bis 2030 (Zulassung bis Ende 2025)</li>
                    <li>• THG-Quote: bis zu 400€/Jahr</li>
                    <li>• Kostenloser Ladestrom beim Arbeitgeber (steuerfrei)</li>
                  </ul>
                </div>
              </div>
            </section>

            {/* Section 5: Vorteile & Nachteile */}
            <section id="vorteile-nachteile" className="mb-12 scroll-mt-24">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                5. Vorteile & Nachteile im Überblick
              </h2>

              <div className="space-y-6">
                {/* Leasing Vorteile/Nachteile */}
                <div className="bg-blue-50 rounded-xl p-6">
                  <h3 className="text-xl font-bold text-blue-700 mb-4">🔄 E-Auto Leasing</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <h4 className="font-semibold text-emerald-600 mb-2 flex items-center gap-2">
                        <CheckCircle className="w-5 h-5" /> Vorteile
                      </h4>
                      <ul className="text-sm text-gray-700 space-y-1">
                        <li>• Kein Wertverlust-Risiko</li>
                        <li>• Planbare monatliche Kosten</li>
                        <li>• Immer neueste Technik fahren</li>
                        <li>• Keine hohe Anfangsinvestition</li>
                        <li>• Steuervorteile für Dienstwagen</li>
                        <li>• Flexibler Wechsel alle 2-4 Jahre</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold text-red-600 mb-2 flex items-center gap-2">
                        <XCircle className="w-5 h-5" /> Nachteile
                      </h4>
                      <ul className="text-sm text-gray-700 space-y-1">
                        <li>• Kein Eigentum am Fahrzeug</li>
                        <li>• Kilometerbegrenzung (Mehrkosten bei Überschreitung)</li>
                        <li>• Rückgabe-Vorgaben (Zustand, Schäden)</li>
                        <li>• Keine Individualisierung möglich</li>
                        <li>• Vertragsbindung über Laufzeit</li>
                        <li>• GAP-Versicherung empfohlen</li>
                      </ul>
                    </div>
                  </div>
                </div>

                {/* Kauf Vorteile/Nachteile */}
                <div className="bg-emerald-50 rounded-xl p-6">
                  <h3 className="text-xl font-bold text-emerald-700 mb-4">🔑 E-Auto Kauf</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <h4 className="font-semibold text-emerald-600 mb-2 flex items-center gap-2">
                        <CheckCircle className="w-5 h-5" /> Vorteile
                      </h4>
                      <ul className="text-sm text-gray-700 space-y-1">
                        <li>• Volles Eigentum am Fahrzeug</li>
                        <li>• Keine Kilometerbegrenzung</li>
                        <li>• Freie Werkstattwahl</li>
                        <li>• Individuelle Ausstattung möglich</li>
                        <li>• Wiederverkauf jederzeit</li>
                        <li>• Langfristig günstigste Option (7+ Jahre)</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold text-red-600 mb-2 flex items-center gap-2">
                        <XCircle className="w-5 h-5" /> Nachteile
                      </h4>
                      <ul className="text-sm text-gray-700 space-y-1">
                        <li>• Hohes Wertverlust-Risiko (~50% in 3 Jahren)</li>
                        <li>• Hohe Anfangsinvestition nötig</li>
                        <li>• Technologie kann schnell veralten</li>
                        <li>• Batterie-Risiko nach Garantieende</li>
                        <li>• Kapitalbindung</li>
                        <li>• Wiederverkauf kann schwierig sein</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* Section 6: Wann Leasing */}
            <section id="wann-leasing" className="mb-12 scroll-mt-24">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                6. Wann Leasing die bessere Wahl ist
              </h2>

              <p className="text-gray-700 mb-4 leading-relaxed">
                Leasing ist bei Elektroautos besonders attraktiv – in vielen Fällen die wirtschaftlich bessere Wahl als der Kauf. Diese Situation spricht für Leasing:
              </p>

              <div className="space-y-4 mb-6">
                <div className="flex items-start gap-4 bg-white p-4 rounded-lg border-l-4 border-blue-500">
                  <RefreshCw className="w-6 h-6 text-blue-600 flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-bold text-gray-900">Sie wollen immer neueste Technik</h4>
                    <p className="text-gray-700 text-sm">E-Auto-Technologie entwickelt sich rasant. Mit Leasing wechseln Sie alle 2-4 Jahre auf ein Modell mit besserer Reichweite und kürzeren Ladezeiten.</p>
                  </div>
                </div>
                <div className="flex items-start gap-4 bg-white p-4 rounded-lg border-l-4 border-blue-500">
                  <Users className="w-6 h-6 text-blue-600 flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-bold text-gray-900">Sie fahren einen E-Dienstwagen</h4>
                    <p className="text-gray-700 text-sm">Mit der 0,25%-Versteuerung und der Möglichkeit, Leasingraten als Betriebsausgabe abzusetzen, ist Leasing für Gewerbetreibende fast immer die beste Option.</p>
                  </div>
                </div>
                <div className="flex items-start gap-4 bg-white p-4 rounded-lg border-l-4 border-blue-500">
                  <Shield className="w-6 h-6 text-blue-600 flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-bold text-gray-900">Sie wollen kein Restwertrisiko</h4>
                    <p className="text-gray-700 text-sm">Der hohe Wertverlust bei E-Autos ist beim Kilometerleasing das Problem des Leasinggebers – nicht Ihres.</p>
                  </div>
                </div>
                <div className="flex items-start gap-4 bg-white p-4 rounded-lg border-l-4 border-blue-500">
                  <Clock className="w-6 h-6 text-blue-600 flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-bold text-gray-900">Sie sind noch unsicher bei E-Mobilität</h4>
                    <p className="text-gray-700 text-sm">Leasing ist ideal zum "Testen" – nach 24-36 Monaten können Sie problemlos wechseln, wenn E-Mobilität doch nicht zu Ihnen passt.</p>
                  </div>
                </div>
              </div>

              <div className="bg-blue-50 border-2 border-blue-200 rounded-xl p-6">
                <h4 className="font-bold text-blue-700 mb-2">💡 Tipp: Günstige Leasing-Angebote finden</h4>
                <p className="text-gray-700 text-sm">E-Auto-Kleinwagen wie <strong>Dacia Spring, Fiat 500e</strong> oder <strong>Renault Zoe</strong> gibt es bereits ab <strong>99-150€/Monat</strong>. Kompaktwagen wie der <strong>Cupra Born</strong> starten bei ca. 189€. Nutzen Sie Vergleichsportale und achten Sie auf den <strong>Leasingfaktor</strong> (unter 0,5 = Top-Deal).</p>
              </div>
            </section>

            {/* Section 7: Wann Kauf */}
            <section id="wann-kauf" className="mb-12 scroll-mt-24">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                7. Wann Kauf die bessere Wahl ist
              </h2>

              <p className="text-gray-700 mb-4 leading-relaxed">
                Trotz der Vorteile des Leasings gibt es Situationen, in denen der Kauf eines Elektroautos sinnvoller ist:
              </p>

              <div className="space-y-4 mb-6">
                <div className="flex items-start gap-4 bg-white p-4 rounded-lg border-l-4 border-emerald-500">
                  <Clock className="w-6 h-6 text-emerald-600 flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-bold text-gray-900">Sie planen Langzeitnutzung (7+ Jahre)</h4>
                    <p className="text-gray-700 text-sm">Nach ca. 7 Jahren Nutzung schlägt der Kauf das Leasing wirtschaftlich – die Anschaffungskosten verteilen sich über die Zeit und das Auto fährt irgendwann "kostenlos".</p>
                  </div>
                </div>
                <div className="flex items-start gap-4 bg-white p-4 rounded-lg border-l-4 border-emerald-500">
                  <Car className="w-6 h-6 text-emerald-600 flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-bold text-gray-900">Sie sind Vielfahrer (&gt;25.000 km/Jahr)</h4>
                    <p className="text-gray-700 text-sm">Bei hoher Fahrleistung werden Leasing-Mehrkilometer teuer. Beim Kauf gibt es keine Kilometerbegrenzung – perfekt für Pendler mit langen Strecken.</p>
                  </div>
                </div>
                <div className="flex items-start gap-4 bg-white p-4 rounded-lg border-l-4 border-emerald-500">
                  <Battery className="w-6 h-6 text-emerald-600 flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-bold text-gray-900">Sie kaufen ein wertstabiles Modell</h4>
                    <p className="text-gray-700 text-sm">Premium-Marken wie Tesla Model 3/Y, BMW i4 oder Mercedes EQA/EQB haben geringeren Wertverlust – hier lohnt der Kauf eher als bei Volumenmodellen.</p>
                  </div>
                </div>
                <div className="flex items-start gap-4 bg-white p-4 rounded-lg border-l-4 border-emerald-500">
                  <Euro className="w-6 h-6 text-emerald-600 flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-bold text-gray-900">Sie haben das Kapital verfügbar</h4>
                    <p className="text-gray-700 text-sm">Barkauf spart die Zinsen einer Finanzierung. Wenn Sie das Geld ohnehin haben und nicht anderweitig investieren, kann der Kauf sinnvoll sein.</p>
                  </div>
                </div>
              </div>

              <div className="bg-emerald-50 border-2 border-emerald-200 rounded-xl p-6">
                <h4 className="font-bold text-emerald-700 mb-2">💡 Tipp: Gebrauchte E-Autos kaufen</h4>
                <p className="text-gray-700 text-sm">Wegen des hohen Wertverlusts sind <strong>2-3 Jahre alte E-Autos oft echte Schnäppchen</strong>. Ein 3 Jahre alter VW ID.4 kostet gebraucht oft nur noch 50% des Neupreises – mit meist noch ausreichend Batterie-Garantie. So umgehen Sie den größten Wertverlust!</p>
              </div>
            </section>

            {/* Section 8: Alternativen */}
            <section id="alternativen" className="mb-12 scroll-mt-24">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                8. Alternativen: Auto-Abo & Finanzierung
              </h2>

              <p className="text-gray-700 mb-4 leading-relaxed">
                Neben Leasing und Kauf gibt es weitere Optionen, die je nach Situation interessant sein können:
              </p>

              <div className="space-y-4 mb-6">
                <div className="bg-white p-6 rounded-lg border-2 border-purple-500">
                  <h3 className="font-bold text-xl text-purple-600 mb-3">🚗 E-Auto-Abo</h3>
                  <p className="text-gray-700 mb-3">Beim Auto-Abo zahlen Sie eine monatliche Pauschale, die <strong>alles außer Strom</strong> enthält: Versicherung, Steuer, Wartung, Reifenwechsel. Laufzeiten sind kürzer (1-12 Monate) und flexibler als beim Leasing.</p>
                  <div className="grid grid-cols-2 gap-4 text-sm">
                    <div>
                      <span className="text-emerald-600 font-semibold">+ Vorteile:</span>
                      <ul className="text-gray-600 mt-1">
                        <li>• Maximale Flexibilität</li>
                        <li>• All-inclusive (keine Überraschungen)</li>
                        <li>• Ideal zum Testen</li>
                      </ul>
                    </div>
                    <div>
                      <span className="text-red-600 font-semibold">- Nachteile:</span>
                      <ul className="text-gray-600 mt-1">
                        <li>• Teurer als Leasing</li>
                        <li>• Oft ältere Modelle</li>
                        <li>• Eingeschränkte Auswahl</li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="bg-white p-6 rounded-lg border-2 border-orange-500">
                  <h3 className="font-bold text-xl text-orange-600 mb-3">💳 Finanzierung / Kredit</h3>
                  <p className="text-gray-700 mb-3">Bei der Finanzierung zahlen Sie das Auto in Raten ab und werden am Ende Eigentümer. Zinsen liegen aktuell bei <strong>5-8% p.a.</strong> – oft teurer als Leasing, aber Sie behalten das Auto.</p>
                  <div className="grid grid-cols-2 gap-4 text-sm">
                    <div>
                      <span className="text-emerald-600 font-semibold">+ Vorteile:</span>
                      <ul className="text-gray-600 mt-1">
                        <li>• Eigentum nach Abzahlung</li>
                        <li>• Keine Kilometerbegrenzung</li>
                        <li>• Freie Nutzung</li>
                      </ul>
                    </div>
                    <div>
                      <span className="text-red-600 font-semibold">- Nachteile:</span>
                      <ul className="text-gray-600 mt-1">
                        <li>• Zinsen erhöhen Gesamtkosten</li>
                        <li>• Vollkasko meist Pflicht</li>
                        <li>• Wertverlust-Risiko bleibt</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* Fazit */}
            <section id="fazit" className="mb-8 md:mb-12">
              <div className="bg-gradient-to-r from-purple-600 to-blue-600 rounded-xl p-6 md:p-8 text-white">
                <h2 className="text-2xl md:text-3xl font-bold mb-4">
                  Fazit: Leasing oder Kauf – Die Entscheidungshilfe
                </h2>
                <p className="text-base md:text-lg leading-relaxed mb-4">
                  Bei Elektroautos ist <strong>Leasing in den meisten Fällen die wirtschaftlich sinnvollere Option</strong> – vor allem wegen des hohen Wertverlusts und der schnellen Technologie-Entwicklung. Besonders für Dienstwagen mit der 0,25%-Versteuerung ist Leasing fast unschlagbar.
                </p>
                <p className="text-base md:text-lg leading-relaxed mb-6">
                  Der <strong>Kauf lohnt sich</strong>, wenn Sie das Auto mindestens <strong>7+ Jahre</strong> fahren wollen, Vielfahrer sind oder ein wertstabiles Premium-Modell im Auge haben. Tipp: Der <strong>Gebrauchtwagen-Kauf</strong> ist ein guter Mittelweg – Sie profitieren vom bereits erfolgten Wertverlust!
                </p>
                <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
                  <p className="text-lg font-semibold">
                    ⚡ <strong>Unsere Empfehlung:</strong> Unsicher? Starten Sie mit Leasing (24-36 Monate). So sammeln Sie E-Auto-Erfahrung ohne großes finanzielles Risiko. Danach wissen Sie besser, ob Sie langfristig auf E-Mobilität setzen wollen – und können dann ggf. kaufen.
                  </p>
                </div>
              </div>
            </section>

            {/* CTA Box */}
            <div className="bg-gradient-to-r from-emerald-600 to-teal-600 rounded-2xl p-8 text-center text-white mb-8">
              <h3 className="text-2xl font-bold mb-4">
                📊 Was kostet Ihr E-Auto wirklich?
              </h3>
              <p className="text-lg mb-6 max-w-2xl mx-auto">
                Vergleichen Sie die Gesamtkosten von Leasing, Kauf und Finanzierung für Ihr Wunsch-E-Auto mit unserem Kostenrechner.
              </p>
              <a 
                href="/rechner/kostenrechner"
                className="inline-flex items-center gap-3 bg-white text-emerald-600 font-bold px-8 py-4 rounded-full hover:shadow-2xl hover:scale-105 transition-all duration-200"
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
            <li>• DAT (Deutsche Automobil Treuhand): Restwertanalysen 2025</li>
            <li>• ADAC: E-Auto leasen oder kaufen – Ratgeber</li>
            <li>• Bundesfinanzministerium: Dienstwagenbesteuerung E-Fahrzeuge</li>
            <li>• AutoScout24: Wertverlust Elektroauto Analyse</li>
            <li>• EnBW, Allianz, Verivox: Leasing-Ratgeber</li>
            <li>• Leasingmarkt.de, carwow.de: Aktuelle Leasingangebote</li>
          </ul>
          <p className="mt-4 leading-relaxed">
            <strong>Haftungsausschluss:</strong> Alle Angaben ohne Gewähr. Leasingraten und Konditionen können je nach Anbieter, Bonität und Marktlage variieren. Die Beispielrechnungen dienen der Orientierung und ersetzen keine individuelle Beratung. Steuerliche Vorteile sollten mit einem Steuerberater besprochen werden.
          </p>
        </div>

        {/* Related Articles */}
        <div className="mt-8 bg-blue-50 rounded-xl p-6">
          <h3 className="text-lg font-bold text-gray-800 mb-4">
            📚 Weitere hilfreiche Artikel:
          </h3>
          <div className="space-y-2">
          
            <a href="/ratgeber/elektroauto-versicherung" className="block text-blue-600 hover:underline text-sm md:text-base">
              → E-Auto Versicherung: Kosten & Besonderheiten
            </a>
            <a href="/ratgeber/wallbox-kosten-installation" className="block text-blue-600 hover:underline text-sm md:text-base">
              → Wallbox-Kosten 2025: Installation & Förderung
            </a>
            <a href="/rechner/kostenrechner" className="block text-blue-600 hover:underline text-sm md:text-base">
              → TCO-Rechner: Gesamtkosten berechnen
            </a>
            <a href="/rechner/gebrauchtwagenbatterierechner" className="block text-blue-600 hover:underline text-sm md:text-base">
              → Batterie-Check: Zustand gebrauchter E-Autos prüfen
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
