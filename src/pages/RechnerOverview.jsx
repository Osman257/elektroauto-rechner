import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Calculator, Battery, ArrowRight, CheckCircle, Shield } from 'lucide-react';
import Header from '../components/Header';
import { Link } from 'react-router-dom';

export default function RechnerOverview() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-green-50">
      <Helmet>
        <title>E-Auto Rechner - Kostenrechner & Batterie-Bewertung | e-Autowelt</title>
        <meta name="description" content="Kostenlose E-Auto Rechner: TCO-Kostenrechner für Gesamtkosten-Vergleich und Batterie-Zustand-Rechner für Gebrauchtwagen. Wissenschaftlich fundiert." />
        <link rel="canonical" href="https://e-autowelt.com/rechner" />
        <meta name="keywords" content="elektroauto rechner, tco rechner, batterie rechner, soh rechner, e-auto kosten" />
        
        {/* Open Graph */}
        <meta property="og:title" content="E-Auto Rechner - Kostenrechner & Batterie-Bewertung" />
        <meta property="og:description" content="Kostenlose E-Auto Rechner für fundierte Entscheidungen" />
        <meta property="og:url" content="https://e-autowelt.com/rechner" />
        <meta property="og:type" content="website" />
      </Helmet>

      {/* Header */}
      <Header activeTab="rechner" />
      <div className="h-20 md:h-24"></div>

      {/* Hero Section */}
      <div className="max-w-7xl mx-auto px-4 md:px-8 mt-8 mb-12">
        <div className="relative h-[500px] sm:h-[550px] md:h-[650px] rounded-3xl overflow-hidden shadow-2xl">
          {/* Hero Image */}
          <img 
            src="/images/ratgeber/rechner-overview-hero.webp"
            alt="E-Auto Rechner 2025 - Kostenrechner und Tools"
            className="w-full h-full object-cover brightness-35"
            loading="lazy"
            decoding="async"
          />
          
          {/* Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-r from-blue-950/95 via-blue-900/80 to-transparent"></div>
          
          {/* Hero Content */}
          <div className="absolute inset-0 flex items-center">
            <div className="max-w-6xl mx-auto px-6 md:px-12 w-full">
              <div className="max-w-2xl">
                {/* Badge */}
                <div className="inline-flex items-center gap-2 bg-white/30 backdrop-blur-md px-4 py-2 rounded-full mb-6 shadow-lg">
                  <Calculator className="w-5 h-5 text-white" />
                  <span className="text-sm md:text-base text-white font-semibold">Kostenlose Tools</span>
                </div>
                
                {/* Headline */}
                <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight drop-shadow-2xl">
                  E-Auto Rechner
                </h1>
                
                {/* Subheadline */}
                <p className="text-xl md:text-2xl text-white mb-8 leading-relaxed drop-shadow-lg">
                  Fundierte Entscheidungen treffen: Berechnen Sie Kosten, bewerten Sie Batteriezustände 
                  und finden Sie das perfekte Elektroauto.
                </p>

                {/* Trust Badges / Chips */}
                <div className="flex flex-wrap gap-4 text-sm md:text-base">
                  <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full">
                    <CheckCircle className="w-5 h-5 text-green-300" />
                    <span className="text-white">100% Kostenlos</span>
                  </div>
                  <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full">
                    <CheckCircle className="w-5 h-5 text-blue-300" />
                    <span className="text-white">Wissenschaftlich fundiert</span>
                  </div>
                  <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full">
                    <CheckCircle className="w-5 h-5 text-green-300" />
                    <span className="text-white">Keine Anmeldung</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content Container */}
      <div className="max-w-6xl mx-auto px-4 md:px-8 pb-20">
        
        {/* Intro Text */}
        <div className="mb-16">
          <div className="bg-white rounded-2xl p-8 md:p-10 shadow-lg">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4">
              Ihre Tools für fundierte E-Auto-Entscheidungen
            </h2>
            <p className="text-base md:text-lg text-gray-700 leading-relaxed mb-4">
              Ob Sie ein <strong>neues Elektroauto kaufen</strong> oder einen <strong>Gebrauchtwagen bewerten </strong> 
              möchten – unsere kostenlosen Rechner helfen Ihnen bei der Entscheidung. Wissenschaftlich fundiert, 
              transparent und einfach zu bedienen.
            </p>
            <div className="flex flex-wrap gap-4 text-sm md:text-base text-gray-600">
              <span className="flex items-center gap-2">
                ✓ Aktuelle Marktdaten 2025
              </span>
              <span className="flex items-center gap-2">
                ✓ Transparent & nachvollziehbar
              </span>
              <span className="flex items-center gap-2">
                ✓ Regelmäßig aktualisiert
              </span>
            </div>
          </div>
        </div>

        {/* Rechner Cards - Split Layout */}
        <div className="grid md:grid-cols-1 gap-8 mb-16">
          
          {/* TCO-Rechner Card */}
          <Link to="/rechner/kostenrechner" className="group">
            <div className="relative bg-gradient-to-r from-cyan-400 to-teal-500 rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300">
              {/* Dark Overlay */}
              <div className="absolute inset-0 bg-black/20"></div>
              
              <div className="relative flex flex-col md:flex-row items-center p-8 md:p-12">
                {/* Icon Section */}
                <div className="flex-shrink-0 mb-6 md:mb-0 md:mr-12">
                  <div className="bg-white/20 backdrop-blur-sm p-8 rounded-2xl">
                    <Calculator className="w-20 h-20 text-white" />
                  </div>
                </div>
                
                {/* Content Section */}
                <div className="flex-1 text-center md:text-left">
                  <h3 className="text-4xl md:text-5xl font-bold text-white mb-4 drop-shadow-lg">
                    Kostenrechner
                  </h3>
                  <p className="text-xl text-white leading-relaxed drop-shadow-md">
                    Berechnen Sie die <strong>Gesamtkosten (TCO)</strong> über die Nutzungsdauer: 
                    Anschaffung, Betrieb, Wartung, Steuern, Versicherung und Wertverlust im Vergleich.
                  </p>
                  <div className="mt-6 flex flex-wrap gap-4 justify-center md:justify-start">
                    <span className="bg-black/30 backdrop-blur-sm px-4 py-2 rounded-full text-white text-sm font-medium">
                      ⏱️ ca. 3 Minuten
                    </span>
                    <span className="bg-white text-cyan-600 font-bold px-6 py-2 rounded-full text-sm group-hover:scale-105 transition-transform flex items-center gap-2 shadow-lg">
                      Jetzt berechnen
                      <ArrowRight className="w-4 h-4" />
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </Link>

          {/* Batterie-Rechner Card */}
          <Link to="/rechner/gebrauchtwagenbatterierechner" className="group">
            <div className="relative bg-gradient-to-r from-emerald-400 to-cyan-500 rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300">
              {/* Dark Overlay */}
              <div className="absolute inset-0 bg-black/20"></div>
              
              <div className="relative flex flex-col md:flex-row items-center p-8 md:p-12">
                {/* Icon Section */}
                <div className="flex-shrink-0 mb-6 md:mb-0 md:mr-12">
                  <div className="bg-white/20 backdrop-blur-sm p-8 rounded-2xl">
                    <Battery className="w-20 h-20 text-white" />
                  </div>
                </div>
                
                {/* Content Section */}
                <div className="flex-1 text-center md:text-left">
                  <h3 className="text-4xl md:text-5xl font-bold text-white mb-4 drop-shadow-lg">
                    Batterie-Zustand Rechner
                  </h3>
                  <p className="text-xl text-white leading-relaxed drop-shadow-md">
                    Ermitteln Sie den <strong>fairen Marktwert</strong> eines gebrauchten E-Autos. Batterieaustauschkosten, Garantiestatus und
                    <strong> Batteriezustand (SOH) </strong> können verglichen werden.
                  </p>
                  <div className="mt-6 flex flex-wrap gap-4 justify-center md:justify-start">
                    <span className="bg-black/30 backdrop-blur-sm px-4 py-2 rounded-full text-white text-sm font-medium">
                      ⏱️ ca. 2 Minuten
                    </span>
                    <span className="bg-white text-emerald-600 font-bold px-6 py-2 rounded-full text-sm group-hover:scale-105 transition-transform flex items-center gap-2 shadow-lg">
                      Jetzt berechnen
                      <ArrowRight className="w-4 h-4" />
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </Link>

        </div>

        {/* Info Box - Quellen */}
        <div className="bg-blue-50 border-2 border-blue-200 rounded-2xl p-6 mb-16">
          <div className="flex items-start gap-4">
            <Shield className="w-6 h-6 text-blue-600 flex-shrink-0 mt-1" />
            <div>
              <h3 className="text-lg font-bold text-gray-800 mb-2">
                Wissenschaftlich fundiert & transparent
              </h3>
              <p className="text-sm text-gray-700 leading-relaxed mb-3">
                Unsere Rechner basieren auf aktuellen Marktdaten und wissenschaftlichen Quellen:
              </p>
              <div className="grid md:grid-cols-2 gap-2 text-sm text-gray-600">
                <div>• ADAC Kostenvergleiche 2025</div>
                <div>• DAT & Schwacke Restwertdaten</div>
                <div>• BloombergNEF Batteriepreise</div>
                <div>• Herstellerangaben & Garantiebedingungen</div>
              </div>
            </div>
          </div>
        </div>

        {/* CTA Section - Ratgeber */}
        <div className="bg-gradient-to-r from-green-600 to-blue-600 rounded-2xl p-8 md:p-12 text-center text-white shadow-xl">
          <Battery className="w-16 h-16 mx-auto mb-6 opacity-90" />
          <h3 className="text-3xl font-bold mb-4">
            Noch Fragen zum E-Auto-Kauf?
          </h3>
          <p className="text-lg mb-6 max-w-2xl mx-auto">
            In unserem Ratgeber finden Sie umfassende Kaufberatung, Informationen zu Kosten, 
            Laden, THG-Quote und vieles mehr.
          </p>
          <Link 
            to="/ratgeber"
            className="inline-flex items-center gap-3 bg-white text-blue-600 font-bold px-8 py-4 rounded-full hover:shadow-2xl hover:scale-105 transition-all duration-200"
          >
            Zum E-Auto Ratgeber
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-white mt-20 py-8 border-t border-gray-200">
        <div className="max-w-6xl mx-auto px-4 md:px-8">
          <div className="flex flex-wrap justify-center gap-6 mb-6">
            <Link to="/impressum" className="text-base text-gray-600 hover:text-gray-900 hover:underline transition-all duration-200">
              Impressum
            </Link>
            <span className="text-gray-400">|</span>
            <Link to="/datenschutz" className="text-base text-gray-600 hover:text-gray-900 hover:underline transition-all duration-200">
              Datenschutz
            </Link>
          </div>
          <div className="text-center text-sm text-gray-500">
            <p>© 2025 e-Autowelt. Alle Angaben ohne Gewähr.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}