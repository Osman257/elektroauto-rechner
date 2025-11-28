import React from 'react';
import SEO from '../components/SEO';
import { BookOpen, ShoppingCart, Lightbulb, KeyRound, AlertTriangle, BarChart2, DollarSign, Battery, Zap, ArrowRight, Clock, Calendar, TrendingDown } from 'lucide-react';
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
        <div className="relative h-[400px] md:h-[500px] rounded-3xl overflow-hidden shadow-2xl">
          {/* Hero Image */}
          <img 
            src="/images/ratgeber/ratgeber-hero.webp"
            alt="Elektroauto Ratgeber 2025 - Expertenwissen und Kaufberatung"
            className="w-full h-full object-cover brightness-35"
            loading="lazy"
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

            {/* Artikel Card 2 - Wertverlust */}
            <a href="/ratgeber/wertverlust" className="group">
              <div className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 h-full">
                {/* Artikel Bild */}
                <div className="relative h-48 bg-gradient-to-br from-red-500 to-orange-500 overflow-hidden">
                  <img 
                    src="/images/ratgeber/elektroauto-wertverlust-vs-verbrenner.webp"
                    alt="Elektroauto Wertverlust vs Verbrenner"
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                    loading="lazy"
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