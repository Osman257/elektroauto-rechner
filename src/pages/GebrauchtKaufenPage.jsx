import React, { useEffect } from 'react';
import { 
  ArrowLeft, 
  ShoppingCart, 
  Battery, 
  CheckCircle, 
  AlertTriangle,
  Calculator,
  DollarSign, 
  Info,
  KeyRound,
  Settings,
  FileText,
  Shield
} from 'lucide-react';
import SEO from '../components/SEO';
import Header from '../components/Header';

export default function GebrauchtKaufenPage() {

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-white">
      <SEO
        title="Elektroauto gebraucht kaufen 2025: Worauf achten? | e-Autowelt"
        description="Gebrauchtes E-Auto kaufen: Batterie-Check, Ladezyklen, versteckte Mängel. Alle wichtigen Checklisten für den sicheren Kauf eines gebrauchten Elektroautos."
        canonicalPath="/ratgeber/gebrauchtwagen"
        keywords="elektroauto gebraucht kaufen, e-auto gebraucht, gebrauchtes elektroauto, batterie check elektroauto, elektroauto worauf achten"
        ogImage="/images/ratgeber/elektroauto-gebraucht-kaufen-og.jpg"
        ogType="article"
        publishedDate="2025-01-20T10:00:00Z"
        modifiedDate="2025-01-20T10:00:00Z"
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
          <div className="relative h-64 md:h-96 bg-gradient-to-br from-blue-600 to-green-600 overflow-hidden">
            <img 
              src="/images/ratgeber/elektroauto-gebraucht-kaufen-hero.webp"
              alt="Gebrauchtes Elektroauto kaufen - Worauf Sie achten sollten"
              className="w-full h-full object-cover opacity-90"
              loading="lazy"
              decoding="async"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
            <div className="absolute bottom-0 left-0 right-0 p-6 md:p-10 text-white">
              <div className="flex items-center gap-3 mb-3">
                <div className="bg-white/30 backdrop-blur-md p-2 rounded-lg shadow-lg">
                  <KeyRound className="w-6 h-6 md:w-8 md:h-8" />
                </div>
                <span className="text-xs md:text-sm bg-white/30 backdrop-blur-md px-3 py-1 rounded-full font-semibold shadow-lg">📖 14 Min. Lesezeit</span>
                <span className="text-xs md:text-sm bg-white/30 backdrop-blur-md px-3 py-1 rounded-full font-semibold shadow-lg">Aktualisiert am 20. Januar 2025</span>
              </div>
              <h1 className="text-2xl md:text-4xl lg:text-5xl font-bold leading-tight">
                Elektroauto gebraucht kaufen: Der ultimative Ratgeber für den sicheren Kauf
              </h1>
            </div>
          </div>

          {/* Article Content */}
          <div className="p-6 md:p-10">
            {/* Intro */}
            <div className="mb-8 md:mb-12">
              <p className="text-lg md:text-xl text-gray-600 leading-relaxed mb-4">
                Der Markt für gebrauchte Elektroautos boomt: 2024 wurden in Deutschland über 180.000 gebrauchte E-Autos verkauft – ein Plus von 58% gegenüber dem Vorjahr. Die sinkenden Preise machen Elektromobilität für viele erstmals erschwinglich. Doch beim Kauf eines gebrauchten E-Autos gibt es entscheidende Unterschiede zum Verbrenner: Batteriezustand, Ladehistorie und Software-Updates sind kritische Faktoren, die den Wert und die Alltagstauglichkeit maßgeblich beeinflussen.
              </p>
              <div className="bg-blue-50 rounded-xl p-6">
                <p className="text-base md:text-lg text-gray-700 leading-relaxed">
                  <strong className="text-blue-700">Wichtig zu wissen:</strong> Ein gut gepflegtes E-Auto mit 3-4 Jahren kann eine hervorragende Investition sein – vorausgesetzt, die Batterie wurde schonend geladen (nicht ständig Schnellladung) und der Vorbesitzer hat regelmäßige Software-Updates durchführen lassen. Mit der richtigen Checkliste und professioneller Begutachtung minimieren Sie das Risiko erheblich.
                </p>
              </div>
            </div>

            {/* Inhaltsverzeichnis */}
            <nav className="bg-gray-50 rounded-xl p-6 mb-8 md:mb-12">
              <h2 className="text-xl md:text-2xl font-bold text-gray-800 mb-4">
                Inhaltsverzeichnis
              </h2>
              <ol className="space-y-2 text-sm md:text-base">
                <li><a href="#batterie" className="text-blue-600 hover:underline">1. Batteriezustand prüfen: Der wichtigste Faktor</a></li>
                <li><a href="#ladehistorie" className="text-blue-600 hover:underline">2. Ladehistorie und Schnellladung</a></li>
                <li><a href="#software" className="text-blue-600 hover:underline">3. Software-Updates und Garantie</a></li>
                <li><a href="#karosserie" className="text-blue-600 hover:underline">4. Karosserie, Reifen und Bremsen</a></li>
                <li><a href="#probefahrt" className="text-blue-600 hover:underline">5. Probefahrt: Darauf müssen Sie achten</a></li>
                <li><a href="#dokumente" className="text-blue-600 hover:underline">6. Wichtige Dokumente und Kaufverträge</a></li>
                <li><a href="#preise" className="text-blue-600 hover:underline">7. Faire Preise: Was ist ein gutes Angebot?</a></li>
                <li><a href="#haendler-privat" className="text-blue-600 hover:underline">8. Händler vs. Privatkauf: Vor- und Nachteile</a></li>
                <li><a href="#checkliste" className="text-blue-600 hover:underline">9. Checkliste für den Gebrauchtkauf</a></li>
                <li><a href="#fazit" className="text-blue-600 hover:underline">10. Fazit: Lohnt sich der Gebrauchtkauf?</a></li>
              </ol>
            </nav>

            {/* Section 1: Batteriezustand */}
            <section id="batterie" className="mb-8 md:mb-12">
              <h2 className="text-xl md:text-3xl font-bold text-gray-800 mb-4 md:mb-6 flex items-center gap-3">
                <Battery className="w-6 h-6 md:w-8 md:h-8 text-green-600" />
                Batteriezustand prüfen: Der wichtigste Faktor
              </h2>
              
              <p className="text-sm md:text-base text-gray-700 leading-relaxed mb-6">
                Die Batterie ist das Herzstück jedes Elektroautos und macht 30-40% des Fahrzeugwerts aus. Im Gegensatz zum Verbrenner-Motor, dessen Zustand schwer zu beurteilen ist, lässt sich der Batteriezustand bei E-Autos relativ präzise messen. Der State of Health (SoH) gibt an, wie viel Kapazität die Batterie im Vergleich zum Neuzustand noch hat.
              </p>

              {/* Batterie-Zustand Tabelle */}
              <div className="overflow-x-auto mb-6">
                <table className="w-full bg-white rounded-xl overflow-hidden shadow-lg">
                  <thead className="bg-gradient-to-r from-green-600 to-blue-600 text-white">
                    <tr>
                      <th className="p-3 md:p-4 text-left text-sm md:text-base">SoH (State of Health)</th>
                      <th className="p-3 md:p-4 text-left text-sm md:text-base">Bewertung</th>
                      <th className="p-3 md:p-4 text-left text-sm md:text-base">Empfehlung</th>
                    </tr>
                  </thead>
                  <tbody className="text-sm md:text-base">
                    <tr className="border-b border-gray-200 hover:bg-gray-50 bg-green-50">
                      <td className="p-3 md:p-4 font-semibold text-green-700">95-100%</td>
                      <td className="p-3 md:p-4 text-gray-700">Ausgezeichnet (wie neu)</td>
                      <td className="p-3 md:p-4 text-gray-700">Uneingeschränkt empfehlenswert</td>
                    </tr>
                    <tr className="border-b border-gray-200 hover:bg-gray-50">
                      <td className="p-3 md:p-4 font-semibold text-green-600">90-94%</td>
                      <td className="p-3 md:p-4 text-gray-700">Sehr gut</td>
                      <td className="p-3 md:p-4 text-gray-700">Gut für Gebrauchtkauf</td>
                    </tr>
                    <tr className="border-b border-gray-200 hover:bg-gray-50 bg-blue-50">
                      <td className="p-3 md:p-4 font-semibold text-blue-600">85-89%</td>
                      <td className="p-3 md:p-4 text-gray-700">Gut (normal)</td>
                      <td className="p-3 md:p-4 text-gray-700">OK, aber Preis entsprechend</td>
                    </tr>
                    <tr className="border-b border-gray-200 hover:bg-gray-50 bg-orange-50">
                      <td className="p-3 md:p-4 font-semibold text-orange-600">80-84%</td>
                      <td className="p-3 md:p-4 text-gray-700">Befriedigend</td>
                      <td className="p-3 md:p-4 text-gray-700">⚠Nur mit deutlichem Preisnachlass</td>
                    </tr>
                    <tr className="border-b border-gray-200 hover:bg-gray-50 bg-red-50">
                      <td className="p-3 md:p-4 font-semibold text-red-600">unter 80%</td>
                      <td className="p-3 md:p-4 text-gray-700">Ausreichend bis mangelhaft</td>
                      <td className="p-3 md:p-4 text-gray-700">Nicht empfehlenswert</td>
                    </tr>
                  </tbody>
                </table>
                <div className="text-xs text-gray-500 mt-2 italic">Quelle: ADAC, TÜV, DAT (2024)</div>
              </div>

              {/* Wie prüft man den SoH? */}
              <div className="bg-green-50 rounded-xl p-6 mb-6">
                <h3 className="font-bold text-gray-800 mb-4 flex items-center gap-2">
                  <Settings className="w-5 h-5 text-green-600" />
                  So prüfen Sie den Batteriezustand (SoH):
                </h3>
                <div className="space-y-3 text-sm md:text-base text-gray-700">
                  <div className="flex items-start gap-3">
                    <div className="bg-green-600 text-white rounded-full w-6 h-6 flex items-center justify-center font-bold flex-shrink-0 text-xs">1</div>
                    <div>
                      <strong>Fahrzeug-Display:</strong> Viele E-Autos zeigen den SoH im Bordcomputer an (z.B. Tesla, BMW, Kia). Gehen Sie zu: Einstellungen → Batterie → Gesundheit/Health.
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="bg-green-600 text-white rounded-full w-6 h-6 flex items-center justify-center font-bold flex-shrink-0 text-xs">2</div>
                    <div>
                      <strong>OBD2-Auslese:</strong> Werkstätten und TÜV können mit speziellen OBD2-Adaptern (z.B. Carly, CarScanner) detaillierte Batteriedaten auslesen. <strong>Kosten: 50-150€</strong>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="bg-green-600 text-white rounded-full w-6 h-6 flex items-center justify-center font-bold flex-shrink-0 text-xs">3</div>
                    <div>
                      <strong>Reichweiten-Test:</strong> Bei vollem Akku sollte die angezeigte Reichweite mindestens 85% der Herstellerangabe (Neuwert) betragen. Beispiel: Renault Zoe (Neu: 395 km) sollte mindestens 335 km anzeigen.
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="bg-green-600 text-white rounded-full w-6 h-6 flex items-center justify-center font-bold flex-shrink-0 text-xs">4</div>
                    <div>
                      <strong>Professioneller Check:</strong> ADAC, TÜV und Dekra bieten E-Auto-Checks für 100-200€ an, die den Batteriezustand, Ladeelektronik und Software prüfen.
                    </div>
                  </div>
                </div>
              </div>

              {/* Wichtige Warnsignale */}
              <div className="bg-red-50 rounded-xl p-6">
                <h3 className="font-bold text-gray-800 mb-4 flex items-center gap-2">
                  <AlertTriangle className="w-5 h-5 text-red-600" />
                  Warnsignale bei der Batterie:
                </h3>
                <div className="space-y-2 text-sm md:text-base text-gray-700">
                  <div className="flex items-start gap-2">
                    <span className="text-red-600">❌</span>
                    <div><strong>Stark schwankende Reichweite:</strong> Wenn die Anzeige bei gleicher Ladung stark variiert (z.B. 250 km → 200 km → 280 km), deutet das auf Zellschäden hin.</div>
                  </div>
                  <div className="flex items-start gap-2">
                    <span className="text-red-600">❌</span>
                    <div><strong>Batteriewarnung im Display:</strong> Fehlermeldungen wie "Batterie warten" oder gelbe Batteriesymbole sind ein Ausschlusskriterium.</div>
                  </div>
                  <div className="flex items-start gap-2">
                    <span className="text-red-600">❌</span>
                    <div><strong>Sehr hohe Schnellladezyklen:</strong> Über 80% Schnellladungen (DC) beschleunigen Degradation. Fragen Sie nach der Ladehistorie!</div>
                  </div>
                  <div className="flex items-start gap-2">
                    <span className="text-red-600">❌</span>
                    <div><strong>Ungleiche Zellspannungen:</strong> Bei OBD2-Auslese sollten alle Zellen maximal 0,1V Unterschied haben. Größere Abweichungen → defekte Zelle.</div>
                  </div>
                </div>
              </div>
            </section>

            {/* Section 2: Ladehistorie */}
            <section id="ladehistorie" className="mb-8 md:mb-12">
              <h2 className="text-xl md:text-3xl font-bold text-gray-800 mb-4 md:mb-6 flex items-center gap-3">
                <Battery className="w-6 h-6 md:w-8 md:h-8 text-yellow-600" />
                Ladehistorie und Schnellladung
              </h2>

              <p className="text-sm md:text-base text-gray-700 leading-relaxed mb-6">
                Nicht alle Ladezyklen sind gleich: Während langsames AC-Laden (Wallbox, 11 kW) die Batterie schont, belastet häufiges DC-Schnellladen (50+ kW) die Zellen erheblich. Studien zeigen, dass E-Autos mit über 80% Schnellladungen nach 3 Jahren bis zu 10% mehr Degradation aufweisen als schonend geladene Fahrzeuge.
              </p>

              {/* Ladetypen Vergleich */}
              <div className="grid md:grid-cols-3 gap-4 mb-6">
                <div className="bg-green-50 rounded-xl p-6 border-2 border-green-500">
                  <div className="text-center mb-3">
                    <div className="text-3xl mb-2">🔌</div>
                    <h3 className="font-bold text-gray-800">AC-Laden (Optimal)</h3>
                    <div className="text-sm text-gray-600 mt-1">Wallbox, 3,7-22 kW</div>
                  </div>
                  <div className="text-sm text-gray-700 space-y-2">
                    <div>- Schonend für Batterie</div>
                    <div>- Geringe Degradation</div>
                    <div>- Ideal für tägliches Laden</div>
                    <div className="font-semibold text-green-700 pt-2">Empfohlen: 80-100% der Ladevorgänge</div>
                  </div>
                </div>

                <div className="bg-yellow-50 rounded-xl p-6 border-2 border-yellow-500">
                  <div className="text-center mb-3">
                    <div className="text-3xl mb-2">⚡</div>
                    <h3 className="font-bold text-gray-800">DC-Schnellladen (OK)</h3>
                    <div className="text-sm text-gray-600 mt-1">50-150 kW</div>
                  </div>
                  <div className="text-sm text-gray-700 space-y-2">
                    <div>- Höhere Belastung</div>
                    <div>- Erhöhte Degradation</div>
                    <div>- OK für Langstrecken</div>
                    <div className="font-semibold text-yellow-700 pt-2">Akzeptabel: 10-20% der Ladevorgänge</div>
                  </div>
                </div>

                <div className="bg-red-50 rounded-xl p-6 border-2 border-red-500">
                  <div className="text-center mb-3">
                    <div className="text-3xl mb-2">⚡⚡</div>
                    <h3 className="font-bold text-gray-800">Ultra-Fast (Kritisch)</h3>
                    <div className="text-sm text-gray-600 mt-1">150-350 kW</div>
                  </div>
                  <div className="text-sm text-gray-700 space-y-2">
                    <div>- Sehr hohe Belastung</div>
                    <div>- Starke Degradation</div>
                    <div>- Nur im Notfall</div>
                    <div className="font-semibold text-red-700 pt-2">Maximal: 5% der Ladevorgänge</div>
                  </div>
                </div>
              </div>

              {/* Ladehistorie auslesen */}
              <div className="bg-blue-50 rounded-xl p-6">
                <h3 className="font-bold text-gray-800 mb-4 flex items-center gap-2">
                  <Info className="w-5 h-5 text-blue-600" />
                  So fragen Sie die Ladehistorie ab:
                </h3>
                <div className="space-y-3 text-sm md:text-base text-gray-700">
                  <div>
                    <strong>Bei Tesla:</strong> Über die Tesla-App oder im Fahrzeug-Display unter "Service" → "Ladehistorie" einsehbar. Zeigt Anzahl der Schnellladungen und durchschnittliche Ladeleistung.
                  </div>
                  <div>
                    <strong>Bei anderen Herstellern:</strong> Manche Apps (z.B. Kia Connect, Mercedes me) protokollieren Ladevorgänge. Alternativ: OBD2-Auslese zeigt Schnelllade-Zyklen.
                  </div>
                  <div>
                    <strong>Fragen Sie den Verkäufer:</strong> Seriöse Verkäufer können über ihre Lade-App (z.B. EnBW, Shell Recharge) Screenshots der Ladehistorie bereitstellen.
                  </div>
                  <div className="bg-yellow-50 p-4 rounded-lg mt-4">
                    <strong className="text-yellow-700">Faustregel:</strong> Ein 3 Jahre altes E-Auto mit 60.000 km sollte maximal 50-100 Schnellladungen haben (ca. 10-15% aller Ladevorgänge). Bei über 200 DC-Ladungen ist Vorsicht geboten!
                  </div>
                </div>
              </div>
            </section>


            {/* Section 3: Software-Updates */}
            <section id="software" className="mb-8 md:mb-12">
              <h2 className="text-xl md:text-3xl font-bold text-gray-800 mb-4 md:mb-6 flex items-center gap-3">
                <Settings className="w-6 h-6 md:w-8 md:h-8 text-purple-600" />
                Software-Updates und Garantie
              </h2>

              <p className="text-sm md:text-base text-gray-700 leading-relaxed mb-6">
                Elektroautos sind "Smartphones auf Rädern" – die Software bestimmt Reichweite, Ladegeschwindigkeit und Sicherheit. Veraltete Software kann zu Reichweitenverlusten von 5-10% führen und Sicherheitslücken aufweisen. Prüfen Sie unbedingt, ob alle Updates installiert wurden und ob noch Garantie besteht.
              </p>

              {/* Update-Status prüfen */}
              <div className="bg-purple-50 rounded-xl p-6 mb-6">
                <h3 className="font-bold text-gray-800 mb-4">Software-Updates prüfen:</h3>
                <div className="space-y-3 text-sm md:text-base text-gray-700">
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                    <div>
                      <strong>Im Fahrzeug:</strong> Einstellungen → Software → Info. Sollte aktuellste Version anzeigen (Herstellerwebsite vergleichen).
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                    <div>
                      <strong>Over-the-Air (OTA):</strong> Tesla, Polestar, Mercedes EQ können Updates per Internet installieren. Fragen Sie, wann das letzte Update durchgeführt wurde.
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                    <div>
                      <strong>Werkstatt-Updates:</strong> VW ID., Renault Zoe, Nissan Leaf benötigen Werkstattbesuch für Updates. Prüfen Sie Serviceheft auf letzte Software-Aktualisierung.
                    </div>
                  </div>
                </div>
              </div>

              {/* Garantie-Übersicht */}
              <div className="overflow-x-auto mb-6">
                <table className="w-full bg-white rounded-xl overflow-hidden shadow-lg">
                  <thead className="bg-gradient-to-r from-purple-600 to-blue-600 text-white">
                    <tr>
                      <th className="p-3 md:p-4 text-left text-sm md:text-base">Hersteller</th>
                      <th className="p-3 md:p-4 text-left text-sm md:text-base">Batteriegarantie</th>
                      <th className="p-3 md:p-4 text-left text-sm md:text-base">Bedingung</th>
                    </tr>
                  </thead>
                  <tbody className="text-sm md:text-base">
                    <tr className="border-b border-gray-200 hover:bg-gray-50">
                      <td className="p-3 md:p-4 font-semibold">Tesla</td>
                      <td className="p-3 md:p-4 text-gray-700">8 Jahre / 192.000 km</td>
                      <td className="p-3 md:p-4 text-gray-700">70% SoH garantiert</td>
                    </tr>
                    <tr className="border-b border-gray-200 hover:bg-gray-50 bg-blue-50">
                      <td className="p-3 md:p-4 font-semibold">VW ID-Reihe</td>
                      <td className="p-3 md:p-4 text-gray-700">8 Jahre / 160.000 km</td>
                      <td className="p-3 md:p-4 text-gray-700">70% SoH garantiert</td>
                    </tr>
                    <tr className="border-b border-gray-200 hover:bg-gray-50">
                      <td className="p-3 md:p-4 font-semibold">Hyundai / Kia</td>
                      <td className="p-3 md:p-4 text-gray-700">8 Jahre / 160.000 km</td>
                      <td className="p-3 md:p-4 text-gray-700">70% SoH garantiert</td>
                    </tr>
                    <tr className="border-b border-gray-200 hover:bg-gray-50">
                      <td className="p-3 md:p-4 font-semibold">BMW / Mercedes</td>
                      <td className="p-3 md:p-4 text-gray-700">8 Jahre / 160.000 km</td>
                      <td className="p-3 md:p-4 text-gray-700">70% SoH garantiert</td>
                    </tr>
                    <tr className="border-b border-gray-200 hover:bg-gray-50">
                      <td className="p-3 md:p-4 font-semibold">Renault Zoe</td>
                      <td className="p-3 md:p-4 text-gray-700">8 Jahre / 160.000 km</td>
                      <td className="p-3 md:p-4 text-gray-700">66% SoH garantiert</td>
                    </tr>
                  </tbody>
                </table>
                <div className="text-xs text-gray-500 mt-2 italic">Stand: Januar 2025. Garantie ist übertragbar auf Käufer!</div>
              </div>

              <div className="bg-green-50 rounded-xl p-6">
                <h3 className="font-bold text-gray-800 mb-3 flex items-center gap-2">
                  Wichtig: Garantie-Check beim Kauf
                </h3>
                <div className="space-y-2 text-sm md:text-base text-gray-700">
                  <div>✅ <strong>Prüfen Sie:</strong> Ist die Batteriegarantie noch gültig? (Datum + Kilometerstand im Serviceheft)</div>
                  <div>✅ <strong>Übertragbar:</strong> Die meisten Batteriegarantien sind übertragbar – lassen Sie sich dies schriftlich bestätigen!</div>
                  <div>✅ <strong>Verlängerbar:</strong> Manche Hersteller bieten Garantieverlängerungen an (z.B. VW: +2 Jahre für 800-1.200€)</div>
                  <div>⚠️ <strong>Vorsicht:</strong> Garantie erlischt bei Unfallschäden an der Batterie oder unsachgemäßer Reparatur</div>
                </div>
              </div>
            </section>

            {/* Section 4: Karosserie, Reifen, Bremsen */}
            <section id="karosserie" className="mb-8 md:mb-12">
              <h2 className="text-xl md:text-3xl font-bold text-gray-800 mb-4 md:mb-6 flex items-center gap-3">
                <Settings className="w-6 h-6 md:w-8 md:h-8 text-blue-600" />
                Karosserie, Reifen und Bremsen
              </h2>

              <p className="text-sm md:text-base text-gray-700 leading-relaxed mb-6">
                Bei der mechanischen Prüfung unterscheiden sich E-Autos teilweise von Verbrennern: Die Bremsen verschleißen durch Rekuperation deutlich langsamer, dafür sind die Reifen durch das höhere Gewicht stärker beansprucht. Die Karosserie prüfen Sie wie bei jedem Gebrauchtwagen.
              </p>

              {/* Prüfpunkte */}
              <div className="grid md:grid-cols-2 gap-6">
                {/* Karosserie */}
                <div className="bg-white rounded-xl p-6 shadow-lg border border-gray-200">
                  <h3 className="font-bold text-gray-800 mb-4 text-lg">Karosserie & Lackierung</h3>
                  <div className="space-y-2 text-sm text-gray-700">
                    <div>✅ Lackdicke messen (Lackdickenmessgerät, 10-20€)</div>
                    <div>✅ Spaltmaße prüfen (sollten gleichmäßig sein)</div>
                    <div>✅ Rost an Unterboden/Schwellern (bei Hebebühne)</div>
                    <div>✅ Steinschläge im Frontbereich</div>
                    <div>❌ Unfallschäden → Gutachten anfordern!</div>
                  </div>
                </div>

                {/* Reifen */}
                <div className="bg-white rounded-xl p-6 shadow-lg border border-gray-200">
                  <h3 className="font-bold text-gray-800 mb-4 text-lg">Reifen & Fahrwerk</h3>
                  <div className="space-y-2 text-sm text-gray-700">
                    <div>✅ Profiltiefe mindestens 4 mm (gesetzlich: 1,6 mm)</div>
                    <div>✅ Gleichmäßiger Abrieb (kein Sägezahn-Profil)</div>
                    <div>✅ Reifenalter unter 6 Jahre (DOT-Nummer)</div>
                    <div>⚠️ E-Auto-Reifen nutzen sich 20-30% schneller ab</div>
                    <div>💡 Neue Reifen kosten 400-800€ (Satz)</div>
                  </div>
                </div>

                {/* Bremsen */}
                <div className="bg-white rounded-xl p-6 shadow-lg border border-gray-200">
                  <h3 className="font-bold text-gray-800 mb-4 text-lg">Bremsen</h3>
                  <div className="space-y-2 text-sm text-gray-700">
                    <div>✅ Bremsscheiben auf Rost prüfen (normal bei E-Autos!)</div>
                    <div>✅ Beläge: Mindestens 3 mm Dicke</div>
                    <div>✅ Keine Vibrationen beim Bremsen</div>
                    <div>💡 E-Autos nutzen Bremsen weniger (Rekuperation)</div>
                    <div>⚠️ Rost durch Standzeiten möglich → Probefahrt!</div>
                  </div>
                </div>

                {/* Innenraum */}
                <div className="bg-white rounded-xl p-6 shadow-lg border border-gray-200">
                  <h3 className="font-bold text-gray-800 mb-4 text-lg">Innenraum & Elektronik</h3>
                  <div className="space-y-2 text-sm text-gray-700">
                    <div>✅ Alle Funktionen testen (Klima, Radio, Navi)</div>
                    <div>✅ Sitze, Lenkrad, Pedale auf Abnutzung</div>
                    <div>✅ Ladekabel-Set vollständig (Typ 2, Schuko)</div>
                    <div>✅ Ladeklappe öffnet/schließt einwandfrei</div>
                    <div>❌ Feuchtigkeitsspuren → Wasserschaden!</div>
                  </div>
                </div>
              </div>
            </section>

            {/* IMAGE PLACEHOLDER 2 */}
            <div className="my-8 md:my-12">
              <img 
                src="/images/ratgeber/elektroauto-gebraucht-probefahrt.webp"
                alt="Probefahrt gebrauchtes Elektroauto - Worauf achten"
                className="w-full rounded-xl shadow-lg"
                loading="lazy"
              decoding="async"
                
              />
              <p className="text-xs text-gray-500 mt-2 italic text-center">
                Bei der Probefahrt: Laden, Beschleunigung und Reichweite testen
              </p>
            </div>

            {/* Section 5: Probefahrt */}
            <section id="probefahrt" className="mb-8 md:mb-12">
              <h2 className="text-xl md:text-3xl font-bold text-gray-800 mb-4 md:mb-6 flex items-center gap-3">
                <CheckCircle className="w-6 h-6 md:w-8 md:h-8 text-green-600" />
                Probefahrt: Darauf müssen Sie achten
              </h2>

              <p className="text-sm md:text-base text-gray-700 leading-relaxed mb-6">
                Die Probefahrt ist beim E-Auto noch wichtiger als beim Verbrenner. Nehmen Sie sich mindestens 30-45 Minuten Zeit und testen Sie verschiedene Fahrsituationen. Idealerweise mit einem Ladestopp, um die Ladefunktion zu prüfen.
              </p>

              {/* Probefahrt-Checkliste */}
              <div className="bg-green-50 rounded-xl p-6 mb-6">
                <h3 className="font-bold text-gray-800 mb-4 flex items-center gap-2">
                  Probefahrt-Checkliste (30-45 Min.)
                </h3>
                <div className="space-y-4 text-sm md:text-base text-gray-700">
                  <div className="bg-white rounded-lg p-4">
                    <strong className="text-green-700">1. Vor der Fahrt (5 Min.)</strong>
                    <div className="mt-2 space-y-1">
                      <div>• Batteriezustand notieren (z.B. 85% / 320 km Reichweite)</div>
                      <div>• Alle Anzeigen im Display checken (Fehlermeldungen?)</div>
                      <div>• Klimaanlage/Heizung testen (funktioniert einwandfrei?)</div>
                    </div>
                  </div>

                  <div className="bg-white rounded-lg p-4">
                    <strong className="text-blue-700">2. Stadtfahrt (10 Min.)</strong>
                    <div className="mt-2 space-y-1">
                      <div>• Beschleunigung: Sofortiges, lineares Ansprechverhalten?</div>
                      <div>• Rekuperation testen (verschiedene Stufen ausprobieren)</div>
                      <div>• Lenkung, Federung, Geräuschniveau prüfen</div>
                      <div>• Reichweiten-Anzeige beobachten (realistische Werte?)</div>
                    </div>
                  </div>

                  <div className="bg-white rounded-lg p-4">
                    <strong className="text-purple-700">3. Autobahn (15 Min.)</strong>
                    <div className="mt-2 space-y-1">
                      <div>• Bei 120-130 km/h: Windgeräusche, Stabilität</div>
                      <div>• Verbrauch bei konstanter Geschwindigkeit notieren</div>
                      <div>• Assistenzsysteme testen (Tempomat, Spurhalter)</div>
                      <div>• Reichweiten-Drop bei hoher Geschwindigkeit beachten</div>
                    </div>
                  </div>

                  <div className="bg-white rounded-lg p-4">
                    <strong className="text-orange-700">4. Ladestopp (10 Min.) - WICHTIG!</strong>
                    <div className="mt-2 space-y-1">
                      <div>• Laden Sie an einer öffentlichen Säule (idealerweise DC)</div>
                      <div>• Ladeklappe: Öffnet/schließt problemlos?</div>
                      <div>• Ladevorgang startet nach 3-5 Sekunden?</div>
                      <div>• Ladeleistung im Auto-Display prüfen (z.B. 50 kW bei DC)</div>
                      <div>• Abbruch durch Fehler? → Hinweis auf Defekt!</div>
                    </div>
                  </div>

                  <div className="bg-white rounded-lg p-4">
                    <strong className="text-red-700">5. Nach der Fahrt (5 Min.)</strong>
                    <div className="mt-2 space-y-1">
                      <div>• Verbrauch ablesen (sollte Herstellerangabe ±10% sein)</div>
                      <div>• Reichweitenverlust realistisch? (z.B. 35 km gefahren = -40 km Reichweite OK)</div>
                      <div>• Fehlermeldungen aufgetreten?</div>
                      <div>• Geräusche/Vibrationen beim Fahren bemerkt?</div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-red-50 rounded-xl p-6">
                <h3 className="font-bold text-gray-800 mb-3 flex items-center gap-2">
                  Warnsignale während der Probefahrt:
                </h3>
                <div className="space-y-2 text-sm md:text-base text-gray-700">
                  <div>❌ <strong>Stark schwankende Reichweite:</strong> 300 km → 250 km → 320 km ohne Grund</div>
                  <div>❌ <strong>Ladevorgang bricht ab</strong> oder startet nicht sofort</div>
                  <div>❌ <strong>Ungewöhnliche Geräusche:</strong> Pfeifen, Brummen, Klappern aus Motor/Batterie</div>
                  <div>❌ <strong>Verbrauch über 25% höher</strong> als Herstellerangabe (bei normalem Fahrstil)</div>
                  <div>❌ <strong>Fehlermeldungen</strong> im Display (auch wenn sie wieder verschwinden!)</div>
                  <div>❌ <strong>Vibrationen</strong> beim Beschleunigen/Bremsen</div>
                </div>
              </div>
            </section>

            {/* Section 6: Dokumente */}
            <section id="dokumente" className="mb-8 md:mb-12">
              <h2 className="text-xl md:text-3xl font-bold text-gray-800 mb-4 md:mb-6 flex items-center gap-3">
                <FileText className="w-6 h-6 md:w-8 md:h-8 text-blue-600" />
                Wichtige Dokumente und Kaufverträge
              </h2>

              <p className="text-sm md:text-base text-gray-700 leading-relaxed mb-6">
                Beim Gebrauchtkauf eines E-Autos sind einige Dokumente essentiell. Ohne vollständige Unterlagen sollten Sie vom Kauf absehen, da spätere Garantieansprüche oder Reparaturen schwierig werden.
              </p>

              {/* Dokumente-Checkliste */}
              <div className="bg-blue-50 rounded-xl p-6 mb-6">
                <h3 className="font-bold text-gray-800 mb-4">Pflicht-Dokumente beim Kauf:</h3>
                <div className="space-y-3 text-sm md:text-base text-gray-700">
                  <div className="flex items-start gap-3">
                    <div className="bg-blue-600 text-white rounded-full w-6 h-6 flex items-center justify-center font-bold flex-shrink-0 text-xs">1</div>
                    <div>
                      <strong>Fahrzeugbrief (Zulassungsbescheinigung Teil II):</strong> Muss im Original vorliegen. Prüfen Sie, ob der Verkäufer als Halter eingetragen ist!
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="bg-blue-600 text-white rounded-full w-6 h-6 flex items-center justify-center font-bold flex-shrink-0 text-xs">2</div>
                    <div>
                      <strong>Serviceheft / Scheckheft:</strong> Lückenlos geführt? Alle Software-Updates dokumentiert? Batteriegarantie eingetragen?
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="bg-blue-600 text-white rounded-full w-6 h-6 flex items-center justify-center font-bold flex-shrink-0 text-xs">3</div>
                    <div>
                      <strong>Hauptuntersuchung (TÜV/Dekra):</strong> Nicht älter als 2 Monate. Bei Mängeln: Nachbesserung schriftlich vereinbaren!
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="bg-blue-600 text-white rounded-full w-6 h-6 flex items-center justify-center font-bold flex-shrink-0 text-xs">4</div>
                    <div>
                      <strong>Batteriezertifikat / SoH-Gutachten:</strong> Idealerweise von Werkstatt oder TÜV (nicht älter als 2 Wochen).
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="bg-blue-600 text-white rounded-full w-6 h-6 flex items-center justify-center font-bold flex-shrink-0 text-xs">5</div>
                    <div>
                      <strong>Ladekabel-Set:</strong> Typ-2-Kabel (für öffentliche Ladesäulen) + Schuko-Kabel (Notladung). Wert: 200-400€!
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="bg-blue-600 text-white rounded-full w-6 h-6 flex items-center justify-center font-bold flex-shrink-0 text-xs">6</div>
                    <div>
                      <strong>Kaufvertrag:</strong> Verwenden Sie einen spezialisierten E-Auto-Kaufvertrag (ADAC oder DAT), der Batterie-SoH und Garantie festhält.
                    </div>
                  </div>
                </div>
              </div>

              {/* Kaufvertrag-Tipps */}
              <div className="bg-yellow-50 rounded-xl p-6">
                <h3 className="font-bold text-gray-800 mb-4 flex items-center gap-2">
                  Im Kaufvertrag unbedingt festhalten:
                </h3>
                <div className="space-y-2 text-sm md:text-base text-gray-700">
                  <div>✅ <strong>Batterie-SoH:</strong> "Batteriezustand zum Zeitpunkt des Verkaufs: X% SoH (gemessen am TT.MM.JJJJ)"</div>
                  <div>✅ <strong>Garantie:</strong> "Batteriegarantie gültig bis: TT.MM.JJJJ / XXX.XXX km"</div>
                  <div>✅ <strong>Ladehistorie:</strong> "Anzahl Schnellladungen (DC): ca. XX Ladungen"</div>
                  <div>✅ <strong>Unfallfreiheit:</strong> "Das Fahrzeug ist unfallfrei" ODER "Unfallschäden: [genaue Beschreibung]"</div>
                  <div>✅ <strong>Gewährleistung:</strong> Bei Händlerkauf: 12 Monate Gewährleistung gesetzlich. Bei Privatkauf: Ausschluss möglich, aber nicht empfehlenswert!</div>
                </div>
              </div>
            </section>


            {/* Section 7: Faire Preise */}
            <section id="preise" className="mb-8 md:mb-12">
              <h2 className="text-xl md:text-3xl font-bold text-gray-800 mb-4 md:mb-6 flex items-center gap-3">
                <DollarSign className="w-6 h-6 md:w-8 md:h-8 text-green-600" />
                Faire Preise: Was ist ein gutes Angebot?
              </h2>

              <p className="text-sm md:text-base text-gray-700 leading-relaxed mb-6">
                Gebrauchte E-Autos sind 2025 deutlich günstiger als noch vor 2 Jahren. Die Preise variieren stark je nach Modell, Alter, Batteriezustand und Ausstattung. Nutzen Sie Online-Bewertungsportale (DAT, Schwacke, AutoScout24) als Orientierung, aber beachten Sie: Der Batteriezustand hat enormen Einfluss auf den fairen Preis!
              </p>

              {/* Preisbeispiele */}
              <div className="overflow-x-auto mb-6">
                <table className="w-full bg-white rounded-xl overflow-hidden shadow-lg text-sm md:text-base">
                  <thead className="bg-gradient-to-r from-green-600 to-blue-600 text-white">
                    <tr>
                      <th className="p-3 md:p-4 text-left">Modell</th>
                      <th className="p-3 md:p-4 text-center">Neupreis</th>
                      <th className="p-3 md:p-4 text-center">3 Jahre alt</th>
                      <th className="p-3 md:p-4 text-center">Wertverlust</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b border-gray-200 hover:bg-gray-50">
                      <td className="p-3 md:p-4 font-semibold">VW ID.3 Pro</td>
                      <td className="p-3 md:p-4 text-center text-gray-700">45.000€</td>
                      <td className="p-3 md:p-4 text-center text-green-600 font-bold">24.000-28.000€</td>
                      <td className="p-3 md:p-4 text-center text-gray-600">38-47%</td>
                    </tr>
                    <tr className="border-b border-gray-200 hover:bg-gray-50 bg-blue-50">
                      <td className="p-3 md:p-4 font-semibold">Tesla Model 3 SR+</td>
                      <td className="p-3 md:p-4 text-center text-gray-700">42.000€</td>
                      <td className="p-3 md:p-4 text-center text-green-600 font-bold">32.000-36.000€</td>
                      <td className="p-3 md:p-4 text-center text-gray-600">14-24%</td>
                    </tr>
                    <tr className="border-b border-gray-200 hover:bg-gray-50">
                      <td className="p-3 md:p-4 font-semibold">Hyundai Ioniq 5</td>
                      <td className="p-3 md:p-4 text-center text-gray-700">48.000€</td>
                      <td className="p-3 md:p-4 text-center text-green-600 font-bold">28.000-32.000€</td>
                      <td className="p-3 md:p-4 text-center text-gray-600">33-42%</td>
                    </tr>
                    <tr className="border-b border-gray-200 hover:bg-gray-50">
                      <td className="p-3 md:p-4 font-semibold">Renault Zoe R135</td>
                      <td className="p-3 md:p-4 text-center text-gray-700">35.000€</td>
                      <td className="p-3 md:p-4 text-center text-green-600 font-bold">16.000-20.000€</td>
                      <td className="p-3 md:p-4 text-center text-gray-600">43-54%</td>
                    </tr>
                    <tr className="border-b border-gray-200 hover:bg-gray-50">
                      <td className="p-3 md:p-4 font-semibold">BMW iX xDrive40</td>
                      <td className="p-3 md:p-4 text-center text-gray-700">85.000€</td>
                      <td className="p-3 md:p-4 text-center text-orange-600 font-bold">38.000-45.000€</td>
                      <td className="p-3 md:p-4 text-center text-gray-600">47-55%</td>
                    </tr>
                  </tbody>
                </table>
                <div className="text-xs text-gray-500 mt-2 italic">Quelle: AutoScout24, Mobile.de, DAT (Januar 2025, ~50.000 km Laufleistung)</div>
              </div>

              {/* Preisanpassung nach SoH */}
              <div className="bg-green-50 rounded-xl p-6">
                <h3 className="font-bold text-gray-800 mb-4">Faustregel: Preis nach Batteriezustand anpassen</h3>
                <div className="space-y-3 text-sm md:text-base text-gray-700">
                  <div className="bg-white p-4 rounded-lg">
                    <strong className="text-green-700">SoH 95-100%:</strong> Marktpreis ohne Abzug (wie in Tabelle oben)
                  </div>
                  <div className="bg-white p-4 rounded-lg">
                    <strong className="text-green-600">SoH 90-94%:</strong> Marktpreis -3% bis -5%<br/>
                    <span className="text-sm text-gray-600">Beispiel: VW ID.3 für 26.000€ → zahle maximal 24.700-25.220€</span>
                  </div>
                  <div className="bg-white p-4 rounded-lg">
                    <strong className="text-blue-600">SoH 85-89%:</strong> Marktpreis -8% bis -12%<br/>
                    <span className="text-sm text-gray-600">Beispiel: VW ID.3 für 26.000€ → zahle maximal 22.880-23.920€</span>
                  </div>
                  <div className="bg-white p-4 rounded-lg">
                    <strong className="text-orange-600">SoH 80-84%:</strong> Marktpreis -15% bis -20%<br/>
                    <span className="text-sm text-gray-600">Beispiel: VW ID.3 für 26.000€ → zahle maximal 20.800-22.100€</span>
                  </div>
                  <div className="bg-white p-4 rounded-lg">
                    <strong className="text-red-600">SoH unter 80%:</strong> Nicht empfehlenswert oder Marktpreis -30%+<br/>
                    <span className="text-sm text-gray-600">Risiko zukünftiger Batteriedefekte zu hoch!</span>
                  </div>
                </div>
              </div>
            </section>

            {/* Section 8: Händler vs Privat */}
            <section id="haendler-privat" className="mb-8 md:mb-12">
              <h2 className="text-xl md:text-3xl font-bold text-gray-800 mb-4 md:mb-6 flex items-center gap-3">
                <ShoppingCart className="w-6 h-6 md:w-8 md:h-8 text-purple-600" />
                Händler vs. Privatkauf: Vor- und Nachteile
              </h2>

              <div className="grid md:grid-cols-2 gap-6">
                {/* Händler */}
                <div className="bg-white rounded-xl p-6 shadow-lg border-2 border-blue-500">
                  <h3 className="text-xl font-bold text-gray-800 mb-4 flex items-center gap-2">
                    Händlerkauf
                  </h3>
                  
                  <div className="mb-4">
                    <div className="text-sm font-semibold text-green-700 mb-2">✅ Vorteile:</div>
                    <div className="space-y-2 text-sm text-gray-700">
                      <div>• <strong>12 Monate Gewährleistung</strong> gesetzlich vorgeschrieben</div>
                      <div>• <strong>Professionelle Aufbereitung</strong> & TÜV neu</div>
                      <div>• <strong>Finanzierung</strong> möglich (oft zu guten Konditionen)</div>
                      <div>• <strong>Garantie-Verlängerung</strong> buchbar (500-1.500€)</div>
                      <div>• <strong>Rückgaberecht</strong> bei Online-Kauf (14 Tage)</div>
                    </div>
                  </div>

                  <div>
                    <div className="text-sm font-semibold text-red-700 mb-2">❌ Nachteile:</div>
                    <div className="space-y-2 text-sm text-gray-700">
                      <div>• <strong>15-25% teurer</strong> als Privatverkauf</div>
                      <div>• Weniger Verhandlungsspielraum</div>
                      <div>• Händlermarge (3.000-6.000€) eingepreist</div>
                    </div>
                  </div>

                  <div className="mt-6 bg-blue-50 p-4 rounded-lg">
                    <div className="text-sm font-semibold text-blue-700 mb-2">Geeignet für:</div>
                    <div className="text-sm text-gray-700">
                      Käufer, die <strong>Sicherheit</strong> wollen, keine Expertise haben oder <strong>Finanzierung</strong> benötigen.
                    </div>
                  </div>
                </div>

                {/* Privatkauf */}
                <div className="bg-white rounded-xl p-6 shadow-lg border-2 border-orange-500">
                  <h3 className="text-xl font-bold text-gray-800 mb-4 flex items-center gap-2">
                    Privatkauf
                  </h3>
                  
                  <div className="mb-4">
                    <div className="text-sm font-semibold text-green-700 mb-2">✅ Vorteile:</div>
                    <div className="space-y-2 text-sm text-gray-700">
                      <div>• <strong>15-25% günstiger</strong> als Händler</div>
                      <div>• <strong>Direkter Kontakt</strong> zum Vorbesitzer (Nutzungshistorie)</div>
                      <div>• <strong>Verhandlungsspielraum</strong> oft größer</div>
                      <div>• Originalzubehör oft inklusive (Wallbox, Winterreifen)</div>
                    </div>
                  </div>

                  <div>
                    <div className="text-sm font-semibold text-red-700 mb-2">❌ Nachteile:</div>
                    <div className="space-y-2 text-sm text-gray-700">
                      <div>• <strong>Keine Gewährleistung</strong> (kann ausgeschlossen werden)</div>
                      <div>• <strong>Höheres Risiko</strong> bei versteckten Mängeln</div>
                      <div>• <strong>TÜV</strong> oft abgelaufen oder knapp</div>
                      <div>• Keine Finanzierung möglich</div>
                      <div>• <strong>Selbst Expertise</strong> nötig oder Gutachten-Kosten</div>
                    </div>
                  </div>

                  <div className="mt-6 bg-orange-50 p-4 rounded-lg">
                    <div className="text-sm font-semibold text-orange-700 mb-2">Geeignet für:</div>
                    <div className="text-sm text-gray-700">
                      <strong>Erfahrene Käufer</strong> mit technischem Know-how oder Budget für professionellen Check (ADAC/TÜV).
                    </div>
                  </div>
                </div>
              </div>

              {/* Empfehlung */}
              <div className="mt-6 bg-purple-50 rounded-xl p-6">
                <h3 className="font-bold text-gray-800 mb-3 flex items-center gap-2">
                  <Info className="w-5 h-5 text-purple-600" />
                  Unsere Empfehlung:
                </h3>
                <div className="text-sm md:text-base text-gray-700 leading-relaxed">
                  <strong>Händler</strong>, wenn Sie zum ersten Mal ein E-Auto kaufen, wenig Expertise haben oder Finanzierung benötigen. Der Aufpreis von 3.000-5.000€ ist durch Gewährleistung und Sicherheit gerechtfertigt.
                  <br/><br/>
                  <strong>Privat</strong>, wenn Sie technisches Verständnis haben, einen professionellen Check (200€) einplanen und mit dem Verkäufer direkt sprechen können (Ladehistorie, Pflege, etc.). Ersparnis: 3.000-8.000€!
                  <br/><br/>
                  <strong>Kompromiss:</strong> Bei Händlern nach jungen Gebrauchten (unter 12 Monate, ex-Leasing) schauen – oft guter Zustand zu fairen Preisen mit voller Garantie.
                </div>
              </div>
            </section>

            {/* Section 9: Checkliste */}
            <section id="checkliste" className="mb-8 md:mb-12">
              <h2 className="text-xl md:text-3xl font-bold text-gray-800 mb-4 md:mb-6 flex items-center gap-3">
                <CheckCircle className="w-6 h-6 md:w-8 md:h-8 text-green-600" />
                Komplette Checkliste für den Gebrauchtkauf
              </h2>

              <div className="bg-gradient-to-br from-green-50 to-blue-50 rounded-xl p-6 md:p-8">
                <h3 className="text-xl font-bold text-gray-800 mb-6 text-center">
                  Die ultimative E-Auto Gebrauchtkauf-Checkliste
                </h3>

                {/* Vor dem Termin */}
                <div className="mb-6">
                  <h4 className="font-bold text-gray-800 mb-3 flex items-center gap-2">
                    <div className="bg-blue-600 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm">1</div>
                    Vor dem Besichtigungstermin:
                  </h4>
                  <div className="bg-white rounded-lg p-4 space-y-2 text-sm">
                    <div className="flex items-center gap-2">
                      <input type="checkbox" className="w-4 h-4" />
                      <span>Fahrzeughistorie prüfen (Carfax, AutoCheck)</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <input type="checkbox" className="w-4 h-4" />
                      <span>Marktpreis recherchieren (DAT, Schwacke, AutoScout24)</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <input type="checkbox" className="w-4 h-4" />
                      <span>Verkäufer nach Ladehistorie fragen (Screenshots)</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <input type="checkbox" className="w-4 h-4" />
                      <span>TÜV-Bericht einsehen (letzter Check)</span>
                    </div>
                  </div>
                </div>

                {/* Besichtigung */}
                <div className="mb-6">
                  <h4 className="font-bold text-gray-800 mb-3 flex items-center gap-2">
                    <div className="bg-green-600 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm">2</div>
                    Bei der Besichtigung:
                  </h4>
                  <div className="bg-white rounded-lg p-4 space-y-2 text-sm">
                    <div className="flex items-center gap-2">
                      <input type="checkbox" className="w-4 h-4" />
                      <span><strong>SoH (State of Health) prüfen</strong> – sollte ≥85% sein</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <input type="checkbox" className="w-4 h-4" />
                      <span>Reichweite bei 100% Ladung notieren</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <input type="checkbox" className="w-4 h-4" />
                      <span>Karosserie auf Unfallschäden prüfen (Lackdicke messen)</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <input type="checkbox" className="w-4 h-4" />
                      <span>Reifen: Profiltiefe ≥4mm, Alter ≤6 Jahre (DOT)</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <input type="checkbox" className="w-4 h-4" />
                      <span>Innenraum: Sitze, Elektronik, Feuchtigkeitsspuren</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <input type="checkbox" className="w-4 h-4" />
                      <span>Ladekabel vollständig (Typ 2 + Schuko)</span>
                    </div>
                  </div>
                </div>

                {/* Probefahrt */}
                <div className="mb-6">
                  <h4 className="font-bold text-gray-800 mb-3 flex items-center gap-2">
                    <div className="bg-purple-600 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm">3</div>
                    Probefahrt (mind. 30 Min.):
                  </h4>
                  <div className="bg-white rounded-lg p-4 space-y-2 text-sm">
                    <div className="flex items-center gap-2">
                      <input type="checkbox" className="w-4 h-4" />
                      <span>Beschleunigung & Rekuperation testen</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <input type="checkbox" className="w-4 h-4" />
                      <span>Autobahn: 120-130 km/h → Verbrauch notieren</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <input type="checkbox" className="w-4 h-4" />
                      <span><strong>Ladetest</strong> an öffentlicher Säule durchführen!</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <input type="checkbox" className="w-4 h-4" />
                      <span>Keine Fehlermeldungen im Display</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <input type="checkbox" className="w-4 h-4" />
                      <span>Reichweitenverlust realistisch (±15% OK)</span>
                    </div>
                  </div>
                </div>

                {/* Dokumente */}
                <div className="mb-6">
                  <h4 className="font-bold text-gray-800 mb-3 flex items-center gap-2">
                    <div className="bg-orange-600 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm">4</div>
                    Dokumente prüfen:
                  </h4>
                  <div className="bg-white rounded-lg p-4 space-y-2 text-sm">
                    <div className="flex items-center gap-2">
                      <input type="checkbox" className="w-4 h-4" />
                      <span>Fahrzeugbrief im Original vorhanden</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <input type="checkbox" className="w-4 h-4" />
                      <span>Serviceheft lückenlos & alle Updates dokumentiert</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <input type="checkbox" className="w-4 h-4" />
                      <span><strong>Batteriegarantie</strong> gültig & übertragbar</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <input type="checkbox" className="w-4 h-4" />
                      <span>TÜV nicht älter als 2 Monate (ohne Mängel)</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <input type="checkbox" className="w-4 h-4" />
                      <span>Batteriezertifikat / SoH-Gutachten vorhanden</span>
                    </div>
                  </div>
                </div>

                {/* Vor Vertragsabschluss */}
                <div>
                  <h4 className="font-bold text-gray-800 mb-3 flex items-center gap-2">
                    <div className="bg-red-600 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm">5</div>
                    Vor Vertragsabschluss:
                  </h4>
                  <div className="bg-white rounded-lg p-4 space-y-2 text-sm">
                    <div className="flex items-center gap-2">
                      <input type="checkbox" className="w-4 h-4" />
                      <span><strong>Professioneller Check</strong> (ADAC/TÜV, 100-200€)</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <input type="checkbox" className="w-4 h-4" />
                      <span>Kaufvertrag mit SoH, Garantie, Ladehistorie</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <input type="checkbox" className="w-4 h-4" />
                      <span>Gewährleistung NICHT ausschließen (bei Privatkauf)</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <input type="checkbox" className="w-4 h-4" />
                      <span>Preis verhandelt (ggf. nach SoH angepasst)</span>
                    </div>
                  </div>
                </div>
              </div>
         
            {/* Fazit */}
            <div className="bg-gradient-to-r from-green-600 to-blue-600 rounded-xl p-6 md:p-8 text-white mt-12">
              <h2 className="text-2xl md:text-3xl font-bold mb-4">
                Fazit: Ein gebrauchtes E-Auto ist eine sehr guter Einstieg.
              </h2>
              <p className="text-base md:text-lg leading-relaxed mb-4">
Der Kauf eines gebrauchten Elektroautos kann 2025 eine ausgezeichnete Entscheidung sein – vorausgesetzt, Sie gehen strukturiert vor und prüfen alle kritischen Punkte:              </p>
              <ul className="list-disc list-inside space-y-2 text-base md:text-lg mb-6">
                <li>90% + SoH</li>
                <li>Unter 60.000 km</li>
                <li>5+ Jahre Batteriegarantie</li>
              </ul>
              <p className="text-lg font-semibold">
 Wichtigster Tipp: Investieren Sie 100-200€ in einen professionellen Check (ADAC, TÜV, Dekra) – diese Kosten amortisieren sich durch Vermeidung teurer Reparaturen oder Fehlkäufe mehrfach!
              </p>
            </div>

            </section>

            {/* Quellen */}
            <div className="bg-gray-50 rounded-xl p-6 text-sm text-gray-600">
              <h3 className="font-semibold text-gray-800 mb-3">Quellen & weiterführende Informationen:</h3>
              <ul className="space-y-1">
                <li>• Deutsche Automobil Treuhand (DAT) – Restwertanalysen 2024/2025</li>
                <li>• ADAC – E-Auto Gebrauchtwagentest 2024</li>
                <li>• TÜV Report 2024 – Elektrofahrzeuge</li>
                <li>• AutoScout24 Marktanalyse – Gebrauchte E-Autos Januar 2025</li>
                <li>• Schwacke Liste – Restwerte Elektrofahrzeuge Q1/2025</li>
                <li>• Stiftung Warentest – E-Auto Gebrauchtkauf-Guide 2024</li>
              </ul>
            </div>

          </div>
        </article>

        {/* CTA Section */}
        <div className="bg-gradient-to-r from-blue-600 to-green-600 rounded-2xl p-8 md:p-12 text-center text-white shadow-xl mt-12">
          <h3 className="text-2xl md:text-3xl font-bold mb-4">
            Bereit für Ihr Elektroauto?
          </h3>
          <p className="text-base md:text-lg mb-6 max-w-2xl mx-auto">
            Nutzen Sie unseren kostenlosen Rechner, um herauszufinden, wie viel Sie mit einem Elektroauto sparen können!
          </p>
          <a 
            href="/rechner/kostenrechner"
            className="inline-flex items-center gap-3 bg-white text-blue-600 font-bold px-8 py-4 rounded-full hover:shadow-2xl hover:scale-105 transition-all duration-200"
          >
            <Calculator className="w-5 h-5" />
            Zum Kostenrechner
          </a>
        </div>

      </div>

      {/* Footer */}
      <footer className="bg-white mt-20 py-8 border-t border-gray-200">
        <div className="max-w-6xl mx-auto px-4 md:px-8">
          <div className="flex flex-wrap justify-center gap-6 mb-6">
            <a href="/impressum" className="text-base text-gray-600 hover:text-gray-900 hover:underline transition-all duration-200">
              Impressum
            </a>
            <span className="text-gray-400">|</span>
            <a href="/datenschutz" className="text-base text-gray-600 hover:text-gray-900 hover:underline transition-all duration-200">
              Datenschutz
            </a>
          </div>
          <div className="text-center text-sm text-gray-500">
            <p>© 2025 e-Autowelt. Alle Angaben ohne Gewähr.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
