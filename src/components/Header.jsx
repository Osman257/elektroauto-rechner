import React, { useState } from 'react';
import { Menu, X, ChevronDown } from 'lucide-react';

export default function Header({ activeTab = '' }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [ratgeberOpen, setRatgeberOpen] = useState(false);
  const [ratgeberMobileOpen, setRatgeberMobileOpen] = useState(false);
  const [rechnerOpen, setRechnerOpen] = useState(false);
  const [rechnerMobileOpen, setRechnerMobileOpen] = useState(false);

  const toggleMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const closeMenu = () => {
    setMobileMenuOpen(false);
    setRatgeberMobileOpen(false);
    setRechnerMobileOpen(false);
  };

  // Rechner Liste (ohne Kategorien)
  const rechnerList = [
    { title: 'Kostenrechner', url: '/rechner/kostenrechner', description: 'Gesamtkosten berechnen' },
    { title: 'Batterierechner für Gebrauchtwagen', url: '/rechner/gebrauchtwagenbatterierechner', description: 'SOH-basierte Bewertung' },
  ];

  // Ratgeber Artikel nach Kategorien
  const ratgeberCategories = {
    kaufberatung: {
      title: 'Kaufberatung',
      articles: [
        { title: 'Kaufberatung 2025', url: '/ratgeber/kaufberatung' },
        { title: 'Gebrauchtwagen Guide', url: '/ratgeber/gebrauchtwagen' },
        { title: 'Effizienteste Elektroautos 2025', url: '/ratgeber/effiziente-elektroautos' },
      ]
    },
    kosten: {
      title: 'Kosten & Förderung',
      articles: [
        { title: 'THG-Quote verdienen', url: '/ratgeber/thg-quote' },
        { title: 'Wertverlust E-Autos', url: '/ratgeber/wertverlust' },
      ]
    },
    mythen: {
      title: 'Mythen & Fakten',
      articles: [
        { title: 'Die 10 größten Mythen', url: '/ratgeber/mythen' },
        { title: 'Wie lange lädt ein E-Auto?', url: '/ratgeber/ladezeit' },
        { title: 'Kann man ein E-Auto schieben?', url: '/ratgeber/e-auto-schieben' },
        { title: 'Elektroauto Verkaufszahlen Deutschland 2025', url: '/ratgeber/verkaufszahlen' },
      ]
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 bg-white shadow-md z-50">
      <div className="max-w-6xl mx-auto px-4 py-4 flex justify-between items-center">
        {/* Logo */}
        <a href="/" className="flex items-center gap-3 hover:opacity-80 transition-all duration-200">
          <img 
            src="/images/logo.svg" 
            alt="e-Autowelt Logo" 
            className="h-8 md:h-10 w-auto"
          />
        </a>

        {/* Desktop Navigation - NUR auf Desktop (ab 768px) */}
        <nav className="hidden md:flex gap-8 items-center">
          
          {/* Rechner Dropdown */}
          <div className="relative">
            <button
              onClick={() => {
                setRechnerOpen(!rechnerOpen);
                setRatgeberOpen(false);
              }}
              className={rechnerOpen 
                ? 'relative flex items-center gap-1 text-lg font-bold text-blue-600 transition-all duration-200 pb-1'
                : 'relative flex items-center gap-1 text-lg font-medium text-gray-700 hover:text-blue-600 transition-all duration-200 pb-1'
              }
            >
              Rechner
              <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${rechnerOpen ? 'rotate-180' : ''}`} />
              {rechnerOpen && (
                <span className="absolute bottom-0 left-0 w-full h-0.5 bg-blue-600"></span>
              )}
            </button>

            {/* Dropdown Menu */}
            {rechnerOpen && (
              <>
                {/* Backdrop zum Schließen bei Außenklick */}
                <div 
                  className="fixed inset-0 z-10" 
                  onClick={() => setRechnerOpen(false)}
                ></div>
                
                <div className="absolute top-full left-0 mt-2 w-80 bg-white rounded-xl shadow-2xl border border-gray-100 py-4 z-20">
                  
                  {/* Rechner Übersicht Link */}
                  <a
                    href="/rechner"
                    onClick={() => setRechnerOpen(false)}
                    className="block px-6 py-3 hover:bg-blue-50 transition-colors group"
                  >
                    <div className="text-base font-bold text-gray-800 group-hover:text-blue-600">
                      Alle Rechner
                    </div>
                    <div className="text-xs text-gray-500 mt-0.5">
                      Zur Rechner-Übersicht
                    </div>
                  </a>

                  <div className="border-t border-gray-100 my-3"></div>

                  {/* Rechner Liste */}
                  {rechnerList.map((rechner, index) => (
                    <a
                      key={index}
                      href={rechner.url}
                      onClick={() => setRechnerOpen(false)}
                      className="block px-6 py-2 hover:bg-gray-50 transition-colors group"
                    >
                      <div className="text-sm text-gray-700 group-hover:text-blue-600 font-medium">
                        {rechner.title}
                      </div>
                      <div className="text-xs text-gray-500 mt-0.5">
                        {rechner.description}
                      </div>
                    </a>
                  ))}

                </div>
              </>
            )}
          </div>

          {/* Ratgeber Dropdown */}
          <div className="relative">
            <button
              onClick={() => {
                setRatgeberOpen(!ratgeberOpen);
                setRechnerOpen(false);
              }}
              className={ratgeberOpen 
                ? 'relative flex items-center gap-1 text-lg font-bold text-blue-600 transition-all duration-200 pb-1'
                : 'relative flex items-center gap-1 text-lg font-medium text-gray-700 hover:text-blue-600 transition-all duration-200 pb-1'
              }
            >
              Ratgeber
              <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${ratgeberOpen ? 'rotate-180' : ''}`} />
              {ratgeberOpen && (
                <span className="absolute bottom-0 left-0 w-full h-0.5 bg-blue-600"></span>
              )}
            </button>

            {/* Dropdown Menu */}
            {ratgeberOpen && (
              <>
                {/* Backdrop zum Schließen bei Außenklick */}
                <div 
                  className="fixed inset-0 z-10" 
                  onClick={() => setRatgeberOpen(false)}
                ></div>
                
                <div className="absolute top-full left-0 mt-2 w-80 bg-white rounded-xl shadow-2xl border border-gray-100 py-4 z-20">
                  
                  {/* Ratgeber Übersicht Link */}
                  <a
                    href="/ratgeber"
                    onClick={() => setRatgeberOpen(false)}
                    className="block px-6 py-3 hover:bg-blue-50 transition-colors group"
                  >
                    <div className="text-base font-bold text-gray-800 group-hover:text-blue-600">
                      Alle Artikel
                    </div>
                    <div className="text-xs text-gray-500 mt-0.5">
                      Zur Ratgeber-Übersicht
                    </div>
                  </a>

                  <div className="border-t border-gray-100 my-3"></div>

                  {/* Kategorien & Artikel */}
                  {Object.entries(ratgeberCategories).map(([key, category]) => (
                    <div key={key} className="mb-4">
                      <div className="px-6 py-2">
                        <span className="text-sm font-bold text-gray-800 uppercase tracking-wide">
                          {category.title}
                        </span>
                      </div>
                      {category.articles.map((article, index) => (
                        <a
                          key={index}
                          href={article.url}
                          onClick={() => setRatgeberOpen(false)}
                          className="block px-8 py-2 text-sm text-gray-700 hover:bg-gray-50 hover:text-blue-600 transition-colors"
                        >
                          {article.title}
                        </a>
                      ))}
                    </div>
                  ))}

                </div>
              </>
            )}
          </div>
        </nav>

        {/* Mobile Burger Button - NUR auf Mobile (unter 768px) */}
        <button
          onClick={toggleMenu}
          className="md:hidden p-2 text-gray-700 hover:text-blue-600 transition-colors"
          aria-label="Menu"
        >
          {mobileMenuOpen ? (
            <X className="w-6 h-6" />
          ) : (
            <Menu className="w-6 h-6" />
          )}
        </button>
      </div>

      {/* Mobile Dropdown Menu - NUR auf Mobile sichtbar */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white border-t border-gray-200 shadow-lg">
          <nav className="flex flex-col py-4">
            
            {/* Rechner mit Kollaps-Funktion */}
            <button
              onClick={() => setRechnerMobileOpen(!rechnerMobileOpen)}
              className={activeTab === 'rechner'
                ? 'w-full flex items-center justify-between px-6 py-3 text-base font-bold text-blue-600 bg-blue-50 border-l-4 border-blue-600'
                : 'w-full flex items-center justify-between px-6 py-3 text-base font-medium text-gray-700 hover:bg-gray-50 hover:text-blue-600 transition-all'
              }
            >
              <span>Rechner</span>
              <ChevronDown className={`w-5 h-5 transition-transform duration-200 ${rechnerMobileOpen ? 'rotate-180' : ''}`} />
            </button>

            {/* Rechner Liste - Kollabierbar */}
            {rechnerMobileOpen && (
              <div className="bg-gray-50 animate-in slide-in-from-top duration-200">
                {/* Rechner Übersicht */}
                <a 
                  href="/rechner"
                  onClick={closeMenu}
                  className="block px-8 py-3 text-sm font-medium text-gray-700 hover:bg-gray-100 hover:text-blue-600 transition-all"
                >
                  Alle Rechner ansehen
                </a>

                <div className="border-t border-gray-200 my-2"></div>

                {/* Rechner Liste */}
                <div className="pb-2">
                  {rechnerList.map((rechner, index) => (
                    <a
                      key={index}
                      href={rechner.url}
                      onClick={closeMenu}
                      className="block px-8 py-2 text-sm text-gray-600 hover:bg-gray-100 hover:text-blue-600 transition-colors"
                    >
                      {rechner.title}
                    </a>
                  ))}
                </div>
              </div>
            )}

            {/* Ratgeber mit Kollaps-Funktion */}
            <button
              onClick={() => setRatgeberMobileOpen(!ratgeberMobileOpen)}
              className={activeTab === 'ratgeber'
                ? 'w-full flex items-center justify-between px-6 py-3 text-base font-bold text-blue-600 bg-blue-50 border-l-4 border-blue-600'
                : 'w-full flex items-center justify-between px-6 py-3 text-base font-medium text-gray-700 hover:bg-gray-50 hover:text-blue-600 transition-all'
              }
            >
              <span>Ratgeber</span>
              <ChevronDown className={`w-5 h-5 transition-transform duration-200 ${ratgeberMobileOpen ? 'rotate-180' : ''}`} />
            </button>

            {/* Ratgeber Kategorien & Artikel - Kollabierbar */}
            {ratgeberMobileOpen && (
              <div className="bg-gray-50 animate-in slide-in-from-top duration-200">
                {/* Ratgeber Übersicht */}
                <a 
                  href="/ratgeber"
                  onClick={closeMenu}
                  className="block px-8 py-3 text-sm font-medium text-gray-700 hover:bg-gray-100 hover:text-blue-600 transition-all"
                >
                  Alle Artikel ansehen
                </a>

                <div className="border-t border-gray-200 my-2"></div>

                {/* Kategorien & Artikel */}
                <div className="space-y-3 pb-2">
                  {Object.entries(ratgeberCategories).map(([key, category]) => (
                    <div key={key}>
                      <div className="px-8 py-2">
                        <span className="text-sm font-bold text-gray-800 uppercase">
                          {category.title}
                        </span>
                      </div>
                      {category.articles.map((article, index) => (
                        <a
                          key={index}
                          href={article.url}
                          onClick={closeMenu}
                          className="block px-10 py-2 text-sm text-gray-600 hover:bg-gray-100 hover:text-blue-600 transition-colors"
                        >
                          {article.title}
                        </a>
                      ))}
                    </div>
                  ))}
                </div>
              </div>
            )}

          </nav>
        </div>
      )}
    </header>
  );
}