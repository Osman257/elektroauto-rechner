import React, { useEffect } from 'react';
import { 
  ArrowLeft, 
  AlertTriangle, 
  Battery, 
  CheckCircle, 
  Wrench,
  Shield,
  Info,
  Truck,
  X,
  Settings,
  Calculator
} from 'lucide-react';
import SEO from '../components/SEO';
import Header from '../components/Header';

export default function EAutoSchiebenPage() {

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-white">
      <SEO
        title="Kann man ein E-Auto schieben wenn es leer ist? | e-Autowelt"
        description="E-Auto schieben bei leerer Batterie: Ist das möglich? Erfahren Sie, was technisch passiert, welche Gefahren bestehen und welche Alternativen es gibt."
        canonicalPath="/ratgeber/e-auto-schieben"
        keywords="e-auto schieben, eauto panne, elektroauto akku leer, elektroauto schieben, e-auto leer schieben, elektroauto batterie leer, e-auto abschleppen"
        ogImage="/images/ratgeber/e-auto-schieben-og.webp"
        ogType="article"
        publishedDate="2025-01-28T10:00:00Z"
        modifiedDate="2025-01-28T10:00:00Z"
      />

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
          <div className="relative h-64 md:h-96 bg-gradient-to-br from-red-600 to-orange-600 overflow-hidden">
            <img 
              src="/images/ratgeber/e-auto-schieben-hero.webp"
              alt="Kann man ein E-Auto schieben wenn die Batterie leer ist?"
              className="w-full h-full object-cover opacity-90"
              loading="lazy"
              decoding="async"
              
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
            <div className="absolute bottom-0 left-0 right-0 p-6 md:p-10 text-white">
              <div className="flex items-center gap-3 mb-3">
                <div className="bg-white/30 backdrop-blur-md p-2 rounded-lg shadow-lg">
                  <AlertTriangle className="w-6 h-6 md:w-8 md:h-8" />
                </div>
                <span className="text-xs md:text-sm bg-white/30 backdrop-blur-md px-3 py-1 rounded-full font-semibold shadow-lg">📖 8 Min. Lesezeit</span>
                <span className="text-xs md:text-sm bg-white/30 backdrop-blur-md px-3 py-1 rounded-full font-semibold shadow-lg">Aktualisiert am 8. Juni 2025</span>
              </div>
              <h1 className="text-2xl md:text-4xl lg:text-5xl font-bold leading-tight">
                Kann man ein E-Auto schieben wenn es leer ist? 
              </h1>
            </div>
          </div>

          {/* Article Content */}
          <div className="p-6 md:p-10">
            {/* Intro */}
            <div className="mb-8 md:mb-12">
              <p className="text-lg md:text-xl text-gray-600 leading-relaxed mb-4">
                Die Batterie ist leer, das E-Auto steht mitten auf der Straße – kann man es einfach zur Seite schieben wie einen Verbrenner mit leerem Tank? Diese Frage stellen sich viele E-Auto-Fahrer, besonders wenn sie zum ersten Mal mit einer leeren Batterie konfrontiert werden. Die kurze Antwort: <strong>Ja, aber mit Einschränkungen und Vorsicht.</strong> Die längere Antwort ist komplexer und hängt vom Fahrzeugmodell, der Situation und technischen Details ab.
              </p>
              <div className="bg-red-50 border-2 border-red-200 rounded-xl p-6">
                <p className="text-base md:text-lg text-gray-700 leading-relaxed">
                  <strong className="text-red-700">⚠️ Wichtige Warnung:</strong> Das Schieben eines E-Autos sollte nur in Notfällen und auf kurze Distanzen erfolgen. Bei einigen Modellen kann unsachgemäßes Schieben zu Schäden am Antriebsstrang führen und die Garantie erlöschen lassen. In den meisten Fällen ist professionelles Abschleppen die sicherere Option.
                </p>
              </div>
            </div>

            {/* Inhaltsverzeichnis */}
            <nav className="bg-gray-50 rounded-xl p-6 mb-8 md:mb-12">
              <h2 className="text-xl md:text-2xl font-bold text-gray-800 mb-4">
                Inhaltsverzeichnis
              </h2>
              <ol className="space-y-2 text-sm md:text-base">
                <li><a href="#technisch" className="text-blue-600 hover:underline">1. Was passiert technisch beim Schieben?</a></li>
                <li><a href="#möglich" className="text-blue-600 hover:underline">2. Ist Schieben grundsätzlich möglich?</a></li>
                <li><a href="#gefahren" className="text-blue-600 hover:underline">3. Gefahren und Risiken beim Schieben</a></li>
                <li><a href="#anleitung" className="text-blue-600 hover:underline">4. Richtig schieben: Schritt-für-Schritt</a></li>
                <li><a href="#modelle" className="text-blue-600 hover:underline">5. Modellspezifische Unterschiede</a></li>
                <li><a href="#alternativen" className="text-blue-600 hover:underline">6. Bessere Alternativen zum Schieben</a></li>
                <li><a href="#vorbeugen" className="text-blue-600 hover:underline">7. So vermeiden Sie eine leere Batterie</a></li>
                <li><a href="#notfall" className="text-blue-600 hover:underline">8. Notfall-Checkliste: Batterie leer</a></li>
                <li><a href="#faq" className="text-blue-600 hover:underline">9. Häufige Fragen (FAQ)</a></li>
                <li><a href="#fazit" className="text-blue-600 hover:underline">10. Fazit</a></li>
              </ol>
            </nav>

            {/* Section 1: Was passiert technisch */}
            <section id="technisch" className="mb-8 md:mb-12">
              <h2 className="text-xl md:text-3xl font-bold text-gray-800 mb-4 md:mb-6 flex items-center gap-3">
                <Wrench className="w-6 h-6 md:w-8 md:h-8 text-blue-600" />
                Was passiert technisch beim Schieben eines E-Autos?
              </h2>
              
              <p className="text-sm md:text-base text-gray-700 leading-relaxed mb-6">
                Im Gegensatz zu Verbrennern haben Elektroautos eine <strong>direkte mechanische Verbindung zwischen Motor und Rädern</strong> – es gibt keine Kupplung, die getrennt werden kann. Wenn Sie ein E-Auto schieben, drehen sich die Räder, die Antriebswelle dreht sich mit, und der Elektromotor wird dadurch zwangsweise mitgedreht.
              </p>

              <div className="bg-blue-50 rounded-xl p-6 mb-6">
                <h3 className="font-bold text-gray-800 mb-4 flex items-center gap-2">
                  Was dabei im Motor passiert:
                </h3>
                <div className="space-y-4 text-sm md:text-base text-gray-700">
                  <div className="flex items-start gap-3">
                    <div className="bg-blue-600 text-white rounded-full w-6 h-6 flex items-center justify-center font-bold flex-shrink-0 text-xs">1</div>
                    <div>
                      <strong>Rekuperation (Energierückgewinnung):</strong> Der drehende Motor wirkt als Generator und erzeugt Strom. Dieser wird normalerweise in die Batterie zurückgespeist. Bei komplett leerer Batterie kann minimal Energie zurückgewonnen werden.
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="bg-blue-600 text-white rounded-full w-6 h-6 flex items-center justify-center font-bold flex-shrink-0 text-xs">2</div>
                    <div>
                      <strong>Magnetischer Widerstand:</strong> Die Permanentmagnete im Motor erzeugen einen spürbaren Widerstand beim Drehen. Das ist der Grund, warum sich E-Autos schwerer schieben lassen als Verbrenner im Leerlauf.
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="bg-blue-600 text-white rounded-full w-6 h-6 flex items-center justify-center font-bold flex-shrink-0 text-xs">3</div>
                    <div>
                      <strong>Leistungselektronik:</strong> Bei komplett leerer Batterie ist die Motorsteuerung (Inverter) normalerweise abgeschaltet. Das verhindert unkontrollierte Stromflüsse, die Schäden verursachen könnten.
                    </div>
                  </div>
                </div>
              </div>

              {/* Vergleich Verbrenner vs E-Auto */}
              <div className="grid md:grid-cols-2 gap-4 mb-6">
                <div className="bg-gray-100 rounded-xl p-6">
                  <h3 className="font-bold text-gray-800 mb-3">🚗 Verbrenner (mit Kupplung)</h3>
                  <div className="text-sm text-gray-700 space-y-2">
                    <div className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-green-600 flex-shrink-0 mt-0.5" />
                      <div>Motor kann durch Kupplung getrennt werden</div>
                    </div>
                    <div className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-green-600 flex-shrink-0 mt-0.5" />
                      <div>Leichter zu schieben (Leerlauf)</div>
                    </div>
                    <div className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-green-600 flex-shrink-0 mt-0.5" />
                      <div>Keine elektrischen Komponenten betroffen</div>
                    </div>
                  </div>
                </div>

                <div className="bg-blue-100 rounded-xl p-6">
                  <h3 className="font-bold text-gray-800 mb-3">⚡ Elektroauto</h3>
                  <div className="text-sm text-gray-700 space-y-2">
                    <div className="flex items-start gap-2">
                      <AlertTriangle className="w-4 h-4 text-orange-600 flex-shrink-0 mt-0.5" />
                      <div>Motor direkt mit Rädern verbunden</div>
                    </div>
                    <div className="flex items-start gap-2">
                      <AlertTriangle className="w-4 h-4 text-orange-600 flex-shrink-0 mt-0.5" />
                      <div>Magnetischer Widerstand spürbar</div>
                    </div>
                    <div className="flex items-start gap-2">
                      <AlertTriangle className="w-4 h-4 text-orange-600 flex-shrink-0 mt-0.5" />
                      <div>Potenziell Strom im System</div>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* Section 2: Ist Schieben möglich? */}
            <section id="möglich" className="mb-8 md:mb-12">
              <h2 className="text-xl md:text-3xl font-bold text-gray-800 mb-4 md:mb-6 flex items-center gap-3">
                <CheckCircle className="w-6 h-6 md:w-8 md:h-8 text-green-600" />
                Ist Schieben grundsätzlich möglich?
              </h2>

              <p className="text-sm md:text-base text-gray-700 leading-relaxed mb-6">
                <strong>Ja, ein E-Auto kann geschoben werden</strong> – aber es ist deutlich anstrengender als bei einem Verbrenner. Die meisten Hersteller bestätigen in ihren Bedienungsanleitungen, dass kurzzeitiges Schieben auf kurze Distanzen (wenige Meter) möglich ist, warnen aber vor längeren Strecken.
              </p>

              {/* Tabelle: Was sagen die Hersteller */}
              <div className="overflow-x-auto mb-6">
                <table className="w-full bg-white rounded-xl overflow-hidden shadow-lg">
                  <thead className="bg-gradient-to-r from-green-600 to-blue-600 text-white">
                    <tr>
                      <th className="p-3 md:p-4 text-left text-sm md:text-base">Hersteller/Modell</th>
                      <th className="p-3 md:p-4 text-left text-sm md:text-base">Offizielle Aussage</th>
                      <th className="p-3 md:p-4 text-left text-sm md:text-base">Max. Distanz</th>
                    </tr>
                  </thead>
                  <tbody className="text-sm md:text-base">
                    <tr className="border-b border-gray-200 hover:bg-gray-50">
                      <td className="p-3 md:p-4 font-semibold">Tesla Model 3/Y</td>
                      <td className="p-3 md:p-4 text-gray-700">Nur in Notfällen, Fahrzeug in N-Gang</td>
                      <td className="p-3 md:p-4 text-gray-700">~10 Meter</td>
                    </tr>
                    <tr className="border-b border-gray-200 hover:bg-gray-50">
                      <td className="p-3 md:p-4 font-semibold">VW ID.3/ID.4</td>
                      <td className="p-3 md:p-4 text-gray-700">Kurzzeitig möglich, Handbremse lösen</td>
                      <td className="p-3 md:p-4 text-gray-700">~15 Meter</td>
                    </tr>
                    <tr className="border-b border-gray-200 hover:bg-gray-50">
                      <td className="p-3 md:p-4 font-semibold">BMW iX/i4</td>
                      <td className="p-3 md:p-4 text-gray-700">Abschleppen empfohlen</td>
                      <td className="p-3 md:p-4 text-gray-700">Nur Notfall</td>
                    </tr>
                    <tr className="border-b border-gray-200 hover:bg-gray-50">
                      <td className="p-3 md:p-4 font-semibold">Hyundai Ioniq 5/Kia EV6</td>
                      <td className="p-3 md:p-4 text-gray-700">Möglich mit freigeschaltetem Motor</td>
                      <td className="p-3 md:p-4 text-gray-700">~20 Meter</td>
                    </tr>
                    <tr className="border-b border-gray-200 hover:bg-gray-50">
                      <td className="p-3 md:p-4 font-semibold">Renault Zoe</td>
                      <td className="p-3 md:p-4 text-gray-700">Schieben OK, langsam</td>
                      <td className="p-3 md:p-4 text-gray-700">Unbegrenzt (langsam)</td>
                    </tr>
                  </tbody>
                </table>
                <div className="text-xs text-gray-500 mt-2 italic">Quelle: Herstellerangaben, Bedienungsanleitungen (Stand 2025)</div>
              </div>

              {/* Wann ist Schieben OK? */}
              <div className="grid md:grid-cols-2 gap-4">
                <div className="bg-green-50 border-2 border-green-500 rounded-xl p-6">
                  <h3 className="font-bold text-gray-800 mb-3 flex items-center gap-2">
                    Schieben OK:
                  </h3>
                  <div className="space-y-2 text-sm text-gray-700">
                    <div>✅ Auf parkplatz zur Seite schieben</div>
                    <div>✅ Aus Gefahrenzone (max. 10-20m)</div>
                    <div>✅ Bei komplett ebener Fläche</div>
                    <div>✅ Mit mehreren Personen</div>
                    <div>✅ Sehr langsam (&lt;1 km/h)</div>
                  </div>
                </div>

                <div className="bg-red-50 border-2 border-red-500 rounded-xl p-6">
                  <h3 className="font-bold text-gray-800 mb-3 flex items-center gap-2">
                    Schieben NICHT OK:
                  </h3>
                  <div className="space-y-2 text-sm text-gray-700">
                    <div>❌ Über längere Strecken (&gt;50m)</div>
                    <div>❌ Bergab oder bergauf</div>
                    <div>❌ Mit hoher Geschwindigkeit</div>
                    <div>❌ Alleine (zu schwer)</div>
                    <div>❌ Bei aktiven Warnlampen</div>
                  </div>
                </div>
              </div>
            </section>

            {/* Section 3: Gefahren */}
            <section id="gefahren" className="mb-8 md:mb-12">
              <h2 className="text-xl md:text-3xl font-bold text-gray-800 mb-4 md:mb-6 flex items-center gap-3">
                <AlertTriangle className="w-6 h-6 md:w-8 md:h-8 text-red-600" />
                Gefahren und Risiken beim Schieben
              </h2>

              <p className="text-sm md:text-base text-gray-700 leading-relaxed mb-6">
                Das Schieben eines E-Autos birgt einige Risiken, die Sie kennen sollten. Diese können von technischen Schäden bis hin zu Sicherheitsrisiken reichen.
              </p>

              {/* Risiko-Cards */}
              <div className="space-y-4 mb-6">
                <div className="bg-red-50 border-l-4 border-red-600 rounded-lg p-6">
                  <h3 className="font-bold text-red-800 mb-2 flex items-center gap-2">
                    Schäden am Antriebsstrang
                  </h3>
                  <p className="text-sm text-gray-700 mb-3">
                    Wenn der Motor zwangsweise gedreht wird, können in seltenen Fällen Schäden an der Leistungselektronik oder den Motorwicklungen entstehen – insbesondere wenn das Fahrzeug zu schnell geschoben wird oder über längere Strecken.
                  </p>
                  <div className="text-sm text-gray-600 italic">
                    ⚠️ Mögliche Folge: Teure Reparaturen (€3.000 - €8.000), Garantieverlust
                  </div>
                </div>

                <div className="bg-orange-50 border-l-4 border-orange-600 rounded-lg p-6">
                  <h3 className="font-bold text-orange-800 mb-2 flex items-center gap-2">
                    Bremskraftverstärker funktioniert nicht
                  </h3>
                  <p className="text-sm text-gray-700 mb-3">
                    Bei leerer Batterie ist der elektrische Bremskraftverstärker inaktiv. Das bedeutet: <strong>Die Bremse funktioniert, aber Sie müssen VIEL STÄRKER treten</strong> als gewohnt. Viele Fahrer unterschätzen das.
                  </p>
                  <div className="text-sm text-gray-600 italic">
                    ⚠️ Mögliche Folge: Auffahrunfälle, verlängerte Bremswege
                  </div>
                </div>

                <div className="bg-orange-50 border-l-4 border-orange-600 rounded-lg p-6">
                  <h3 className="font-bold text-orange-800 mb-2 flex items-center gap-2">
                    Lenkung wird schwergängig
                  </h3>
                  <p className="text-sm text-gray-700 mb-3">
                    Die elektrische Servolenkung fällt aus – Sie müssen mit reiner Muskelkraft lenken. Bei modernen E-Autos (oft 2+ Tonnen) ist das extrem anstrengend und bei engen Kurven kaum möglich.
                  </p>
                  <div className="text-sm text-gray-600 italic">
                    ⚠️ Mögliche Folge: Unkontrollierbare Lenkbewegungen
                  </div>
                </div>

                <div className="bg-yellow-50 border-l-4 border-yellow-600 rounded-lg p-6">
                  <h3 className="font-bold text-yellow-800 mb-2 flex items-center gap-2">
                    Parksperre kann aktiviert sein
                  </h3>
                  <p className="text-sm text-gray-700 mb-3">
                    Bei vielen E-Autos aktiviert sich die elektronische Parksperre automatisch bei leerer Batterie. In diesem Fall lässt sich das Auto GAR NICHT bewegen, solange die Parksperre nicht manuell gelöst wird (oft nur mit Notentriegelung).
                  </p>
                  <div className="text-sm text-gray-600 italic">
                    ⚠️ Lösung: Bedienungsanleitung → Notentriegelung Parksperre
                  </div>
                </div>
              </div>
            </section>

            {/* Section 4: Richtig schieben */}
            <section id="anleitung" className="mb-8 md:mb-12">
              <h2 className="text-xl md:text-3xl font-bold text-gray-800 mb-4 md:mb-6 flex items-center gap-3">
                <Info className="w-6 h-6 md:w-8 md:h-8 text-blue-600" />
                Richtig schieben: Schritt-für-Schritt Anleitung
              </h2>

              <p className="text-sm md:text-base text-gray-700 leading-relaxed mb-6">
                Wenn Sie Ihr E-Auto unbedingt schieben müssen (z.B. aus einer Gefahrenzone), folgen Sie diesen Schritten:
              </p>

              <div className="bg-blue-50 rounded-xl p-6 mb-6">
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="bg-blue-600 text-white rounded-full w-10 h-10 flex items-center justify-center font-bold flex-shrink-0">1</div>
                    <div>
                      <h3 className="font-bold text-gray-800 mb-2">Fahrzeug in Neutralstellung (N) bringen</h3>
                      <p className="text-sm text-gray-700">
                        Versuchen Sie, den Gang auf "N" (Neutral) zu stellen. Bei vielen E-Autos geht das auch bei leerer Batterie noch kurzzeitig, wenn Sie die Start-Taste mehrfach drücken. Konsultieren Sie die Bedienungsanleitung für Ihr spezifisches Modell.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="bg-blue-600 text-white rounded-full w-10 h-10 flex items-center justify-center font-bold flex-shrink-0">2</div>
                    <div>
                      <h3 className="font-bold text-gray-800 mb-2">Elektronische Parksperre lösen</h3>
                      <p className="text-sm text-gray-700 mb-2">
                        Falls vorhanden, lösen Sie die elektronische Parksperre. Bei komplett leerer Batterie:
                      </p>
                      <ul className="text-sm text-gray-700 list-disc list-inside space-y-1">
                        <li>Suchen Sie die <strong>Notentriegelung</strong> (oft im Kofferraum unter Abdeckung)</li>
                        <li>Bedienungsanleitung hat genaue Anleitung + Bilder</li>
                        <li>Meist: Kleiner Hebel oder Zugmechanismus</li>
                      </ul>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="bg-blue-600 text-white rounded-full w-10 h-10 flex items-center justify-center font-bold flex-shrink-0">3</div>
                    <div>
                      <h3 className="font-bold text-gray-800 mb-2">Handbremse/Feststellbremse lösen</h3>
                      <p className="text-sm text-gray-700">
                        Lösen Sie die Handbremse. Bei elektronischen Handbremsen kann das bei leerer Batterie schwierig sein – auch hier gibt es oft eine mechanische Notentriegelung.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="bg-blue-600 text-white rounded-full w-10 h-10 flex items-center justify-center font-bold flex-shrink-0">4</div>
                    <div>
                      <h3 className="font-bold text-gray-800 mb-2">Mehrere Personen zum Schieben</h3>
                      <p className="text-sm text-gray-700">
                        E-Autos wiegen 1,8 - 2,5 Tonnen. Sie brauchen <strong>mindestens 2-3 kräftige Personen</strong> zum Schieben. Eine Person sollte am Lenkrad bleiben.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="bg-blue-600 text-white rounded-full w-10 h-10 flex items-center justify-center font-bold flex-shrink-0">5</div>
                    <div>
                      <h3 className="font-bold text-gray-800 mb-2">Langsam und kontrolliert schieben</h3>
                      <p className="text-sm text-gray-700">
                        Schieben Sie <strong>sehr langsam</strong> (Schrittgeschwindigkeit). Der magnetische Widerstand ist deutlich spürbar. Die Person am Lenkrad muss mit schwerer Lenkung und schwergängiger Bremse rechnen.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="bg-blue-600 text-white rounded-full w-10 h-10 flex items-center justify-center font-bold flex-shrink-0">6</div>
                    <div>
                      <h3 className="font-bold text-gray-800 mb-2">Nur kurze Distanzen</h3>
                      <p className="text-sm text-gray-700">
                        Schieben Sie nur <strong>10-20 Meter</strong> zur Seite. Für längere Strecken MUSS das Fahrzeug abgeschleppt werden.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Wichtiger Hinweis */}
              <div className="bg-red-50 border-2 border-red-500 rounded-xl p-6">
                <h3 className="font-bold text-red-800 mb-3 flex items-center gap-2">
                  <AlertTriangle className="w-5 h-5" />
                  NIEMALS bergab schieben!
                </h3>
                <p className="text-sm text-gray-700">
                  Schieben Sie ein E-Auto NIEMALS bergab! Ohne funktionierende Bremskraftverstärkung und schwergängiger Lenkung wird das Fahrzeug unkontrollierbar. Es besteht <strong>Lebensgefahr</strong> für Schiebende und umstehende Personen.
                </p>
              </div>
            </section>

            {/* Section 5: Modellspezifisch */}
            <section id="modelle" className="mb-8 md:mb-12">
              <h2 className="text-xl md:text-3xl font-bold text-gray-800 mb-4 md:mb-6 flex items-center gap-3">
                <Settings className="w-6 h-6 md:w-8 md:h-8 text-purple-600" />
                Modellspezifische Unterschiede
              </h2>

              <p className="text-sm md:text-base text-gray-700 leading-relaxed mb-6">
                Jedes E-Auto-Modell hat eigene Besonderheiten beim Schieben. Hier die wichtigsten:
              </p>

              {/* Modell-Cards */}
              <div className="grid md:grid-cols-2 gap-4 mb-6">
                <div className="bg-white border-2 border-gray-200 rounded-xl p-6">
                  <h3 className="font-bold text-gray-800 mb-3">Tesla (Model 3, Y, S, X)</h3>
                  <div className="text-sm text-gray-700 space-y-2">
                    <div><strong>Neutral-Modus:</strong> Über Touchscreen → Service → Towing Mode</div>
                    <div><strong>Parksperre:</strong> Automatisch bei Fahrzeug-Aus, Notentriegelung unter Getränkehalter</div>
                    <div><strong>Schieben:</strong> Nur wenige Meter, dann Transport-Modus benutzen</div>
                    <div className="text-red-600"><strong>⚠️</strong> Bei Model S/X: Luftfederung beachten!</div>
                  </div>
                </div>

                <div className="bg-white border-2 border-gray-200 rounded-xl p-6">
                  <h3 className="font-bold text-gray-800 mb-3">VW ID. Familie (ID.3, ID.4, ID.5)</h3>
                  <div className="text-sm text-gray-700 space-y-2">
                    <div><strong>Neutral:</strong> Taste "P" gedrückt halten → dann "N"</div>
                    <div><strong>Parksperre:</strong> Elektronisch, Notentriegelung Kofferraum</div>
                    <div><strong>Schieben:</strong> Max. 15m mit 3-4km/h</div>
                    <div className="text-green-600"><strong>✓</strong> Relativ unkompliziert zu schieben</div>
                  </div>
                </div>

                <div className="bg-white border-2 border-gray-200 rounded-xl p-6">
                  <h3 className="font-bold text-gray-800 mb-3">BMW (iX, i4, iX3)</h3>
                  <div className="text-sm text-gray-700 space-y-2">
                    <div><strong>Neutral:</strong> Gangwahlschalter in N-Position</div>
                    <div><strong>Parksperre:</strong> Automatische Parksperre P</div>
                    <div><strong>Schieben:</strong> Hersteller empfiehlt professionelles Abschleppen</div>
                    <div className="text-red-600"><strong>⚠️</strong> Garantie bei Schäden durch Schieben gefährdet</div>
                  </div>
                </div>

                <div className="bg-white border-2 border-gray-200 rounded-xl p-6">
                  <h3 className="font-bold text-gray-800 mb-3">Hyundai/Kia (Ioniq 5, EV6)</h3>
                  <div className="text-sm text-gray-700 space-y-2">
                    <div><strong>Neutral:</strong> Taste "N" drücken</div>
                    <div><strong>Parksperre:</strong> Elektronisch, Notlösung unter Mittelkonsole</div>
                    <div><strong>Schieben:</strong> Bis 20m möglich</div>
                    <div className="text-green-600"><strong>✓</strong> Bedienungsanleitung enthält detaillierte Anleitung</div>
                  </div>
                </div>
              </div>
            </section>

            {/* Section 6: Alternativen */}
            <section id="alternativen" className="mb-8 md:mb-12">
              <h2 className="text-xl md:text-3xl font-bold text-gray-800 mb-4 md:mb-6 flex items-center gap-3">
                <Truck className="w-6 h-6 md:w-8 md:h-8 text-green-600" />
                Bessere Alternativen zum Schieben
              </h2>

              <p className="text-sm md:text-base text-gray-700 leading-relaxed mb-6">
                In den meisten Fällen gibt es bessere und sicherere Alternativen zum Schieben:
              </p>

              {/* Alternativen-Grid */}
              <div className="grid md:grid-cols-2 gap-6 mb-6">
                <div className="bg-green-50 border-2 border-green-500 rounded-xl p-6">
                  <h3 className="font-bold text-green-800 mb-3 flex items-center gap-2">
                    <span className="text-2xl">🔌</span>
                    Mobile Ladehilfe rufen
                  </h3>
                  <p className="text-sm text-gray-700 mb-3">
                    Viele Pannendienste (ADAC, ACE) bieten <strong>mobile Notladung</strong> an. Mit einem mobilen Ladegerät wird Ihr E-Auto vor Ort mit 5-10 kWh geladen – genug für 30-50 km Reichweite.
                  </p>
                  <div className="text-sm space-y-1">
                    <div>💰 <strong>Kosten:</strong> 50-150€ (Mitglieder oft kostenlos)</div>
                    <div>⏱️ <strong>Dauer:</strong> 30-60 Min. Ladezeit</div>
                    <div>✅ <strong>Vorteil:</strong> Schonend, keine Garantiegefährdung</div>
                  </div>
                </div>

                <div className="bg-blue-50 border-2 border-blue-500 rounded-xl p-6">
                  <h3 className="font-bold text-blue-800 mb-3 flex items-center gap-2">
                    <span className="text-2xl">🚛</span>
                    Professioneller Abschleppdienst
                  </h3>
                  <p className="text-sm text-gray-700 mb-3">
                    E-Autos sollten am besten auf einem <strong>Tieflader</strong> transportiert werden. Viele Abschleppdienste haben spezielle E-Auto-Transporter.
                  </p>
                  <div className="text-sm space-y-1">
                    <div>💰 <strong>Kosten:</strong> 150-300€ (je nach Entfernung)</div>
                    <div>⏱️ <strong>Dauer:</strong> 20-45 Min. Wartezeit</div>
                    <div>✅ <strong>Vorteil:</strong> 100% sicher, keine Schäden</div>
                  </div>
                </div>

                <div className="bg-purple-50 border-2 border-purple-500 rounded-xl p-6">
                  <h3 className="font-bold text-purple-800 mb-3 flex items-center gap-2">
                    <span className="text-2xl">🪫</span>
                    Powerbank für E-Autos
                  </h3>
                  <p className="text-sm text-gray-700 mb-3">
                    Manche Fahrer haben eine <strong>mobile Powerbank</strong> (z.B. ZipCharge Go) im Kofferraum. Diese kann 4-8 kWh liefern – genug für 20-40 km.
                  </p>
                  <div className="text-sm space-y-1">
                    <div>💰 <strong>Kosten:</strong> 400-800€ (Anschaffung)</div>
                    <div>⏱️ <strong>Dauer:</strong> Sofort einsetzbar</div>
                    <div>✅ <strong>Vorteil:</strong> Immer dabei, selbstständig</div>
                  </div>
                </div>

                <div className="bg-orange-50 border-2 border-orange-500 rounded-xl p-6">
                  <h3 className="font-bold text-orange-800 mb-3 flex items-center gap-2">
                    <span className="text-2xl">🚗</span>
                    Nachbarn/Helfer mit Kabel
                  </h3>
                  <p className="text-sm text-gray-700 mb-3">
                    Wenn Sie in Wohngebieten liegen bleiben, kann ein Nachbar mit <strong>Verlängerungskabel</strong> (Typ 2 oder Schuko) helfen. 30 Min. Haushaltsstrom = 5-8 km Reichweite.
                  </p>
                  <div className="text-sm space-y-1">
                    <div>💰 <strong>Kosten:</strong> Kostenlos (Dankeschön)</div>
                    <div>⏱️ <strong>Dauer:</strong> 30-60 Min.</div>
                    <div>✅ <strong>Vorteil:</strong> Günstig, nachbarschaftlich</div>
                  </div>
                </div>
              </div>

            
            </section>

            {/* Section 7: Vorbeugen */}
            <section id="vorbeugen" className="mb-8 md:mb-12">
              <h2 className="text-xl md:text-3xl font-bold text-gray-800 mb-4 md:mb-6 flex items-center gap-3">
                <Shield className="w-6 h-6 md:w-8 md:h-8 text-blue-600" />
                So vermeiden Sie eine leere Batterie
              </h2>

              <p className="text-sm md:text-base text-gray-700 leading-relaxed mb-6">
                Am besten ist es natürlich, wenn Sie gar nicht erst mit leerer Batterie liegen bleiben. Hier sind die wichtigsten Tipps:
              </p>

              {/* Tipps-Grid */}
              <div className="space-y-4">
                <div className="bg-blue-50 rounded-xl p-6">
                  <h3 className="font-bold text-gray-800 mb-3">🔋 Batterie-Management</h3>
                  <ul className="space-y-2 text-sm text-gray-700">
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                      <div><strong>Laden Sie bei 20-30%:</strong> Warten Sie nicht, bis die Anzeige auf 0% steht. Planen Sie Ladevorgänge frühzeitig.</div>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                      <div><strong>Puffer einplanen:</strong> Berechnen Sie Routen mit 20-30% Sicherheitspuffer. Nutzen Sie Apps wie A Better Route Planner.</div>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                      <div><strong>Warnungen ernst nehmen:</strong> Wenn das Fahrzeug "Bald laden" anzeigt, suchen Sie umgehend eine Ladestation.</div>
                    </li>
                  </ul>
                </div>

                <div className="bg-green-50 rounded-xl p-6">
                  <h3 className="font-bold text-gray-800 mb-3">📱 Apps & Features nutzen</h3>
                  <ul className="space-y-2 text-sm text-gray-700">
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                      <div><strong>Ladestations-Apps:</strong> PlugShare, chargEV zeigen verfügbare Ladestationen in Echtzeit.</div>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                      <div><strong>Reichweiten-Alarm:</strong> Stellen Sie im Navi Warnungen bei niedrigem Ladestand ein.</div>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                      <div><strong>Vorklimatisierung:</strong> Klimatisieren Sie das Auto im Stand während es lädt – spart Reichweite.</div>
                    </li>
                  </ul>
                </div>

                <div className="bg-purple-50 rounded-xl p-6">
                  <h3 className="font-bold text-gray-800 mb-3">🚗 Fahrstil anpassen</h3>
                  <ul className="space-y-2 text-sm text-gray-700">
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                      <div><strong>Eco-Modus nutzen:</strong> Spart 10-20% Reichweite durch sanftere Beschleunigung.</div>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                      <div><strong>Rekuperation aktivieren:</strong> One-Pedal-Driving gewinnt Energie zurück beim Bremsen.</div>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                      <div><strong>Geschwindigkeit reduzieren:</strong> 130 statt 150 km/h spart 20-30% Energie.</div>
                    </li>
                  </ul>
                </div>
              </div>
            </section>

            {/* Section 8: Notfall-Checkliste */}
            <section id="notfall" className="mb-8 md:mb-12">
              <h2 className="text-xl md:text-3xl font-bold text-gray-800 mb-4 md:mb-6 flex items-center gap-3">
                <AlertTriangle className="w-6 h-6 md:w-8 md:h-8 text-red-600" />
                Notfall-Checkliste: Batterie leer
              </h2>

              <div className="bg-red-50 border-2 border-red-500 rounded-xl p-6 mb-6">
                <h3 className="font-bold text-red-800 mb-4">Was tun, wenn die Batterie leer ist?</h3>
                <ol className="space-y-3 text-sm text-gray-700">
                  <li className="flex items-start gap-3">
                    <div className="bg-red-600 text-white rounded-full w-6 h-6 flex items-center justify-center font-bold flex-shrink-0 text-xs">1</div>
                    <div><strong>Warnblinker an, Warndreieck aufstellen</strong> (falls auf Straße)</div>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="bg-red-600 text-white rounded-full w-6 h-6 flex items-center justify-center font-bold flex-shrink-0 text-xs">2</div>
                    <div><strong>Pannendienst rufen</strong> (ADAC: 089 20 20 20, allgemein: 116 116)</div>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="bg-red-600 text-white rounded-full w-6 h-6 flex items-center justify-center font-bold flex-shrink-0 text-xs">3</div>
                    <div><strong>"Mobile Ladehilfe" anfordern</strong> (nicht normaler Abschleppdienst)</div>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="bg-red-600 text-white rounded-full w-6 h-6 flex items-center justify-center font-bold flex-shrink-0 text-xs">4</div>
                    <div><strong>Fahrzeugmodell + Batteriegröße nennen</strong> (z.B. "Tesla Model 3, 60 kWh")</div>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="bg-red-600 text-white rounded-full w-6 h-6 flex items-center justify-center font-bold flex-shrink-0 text-xs">5</div>
                    <div><strong>Wenn Gefahrenstelle:</strong> Nur dann schieben (siehe Anleitung oben)</div>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="bg-red-600 text-white rounded-full w-6 h-6 flex items-center justify-center font-bold flex-shrink-0 text-xs">6</div>
                    <div><strong>Wartezeit nutzen:</strong> Bedienungsanleitung zum Thema "Abschleppen" lesen</div>
                  </li>
                </ol>
              </div>

              {/* Wichtige Telefonnummern */}
              <div className="bg-blue-50 rounded-xl p-6">
                <h3 className="font-bold text-gray-800 mb-4">📞 Wichtige Notfall-Nummern</h3>
                <div className="grid md:grid-cols-2 gap-4 text-sm">
                  <div>
                    <div className="font-bold mb-1">ADAC Pannenhilfe:</div>
                    <a href="tel:+498920202030" className="text-blue-600 hover:underline text-lg font-semibold">089 20 20 20 30</a>
                  </div>
                  <div>
                    <div className="font-bold mb-1">ACE Pannenhilfe:</div>
                    <a href="tel:+4971180730" className="text-blue-600 hover:underline text-lg font-semibold">0711 / 8 07 30</a>
                  </div>
                  <div>
                    <div className="font-bold mb-1">AvD (Allgemein):</div>
                    <a href="tel:+49800990990" className="text-blue-600 hover:underline text-lg font-semibold">0800 / 99 09 90</a>
                  </div>
                  <div>
                    <div className="font-bold mb-1">Zentrale Notruf:</div>
                    <a href="tel:116116" className="text-blue-600 hover:underline text-lg font-semibold">116 116</a>
                  </div>
                </div>
              </div>
            </section>

            {/* Section 9: FAQ */}
            <section id="faq" className="mb-8 md:mb-12">
              <h2 className="text-xl md:text-3xl font-bold text-gray-800 mb-4 md:mb-6">
                Häufige Fragen (FAQ)
              </h2>

              <div className="space-y-4">
                <div className="bg-gray-50 rounded-xl p-6">
                  <h3 className="font-bold text-gray-800 mb-2">Kann ich ein E-Auto mit einem anderen Auto anschieben/anschleppen?</h3>
                  <p className="text-sm text-gray-700">
                    <strong>Anschleppen: NEIN.</strong> E-Autos können nicht wie Verbrenner angeschleppt werden, um den Motor zu starten – sie haben ja keinen Anlasser. Beim Anschieben würde nur Strom generiert, aber die Batterie ist zu tiefentladen. <strong>Anschieben zur Seite: Ja</strong>, aber nur mit menschlicher Kraft, nicht mit einem Auto-Abschleppseil.
                  </p>
                </div>

                <div className="bg-gray-50 rounded-xl p-6">
                  <h3 className="font-bold text-gray-800 mb-2">Wie weit kann ich ein E-Auto maximal schieben?</h3>
                  <p className="text-sm text-gray-700">
                    Die meisten Hersteller empfehlen maximal <strong>10-20 Meter</strong>. Einige Modelle (z.B. Renault Zoe) tolerieren längere Distanzen bei sehr langsamer Geschwindigkeit (&lt;2 km/h). Für alles darüber hinaus: professioneller Transport.
                  </p>
                </div>

                <div className="bg-gray-50 rounded-xl p-6">
                  <h3 className="font-bold text-gray-800 mb-2">Schadet das Schieben der Batterie oder dem Motor?</h3>
                  <p className="text-sm text-gray-700">
                    Bei <strong>kurzen Distanzen</strong> und <strong>langsamer Geschwindigkeit</strong> normalerweise nicht. Bei zu schnellem oder langem Schieben kann jedoch die Leistungselektronik Schaden nehmen, da unkontrollierte Ströme entstehen. Im Zweifelsfall: Bedienungsanleitung prüfen.
                  </p>
                </div>

                <div className="bg-gray-50 rounded-xl p-6">
                  <h3 className="font-bold text-gray-800 mb-2">Warum ist das E-Auto so schwer zu schieben?</h3>
                  <p className="text-sm text-gray-700">
                    Zwei Gründe: 1) <strong>Hohes Gewicht</strong> (1,8-2,5 Tonnen durch schwere Batterie), 2) <strong>Magnetischer Widerstand</strong> des Elektromotors. Die Permanentmagnete im Motor erzeugen einen Widerstand, wenn sie zwangsweise gedreht werden.
                  </p>
                </div>

                <div className="bg-gray-50 rounded-xl p-6">
                  <h3 className="font-bold text-gray-800 mb-2">Kann man ein E-Auto "starthilfe" geben wie bei Verbrennern?</h3>
                  <p className="text-sm text-gray-700">
                    <strong>Nein</strong>, klassische Starthilfe (12V Starterbatterie überbrücken) funktioniert nicht, um die Hochvolt-Batterie zu laden. Aber: Die 12V-Bordnetzbatterie kann überbrückt werden, um Elektronik zu aktivieren und das Auto in Neutral zu bringen. Das löst aber nicht das Problem der leeren Antriebsbatterie.
                  </p>
                </div>

                <div className="bg-gray-50 rounded-xl p-6">
                  <h3 className="font-bold text-gray-800 mb-2">Was kostet eine mobile Ladehilfe vom ADAC?</h3>
                  <p className="text-sm text-gray-700">
                    Für <strong>ADAC-Mitglieder kostenlos</strong> (bei Plus/Premium-Mitgliedschaft). Nicht-Mitglieder zahlen je nach Region <strong>50-150€</strong>. Die Ladung dauert ca. 30-60 Minuten und bringt 5-10 kWh in die Batterie (genug für 30-50 km).
                  </p>
                </div>
              </div>
            </section>

            {/* Section 10: Fazit */}
            <section id="fazit" className="mb-8 md:mb-12">
            <section id="fazit" className="mb-8">
              <div className="bg-gradient-to-r from-blue-600 to-green-600 rounded-xl p-6 md:p-8 text-white">
                <h2 className="text-2xl md:text-3xl font-bold mb-4">
                Fazit: E-Auto schieben – möglich, aber keine gute Idee
                </h2>
                <p className="text-base md:text-lg leading-relaxed mb-4">
                  <strong>Ja, ein E-Auto kann geschoben werden</strong> aber es sollte nur im absoluten Notfall und auf sehr kurze Distanzen geschehen. Die Risiken (Schäden am Antriebsstrang, unkontrollierbare Bremsen/Lenkung, Garantieverlust) sind erheblich.
                </p>
                <div className="space-y-3 text-base md:text-lg mb-6">
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
                  <p className="text-lg font-semibold">
                  Die <strong>beste Lösung</strong> ist immer, einen Pannendienst mit mobiler Ladehilfe zu rufen. Das ist sicherer, schonender fürs Fahrzeug und oft günstiger als potenzielle Reparaturen nach unsachgemäßem Schieben.
                  </p>
                </div>
              </div>
            </section>
         
            </section>

            {/* Call-to-Action */}
            <div className="bg-gradient-to-r from-purple-600 to-blue-600 rounded-2xl p-8 text-center text-white">
              <h3 className="text-2xl font-bold mb-4">
                📊 Berechnen Sie die Kosten Ihres E-Autos
              </h3>
              <p className="text-lg mb-6 max-w-2xl mx-auto">
                Mit unserem TCO-Rechner können Sie die Gesamtkosten Ihres Elektroautos über die gesamte Nutzungsdauer berechnen – inklusive Strom, Wartung und Wertverlust.
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

        {/* Disclaimer */}
        <div className="mt-8 bg-gray-100 rounded-xl p-6 text-sm text-gray-600">
          <p className="leading-relaxed">
            <strong>Haftungsausschluss:</strong> Dieser Artikel dient nur zu Informationszwecken. Die Anweisungen zum Schieben eines E-Autos erfolgen auf eigenes Risiko. Konsultieren Sie immer die Bedienungsanleitung Ihres spezifischen Fahrzeugmodells. Wir übernehmen keine Haftung für Schäden, die durch das Schieben eines E-Autos entstehen. Im Zweifelsfall kontaktieren Sie immer einen professionellen Pannendienst.
          </p>
        </div>

      </div>
    </div>
  );
}