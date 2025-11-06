import React from 'react';
import { Zap, Euro, Leaf, Battery, TrendingUp, Home } from 'lucide-react';

export default function InformationenPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-green-50">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 bg-white shadow-md z-50">
        <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
          <a href="/start" className="flex items-center gap-3 hover:opacity-80 transition-opacity">
            <Zap className="w-8 h-8 text-blue-600" />
            <h1 className="text-2xl font-bold text-gray-800">Elektroauto-Rechner</h1>
          </a>
          <nav className="flex gap-6">
            <a 
              href="/rechner" 
              className="text-lg font-medium text-gray-700 hover:text-blue-600 transition-colors"
            >
              Rechner
            </a>
            <a 
              href="/informationen" 
              className="text-lg font-medium text-blue-600 transition-colors"
            >
              Informationen
            </a>
          </nav>
        </div>
      </header>

      {/* Spacer for fixed header */}
      <div className="h-20"></div>

      <div className="max-w-6xl mx-auto px-4 md:px-8 py-12">
        <div className="bg-white rounded-2xl shadow-2xl p-8 md:p-12">
          <h2 className="text-5xl font-bold text-gray-800 mb-12 text-center">Wissenswertes über Elektroautos</h2>
          
          <div className="space-y-12">
            {/* Vorteile */}
            <div className="bg-green-50 rounded-xl p-8">
              <h3 className="text-3xl font-bold text-gray-800 mb-6 flex items-center gap-3">
                <Leaf className="w-8 h-8 text-green-600" />
                Vorteile von Elektroautos
              </h3>
              <div className="grid md:grid-cols-2 gap-6 text-lg text-gray-700">
                <div className="bg-white p-6 rounded-lg">
                  <p className="font-bold mb-3 text-xl">🌱 Umweltfreundlich</p>
                  <p>40-50% weniger CO₂-Emissionen über die gesamte Lebensdauer im Vergleich zu Verbrennern. Mit erneuerbarem Strom wird die Bilanz noch besser.</p>
                </div>
                <div className="bg-white p-6 rounded-lg">
                  <p className="font-bold mb-3 text-xl">💰 Niedrigere Betriebskosten</p>
                  <p>Strom ist günstiger als Benzin. Wartungskosten sind etwa 35% niedriger - keine Ölwechsel, weniger Verschleißteile.</p>
                </div>
                <div className="bg-white p-6 rounded-lg">
                  <p className="font-bold mb-3 text-xl">🔋 Steuerbefreiung</p>
                  <p>E-Autos sind in Deutschland bis 2030 von der KFZ-Steuer befreit. Das spart mehrere hundert Euro pro Jahr.</p>
                </div>
                <div className="bg-white p-6 rounded-lg">
                  <p className="font-bold mb-3 text-xl">⚡ Komfort</p>
                  <p>Leiser Antrieb für entspanntes Fahren, direktes Ansprechverhalten, bequemes Laden zu Hause möglich.</p>
                </div>
              </div>
            </div>

            {/* Laden */}
            <div className="bg-blue-50 rounded-xl p-8">
              <h3 className="text-3xl font-bold text-gray-800 mb-6 flex items-center gap-3">
                <Zap className="w-8 h-8 text-blue-600" />
                Laden leicht gemacht
              </h3>
              <div className="space-y-6 text-lg text-gray-700">
                <div className="bg-white p-6 rounded-lg">
                  <div className="flex items-start gap-4">
                    <Home className="w-8 h-8 text-blue-600 flex-shrink-0 mt-1" />
                    <div>
                      <p className="font-bold mb-3 text-xl">🏠 Zuhause laden</p>
                      <p>50-75% aller Ladevorgänge finden zu Hause statt. Mit eigener Wallbox und Photovoltaik-Anlage können Sie besonders günstig laden. Durchschnittliche Kosten: 0,30-0,40 €/kWh, mit PV nur 0,10 €/kWh.</p>
                      <p className="mt-3 font-semibold">Tipp: Nutzen Sie gesteuertes Laden, um von günstigen Nachtstromtarifen zu profitieren.</p>
                    </div>
                  </div>
                </div>
                <div className="bg-white p-6 rounded-lg">
                  <p className="font-bold mb-3 text-xl">🏢 Am Arbeitsplatz</p>
                  <p>Immer mehr Arbeitgeber bieten Lademöglichkeiten an. Gewerbliche Strompreise sind oft günstiger als private. Ein Arbeitstag reicht für eine volle Ladung.</p>
                </div>
                <div className="bg-white p-6 rounded-lg">
                  <p className="font-bold mb-3 text-xl">🚗 Öffentliche Ladeinfrastruktur</p>
                  <p>In Deutschland gibt es über 30.000 Schnellladepunkte. Eine Ladung von 10% auf 80% dauert nur 15-30 Minuten. Kosten: etwa 0,45-0,60 €/kWh an Schnellladern.</p>
                </div>
              </div>
            </div>

            {/* Reichweite */}
            <div className="bg-purple-50 rounded-xl p-8">
              <h3 className="text-3xl font-bold text-gray-800 mb-6 flex items-center gap-3">
                <Battery className="w-8 h-8 text-purple-600" />
                Reichweite & Technologie
              </h3>
              <div className="space-y-5 text-lg text-gray-700">
                <div className="bg-white p-6 rounded-lg">
                  <p className="font-bold mb-3 text-xl">Aktuelle Reichweiten</p>
                  <p>Moderne E-Autos schaffen 400-600 km mit einer Ladung. Topmodelle erreichen über 800 km. Für den Alltag reichen 300-400 km völlig aus, da die meisten Deutschen weniger als 50 km pro Tag fahren.</p>
                </div>
                <div className="bg-white p-6 rounded-lg">
                  <p className="font-bold mb-3 text-xl">Batterietechnologie</p>
                  <p>Die Energiedichte von Batterien steigt kontinuierlich um etwa 5-7% pro Jahr, während die Kosten fallen. Bis 2030 wird mit einem Anstieg von bis zu 30% gerechnet. Neue Technologien wie Feststoffbatterien versprechen noch höhere Reichweiten.</p>
                </div>
                <div className="bg-white p-6 rounded-lg">
                  <p className="font-bold mb-3 text-xl">Schnellladen</p>
                  <p>Neue Batterien ermöglichen Ladezeiten von 10-20 Minuten für 80% Kapazität. Moderne Fahrzeuge haben Ladeleistungen von 150-350 kW.</p>
                </div>
                <div className="bg-white p-6 rounded-lg">
                  <p className="font-bold mb-3 text-xl">Batterieleben</p>
                  <p>Moderne Batterien halten mindestens 8-10 Jahre oder 150.000-200.000 km. Viele Hersteller geben 8 Jahre Garantie auf die Batterie.</p>
                </div>
              </div>
            </div>

            {/* Wirtschaftlichkeit */}
            <div className="bg-yellow-50 rounded-xl p-8">
              <h3 className="text-3xl font-bold text-gray-800 mb-6 flex items-center gap-3">
                <Euro className="w-8 h-8 text-yellow-600" />
                Wirtschaftlichkeit
              </h3>
              <div className="space-y-5 text-lg text-gray-700">
                <div className="bg-white p-6 rounded-lg">
                  <p className="font-bold mb-3 text-xl">Gesamtkosten (TCO)</p>
                  <p>Trotz höherer Anschaffungskosten sind E-Autos bei den Gesamtkosten über die Nutzungsdauer oft günstiger als Verbrenner. Die niedrigeren Betriebs-, Wartungs- und Steuerkosten gleichen den höheren Kaufpreis aus.</p>
                  <ul className="mt-3 space-y-2 list-disc list-inside">
                    <li>Energiekosten: ca. 5-7 €/100 km (E-Auto) vs. 10-14 €/100 km (Verbrenner)</li>
                    <li>Wartung: ca. 300 €/Jahr (E-Auto) vs. 600 €/Jahr (Verbrenner)</li>
                    <li>Steuer: 0 € bis 2030 (E-Auto) vs. 150-300 €/Jahr (Verbrenner)</li>
                  </ul>
                </div>
                <div className="bg-white p-6 rounded-lg">
                  <p className="font-bold mb-3 text-xl">Wertverlust</p>
                  <p>Die Wiederverkaufswerte stabilisieren sich zunehmend. Mit wachsendem Markt für gebrauchte E-Autos verbessert sich die Situation kontinuierlich. Der Wertverlust liegt mittlerweile auf ähnlichem Niveau wie bei Verbrennern.</p>
                </div>
                <div className="bg-white p-6 rounded-lg">
                  <p className="font-bold mb-3 text-xl">Förderungen & Vergünstigungen</p>
                  <ul className="space-y-2 list-disc list-inside">
                    <li>THG-Quote: 200-300 € pro Jahr durch Verkauf der Treibhausgasminderungs-Quote</li>
                    <li>Parkgebühren: In vielen Städten gibt es Ermäßigungen oder kostenloses Parken</li>
                    <li>Dienstwagen-Besteuerung: Nur 0,25% statt 1% des Bruttolistenpreises</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Umwelt */}
            <div className="bg-green-50 rounded-xl p-8">
              <h3 className="text-3xl font-bold text-gray-800 mb-6 flex items-center gap-3">
                <Leaf className="w-8 h-8 text-green-600" />
                Umwelt & Nachhaltigkeit
              </h3>
              <div className="space-y-5 text-lg text-gray-700">
                <div className="bg-white p-6 rounded-lg">
                  <p className="font-bold mb-3 text-xl">CO₂-Bilanz</p>
                  <p>Ein heute in Deutschland angeschafftes E-Auto hat über seine Lebensdauer 40-50% niedrigere Treibhausgasemissionen als ein vergleichbarer Verbrenner - unter Berücksichtigung des deutschen Strommix. Mit 100% Ökostrom sind es über 70%.</p>
                </div>
                <div className="bg-white p-6 rounded-lg">
                  <p className="font-bold mb-3 text-xl">Batterierecycling</p>
                  <p>Moderne Batterien können zu über 95% recycelt werden. Die zurückgewonnenen Materialien können in neuen Batterien verwendet werden, was die Umweltbilanz weiter verbessert.</p>
                </div>
                <div className="bg-white p-6 rounded-lg">
                  <p className="font-bold mb-3 text-xl">Second-Life</p>
                  <p>Ausgediente Fahrzeugbatterien können als stationäre Speicher für Solaranlagen weiterverwendet werden, bevor sie recycelt werden.</p>
                </div>
              </div>
            </div>

            {/* CTA */}
            <div className="bg-gradient-to-r from-blue-600 to-green-600 rounded-xl p-8 text-center text-white">
              <h3 className="text-3xl font-bold mb-4">Neugierig geworden?</h3>
              <p className="text-xl mb-6">Berechnen Sie jetzt Ihre persönliche Ersparnis mit unserem Kostenrechner!</p>
              <a 
                href="/rechner"
                className="inline-block bg-white text-blue-600 text-xl font-bold px-10 py-4 rounded-full hover:shadow-2xl transition-all transform hover:scale-105"
              >
                Zum Rechner
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-white mt-12 py-8 border-t border-gray-200">
        <div className="max-w-6xl mx-auto px-4 md:px-8">
          <div className="flex flex-wrap justify-center gap-6 mb-6">
            <a href="/impressum" className="text-base text-gray-600 hover:text-gray-900 transition-colors">
              Impressum
            </a>
            <span className="text-gray-400">|</span>
            <a href="/datenschutz" className="text-base text-gray-600 hover:text-gray-900 transition-colors">
              Datenschutz
            </a>
          </div>
          <div className="text-center text-sm text-gray-500">
            <p>© 2025 Elektroauto-Rechner. Alle Angaben ohne Gewähr.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
