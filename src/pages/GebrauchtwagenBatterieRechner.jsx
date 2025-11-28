import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { Car, Calendar, Gauge, Battery, TrendingUp, TrendingDown, AlertTriangle, CheckCircle, Euro, Shield, Info } from 'lucide-react';
import Header from '../components/Header';

// Vollständige Fahrzeugdatenbank
const FAHRZEUG_DATEN = {
  'Tesla Model 3 Standard Range': {
    garantieJahre: 8, garantieKm: 160000, garantieSOH: 70,
    neupreis: 42990, batteriekapazitaet: 60, kategorie: 'Mittelklasse',
    hersteller: 'Tesla', erstesModelljahr: 2019, letztesModelljahr: 2025,
    bildUrl: '/images/tesla-model-3.jpg', bildAlt: 'Tesla Model 3'
  },
  'Tesla Model 3 Long Range': {
    garantieJahre: 8, garantieKm: 192000, garantieSOH: 70,
    neupreis: 50990, batteriekapazitaet: 75, kategorie: 'Mittelklasse',
    hersteller: 'Tesla', erstesModelljahr: 2018, letztesModelljahr: 2025,
    bildUrl: '/images/tesla-model-3.jpg', bildAlt: 'Tesla Model 3 Long Range'
  },
  'Tesla Model Y Long Range': {
    garantieJahre: 8, garantieKm: 192000, garantieSOH: 70,
    neupreis: 55990, batteriekapazitaet: 75, kategorie: 'SUV',
    hersteller: 'Tesla', erstesModelljahr: 2021, letztesModelljahr: 2025,
    bildUrl: '/images/tesla-model-y.jpg', bildAlt: 'Tesla Model Y'
  },
  'Tesla Model S': {
    garantieJahre: 8, garantieKm: 240000, garantieSOH: 70,
    neupreis: 99990, batteriekapazitaet: 100, kategorie: 'Oberklasse',
    hersteller: 'Tesla', erstesModelljahr: 2012, letztesModelljahr: 2025,
    bildUrl: '/images/tesla-model-s.jpg', bildAlt: 'Tesla Model S'
  },
  'VW ID.3 Pro': {
    garantieJahre: 8, garantieKm: 160000, garantieSOH: 70,
    neupreis: 43995, batteriekapazitaet: 58, kategorie: 'Kompaktklasse',
    hersteller: 'Volkswagen', erstesModelljahr: 2020, letztesModelljahr: 2025,
    bildUrl: '/images/vw-id3.jpg', bildAlt: 'VW ID.3'
  },
  'VW ID.3 Pro S': {
    garantieJahre: 8, garantieKm: 160000, garantieSOH: 70,
    neupreis: 48900, batteriekapazitaet: 77, kategorie: 'Kompaktklasse',
    hersteller: 'Volkswagen', erstesModelljahr: 2020, letztesModelljahr: 2025,
    bildUrl: '/images/vw-id3.jpg', bildAlt: 'VW ID.3 Pro S'
  },
  'VW ID.4 Pro': {
    garantieJahre: 8, garantieKm: 160000, garantieSOH: 70,
    neupreis: 49995, batteriekapazitaet: 77, kategorie: 'SUV',
    hersteller: 'Volkswagen', erstesModelljahr: 2021, letztesModelljahr: 2025,
    bildUrl: '/images/vw-id4.jpg', bildAlt: 'VW ID.4'
  },
  'VW ID.5 Pro': {
    garantieJahre: 8, garantieKm: 160000, garantieSOH: 70,
    neupreis: 52895, batteriekapazitaet: 77, kategorie: 'SUV',
    hersteller: 'Volkswagen', erstesModelljahr: 2022, letztesModelljahr: 2025,
    bildUrl: '/images/vw-id5.jpg', bildAlt: 'VW ID.5'
  },
  'Hyundai Ioniq 5': {
    garantieJahre: 8, garantieKm: 160000, garantieSOH: 70,
    neupreis: 46900, batteriekapazitaet: 72.6, kategorie: 'SUV',
    hersteller: 'Hyundai', erstesModelljahr: 2021, letztesModelljahr: 2025,
    bildUrl: '/images/hyundai-ioniq5.jpg', bildAlt: 'Hyundai Ioniq 5'
  },
  'Hyundai Kona Electric': {
    garantieJahre: 8, garantieKm: 160000, garantieSOH: 70,
    neupreis: 42600, batteriekapazitaet: 64, kategorie: 'Kompakt-SUV',
    hersteller: 'Hyundai', erstesModelljahr: 2018, letztesModelljahr: 2025,
    bildUrl: '/images/hyundai-kona.jpg', bildAlt: 'Hyundai Kona Electric'
  },
  'Kia EV6': {
    garantieJahre: 7, garantieKm: 150000, garantieSOH: 70,
    neupreis: 46990, batteriekapazitaet: 77.4, kategorie: 'SUV',
    hersteller: 'Kia', erstesModelljahr: 2021, letztesModelljahr: 2025,
    bildUrl: '/images/kia-ev6.jpg', bildAlt: 'Kia EV6'
  },
  'BMW i4 eDrive40': {
    garantieJahre: 8, garantieKm: 160000, garantieSOH: 70,
    neupreis: 56700, batteriekapazitaet: 80.7, kategorie: 'Mittelklasse',
    hersteller: 'BMW', erstesModelljahr: 2021, letztesModelljahr: 2025,
    bildUrl: '/images/bmw-i4.jpg', bildAlt: 'BMW i4'
  },
  'BMW iX3': {
    garantieJahre: 8, garantieKm: 160000, garantieSOH: 70,
    neupreis: 68500, batteriekapazitaet: 80, kategorie: 'SUV',
    hersteller: 'BMW', erstesModelljahr: 2020, letztesModelljahr: 2024,
    bildUrl: '/images/bmw-ix3.jpg', bildAlt: 'BMW iX3'
  },
  'Mercedes EQA': {
    garantieJahre: 8, garantieKm: 160000, garantieSOH: 70,
    neupreis: 54431, batteriekapazitaet: 66.5, kategorie: 'Kompakt-SUV',
    hersteller: 'Mercedes', erstesModelljahr: 2021, letztesModelljahr: 2025,
    bildUrl: '/images/mercedes-eqa.jpg', bildAlt: 'Mercedes EQA'
  },
  'Mercedes EQE': {
    garantieJahre: 8, garantieKm: 160000, garantieSOH: 70,
    neupreis: 71550, batteriekapazitaet: 90.6, kategorie: 'Oberklasse',
    hersteller: 'Mercedes', erstesModelljahr: 2022, letztesModelljahr: 2025,
    bildUrl: '/images/mercedes-eqe.jpg', bildAlt: 'Mercedes EQE'
  },
  'Audi Q4 e-tron': {
    garantieJahre: 8, garantieKm: 160000, garantieSOH: 70,
    neupreis: 52900, batteriekapazitaet: 76.6, kategorie: 'SUV',
    hersteller: 'Audi', erstesModelljahr: 2021, letztesModelljahr: 2025,
    bildUrl: '/images/audi-q4.jpg', bildAlt: 'Audi Q4 e-tron'
  },
  'Polestar 2': {
    garantieJahre: 8, garantieKm: 160000, garantieSOH: 70,
    neupreis: 49900, batteriekapazitaet: 78, kategorie: 'Mittelklasse',
    hersteller: 'Polestar', erstesModelljahr: 2020, letztesModelljahr: 2025,
    bildUrl: '/images/polestar-2.jpg', bildAlt: 'Polestar 2'
  },
  'Skoda Enyaq iV 80': {
    garantieJahre: 8, garantieKm: 160000, garantieSOH: 70,
    neupreis: 48070, batteriekapazitaet: 77, kategorie: 'SUV',
    hersteller: 'Skoda', erstesModelljahr: 2021, letztesModelljahr: 2025,
    bildUrl: '/images/skoda-enyaq.jpg', bildAlt: 'Skoda Enyaq'
  },
  'Renault Zoe': {
    garantieJahre: 8, garantieKm: 160000, garantieSOH: 70,
    neupreis: 34900, batteriekapazitaet: 52, kategorie: 'Kleinwagen',
    hersteller: 'Renault', erstesModelljahr: 2013, letztesModelljahr: 2024,
    bildUrl: '/images/renault-zoe.jpg', bildAlt: 'Renault Zoe'
  },
  'Nissan Leaf': {
    garantieJahre: 8, garantieKm: 160000, garantieSOH: 70,
    neupreis: 38400, batteriekapazitaet: 62, kategorie: 'Kompaktklasse',
    hersteller: 'Nissan', erstesModelljahr: 2011, letztesModelljahr: 2025,
    bildUrl: '/images/nissan-leaf.jpg', bildAlt: 'Nissan Leaf'
  },
  'Opel Corsa-e': {
    garantieJahre: 8, garantieKm: 160000, garantieSOH: 70,
    neupreis: 36650, batteriekapazitaet: 50, kategorie: 'Kleinwagen',
    hersteller: 'Opel', erstesModelljahr: 2020, letztesModelljahr: 2025,
    bildUrl: '/images/opel-corsa-e.jpg', bildAlt: 'Opel Corsa-e'
  },
  'Fiat 500e': {
    garantieJahre: 8, garantieKm: 160000, garantieSOH: 70,
    neupreis: 37900, batteriekapazitaet: 42, kategorie: 'Kleinwagen',
    hersteller: 'Fiat', erstesModelljahr: 2020, letztesModelljahr: 2025,
    bildUrl: '/images/fiat-500e.jpg', bildAlt: 'Fiat 500e'
  },
  'Ford Mustang Mach-E': {
    garantieJahre: 8, garantieKm: 160000, garantieSOH: 70,
    neupreis: 52100, batteriekapazitaet: 75, kategorie: 'SUV',
    hersteller: 'Ford', erstesModelljahr: 2021, letztesModelljahr: 2025,
    bildUrl: '/images/ford-mach-e.jpg', bildAlt: 'Ford Mustang Mach-E'
  },
  'Volvo XC40 Recharge': {
    garantieJahre: 8, garantieKm: 160000, garantieSOH: 70,
    neupreis: 57250, batteriekapazitaet: 78, kategorie: 'Kompakt-SUV',
    hersteller: 'Volvo', erstesModelljahr: 2020, letztesModelljahr: 2025,
    bildUrl: '/images/volvo-xc40.jpg', bildAlt: 'Volvo XC40 Recharge'
  },
  'MG4 Electric': {
    garantieJahre: 7, garantieKm: 150000, garantieSOH: 70,
    neupreis: 31990, batteriekapazitaet: 64, kategorie: 'Kompaktklasse',
    hersteller: 'MG', erstesModelljahr: 2022, letztesModelljahr: 2025,
    bildUrl: '/images/mg4.jpg', bildAlt: 'MG4 Electric'
  }
};

