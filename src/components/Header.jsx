import React, { useState } from 'react';
import { Zap, Menu, X } from 'lucide-react';

export default function Header({ activeTab = '' }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const closeMenu = () => {
    setMobileMenuOpen(false);
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
        <nav className="hidden md:flex gap-8">
          <a 
            href="/rechner" 
            className={activeTab === 'rechner' 
              ? 'relative text-lg font-bold text-blue-600 transition-all duration-200 pb-1'
              : 'relative text-lg font-medium text-gray-700 hover:text-blue-600 transition-all duration-200 pb-1 group'
            }
          >
            Kostenrechner
            {activeTab === 'rechner' ? (
                            <span className="absolute bottom-0 left-0 w-full h-0.5 bg-blue-600"></span>
                            ) : (
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-600 group-hover:w-full transition-all duration-300"></span>
            )}
          </a>
          <a 
            href="/ratgeber" 
            className={activeTab === 'ratgeber' 
              ? 'relative text-lg font-bold text-blue-600 transition-all duration-200 pb-1'
              : 'relative text-lg font-medium text-gray-700 hover:text-blue-600 transition-all duration-200 pb-1 group'
            }
          >
            Ratgeber
            {activeTab === 'ratgeber' ? (
              <span className="absolute bottom-0 left-0 w-full h-0.5 bg-blue-600"></span>
            ) : (
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-600 group-hover:w-full transition-all duration-300"></span>
            )}
          </a>
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
            <a 
              href="/rechner"
              onClick={closeMenu}
              className={activeTab === 'rechner'
                ? 'px-6 py-3 text-base font-bold text-blue-600 bg-blue-50 border-l-4 border-blue-600'
                : 'px-6 py-3 text-base font-medium text-gray-700 hover:bg-gray-50 hover:text-blue-600 transition-all'
              }
            >
              Rechner
            </a>
            <a 
              href="/ratgeber"
              onClick={closeMenu}
              className={activeTab === 'ratgeber'
                ? 'px-6 py-3 text-base font-bold text-blue-600 bg-blue-50 border-l-4 border-blue-600'
                : 'px-6 py-3 text-base font-medium text-gray-700 hover:bg-gray-50 hover:text-blue-600 transition-all'
              }
            >
              Ratgeber
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
