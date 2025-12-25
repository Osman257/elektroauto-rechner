import React, { useEffect } from 'react';
import SEO from '../components/SEO';
import Header from '../components/Header';
import { 
  ArrowLeft,
  Shield,
  Battery,
  Zap,
  Euro,
  CheckCircle,
  AlertCircle,
  Calculator,
  TrendingUp,
  Car,
  Lightbulb,
  ArrowRight,
  FileText
} from 'lucide-react';

export default function EAutoVersicherungPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-white">
      {/* SEO */}
      <SEO 
        title="Elektroauto Versicherung 2025: Kosten, Vergleich & Spartipps | e-Autowelt"
        description="E-Auto Versicherung im Vergleich: Kosten ab 119€/Jahr ✓ Akku-Schutz ✓ Tierbiss-Absicherung ✓ Die besten Tarife 2025 + Spartipps für Ihre Kfz-Versicherung."
        keywords="elektroauto versicherung, e-auto versicherung, elektroauto versicherung kosten, e-auto versicherung vergleich, akku versicherung, kfz versicherung elektroauto"
        canonicalPath="/ratgeber/elektroauto-versicherung"
        ogImage="/images/ratgeber/elektroauto-versicherung-og.jpg"
        ogType="article"
        publishedDate="2025-12-24T12:00:00Z"
        modifiedDate="2025-12-24T12:00:00Z"
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
          <div className="relative h-64 md:h-96 bg-gradient-to-br from-blue-600 to-purple-600 overflow-hidden">
            <img 
              src="/images/ratgeber/elektroauto-versicherung-hero.webp"
              alt="Elektroauto Versicherung - Schutz für Ihr E-Auto mit Akku-Absicherung"
              className="w-full h-full object-cover opacity-90"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
            <div className="absolute bottom-0 left-0 right-0 p-6 md:p-10 text-white">
              <div className="flex items-center gap-3 mb-3">
                <div className="bg-white/30 backdrop-blur-md p-2 rounded-lg shadow-lg">
                  <Shield className="w-6 h-6 md:w-8 md:h-8" />
                </div>
                <span className="text-xs md:text-sm bg-white/30 backdrop-blur-md px-3 py-1 rounded-full font-semibold shadow-lg">
                  📖 12 Min. Lesezeit
                </span>
                <span className="text-xs md:text-sm bg-white/30 backdrop-blur-md px-3 py-1 rounded-full font-semibold shadow-lg">
                  Aktualisiert am 24. Dezember 2025
                </span>
              </div>
              <h1 className="text-2xl md:text-4xl lg:text-5xl font-bold leading-tight">
                Elektroauto Versicherung 2025: Kosten & Vergleich
              </h1>
            </div>
          </div>

          <div className="p-6 md:p-10">
            {/* Intro */}
            <div className="mb-8 md:mb-12">
              <p className="text-lg md:text-xl text-gray-600 leading-relaxed mb-4">
                Sie fahren elektrisch oder planen den Umstieg auf ein E-Auto? Dann ist die richtige 
                <strong> Kfz-Versicherung für Ihr Elektroauto</strong> entscheidend. Anders als bei 
                Verbrennern gibt es besondere Anforderungen: Der teure Akku, Ladekabel, Wallbox und 
                Überspannungsschäden erfordern speziellen Schutz. Die gute Nachricht: E-Autos sind 
                oft <strong>günstiger zu versichern</strong> als vergleichbare Benziner.
              </p>
              <div className="bg-blue-50 border-2 border-blue-200 rounded-xl p-6">
                <p className="text-base md:text-lg text-gray-700 leading-relaxed">
                  <strong className="text-blue-700">⚡ Schnell-Überblick:</strong> Die Kfz-Haftpflicht 
                  für Elektroautos startet ab <strong>119 Euro pro Jahr</strong>. Vollkasko-Tarife 
                  liegen je nach Modell zwischen 500 und 1.500 Euro jährlich. Laut GDV verursachen 
                  E-Autos in der Haftpflicht 10-15% weniger Schäden als Verbrenner. Wichtig: Achten 
                  Sie auf <strong>Akku-Schutz, Tierbiss-Folgeschäden und Überspannungsschäden </strong> 
                  in Ihrem Tarif!
                </p>
              </div>
            </div>

            {/* Inhaltsverzeichnis */}
            <nav className="bg-gray-50 rounded-xl p-6 mb-8 md:mb-12">
              <h2 className="text-xl md:text-2xl font-bold text-gray-800 mb-4">
                Inhaltsverzeichnis
              </h2>
              <ol className="space-y-2 text-sm md:text-base">
                <li><a href="#versicherungsarten" className="text-blue-600 hover:underline">1. Versicherungsarten für Elektroautos</a></li>
                <li><a href="#wichtige-leistungen" className="text-blue-600 hover:underline">2. Die wichtigsten Leistungen für E-Autos</a></li>
                <li><a href="#kosten" className="text-blue-600 hover:underline">3. Was kostet eine E-Auto Versicherung?</a></li>
                <li><a href="#eauto-vs-verbrenner" className="text-blue-600 hover:underline">4. E-Auto vs. Verbrenner: Versicherungsvergleich</a></li>
                <li><a href="#spartipps" className="text-blue-600 hover:underline">5. Spartipps für Ihre Elektroauto-Versicherung</a></li>
                <li><a href="#typklassen" className="text-blue-600 hover:underline">6. Typklassen bei E-Autos</a></li>
                <li><a href="#anbieterwahl" className="text-blue-600 hover:underline">7. Den richtigen Anbieter finden</a></li>
                <li><a href="#fazit" className="text-blue-600 hover:underline">8. Fazit</a></li>
              </ol>
            </nav>

            {/* Section 1: Versicherungsarten */}
            <section id="versicherungsarten" className="mb-12 scroll-mt-24">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                1. Versicherungsarten für Elektroautos
              </h2>
              
              <p className="text-gray-700 mb-6 leading-relaxed">
                Für Ihr Elektroauto gelten dieselben Versicherungsgrundlagen wie für Verbrenner. 
                Die <strong>Kfz-Haftpflicht ist Pflicht</strong> – ohne sie dürfen Sie Ihr Fahrzeug 
                nicht im öffentlichen Straßenverkehr bewegen. Teilkasko und Vollkasko sind freiwillig, 
                aber gerade bei E-Autos besonders empfehlenswert.
              </p>

              <div className="space-y-4 mb-6">
                <div className="bg-white p-6 rounded-lg border-2 border-blue-500 shadow-sm">
                  <div className="flex items-start">
                    <Shield className="w-6 h-6 text-blue-600 mr-3 flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="font-bold text-lg text-gray-900 mb-2">Kfz-Haftpflicht (Pflicht)</h3>
                      <p className="text-gray-700">
                        Deckt Schäden ab, die Sie anderen Verkehrsteilnehmern zufügen. Versicherungssummen 
                        bis zu 100 Mio. Euro für Sach- und Vermögensschäden, bis zu 15 Mio. Euro pro 
                        geschädigter Person. Bei E-Autos keine Unterschiede zum Verbrenner.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="bg-white p-6 rounded-lg border-2 border-emerald-500 shadow-sm">
                  <div className="flex items-start">
                    <Zap className="w-6 h-6 text-emerald-600 mr-3 flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="font-bold text-lg text-gray-900 mb-2">Teilkasko (freiwillig)</h3>
                      <p className="text-gray-700">
                        Schützt bei Diebstahl, Brand, Glasbruch, Wildunfall, Sturm und Hagel. 
                        Bei E-Autos wichtig: <strong>Überspannungsschäden beim Laden</strong> und 
                        <strong> Tierbiss-Folgeschäden</strong> am Akku sollten enthalten sein.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="bg-white p-6 rounded-lg border-2 border-purple-500 shadow-sm">
                  <div className="flex items-start">
                    <Car className="w-6 h-6 text-purple-600 mr-3 flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="font-bold text-lg text-gray-900 mb-2">Vollkasko (freiwillig)</h3>
                      <p className="text-gray-700">
                        Enthält alle Teilkasko-Leistungen plus Schutz bei selbst verschuldeten Unfällen, 
                        Vandalismus und Fahrerflucht. <strong>Für neue E-Autos empfohlen</strong>, da 
                        auch die teure Batterie bei Allgefahrendeckung geschützt ist.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-yellow-50 border-l-4 border-yellow-500 p-6">
                <div className="flex items-start">
                  <AlertCircle className="w-6 h-6 text-yellow-600 mr-3 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-bold text-lg text-gray-900 mb-2">Tipp vom Experten</h3>
                    <p className="text-gray-700">
                      Bei Neuwagen und jungen Gebrauchtwagen unter 5 Jahren lohnt sich die 
                      Vollkasko fast immer. Die Vollkasko kann durch den Schadenfreiheitsrabatt 
                      sogar günstiger sein als die Teilkasko!
                    </p>
                  </div>
                </div>
              </div>
            </section>

            {/* Section 2: Wichtige Leistungen */}
            <section id="wichtige-leistungen" className="mb-12 scroll-mt-24">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                2. Die wichtigsten Leistungen für E-Autos
              </h2>

              <p className="text-gray-700 mb-6 leading-relaxed">
                Eine Elektroauto-Versicherung unterscheidet sich von herkömmlichen Tarifen durch 
                spezielle Leistungen für Batterie, Ladeinfrastruktur und Elektronik. Achten Sie 
                bei der Tarifwahl besonders auf diese <strong>E-Auto-spezifischen Absicherungen</strong>:
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                <div className="bg-emerald-50 border-2 border-emerald-200 rounded-xl p-6">
                  <Battery className="w-8 h-8 text-emerald-600 mb-3" />
                  <h3 className="font-bold text-lg text-gray-900 mb-2">Akku-Schutz</h3>
                  <p className="text-gray-700 text-sm">
                    Der Akku ist das teuerste Bauteil. Eine <strong>Allgefahrendeckung</strong> schützt 
                    bei Kurzschluss, Überspannung, Bedienfehler und Tierbiss. Achten Sie auf 
                    unbegrenzte Entschädigungssummen.
                  </p>
                </div>

                <div className="bg-blue-50 border-2 border-blue-200 rounded-xl p-6">
                  <Zap className="w-8 h-8 text-blue-600 mb-3" />
                  <h3 className="font-bold text-lg text-gray-900 mb-2">Überspannungsschäden</h3>
                  <p className="text-gray-700 text-sm">
                    Blitzeinschlag oder Spannungsschwankungen beim Laden können teure Schäden 
                    verursachen. Die Absicherung sollte sowohl direkte als auch indirekte 
                    Überspannungsschäden abdecken.
                  </p>
                </div>

                <div className="bg-purple-50 border-2 border-purple-200 rounded-xl p-6">
                  <AlertCircle className="w-8 h-8 text-purple-600 mb-3" />
                  <h3 className="font-bold text-lg text-gray-900 mb-2">Tierbiss-Folgeschäden</h3>
                  <p className="text-gray-700 text-sm">
                    Marder und andere Tiere können Kabel anbeißen – bei E-Autos kann das den 
                    Akku beschädigen. Mindestens <strong>20.000 Euro Deckung</strong> für 
                    Folgeschäden sind empfehlenswert.
                  </p>
                </div>

                <div className="bg-orange-50 border-2 border-orange-200 rounded-xl p-6">
                  <Car className="w-8 h-8 text-orange-600 mb-3" />
                  <h3 className="font-bold text-lg text-gray-900 mb-2">Ladekabel & Wallbox</h3>
                  <p className="text-gray-700 text-sm">
                    Mobile Ladekabel und die heimische Wallbox sollten gegen Diebstahl, Brand 
                    und Beschädigung versichert sein. Einige Tarife bieten bis zu 5.000 Euro 
                    Schutz für Ladeinfrastruktur.
                  </p>
                </div>
              </div>

              <div className="bg-gray-50 rounded-xl p-6 mb-6">
                <h3 className="font-bold text-lg text-gray-900 mb-4">
                  Checkliste: Diese Leistungen sollte Ihre E-Auto-Versicherung enthalten
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  <div className="flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-emerald-600 flex-shrink-0" />
                    <span className="text-gray-700">Allgefahrendeckung für den Akku</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-emerald-600 flex-shrink-0" />
                    <span className="text-gray-700">Tierbiss-Folgeschäden (min. 20.000 €)</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-emerald-600 flex-shrink-0" />
                    <span className="text-gray-700">Überspannungsschäden beim Laden</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-emerald-600 flex-shrink-0" />
                    <span className="text-gray-700">Schutz für Ladekabel & Wallbox</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-emerald-600 flex-shrink-0" />
                    <span className="text-gray-700">Kurzschluss-Folgeschäden</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-emerald-600 flex-shrink-0" />
                    <span className="text-gray-700">Neupreisentschädigung für den Akku</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-emerald-600 flex-shrink-0" />
                    <span className="text-gray-700">Akku-Entsorgungskosten</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-emerald-600 flex-shrink-0" />
                    <span className="text-gray-700">Pannenhilfe bei leerem Akku</span>
                  </div>
                </div>
              </div>

              <div className="bg-red-50 border-l-4 border-red-500 p-6">
                <div className="flex items-start">
                  <AlertCircle className="w-6 h-6 text-red-600 mr-3 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-bold text-lg text-gray-900 mb-2">Wichtiger Hinweis zur Wallbox</h3>
                    <p className="text-gray-700">
                      Eine fest mit dem Haus verbundene Wallbox ist häufig automatisch über die 
                      <strong> Wohngebäudeversicherung</strong> mitversichert. Prüfen Sie Ihren 
                      bestehenden Versicherungsschutz, bevor Sie eine zusätzliche Police abschließen.
                    </p>
                  </div>
                </div>
              </div>
            </section>

            {/* Section 3: Kosten */}
            <section id="kosten" className="mb-12 scroll-mt-24">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                3. Was kostet eine E-Auto Versicherung?
              </h2>

              <p className="text-gray-700 mb-6 leading-relaxed">
                Die Kosten für eine Elektroauto-Versicherung hängen von vielen Faktoren ab: 
                Fahrzeugmodell, Typklasse, Regionalklasse, Schadenfreiheitsrabatt und gewählter 
                Tarif. Grundsätzlich gilt: <strong>E-Autos sind nicht teurer zu versichern als 
                vergleichbare Verbrenner</strong> – oft sogar günstiger.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                <div className="bg-white p-6 rounded-lg border-2 border-blue-500 shadow-sm text-center">
                  <div className="text-sm text-gray-600 mb-1">Kfz-Haftpflicht</div>
                  <div className="text-3xl font-bold text-blue-600">ab 119 €</div>
                  <div className="text-xs text-gray-500 mt-1">pro Jahr</div>
                </div>
                <div className="bg-white p-6 rounded-lg border-2 border-emerald-500 shadow-sm text-center">
                  <div className="text-sm text-gray-600 mb-1">Teilkasko</div>
                  <div className="text-3xl font-bold text-emerald-600">200-500 €</div>
                  <div className="text-xs text-gray-500 mt-1">pro Jahr (Richtwert)</div>
                </div>
                <div className="bg-white p-6 rounded-lg border-2 border-purple-500 shadow-sm text-center">
                  <div className="text-sm text-gray-600 mb-1">Vollkasko</div>
                  <div className="text-3xl font-bold text-purple-600">500-1.500 €</div>
                  <div className="text-xs text-gray-500 mt-1">pro Jahr (Richtwert)</div>
                </div>
              </div>

              <div className="bg-gray-50 rounded-xl p-6 mb-6">
                <h3 className="font-bold text-lg text-gray-900 mb-4">
                  Kostenbeispiele nach E-Auto-Modell (Vollkasko, 2025)
                </h3>
                <div className="overflow-x-auto">
                  <table className="w-full text-sm">
                    <thead>
                      <tr className="border-b-2 border-gray-300">
                        <th className="text-left py-3 pr-4">Modell</th>
                        <th className="text-right py-3 px-4">Jahresbeitrag*</th>
                        <th className="text-right py-3 pl-4">vs. Verbrenner</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="border-b border-gray-200">
                        <td className="py-3 pr-4">Renault Zoe / Fiat 500e</td>
                        <td className="text-right py-3 px-4 font-semibold">400-700 €</td>
                        <td className="text-right py-3 pl-4 text-emerald-600">ähnlich</td>
                      </tr>
                      <tr className="border-b border-gray-200">
                        <td className="py-3 pr-4">VW ID.3</td>
                        <td className="text-right py-3 px-4 font-semibold">600-900 €</td>
                        <td className="text-right py-3 pl-4 text-emerald-600">8% günstiger</td>
                      </tr>
                      <tr className="border-b border-gray-200">
                        <td className="py-3 pr-4">Audi Q4 e-tron</td>
                        <td className="text-right py-3 px-4 font-semibold">700-1.100 €</td>
                        <td className="text-right py-3 pl-4 text-emerald-600">25% günstiger</td>
                      </tr>
                      <tr className="border-b border-gray-200">
                        <td className="py-3 pr-4">Tesla Model 3</td>
                        <td className="text-right py-3 px-4 font-semibold">800-1.200 €</td>
                        <td className="text-right py-3 pl-4 text-yellow-600">ähnlich</td>
                      </tr>
                      <tr>
                        <td className="py-3 pr-4">Tesla Model S / BMW iX</td>
                        <td className="text-right py-3 px-4 font-semibold">1.000-1.500 €</td>
                        <td className="text-right py-3 pl-4 text-yellow-600">ähnlich</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <p className="text-xs text-gray-500 mt-4">
                  *Beispielwerte bei durchschnittlicher Schadenfreiheitsklasse (SF 10-15), 
                  private Nutzung, Garage, 12.000 km/Jahr. Tatsächliche Preise variieren.
                </p>
              </div>

              <div className="bg-emerald-50 border-l-4 border-emerald-500 p-6">
                <div className="flex items-start">
                  <TrendingUp className="w-6 h-6 text-emerald-600 mr-3 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-bold text-lg text-gray-900 mb-2">Preisentwicklung 2025</h3>
                    <p className="text-gray-700">
                      Laut Verivox sind die Vollkasko-Prämien für E-Autos 2025 im Schnitt um 
                      <strong> 30% gestiegen</strong> (Verbrenner: 25%). Der Grund: höhere 
                      Reparaturkosten und genauere Schadensdaten. Ein Vergleich lohnt sich 
                      jetzt besonders!
                    </p>
                  </div>
                </div>
              </div>
            </section>

            {/* Section 4: E-Auto vs. Verbrenner */}
            <section id="eauto-vs-verbrenner" className="mb-12 scroll-mt-24">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                4. E-Auto vs. Verbrenner: Versicherungsvergleich
              </h2>

              <p className="text-gray-700 mb-6 leading-relaxed">
                Eine häufige Frage: Sind Elektroautos teurer zu versichern als Benziner oder 
                Diesel? Die klare Antwort: <strong>Nein, nicht per se.</strong> Der GDV 
                (Gesamtverband der Deutschen Versicherungswirtschaft) hat festgestellt, dass 
                E-Autos in der Haftpflichtversicherung sogar bessere Schadenbilanzen aufweisen.
              </p>

              <div className="bg-blue-50 border-2 border-blue-200 rounded-xl p-6 mb-6">
                <h3 className="font-bold text-lg text-gray-900 mb-4">
                  GDV-Studie: E-Autos oft in günstigeren Typklassen
                </h3>
                <p className="text-gray-700 mb-4">
                  Eine Analyse von 18 Modellpaaren (E-Auto vs. Verbrenner-Zwilling) ergab:
                </p>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-emerald-600 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">
                      E-Autos verursachen in der <strong>Haftpflicht 10-15% weniger oder 
                      weniger teure Schäden</strong> als Verbrenner-Zwillinge
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-emerald-600 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">
                      VW Golf, Hyundai Kona und Smart: E-Varianten günstiger eingestuft
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-emerald-600 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">
                      Keine erhöhte Brandgefahr bei E-Autos nachgewiesen
                    </span>
                  </li>
                </ul>
              </div>

              <div className="bg-yellow-50 border-l-4 border-yellow-500 p-6 mb-6">
                <div className="flex items-start">
                  <AlertCircle className="w-6 h-6 text-yellow-600 mr-3 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-bold text-lg text-gray-900 mb-2">Aber: Höhere Reparaturkosten</h3>
                    <p className="text-gray-700">
                      Bei Kaskoschäden sieht es anders aus: Die Reparatur eines E-Autos kostet 
                      laut GDV im Schnitt <strong>25% mehr</strong> als bei einem vergleichbaren 
                      Verbrenner. Hauptgründe sind teure Akkus, spezialisierte Werkstätten und 
                      geschultes Personal. Das wirkt sich auf Vollkasko-Prämien aus.
                    </p>
                  </div>
                </div>
              </div>

              <p className="text-gray-700 leading-relaxed">
                Unterm Strich: Bei 17 von 29 verglichenen Modellen sparen E-Auto-Fahrer bares 
                Geld. Der Audi Q4 e-tron ist beispielsweise <strong>25% günstiger</strong> zu 
                versichern als der Audi Q5 mit Verbrenner. Auch der Mini Cooper SE und VW ID.3 
                sind günstiger als ihre Benzin-Pendants.
              </p>
            </section>

            {/* Section 5: Spartipps */}
            <section id="spartipps" className="mb-12 scroll-mt-24">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                5. Spartipps für Ihre Elektroauto-Versicherung
              </h2>

              <p className="text-gray-700 mb-6 leading-relaxed">
                Mit den richtigen Strategien können Sie bei Ihrer E-Auto-Versicherung 
                <strong> mehrere hundert Euro pro Jahr sparen</strong>. Hier die besten Tipps:
              </p>

              <div className="space-y-4 mb-6">
                <div className="bg-white p-6 rounded-lg border border-gray-200 shadow-sm">
                  <div className="flex items-start">
                    <div className="bg-emerald-100 text-emerald-700 rounded-full w-8 h-8 flex items-center justify-center font-bold mr-4 flex-shrink-0">1</div>
                    <div>
                      <h3 className="font-bold text-lg text-gray-900 mb-2">Doppelter Vergleich</h3>
                      <p className="text-gray-700">
                        Nutzen Sie Vergleichsportale wie Verivox oder Check24 und holen Sie 
                        zusätzlich ein Angebot bei der HUK24 ein. Zwischen günstigstem und 
                        drittem Angebot liegen oft <strong>über 100 Euro Unterschied</strong>.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="bg-white p-6 rounded-lg border border-gray-200 shadow-sm">
                  <div className="flex items-start">
                    <div className="bg-emerald-100 text-emerald-700 rounded-full w-8 h-8 flex items-center justify-center font-bold mr-4 flex-shrink-0">2</div>
                    <div>
                      <h3 className="font-bold text-lg text-gray-900 mb-2">Jährliche Zahlweise</h3>
                      <p className="text-gray-700">
                        Zahlen Sie den Beitrag jährlich statt monatlich. Monatliche Zahlung 
                        kostet durchschnittlich <strong>fast 10% mehr</strong>.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="bg-white p-6 rounded-lg border border-gray-200 shadow-sm">
                  <div className="flex items-start">
                    <div className="bg-emerald-100 text-emerald-700 rounded-full w-8 h-8 flex items-center justify-center font-bold mr-4 flex-shrink-0">3</div>
                    <div>
                      <h3 className="font-bold text-lg text-gray-900 mb-2">Selbstbeteiligung vereinbaren</h3>
                      <p className="text-gray-700">
                        Mit 150 Euro SB bei Teilkasko und 500 Euro bei Vollkasko sparen Sie 
                        durchschnittlich <strong>44% beim Beitrag</strong>.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="bg-white p-6 rounded-lg border border-gray-200 shadow-sm">
                  <div className="flex items-start">
                    <div className="bg-emerald-100 text-emerald-700 rounded-full w-8 h-8 flex items-center justify-center font-bold mr-4 flex-shrink-0">4</div>
                    <div>
                      <h3 className="font-bold text-lg text-gray-900 mb-2">Fahrerkreis einschränken</h3>
                      <p className="text-gray-700">
                        Ohne Fahranfänger im Fahrerkreis ist der Beitrag durchschnittlich 
                        <strong> 54% niedriger</strong>.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="bg-white p-6 rounded-lg border border-gray-200 shadow-sm">
                  <div className="flex items-start">
                    <div className="bg-emerald-100 text-emerald-700 rounded-full w-8 h-8 flex items-center justify-center font-bold mr-4 flex-shrink-0">5</div>
                    <div>
                      <h3 className="font-bold text-lg text-gray-900 mb-2">SF-Klasse mitnehmen</h3>
                      <p className="text-gray-700">
                        Beim Umstieg vom Verbrenner aufs E-Auto können Sie Ihre 
                        Schadenfreiheitsklasse vollständig übernehmen!
                      </p>
                    </div>
                  </div>
                </div>

                <div className="bg-white p-6 rounded-lg border border-gray-200 shadow-sm">
                  <div className="flex items-start">
                    <div className="bg-emerald-100 text-emerald-700 rounded-full w-8 h-8 flex items-center justify-center font-bold mr-4 flex-shrink-0">6</div>
                    <div>
                      <h3 className="font-bold text-lg text-gray-900 mb-2">Telematik-Tarife prüfen</h3>
                      <p className="text-gray-700">
                        Einige Versicherer bieten bis zu <strong>30% Rabatt</strong> für 
                        umsichtiges Fahren, gemessen per App.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-emerald-50 border-l-4 border-emerald-500 p-6">
                <div className="flex items-start">
                  <Lightbulb className="w-6 h-6 text-emerald-600 mr-3 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-bold text-lg text-gray-900 mb-2">Profi-Tipp: Sonderkündigungsrecht</h3>
                    <p className="text-gray-700">
                      Wenn sich Ihre Typklasse ändert und der Beitrag steigt, haben Sie ein 
                      <strong> Sonderkündigungsrecht</strong>. Nutzen Sie die Gelegenheit zum 
                      Wechsel in einen günstigeren Tarif!
                    </p>
                  </div>
                </div>
              </div>
            </section>

            {/* Section 6: Typklassen */}
            <section id="typklassen" className="mb-12 scroll-mt-24">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                6. Typklassen bei E-Autos
              </h2>

              <p className="text-gray-700 mb-6 leading-relaxed">
                Die Typklasse ist einer der wichtigsten Faktoren für Ihren Versicherungsbeitrag. 
                Sie wird jährlich vom GDV anhand von Schadensbilanzen neu berechnet. 
                <strong> Viele E-Autos sind günstiger eingestuft</strong> als ihre Verbrenner-Geschwister.
              </p>

              <div className="bg-gray-50 rounded-xl p-6 mb-6">
                <h3 className="font-bold text-lg text-gray-900 mb-4">
                  Typklassen-Änderungen 2025/2026: Beispiele
                </h3>
                <div className="space-y-3">
                  <div className="flex items-center justify-between p-3 bg-white rounded-lg">
                    <span className="font-medium">VW ID.4 Pure</span>
                    <span className="text-emerald-600 font-semibold">↓ Haftpflicht 16→14, Vollkasko 21→20</span>
                  </div>
                  <div className="flex items-center justify-between p-3 bg-white rounded-lg">
                    <span className="font-medium">Toyota Yaris Cross Hybrid</span>
                    <span className="text-red-600 font-semibold">↑ Haftpflicht 15→16, Vollkasko 18→20</span>
                  </div>
                  <div className="flex items-center justify-between p-3 bg-white rounded-lg">
                    <span className="font-medium">Audi Q4 e-tron, Mini Cooper SE</span>
                    <span className="text-emerald-600 font-semibold">Günstiger als Verbrenner-Pendants</span>
                  </div>
                </div>
              </div>

              <div className="bg-blue-50 border-l-4 border-blue-500 p-6">
                <div className="flex items-start">
                  <FileText className="w-6 h-6 text-blue-600 mr-3 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-bold text-lg text-gray-900 mb-2">So finden Sie Ihre Typklasse</h3>
                    <p className="text-gray-700">
                      Nutzen Sie das offizielle <strong>Typklassenverzeichnis des GDV</strong> 
                      unter gdv.de. Dort können Sie mit HSN und TSN Ihres Fahrzeugs die 
                      aktuelle Einstufung in Haftpflicht, Teilkasko und Vollkasko nachschlagen.
                    </p>
                  </div>
                </div>
              </div>
            </section>

            {/* Section 7: Anbieterwahl */}
            <section id="anbieterwahl" className="mb-12 scroll-mt-24">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                7. Den richtigen Anbieter finden
              </h2>

              <p className="text-gray-700 mb-6 leading-relaxed">
                Immer mehr Versicherer bieten spezielle E-Auto-Tarife mit erweiterten 
                Leistungen an. Achten Sie beim Vergleich nicht nur auf den Preis, sondern 
                auch auf die <strong>E-Auto-spezifischen Leistungen</strong>.
              </p>

              <div className="bg-gray-50 rounded-xl p-6 mb-6">
                <h3 className="font-bold text-lg text-gray-900 mb-4">
                  Bekannte Anbieter mit E-Auto-Tarifen
                </h3>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  <div className="bg-white p-4 rounded-lg text-center">
                    <span className="font-semibold text-gray-800">Allianz</span>
                    <p className="text-xs text-gray-500 mt-1">Komfort & Premium mit Allgefahrendeckung</p>
                  </div>
                  <div className="bg-white p-4 rounded-lg text-center">
                    <span className="font-semibold text-gray-800">HUK-COBURG</span>
                    <p className="text-xs text-gray-500 mt-1">Kasko PLUS für E-Autos</p>
                  </div>
                  <div className="bg-white p-4 rounded-lg text-center">
                    <span className="font-semibold text-gray-800">ADAC</span>
                    <p className="text-xs text-gray-500 mt-1">Bis 15% Rabatt für Mitglieder</p>
                  </div>
                  <div className="bg-white p-4 rounded-lg text-center">
                    <span className="font-semibold text-gray-800">VW Autoversicherung</span>
                    <p className="text-xs text-gray-500 mt-1">Spezial für ID.-Familie</p>
                  </div>
                </div>
              </div>

              <div className="bg-yellow-50 border-l-4 border-yellow-500 p-6">
                <div className="flex items-start">
                  <AlertCircle className="w-6 h-6 text-yellow-600 mr-3 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-bold text-lg text-gray-900 mb-2">Wichtig bei der Anbieterwahl</h3>
                    <p className="text-gray-700">
                      Achten Sie auf die <strong>Deckungssumme für Tierbiss-Folgeschäden</strong>! 
                      Bei einigen Anbietern ist diese auf wenige tausend Euro begrenzt – bei 
                      teuren Akkuschäden reicht das nicht aus. Mindestens 20.000 Euro sollten 
                      es sein, besser unbegrenzt.
                    </p>
                  </div>
                </div>
              </div>
            </section>

            {/* Fazit */}
            <section id="fazit" className="mb-8 md:mb-12">
              <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl p-6 md:p-8 text-white">
                <h2 className="text-2xl md:text-3xl font-bold mb-4">
                  Fazit: Die richtige E-Auto-Versicherung finden
                </h2>
                <p className="text-base md:text-lg leading-relaxed mb-4">
                  Eine Elektroauto-Versicherung muss keine teure Angelegenheit sein. E-Autos 
                  sind oft <strong>günstiger zu versichern</strong> als vergleichbare Verbrenner, 
                  da sie in der Haftpflicht bessere Schadenbilanzen aufweisen. Die Kfz-Haftpflicht 
                  startet bereits ab 119 Euro pro Jahr.
                </p>
                <p className="text-base md:text-lg leading-relaxed mb-6">
                  <strong>Entscheidend ist der richtige Schutz:</strong> Achten Sie auf 
                  Allgefahrendeckung für den Akku, ausreichende Tierbiss-Folgeschäden-Absicherung 
                  (mindestens 20.000 Euro) und Überspannungsschutz beim Laden. Bei Neuwagen 
                  empfiehlt sich eine Vollkasko mit umfassenden E-Auto-Leistungen.
                </p>
                <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
                  <p className="text-lg font-semibold">
                    💡 Unser Tipp: Nutzen Sie den <strong>doppelten Vergleich</strong> – erst 
                    Verivox oder Check24, dann HUK24 – und sparen Sie bis zu mehreren hundert 
                    Euro pro Jahr!
                  </p>
                </div>
              </div>
            </section>

            {/* CTA Box */}
            <div className="bg-gradient-to-r from-emerald-600 to-teal-600 rounded-2xl p-8 text-center text-white mb-8">
              <h3 className="text-2xl font-bold mb-4">
                🔋 Was kostet Ihr E-Auto insgesamt?
              </h3>
              <p className="text-lg mb-6 max-w-2xl mx-auto">
                Berechnen Sie mit unserem Kosten-Rechner alle Kosten Ihres Elektroautos – 
                inklusive Versicherung, Strom, Wartung und Wertverlust.
              </p>
              <a 
                href="/rechner/kostenrechner"
                className="inline-flex items-center gap-3 bg-white text-emerald-600 font-bold px-8 py-4 rounded-full hover:shadow-2xl hover:scale-105 transition-all duration-200"
              >
                <Calculator className="w-6 h-6" />
                Kostenvergleich starten
              </a>
            </div>
          </div>
        </article>

        {/* Quellen */}
        <div className="mt-8 bg-gray-100 rounded-xl p-6 text-sm text-gray-600">
          <h3 className="font-bold text-gray-800 mb-3">📚 Quellen & Referenzen:</h3>
          <ul className="space-y-1 text-xs">
            <li>• GDV (Gesamtverband der Deutschen Versicherungswirtschaft): Typklassenstatistik 2025/2026 (Stand: September 2025)</li>
            <li>• Verivox Versicherungsvergleich GmbH: Kfz-Versicherungsindex für Elektroautos (Stand: Dezember 2025)</li>
            <li>• Finanztip: Ratgeber E-Autoversicherung (Stand: September 2025)</li>
            <li>• ADAC: Kfz-Versicherung für Elektroautos – Tipps und Empfehlungen (Stand: Dezember 2024)</li>
            <li>• Allianz, HUK-COBURG, ADAC Autoversicherung: Produktinformationen E-Auto-Tarife (Stand: Dezember 2025)</li>
          </ul>
          <p className="mt-4 leading-relaxed">
            <strong>Haftungsausschluss:</strong> Alle Angaben ohne Gewähr. Versicherungsbeiträge 
            sind Richtwerte und können je nach individuellen Faktoren (Typklasse, Regionalklasse, 
            Schadenfreiheitsklasse, gewähltem Tarif) stark variieren. Für verbindliche Angebote 
            wenden Sie sich bitte an die jeweiligen Versicherungsgesellschaften oder nutzen 
            Sie Vergleichsportale. Die genannten Preise und Leistungen können sich ändern.
          </p>
        </div>

        {/* Related Articles */}
        <div className="mt-8 bg-blue-50 rounded-xl p-6">
          <h3 className="text-lg font-bold text-gray-800 mb-4">
            📚 Weitere hilfreiche Artikel:
          </h3>
          <div className="space-y-2">
            <a href="/rechner/kostenrechner" className="block text-blue-600 hover:underline text-sm md:text-base">
              → Was kostet ein Elektroauto wirklich? Alle Kosten im Überblick
            </a>
            <a href="/ratgeber/wallbox-kosten-installation" className="block text-blue-600 hover:underline text-sm md:text-base">
              → Wallbox Kosten & Installation: Alles was Sie wissen müssen
            </a>
            <a href="/ratgeber/thg-quote" className="block text-blue-600 hover:underline text-sm md:text-base">
              → THG-Quote 2025: So verdienen Sie mit Ihrem E-Auto
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
