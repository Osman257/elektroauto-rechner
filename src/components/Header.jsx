import React, { useState, useEffect, useRef } from 'react';
import { Menu, X, ChevronDown } from 'lucide-react';

export default function Header({ activeTab = '' }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [mobileRechnerOpen, setMobileRechnerOpen] = useState(false);
  const [mobileRatgeberOpen, setMobileRatgeberOpen] = useState(false);
  const [desktopRechnerOpen, setDesktopRechnerOpen] = useState(false);
  const [desktopRatgeberOpen, setDesktopRatgeberOpen] = useState(false);
  
  const rechnerRef = useRef(null);
  const ratgeberRef = useRef(null);

  // Close dropdowns when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (rechnerRef.current && !rechnerRef.current.contains(event.target)) {
        setDesktopRechnerOpen(false);
      }
      if (ratgeberRef.current && !ratgeberRef.current.contains(event.target)) {
        setDesktopRatgeberOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const toggleMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
    if (mobileMenuOpen) {
      setMobileRechnerOpen(false);
      setMobileRatgeberOpen(false);
    }
  };

  const closeMenu = () => {
    setMobileMenuOpen(false);
    setMobileRechnerOpen(false);
    setMobileRatgeberOpen(false);
  };

  // Rechner Links
  const rechnerLinks = [
    { href: '/rechner', label: 'Alle Rechner', isOverview: true },
    { href: '/rechner/kostenrechner', label: 'Kostenrechner', description: 'Gesamtkosten berechnen' },
    { href: '/rechner/gebrauchtwagenbatterierechner', label: 'Batterierechner für Gebrauchtwagen', description: 'SOH-basierte Bewertung' },
  ];

  // Ratgeber Links mit Kategorien
  const ratgeberLinks = [
    { category: 'KAUFBERATUNG', links: [
      { href: '/ratgeber/kaufberatung', label: 'Kaufberatung 2025' },
      { href: '/ratgeber/gebrauchtwagen', label: 'Gebrauchtwagen Guide' },
      { href: '/ratgeber/effiziente-elektroautos', label: 'Effizienteste Elektroautos 2025' },
      { href: '/ratgeber/e-auto-pendler', label: 'E-Auto für Pendler' },
    ]},
    { category: 'KOSTEN & FÖRDERUNG', links: [
      { href: '/ratgeber/thg-quote', label: 'THG-Quote verdienen' },
      { href: '/ratgeber/strompreise-2025', label: 'Strompreise E-Autos' },
      { href: '/ratgeber/wallbox-kosten-installation', label: 'Wallbox Installation & Kosten' },
      { href: '/ratgeber/elektroauto-versicherung', label: 'Elektroauto Versicherung' },
      { href: '/ratgeber/wertverlust', label: 'Wertverlust E-Autos' },
    ]},
    { category: 'MYTHEN & FAKTEN', links: [
      { href: '/ratgeber/mythen', label: 'Die 10 größten Mythen' },
      { href: '/ratgeber/ladezeit', label: 'Wie lange lädt ein E-Auto?' },
      { href: '/ratgeber/elektroauto-reichweite-winter-test', label: 'Winter Reichweite Test' },
      { href: '/ratgeber/verkaufszahlen', label: 'Verkaufszahlen Deutschland' },
    ]},
  ];

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

        {/* Desktop Navigation */}
        <nav className="hidden md:flex gap-8">
          {/* Rechner Dropdown */}
          <div ref={rechnerRef} className="relative">
            <button
              onClick={() => {
                setDesktopRechnerOpen(!desktopRechnerOpen);
                setDesktopRatgeberOpen(false);
              }}
              className={`flex items-center gap-1 relative text-lg font-medium transition-all duration-200 pb-1 ${
                activeTab === 'rechner' 
                  ? 'text-blue-600 font-bold' 
                  : 'text-gray-700 hover:text-blue-600 group'
              }`}
            >
              Rechner
              <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${desktopRechnerOpen ? 'rotate-180' : ''}`} />
              {activeTab === 'rechner' ? (
                <span className="absolute bottom-0 left-0 w-full h-0.5 bg-blue-600"></span>
              ) : (
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-600 group-hover:w-full transition-all duration-300"></span>
              )}
            </button>
            
            {desktopRechnerOpen && (
              <div className="absolute top-full left-0 mt-2 w-80 bg-white rounded-lg shadow-xl border border-gray-200 py-2">
                {rechnerLinks.map((link, index) => (
                  <React.Fragment key={link.href}>
                    <a
                      href={link.href}
                      onClick={() => setDesktopRechnerOpen(false)}
                      className={`block px-4 py-3 transition-colors ${
                        link.isOverview 
                          ? 'text-gray-900 font-semibold hover:bg-blue-50' 
                          : 'text-gray-700 hover:bg-blue-50'
                      }`}
                    >
                      <div className={`text-sm ${link.isOverview ? '' : 'font-semibold hover:text-blue-600'}`}>
                        {link.label}
                      </div>
                      {link.description && (
                        <div className="text-xs text-gray-500 mt-1">{link.description}</div>
                      )}
                    </a>
                    {link.isOverview && <div className="border-t border-gray-200 my-2"></div>}
                  </React.Fragment>
                ))}
              </div>
            )}
          </div>

          {/* Ratgeber Dropdown */}
          <div ref={ratgeberRef} className="relative">
            <button
              onClick={() => {
                setDesktopRatgeberOpen(!desktopRatgeberOpen);
                setDesktopRechnerOpen(false);
              }}
              className={`flex items-center gap-1 relative text-lg font-medium transition-all duration-200 pb-1 ${
                activeTab === 'ratgeber' 
                  ? 'text-blue-600 font-bold' 
                  : 'text-gray-700 hover:text-blue-600 group'
              }`}
            >
              Ratgeber
              <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${desktopRatgeberOpen ? 'rotate-180' : ''}`} />
              {activeTab === 'ratgeber' ? (
                <span className="absolute bottom-0 left-0 w-full h-0.5 bg-blue-600"></span>
              ) : (
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-600 group-hover:w-full transition-all duration-300"></span>
              )}
            </button>
            
            {desktopRatgeberOpen && (
              <div className="absolute top-full right-0 mt-2 w-72 bg-white rounded-lg shadow-xl border border-gray-200 py-2 max-h-[calc(100vh-100px)] overflow-y-auto">
                <a
                  href="/ratgeber"
                  onClick={() => setDesktopRatgeberOpen(false)}
                  className="block px-4 py-3 text-sm text-gray-900 hover:bg-blue-50 transition-colors font-semibold"
                >
                  Alle Artikel ansehen
                </a>
                <div className="border-t border-gray-200 my-2"></div>
                
                {ratgeberLinks.map((section) => (
                  <div key={section.category} className="mb-4">
                    <div className="px-4 py-2 text-xs font-bold text-gray-900 uppercase tracking-wide">
                      {section.category}
                    </div>
                    {section.links.map((link) => (
                      <a
                        key={link.href}
                        href={link.href}
                        onClick={() => setDesktopRatgeberOpen(false)}
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition-colors"
                      >
                        {link.label}
                      </a>
                    ))}
                  </div>
                ))}
              </div>
            )}
          </div>
        </nav>

        {/* Mobile Burger Button */}
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

      {/* Mobile Dropdown Menu - MIT SCROLLBAR FIX */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white border-t border-gray-200 shadow-lg max-h-[calc(100vh-72px)] overflow-y-auto overscroll-contain">
          <nav className="flex flex-col py-4">
            {/* Rechner Section */}
            <button
              onClick={() => setMobileRechnerOpen(!mobileRechnerOpen)}
              className={`flex items-center justify-between px-6 py-3 text-base font-medium transition-all ${
                activeTab === 'rechner'
                  ? 'text-blue-600 bg-blue-50 border-l-4 border-blue-600 font-bold'
                  : 'text-gray-700 hover:bg-gray-50 hover:text-blue-600'
              }`}
            >
              Rechner
              <ChevronDown className={`w-5 h-5 transition-transform duration-200 ${mobileRechnerOpen ? 'rotate-180' : ''}`} />
            </button>
            
            {mobileRechnerOpen && (
              <div className="bg-gray-50 border-l-4 border-blue-300">
                {rechnerLinks.map((link, index) => (
                  <React.Fragment key={link.href}>
                    <a
                      href={link.href}
                      onClick={closeMenu}
                      className={`block px-10 py-3 transition-colors ${
                        link.isOverview 
                          ? 'text-gray-900 font-semibold hover:bg-blue-50' 
                          : 'text-gray-700 hover:bg-blue-50'
                      }`}
                    >
                      <div className={`text-sm ${link.isOverview ? '' : 'font-semibold hover:text-blue-600'}`}>
                        {link.label}
                      </div>
                      {link.description && (
                        <div className="text-xs text-gray-500 mt-1">{link.description}</div>
                      )}
                    </a>
                    {link.isOverview && <div className="border-t border-gray-300 mx-4"></div>}
                  </React.Fragment>
                ))}
              </div>
            )}

            {/* Ratgeber Section */}
            <button
              onClick={() => setMobileRatgeberOpen(!mobileRatgeberOpen)}
              className={`flex items-center justify-between px-6 py-3 text-base font-medium transition-all ${
                activeTab === 'ratgeber'
                  ? 'text-blue-600 bg-blue-50 border-l-4 border-blue-600 font-bold'
                  : 'text-gray-700 hover:bg-gray-50 hover:text-blue-600'
              }`}
            >
              Ratgeber
              <ChevronDown className={`w-5 h-5 transition-transform duration-200 ${mobileRatgeberOpen ? 'rotate-180' : ''}`} />
            </button>
            
            {mobileRatgeberOpen && (
              <div className="bg-gray-50 border-l-4 border-blue-300">
                <a
                  href="/ratgeber"
                  onClick={closeMenu}
                  className="block px-10 py-3 text-sm text-gray-900 hover:bg-blue-50 transition-colors font-semibold"
                >
                  Alle Artikel ansehen
                </a>
                <div className="border-t border-gray-300 mx-4"></div>
                
                {ratgeberLinks.map((section) => (
                  <div key={section.category} className="mt-3">
                    <div className="px-10 py-2 text-xs font-bold text-gray-900 uppercase tracking-wide">
                      {section.category}
                    </div>
                    {section.links.map((link) => (
                      <a
                        key={link.href}
                        href={link.href}
                        onClick={closeMenu}
                        className="block px-10 py-2 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition-colors"
                      >
                        {link.label}
                      </a>
                    ))}
                  </div>
                ))}
              </div>
            )}
          </nav>
        </div>
      )}
    </header>
  );
}