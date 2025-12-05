import React, { useState, useMemo } from 'react';
import SEO from '../components/SEO';
import { Droplets, Zap, Euro, Calculator, CheckCircle, ArrowDown, TrendingDown, Leaf, PiggyBank, Gauge} from 'lucide-react';
import Header from '../components/Header';


export default function ElektroAutoRechner() {
  const [kaufpreisElektro, setKaufpreisElektro] = useState(35000);
  const [kaufpreisVerbrenner, setKaufpreisVerbrenner] = useState(30000);
  const [jahreskilometer, setJahreskilometer] = useState(15000);
  const [strompreis, setStrompreis] = useState(0.30);
  const [benzinpreis, setBenzinpreis] = useState(1.75);
  const [verbrauchElektro, setVerbrauchElektro] = useState(18);
  const [verbrauchVerbrenner, setVerbrauchVerbrenner] = useState(7);
  const [nutzungsdauer, setNutzungsdauer] = useState(8);
  const [staatlicheFoerderung, setStaatlicheFoerderung] = useState(0);
  const [versicherungElektroProJahr, setVersicherungElektroProJahr] = useState(800);
  const [versicherungVerbrennerProJahr, setVersicherungVerbrennerProJahr] = useState(750);
  const [steuerElektroProJahr, setSteuerElektroProJahr] = useState(0);
  const [steuerVerbrennerProJahr, setSteuerVerbrennerProJahr] = useState(150);
  const [expertenModus, setExpertenModus] = useState(false);
  const [strompreisZuhause, setStrompreisZuhause] = useState(0.32);
  const [strompreisOeffentlich, setStrompreisOeffentlich] = useState(0.49);
  const [strompreisPV, setStrompreisPV] = useState(0.10);
  const [anteilZuhause, setAnteilZuhause] = useState(70);
  const [anteilOeffentlich, setAnteilOeffentlich] = useState(30);
  const [anteilPV, setAnteilPV] = useState(0);
  const [parkgebuehrenErsparnis, setParkgebuehrenErsparnis] = useState(480);
  const [thgQuote, setThgQuote] = useState(250);
  const [resultsVisible, setResultsVisible] = useState(false);

  const berechnung = useMemo(() => {
    const kmGesamt = jahreskilometer * nutzungsdauer;
    
    let stromkostenGesamt;
    if (expertenModus) {
      const gesamtAnteil = anteilZuhause + anteilOeffentlich + anteilPV;
      const durchschnittsPreis = gesamtAnteil > 0 
        ? (strompreisZuhause * anteilZuhause + strompreisOeffentlich * anteilOeffentlich + strompreisPV * anteilPV) / gesamtAnteil
        : strompreis;
      stromkostenGesamt = (kmGesamt / 100) * verbrauchElektro * durchschnittsPreis;
    } else {
      stromkostenGesamt = (kmGesamt / 100) * verbrauchElektro * strompreis;
    }
    
    const benzinkostenGesamt = (kmGesamt / 100) * verbrauchVerbrenner * benzinpreis;
    
    const wartungElektroProJahr = 300;
    const wartungVerbrennerProJahr = 600;
    const wartungElektroGesamt = wartungElektroProJahr * nutzungsdauer;
    const wartungVerbrennerGesamt = wartungVerbrennerProJahr * nutzungsdauer;
    
    const versicherungElektroGesamt = versicherungElektroProJahr * nutzungsdauer;
    const versicherungVerbrennerGesamt = versicherungVerbrennerProJahr * nutzungsdauer;
    
    const steuerElektroGesamt = steuerElektroProJahr * nutzungsdauer;
    const steuerVerbrennerGesamt = steuerVerbrennerProJahr * nutzungsdauer;
    
    const parkgebuehrenErsparnisGesamt = expertenModus ? parkgebuehrenErsparnis * nutzungsdauer : 0;
    const thgQuoteGesamt = expertenModus ? thgQuote * nutzungsdauer : 0;
    const foerderungWert = expertenModus ? staatlicheFoerderung : staatlicheFoerderung;
    
    const gesamtElektro = kaufpreisElektro - foerderungWert + stromkostenGesamt + wartungElektroGesamt + versicherungElektroGesamt + steuerElektroGesamt - parkgebuehrenErsparnisGesamt - thgQuoteGesamt;
    const gesamtVerbrenner = kaufpreisVerbrenner + benzinkostenGesamt + wartungVerbrennerGesamt + versicherungVerbrennerGesamt + steuerVerbrennerGesamt;
    
    const ersparnis = gesamtVerbrenner - gesamtElektro;
    
    const co2Elektro = (kmGesamt / 100) * verbrauchElektro * 0.4;
    const co2Verbrenner = (kmGesamt / 100) * verbrauchVerbrenner * 2.37;
    const co2Ersparnis = co2Verbrenner - co2Elektro;
    
    return {
      stromkostenGesamt: stromkostenGesamt.toFixed(2),
      benzinkostenGesamt: benzinkostenGesamt.toFixed(2),
      wartungElektroGesamt: wartungElektroGesamt.toFixed(2),
      wartungVerbrennerGesamt: wartungVerbrennerGesamt.toFixed(2),
      versicherungElektroGesamt: versicherungElektroGesamt.toFixed(2),
      versicherungVerbrennerGesamt: versicherungVerbrennerGesamt.toFixed(2),
      steuerElektroGesamt: steuerElektroGesamt.toFixed(2),
      steuerVerbrennerGesamt: steuerVerbrennerGesamt.toFixed(2),
      parkgebuehrenErsparnisGesamt: parkgebuehrenErsparnisGesamt.toFixed(2),
      thgQuoteGesamt: thgQuoteGesamt.toFixed(2),
      gesamtElektro: gesamtElektro.toFixed(2),
      gesamtVerbrenner: gesamtVerbrenner.toFixed(2),
      gesamtElektroProJahr: (gesamtElektro / nutzungsdauer).toFixed(2),
      gesamtVerbrennerProJahr: (gesamtVerbrenner / nutzungsdauer).toFixed(2),
      gesamtElektroProMonat: (gesamtElektro / nutzungsdauer / 12).toFixed(2),
      gesamtVerbrennerProMonat: (gesamtVerbrenner / nutzungsdauer / 12).toFixed(2),
      ersparnis: ersparnis.toFixed(2),
      ersparnisProJahr: (ersparnis / nutzungsdauer).toFixed(2),
      ersparnisProMonat: (ersparnis / nutzungsdauer / 12).toFixed(2),
      ersparnisPositiv: ersparnis > 0,
      co2Elektro: (co2Elektro / 1000).toFixed(2),
      co2Verbrenner: (co2Verbrenner / 1000).toFixed(2),
      co2Ersparnis: (co2Ersparnis / 1000).toFixed(2),
      co2ElektroProJahr: (co2Elektro / 1000 / nutzungsdauer).toFixed(2),
      co2VerbrennerProJahr: (co2Verbrenner / 1000 / nutzungsdauer).toFixed(2),
    };
  }, [kaufpreisElektro, kaufpreisVerbrenner, jahreskilometer, strompreis, benzinpreis, verbrauchElektro, verbrauchVerbrenner, nutzungsdauer, staatlicheFoerderung, versicherungElektroProJahr, versicherungVerbrennerProJahr, steuerElektroProJahr, steuerVerbrennerProJahr, expertenModus, strompreisZuhause, strompreisOeffentlich, strompreisPV, anteilZuhause, anteilOeffentlich, anteilPV, parkgebuehrenErsparnis, thgQuote]);

  const formatNumber = (num) => {
    return Math.round(num).toLocaleString('de-DE');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-green-50">
      {/* Header */}
            <SEO
        title="Elektroauto Kostenrechner 2025 - E-Auto vs Verbrenner | e-Autowelt"
        description="Kostenloser Elektroauto Rechner: Vergleichen Sie die Kosten von E-Auto und Verbrenner über die Nutzungsdauer. Anschaffung, Betrieb, Wartung, Steuern - alle Kosten auf einen Blick!"
        canonicalPath="/rechner/kostenrechner"
        keywords="elektroauto rechner, e-auto kosten, tco eauto, e-auto kostenrechner, eauto kostenvergleich, e-auto kostenvergleich, e-auto reichweitenrechner, elektroauto kostenvergleich"
        ogImage="/images/ratgeber/rechner-og.jpg"
        ogType="rechner"
        publishedDate="2025-01-19T10:00:00Z"
        modifiedDate="2025-01-19T10:00:00Z"
      />
{/* Header */}
      <Header activeTab="rechner/kostenrechner" />
      <div className="h-20 md:h-24"></div>
      {/* Spacer for fixed header */}
      <div className="max-w-7xl mx-auto px-4 md:px-8 mt-8 mb-8 md:mt-0 md:mb-20">
  
{/* IMPROVED HERO - FIXED */}
<div className="relative h-[450px] md:h-[480px] rounded-2xl overflow-hidden shadow-2xl">
  
  {/* Background Image */}
  <div className="absolute inset-0">
    <img 
      src="/images/ratgeber/elektroauto-rechner-hero.webp"
      alt="Elektroauto Kostenrechner 2025"
      className="w-full h-full object-cover opacity-95"
      loading="lazy"
      decoding="async"

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
        <Calculator className="w-4 h-4 text-green-300" />
        <span className="text-sm font-semibold text-white">Kostenloser Rechner 2025</span>
      </div>
      
      {/* Headline */}
      <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold mb-6 leading-tight">
        <span className="text-white">Elektroauto</span>
        <br />
        <span className="bg-gradient-to-r from-green-300 via-blue-300 to-green-400 bg-clip-text text-transparent drop-shadow-lg">
          Kostenrechner
        </span>
      </h1>
      
      {/* Subheadline */}
      <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-100 mb-8 leading-relaxed max-w-3xl mx-auto">
        Vergleichen Sie <strong className="text-green-300">alle Kosten</strong> von Elektro- und Verbrennerfahrzeugen 
        über <strong className="text-blue-300">die Nutzungsdauer</strong> – transparent & wissenschaftlich fundiert
      </p>

      {/* Trust Badges */}
      <div className="flex flex-wrap justify-center gap-4 md:gap-8 mb-10">
        <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full border border-white/20">
          <CheckCircle className="w-5 h-5 text-green-300" />
          <span className="text-white/90 text-sm md:text-base whitespace-nowrap">100% Kostenlos</span>
        </div>
        <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full border border-white/20">
          <CheckCircle className="w-5 h-5 text-blue-300" />
          <span className="text-white/90 text-sm md:text-base whitespace-nowrap">Keine Anmeldung</span>
        </div>
      </div>

      
    </div>
  </div>
</div>
        {/* Rechner Section */}
        <div id="rechner" className="bg-white rounded-2xl shadow-2xl p-4 md:p-8 mb-4 md:mb-6">
          {/* Allgemeine Parameter */}
          <div className="gap-2 bg-green-50 rounded-xl p-4 md:p-6 mb-4 md:mb-8">
            <div className="flex items-center gap-2 mb-4">
  <Gauge className="w-6 h-6 text-green-600" />
  <h3 className="text-lg md:text-xl font-bold text-gray-800">Allgemeine Parameter</h3>
</div>
            <div className="grid md:grid-cols-2 gap-12">
              <div>
                <label className="block text-sm md:text-base font-medium text-gray-700 gap 4 mb-3">
                  Jahreskilometer: {jahreskilometer.toLocaleString('de-DE')} km
                </label>
                <input
                  type="range"
                  min="5000"
                  max="40000"
                  step="1000"
                  value={jahreskilometer}
                  onChange={(e) => setJahreskilometer(Number(e.target.value))}
                  className="range-slider-mobile slider-green"
                />
              </div>

              <div>
                <label className="block text-sm md:text-base font-medium text-gray-700 mb-3">
                  Nutzungsdauer: {nutzungsdauer} Jahre
                </label>
                <input
                  type="range"
                  min="3"
                  max="15"
                  step="1"
                  value={nutzungsdauer}
                  onChange={(e) => setNutzungsdauer(Number(e.target.value))}
                  className="range-slider-mobile slider-green"
                />
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-8">
            {/* Elektroauto Eingaben */}
            <div className="bg-blue-50 rounded-xl p-4 md:p-6">
              <div className="flex gap-2 mb-4">
                <Zap className="w-6 h-6 text-blue-600" />
                <h3 className="text-lg md:text-xl font-bold text-gray-800 mb-3 md:mb-4">Elektroauto</h3>
              </div>
              
              <div className="space-y-4">
                <div>
                  <label className="block text-sm md:text-base font-medium text-gray-700 mb-2">
                    Kaufpreis: {kaufpreisElektro.toLocaleString('de-DE')} €
                  </label>
                  <input
                    type="range"
                    min="20000"
                    max="80000"
                    step="1000"
                    value={kaufpreisElektro}
                    onChange={(e) => setKaufpreisElektro(Number(e.target.value))}
                    className="range-slider-mobile slider-blue"
                  />
                </div>

                <div>
                  <label className="block text-sm md:text-base font-medium text-gray-700 mb-2">
                    Verbrauch: {verbrauchElektro} kWh/100km
                  </label>
                  <input
                    type="range"
                    min="12"
                    max="25"
                    step="0.5"
                    value={verbrauchElektro}
                    onChange={(e) => setVerbrauchElektro(Number(e.target.value))}
                    className="range-slider-mobile slider-blue"
                  />
                </div>

                {!expertenModus && (
                  <div>
                    <label className="block text-sm md:text-base font-medium text-gray-700 mb-2">
                      Strompreis: {strompreis.toFixed(2)} €/kWh
                    </label>
                    <input
                      type="range"
                      min="0.20"
                      max="0.50"
                      step="0.01"
                      value={strompreis}
                      onChange={(e) => setStrompreis(Number(e.target.value))}
                    className="range-slider-mobile slider-blue"
                    />
                  </div>
                )}

                <div>
                  <label className="block text-sm md:text-base font-medium text-gray-700 mb-2">
                    Versicherung: {versicherungElektroProJahr.toLocaleString('de-DE')} €/Jahr
                  </label>
                  <input
                    type="range"
                    min="400"
                    max="1500"
                    step="50"
                    value={versicherungElektroProJahr}
                    onChange={(e) => setVersicherungElektroProJahr(Number(e.target.value))}
                    className="range-slider-mobile slider-blue"
                  />
                </div>

                <div>
                  <label className="block text-sm md:text-base font-medium text-gray-700 mb-2">
                    KFZ-Steuer: {steuerElektroProJahr.toLocaleString('de-DE')} €/Jahr
                  </label>
                  <input
                    type="range"
                    min="0"
                    max="200"
                    step="10"
                    value={steuerElektroProJahr}
                    onChange={(e) => setSteuerElektroProJahr(Number(e.target.value))}
                    className="range-slider-mobile slider-blue"
                  />
                  <p className="text-sm text-gray-500 mt-1">*E-Autos in DE aktuell bis 2030 befreit</p>
                </div>
              </div>
            </div>

            {/* Verbrenner Eingaben */}
            <div className="bg-orange-50 rounded-xl p-4 md:p-6">
              <div className="flex gap-2 mb-4">
                <Droplets className="w-6 h-6 text-orange-600" />
                <h3 className="text-lg md:text-xl font-bold text-gray-800 mb-3 md:mb-4">Verbrenner</h3>
              </div>
              
              <div className="space-y-4">
                <div>
                  <label className="block text-sm md:text-base font-medium text-gray-700 mb-2">
                    Kaufpreis: {kaufpreisVerbrenner.toLocaleString('de-DE')} €
                  </label>
                  <input
                    type="range"
                    min="10000"
                    max="80000"
                    step="1000"
                    value={kaufpreisVerbrenner}
                    onChange={(e) => setKaufpreisVerbrenner(Number(e.target.value))}
                    className="range-slider-mobile slider-orange"
                  />
                </div>

                <div>
                  <label className="block text-sm md:text-base font-medium text-gray-700 mb-2">
                    Verbrauch: {verbrauchVerbrenner} L/100km
                  </label>
                  <input
                    type="range"
                    min="4"
                    max="12"
                    step="0.5"
                    value={verbrauchVerbrenner}
                    onChange={(e) => setVerbrauchVerbrenner(Number(e.target.value))}
                    className="range-slider-mobile slider-orange"
                  />
                </div>

                <div>
                  <label className="block text-sm md:text-base font-medium text-gray-700 mb-2">
                    Benzinpreis: {benzinpreis.toFixed(2)} €/L
                  </label>
                  <input
                    type="range"
                    min="1.20"
                    max="2.50"
                    step="0.05"
                    value={benzinpreis}
                    onChange={(e) => setBenzinpreis(Number(e.target.value))}
                    className="range-slider-mobile slider-orange"
                  />
                </div>

                <div>
                  <label className="block text-sm md:text-base font-medium text-gray-700 mb-2">
                    Versicherung: {versicherungVerbrennerProJahr.toLocaleString('de-DE')} €/Jahr
                  </label>
                  <input
                    type="range"
                    min="400"
                    max="1500"
                    step="50"
                    value={versicherungVerbrennerProJahr}
                    onChange={(e) => setVersicherungVerbrennerProJahr(Number(e.target.value))}
                    className="range-slider-mobile slider-orange"
                  />
                </div>

                <div>
                  <label className="block text-sm md:text-base font-medium text-gray-700 mb-2">
                    KFZ-Steuer: {steuerVerbrennerProJahr.toLocaleString('de-DE')} €/Jahr
                  </label>
                  <input
                    type="range"
                    min="50"
                    max="500"
                    step="10"
                    value={steuerVerbrennerProJahr}
                    onChange={(e) => setSteuerVerbrennerProJahr(Number(e.target.value))}
                    className="range-slider-mobile slider-orange"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Expert Mode Toggle */}
          <div className="bg-gradient-to-r from-purple-50 to-blue-50 rounded-xl p-4 mb-8">
            <div className="flex items-center justify-between gap-4">
              <div className="flex-1 min-w-0">
                <h3 className="text-lg font-bold text-gray-800">Expertenmodus</h3>
                <p className="text-sm text-gray-600">Erweiterte Einstellungen für detaillierte Berechnung</p>
              </div>
              <button
                onClick={() => setExpertenModus(!expertenModus)}
                className={`flex-shrink-0 relative inline-flex h-8 w-16 items-center rounded-full transition-colors ${
                  expertenModus ? 'bg-blue-600' : 'bg-gray-300'
                }`}
              >
                <span
                  className={`inline-block h-6 w-6 transform rounded-full bg-white transition-transform ${
                    expertenModus ? 'translate-x-8' : 'translate-x-1'
                  }`}
                />
              </button>
            </div>
          </div>

          {/* Expertenmodus Einstellungen */}
          {expertenModus && (
            <div className="bg-purple-50 border-2 border-purple-200 rounded-xl p-4 md:p-6 mb-4 md:mb-8">
              <h3 className="text-lg md:text-xl font-bold text-gray-800 mb-6">Erweiterte Einstellungen</h3>
              
              <div className="grid md:grid-cols-2 gap-6">
                {/* Förderung */}
                <div className="bg-white rounded-lg p-4">
                  <h4 className="text-lg font-semibold text-gray-800 mb-4">Staatliche Förderung für E-Auto</h4>
                  <div>
                    <label className="block text-sm md:text-base font-medium text-gray-700 mb-2">
                      Förderung: {staatlicheFoerderung.toLocaleString('de-DE')} €
                    </label>
                    <input
                      type="range"
                      min="0"
                      max="10000"
                      step="500"
                      value={staatlicheFoerderung}
                      onChange={(e) => setStaatlicheFoerderung(Number(e.target.value))}
                    className="range-slider-mobile slider-purple"
                    />
                    <p className="text-sm text-gray-500 mt-1">*Bezieht sich nur auf das Elektroauto</p>
                  </div>
                </div>

                {/* Strompreise */}
                <div className="bg-white rounded-lg p-4">
                  <h4 className="text-lg font-semibold text-gray-800 mb-4">Strompreise</h4>
                  <div className="space-y-3">
                    <div>
                      <label className="block text-sm md:text-base font-medium text-gray-700 mb-2">
                        Zuhause: {strompreisZuhause.toFixed(2)} €/kWh
                      </label>
                      <input
                        type="range"
                        min="0.20"
                        max="0.60"
                        step="0.01"
                        value={strompreisZuhause}
                        onChange={(e) => setStrompreisZuhause(Number(e.target.value))}
                    className="range-slider-mobile slider-purple"
                      />
                    </div>
                    <div>
                      <label className="block text-sm md:text-base font-medium text-gray-700 mb-2">
                        Öffentlich: {strompreisOeffentlich.toFixed(2)} €/kWh
                      </label>
                      <input
                        type="range"
                        min="0.30"
                        max="0.80"
                        step="0.01"
                        value={strompreisOeffentlich}
                        onChange={(e) => setStrompreisOeffentlich(Number(e.target.value))}
                    className="range-slider-mobile slider-purple"
                      />
                    </div>
                    <div>
                      <label className="block text-sm md:text-base font-medium text-gray-700 mb-2">
                        PV-Strom: {strompreisPV.toFixed(2)} €/kWh
                      </label>
                      <input
                        type="range"
                        min="0.05"
                        max="0.20"
                        step="0.01"
                        value={strompreisPV}
                        onChange={(e) => setStrompreisPV(Number(e.target.value))}
                    className="range-slider-mobile slider-purple"
                      />
                      <p className="text-sm text-gray-500 mt-1">*Eigenkosten PV-Anlage</p>
                    </div>
                  </div>
                </div>

                {/* Ladeanteile */}
                <div className="bg-white rounded-lg p-4">
                  <h4 className="text-lg font-semibold text-gray-800 mb-4">Ladeanteile</h4>
                  <div className="space-y-3">
                    <div>
                      <label className="block text-sm md:text-base font-medium text-gray-700 mb-2">
                        Zuhause: {anteilZuhause}%
                      </label>
                      <input
                        type="range"
                        min="0"
                        max="100"
                        step="5"
                        value={anteilZuhause}
                        onChange={(e) => setAnteilZuhause(Number(e.target.value))}
                    className="range-slider-mobile slider-purple"
                      />
                    </div>
                    <div>
                      <label className="block text-sm md:text-base font-medium text-gray-700 mb-2">
                        Öffentlich: {anteilOeffentlich}%
                      </label>
                      <input
                        type="range"
                        min="0"
                        max="100"
                        step="5"
                        value={anteilOeffentlich}
                        onChange={(e) => setAnteilOeffentlich(Number(e.target.value))}
                    className="range-slider-mobile slider-purple"
                      />
                    </div>
                    <div>
                      <label className="block text-sm md:text-base font-medium text-gray-700 mb-2">
                        PV-Strom: {anteilPV}%
                      </label>
                      <input
                        type="range"
                        min="0"
                        max="100"
                        step="5"
                        value={anteilPV}
                        onChange={(e) => setAnteilPV(Number(e.target.value))}
                    className="range-slider-mobile slider-purple"
                      />
                    </div>
                    <p className="text-sm text-gray-500">Gesamt: {anteilZuhause + anteilOeffentlich + anteilPV}%</p>
                  </div>
                </div>

                {/* Zusätzliche Vorteile */}
                <div className="bg-white rounded-lg p-4">
                  <h4 className="text-lg font-semibold text-gray-800 mb-4">Zusätzliche Vorteile E-Auto</h4>
                  <div className="space-y-3">
                    <div>
                      <label className="block text-sm md:text-base font-medium text-gray-700 mb-2">
                        Parkgebühren-Ersparnis: {parkgebuehrenErsparnis.toLocaleString('de-DE')} €/Jahr
                      </label>
                      <input
                        type="range"
                        min="0"
                        max="1200"
                        step="60"
                        value={parkgebuehrenErsparnis}
                        onChange={(e) => setParkgebuehrenErsparnis(Number(e.target.value))}
                    className="range-slider-mobile slider-purple"
                      />
                      <p className="text-sm text-gray-500 mt-1">*Befreiung/Ermäßigung in vielen Städten</p>
                    </div>
                    <div>
                      <label className="block text-sm md:text-base font-medium text-gray-700 mb-2">
                        THG-Quote: {thgQuote.toLocaleString('de-DE')} €/Jahr
                      </label>
                      <input
                        type="range"
                        min="0"
                        max="400"
                        step="10"
                        value={thgQuote}
                        onChange={(e) => setThgQuote(Number(e.target.value))}
                    className="range-slider-mobile slider-purple"
                      />
                      <p className="text-sm text-gray-500 mt-1">*Treibhausgasminderungs-Quote verkaufen</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* CTA Button - Calculation Trigger */}
          <div className="mt-12 mb-12 flex justify-center">
            <button
              onClick={() => {
                setResultsVisible(true);
                setTimeout(() => {
                  document.getElementById('results-section')?.scrollIntoView({ behavior: 'smooth' });
                }, 100);
              }}
              className="inline-flex items-center gap-3 bg-gradient-to-r from-green-500 to-green-600 text-white text-lg md:text-xl font-bold px-8 py-4 md:px-12 md:py-6 rounded-full hover:shadow-2xl hover:scale-105 active:scale-95 transition-all duration-200"
            >
              <Calculator className="w-6 h-6 md:w-7 md:h-7" />
              Kostenvergleich berechnen
            </button>
          </div>

          {/* Ergebnisse */}
          {resultsVisible && (
          <div id="results-section" className="space-y-6">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-800 flex items-center gap-2 mb-4 md:mb-6">
              <Euro className="w-7 h-7" />
              Kostenvergleich über {nutzungsdauer} Jahre
            </h2>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-blue-100 rounded-xl p-4 md:p-6">
                <Zap className="flex w-6 h-6 text-blue-600"/>
                <h3 className="text-lg md:text-xl font-bold text-blue-900 mb-4">Elektroauto</h3>
                <div className="space-y-3 text-base">
                  <div className="flex justify-between">
                    <span className="text-gray-700">Kaufpreis:</span>
                    <span className="font-semibold">{kaufpreisElektro.toLocaleString('de-DE')} €</span>
                  </div>
                  {expertenModus && staatlicheFoerderung > 0 && (
                    <div className="flex justify-between">
                      <span className="text-gray-700">Förderung:</span>
                      <span className="font-semibold text-green-600">-{staatlicheFoerderung.toLocaleString('de-DE')} €</span>
                    </div>
                  )}
                  <div className="flex justify-between">
                    <span className="text-gray-700">Stromkosten:</span>
                    <span className="font-semibold">{parseFloat(berechnung.stromkostenGesamt).toLocaleString('de-DE')} €</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-700">Wartung:</span>
                    <span className="font-semibold">{parseFloat(berechnung.wartungElektroGesamt).toLocaleString('de-DE')} €</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-700">Versicherung:</span>
                    <span className="font-semibold">{parseFloat(berechnung.versicherungElektroGesamt).toLocaleString('de-DE')} €</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-700">KFZ-Steuer:</span>
                    <span className="font-semibold">{parseFloat(berechnung.steuerElektroGesamt).toLocaleString('de-DE')} €</span>
                  </div>
                  {expertenModus && parkgebuehrenErsparnis > 0 && (
                    <div className="flex justify-between">
                      <span className="text-gray-700">Parkgebühren-Ersparnis:</span>
                      <span className="font-semibold text-green-600">-{parseFloat(berechnung.parkgebuehrenErsparnisGesamt).toLocaleString('de-DE')} €</span>
                    </div>
                  )}
                  {expertenModus && thgQuote > 0 && (
                    <div className="flex justify-between">
                      <span className="text-gray-700">THG-Quote:</span>
                      <span className="font-semibold text-green-600">-{parseFloat(berechnung.thgQuoteGesamt).toLocaleString('de-DE')} €</span>
                    </div>
                  )}
                  <div className="border-t-2 border-blue-300 pt-3 flex justify-between">
                    <span className="font-bold text-gray-800 text-lg">Gesamtkosten:</span>
                    <span className="font-bold text-2xl text-blue-900">
                      {parseFloat(berechnung.gesamtElektro).toLocaleString('de-DE')} €
                    </span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-600">Pro Jahr:</span>
                    <span className="font-semibold text-blue-800">{parseFloat(berechnung.gesamtElektroProJahr).toLocaleString('de-DE')} €</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-600">Pro Monat:</span>
                    <span className="font-semibold text-blue-800">{parseFloat(berechnung.gesamtElektroProMonat).toLocaleString('de-DE')} €</span>
                  </div>
                </div>
              </div>

              <div className="bg-orange-100 rounded-xl p-4 md:p-6">
                                <Droplets className="w-6 h-6 text-orange-600" />
                <h3 className="text-lg md:text-xl font-bold text-orange-900 mb-4">Verbrenner</h3>
                <div className="space-y-3 text-base">
                  <div className="flex justify-between">
                    <span className="text-gray-700">Kaufpreis:</span>
                    <span className="font-semibold">{kaufpreisVerbrenner.toLocaleString('de-DE')} €</span>
                  </div>
                  {expertenModus && staatlicheFoerderung > 0 && (
                    <div className="flex justify-between">
                      <span className="text-gray-700">Förderung:</span>
                      <span className="font-semibold">0 €</span>
                    </div>
                  )}
                  <div className="flex justify-between">
                    <span className="text-gray-700">Benzinkosten:</span>
                    <span className="font-semibold">{parseFloat(berechnung.benzinkostenGesamt).toLocaleString('de-DE')} €</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-700">Wartung:</span>
                    <span className="font-semibold">{parseFloat(berechnung.wartungVerbrennerGesamt).toLocaleString('de-DE')} €</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-700">Versicherung:</span>
                    <span className="font-semibold">{parseFloat(berechnung.versicherungVerbrennerGesamt).toLocaleString('de-DE')} €</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-700">KFZ-Steuer:</span>
                    <span className="font-semibold">{parseFloat(berechnung.steuerVerbrennerGesamt).toLocaleString('de-DE')} €</span>
                  </div>
                  {expertenModus && (parkgebuehrenErsparnis > 0 || thgQuote > 0) && (
                    <>
                      <div className="flex justify-between text-gray-400">
                        <span>Parkgebühren-Ersparnis:</span>
                        <span>- €</span>
                      </div>
                      <div className="flex justify-between text-gray-400">
                        <span>THG-Quote:</span>
                        <span>- €</span>
                      </div>
                    </>
                  )}
                  <div className="border-t-2 border-orange-300 pt-3 flex justify-between">
                    <span className="font-bold text-gray-800 text-lg">Gesamtkosten:</span>
                    <span className="font-bold text-2xl text-orange-900">
                      {parseFloat(berechnung.gesamtVerbrenner).toLocaleString('de-DE')} €
                    </span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-600">Pro Jahr:</span>
                    <span className="font-semibold text-orange-800">{parseFloat(berechnung.gesamtVerbrennerProJahr).toLocaleString('de-DE')} €</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-600">Pro Monat:</span>
                    <span className="font-semibold text-orange-800">{parseFloat(berechnung.gesamtVerbrennerProMonat).toLocaleString('de-DE')} €</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Ersparnis Highlight */}
            <div className={`rounded-xl p-8 ${berechnung.ersparnisPositiv ? 'bg-green-100' : 'bg-red-100'}`}>
              <div className="flex gap-3 mb-8">
                <PiggyBank className={`w-9 h-9 ${berechnung.ersparnisPositiv ? 'text-green-600' : 'text-red-600'}`} />
                <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4 md:mb-6">
                  {berechnung.ersparnisPositiv ? 'Ersparnis mit Elektroauto' : 'Mehrkosten mit Elektroauto'}
                </h2>
              </div>
              
              <div className="space-y-6">
                {/* Gesamt */}
                <div className="flex justify-between items-center bg-white rounded-lg p-6">
                  <div>
                    <p className="text-lg font-semibold text-gray-700">Gesamt</p>
                    <p className="text-base text-gray-500">über {nutzungsdauer} Jahre</p>
                  </div>
                  <p className={`text-2xl md:text-4xl font-bold ${berechnung.ersparnisPositiv ? 'text-green-700' : 'text-red-700'}`}>
                    {berechnung.ersparnisPositiv ? '+' : ''}{parseFloat(berechnung.ersparnis).toLocaleString('de-DE')} €
                  </p>
                </div>
                
                {/* Jährlich */}
                <div className="flex justify-between items-center bg-white rounded-lg p-6">
                  <p className="text-lg font-semibold text-gray-700">Jährlich</p>
                  <p className={`text-2xl md:text-4xl font-bold ${berechnung.ersparnisPositiv ? 'text-green-700' : 'text-red-700'}`}>
                    {berechnung.ersparnisPositiv ? '+' : ''}{parseFloat(berechnung.ersparnisProJahr).toLocaleString('de-DE')} €
                  </p>
                </div>
                
                {/* Monatlich */}
                <div className="flex justify-between items-center bg-white rounded-lg p-6">
                  <p className="text-lg font-semibold text-gray-700">Monatlich</p>
                  <p className={`text-2xl md:text-4xl font-bold ${berechnung.ersparnisPositiv ? 'text-green-700' : 'text-red-700'}`}>
                    {berechnung.ersparnisPositiv ? '+' : ''}{parseFloat(berechnung.ersparnisProMonat).toLocaleString('de-DE')} €
                  </p>
                </div>
              </div>
            </div>

            {/* CO2-Bilanz */}
            <div className="bg-yellow-50 rounded-xl p-8">
              <div className="flex gap-3 mb-6">
                <Leaf className="w-7 h-7 text-yellow-600" />
                <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4 md:mb-6">CO₂-Bilanz über {nutzungsdauer} Jahre</h2>
              </div>
              
              <div className="bg-gradient-to-br from-yellow-100 to-amber-100 rounded-lg p-6 border-2 border-yellow-400">
                <div className="flex flex-wrap items-center justify-between gap-4 mb-4">
                  <div>
                    <p className="text-xl font-semibold text-gray-700 mb-1">CO₂-Ersparnis</p>
                    <p className={`text-2xl md:text-5xl font-bold text-yellow-700`}>
                      {berechnung.co2Ersparnis} t
                    </p>
                  </div>
                  <div className="text-right">
                    <p className="text-lg text-gray-700 font-medium mb-1">Entspricht</p>
                    <p className="text-2xl font-bold text-yellow-800">
                      {Math.round(parseFloat(berechnung.co2Ersparnis) / 0.8)} Hin- und Rückflüge
                    </p>
                    <p className="text-base text-gray-600">nach Mallorca (pro Person)</p>
                  </div>
                </div>
                
                <p className="text-sm text-gray-500 mt-4 text-center">
                  *Berechnung basiert auf deutschem Strommix (400g CO₂/kWh) und 2,37kg CO₂/Liter Benzin
                </p>
              </div>
            </div>
          </div>

          <div className="text-center text-base text-gray-500 mt-6">
            <p>Alle Angaben sind Richtwerte und können je nach individuellem Nutzungsverhalten variieren.</p>
          </div>
          )}

        </div>

        {/* Footer Section */}
        <div className="bg-white rounded-2xl shadow-2xl p-6 md:p-8 mt-6">
        <footer className="border-t-2 border-gray-200 pt-8">
          <div className="max-w-6xl mx-auto">
            {/* Quellen */}
            <div className="mb-8">
              <h3 className="text-lg md:text-xl font-bold text-gray-800 mb-4">Quellen</h3>
              <div className="text-sm text-gray-600 space-y-2">
                <p>
                  • Fraunhofer ISI (2025): Batterien für Elektroautos: Faktencheck und Handlungsbedarf – Ein Update. 
                  <a 
                    href="https://www.isi.fraunhofer.de/content/dam/isi/dokumente/policy-briefs/2025-05_policy_brief_batterien_elektroautos_update_faktencheck_handlungsbedarf.pdf" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:text-blue-800 ml-1"
                  >
                    Link zur Studie
                  </a>
                </p>
                <p>
                  • ADAC Autokatalog: Elektrofahrzeuge - Technische Daten und Kostenvergleich.
                  <a 
                    href="https://www.adac.de/rund-ums-fahrzeug/autokatalog/marken-modelle/autosuche/?fuelType=Strom" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:text-blue-800 ml-1"
                  >
                    Link zum Katalog
                  </a>
                </p>
                <p>
                  • Diverse wissenschaftliche Studien zu Total Cost of Ownership (TCO) und Umweltbilanz von Elektrofahrzeugen aus internationalen Fachzeitschriften.
                </p>
              </div>
            </div>

            {/* Rechtliche Links */}
            <div className="flex flex-wrap justify-center gap-6 py-6 border-t border-gray-300">
              <a 
                href="/impressum"
                className="text-base text-gray-600 hover:text-gray-900 hover:underline transition-all duration-200"
              >
                Impressum
              </a>
              <span className="text-gray-400">|</span>
              <a 
                href="/datenschutz"
                className="text-base text-gray-600 hover:text-gray-900 hover:underline transition-all duration-200"
              >
                Datenschutz
              </a>
            </div>

            {/* Copyright */}
            <div className="text-center py-4 text-sm text-gray-500">
              <p>© 2025 e-Autowelt. Alle Angaben ohne Gewähr.</p>
            </div>
          </div>
        </footer>
        </div>
        {/* End of Footer Section */}
      </div>
    </div>
  );
}
