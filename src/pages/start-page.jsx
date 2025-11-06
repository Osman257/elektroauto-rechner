import React from 'react';
import { Zap, Calculator, BookOpen, TrendingDown, Leaf, Euro } from 'lucide-react';

export default function StartPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-green-50">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 bg-white shadow-md z-50">
        <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
          <a 
            href="/start" 
            className="flex items-center gap-3 hover:opacity-80 hover:scale-105 transition-all duration-200"
          >
            <Zap className="w-8 h-8 text-blue-600" />
            <h1 className="text-2xl font-bold text-gray-800">e-Autowelt</h1>
          </a>
          <nav className="flex gap-8">
            <a 
              href="/rechner" 
              className="relative text-lg font-medium text-gray-700 hover:text-blue-600 transition-all duration-200 pb-1 group"
            >
              e-Auto Rechner
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-600 group-hover:w-full transition-all duration-300"></span>
            </a>
            <a 
              href="/informationen" 
              className="relative text-lg font-medium text-gray-700 hover:text-blue-600 transition-all duration-200 pb-1 group"
            >
              Ratgeber
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-600 group-hover:w-full transition-all duration-300"></span>
            </a>
          </nav>
        </div>
      </header>

      {/* Spacer for fixed header */}
      <div className="h-20"></div>

      {/* Hero Section */}
      <div className="max-w-6xl mx-auto px-4 md:px-8 py-16">
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-bold text-gray-800 mb-6">
            Lohnt sich ein Elektroauto?
          </h2>
          <p className="text-2xl text-gray-600 mb-8">
            Finden Sie es heraus mit unserem kostenlosen Elektroauto Kostenrechner
          </p>
          <a 
            href="/rechner"
            className="inline-block bg-gradient-to-r from-blue-600 to-green-600 text-white text-xl font-bold px-12 py-4 rounded-full hover:shadow-2xl hover:scale-105 active:scale-95 transition-all duration-200"
          >
            Jetzt berechnen
          </a>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-3 gap-8 mt-20">
          {/* Feature 1 */}
          <div className="bg-white rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-shadow">
            <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mb-6">
              <Calculator className="w-8 h-8 text-blue-600" />
            </div>
            <h3 className="text-2xl font-bold text-gray-800 mb-4">Präzise Berechnung</h3>
            <p className="text-lg text-gray-600">
              Vergleichen Sie alle Kosten: Anschaffung, Betrieb, Wartung, Versicherung und Steuern über die gesamte Nutzungsdauer.
            </p>
          </div>

          {/* Feature 2 */}
          <div className="bg-white rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-shadow">
            <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mb-6">
              <Leaf className="w-8 h-8 text-green-600" />
            </div>
            <h3 className="text-2xl font-bold text-gray-800 mb-4">CO₂-Bilanz</h3>
            <p className="text-lg text-gray-600">
              Erfahren Sie, wie viel CO₂ Sie mit einem Elektroauto einsparen und welchen Beitrag Sie zum Klimaschutz leisten.
            </p>
          </div>

          {/* Feature 3 */}
          <div className="bg-white rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-shadow">
            <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mb-6">
              <BookOpen className="w-8 h-8 text-purple-600" />
            </div>
            <h3 className="text-2xl font-bold text-gray-800 mb-4">Expertenwissen</h3>
            <p className="text-lg text-gray-600">
              Basierend auf aktuellen Studien und wissenschaftlichen Quellen für zuverlässige Ergebnisse.
            </p>
          </div>
        </div>

        {/* Stats Section */}
        <div className="bg-white rounded-2xl p-12 shadow-xl mt-20">
          <h3 className="text-3xl font-bold text-gray-800 mb-8 text-center">Warum Elektroauto?</h3>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="text-5xl font-bold text-green-600 mb-2">40-50%</div>
              <p className="text-lg text-gray-600">weniger CO₂-Emissionen</p>
            </div>
            <div className="text-center">
              <div className="text-5xl font-bold text-blue-600 mb-2">bis 2030</div>
              <p className="text-lg text-gray-600">KFZ-Steuer befreit</p>
            </div>
            <div className="text-center">
              <div className="text-5xl font-bold text-purple-600 mb-2">35%</div>
              <p className="text-lg text-gray-600">geringere Wartungskosten</p>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="bg-gradient-to-r from-blue-600 to-green-600 rounded-2xl p-12 shadow-xl mt-20 text-center text-white">
          <h3 className="text-4xl font-bold mb-6">Bereit für die Berechnung?</h3>
          <p className="text-xl mb-8">Finden Sie in wenigen Minuten heraus, wie viel Sie mit einem Elektroauto sparen können.</p>
          <a 
            href="/rechner"
            className="inline-block bg-white text-blue-600 text-xl font-bold px-12 py-4 rounded-full hover:shadow-2xl hover:scale-105 active:scale-95 transition-all duration-200"
          >
            Zum Rechner
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
