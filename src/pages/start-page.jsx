import React from 'react';
import SEO from '../components/SEO';
import { Zap, Calculator, BookOpen, TrendingDown, Leaf, Euro } from 'lucide-react';
import Header from '../components/Header';

export default function StartPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-green-50">
       {/* SEO Component */}
      <SEO
        title="Elektroauto Kostenrechner 2025 - E-Auto oder Verbrenner? | e-Autowelt"
        description="Kostenloser Elektroauto Rechner: Vergleichen Sie E-Auto mit Verbrenner über die Nutzungsdauer. Anschaffung, Betrieb, Wartung, Steuern - alle Kosten auf einen Blick!"
        canonicalPath="/"
        keywords="elektroauto rechner, e-auto kosten, euto kostenrechner, e-auto kostenrechner, elektroauto kostenrechner, ev kostenrechner, eauto oder verbenner, kostenvergleich elektroauto, e-auto vs verbrenner"
        ogImage="/images/og-rechner.jpg"
        ogType="website"
      />
      {/* Header */}
      <Header activeTab="start" />
      <div className="h-20 md:h-24"></div>

      {/* Hero Section with Image */}
      <div className="max-w-7xl mx-auto px-4 md:px-8 mt-8 mb-8 md:mt-0 md:mb-20">
        <div className="relative h-[500px] sm:h-[550px] md:h-[650px] rounded-3xl overflow-hidden shadow-2xl">
          {/* Hero Image */}
          <img 
            src="/images/ratgeber/hero-elektroauto-ladestation.webp"
            alt="Modernes Elektroauto an Ladestation - Kostenvergleich und Nachhaltigkeit"
            className="w-full h-full object-cover brightness-9"
            loading="lazy"
            decoding="async"
            
          />
          
          {/* Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-r from-blue-950/95 via-blue-800/60 to-transparent"></div>
          
          {/* Hero Content */}
          <div className="absolute inset-0 flex items-center">
            <div className="max-w-6xl mx-auto px-6 md:px-12 w-full py-12 md:py-0">
              <div className="max-w-2xl">
                {/* Badge */}
                <div className="inline-flex items-center gap-2 bg-white/30 backdrop-blur-md px-3 py-1 md:px-4 md:py-2 rounded-full mb-4 md:mb-6 shadow-lg">
                  <Zap className="w-4 h-4 md:w-5 md:h-5 text-white" />
                  <span className="text-xs md:text-base text-white font-semibold">Kostenloser Rechner</span>
                </div>
                
                {/* Headline */}
                <h1 className="drop-shadow-2xl text-3xl md:text-6xl lg:text-7xl font-bold text-white mb-4 md:mb-6 leading-tight">
                  Lohnt sich ein Elektroauto?
                </h1>
                
                {/* Subheadline */}
                <p className="text-sm md:text-2xl text-white mb-6 md:mb-8 leading-relaxed drop-shadow-lg">
                  Finden Sie es heraus mit unserem kostenlosen Elektroauto Kostenrechner.
                  
                </p>
                
                {/* CTA Button */}
                <a 
                  href="/rechner/kostenrechner"
                  className="inline-flex items-center gap-1 md:gap-3 bg-gradient-to-r from-green-500 to-green-600 text-white text-sm md:text-xl font-bold px-4 py-2 md:px-10 md:py-5 rounded-full hover:shadow-2xl hover:scale-105 active:scale-95 transition-all duration-200"
                >
                  <Calculator className="w-4 h-4 md:w-6 md:h-6" />
                  <span className="hidden sm:inline">Jetzt kostenlos berechnen</span>
                  <span className="sm:hidden">Kosten berechnen</span>
                </a>
                
                {/* Trust Indicators */}
                <div className="flex flex-wrap items-center gap-3 md:gap-6 mt-5 md:mt-8 text-white/80 text-xs md:text-base font-semibold">
                  <div className="flex items-center gap-2">
                    <svg className="w-5 h-5 text-green-400" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span>100% Kostenlos</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <svg className="w-5 h-5 text-green-400" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span>Keine Anmeldung nötig</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <svg className="w-5 h-5 text-green-400" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span>In 3 Minuten fertig</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Content Section */}
      <div className="max-w-6xl mx-auto px-4 md:px-8 pt-8 md:pt-0">
                        <h2 className="text-center drop-shadow-2xl text-2xl md:text-4xl lg:text-5xl font-bold text-black mb-6 leading-tight">
                  Elektromobilität verstehen: Ratgeber & Rechner für Einsteiger und Profis
                </h2>
        {/* Features Grid */}
        <div className="grid md:grid-cols-3 gap-8 mb-20">
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
        <div className="bg-white rounded-2xl p-12 shadow-xl mb-20">
          <h3 className="text-3xl font-bold text-gray-800 mb-8 text-center">Vorteile von Elektroautos</h3>
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
        <div className="bg-gradient-to-r from-blue-600 to-green-600 rounded-2xl p-12 shadow-xl mb-20 text-center text-white">
          <h3 className="text-4xl font-bold mb-6">Bereit für die Berechnung?</h3>
          <p className="text-xl mb-8">Finden Sie in wenigen Minuten heraus, wie viel Sie mit einem Elektroauto sparen können.</p>
          <a 
            href="/rechner/kostenrechner"
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
