import React, { useEffect } from 'react';
import SEO from '../components/SEO';
import Header from '../components/Header';
import { 
  ArrowLeft,
  Wallet,
  AlertCircle,
  CheckCircle,
  Calculator,
  Euro,
  Lightbulb,
  ArrowRight,
  Battery,
  FileText,
  Building2,
  TrendingDown,
  Zap,
  Car
} from 'lucide-react';

export default function BafaFoerderungFirmenwagenPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-white">
      <SEO 
        title="E-Auto Firmenwagen 2026: Förderung, Steuervorteile & 0,25%-Regel | e-Autowelt"
        description="Elektroauto als Firmenwagen 2026: 0,25%-Regel bis 100.000€, 75% Sonderabschreibung & Kfz-Steuerbefreiung bis 2035. Alle Vorteile für Unternehmen im Überblick!"
        keywords="BAFA Förderung Elektroauto Firmenwagen, E-Auto Dienstwagen, 0,25 Prozent Regelung, Elektroauto Firmenwagen Steuer, Sonderabschreibung E-Auto, Dienstwagen Elektroauto 2026"
        canonicalPath="/ratgeber/bafa-foerderung-elektroauto-firmenwagen"
        ogType="article"
        publishedDate="2026-02-13T12:00:00Z"
        modifiedDate="2026-02-13T12:00:00Z"
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
          {/* Hero Section */}
          <div className="relative h-64 md:h-96 bg-gradient-to-br from-blue-700 to-purple-700 overflow-hidden">
                        <img 
              src="/images/ratgeber/bafa-foerderung-firmenwagen-hero.webp"
              alt="Elektroauto an Wallbox für den täglichen Arbeitsweg"
              className="w-full h-full object-cover opacity-70"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 to-transparent"></div>
            <div className="absolute bottom-0 left-0 right-0 p-6 md:p-10 text-white">
              <div className="flex items-center gap-3 mb-3 flex-wrap">
                <div className="bg-white/30 backdrop-blur-md p-2 rounded-lg shadow-lg">
                  <Building2 className="w-6 h-6 md:w-8 md:h-8" />
                </div>
                <span className="text-xs md:text-sm bg-white/30 backdrop-blur-md px-3 py-1 rounded-full font-semibold shadow-lg">
                  📖 12 Min. Lesezeit
                </span>
                <span className="text-xs md:text-sm bg-white/30 backdrop-blur-md px-3 py-1 rounded-full font-semibold shadow-lg">
                  Aktualisiert am 13. Februar 2026
                </span>
              </div>
              <h1 className="text-2xl md:text-4xl lg:text-5xl font-bold leading-tight">
                E-Auto als Firmenwagen 2026: Förderung, Steuervorteile & Sonderabschreibung
              </h1>
            </div>
          </div>

          <div className="p-6 md:p-10">
            {/* Intro */}
            <div className="mb-8 md:mb-12">
              <p className="text-lg md:text-xl text-gray-600 leading-relaxed mb-4">
                Sie überlegen, Ihren Firmenwagen auf ein <strong>Elektroauto</strong> umzustellen? Die Rahmenbedingungen waren selten so günstig wie 2026. Obwohl die neue staatliche Kaufprämie ausschließlich für Privatpersonen gilt, profitieren Unternehmen und Selbstständige von einem ganzen Bündel an <strong>steuerlichen Vorteilen</strong>. Von der <strong>0,25%-Regel</strong> über die <strong>75%-Sonderabschreibung</strong> bis zur <strong>Kfz-Steuerbefreiung</strong> – der elektrische Firmenwagen rechnet sich 2026 so deutlich wie nie zuvor.
              </p>
              <div className="bg-blue-50 border-2 border-blue-200 rounded-xl p-6">
                <p className="text-base md:text-lg text-gray-700 leading-relaxed">
                  <strong className="text-blue-700">⚡ Schnell-Überblick:</strong> Die
                  klassische BAFA-Kaufprämie endete im Dezember 2023. Die neue E-Auto-Förderung ab 2026 (bis zu 6.000 €) gilt <strong>nur für Privatpersonen</strong>. Unternehmen profitieren stattdessen von: <strong>0,25% Dienstwagenbesteuerung</strong> (bis 100.000 € Listenpreis), <strong>75% Sonderabschreibung</strong> im ersten Jahr und <strong>Kfz-Steuerbefreiung bis 2035</strong>. <strong>Nutzen Sie unseren TCO-Rechner, um Ihre konkrete Ersparnis zu berechnen!</strong>
                </p>
              </div>
            </div>

            {/* Inhaltsverzeichnis */}
            <nav className="bg-gray-50 rounded-xl p-6 mb-8 md:mb-12">
              <h2 className="text-xl md:text-2xl font-bold text-gray-800 mb-4">
                Inhaltsverzeichnis
              </h2>
              <ol className="space-y-2 text-sm md:text-base">
                <li><a href="#bafa-historie" className="text-blue-600 hover:underline">1. BAFA-Förderung: Was war, was ist, was kommt?</a></li>
                <li><a href="#neue-foerderung-2026" className="text-blue-600 hover:underline">2. Neue E-Auto-Förderung 2026: Warum nicht für Firmenwagen?</a></li>
                <li><a href="#025-prozent-regel" className="text-blue-600 hover:underline">3. Die 0,25%-Regel: Steuervorteile beim Elektro-Dienstwagen</a></li>
                <li><a href="#sonderabschreibung" className="text-blue-600 hover:underline">4. 75% Sonderabschreibung: Der Investitionsbooster</a></li>
                <li><a href="#kfz-steuer" className="text-blue-600 hover:underline">5. Kfz-Steuerbefreiung bis 2035</a></li>
                <li><a href="#ladekosten" className="text-blue-600 hover:underline">6. Ladekosten-Erstattung: Was gilt ab 2026?</a></li>
                <li><a href="#rechenbeispiel" className="text-blue-600 hover:underline">7. Rechenbeispiel: So viel sparen Sie konkret</a></li>
                <li><a href="#plug-in-hybrid" className="text-blue-600 hover:underline">8. Plug-in-Hybride als Firmenwagen</a></li>
                <li><a href="#fazit" className="text-blue-600 hover:underline">9. Fazit: Lohnt sich der E-Firmenwagen 2026?</a></li>
              </ol>
            </nav>

            {/* Section 1: BAFA-Historie */}
            <section id="bafa-historie" className="mb-12 scroll-mt-24">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                1. BAFA-Förderung: Was war, was ist, was kommt?
              </h2>

              <p className="text-gray-700 mb-4 leading-relaxed">
                Das <strong>Bundesamt für Wirtschaft und Ausfuhrkontrolle (BAFA)</strong> war jahrelang die zentrale Anlaufstelle für die Elektroauto-Kaufprämie in Deutschland. Über den sogenannten <strong>Umweltbonus</strong> konnten sowohl Privatpersonen als auch Unternehmen bei der Anschaffung eines E-Autos oder Plug-in-Hybrids eine Förderung erhalten.
              </p>

              <div className="bg-yellow-50 border-l-4 border-yellow-500 p-6 mb-6">
                <div className="flex items-start">
                  <AlertCircle className="w-6 h-6 text-yellow-600 mr-3 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-bold text-lg text-gray-900 mb-2">Wichtig: BAFA-Umweltbonus endete am 17.12.2023</h3>
                    <p className="text-gray-700">Die klassische BAFA-Kaufprämie wurde Ende 2023 abrupt eingestellt. Seit September 2023 waren Unternehmen bereits von der Förderung ausgeschlossen. Die Einstellung erfolgte aufgrund von Haushaltsproblemen der damaligen Bundesregierung.</p>
                  </div>
                </div>
              </div>

              <p className="text-gray-700 mb-4 leading-relaxed">
                Die <strong>Historie der BAFA-Förderung</strong> für Firmenwagen lässt sich in drei Phasen unterteilen: Bis September 2023 konnten Unternehmen den vollen Umweltbonus beantragen – bis zu 4.500 Euro für reine E-Autos und 3.000 Euro für Plug-in-Hybride. Ab September 2023 wurde die Förderung auf Privatpersonen beschränkt. Und seit dem 17. Dezember 2023 gibt es überhaupt keine BAFA-Kaufprämie mehr.
              </p>

              <p className="text-gray-700 mb-4 leading-relaxed">
                Die gute Nachricht: Auch ohne direkte Kaufprämie hat der Gesetzgeber <strong>gezielt Steuervorteile für gewerbliche Elektrofahrzeuge</strong> geschaffen. Diese sind in Summe sogar deutlich wertvoller als die ehemalige BAFA-Prämie. Unternehmen profitieren seit Juli 2025 von verbesserten Rahmenbedingungen, die den E-Firmenwagen so attraktiv machen wie nie zuvor.
              </p>
            </section>

            {/* Section 2: Neue Förderung 2026 */}
            <section id="neue-foerderung-2026" className="mb-12 scroll-mt-24">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                2. Neue E-Auto-Förderung 2026: Warum nicht für Firmenwagen?
              </h2>

              <p className="text-gray-700 mb-4 leading-relaxed">
                Die Bundesregierung hat im Januar 2026 ein neues, <strong>sozial gestaffeltes Förderprogramm</strong> für Elektroautos beschlossen. Rückwirkend für alle Neuzulassungen ab dem 1. Januar 2026 können Zuschüsse zwischen <strong>1.500 und 6.000 Euro</strong> beantragt werden. Das Antragsportal soll voraussichtlich ab Mai 2026 über das BAFA freigeschaltet werden.
              </p>

              <div className="bg-red-50 border-l-4 border-red-500 p-6 mb-6">
                <div className="flex items-start">
                  <AlertCircle className="w-6 h-6 text-red-600 mr-3 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-bold text-lg text-gray-900 mb-2">Firmenwagen ausgeschlossen!</h3>
                    <p className="text-gray-700">Die neue E-Auto-Förderung 2026 gilt <strong>ausschließlich für Privatpersonen</strong>. Gewerbliche Nutzung, Firmenwagen und Unternehmen sind explizit nicht förderfähig. Die Einkommensgrenze liegt bei 80.000 € zu versteuerndem Haushaltseinkommen (mit Kindern bis 90.000 €).</p>
                  </div>
                </div>
              </div>

              <p className="text-gray-700 mb-4 leading-relaxed">
                Bundesumweltminister Carsten Schneider begründete die Entscheidung damit, dass die Regierung „bereits viel getan hat, um E-Autos als Firmenwagen attraktiv zu machen". Die neue Förderung soll gezielt <strong>Privathaushalte mit kleinem und mittlerem Einkommen</strong> unterstützen. Insgesamt stehen 3 Milliarden Euro für geschätzt 800.000 Fahrzeuge bereit.
              </p>

              <p className="text-gray-700 mb-4 leading-relaxed">
                Für Unternehmen bedeutet das: Die direkte Kaufprämie fällt weg. Doch die steuerlichen Vorteile, die der Gesetzgeber speziell für gewerbliche E-Fahrzeuge geschaffen hat, sind in vielen Fällen <strong>deutlich mehr wert als 6.000 Euro Zuschuss</strong>. Lesen Sie in den folgenden Abschnitten, welche Stellschrauben Ihnen zur Verfügung stehen.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
                <div className="bg-white p-6 rounded-lg border-2 border-blue-500 shadow-sm">
                  <div className="text-sm text-gray-600 mb-1">Neue Kaufprämie</div>
                  <div className="text-3xl font-bold text-blue-600">1.500–6.000 €</div>
                  <div className="text-xs text-gray-500 mt-1">Nur Privatpersonen</div>
                </div>
                <div className="bg-white p-6 rounded-lg border-2 border-emerald-500 shadow-sm">
                  <div className="text-sm text-gray-600 mb-1">Fördertopf gesamt</div>
                  <div className="text-3xl font-bold text-emerald-600">3 Mrd. €</div>
                  <div className="text-xs text-gray-500 mt-1">Für ca. 800.000 Fahrzeuge</div>
                </div>
                <div className="bg-white p-6 rounded-lg border-2 border-purple-500 shadow-sm">
                  <div className="text-sm text-gray-600 mb-1">Antragsportal</div>
                  <div className="text-3xl font-bold text-purple-600">Mai 2026</div>
                  <div className="text-xs text-gray-500 mt-1">Rückwirkend ab 01.01.2026</div>
                </div>
              </div>
            </section>

            {/* Section 3: 0,25%-Regel */}
            <section id="025-prozent-regel" className="mb-12 scroll-mt-24">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                3. Die 0,25%-Regel: Steuervorteile beim Elektro-Dienstwagen
              </h2>

              <p className="text-gray-700 mb-4 leading-relaxed">
                Der größte <strong>finanzielle Hebel</strong> für Arbeitnehmer mit einem elektrischen Firmenwagen ist die sogenannte <strong>0,25%-Regel</strong>. Normalerweise müssen Sie für die private Nutzung eines Dienstwagens monatlich 1% des Bruttolistenpreises als geldwerten Vorteil versteuern. Bei reinen Elektrofahrzeugen sind es nur 0,25%.
              </p>

              <div className="bg-emerald-50 border-l-4 border-emerald-500 p-6 mb-6">
                <div className="flex items-start">
                  <CheckCircle className="w-6 h-6 text-emerald-600 mr-3 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-bold text-lg text-gray-900 mb-2">Seit Juli 2025: Grenze auf 100.000 € angehoben!</h3>
                    <p className="text-gray-700">Im Rahmen des Investitionssofortprogramms wurde die Bruttolistenpreisgrenze für die 0,25%-Regel von 70.000 € auf <strong>100.000 €</strong> angehoben. Damit profitieren jetzt auch höherpreisige Modelle wie Tesla Model S, Mercedes EQE oder BMW iX von der günstigsten Versteuerung.</p>
                  </div>
                </div>
              </div>

              <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-4">So funktioniert die Besteuerung im Vergleich</h3>

              <div className="overflow-x-auto mb-6">
                <table className="w-full border-collapse">
                  <thead>
                    <tr className="bg-gray-100">
                      <th className="border border-gray-300 px-4 py-3 text-left text-sm font-bold text-gray-800">Antrieb</th>
                      <th className="border border-gray-300 px-4 py-3 text-left text-sm font-bold text-gray-800">Regelung</th>
                      <th className="border border-gray-300 px-4 py-3 text-left text-sm font-bold text-gray-800">Beispiel (50.000 € BLP)</th>
                      <th className="border border-gray-300 px-4 py-3 text-left text-sm font-bold text-gray-800">Geldwerter Vorteil/Monat</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="bg-red-50">
                      <td className="border border-gray-300 px-4 py-3 text-sm">Verbrenner</td>
                      <td className="border border-gray-300 px-4 py-3 text-sm">1,0%-Regel</td>
                      <td className="border border-gray-300 px-4 py-3 text-sm">1,0% × 50.000 €</td>
                      <td className="border border-gray-300 px-4 py-3 text-sm font-bold text-red-600">500 €/Monat</td>
                    </tr>
                    <tr className="bg-yellow-50">
                      <td className="border border-gray-300 px-4 py-3 text-sm">Plug-in-Hybrid</td>
                      <td className="border border-gray-300 px-4 py-3 text-sm">0,5%-Regel</td>
                      <td className="border border-gray-300 px-4 py-3 text-sm">0,5% × 50.000 €</td>
                      <td className="border border-gray-300 px-4 py-3 text-sm font-bold text-yellow-600">250 €/Monat</td>
                    </tr>
                    <tr className="bg-emerald-50">
                      <td className="border border-gray-300 px-4 py-3 text-sm">Elektro (≤ 100.000 €)</td>
                      <td className="border border-gray-300 px-4 py-3 text-sm">0,25%-Regel</td>
                      <td className="border border-gray-300 px-4 py-3 text-sm">0,25% × 50.000 €</td>
                      <td className="border border-gray-300 px-4 py-3 text-sm font-bold text-emerald-600">125 €/Monat</td>
                    </tr>
                    <tr className="bg-blue-50">
                      <td className="border border-gray-300 px-4 py-3 text-sm">Elektro (&gt; 100.000 €)</td>
                      <td className="border border-gray-300 px-4 py-3 text-sm">0,5%-Regel</td>
                      <td className="border border-gray-300 px-4 py-3 text-sm">0,5% × 120.000 €</td>
                      <td className="border border-gray-300 px-4 py-3 text-sm font-bold text-blue-600">600 €/Monat</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <p className="text-gray-700 mb-4 leading-relaxed">
                Auch für den <strong>Arbeitsweg</strong> gilt der reduzierte Satz. Statt 0,03% des Bruttolistenpreises pro Entfernungskilometer werden bei E-Autos nur 0,25% der reduzierten Bemessungsgrundlage angesetzt. Das macht den E-Firmenwagen besonders für Pendler attraktiv.
              </p>

              <div className="bg-blue-50 border-l-4 border-blue-500 p-6 mb-6">
                <div className="flex items-start">
                  <Lightbulb className="w-6 h-6 text-blue-600 mr-3 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-bold text-lg text-gray-900 mb-2">Tipp: Vorsicht bei Preiserhöhungen!</h3>
                    <p className="text-gray-700">Maßgeblich ist der <strong>Bruttolistenpreis zum Zeitpunkt der Erstzulassung</strong>, nicht der tatsächliche Kaufpreis. Wenn der Hersteller den Listenpreis Ihres bestellten Modells nachträglich über 100.000 € anhebt, rutschen Sie von 0,25% auf 0,5% – mit erheblichen Mehrkosten.</p>
                  </div>
                </div>
              </div>

              <p className="text-gray-700 mb-4 leading-relaxed">
                Die <strong>0,25%-Regel</strong> gilt für Fahrzeuge, die nach dem 30. Juni 2025 und vor dem 1. Januar 2031 angeschafft werden. Auch gebrauchte E-Autos profitieren, sofern sie erstmalig als Dienstwagen eingesetzt werden. Selbstständige und Freiberufler können alternativ ein Fahrtenbuch führen – dann werden nur 25% der tatsächlichen Anschaffungskosten als Bemessungsgrundlage angesetzt.
              </p>
            </section>

            {/* Section 4: Sonderabschreibung */}
            <section id="sonderabschreibung" className="mb-12 scroll-mt-24">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                4. 75% Sonderabschreibung: Der Investitionsbooster für E-Firmenwagen
              </h2>

              <p className="text-gray-700 mb-4 leading-relaxed">
                Seit dem 1. Juli 2025 können Unternehmen die sogenannte <strong>„Turboabschreibung"</strong> für Elektrofahrzeuge nutzen. Sie dürfen <strong>75% der Anschaffungskosten bereits im ersten Jahr</strong> steuerlich absetzen. Dieses Instrument wurde als Teil des Investitionssofortprogramms der Bundesregierung eingeführt, um den Hochlauf der Elektromobilität bei Flottenkunden zu beschleunigen.
              </p>

              <div className="bg-emerald-50 border-l-4 border-emerald-500 p-6 mb-6">
                <div className="flex items-start">
                  <TrendingDown className="w-6 h-6 text-emerald-600 mr-3 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-bold text-lg text-gray-900 mb-2">Abschreibungsstaffel über 6 Jahre</h3>
                    <p className="text-gray-700">
                      <strong>1. Jahr: 75%</strong> der Anschaffungskosten · 
                      2. Jahr: 10% · 
                      3. Jahr: 5% · 
                      4. Jahr: 5% · 
                      5. Jahr: 3% · 
                      6. Jahr: 2%
                    </p>
                  </div>
                </div>
              </div>

              <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-4">Voraussetzungen für die Sonderabschreibung</h3>

              <p className="text-gray-700 mb-4 leading-relaxed">
                Die Turboabschreibung ist an klare Bedingungen geknüpft. Das Fahrzeug muss ein <strong>reines Elektrofahrzeug (BEV)</strong> oder Brennstoffzellenfahrzeug sein – Plug-in-Hybride sind ausgeschlossen. Die Anschaffung muss zwischen dem 1. Juli 2025 und dem 31. Dezember 2027 erfolgen. Das Fahrzeug muss ins <strong>Betriebsvermögen</strong> aufgenommen werden.
              </p>

              <div className="bg-yellow-50 border-l-4 border-yellow-500 p-6 mb-6">
                <div className="flex items-start">
                  <AlertCircle className="w-6 h-6 text-yellow-600 mr-3 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-bold text-lg text-gray-900 mb-2">Achtung: Leasing profitiert nicht!</h3>
                    <p className="text-gray-700">Die Sonderabschreibung gilt <strong>nur für gekaufte Fahrzeuge</strong>. Beim Leasing ist die Leasinggesellschaft wirtschaftlicher Eigentümer und nimmt die Abschreibung vor. Für Unternehmen, die kaufen statt leasen, ist die Turboabschreibung jedoch ein enormer Liquiditätsvorteil im Anschaffungsjahr. Alternative: <strong>Mietkauf</strong>, bei dem das Fahrzeug direkt in der Bilanz aktiviert wird.</p>
                  </div>
                </div>
              </div>

              <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-4">Rechenbeispiel Sonderabschreibung</h3>

              <p className="text-gray-700 mb-4 leading-relaxed">
                Ihr Unternehmen kauft im Jahr 2026 einen elektrischen Firmenwagen für <strong>60.000 € netto</strong>. Im ersten Jahr können Sie 45.000 € (75%) steuerlich absetzen. Bei einem Unternehmensteuersatz von rund 30% ergibt sich eine <strong>Steuerersparnis von 13.500 €</strong> allein im Anschaffungsjahr. Über die gesamte Nutzungsdauer bleibt die Gesamtabschreibung gleich – der Vorteil liegt in der <strong>vorgezogenen Liquidität</strong>.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div className="bg-white p-6 rounded-lg border-2 border-emerald-500 shadow-sm">
                  <div className="text-sm text-gray-600 mb-1">AfA im 1. Jahr (75%)</div>
                  <div className="text-3xl font-bold text-emerald-600">45.000 €</div>
                  <div className="text-xs text-gray-500 mt-1">Bei 60.000 € Netto-Kaufpreis</div>
                </div>
                <div className="bg-white p-6 rounded-lg border-2 border-blue-500 shadow-sm">
                  <div className="text-sm text-gray-600 mb-1">Steuerersparnis Jahr 1</div>
                  <div className="text-3xl font-bold text-blue-600">~13.500 €</div>
                  <div className="text-xs text-gray-500 mt-1">Bei ~30% Steuersatz</div>
                </div>
              </div>

              <p className="text-gray-700 mb-4 leading-relaxed">
                Wichtig: Die Bundesregierung hat klargestellt, dass die Sonderabschreibung auch für <strong>gebrauchte E-Fahrzeuge</strong> gilt, die erstmalig in das Betriebsvermögen aufgenommen werden. Das eröffnet Möglichkeiten beim Kauf von Leasingrückläufern oder jungen Gebrauchten.
              </p>
            </section>

            {/* Section 5: Kfz-Steuer */}
            <section id="kfz-steuer" className="mb-12 scroll-mt-24">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                5. Kfz-Steuerbefreiung bis 2035 – auch für Firmenwagen
              </h2>

              <p className="text-gray-700 mb-4 leading-relaxed">
                Im Dezember 2025 hat der Bundestag die <strong>Kfz-Steuerbefreiung für reine Elektrofahrzeuge um fünf Jahre verlängert</strong>. Die Regelung gilt jetzt für Neuzulassungen bis zum 31. Dezember 2030. Die Steuerbefreiung läuft maximal zehn Jahre, längstens bis zum 31. Dezember 2035.
              </p>

              <div className="bg-emerald-50 border-l-4 border-emerald-500 p-6 mb-6">
                <div className="flex items-start">
                  <Wallet className="w-6 h-6 text-emerald-600 mr-3 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-bold text-lg text-gray-900 mb-2">Konkret bedeutet das:</h3>
                    <p className="text-gray-700">
                      Ein Anfang 2026 zugelassenes Elektroauto ist <strong>fast 10 Jahre</strong> von der Kfz-Steuer befreit. Bei einem Halterwechsel bleibt die Befreiung erhalten – jedoch nur bis zum Ablauf des ursprünglichen Befreiungszeitraums. Die Regelung gilt <strong>sowohl für private als auch für gewerbliche Fahrzeuge</strong>.
                    </p>
                  </div>
                </div>
              </div>

              <p className="text-gray-700 mb-4 leading-relaxed">
                Für Unternehmen mit größeren Fuhrparks summiert sich dieser Vorteil erheblich. Je nach Fahrzeugklasse sparen Sie <strong>mehrere hundert Euro pro Jahr und Fahrzeug</strong>. Zum Vergleich: Ein vergleichbarer Diesel-Firmenwagen mit 150 PS kostet je nach CO₂-Ausstoß schnell 200–400 € Kfz-Steuer jährlich.
              </p>

              <p className="text-gray-700 mb-4 leading-relaxed">
                Beachten Sie: Die Befreiung gilt <strong>ausschließlich für reine Elektrofahrzeuge (BEV)</strong>. Plug-in-Hybride sind von der Kfz-Steuerbefreiung nicht betroffen und werden regulär besteuert.
              </p>
            </section>

            {/* Section 6: Ladekosten */}
            <section id="ladekosten" className="mb-12 scroll-mt-24">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                6. Ladekosten-Erstattung: Was gilt ab 2026?
              </h2>

              <p className="text-gray-700 mb-4 leading-relaxed">
                Wer seinen elektrischen Firmenwagen zu Hause lädt, kann sich die Kosten vom Arbeitgeber <strong>steuerfrei erstatten</strong> lassen. Ab 2026 gibt es hier jedoch eine wichtige Änderung: Die bisherigen monatlichen <strong>Pauschalbeträge für den Ladestrom-Ersatz entfallen</strong>.
              </p>

              <div className="bg-yellow-50 border-l-4 border-yellow-500 p-6 mb-6">
                <div className="flex items-start">
                  <Zap className="w-6 h-6 text-yellow-600 mr-3 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-bold text-lg text-gray-900 mb-2">Änderung ab 01.01.2026</h3>
                    <p className="text-gray-700">Die bisherigen Pauschalen (70 €/Monat für E-Autos, 35 €/Monat für Hybride ohne Arbeitgeber-Lademöglichkeit) entfallen. Stattdessen können Unternehmen die Ladekosten nach <strong>tatsächlichem Verbrauch</strong> oder über eine <strong>Strompreispauschale</strong> auf Basis des Durchschnittsstrompreises erstatten – in beiden Fällen ist ein Nachweis der geladenen Strommenge erforderlich.</p>
                  </div>
                </div>
              </div>

              <p className="text-gray-700 mb-4 leading-relaxed">
                Das <strong>Laden beim Arbeitgeber</strong> bleibt weiterhin steuerfrei gemäß § 3 Nr. 46 EStG. Auch die Überlassung einer Wallbox durch den Arbeitgeber – ob als Dauerleihgabe oder als Installation am Wohnort des Mitarbeiters – kann steuerfrei erfolgen.
              </p>

              <p className="text-gray-700 mb-4 leading-relaxed">
                Für die <strong>genaue Abrechnung</strong> der Ladekosten zu Hause empfiehlt sich eine Wallbox mit <strong>MID-zertifiziertem Stromzähler</strong>. So können Sie den Verbrauch exakt nachweisen und dem Arbeitgeber die entsprechenden Ladedaten zur Erstattung übermitteln.
              </p>
            </section>

            {/* Section 7: Rechenbeispiel */}
            <section id="rechenbeispiel" className="mb-12 scroll-mt-24">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                7. Rechenbeispiel: So viel sparen Sie mit einem E-Firmenwagen
              </h2>

              <p className="text-gray-700 mb-4 leading-relaxed">
                Vergleichen wir einen <strong>elektrischen Firmenwagen</strong> mit einem vergleichbaren Verbrenner anhand eines konkreten Beispiels. Wir nehmen einen Bruttolistenpreis von 50.000 € und einen persönlichen Steuersatz von 40% an.
              </p>

              <div className="bg-gray-50 rounded-xl p-6 mb-6">
                <h3 className="font-bold text-lg text-gray-900 mb-4">Vergleich: Monatliche Steuerbelastung (private Nutzung)</h3>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="bg-white p-5 rounded-lg border-2 border-red-300">
                    <h4 className="font-bold text-red-600 mb-3">🔴 Verbrenner-Firmenwagen</h4>
                    <p className="text-sm text-gray-700 mb-1">Geldwerter Vorteil: 1% × 50.000 € = <strong>500 €/Monat</strong></p>
                    <p className="text-sm text-gray-700 mb-1">Steuer (40%): <strong>200 €/Monat</strong></p>
                    <p className="text-sm text-gray-700">Jährliche Steuerbelastung: <strong className="text-red-600">2.400 €</strong></p>
                  </div>
                  <div className="bg-white p-5 rounded-lg border-2 border-emerald-300">
                    <h4 className="font-bold text-emerald-600 mb-3">🟢 Elektro-Firmenwagen</h4>
                    <p className="text-sm text-gray-700 mb-1">Geldwerter Vorteil: 0,25% × 50.000 € = <strong>125 €/Monat</strong></p>
                    <p className="text-sm text-gray-700 mb-1">Steuer (40%): <strong>50 €/Monat</strong></p>
                    <p className="text-sm text-gray-700">Jährliche Steuerbelastung: <strong className="text-emerald-600">600 €</strong></p>
                  </div>
                </div>

                <div className="mt-4 bg-emerald-100 rounded-lg p-4 text-center">
                  <p className="text-lg font-bold text-emerald-700">
                    Ersparnis: 1.800 € pro Jahr = 150 € pro Monat weniger Steuern!
                  </p>
                </div>
              </div>

              <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-4">Gesamtvorteil über 4 Jahre Haltedauer</h3>

              <div className="overflow-x-auto mb-6">
                <table className="w-full border-collapse">
                  <thead>
                    <tr className="bg-gray-100">
                      <th className="border border-gray-300 px-4 py-3 text-left text-sm font-bold text-gray-800">Vorteil</th>
                      <th className="border border-gray-300 px-4 py-3 text-left text-sm font-bold text-gray-800">Ersparnis</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="border border-gray-300 px-4 py-3 text-sm">0,25%-Regel (4 Jahre × 1.800 €)</td>
                      <td className="border border-gray-300 px-4 py-3 text-sm font-bold text-emerald-600">7.200 €</td>
                    </tr>
                    <tr className="bg-gray-50">
                      <td className="border border-gray-300 px-4 py-3 text-sm">Kfz-Steuerbefreiung (4 Jahre × ~300 €)</td>
                      <td className="border border-gray-300 px-4 py-3 text-sm font-bold text-emerald-600">~1.200 €</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 px-4 py-3 text-sm">Geringere Energiekosten (Strom vs. Diesel)</td>
                      <td className="border border-gray-300 px-4 py-3 text-sm font-bold text-emerald-600">~3.000–5.000 €</td>
                    </tr>
                    <tr className="bg-gray-50">
                      <td className="border border-gray-300 px-4 py-3 text-sm">Geringere Wartungskosten</td>
                      <td className="border border-gray-300 px-4 py-3 text-sm font-bold text-emerald-600">~1.500–2.500 €</td>
                    </tr>
                    <tr className="bg-emerald-50">
                      <td className="border border-gray-300 px-4 py-3 text-sm font-bold">Gesamtersparnis (4 Jahre)</td>
                      <td className="border border-gray-300 px-4 py-3 text-sm font-bold text-emerald-600 text-lg">12.900–15.900 €</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <p className="text-gray-700 mb-4 leading-relaxed">
                Hinzu kommt bei gekauften Fahrzeugen der <strong>Liquiditätsvorteil durch die Sonderabschreibung</strong> – bei 60.000 € Kaufpreis sind das bis zu 13.500 € weniger Steuerlast im ersten Jahr. Der E-Firmenwagen übertrifft damit die Vorteile der ehemaligen BAFA-Prämie deutlich.
              </p>
            </section>

            {/* Section 8: Plug-in-Hybride */}
            <section id="plug-in-hybrid" className="mb-12 scroll-mt-24">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                8. Plug-in-Hybride als Firmenwagen: Was gilt 2026?
              </h2>

              <p className="text-gray-700 mb-4 leading-relaxed">
                Auch <strong>Plug-in-Hybride (PHEV)</strong> genießen steuerliche Vorteile als Firmenwagen – allerdings mit <strong>strengeren Auflagen</strong> als reine Elektrofahrzeuge. Seit 2025 gelten verschärfte Bedingungen für die vergünstigte 0,5%-Besteuerung.
              </p>

              <div className="bg-blue-50 border-l-4 border-blue-500 p-6 mb-6">
                <div className="flex items-start">
                  <Battery className="w-6 h-6 text-blue-600 mr-3 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-bold text-lg text-gray-900 mb-2">Voraussetzungen für die 0,5%-Regel bei PHEV (ab 2025)</h3>
                    <p className="text-gray-700">
                      Mindestens <strong>80 km elektrische Reichweite</strong> ODER maximal <strong>50 g CO₂/km</strong> nach WLTP. Fahrzeuge, die diese Bedingungen nicht erfüllen, fallen auf die volle 1%-Regelung zurück. Vor 2025 angeschaffte PHEV behalten ihren bisherigen Steuerstatus.
                    </p>
                  </div>
                </div>
              </div>

              <p className="text-gray-700 mb-4 leading-relaxed">
                Im Vergleich zum reinen E-Auto haben Plug-in-Hybride als Firmenwagen einige <strong>Nachteile</strong>: Die 0,5%-Regel bedeutet den doppelten Steuersatz gegenüber der 0,25%-Regel für BEVs. Die Sonderabschreibung von 75% gilt nicht für Hybride. Und die Kfz-Steuerbefreiung greift ebenfalls nur für reine Elektrofahrzeuge.
              </p>

              <p className="text-gray-700 mb-4 leading-relaxed">
                Bei der <strong>neuen Kaufprämie 2026</strong> werden Plug-in-Hybride für Privatpersonen allerdings wieder gefördert – mit bis zu 4.500 € bei Erfüllung der Voraussetzungen (max. 60 g CO₂/km oder mind. 80 km elektrische Reichweite).
              </p>
            </section>

            {/* Fazit */}
            <section id="fazit" className="mb-8 md:mb-12 scroll-mt-24">
              <div className="bg-gradient-to-r from-blue-600 to-green-600 rounded-xl p-6 md:p-8 text-white">
                <h2 className="text-2xl md:text-3xl font-bold mb-4">
                  Fazit: Der E-Firmenwagen lohnt sich 2026 mehr denn je
                </h2>
                <p className="text-base md:text-lg leading-relaxed mb-4">
                  Auch wenn Unternehmen von der neuen BAFA-Kaufprämie 2026 ausgeschlossen sind, war der <strong>elektrische Firmenwagen noch nie so attraktiv</strong> wie jetzt. Die Kombination aus 0,25%-Besteuerung (bis 100.000 € Listenpreis), 75% Sonderabschreibung im ersten Jahr und Kfz-Steuerbefreiung bis 2035 ergibt einen <strong>Gesamtvorteil von 12.000–16.000 € über vier Jahre</strong> gegenüber einem vergleichbaren Verbrenner.
                </p>
                <p className="text-base md:text-lg leading-relaxed mb-6">
                  Für Arbeitnehmer bedeutet das: Jeden Monat <strong>bis zu 150 € weniger Steuern</strong> bei einem 50.000-€-Fahrzeug. Für Unternehmer und Selbstständige kommt die enorme Liquiditätsentlastung durch die Turboabschreibung hinzu. Die steuerlichen Vorteile übertreffen die ehemalige BAFA-Prämie deutlich.
                </p>
                <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
                  <p className="text-lg font-semibold">
                    💡 Unser Tipp: Nutzen Sie unseren <strong>TCO-Rechner</strong>, um die Gesamtkosten Ihres Wunsch-Elektrofahrzeugs als Firmenwagen zu berechnen. Und handeln Sie zeitnah – die Sonderabschreibung gilt nur für Anschaffungen bis Ende 2027!
                  </p>
                </div>
              </div>
            </section>

            {/* FAQ Section */}
            <section id="faq" className="mb-8 md:mb-12 scroll-mt-24">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Häufig gestellte Fragen
              </h2>

              <div className="space-y-4">
                <div className="bg-gray-50 rounded-xl p-6">
                  <h3 className="font-bold text-lg text-gray-900 mb-2">Gibt es 2026 eine BAFA-Förderung für Elektro-Firmenwagen?</h3>
                  <p className="text-gray-700">Nein. Die neue E-Auto-Förderung ab 2026 (1.500–6.000 €) gilt ausschließlich für Privatpersonen. Unternehmen profitieren stattdessen von umfangreichen steuerlichen Vorteilen wie der 0,25%-Regel, der 75% Sonderabschreibung und der Kfz-Steuerbefreiung.</p>
                </div>

                <div className="bg-gray-50 rounded-xl p-6">
                  <h3 className="font-bold text-lg text-gray-900 mb-2">Bis zu welchem Preis gilt die 0,25%-Regel?</h3>
                  <p className="text-gray-700">Seit Juli 2025 gilt die 0,25%-Regel für reine Elektrofahrzeuge mit einem Bruttolistenpreis bis 100.000 €. Bei einem höheren Listenpreis greift die 0,5%-Regel. Diese Regelung ist bis Ende 2030 befristet.</p>
                </div>

                <div className="bg-gray-50 rounded-xl p-6">
                  <h3 className="font-bold text-lg text-gray-900 mb-2">Gilt die Sonderabschreibung auch für geleaste Fahrzeuge?</h3>
                  <p className="text-gray-700">Nein. Die 75% Sonderabschreibung gilt nur für gekaufte Fahrzeuge, die in das Betriebsvermögen aufgenommen werden. Beim Leasing ist die Leasinggesellschaft Eigentümer. Eine Alternative ist der Mietkauf, bei dem das Fahrzeug direkt in der Bilanz des Unternehmens aktiviert wird.</p>
                </div>

                <div className="bg-gray-50 rounded-xl p-6">
                  <h3 className="font-bold text-lg text-gray-900 mb-2">Profitieren Plug-in-Hybride von den gleichen Vorteilen?</h3>
                  <p className="text-gray-700">Teilweise. Plug-in-Hybride können die 0,5%-Regel nutzen (mind. 80 km el. Reichweite oder max. 50 g CO₂/km). Die Sonderabschreibung (75%) und die Kfz-Steuerbefreiung gelten jedoch nur für reine Elektrofahrzeuge.</p>
                </div>

                <div className="bg-gray-50 rounded-xl p-6">
                  <h3 className="font-bold text-lg text-gray-900 mb-2">Wie werden Ladekosten ab 2026 erstattet?</h3>
                  <p className="text-gray-700">Ab 2026 entfallen die bisherigen monatlichen Pauschalen. Stattdessen können Arbeitgeber Ladekosten nach tatsächlichem Verbrauch oder über die Strompreispauschale steuerfrei erstatten – jeweils mit Nachweis der geladenen Strommenge.</p>
                </div>
              </div>
            </section>

            {/* CTA */}
            <div className="bg-gradient-to-r from-purple-600 to-blue-600 rounded-2xl p-8 text-center text-white mb-8">
              <h3 className="text-2xl font-bold mb-4">
                📊 Firmenwagen-Kosten berechnen
              </h3>
              <p className="text-lg mb-6 max-w-2xl mx-auto">
                Vergleichen Sie die Gesamtkosten eines Elektro-Firmenwagens mit einem 
                Verbrenner – inklusive aller Steuervorteile, Energiekosten und Wartung.
              </p>
              <a 
                href="/rechner/kostenrechner"
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
            <li>• Bundesumweltministerium: Pressemitteilung zum neuen E-Auto-Förderprogramm (Stand: Januar 2026)</li>
            <li>• Bundesregierung: Investitionssofortprogramm – 75% Sonderabschreibung für E-Fahrzeuge (Stand: Juli 2025)</li>
            <li>• Bundesfinanzministerium: Verlängerung der Kfz-Steuerbefreiung für Elektrofahrzeuge (Stand: Dezember 2025)</li>
            <li>• § 6 Abs. 1 Nr. 4 EStG: Dienstwagenbesteuerung für Elektrofahrzeuge</li>
            <li>• § 7 Abs. 2a EStG: Beschleunigte Abschreibung für Elektrofahrzeuge</li>
            <li>• ADAC: E-Auto als Firmenwagen – Versteuerung und Abrechnung 2026</li>
            <li>• Achtes Gesetz zur Änderung des Kraftfahrzeugsteuergesetzes (Bundestagsbeschluss 04.12.2025)</li>
          </ul>
          <p className="mt-4 leading-relaxed">
            <strong>Haftungsausschluss:</strong> Alle Angaben ohne Gewähr. Dieser Artikel stellt keine Steuerberatung dar. Die steuerlichen Regelungen können sich ändern und im Einzelfall abweichen. Wir empfehlen, aktuelle Informationen bei Ihrem Steuerberater oder dem Bundesamt für Wirtschaft und Ausfuhrkontrolle (BAFA) zu prüfen.
          </p>
        </div>

        {/* Related Articles */}
        <div className="mt-8 bg-blue-50 rounded-xl p-6">
          <h3 className="text-lg font-bold text-gray-800 mb-4">
            📚 Weitere hilfreiche Artikel:
          </h3>
          <div className="space-y-2">
            <a href="/ratgeber/strompreise-2025" className="block text-blue-600 hover:underline text-sm md:text-base">
              → Strompreise 2025/2026: Was kostet Strom aktuell?
            </a>
            <a href="/ratgeber/wallbox-kosten-installation" className="block text-blue-600 hover:underline text-sm md:text-base">
              → Wallbox-Kosten & Installation: Komplett-Guide
            </a>
            <a href="/rechner/kostenrechner" className="block text-blue-600 hover:underline text-sm md:text-base">
              → TCO-Rechner: Gesamtkosten E-Auto vs. Verbrenner vergleichen
            </a>
            <a href="/ratgeber/elektroauto-reichweite-winter-test" className="block text-blue-600 hover:underline text-sm md:text-base">
              → Elektroauto Reichweite im Winter: Praxistest & Tipps
            </a>
            <a href="/rechner/gebrauchtwagenbatterierechner" className="block text-blue-600 hover:underline text-sm md:text-base">
              → Batterie-Check: Gebrauchtes E-Auto bewerten
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
            <p>© 2026 e-Autowelt. Alle Angaben ohne Gewähr.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
