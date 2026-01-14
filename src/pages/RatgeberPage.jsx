import React from 'react';
import SEO from '../components/SEO';
import { BookOpen, ShoppingCart, Lightbulb, Car, History, ScrollText, Shield, MapPin, Wrench, Snowflake, PlugZap, Wallet, Cable, KeyRound, AlertTriangle, BarChart2, DollarSign, Battery, Zap, ArrowRight, Clock, Calendar, TrendingDown } from 'lucide-react';
import Header from '../components/Header';

export default function RatgeberPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-green-50">
<SEO
  title="Elektroauto Ratgeber 2025 - Kaufberatung, Kosten & Tipps | e-Autowelt"
  description="Umfassender Elektroauto Ratgeber: Kaufberatung, Kosten, THG-Quote, Mythen aufgeklärt. Wissenschaftlich fundiert & praxisnah. Ihr Weg zum E-Auto!"
  canonicalPath="/ratgeber"
  keywords="elektroauto ratgeber, e-auto kaufberatung, elektroauto tipps, e-auto guide, elektromobilität"
  ogImage="/images/og-ratgeber.jpg"
  ogType="website"
/>
      {/* Header */}
      <Header activeTab="ratgeber" />
      <div className="h-20 md:h-24"></div>

      {/* Hero Section */}
      <div className="max-w-7xl mx-auto px-4 md:px-8 mt-8 mb-12">
        <div className="relative h-[500px] sm:h-[550px] md:h-[650px] rounded-3xl overflow-hidden shadow-2xl">
          {/* Hero Image */}
          <img 
            src="/images/ratgeber/ratgeber-hero.webp"
            alt="Elektroauto Ratgeber 2025 - Expertenwissen und Kaufberatung"
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
                  <BookOpen className="w-5 h-5 text-white" />
                  <span className="text-sm md:text-base text-white font-semibold">Expertenwissen</span>
                </div>
                
                {/* Headline */}
                <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight drop-shadow-2xl">
                  Elektroauto Ratgeber
                </h1>
                
                {/* Subheadline */}
                <p className="text-xl md:text-2xl text-white mb-8 leading-relaxed drop-shadow-lg">
                  Alles was Sie über Elektroautos wissen müssen: Von der Kaufberatung über Laden und Kosten bis zu Förderungen und Praxistipps.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content Container */}
      <div className="max-w-6xl mx-auto px-4 md:px-8 pb-20">
        
        {/* Intro Text Section (SEO!) */}
        <div className="mb-16">
          <div className="bg-white rounded-2xl p-8 md:p-10 shadow-lg">
            <div className="flex items-start gap-4 mb-6">
              <div>
                <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4">
                  Ihr kompletter E-Auto Guide
                </h2>
                <p className="text-base md:text-lg text-gray-700 leading-relaxed mb-4">
                  Sie interessieren sich für ein Elektroauto oder sind bereits E-Auto-Fahrer? In unserem 
                  <strong> Elektroauto Ratgeber</strong> finden Sie fundiertes Wissen zu allen wichtigen Themen 
                  rund um Elektromobilität. Von der Kaufentscheidung über praktische Alltagstipps bis hin zu 
                  Sparmöglichkeiten – wir begleiten Sie auf Ihrem Weg zur nachhaltigen Mobilität.
                </p>
                <div className="flex flex-wrap gap-4 text-sm md:text-base text-gray-600">
                  <span className="flex items-center gap-2">
                    ✓ Wissenschaftlich fundiert
                  </span>
                  <span className="flex items-center gap-2">
                    ✓ Praxisnah
                  </span>
                  <span className="flex items-center gap-2">
                    ✓ Regelmäßig aktualisiert
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>


        {/* Kaufberatung Section */}
        <section id="kaufberatung" className="mb-16">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-8 flex items-center gap-3">
            Kaufberatung & Modelle
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            
            {/* Artikel Card 1 - Kaufberatung */}
            <a href="/ratgeber/kaufberatung" className="group">
              <div className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 h-full">
                {/* Artikel Bild */}
                <div className="relative h-48 bg-gradient-to-br from-blue-500 to-green-500 overflow-hidden">
                  <img 
                    src="/images/ratgeber/elektroauto-kaufberatung-hero.jpg"
                    alt="Elektroauto Kaufberatung 2025"
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                    loading="lazy"
                    decoding="async"
                  />
                </div>
                
                {/* Content */}
                <div className="p-6">
                  <div className="flex items-center gap-2 mb-3">
                    <ShoppingCart className="w-5 h-5 text-blue-600" />
                    <span className="text-sm font-semibold text-blue-600 uppercase">Kaufberatung</span>
                  </div>
                  
                  <h3 className="text-xl font-bold text-gray-800 mb-3 group-hover:text-blue-600 transition-colors">
                    Elektroauto Kaufberatung 2025
                  </h3>
                  
                  <p className="text-sm text-gray-600 mb-4 line-clamp-3">
                    Welches E-Auto passt zu Ihnen? Reichweite, Ladezeiten, Modelle im Vergleich – 
                    der komplette Guide für Ihre Entscheidung.
                  </p>
                  
                  {/* Meta Info */}
                  <div className="flex items-center justify-between text-xs text-gray-500 pt-4 border-t border-gray-100">
                    <div className="flex items-center gap-1">

                    </div>
                    <span className="text-blue-600 font-semibold group-hover:underline flex items-center gap-1">
                      Weiterlesen <ArrowRight className="w-3 h-3" />
                    </span>
                  </div>
                </div>
              </div>
            </a>
            {/* Artikel Card - Pendlerauto */}
            <a href="/ratgeber/e-auto-pendler" className="group">
              <div className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 h-full">
                {/* Artikel Bild */}
                <div className="relative h-48 bg-gradient-to-br from-blue-500 to-green-500 overflow-hidden">
                  <img 
                    src="/images/ratgeber/e-auto-pendler-hero.webp"
                    alt="E-Auto für Pendler 2025: Beste Modelle bis 50km Arbeitsweg"
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                    loading="lazy"
                    decoding="async"
                  />
                </div>
                
                {/* Content */}
                <div className="p-6">
                  <div className="flex items-center gap-2 mb-3">
                    <Car className="w-5 h-5 text-blue-600" />
                    <span className="text-sm font-semibold text-blue-600 uppercase">Langstrecke</span>
                  </div>
                  
                  <h3 className="text-xl font-bold text-gray-800 mb-3 group-hover:text-blue-600 transition-colors">
                    E-Auto für Pendler: Beste Modelle bis 50km Arbeitsweg
                  </h3>
                  
                  <p className="text-sm text-gray-600 mb-4 line-clamp-3">
                    Die besten Elektroautos für Pendler mit bis zu 50km Arbeitsweg. Vergleich von Dacia Spring, VW ID.3, Opel Corsa-e & mehr. Stromkosten, Reichweite & Spartipps
                  </p>
                  
                  {/* Meta Info */}
                  <div className="flex items-center justify-between text-xs text-gray-500 pt-4 border-t border-gray-100">
                    <div className="flex items-center gap-1">

                    </div>
                    <span className="text-blue-600 font-semibold group-hover:underline flex items-center gap-1">
                      Weiterlesen <ArrowRight className="w-3 h-3" />
                    </span>
                  </div>
                </div>
              </div>
            </a>
            {/* Artikel Card - Wallbox für Mieter */}
            <a href="/ratgeber/laden-ohne-wallbox-mieter" className="group">
              <div className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 h-full">
                {/* Artikel Bild */}
                <div className="relative h-48 bg-gradient-to-br from-blue-500 to-green-500 overflow-hidden">
                  <img 
                    src="/images/ratgeber/laden-ohne-wallbox-hero.webp"
                    alt="Laden ohne Wallbox: Alternativen für Mieter"
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                    loading="lazy"
                    decoding="async"
                  />
                </div>
                
                {/* Content */}
                <div className="p-6">
                  <div className="flex items-center gap-2 mb-3">
                    <MapPin className="w-5 h-5 text-blue-600" />
                    <span className="text-sm font-semibold text-blue-600 uppercase">Wallbox</span>
                  </div>
                  
                  <h3 className="text-xl font-bold text-gray-800 mb-3 group-hover:text-blue-600 transition-colors">
                    Laden ohne Wallbox: Alternativen für Mieter
                  </h3>
                  
                  <p className="text-sm text-gray-600 mb-4 line-clamp-3">
                    Laden ohne Wallbox: Alternativen für Mieter. Tipps und Lösungen für das Laden von Elektroautos ohne eigene Wallbox. Gemeinschaftslösungen, öffentliche Ladepunkte & mehr.
                  </p>
                  
                  {/* Meta Info */}
                  <div className="flex items-center justify-between text-xs text-gray-500 pt-4 border-t border-gray-100">
                    <div className="flex items-center gap-1">

                    </div>
                    <span className="text-blue-600 font-semibold group-hover:underline flex items-center gap-1">
                      Weiterlesen <ArrowRight className="w-3 h-3" />
                    </span>
                  </div>
                </div>
              </div>
            </a>
{/* Artikel Card - Gebrauchtwagen */}
            <a href="/ratgeber/gebrauchtwagen" className="group">
              <div className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 h-full">
                {/* Artikel Bild */}
                <div className="relative h-48 bg-gradient-to-br from-red-500 to-orange-500 overflow-hidden">
                  <img 
                    src="/images/ratgeber/elektroauto-gebraucht-kaufen-hero.webp"
                    alt="Elektroauto Wertverlust vs Verbrenner"
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                    loading="lazy"
                    decoding="async"
                  />
                </div>
                
                {/* Content */}
                <div className="p-6">
                  <div className="flex items-center gap-2 mb-3">
                    <KeyRound className="w-5 h-5 text-blue-600" />
                    <span className="text-sm font-semibold text-blue-600 uppercase">Gebrauchtwagen</span>
                  </div>
                  
                  <h3 className="text-xl font-bold text-gray-800 mb-3 group-hover:text-blue-600 transition-colors">
                    Gebrauchtwagen
                  </h3>
                  
                  <p className="text-sm text-gray-600 mb-4 line-clamp-3">