const GebrauchtwagenBatterieRechner = () => {
  const [modell, setModell] = useState('');
  const [erstzulassung, setErstzulassung] = useState('');
  const [kilometerstand, setKilometerstand] = useState('');
  const [sohWert, setSohWert] = useState('');
  const [kaufpreis, setKaufpreis] = useState('');
  const [ergebnis, setErgebnis] = useState(null);
  const [verfuegbareJahre, setVerfuegbareJahre] = useState([]);

  useEffect(() => {
    if (modell && FAHRZEUG_DATEN[modell]) {
      const fahrzeugDaten = FAHRZEUG_DATEN[modell];
      const jahre = [];
      for (let jahr = fahrzeugDaten.erstesModelljahr; jahr <= fahrzeugDaten.letztesModelljahr; jahr++) {
        jahre.push(jahr);
      }
      setVerfuegbareJahre(jahre);
      
      // Setze mittleres Jahr als Standard
      const mittleresJahr = Math.floor((fahrzeugDaten.erstesModelljahr + fahrzeugDaten.letztesModelljahr) / 2);
      setErstzulassung(mittleresJahr.toString());
    }
  }, [modell]);

  const berechneBewertung = () => {
    if (!modell || !erstzulassung || !kilometerstand || !sohWert) {
      alert('Bitte füllen Sie alle Pflichtfelder aus.');
      return;
    }

    const fahrzeugDaten = FAHRZEUG_DATEN[modell];
    const alter = new Date().getFullYear() - parseInt(erstzulassung);
    const km = parseInt(kilometerstand);
    const soh = parseInt(sohWert);
    
    // Soll-SOH berechnen
    const alterFaktor = Math.min(alter / fahrzeugDaten.garantieJahre, 1);
    const kmFaktor = Math.min(km / fahrzeugDaten.garantieKm, 1);
    const degradationFaktor = Math.max(alterFaktor, kmFaktor);
    const sollSOH = Math.round((100 - (degradationFaktor * (100 - fahrzeugDaten.garantieSOH))) * 10) / 10;
    
    // Basis-Restwert berechnen
    let basisRestwert = fahrzeugDaten.neupreis;
    if (alter >= 1) {
      basisRestwert = fahrzeugDaten.neupreis * 0.75;
      if (alter > 1) {
        basisRestwert = basisRestwert * Math.pow(0.95, alter - 1);
      }
    }
    basisRestwert = Math.round(basisRestwert);
    
    // Batteriekorrektur berechnen
    const sohAbweichung = soh - sollSOH;
    const batterieKosten = Math.round(fahrzeugDaten.batteriekapazitaet * 180);
    const wertkorrektur = Math.round((sohAbweichung / 100) * batterieKosten * 1.5);
    const geschaetzterWert = Math.max(0, basisRestwert + wertkorrektur);
    
    // Bewertung ermitteln
    let bewertung, bewertungKlasse, empfehlung;
    if (soh >= sollSOH + 5) {
      bewertung = 'Ausgezeichnet';
      bewertungKlasse = 'success';
      empfehlung = 'Hervorragender Zustand! Die Batterie zeigt überdurchschnittliche Werte für Alter und Laufleistung. Ein Kauf wird empfohlen.';
    } else if (soh >= sollSOH - 3) {
      bewertung = 'Gut';
      bewertungKlasse = 'info';
      empfehlung = 'Guter Zustand. Die Batterie entspricht dem Erwartungswert für Alter und Laufleistung. Kaufentscheidung kann getroffen werden.';
    } else if (soh >= fahrzeugDaten.garantieSOH + 5) {
      bewertung = 'Befriedigend';
      bewertungKlasse = 'warning';
      empfehlung = 'Befriedigender Zustand. Die Batterie zeigt normale Degradation, liegt aber unter dem Optimalwert. Preis sollte entsprechend angepasst werden.';
    } else {
      bewertung = 'Kritisch';
      bewertungKlasse = 'danger';
      empfehlung = 'Kritischer Zustand! Die Batterie zeigt starke Degradation. Ein professionelles Gutachten wird dringend empfohlen, bevor eine Kaufentscheidung getroffen wird.';
    }
    
    // Garantiestatus
    const garantieRestJahre = Math.max(0, fahrzeugDaten.garantieJahre - alter);
    const garantieRestKm = Math.max(0, fahrzeugDaten.garantieKm - km);
    const garantieAktiv = garantieRestJahre > 0 && garantieRestKm > 0;
    
    setErgebnis({
      geschaetzterWert,
      basisRestwert,
      wertkorrektur,
      sollSOH,
      sohAbweichung: Math.round(sohAbweichung * 10) / 10,
      bewertung,
      bewertungKlasse,
      empfehlung,
      garantieAktiv,
      garantieRestJahre,
      garantieRestKm,
      batterieKosten,
      fahrzeugalter: alter,
      kaufpreisAngegeben: kaufpreis ? parseInt(kaufpreis) : null
    });
  };

  return (
    <>
      <Helmet>
        <title>Batterie-Zustand bewerten | Gebrauchtwagen E-Auto SOH-Rechner</title>
        <meta name="description" content="Kostenloser SOH-Rechner für gebrauchte E-Autos. Bewerten Sie den Batteriezustand und ermitteln Sie den fairen Marktwert basierend auf State of Health." />
        <link rel="canonical" href="https://e-autowelt.com/rechner/gebrauchtwagenbatterierechner" />
        <meta name="keywords" content="soh rechner, batterie zustand e-auto, gebrauchtwagen elektroauto bewertung, batteriezustand prüfen" />
        
        {/* Open Graph */}
        <meta property="og:title" content="Batterie-Zustand bewerten | E-Auto SOH-Rechner" />
        <meta property="og:description" content="Bewerten Sie den Batteriezustand Ihres gebrauchten E-Autos mit unserem kostenlosen SOH-Rechner." />
        <meta property="og:url" content="https://e-autowelt.com/rechner/gebrauchtwagenbatterierechner" />
        <meta property="og:type" content="website" />
        
        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Batterie-Zustand bewerten | E-Auto SOH-Rechner" />
        <meta name="twitter:description" content="Kostenloser SOH-Rechner für gebrauchte E-Autos" />
      </Helmet>

      <Header activeTab="rechner" />
      
      {/* Spacer for fixed header */}
      <div className="h-20 md:h-24"></div>
      
      {/* Hero Section Container */}
      <div className="max-w-7xl mx-auto px-4 md:px-8 mt-8 mb-8 md:mt-0 md:mb-20">
        
        {/* Hero Section mit Hintergrundbild */}
        <div className="relative h-[450px] md:h-[480px] rounded-2xl overflow-hidden shadow-2xl">
          
          {/* Background Image */}
          <div className="absolute inset-0">
            <img 
              src="/images/ratgeber/gebrauchtwagen-batterie-hero.webp"
              alt="Gebrauchtwagen E-Auto Batterie Bewertung"
              className="w-full h-full object-cover opacity-95"
              loading="lazy"
              onError={(e) => {
                // Fallback: Gradient wenn Bild nicht lädt
                e.target.style.display = 'none';
                e.target.parentElement.style.background = 'linear-gradient(135deg, #1e3a8a 0%, #3b82f6 100%)';
              }}
            />
            {/* Overlays */}
            <div className="absolute inset-0 bg-gradient-to-r from-blue-950/95 via-slate-900/80 to-blue-950/70"></div>
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-slate-900/40"></div>
          </div>

          {/* Animated Blobs */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <div className="absolute top-20 right-20 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl animate-pulse"></div>
            <div className="absolute bottom-20 left-20 w-96 h-96 bg-green-500/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
          </div>

          {/* Content */}
          <div className="relative max-w-7xl mx-auto px-4 py-8 md:py-16">
            <div className="max-w-4xl mx-auto text-center">
              
              {/* Badge */}
              <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md px-4 py-2 rounded-full mb-6 border border-white/20 shadow-xl">
                <Battery className="w-4 h-4 text-green-300" />
                <span className="text-sm font-semibold text-white">Kostenloser SOH-Rechner 2025</span>
              </div>
              
              {/* Headline */}
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold mb-6 leading-tight">
                <span className="text-white">Batterie-Zustand</span>
                <br />
                <span className="bg-gradient-to-r from-green-300 via-blue-300 to-green-400 bg-clip-text text-transparent drop-shadow-lg">
                  bewerten
                </span>
              </h1>
              
              {/* Subheadline */}
              <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-100 mb-8 leading-relaxed max-w-3xl mx-auto">
                Ermitteln Sie den <strong className="text-green-300">fairen Marktwert</strong> Ihres gebrauchten E-Autos 
                basierend auf dem <strong className="text-blue-300">State of Health (SOH)</strong> der Batterie
              </p>

              {/* Trust Badges */}
              <div className="flex flex-wrap justify-center gap-4 md:gap-8 mb-10">
                <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full border border-white/20">
                  <CheckCircle className="w-5 h-5 text-green-300" />
                  <span className="text-white/90 text-sm md:text-base whitespace-nowrap">25 E-Auto-Modelle</span>
                </div>
                <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full border border-white/20">
                  <CheckCircle className="w-5 h-5 text-blue-300" />
                  <span className="text-white/90 text-sm md:text-base whitespace-nowrap">SOH-basierte Bewertung</span>
                </div>
                <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full border border-white/20">
                  <CheckCircle className="w-5 h-5 text-green-300" />
                  <span className="text-white/90 text-sm md:text-base whitespace-nowrap">100% Kostenlos</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid lg:grid-cols-2 gap-8">
          
          {/* Linke Spalte: Eingabeformular */}
          <div className="bg-white rounded-lg shadow-lg border border-gray-200 p-8">
            <h2 className="text-2xl font-bold mb-2">Fahrzeugdaten eingeben</h2>
            <p className="text-gray-600 mb-6">
              Geben Sie die Daten Ihres E-Autos ein, um eine detaillierte Bewertung zu erhalten.
            </p>

            <div className="space-y-6">
              {/* Fahrzeugmodell */}
              <div>
                <label className="flex items-center gap-2 text-sm font-semibold text-gray-700 mb-2">
                  <Car className="w-4 h-4" />
                  Fahrzeugmodell
                </label>
                <select
                  value={modell}
                  onChange={(e) => setModell(e.target.value)}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                >
                  <option value="">Bitte wählen...</option>
                  {Object.entries(FAHRZEUG_DATEN)
                    .sort((a, b) => a[1].hersteller.localeCompare(b[1].hersteller))
                    .map(([name, data]) => (
                      <option key={name} value={name}>
                        {name} ({data.batteriekapazitaet} kWh)
                      </option>
                    ))}
                </select>
              </div>

              {/* Erstzulassungsjahr */}
              <div>
                <label className="flex items-center gap-2 text-sm font-semibold text-gray-700 mb-2">
                  <Calendar className="w-4 h-4" />
                  Erstzulassungsjahr
                </label>
                <select
                  value={erstzulassung}
                  onChange={(e) => setErstzulassung(e.target.value)}
                  disabled={!modell}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent disabled:bg-gray-100 disabled:cursor-not-allowed"
                >
                  <option value="">Bitte wählen...</option>
                  {verfuegbareJahre.map(jahr => (
                    <option key={jahr} value={jahr}>{jahr}</option>
                  ))}
                </select>
                {erstzulassung && (
                  <p className="text-sm text-gray-600 mt-1">
                    Fahrzeugalter: {new Date().getFullYear() - parseInt(erstzulassung)} Jahre
                  </p>
                )}
              </div>

              {/* Kilometerstand */}
              <div>
                <label className="flex items-center gap-2 text-sm font-semibold text-gray-700 mb-2">
                  <Gauge className="w-4 h-4" />
                  Kilometerstand
                </label>
                <div className="relative">
                  <input
                    type="text"
                    value={kilometerstand ? parseInt(kilometerstand).toLocaleString('de-DE').replace(/,/g, '.') : ''}
                    onChange={(e) => {
                      const value = e.target.value.replace(/\./g, '').replace(/[^\d]/g, '');
                      if (value === '' || /^\d+$/.test(value)) {
                        setKilometerstand(value);
                      }
                    }}
                    placeholder="z.B. 50.000"
                    className="w-full px-4 py-3 pr-20 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                  {/* Custom Stepper Buttons */}
                  <div className="absolute right-2 top-1/2 -translate-y-1/2 flex flex-col">
                    <button
                      type="button"
                      onClick={(e) => {
                        e.preventDefault();
                        setKilometerstand(prev => {
                          const current = parseInt(prev || '0');
                          return String(Math.min(999000, current + 1000));
                        });
                      }}
                      className="px-2 py-0.5 text-gray-600 hover:text-blue-600 hover:bg-gray-100 rounded transition-colors"
                    >
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 15l7-7 7 7" />
                      </svg>
                    </button>
                    <button
                      type="button"
                      onClick={(e) => {
                        e.preventDefault();
                        setKilometerstand(prev => {
                          const current = parseInt(prev || '0');
                          return String(Math.max(0, current - 1000));
                        });
                      }}
                      className="px-2 py-0.5 text-gray-600 hover:text-blue-600 hover:bg-gray-100 rounded transition-colors"
                    >
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    </button>
                  </div>
                </div>
              </div>

              {/* Batterie SOH */}
              <div>
                <label className="flex items-center gap-2 text-sm font-semibold text-gray-700 mb-2">
                  <Battery className="w-4 h-4" />
                  Batterie SOH (State of Health)
                </label>
                <div className="relative">
                  <input
                    type="number"
                    value={sohWert}
                    onChange={(e) => setSohWert(e.target.value)}
                    placeholder="z.B. 85"
                    min="50"
                    max="100"
                    className="w-full px-4 py-3 pr-12 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                  <span className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-500 font-medium">
                    %
                  </span>
                </div>
                <p className="text-xs text-gray-500 mt-1">
                  Tipp: SOH-Wert bei DEKRA, TÜV oder mit Aviloo-Box messen lassen
                </p>
              </div>

              {/* Damaliger Kaufpreis (optional) */}
              <div>
                <label className="flex items-center gap-2 text-sm font-semibold text-gray-700 mb-2">
                  <Euro className="w-4 h-4" />
                  Damaliger Kaufpreis (optional)
                </label>
                <div className="relative">
                  <input
                    type="text"
                    value={kaufpreis ? parseInt(kaufpreis).toLocaleString('de-DE').replace(/,/g, '.') : ''}
                    onChange={(e) => {
                      const value = e.target.value.replace(/\./g, '').replace(/[^\d]/g, '');
                      if (value === '' || /^\d+$/.test(value)) {
                        setKaufpreis(value);
                      }
                    }}
                    placeholder="z.B. 35.000"
                    className="w-full px-4 py-3 pr-12 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                  <span className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-500 font-medium">
                    €
                  </span>
                </div>
                <p className="text-xs text-gray-500 mt-1">
                  Leer lassen, um UVP als Basis zu verwenden
                </p>
              </div>

              {/* CTA Button */}
              <button
                onClick={berechneBewertung}
                className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-4 px-6 rounded-lg transition-colors duration-200 flex items-center justify-center gap-2"
              >
                Jetzt bewerten
              </button>
            </div>
          </div>

          {/* Rechte Spalte: Ergebnisse */}
          <div className="space-y-6">
            {ergebnis ? (
              <>
                {/* Bewertungsergebnis Card */}
                <div className="bg-white rounded-lg shadow-lg border border-gray-200 p-6">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-xl font-bold">Bewertungsergebnis</h3>
                    <span className={`inline-flex items-center gap-1 px-3 py-1 rounded-full text-sm font-semibold ${
                      ergebnis.bewertungKlasse === 'danger' ? 'bg-red-100 text-red-700' :
                      ergebnis.bewertungKlasse === 'warning' ? 'bg-yellow-100 text-yellow-700' :
                      ergebnis.bewertungKlasse === 'info' ? 'bg-blue-100 text-blue-700' :
                      'bg-green-100 text-green-700'
                    }`}>
                      {ergebnis.bewertungKlasse === 'danger' && <AlertTriangle className="w-4 h-4" />}
                      {ergebnis.bewertungKlasse === 'success' && <CheckCircle className="w-4 h-4" />}
                      {ergebnis.bewertung}
                    </span>
                  </div>

                  <p className="text-sm text-gray-600 mb-4">
                    Fahrzeugalter: {ergebnis.fahrzeugalter} Jahre
                  </p>

                  {/* Geschätzter Marktwert */}
                  <div className="bg-blue-50 border-2 border-blue-200 rounded-lg p-6 mb-6">
                    <div className="flex items-center gap-2 mb-2">
                      <Euro className="w-5 h-5 text-blue-600" />
                      <span className="text-sm font-semibold text-gray-700">Geschätzter Marktwert</span>
                    </div>
                    <div className="text-4xl font-bold text-blue-700 mb-2">
                      {ergebnis.geschaetzterWert.toLocaleString('de-DE')} €
                    </div>
                    <div className="flex items-center gap-2 text-sm">
                      {ergebnis.wertkorrektur >= 0 ? (
                        <TrendingUp className="w-4 h-4 text-green-600" />
                      ) : (
                        <TrendingDown className="w-4 h-4 text-red-600" />
                      )}
                      <span className={ergebnis.wertkorrektur >= 0 ? 'text-green-700' : 'text-red-700'}>
                        {ergebnis.wertkorrektur > 0 ? '+' : ''}{ergebnis.wertkorrektur.toLocaleString('de-DE')} € Wertminderung durch SOH
                      </span>
                    </div>
                  </div>

                  {/* SOH-Vergleich */}
                  <div className="space-y-4">
                    <div>
                      <div className="flex justify-between text-sm mb-1">
                        <span className="font-medium">Erwarteter SOH</span>
                        <span className="font-bold">{ergebnis.sollSOH}%</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-3">
                        <div 
                          className="bg-blue-500 h-3 rounded-full"
                          style={{ width: `${ergebnis.sollSOH}%` }}
                        ></div>
                      </div>
                    </div>

                    <div>
                      <div className="flex justify-between text-sm mb-1">
                        <span className="font-medium">Tatsächlicher SOH</span>
                        <span className="font-bold">{sohWert}%</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-3">
                        <div 
                          className={`h-3 rounded-full ${
                            ergebnis.bewertungKlasse === 'danger' ? 'bg-red-500' :
                            ergebnis.bewertungKlasse === 'warning' ? 'bg-yellow-500' :
                            ergebnis.bewertungKlasse === 'info' ? 'bg-blue-500' :
                            'bg-green-500'
                          }`}
                          style={{ width: `${sohWert}%` }}
                        ></div>
                      </div>
                    </div>

                    <div className="bg-gray-50 rounded-lg p-3">
                      <div className="flex justify-between items-center">
                        <span className="text-sm font-medium text-gray-700">Abweichung vom Sollwert</span>
                        <span className={`text-lg font-bold ${
                          ergebnis.sohAbweichung >= 0 ? 'text-green-600' : 'text-red-600'
                        }`}>
                          {ergebnis.sohAbweichung > 0 ? '+' : ''}{ergebnis.sohAbweichung}%
                        </span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Kaufempfehlung */}
                <div className={`rounded-lg border-2 p-6 ${
                  ergebnis.bewertungKlasse === 'danger' ? 'bg-red-50 border-red-200' :
                  ergebnis.bewertungKlasse === 'warning' ? 'bg-yellow-50 border-yellow-200' :
                  ergebnis.bewertungKlasse === 'info' ? 'bg-blue-50 border-blue-200' :
                  'bg-green-50 border-green-200'
                }`}>
                  <div className="flex items-start gap-3">
                    <AlertTriangle className={`w-5 h-5 flex-shrink-0 mt-0.5 ${
                      ergebnis.bewertungKlasse === 'danger' ? 'text-red-600' :
                      ergebnis.bewertungKlasse === 'warning' ? 'text-yellow-600' :
                      'text-blue-600'
                    }`} />
                    <div>
                      <h4 className="font-bold mb-2">
                        {ergebnis.bewertungKlasse === 'danger' ? 'Empfehlung: Vorsicht' : 
                         ergebnis.bewertungKlasse === 'warning' ? 'Empfehlung: Vorsicht' : 
                         'Empfehlung: Vorsicht'}
                      </h4>
                      <p className="text-sm leading-relaxed">{ergebnis.empfehlung}</p>
                    </div>
                  </div>
                </div>

                {/* Details zur Bewertung */}
                <div className="bg-white rounded-lg shadow-lg border border-gray-200 p-6">
                  <h4 className="font-bold mb-4 flex items-center gap-2">
                    <Info className="w-5 h-5 text-blue-600" />
                    Details zur Bewertung
                  </h4>
                  <ul className="space-y-4 text-sm">
                    {/* Garantie-Info */}
                    <li className="border-l-2 border-blue-600 pl-3">
                      <div className="font-semibold text-gray-800 mb-1">Herstellergarantie</div>
                      <div>
                        {ergebnis.garantieAktiv ? (
                          <span className="text-green-600 font-medium">
                            <Shield className="w-4 h-4 inline mr-1" />
                            Garantie aktiv: {ergebnis.garantieRestJahre} Jahre oder {ergebnis.garantieRestKm.toLocaleString('de-DE').replace(/,/g, '.')} km
                          </span>
                        ) : (
                          <span className="text-red-600 font-medium">
                            Garantie abgelaufen - Batteriezustand auf eigenes Risiko
                          </span>
                        )}
                      </div>
                      <div className="text-xs text-gray-500 mt-1">
                        Quelle: Herstellerangaben {FAHRZEUG_DATEN[modell]?.hersteller} 
                        ({FAHRZEUG_DATEN[modell]?.garantieJahre} Jahre / {FAHRZEUG_DATEN[modell]?.garantieKm.toLocaleString('de-DE').replace(/,/g, '.')} km / mind. {FAHRZEUG_DATEN[modell]?.garantieSOH}% SOH)
                      </div>
                    </li>

                    {/* Batterieaustauschkosten */}
                    <li className="border-l-2 border-blue-600 pl-3">
                      <div className="font-semibold text-gray-800 mb-1">Geschätzte Batterieaustauschkosten</div>
                      <div className="text-gray-700">
                        {ergebnis.batterieKosten.toLocaleString('de-DE').replace(/,/g, '.')} € 
                        <span className="text-gray-500"> (ca. 180 €/kWh × {FAHRZEUG_DATEN[modell]?.batteriekapazitaet} kWh)</span>
                      </div>
                      <div className="text-xs text-gray-500 mt-1">
                        Quelle: Durchschnittspreis 2025 für Ersatzbatterien liegt bei ca. 180 €/kWh (Marktdaten von BloombergNEF, ADAC)
                      </div>
                    </li>

                    {/* Basis-Restwert */}
                    <li className="border-l-2 border-blue-600 pl-3">
                      <div className="font-semibold text-gray-800 mb-1">Basis-Restwert (Fahrzeugalter)</div>
                      <div className="text-gray-700">
                        {ergebnis.basisRestwert.toLocaleString('de-DE').replace(/,/g, '.')} €
                      </div>
                      <div className="text-xs text-gray-500 mt-1">
                        Berechnung: {ergebnis.kaufpreisAngegeben ? 
                          `Ausgehend von Ihrem Kaufpreis ${ergebnis.kaufpreisAngegeben.toLocaleString('de-DE').replace(/,/g, '.')} €` : 
                          `Ausgehend vom Listenpreis ${FAHRZEUG_DATEN[modell]?.neupreis.toLocaleString('de-DE').replace(/,/g, '.')} € (UVP)`
                        }, 
                        1. Jahr -25%, danach -5% pro Jahr (Standard-Wertverlust E-Autos, Quelle: DAT, Schwacke)
                      </div>
                    </li>

                    {/* Kaufpreis-Info */}
                    <li className="border-l-2 border-blue-600 pl-3">
                      <div className="font-semibold text-gray-800 mb-1">Berechnungsbasis</div>
                      <div className="text-gray-700">
                        {ergebnis.kaufpreisAngegeben ? (
                          <>Ihr Kaufpreis: {ergebnis.kaufpreisAngegeben.toLocaleString('de-DE').replace(/,/g, '.')} €</>
                        ) : (
                          <>Listenpreis (UVP): {FAHRZEUG_DATEN[modell]?.neupreis.toLocaleString('de-DE').replace(/,/g, '.')} €</>
                        )}
                      </div>
                      <div className="text-xs text-gray-500 mt-1">
                        {ergebnis.kaufpreisAngegeben ? 
                          'Ihre Angabe wird als Ausgangsbasis verwendet' : 
                          'Da kein Kaufpreis angegeben wurde, verwenden wir den Hersteller-Listenpreis als Basis'
                        }
                      </div>
                    </li>

                    {/* Berechnung des finalen Marktwerts */}
                    <li className="border-l-2 border-green-600 pl-3 bg-green-50 p-3 rounded">
                      <div className="font-semibold text-gray-800 mb-1">Finaler Marktwert</div>
                      <div className="text-gray-700">
                        Basis-Restwert {ergebnis.basisRestwert.toLocaleString('de-DE').replace(/,/g, '.')} € 
                        {ergebnis.sohAbweichung !== 0 && (
                          <span className={ergebnis.sohAbweichung > 0 ? 'text-green-600' : 'text-red-600'}>
                            {' '}{ergebnis.sohAbweichung > 0 ? '+' : ''}{Math.round((ergebnis.sohAbweichung / 100) * ergebnis.batterieKosten * 1.5).toLocaleString('de-DE').replace(/,/g, '.')} €
                          </span>
                        )}
                        {' '}= <span className="font-bold text-blue-600 text-base">{ergebnis.geschaetzterWert.toLocaleString('de-DE').replace(/,/g, '.')} €</span>
                      </div>
                      <div className="text-xs text-gray-500 mt-1">
                        Batteriekorrektur: (SOH-Abweichung {ergebnis.sohAbweichung > 0 ? '+' : ''}{ergebnis.sohAbweichung}%) × Batteriekosten × Faktor 1,5
                      </div>
                    </li>
                  </ul>
                </div>
              </>
            ) : (
              <div className="bg-gray-50 rounded-lg border-2 border-dashed border-gray-300 p-12 text-center">
                <Battery className="w-16 h-16 text-gray-400 mx-auto mb-4" />
                <h3 className="text-lg font-semibold text-gray-700 mb-2">
                  Noch keine Bewertung
                </h3>
                <p className="text-gray-500">
                  Füllen Sie das Formular aus und klicken Sie auf "Jetzt bewerten", um Ihre Batterie-Bewertung zu erhalten.
                </p>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Footer Section */}
      <div className="bg-gray-50 border-t border-gray-200 py-12 px-4">
        <div className="max-w-6xl mx-auto">
          {/* Wie Sie den SOH-Wert ermitteln */}
          <div className="bg-white rounded-lg shadow-md p-8 mb-8">
            <h3 className="text-2xl font-bold mb-6">Wie Sie den SOH-Wert ermitteln</h3>
            
            <div className="space-y-4">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                  <Info className="w-5 h-5 text-blue-600" />
                </div>
                <div>
                  <h4 className="font-bold mb-1">DEKRA Battery Health Report</h4>
                  <p className="text-sm text-gray-600">
                    Professioneller Batteriecheck beim DEKRA-Experten mit detailliertem Report
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                  <Car className="w-5 h-5 text-blue-600" />
                </div>
                <div>
                  <h4 className="font-bold mb-1">TÜV Battery Quick Check</h4>
                  <p className="text-sm text-gray-600">
                    100-150€, Dauer ca. 90 Minuten, bei allen TÜV-Stationen
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                  <Battery className="w-5 h-5 text-blue-600" />
                </div>
                <div>
                  <h4 className="font-bold mb-1">Aviloo Diagnosegerät</h4>
                  <p className="text-sm text-gray-600">
                    Box zum Selbsttest, 40-120€ je nach Paket, Ergebnis nach 2-3 Fahrten
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                  <CheckCircle className="w-5 h-5 text-blue-600" />
                </div>
                <div>
                  <h4 className="font-bold mb-1">mobile.de</h4>
                  <p className="text-sm text-gray-600">
                    Viele Händler zeigen SOH-Wert direkt im Inserat (seit Oktober 2024)
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Disclaimer */}
          <div className="bg-yellow-50 border-l-4 border-yellow-400 p-6 rounded">
            <div className="flex items-start gap-3">
              <AlertTriangle className="w-5 h-5 text-yellow-600 flex-shrink-0 mt-0.5" />
              <div className="text-sm text-gray-700">
                <p className="font-bold mb-2">Wichtiger Hinweis:</p>
                <p className="leading-relaxed">
                  Diese Berechnung basiert auf Durchschnittswerten und Herstellergarantien. 
                  Der tatsächliche Marktwert kann je nach Zustand, Ausstattung, Region und Nachfrage abweichen. 
                  Für eine genaue Bewertung empfehlen wir ein professionelles Wertgutachten (z.B. DAT, Schwacke) 
                  und einen unabhängigen SOH-Test (TÜV, DEKRA, Aviloo).
                </p>
              </div>
            </div>
          </div>

          {/* Zusätzlicher Disclaimer */}
          <p className="text-center text-sm text-gray-500 mt-6">
            Die Bewertungen basieren auf öffentlich verfügbaren Daten und Durchschnittswerten. 
            Für verbindliche Aussagen konsultieren Sie bitte einen Fachmann.
          </p>
        </div>
      </div>
    </>
  );
};

export default GebrauchtwagenBatterieRechner;