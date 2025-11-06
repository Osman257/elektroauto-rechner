import React from 'react';
import { Zap } from 'lucide-react';

export default function ImpressumPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-green-50">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 bg-white shadow-md z-50">
        <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
          <a href="/start" className="flex items-center gap-3 hover:opacity-80 transition-opacity">
            <Zap className="w-8 h-8 text-blue-600" />
            <h1 className="text-2xl font-bold text-gray-800">e-Autowelt</h1>
          </a>
          <nav className="flex gap-6">
            <a 
              href="/rechner" 
              className="text-lg font-medium text-gray-700 hover:text-blue-600 transition-colors"
            >
              e-Auto Rechner
            </a>
            <a 
              href="/informationen" 
              className="text-lg font-medium text-gray-700 hover:text-blue-600 transition-colors"
            >
              Ratgeber
            </a>
          </nav>
        </div>
      </header>

      {/* Spacer for fixed header */}
      <div className="h-20"></div>

      <div className="max-w-4xl mx-auto px-4 md:px-8 py-12">
        <div className="bg-white rounded-2xl shadow-2xl p-8 md:p-12">
          <h2 className="text-4xl font-bold text-gray-800 mb-8">Impressum</h2>
          
          <div className="text-lg text-gray-700 space-y-6">
            <div>
              <p className="font-bold text-xl mb-3">Angaben gemäß § 5 TMG:</p>
              <p className="leading-relaxed">
                Osman Göbel<br />
                Schillerstr. 11<br />
                85123 Karlskron<br />
                Deutschland
              </p>
              <p className="mt-4 leading-relaxed">
                <span className="font-semibold">E-Mail:</span> osman.goebel@gmail.com
              </p>
            </div>
            
            <div className="pt-6 border-t-2 border-gray-200">
              <p className="font-bold text-xl mb-3">Verantwortlich für den Inhalt nach § 55 Abs. 2 RStV:</p>
              <p className="leading-relaxed">Osman Göbel (Anschrift wie oben)</p>
            </div>
            
            <div className="pt-6 border-t-2 border-gray-200">
              <p className="font-bold text-xl mb-3">Haftung für Inhalte</p>
              <p className="leading-relaxed">
                Die Inhalte unserer Seiten wurden mit größter Sorgfalt erstellt. Für die Richtigkeit, 
                Vollständigkeit und Aktualität der Inhalte können wir jedoch keine Gewähr übernehmen. 
                Als Diensteanbieter sind wir gemäß § 7 Abs.1 TMG für eigene Inhalte auf diesen Seiten 
                nach den allgemeinen Gesetzen verantwortlich. Nach §§ 8 bis 10 TMG sind wir als 
                Diensteanbieter jedoch nicht verpflichtet, übermittelte oder gespeicherte fremde 
                Informationen zu überwachen oder nach Umständen zu forschen, die auf eine rechtswidrige 
                Tätigkeit hinweisen.
              </p>
            </div>
            
            <div className="pt-6 border-t-2 border-gray-200">
              <p className="font-bold text-xl mb-3">Haftung für Links</p>
              <p className="leading-relaxed">
                Unser Angebot enthält Links zu externen Websites Dritter, auf deren Inhalte wir keinen 
                Einfluss haben. Deshalb können wir für diese fremden Inhalte auch keine Gewähr übernehmen. 
                Für die Inhalte der verlinkten Seiten ist stets der jeweilige Anbieter oder Betreiber der 
                Seiten verantwortlich. Die verlinkten Seiten wurden zum Zeitpunkt der Verlinkung auf 
                mögliche Rechtsverstöße überprüft. Rechtswidrige Inhalte waren zum Zeitpunkt der 
                Verlinkung nicht erkennbar. Eine permanente inhaltliche Kontrolle der verlinkten Seiten 
                ist jedoch ohne konkrete Anhaltspunkte einer Rechtsverletzung nicht zumutbar. Bei 
                Bekanntwerden von Rechtsverletzungen werden wir derartige Links umgehend entfernen.
              </p>
            </div>
            
            <div className="pt-6 border-t-2 border-gray-200">
              <p className="font-bold text-xl mb-3">Urheberrecht</p>
              <p className="leading-relaxed">
                Die durch den Seitenbetreiber erstellten Inhalte und Werke auf diesen Seiten unterliegen 
                dem deutschen Urheberrecht. Die Vervielfältigung, Bearbeitung, Verbreitung und jede Art 
                der Verwertung außerhalb der Grenzen des Urheberrechtes bedürfen der schriftlichen 
                Zustimmung des jeweiligen Autors bzw. Erstellers. Downloads und Kopien dieser Seite sind 
                nur für den privaten, nicht kommerziellen Gebrauch gestattet. Soweit die Inhalte auf 
                dieser Seite nicht vom Betreiber erstellt wurden, werden die Urheberrechte Dritter 
                beachtet. Insbesondere werden Inhalte Dritter als solche gekennzeichnet. Sollten Sie 
                trotzdem auf eine Urheberrechtsverletzung aufmerksam werden, bitten wir um einen 
                entsprechenden Hinweis. Bei Bekanntwerden von Rechtsverletzungen werden wir derartige 
                Inhalte umgehend entfernen.
              </p>
            </div>
          </div>

          {/* Back to Start Button */}
          <div className="mt-12 text-center">
            <a 
              href="/start"
              className="inline-block bg-gradient-to-r from-blue-600 to-green-600 text-white text-lg font-bold px-8 py-3 rounded-full hover:shadow-xl transition-all transform hover:scale-105"
            >
              Zurück zur Startseite
            </a>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-white mt-12 py-8 border-t border-gray-200">
        <div className="max-w-6xl mx-auto px-4 md:px-8">
          <div className="flex flex-wrap justify-center gap-6 mb-6">
            <a href="/impressum" className="text-base text-blue-600 font-semibold transition-colors">
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