Der Markt für gebrauchte Elektroautos boomt: 2024 wurden in Deutschland über 180.000 gebrauchte E-Autos verkauft – ein Plus von 58% gegenüber dem Vorjahr.                   </p>
                  
                  {/* Meta Info */}
                  <div className="flex items-center justify-between text-xs text-gray-500 pt-4 border-t border-gray-100">
                    <div className="flex items-center gap-1">
            
                    </div>
                    <span className="text-blue-600 font-semibold group-hover:underline flex items-center gap-1">
                      Weiterlesen <ArrowRight className="w-3 h-3" />
                    </span>
                  </div>
                </div>
              </div>
            </a>
            {/* Artikel Card - Leasing */}
            <a href="/ratgeber/elektroauto-leasing-oder-kauf" className="group">
              <div className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 h-full">
                {/* Artikel Bild */}
                <div className="relative h-48 bg-gradient-to-br from-red-500 to-orange-500 overflow-hidden">
                  <img 
                    src="/images/ratgeber/elektroauto-leasing-kauf-hero.webp"
                    alt="Elektroauto Wertverlust vs Verbrenner"
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                    loading="lazy"
                    decoding="async"
                  />
                </div>
                
                {/* Content */}
                <div className="p-6">
                  <div className="flex items-center gap-2 mb-3">
                    <ScrollText className="w-5 h-5 text-blue-600" />
                    <span className="text-sm font-semibold text-blue-600 uppercase">Leasing</span>
                  </div>
                  
                  <h3 className="text-xl font-bold text-gray-800 mb-3 group-hover:text-blue-600 transition-colors">
                    Leasing oder Kauf
                  </h3>
                  
                  <p className="text-sm text-gray-600 mb-4 line-clamp-3">
Ein neues Elektroauto anschaffen – aber wie finanzieren? Die Frage "Leasing oder Kauf" ist bei E-Autos komplexer als bei Verbrennern: Rasante Technologie-Entwicklung, hoher Wertverlust und attraktive Steuervorteile für Dienstwagen machen die Entscheidung zur strategischen Frage.

                   </p>
                  
                  {/* Meta Info */}
                  <div className="flex items-center justify-between text-xs text-gray-500 pt-4 border-t border-gray-100">
                    <div className="flex items-center gap-1">
            
                    </div>
                    <span className="text-blue-600 font-semibold group-hover:underline flex items-center gap-1">
                      Weiterlesen <ArrowRight className="w-3 h-3" />
                    </span>
                  </div>
                </div>
              </div>
            </a>
            

 {/* Artikel Card - Probefahrt */}
            <a href="/ratgeber/elektroauto-probefahrt-checkliste" className="group">
              <div className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 h-full">
                {/* Artikel Bild */}
                <div className="relative h-48 bg-gradient-to-br from-blue-500 to-purple-500 overflow-hidden">
                  <img 
                    src="/images/ratgeber/probefahrt-hero.webp"
                    alt="Elektroauto Probefahrt Checkliste 2026: Worauf achten? | e-Autowelt"
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                    loading="lazy"
                    decoding="async"
                  />
                </div>
                
                {/* Content */}
                <div className="p-6">
                  <div className="flex items-center gap-2 mb-3">
                    <Car className="w-5 h-5 text-blue-600" />
                    <span className="text-sm font-semibold text-blue-600 uppercase">Probefahrt</span>
                  </div>
                  
                  <h3 className="text-xl font-bold text-gray-800 mb-3 group-hover:text-blue-600 transition-colors">
                    Elektroauto Probefahrt Checkliste 2026: Worauf achten?
                  </h3>
                  
                  <p className="text-sm text-gray-600 mb-4 line-clamp-3">
                    Die Probefahrt eines Elektroautos ist ein entscheidender Schritt vor dem Kauf. In dieser Checkliste erfahren Sie, was Sie bei der Probefahrt beachten sollten, um das richtige E-Auto für Ihre Bedürfnisse zu finden.</p>
                  
                  {/* Meta Info */}
                  <div className="flex items-center justify-between text-xs text-gray-500 pt-4 border-t border-gray-100">
                    <div className="flex items-center gap-1">
          
                    </div>
                    <span className="text-blue-600 font-semibold group-hover:underline flex items-center gap-1">
                      Weiterlesen <ArrowRight className="w-3 h-3" />
                    </span>
                  </div>
                </div>
              </div>
            </a>
        
        {/* Artikel Card - Wallbox Vergleich */}
            <a href="/ratgeber/wallbox-typen-vergleich" className="group">
              <div className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 h-full">
                {/* Artikel Bild */}
                <div className="relative h-48 bg-gradient-to-br from-blue-500 to-purple-500 overflow-hidden">
                  <img 
                    src="/images/ratgeber/wallbox-typen-hero.webp"
                    alt="Verschiedene Wallbox-Typen im Vergleich: Welche Wallbox passt zu mir?"
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                    loading="lazy"
                    decoding="async"
                  />
                </div>
                
                {/* Content */}
                <div className="p-6">
                  <div className="flex items-center gap-2 mb-3">
                    <Zap className="w-5 h-5 text-blue-600" />
                    <span className="text-sm font-semibold text-blue-600 uppercase">Wallbox</span>
                  </div>
                  
                  <h3 className="text-xl font-bold text-gray-800 mb-3 group-hover:text-blue-600 transition-colors">
                    Verschiedene Wallbox-Typen im Vergleich: Welche Wallbox passt zu mir?
                  </h3>
                  
                  <p className="text-sm text-gray-600 mb-4 line-clamp-3">
                    Sie haben sich für ein Elektroauto entschieden und jetzt steht die Frage an: Welche Wallbox ist die richtige? Der Markt bietet eine verwirrende Vielfalt an Ladestationen mit unterschiedlichen Leistungen, Funktionen und Preisen. Von der einfachen 11-kW-Box bis zur intelligenten 22-kW-Wallbox mit Solaranbindung – die Auswahl kann überwältigend sein.</p>
                  
                  {/* Meta Info */}
                  <div className="flex items-center justify-between text-xs text-gray-500 pt-4 border-t border-gray-100">
                    <div className="flex items-center gap-1">
          
                    </div>
                    <span className="text-blue-600 font-semibold group-hover:underline flex items-center gap-1">
                      Weiterlesen <ArrowRight className="w-3 h-3" />
                    </span>
                  </div>
                </div>
              </div>
            </a>
            {/* Artikel Card 3 - Energieeffizient  */}
            <a href="/ratgeber/effiziente-elektroautos" className="group">
              <div className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 h-full">
                {/* Artikel Bild */}
                <div className="relative h-48 bg-gradient-to-br from-yellow-500 to-orange-500 overflow-hidden">
                  <img 
                    src="/images/ratgeber/effiziente-elektroautos-hero.webp"
                    alt="Welche E-Autos sind am effizientesten? Ranking der sparsamsten Elektroautos 2025 mit maximaler Reichweite: Mercedes EQS, Tesla Model 3, Hyundai Ioniq 6 & mehr."
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                    loading="lazy"
                    decoding="async"
                  />
                </div>
                
                {/* Content */}
                <div className="p-6">
                  <div className="flex items-center gap-2 mb-3">
                    <PlugZap className="w-5 h-5 text-blue-600" />
                    <span className="text-sm font-semibold text-blue-600 uppercase">Reichweite</span>
                  </div>
                  
                  <h3 className="text-xl font-bold text-gray-800 mb-3 group-hover:text-blue-600 transition-colors">
                  Effizienteste Elektroautos 2025                  </h3>
                  
                  <p className="text-sm text-gray-600 mb-4 line-clamp-3">
                                    Reichweite ist das Kaufargument Nummer 1 bei Elektroautos. Doch nicht jedes E-Auto fährt gleich weit: Während manche Modelle nur 300 km schaffen, kommen andere mit einer Ladung über 700 km weit. Der entscheidende Faktor ist nicht nur die Batteriegröße, sondern vor allem die <strong>Effizienz</strong> – also wie sparsam das Fahrzeug mit der verfügbaren Energie umgeht. In diesem Artikel zeigen wir Ihnen die sparsamsten und reichweitenstärksten E-Autos 2025.

                  </p>
                  
                  {/* Meta Info */}
                  <div className="flex items-center justify-between text-xs text-gray-500 pt-4 border-t border-gray-100">
                    <div className="flex items-center gap-1">


                    </div>
                    <span className="text-blue-600 font-semibold group-hover:underline flex items-center gap-1">
                      Weiterlesen <ArrowRight className="w-3 h-3" />
                    </span>
                  </div>
                </div>
              </div>
            </a>
          </div>

        </section>

            

        {/* Kosten & Förderung Section */}
        <section id="kosten" className="mb-16">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-8 flex items-center gap-3">
            Kosten, Förderung & Sparen
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            
            {/* Artikel Card 1 - THG-Quote */}
            <a href="/ratgeber/thg-quote" className="group">
              <div className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 h-full">
                {/* Artikel Bild */}
                <div className="relative h-48 bg-gradient-to-br from-green-500 to-blue-500 overflow-hidden">
                  <img 
                    src="/images/ratgeber/thg-quote-geld-verdienen-hero.jpg"
                    alt="THG-Quote 2025 - Bis zu 400€ verdienen"
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                    loading="lazy"
                    decoding="async"
                  />
                </div>
                
                {/* Content */}
                <div className="p-6">
                  <div className="flex items-center gap-2 mb-3">
                    <DollarSign className="w-5 h-5 text-green-600" />
                    <span className="text-sm font-semibold text-green-600 uppercase">Thg-quote</span>
                  </div>
                  
                  <h3 className="text-xl font-bold text-gray-800 mb-3 group-hover:text-green-600 transition-colors">
                    THG-Quote 2025: Bis zu 400€ Prämie
                  </h3>
                  
                  <p className="text-sm text-gray-600 mb-4 line-clamp-3">
                    Mit der THG-Quote verdienen E-Auto-Besitzer jährlich Geld. Hier erfahren Sie alles über 
                    Anbieter, Auszahlungen und wie Sie das Maximum herausholen.
                  </p>
                  
                  {/* Meta Info */}
                  <div className="flex items-center justify-between text-xs text-gray-500 pt-4 border-t border-gray-100">
                    <div className="flex items-center gap-1">
            
                    </div>
                    <span className="text-green-600 font-semibold group-hover:underline flex items-center gap-1">
                      Weiterlesen <ArrowRight className="w-3 h-3" />
                    </span>
                  </div>
                </div>
              </div>
            </a>
 {/* Artikel Card - STROMKOSTEN 2025 */}
            <a href="/ratgeber/strompreise-2025" className="group">
              <div className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 h-full">
                {/* Artikel Bild */}
                <div className="relative h-48 bg-gradient-to-br from-blue-500 to-purple-500 overflow-hidden">
                  <img 
                    src="/images/ratgeber/strompreise-2025-hero.webp"
                    alt="Strompreise 2025 - Lohnt sich ein E-Auto noch? Kostenvergleich Elektroauto vs Verbrenner"
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                    loading="lazy"
                    decoding="async"
                  />
                </div>
                
                {/* Content */}
                <div className="p-6">
                  <div className="flex items-center gap-2 mb-3">
                    <Wallet className="w-5 h-5 text-green-600" />
                    <span className="text-sm font-semibold text-green-600 uppercase">Strompreise</span>
                  </div>
                  
                  <h3 className="text-xl font-bold text-gray-800 mb-3 group-hover:text-green-600 transition-colors">
                Strompreise 2025: Lohnt sich ein E-Auto noch?
                  </h3>
                  
                  <p className="text-sm text-gray-600 mb-4 line-clamp-3">
                Die Strompreise in Deutschland sind seit dem Höhepunkt der Energiekrise 2023 zwar deutlich gesunken, bleiben aber auf einem historisch hohen Niveau. Gleichzeitig steigen die Kosten für Benzin und Diesel durch die CO2-Bepreisung kontinuierlich an. Für E-Auto-Interessenten stellt sich daher die entscheidende Frage: <strong>Lohnt sich die Elektromobilität 2025 noch wirtschaftlich?</strong> Die Antwort hängt maßgeblich davon ab, wo und wie Sie laden.
                  </p>
                  
                  {/* Meta Info */}
                  <div className="flex items-center justify-between text-xs text-gray-500 pt-4 border-t border-gray-100">
                    <div className="flex items-center gap-1">
          
                    </div>
                    <span className="text-green-600 font-semibold group-hover:underline flex items-center gap-1">
                      Weiterlesen <ArrowRight className="w-3 h-3" />
                    </span>
                  </div>
                </div>
              </div>
            </a>
             {/* Artikel Card - Versicherung */}
            <a href="/ratgeber/elektroauto-versicherung" className="group">
              <div className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 h-full">
                {/* Artikel Bild */}
                <div className="relative h-48 bg-gradient-to-br from-blue-500 to-purple-500 overflow-hidden">
                  <img 
                    src="/images/ratgeber/elektroauto-versicherung-hero.webp"
                    alt="Strompreise 2025 - Lohnt sich ein E-Auto noch? Kostenvergleich Elektroauto vs Verbrenner"
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                    loading="lazy"
                    decoding="async"
                  />
                </div>
                
                {/* Content */}
                <div className="p-6">
                  <div className="flex items-center gap-2 mb-3">
                    <Shield className="w-5 h-5 text-green-600" />
                    <span className="text-sm font-semibold text-green-600 uppercase">Versicherung</span>
                  </div>
                  
                  <h3 className="text-xl font-bold text-gray-800 mb-3 group-hover:text-green-600 transition-colors">
Elektroauto Versicherung: Kosten & Vergleich                  </h3>
                  
                  <p className="text-sm text-gray-600 mb-4 line-clamp-3">
Sie fahren elektrisch oder planen den Umstieg auf ein E-Auto? Entscheidend ist die richtige 
                 Kfz-Versicherung für Ihr Elektroauto. Anders als bei 
                Verbrennern gibt es besondere Anforderungen: Der teure Akku, Ladekabel, Wallbox und 
                Überspannungsschäden erfordern speziellen Schutz. Die gute Nachricht: E-Autos sind 
                oft günstiger zu versichern als vergleichbare Benziner.                  </p>
                  
                  {/* Meta Info */}
                  <div className="flex items-center justify-between text-xs text-gray-500 pt-4 border-t border-gray-100">
                    <div className="flex items-center gap-1">
          
                    </div>
                    <span className="text-green-600 font-semibold group-hover:underline flex items-center gap-1">
                      Weiterlesen <ArrowRight className="w-3 h-3" />
                    </span>
                  </div>
                </div>
              </div>
            </a>
            {/* Artikel Card 2 - WALLBOX */}
            <a href="/ratgeber/wallbox-kosten-installation" className="group">
              <div className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 h-full">
                {/* Artikel Bild */}
                <div className="relative h-48 bg-gradient-to-br from-blue-500 to-purple-500 overflow-hidden">
                  <img 
                    src="/images/ratgeber/wallbox-kosten-hero.webp"
                    alt="Wie lange lädt ein E-Auto? Ladezeiten-Guide 2025"
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                    loading="lazy"
                    decoding="async"
                  />
                </div>
                
                {/* Content */}
                <div className="p-6">
                  <div className="flex items-center gap-2 mb-3">
                    <Cable className="w-5 h-5 text-green-600" />
                    <span className="text-sm font-semibold text-green-600 uppercase">Ladezeit</span>
                  </div>
                  
                  <h3 className="text-xl font-bold text-gray-800 mb-3 group-hover:text-green-600 transition-colors">
                Wallbox Kosten & Installation 2025: Was Sie wirklich zahlen
                  </h3>
                  
                  <p className="text-sm text-gray-600 mb-4 line-clamp-3">
                Eine eigene Wallbox ist für E-Auto-Besitzer die komfortabelste und günstigste Lösung zum Laden zuhause. Doch was kostet eine Wallbox wirklich? Die Gesamtkosten bewegen sich zwischen <strong>800 und 3.500 Euro</strong> – je nach Modell, Ausstattung und Installationsaufwand. In diesem umfassenden Guide erfahren Sie alles über Anschaffungskosten, Installation, Fördermöglichkeiten und wie sich die Investition rechnet.
                  </p>
                  
                  {/* Meta Info */}
                  <div className="flex items-center justify-between text-xs text-gray-500 pt-4 border-t border-gray-100">
                    <div className="flex items-center gap-1">
          
                    </div>
                    <span className="text-green-600 font-semibold group-hover:underline flex items-center gap-1">
                      Weiterlesen <ArrowRight className="w-3 h-3" />
                    </span>
                  </div>
                </div>
              </div>
            </a>

            {/* Artikel Card 3 - Wertverlust */}
            <a href="/ratgeber/wertverlust" className="group">
              <div className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 h-full">
                {/* Artikel Bild */}
                <div className="relative h-48 bg-gradient-to-br from-red-500 to-orange-500 overflow-hidden">
                  <img 
                    src="/images/ratgeber/elektroauto-wertverlust-vs-verbrenner.webp"
                    alt="Elektroauto Wertverlust vs Verbrenner"
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                    loading="lazy"
                    decoding="async"
                  />
                </div>
                
                {/* Content */}
                <div className="p-6">
                  <div className="flex items-center gap-2 mb-3">
                    <TrendingDown className="w-5 h-5 text-green-600" />
                    <span className="text-sm font-semibold text-green-600 uppercase">Wertverlust</span>
                  </div>
                  
                  <h3 className="text-xl font-bold text-gray-800 mb-3 group-hover:text-green-600 transition-colors">
                    Wertverlust bei Elektroautos
                  </h3>
                  
                  <p className="text-sm text-gray-600 mb-4 line-clamp-3">
                    Restwert-Vergleich 2025: E-Autos verlieren 38-50% in 3 Jahren, Verbrenner 29-32%. Alle Fakten, Ursachen & wertstabile Modelle.
                  </p>
                  
                  {/* Meta Info */}
                  <div className="flex items-center justify-between text-xs text-gray-500 pt-4 border-t border-gray-100">
                    <div className="flex items-center gap-1">
            
                    </div>
                    <span className="text-green-600 font-semibold group-hover:underline flex items-center gap-1">
                      Weiterlesen <ArrowRight className="w-3 h-3" />
                    </span>
                  </div>
                </div>
              </div>
            </a>

          </div>

        </section>

        {/* Mythen & Fakten Section */}
        <section id="technik" className="mb-16">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-8 flex items-center gap-3">
            Mythen & Fakten
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            
            {/* Artikel Card 1 - Mythen (BESTEHEND) */}
            <a href="/ratgeber/mythen" className="group">
              <div className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 h-full">
                {/* Artikel Bild */}
                <div className="relative h-48 bg-gradient-to-br from-yellow-500 to-orange-500 overflow-hidden">
                  <img 
                    src="/images/ratgeber/elektroauto-mythen-hero.jpg"
                    alt="Elektroauto Mythen aufgeklärt - Fakten statt Vorurteile"
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                    loading="lazy"
                    decoding="async"
                  />
                </div>
                
                {/* Content */}
                <div className="p-6">
                  <div className="flex items-center gap-2 mb-3">
                    <Lightbulb className="w-5 h-5 text-yellow-600" />
                    <span className="text-sm font-semibold text-yellow-600 uppercase">Mythen</span>
                  </div>
                  
                  <h3 className="text-xl font-bold text-gray-800 mb-3 group-hover:text-yellow-600 transition-colors">
                    Die 10 größten E-Auto Mythen
                  </h3>
                  
                  <p className="text-sm text-gray-600 mb-4 line-clamp-3">
                    Reichweitenangst, explodierende Batterien, Umweltsünde? Wir räumen mit den hartnäckigsten 
                    Vorurteilen auf und zeigen die wissenschaftlich belegten Fakten.
                  </p>
                  
                  {/* Meta Info */}
                  <div className="flex items-center justify-between text-xs text-gray-500 pt-4 border-t border-gray-100">
                    <div className="flex items-center gap-1">


                    </div>
                    <span className="text-yellow-600 font-semibold group-hover:underline flex items-center gap-1">
                      Weiterlesen <ArrowRight className="w-3 h-3" />
                    </span>
                  </div>
                </div>
              </div>
            </a>

            {/* Artikel Card 2 - LADEZEIT */}
            <a href="/ratgeber/ladezeit" className="group">
              <div className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 h-full">
                {/* Artikel Bild */}
                <div className="relative h-48 bg-gradient-to-br from-blue-500 to-purple-500 overflow-hidden">
                  <img 
                    src="/images/ratgeber/elektroauto-laden-ladezeit-hero.jpg"
                    alt="Wie lange lädt ein E-Auto? Ladezeiten-Guide 2025"
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                    loading="lazy"
                    decoding="async"
                  />
                </div>
                
                {/* Content */}
                <div className="p-6">
                  <div className="flex items-center gap-2 mb-3">
                    <Zap className="w-5 h-5 text-yellow-600" />
                    <span className="text-sm font-semibold text-yellow-600 uppercase">Ladezeit</span>
                  </div>
                  
                  <h3 className="text-xl font-bold text-gray-800 mb-3 group-hover:text-yellow-600 transition-colors">
                    Wie lange lädt ein E-Auto?
                  </h3>
                  
                  <p className="text-sm text-gray-600 mb-4 line-clamp-3">
                    Von 20 Minuten bis 24 Stunden – alle Ladezeiten im Vergleich. Steckdose, Wallbox, Schnellladen + Formel zur Berechnung.
                  </p>
                  
                  {/* Meta Info */}
                  <div className="flex items-center justify-between text-xs text-gray-500 pt-4 border-t border-gray-100">
                    <div className="flex items-center gap-1">
          
                    </div>
                    <span className="text-yellow-600 font-semibold group-hover:underline flex items-center gap-1">
                      Weiterlesen <ArrowRight className="w-3 h-3" />
                    </span>
                  </div>
                </div>
              </div>
            </a>
                        {/* Artikel Card - WARTUNG */}
            <a href="/ratgeber/elektroauto-wartung" className="group">
              <div className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 h-full">
                {/* Artikel Bild */}
                <div className="relative h-48 bg-gradient-to-br from-blue-500 to-purple-500 overflow-hidden">
                  <img 
                    src="/images/ratgeber/elektroauto-wartung-hero.webp"
                    alt="Wartung von Elektroauto - Worauf Sie achten sollten"
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                    loading="lazy"
                    decoding="async"
                  />
                </div>
                
                {/* Content */}
                <div className="p-6">
                  <div className="flex items-center gap-2 mb-3">
                    <Wrench className="w-5 h-5 text-yellow-600" />
                    <span className="text-sm font-semibold text-yellow-600 uppercase">Wartung</span>
                  </div>
                  
                  <h3 className="text-xl font-bold text-gray-800 mb-3 group-hover:text-yellow-600 transition-colors">
                Elektroauto Wartung: Was ist anders als beim Verbrenner?
                  </h3>
                  
                  <p className="text-sm text-gray-600 mb-4 line-clamp-3">
Kein Ölwechsel, keine Zündkerzen, keine Kupplung – Elektroautos gelten als wartungsarm. 
                Doch stimmt das wirklich? Und was müssen Sie bei der <strong>E-Auto Wartung</strong> trotzdem 
                beachten? Wir erklären, welche Inspektionen anfallen, was sie kosten und wo Sie bei der 
                <strong> Elektroauto Wartung</strong> tatsächlich sparen.                  </p>
                  
                  {/* Meta Info */}
                  <div className="flex items-center justify-between text-xs text-gray-500 pt-4 border-t border-gray-100">
                    <div className="flex items-center gap-1">
          
                    </div>
                    <span className="text-yellow-600 font-semibold group-hover:underline flex items-center gap-1">
                      Weiterlesen <ArrowRight className="w-3 h-3" />
                    </span>
                  </div>
                </div>
              </div>
            </a>
{/* Artikel Card  - WINTER */}
    <a href="/ratgeber/elektroauto-reichweite-winter-test" className="group">
              <div className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 h-full">
                {/* Artikel Bild */}
                <div className="relative h-48 bg-gradient-to-br from-blue-500 to-purple-500 overflow-hidden">
                  <img 
                    src="/images/ratgeber/winter-reichweite-hero.webp"
                    alt="Wie lange lädt ein E-Auto? Ladezeiten-Guide 2025"
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                    loading="lazy"
                    decoding="async"
                  />
                </div>
                
                {/* Content */}
                <div className="p-6">
                  <div className="flex items-center gap-2 mb-3">
                    <Snowflake className="w-5 h-5 text-yellow-600" />
                    <span className="text-sm font-semibold text-yellow-600 uppercase">Winter</span>
                  </div>
                  
                  <h3 className="text-xl font-bold text-gray-800 mb-3 group-hover:text-yellow-600 transition-colors">
            Elektroauto Reichweite im Winter
                  </h3>
                  
                  <p className="text-sm text-gray-600 mb-4 line-clamp-3">
Wie viel Reichweite verlieren E-Autos wirklich im Winter? Aktuelle Tests zeigen Verluste von 20-30%. 
            Alle Faktoren, Testergebnisse und Tipps für maximale Winterreichweite.                  </p>
                  
                  {/* Meta Info */}
                  <div className="flex items-center justify-between text-xs text-gray-500 pt-4 border-t border-gray-100">
                    <div className="flex items-center gap-1">
          
                    </div>
                    <span className="text-yellow-600 font-semibold group-hover:underline flex items-center gap-1">
                      Weiterlesen <ArrowRight className="w-3 h-3" />
                    </span>
                  </div>
                </div>
              </div>
            </a>
            {/* Artikel Card 3 - Verkaufszahlen (NEU!) */}
            <a href="/ratgeber/verkaufszahlen" className="group">
              <div className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 h-full">
                {/* Artikel Bild */}
                <div className="relative h-48 bg-gradient-to-br from-blue-500 to-purple-500 overflow-hidden">
                  <img 
                    src="/images/ratgeber/elektroauto-verkaufszahlen-deutschland-2025.jpg"
                    alt="Elektroauto Verkaufszahlen Deutschland 2025"
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                    loading="lazy"
                    decoding="async"
                  />
                </div>
                
                {/* Content */}
                <div className="p-6">
                  <div className="flex items-center gap-2 mb-3">
                    <BarChart2 className="w-5 h-5 text-yellow-600" />
                    <span className="text-sm font-semibold text-yellow-600 uppercase">Statistik</span>
                  </div>
                  
                  <h3 className="text-xl font-bold text-gray-800 mb-3 group-hover:text-yellow-600 transition-colors">
                    Elektroauto Verkaufszahlen in Deutschland (2025)
                  </h3>
                  
                  <p className="text-sm text-gray-600 mb-4 line-clamp-3">
                    Der deutsche Elektroauto-Markt entwickelt sich rasant: Mit über 524.000 Neuzulassungen im Jahr 2024 und einem Marktanteil von 18,4% markiert die Elektromobilität einen entscheidenden Wendepunkt in der Automobilindustrie. Hier finden Sie alle aktuellen Verkaufszahlen, Marktanteile und Prognosen für 2025.
                  </p>
                  
                  {/* Meta Info */}
                  <div className="flex items-center justify-between text-xs text-gray-500 pt-4 border-t border-gray-100">
                    <div className="flex items-center gap-1">
          
                    </div>
                    <span className="text-yellow-600 font-semibold group-hover:underline flex items-center gap-1">
                      Weiterlesen <ArrowRight className="w-3 h-3" />
                    </span>
                  </div>
                </div>
              </div>
            </a>

 {/* Artikel Card - Geschichte EAutos */}
            <a href="/ratgeber/erstes-elektroauto-geschichte" className="group">
              <div className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 h-full">
                {/* Artikel Bild */}
                <div className="relative h-48 bg-gradient-to-br from-blue-500 to-purple-500 overflow-hidden">
                  <img 
                    src="/images/ratgeber/elektro-geschichte-hero.webp"
                    alt="Geschichte des Elektroautos: Wann wurde das erste E-Auto gebaut?"
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                    loading="lazy"
                    decoding="async"
                  />
                </div>
                
                {/* Content */}
                <div className="p-6">
                  <div className="flex items-center gap-2 mb-3">
                    <History className="w-5 h-5 text-yellow-600" />
                    <span className="text-sm font-semibold text-yellow-600 uppercase">Geschichte</span>
                  </div>
                  
                  <h3 className="text-xl font-bold text-gray-800 mb-3 group-hover:text-yellow-600 transition-colors">
                    Geschichte des Elektroautos: Wann wurde das erste E-Auto gebaut?
                  </h3>
                  
                  <p className="text-sm text-gray-600 mb-4 line-clamp-3">
                    Die Geschichte des Elektroautos reicht weit zurück: Das erste elektrische Auto wurde 1834 von Thomas Davenport gebaut. In diesem Artikel erfahren Sie mehr über die Entwicklung der Elektromobilität und die ersten E-Autos.
                  </p>
                  
                  {/* Meta Info */}
                  <div className="flex items-center justify-between text-xs text-gray-500 pt-4 border-t border-gray-100">
                    <div className="flex items-center gap-1">
          
                    </div>
                    <span className="text-yellow-600 font-semibold group-hover:underline flex items-center gap-1">
                      Weiterlesen <ArrowRight className="w-3 h-3" />
                    </span>
                  </div>
                </div>
              </div>
            </a>
        

         {/* Artikel Card 4 - Schieben Panne (NEU!) */}
            <a href="/ratgeber/e-auto-schieben" className="group">
              <div className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 h-full">
                {/* Artikel Bild */}
                <div className="relative h-48 bg-gradient-to-br from-blue-500 to-purple-500 overflow-hidden">
                  <img 
                    src="/images/ratgeber/e-auto-schieben-hero.webp"
                    alt="Elektroauto Verkaufszahlen Deutschland 2025"
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                    loading="lazy"
                    decoding="async"
                  />
                </div>
                
                {/* Content */}
                <div className="p-6">
                  <div className="flex items-center gap-2 mb-3">
                    <AlertTriangle className="w-5 h-5 text-yellow-600" />
                    <span className="text-sm font-semibold text-yellow-600 uppercase">Panne</span>
                  </div>
                  
                  <h3 className="text-xl font-bold text-gray-800 mb-3 group-hover:text-yellow-600 transition-colors">
                Kann man ein E-Auto schieben wenn es leer ist? 
                  </h3>
                  
                  <p className="text-sm text-gray-600 mb-4 line-clamp-3">
                Die Batterie ist leer, das E-Auto steht mitten auf der Straße – kann man es einfach zur Seite schieben wie einen Verbrenner mit leerem Tank? Diese Frage stellen sich viele E-Auto-Fahrer, besonders wenn sie zum ersten Mal mit einer leeren Batterie konfrontiert werden. Die kurze Antwort: <strong>Ja, aber mit Einschränkungen und Vorsicht.</strong> Die längere Antwort ist komplexer und hängt vom Fahrzeugmodell, der Situation und technischen Details ab.
                  </p>
                  
                  {/* Meta Info */}
                  <div className="flex items-center justify-between text-xs text-gray-500 pt-4 border-t border-gray-100">
                    <div className="flex items-center gap-1">
          
                    </div>
                    <span className="text-yellow-600 font-semibold group-hover:underline flex items-center gap-1">
                      Weiterlesen <ArrowRight className="w-3 h-3" />
                    </span>
                  </div>
                </div>
              </div>
            </a>

          </div>
        </section>

        {/* CTA Section */}
        <div className="bg-gradient-to-r from-blue-600 to-green-600 rounded-2xl p-8 md:p-12 text-center text-white shadow-xl">
          <Zap className="w-16 h-16 mx-auto mb-6 opacity-90" />
          <h3 className="text-3xl font-bold mb-4">
            Noch unsicher? Berechnen Sie Ihre Ersparnis!
          </h3>
          <p className="text-lg mb-6 max-w-2xl mx-auto">
            Unser kostenloser Rechner zeigt Ihnen schwarz auf weiß, wie viel Sie mit einem 
            Elektroauto im Vergleich zu einem Verbrenner sparen können.
          </p>
          <a 
            href="/rechner/kostenrechner"
            className="inline-flex items-center gap-3 bg-white text-blue-600 font-bold px-8 py-4 rounded-full hover:shadow-2xl hover:scale-105 transition-all duration-200"
          >
            Jetzt Kosten berechnen
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