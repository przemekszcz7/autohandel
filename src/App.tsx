import React, { useState, useEffect } from 'react';
import { 
  Phone, 
  Mail, 
  MapPin, 
  Facebook, 
  Check, 
  Menu, 
  X, 
  Coins, 
  Truck, 
  FileText, 
  Scale,
  ArrowDown,
  Car,
  Bike,
  Tractor
} from 'lucide-react';

export default function App() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Monitor page scroll to change navigation background
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 70) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Set up intersection observer for scroll-to-reveal animations
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          }
        });
      },
      { threshold: 0.1 }
    );

    const elements = document.querySelectorAll('.reveal');
    elements.forEach((el) => observer.observe(el));

    return () => {
      elements.forEach((el) => observer.unobserve(el));
    };
  }, []);

  // Smooth scroll handler
  const handleSmoothScroll = (e: React.MouseEvent<HTMLAnchorElement>, targetId: string) => {
    e.preventDefault();
    const element = document.getElementById(targetId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setMobileMenuOpen(false);
  };

  return (
    <div className="min-h-screen bg-brand-black text-brand-white font-sans selection:bg-brand-red selection:text-white">
      
      {/* 1. NAVIGATION BAR */}
      <nav 
        className={`fixed top-0 left-0 w-full z-[1000] transition-all duration-350 ease-in-out h-[70px] ${
          scrolled 
            ? 'bg-brand-black/96 backdrop-blur-[14px] border-b border-brand-border-mid' 
            : 'bg-transparent'
        }`}
        id="home-nav"
      >
        <div className="max-w-[1400px] mx-auto h-full flex justify-between items-center px-6 md:px-[52px]">
          {/* Logo Section */}
          <a href="#" className="flex flex-col select-none group" onClick={(e) => handleSmoothScroll(e, 'home-nav')}>
            <span className="font-oswald font-bold text-lg md:text-[20px] text-brand-white tracking-[3px] leading-none uppercase group-hover:text-brand-red transition-colors">
              AUTOHANDEL
            </span>
            <span className="font-mono text-[9px] md:text-[10px] text-brand-red tracking-[3px] md:tracking-[4px] leading-none uppercase mt-1">
              SKUP · SPRZEDAŻ · ZAMIANA
            </span>
          </a>

          {/* Center Badge (Hidden on mobile) */}
          <div className="hidden lg:flex items-center font-mono text-[10px] text-brand-gray tracking-[2px] uppercase bg-brand-dark/40 px-4 py-1.5 border border-brand-border rounded-sm">
            <span className="text-brand-red mr-2 animate-pulse-slow">●</span>
            DZIAŁAMY NA TERENIE ZACHODNIOPOMORSKIEGO I POMORSKIEGO
          </div>

          {/* Right Navigation Controls */}
          <div className="hidden md:flex items-center gap-8">
            <a 
              href="#jak-dzialamy" 
              onClick={(e) => handleSmoothScroll(e, 'jak-dzialamy')}
              className="font-sans font-medium text-[13px] uppercase tracking-[2px] text-brand-gray hover:text-brand-white transition-colors duration-200"
            >
              Jak działamy
            </a>
            <a 
              href="#kontakt" 
              onClick={(e) => handleSmoothScroll(e, 'kontakt')}
              className="font-sans font-medium text-[13px] uppercase tracking-[2px] text-brand-gray hover:text-brand-white transition-colors duration-200"
            >
              Kontakt
            </a>
            <a 
              href="tel:791338452"
              className="font-oswald font-semibold text-[14px] tracking-[3px] uppercase bg-brand-red hover:bg-brand-red-dark text-white px-5 py-2.5 rounded-sm transition-all duration-200 hover:-translate-y-0.5 active:translate-y-0 shadow-sm hover:shadow-brand-red/20"
            >
              ZADZWOŃ
            </a>
          </div>

          {/* Hamburger for mobile */}
          <button 
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)} 
            className="flex md:hidden flex-col justify-between w-6 h-5 cursor-pointer z-[1001] relative group"
            aria-label="Menu"
            id="mobile-menu-btn"
          >
            {mobileMenuOpen ? (
              <X className="text-brand-red w-6 h-6 transition-all" />
            ) : (
              <div className="flex flex-col justify-between w-full h-full">
                <span className="w-full h-[2.5px] bg-brand-red block transition-all rounded-sm"></span>
                <span className="w-full h-[2.5px] bg-brand-red block transition-all rounded-sm"></span>
                <span className="w-full h-[2.5px] bg-brand-red block transition-all rounded-sm"></span>
              </div>
            )}
          </button>
        </div>
      </nav>

      {/* MOBILE FULL-SCREEN MENU */}
      <div 
        className={`fixed inset-0 w-full h-screen bg-brand-black/98 backdrop-blur-xl z-[999] flex flex-col justify-center items-center transition-all duration-300 ease-in-out ${
          mobileMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
        id="mobile-nav-panel"
      >
        <div className="flex flex-col items-center gap-8 text-center px-6">
          <div className="font-mono text-[9px] text-brand-red tracking-[3px] uppercase mb-4 animate-pulse-slow">
            ● REGION ZACHODNIOPOMORSKIE I POMORSKIE
          </div>
          <a 
            href="#skup" 
            onClick={(e) => handleSmoothScroll(e, 'skup')}
            className="font-oswald font-bold text-2xl uppercase tracking-[3px] text-brand-white hover:text-brand-red transition-colors"
          >
            Skup pojazdów
          </a>
          <a 
            href="#jak-dzialamy" 
            onClick={(e) => handleSmoothScroll(e, 'jak-dzialamy')}
            className="font-oswald font-bold text-2xl uppercase tracking-[3px] text-brand-white hover:text-brand-red transition-colors"
          >
            Jak działamy
          </a>
          <a 
            href="#kontakt" 
            onClick={(e) => handleSmoothScroll(e, 'kontakt')}
            className="font-oswald font-bold text-2xl uppercase tracking-[3px] text-brand-white hover:text-brand-red transition-colors"
          >
            Kontakt i Mapa
          </a>
          
          <div className="w-24 h-[1px] bg-brand-border-mid my-4"></div>

          <a 
            href="tel:791338452"
            className="font-oswald font-semibold text-lg tracking-[3px] uppercase bg-brand-red text-white px-8 py-4 rounded-sm w-full max-w-xs text-center shadow-lg hover:bg-brand-red-dark transition-colors"
          >
            TELEFON 1: 791 338 452
          </a>
          <a 
            href="tel:606123291"
            className="font-oswald font-semibold text-lg tracking-[3px] uppercase border border-brand-border-mid text-brand-gray-light px-8 py-4 rounded-sm w-full max-w-xs text-center hover:border-brand-red hover:text-brand-red transition-colors"
          >
            TELEFON 2: 606 123 291
          </a>
        </div>
      </div>

      {/* 2. HERO SECTION */}
      <section 
        className="relative min-height-screen bg-brand-black overflow-hidden flex flex-col justify-center"
        id="hero"
      >
        {/* Visual Grid Background Overlay */}
        <div 
          className="absolute inset-0 opacity-40 pointer-events-none"
          style={{
            backgroundImage: `linear-gradient(rgba(255, 255, 255, 0.04) 1px, transparent 1px), 
                              linear-gradient(90deg, rgba(255, 255, 255, 0.04) 1px, transparent 1px)`,
            backgroundSize: '48px 48px'
          }}
        />

        {/* Decorative Red Vertical Stripe Right */}
        <div className="absolute top-0 right-0 w-[4px] h-full bg-brand-red hidden md:block" />

        <div className="max-w-[1400px] mx-auto w-full px-6 md:px-[52px] pt-[150px] pb-[100px] flex flex-col justify-center relative z-10 min-h-screen">
          
          {/* Tagline Indicator */}
          <div className="flex items-center gap-3.5 mb-8 font-mono text-[11px] text-brand-red tracking-[3px] uppercase select-none">
            <span className="inline-block w-8 h-[2px] bg-brand-red"></span>
            SKUP · SPRZEDAŻ · ZAMIANA — ZACHODNIOPOMORSKIE I POMORSKIE
          </div>

          {/* Heading */}
          <h1 className="select-none flex flex-col gap-1 md:gap-2">
            <span className="font-oswald font-bold text-[clamp(45px,8vw,100px)] tracking-[2px] md:tracking-[3px] leading-[0.9] text-brand-white uppercase">
              KUPUJEMY
            </span>
            <span className="font-oswald font-bold text-[clamp(45px,8vw,100px)] tracking-[2px] md:tracking-[3px] leading-[0.9] text-brand-white uppercase">
              SPRZEDAJEMY
            </span>
            <span className="font-oswald font-bold text-[clamp(45px,8vw,100px)] tracking-[2px] md:tracking-[3px] leading-[0.9] text-brand-red uppercase">
              I ZAMIENIAMY
            </span>
          </h1>

          {/* Subheading Description */}
          <p className="font-sans font-light text-base md:text-[18px] text-brand-gray-light leading-relaxed max-w-[580px] mt-8">
            Auta używane, motocykle i maszyny rolnicze. Szybko, uczciwie, gotówka do ręki. 
            Własna laweta — przyjeżdżamy bezpośrednio do Ciebie i załatwiamy wszystko na miejscu.
          </p>

          {/* 4 Core Facts Panel */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-y-8 gap-x-0 border-y border-brand-border/60 py-10 my-12 max-w-[960px]">
            {/* Fact 1 */}
            <div className="px-4 md:px-7 border-r border-brand-border-mid last:border-none">
              <span className="font-oswald font-bold text-2xl md:text-[32px] text-brand-white leading-none block uppercase">
                GOTÓWKA
              </span>
              <span className="font-mono text-[10px] text-brand-gray tracking-[2px] uppercase mt-1 block">
                od ręki
              </span>
            </div>
            {/* Fact 2 */}
            <div className="px-4 md:px-7 border-none md:border-r border-brand-border-mid">
              <span className="font-oswald font-bold text-2xl md:text-[32px] text-brand-white leading-none block uppercase">
                WŁASNA LAWETA
              </span>
              <span className="font-mono text-[10px] text-brand-gray tracking-[2px] uppercase mt-1 block">
                dojeżdżamy do Ciebie
              </span>
            </div>
            {/* Fact 3 */}
            <div className="px-4 md:px-7 border-r border-brand-border-mid last:border-none">
              <span className="font-oswald font-bold text-2xl md:text-[32px] text-brand-white leading-none block uppercase">
                KAŻDY STAN
              </span>
              <span className="font-mono text-[10px] text-brand-gray tracking-[2px] uppercase mt-1 block">
                sprawne i uszkodzone
              </span>
            </div>
            {/* Fact 4 */}
            <div className="px-4 md:px-7 last:border-none">
              <span className="font-oswald font-bold text-2xl md:text-[32px] text-brand-white leading-none block uppercase">
                BEZPŁATNA
              </span>
              <span className="font-mono text-[10px] text-brand-gray tracking-[2px] uppercase mt-1 block">
                wycena
              </span>
            </div>
          </div>

          {/* Buttons */}
          <div className="flex flex-wrap gap-4 select-none">
            <a 
              href="tel:791338452"
              className="font-oswald font-semibold text-sm md:text-[15px] tracking-[3px] uppercase bg-brand-red text-white px-7 md:px-9 py-4 md:py-4.5 rounded-sm shadow-md shadow-brand-red/10 hover:shadow-brand-red/30 hover:bg-brand-red-dark hover:-translate-y-0.5 active:translate-y-0 transition-all duration-200"
            >
              ZADZWOŃ: 791 338 452
            </a>
            <a 
              href="tel:606123291"
              className="font-oswald font-semibold text-sm md:text-[15px] tracking-[3px] uppercase border border-brand-border-mid text-brand-gray-light bg-transparent px-7 md:px-9 py-4 md:py-4.5 rounded-sm hover:border-brand-red hover:text-brand-red transition-all duration-200"
            >
              LUB: 606 123 291
            </a>
          </div>

          {/* Scroll Down Indicator */}
          <div className="absolute bottom-10 left-6 md:left-[52px] hidden md:flex items-center gap-3.5 select-none">
            <div className="h-[2px] bg-brand-red animate-slide-line" style={{ width: '56px' }}></div>
            <span className="font-mono text-[10px] text-brand-gray tracking-[4px] uppercase">
              PRZEWIŃ
            </span>
          </div>
        </div>
      </section>

      {/* 3. INFINITE TICKER / MARQUEE */}
      <div className="bg-brand-red border-y border-brand-red-ticker/50 overflow-hidden h-[46px] relative flex items-center select-none">
        <div className="animate-marquee inline-flex whitespace-nowrap">
          {/* Ticker Text Repeated Twice for Seamless Loop */}
          <span className="font-oswald font-medium text-[13px] text-brand-white tracking-[3px] uppercase leading-[46px]">
            KUPUJEMY AUTA UŻYWANE  ✦  MOTOCYKLE  ✦  MASZYNY ROLNICZE  ✦  SPRAWNE I USZKODZONE  ✦  BEZ OC  ✦  BEZ PRZEGLĄDU  ✦  WŁASNA LAWETA  ✦  GOTÓWKA OD RĘKI  ✦  MINIMUM FORMALNOŚCI  ✦  BEZPŁATNA WYCENA  ✦  ZADZWOŃ: 791 338 452  ✦&nbsp;
          </span>
          <span className="font-oswald font-medium text-[13px] text-brand-white tracking-[3px] uppercase leading-[46px]">
            KUPUJEMY AUTA UŻYWANE  ✦  MOTOCYKLE  ✦  MASZYNY ROLNICZE  ✦  SPRAWNE I USZKODZONE  ✦  BEZ OC  ✦  BEZ PRZEGLĄDU  ✦  WŁASNA LAWETA  ✦  GOTÓWKA OD RĘKI  ✦  MINIMUM FORMALNOŚCI  ✦  BEZPŁATNA WYCENA  ✦  ZADZWOŃ: 791 338 452  ✦&nbsp;
          </span>
        </div>
      </div>

      {/* 4. PURCHASE DETAILS (SKUP) SECTION */}
      <section 
        className="bg-white px-6 md:px-[52px] py-[110px] border-b border-zinc-100"
        id="skup"
      >
        <div className="max-w-[1200px] mx-auto">
          {/* Header */}
          <div className="reveal">
            <span className="font-mono text-[11px] text-brand-red tracking-[4px] uppercase block">
              // SKUP AUT
            </span>
            <h2 className="font-oswald font-bold text-4xl md:text-[64px] text-zinc-900 tracking-[3px] uppercase mt-2 leading-none">
              MASZ AUTO NA SPRZEDAŻ?
            </h2>
            <p className="font-sans font-light text-base md:text-[18px] text-zinc-600 leading-relaxed max-w-[600px] mt-5">
              Nie chcesz tracić czasu na przygotowywanie ogłoszeń, mycie auta i odbieranie telefonów? 
              Twoje auto zajmuje miejsce na podjeździe? Pomożemy — odkupimy je od Ciebie dzisiaj.
            </p>
          </div>

          {/* Grid Layout Under Header */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-[60px] items-start mt-16">
            
            {/* Left Column — Co Skupujemy */}
            <div className="reveal">
              <h3 className="font-oswald font-semibold text-[16px] text-zinc-400 tracking-[4px] uppercase mb-7">
                SKUPUJEMY:
              </h3>

              <div className="flex flex-col gap-3">
                {/* Category Card 1 */}
                <div className="bg-zinc-50 border border-zinc-100 p-7 md:p-8 flex items-start sm:items-center gap-6 rounded-sm border-l-[3px] border-l-transparent hover:border-l-brand-red hover:border-zinc-200 hover:bg-white hover:shadow-md hover:shadow-brand-red/5 transition-all duration-250 group">
                  <div className="w-12 h-12 bg-brand-red/5 border border-brand-red/20 flex items-center justify-center rounded-sm shrink-0 text-brand-red select-none group-hover:scale-110 transition-transform">
                    <Car className="w-6 h-6 text-brand-red" />
                  </div>
                  <div>
                    <h4 className="font-oswald font-bold text-lg md:text-[22px] text-zinc-900 tracking-[2px] uppercase">
                      OSOBOWE, DOSTAWCZE I TERENOWE
                    </h4>
                    <p className="font-sans text-sm text-zinc-600 leading-relaxed mt-1">
                      Kupujemy wszystkie typy pojazdów osobowych, vany, auta miejskie oraz pojazdy użytkowe w każdym stanie.
                    </p>
                  </div>
                </div>

                {/* Category Card 2 */}
                <div className="bg-zinc-50 border border-zinc-100 p-7 md:p-8 flex items-start sm:items-center gap-6 rounded-sm border-l-[3px] border-l-transparent hover:border-l-brand-red hover:border-zinc-200 hover:bg-white hover:shadow-md hover:shadow-brand-red/5 transition-all duration-250 group">
                  <div className="w-12 h-12 bg-brand-red/5 border border-brand-red/20 flex items-center justify-center rounded-sm shrink-0 text-brand-red select-none group-hover:scale-110 transition-transform">
                    <Bike className="w-6 h-6 text-brand-red" />
                  </div>
                  <div>
                    <h4 className="font-oswald font-bold text-lg md:text-[22px] text-zinc-900 tracking-[2px] uppercase">
                      MOTOCYKLE
                    </h4>
                    <p className="font-sans text-sm text-zinc-600 leading-relaxed mt-1">
                      Wszystkie marki, typy i roczniki. Zarówno motocykle zadbane, jak i te uszkodzone, powypadkowe, do remontu.
                    </p>
                  </div>
                </div>

                {/* Category Card 3 */}
                <div className="bg-zinc-50 border border-zinc-100 p-7 md:p-8 flex items-start sm:items-center gap-6 rounded-sm border-l-[3px] border-l-transparent hover:border-l-brand-red hover:border-zinc-200 hover:bg-white hover:shadow-md hover:shadow-brand-red/5 transition-all duration-250 group">
                  <div className="w-12 h-12 bg-brand-red/5 border border-brand-red/20 flex items-center justify-center rounded-sm shrink-0 text-brand-red select-none group-hover:scale-110 transition-transform">
                    <Tractor className="w-6 h-6 text-brand-red" />
                  </div>
                  <div>
                    <h4 className="font-oswald font-bold text-lg md:text-[22px] text-zinc-900 tracking-[2px] uppercase">
                      MASZYNY ROLNICZE
                    </h4>
                    <p className="font-sans text-sm text-zinc-600 leading-relaxed mt-1">
                      Traktory, ciągniki rolnicze, kombajny, przyczepy i inny osprzęt gospodarstwa. Skupujemy z własnym transportem.
                    </p>
                  </div>
                </div>
              </div>

              {/* Tag Filters of Conditions */}
              <div className="flex flex-wrap gap-2.5 mt-7 select-none">
                <span className="border border-zinc-200 bg-zinc-50 text-zinc-700 hover:border-brand-red hover:bg-white px-4 py-2 font-mono text-[11px] tracking-[2px] rounded-sm transition-colors cursor-default">
                  ✓ Bez ważnego przeglądu
                </span>
                <span className="border border-zinc-200 bg-zinc-50 text-zinc-700 hover:border-brand-red hover:bg-white px-4 py-2 font-mono text-[11px] tracking-[2px] rounded-sm transition-colors cursor-default">
                  ✓ Bez OC
                </span>
                <span className="border border-zinc-200 bg-zinc-50 text-zinc-700 hover:border-brand-red hover:bg-white px-4 py-2 font-mono text-[11px] tracking-[2px] rounded-sm transition-colors cursor-default">
                  ✓ Po kolizji
                </span>
                <span className="border border-zinc-200 bg-zinc-50 text-zinc-700 hover:border-brand-red hover:bg-white px-4 py-2 font-mono text-[11px] tracking-[2px] rounded-sm transition-colors cursor-default">
                  ✓ Uszkodzone
                </span>
                <span className="border border-zinc-200 bg-zinc-50 text-zinc-700 hover:border-brand-red hover:bg-white px-4 py-2 font-mono text-[11px] tracking-[2px] rounded-sm transition-colors cursor-default">
                  ✓ Niesprawne
                </span>
                <span className="border border-zinc-200 bg-zinc-50 text-zinc-700 hover:border-brand-red hover:bg-white px-4 py-2 font-mono text-[11px] tracking-[2px] rounded-sm transition-colors cursor-default">
                  ✓ Do remontu
                </span>
              </div>
            </div>

            {/* Right Column — Dlaczego warto */}
            <div className="reveal">
              <h3 className="font-oswald font-semibold text-[16px] text-zinc-400 tracking-[4px] uppercase mb-7">
                DLACZEGO MY?
              </h3>

              <div className="flex flex-col gap-3">
                
                {/* Advantage 1 */}
                <div className="bg-zinc-50 border border-zinc-100 p-7 md:p-8 rounded-sm border-l-[3px] border-l-transparent hover:border-l-brand-red hover:border-zinc-200 hover:bg-white hover:shadow-md hover:shadow-brand-red/5 transition-all duration-200 flex gap-5 items-start group">
                  <div className="w-11 h-11 bg-brand-red/5 border border-brand-red/20 flex items-center justify-center rounded-sm shrink-0 text-brand-red select-none group-hover:scale-105 transition-transform">
                    <Coins className="w-5 h-5 text-brand-red" />
                  </div>
                  <div>
                    <h4 className="font-oswald font-bold text-lg text-zinc-900 tracking-[2px] uppercase">
                      GOTÓWKA DO RĘKI
                    </h4>
                    <p className="font-sans text-sm text-zinc-600 leading-relaxed mt-2">
                      Płacimy od razu przy odbiorze pojazdu. Bez zwlekania, bez zbędnych przelewów, pełna kwota prosto do Twojej ręki.
                    </p>
                  </div>
                </div>

                {/* Advantage 2 */}
                <div className="bg-zinc-50 border border-zinc-100 p-7 md:p-8 rounded-sm border-l-[3px] border-l-transparent hover:border-l-brand-red hover:border-zinc-200 hover:bg-white hover:shadow-md hover:shadow-brand-red/5 transition-all duration-200 flex gap-5 items-start group">
                  <div className="w-11 h-11 bg-brand-red/5 border border-brand-red/20 flex items-center justify-center rounded-sm shrink-0 text-brand-red select-none group-hover:scale-105 transition-transform">
                    <Truck className="w-5 h-5 text-brand-red" />
                  </div>
                  <div>
                    <h4 className="font-oswald font-bold text-lg text-zinc-900 tracking-[2px] uppercase">
                      WŁASNA LAWETA
                    </h4>
                    <p className="font-sans text-sm text-zinc-600 leading-relaxed mt-2">
                      Dojeżdżamy pod wskazany adres i odbieramy pojazd na nasz własny koszt. Działamy sprawnie w całym województwie zachodniopomorskim i pomorskim.
                    </p>
                  </div>
                </div>

                {/* Advantage 3 */}
                <div className="bg-zinc-50 border border-zinc-100 p-7 md:p-8 rounded-sm border-l-[3px] border-l-transparent hover:border-l-brand-red hover:border-zinc-200 hover:bg-white hover:shadow-md hover:shadow-brand-red/5 transition-all duration-200 flex gap-5 items-start group">
                  <div className="w-11 h-11 bg-brand-red/5 border border-brand-red/20 flex items-center justify-center rounded-sm shrink-0 text-brand-red select-none group-hover:scale-105 transition-transform">
                    <FileText className="w-5 h-5 text-brand-red" />
                  </div>
                  <div>
                    <h4 className="font-oswald font-bold text-lg text-zinc-900 tracking-[2px] uppercase">
                      MINIMUM FORMALNOŚCI
                    </h4>
                    <p className="font-sans text-sm text-zinc-600 leading-relaxed mt-2">
                      Kompletnie przygotowujemy wszystkie niezbędne dokumenty i umowy kupna-sprzedaży na miejscu. Szybko, bez komplikacji i w 100% legalnie.
                    </p>
                  </div>
                </div>

                {/* Advantage 4 */}
                <div className="bg-zinc-50 border border-zinc-100 p-7 md:p-8 rounded-sm border-l-[3px] border-l-transparent hover:border-l-brand-red hover:border-zinc-200 hover:bg-white hover:shadow-md hover:shadow-brand-red/5 transition-all duration-200 flex gap-5 items-start group">
                  <div className="w-11 h-11 bg-brand-red/5 border border-brand-red/20 flex items-center justify-center rounded-sm shrink-0 text-brand-red select-none group-hover:scale-105 transition-transform">
                    <Scale className="w-5 h-5 text-brand-red" />
                  </div>
                  <div>
                    <h4 className="font-oswald font-bold text-lg text-zinc-900 tracking-[2px] uppercase">
                      UCZCIWA WYCENA
                    </h4>
                    <p className="font-sans text-sm text-zinc-600 leading-relaxed mt-2">
                      Dokonujemy rzetelnej oceny wartości pojazdu bez sztucznego zaniżania stawek rynkowych. Wycena jest bezpłatna i nie zobowiązuje Cię do niczego.
                    </p>
                  </div>
                </div>

              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 5. HOW WE WORK (JAK DZIAŁAMY) */}
      <section 
        className="bg-brand-black px-6 md:px-[52px] py-[110px]"
        id="jak-dzialamy"
      >
        <div className="max-w-[1200px] mx-auto">
          {/* Header */}
          <div className="reveal">
            <span className="font-mono text-[11px] text-brand-red tracking-[4px] uppercase block">
              // PROCES SKUPU
            </span>
            <h2 className="font-oswald font-bold text-4xl md:text-[64px] text-brand-white tracking-[3px] uppercase mt-2 leading-none">
              JAK TO DZIAŁA
            </h2>
            <p className="font-sans font-light text-base md:text-[17px] text-brand-gray-light leading-relaxed max-w-[520px] mt-4">
              Cztery proste i konkretne kroki dzielą Cię od sprzedaży pojazdu. Szybko, sprawnie i bez wychodzenia z domu — zazwyczaj w ciągu tego samego dnia.
            </p>
          </div>

          {/* Steps Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-[1px] bg-brand-border mt-16 overflow-hidden rounded-sm">
            
            {/* Step 1 */}
            <div className="bg-brand-dark p-7 md:p-8 relative overflow-hidden min-h-[250px] border-t-2 border-transparent hover:border-brand-red hover:bg-brand-card transition-all duration-250 group">
              {/* Massive background card step index */}
              <div className="font-oswald font-black text-[120px] text-brand-red/[0.04] leading-none absolute bottom-[-20px] right-[10px] pointer-events-none select-none">
                01
              </div>
              <div className="font-mono font-medium text-[12px] text-brand-red tracking-[3px] mb-5 select-none">
                01
              </div>
              <h3 className="font-oswald font-bold text-xl text-brand-white tracking-[2px] uppercase mb-4">
                ZADZWOŃ
              </h3>
              <p className="font-sans text-sm text-brand-gray leading-relaxed relative z-10">
                Skontaktuj się z nami telefonicznie, SMS lub wyślij e-mail. Podaj podstawowe informacje o pojeździe: markę, model, rok produkcji i aktualny stan techniczny.
              </p>
            </div>

            {/* Step 2 */}
            <div className="bg-brand-dark p-7 md:p-8 relative overflow-hidden min-h-[250px] border-t-2 border-transparent hover:border-brand-red hover:bg-brand-card transition-all duration-250 group">
              {/* Massive background card step index */}
              <div className="font-oswald font-black text-[120px] text-brand-red/[0.04] leading-none absolute bottom-[-20px] right-[10px] pointer-events-none select-none">
                02
              </div>
              <div className="font-mono font-medium text-[12px] text-brand-red tracking-[3px] mb-5 select-none">
                02
              </div>
              <h3 className="font-oswald font-bold text-xl text-brand-white tracking-[2px] uppercase mb-4">
                WYCENA
              </h3>
              <p className="font-sans text-sm text-brand-gray leading-relaxed relative z-10">
                Na podstawie przekazanych szczegółów oraz ewentualnych zdjęć podajemy wstępną wycenę. Nasza oferta jest bezpłatna i nie nakłada na Ciebie żadnych zobowiązań.
              </p>
            </div>

            {/* Step 3 */}
            <div className="bg-brand-dark p-7 md:p-8 relative overflow-hidden min-h-[250px] border-t-2 border-transparent hover:border-brand-red hover:bg-brand-card transition-all duration-250 group">
              {/* Massive background card step index */}
              <div className="font-oswald font-black text-[120px] text-brand-red/[0.04] leading-none absolute bottom-[-20px] right-[10px] pointer-events-none select-none">
                03
              </div>
              <div className="font-mono font-medium text-[12px] text-brand-red tracking-[3px] mb-5 select-none">
                03
              </div>
              <h3 className="font-oswald font-bold text-xl text-brand-white tracking-[2px] uppercase mb-4">
                DOJAZD LAWETĄ
              </h3>
              <p className="font-sans text-sm text-brand-gray leading-relaxed relative z-10">
                Po zaakceptowaniu wyceny, ustalamy dogodny dla Ciebie termin. Przyjeżdżamy na miejsce naszą własną lawetą, gwarantując transport pojazdu w pełni na nasz koszt.
              </p>
            </div>

            {/* Step 4 */}
            <div className="bg-brand-dark p-7 md:p-8 relative overflow-hidden min-h-[250px] border-t-2 border-transparent hover:border-brand-red hover:bg-brand-card transition-all duration-250 group">
              {/* Massive background card step index */}
              <div className="font-oswald font-black text-[120px] text-brand-red/[0.04] leading-none absolute bottom-[-20px] right-[10px] pointer-events-none select-none">
                04
              </div>
              <div className="font-mono font-medium text-[12px] text-brand-red tracking-[3px] mb-5 select-none">
                04
              </div>
              <h3 className="font-oswald font-bold text-xl text-brand-white tracking-[2px] uppercase mb-4">
                GOTÓWKA
              </h3>
              <p className="font-sans text-sm text-brand-gray leading-relaxed relative z-10">
                Na miejscu sporządzamy legalne, bezpieczne dokumenty sprzedaży. Natychmiast po ich podpisaniu wypłacamy uzgodnioną kwotę w gotówce bezpośrednio do ręki.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* 6. CALL TO ACTION SECTION (WYCENA NIC NIE KOSZTUJE) */}
      <section className="bg-brand-red px-6 md:px-[52px] py-20 text-brand-white border-y border-brand-red-dark">
        <div className="max-w-[1200px] mx-auto flex flex-col lg:flex-row items-start lg:items-center justify-between gap-10">
          
          {/* Left info content */}
          <div className="max-w-[650px]">
            <h2 className="font-oswald font-bold text-3xl md:text-[48px] tracking-[3px] uppercase leading-none">
              CZEKAMY NA TWÓJ TELEFON
            </h2>
            <p className="font-sans text-base md:text-[18px] text-white/85 leading-relaxed mt-4">
              Wycena nic nie kosztuje — skontaktuj się z nami już teraz i sprawdź, jak atrakcyjną cenę zaproponujemy za Twój pojazd lub sprzęt.
            </p>
          </div>

          {/* Right phone click actions */}
          <div className="flex flex-col text-left lg:text-right shrink-0 w-full lg:w-auto">
            <a 
              href="tel:791338452" 
              className="font-oswald font-bold text-3xl md:text-[52px] tracking-[1px] hover:text-white/80 transition-colors leading-tight"
            >
              791 338 452
            </a>
            
            <div className="flex items-center gap-4 py-1 self-start lg:self-end text-white/55 font-mono text-[11px] tracking-[4px] uppercase my-1">
              <span className="w-6 h-[1px] bg-white/30"></span>
              lub
              <span className="w-6 h-[1px] bg-white/30"></span>
            </div>

            <a 
              href="tel:606123291" 
              className="font-oswald font-bold text-2xl md:text-[40px] tracking-[1px] hover:text-white/80 transition-colors leading-none"
            >
              606 123 291
            </a>
          </div>

        </div>
      </section>

      {/* 7. CONTACT & LOCATION (KONTAKT) SECTION */}
      <section 
        className="bg-white px-6 md:px-[52px] py-[110px] border-t border-zinc-100"
        id="kontakt"
      >
        <div className="max-w-[1200px] mx-auto">
          {/* Header */}
          <div className="reveal">
            <span className="font-mono text-[11px] text-brand-red tracking-[4px] uppercase block">
              // DANE KONTAKTOWE
            </span>
            <h2 className="font-oswald font-bold text-4xl md:text-[56px] text-zinc-900 tracking-[3px] uppercase mt-2">
              KONTAKT I LOKALIZACJA
            </h2>
          </div>

          {/* Main Grid: Info Cards (Left) & Map Embed (Right) */}
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.4fr] gap-12 lg:gap-[72px] items-start mt-16">
            
            {/* Left Column — Contact Info blocks */}
            <div className="reveal flex flex-col">
              
              {/* Phone Contacts Block */}
              <div className="flex gap-5 items-start py-6 border-b border-zinc-100">
                <div className="w-11 h-11 bg-brand-red/5 border border-brand-red/20 flex items-center justify-center rounded-sm shrink-0 text-brand-red">
                  <Phone className="w-5 h-5 text-brand-red" />
                </div>
                <div>
                  <span className="font-mono text-[10px] text-brand-red tracking-[4px] uppercase block mb-1.5 select-none">
                    TELEFON
                  </span>
                  <a 
                    href="tel:791338452" 
                    className="font-sans font-semibold text-lg md:text-[18px] text-zinc-900 hover:text-brand-red transition-colors block"
                  >
                    791 338 452
                  </a>
                  <a 
                    href="tel:606123291" 
                    className="font-sans text-sm md:text-[15px] text-zinc-500 hover:text-brand-red transition-colors block mt-1"
                  >
                    606 123 291
                  </a>
                </div>
              </div>

              {/* Email Block */}
              <div className="flex gap-5 items-start py-6 border-b border-zinc-100">
                <div className="w-11 h-11 bg-brand-red/5 border border-brand-red/20 flex items-center justify-center rounded-sm shrink-0 text-brand-red">
                  <Mail className="w-5 h-5 text-brand-red" />
                </div>
                <div>
                  <span className="font-mono text-[10px] text-brand-red tracking-[4px] uppercase block mb-1.5 select-none">
                    E-MAIL
                  </span>
                  <a 
                    href="mailto:karolinakowalska1906@gmail.com" 
                    className="font-sans font-semibold text-sm md:text-[15px] text-zinc-900 hover:text-brand-red transition-colors break-all"
                  >
                    karolinakowalska1906@gmail.com
                  </a>
                </div>
              </div>

              {/* Address Block */}
              <div className="flex gap-5 items-start py-6 border-b border-zinc-100">
                <div className="w-11 h-11 bg-brand-red/5 border border-brand-red/20 flex items-center justify-center rounded-sm shrink-0 text-brand-red">
                  <MapPin className="w-5 h-5 text-brand-red" />
                </div>
                <div>
                  <span className="font-mono text-[10px] text-brand-red tracking-[4px] uppercase block mb-1.5 select-none">
                    ADRES
                  </span>
                  <span className="font-sans font-semibold text-base md:text-[18px] text-zinc-900">
                    Sadkowo 12a, Tychowo gmina 78-220
                  </span>
                </div>
              </div>

              {/* Service Area Block */}
              <div className="flex gap-5 items-start py-6 border-b border-zinc-100">
                <div className="w-11 h-11 bg-brand-red/5 border border-brand-red/20 flex items-center justify-center rounded-sm shrink-0 text-brand-red">
                  <Truck className="w-5 h-5 text-brand-red" />
                </div>
                <div>
                  <span className="font-mono text-[10px] text-brand-red tracking-[4px] uppercase block mb-1.5 select-none">
                    OBSZAR DZIAŁANIA
                  </span>
                  <span className="font-sans font-semibold text-base md:text-[18px] text-zinc-900">
                    Województwo zachodniopomorskie i pomorskie
                  </span>
                </div>
              </div>

              {/* Facebook Link Block */}
              <div className="flex gap-5 items-start py-6 border-b border-zinc-100">
                <div className="w-11 h-11 bg-brand-red/5 border border-brand-red/20 flex items-center justify-center rounded-sm shrink-0 text-brand-red">
                  <Facebook className="w-5 h-5 text-brand-red" />
                </div>
                <div>
                  <span className="font-mono text-[10px] text-brand-red tracking-[4px] uppercase block mb-1.5 select-none">
                    FACEBOOK
                  </span>
                  <a 
                    href="https://www.facebook.com/profile.php?id=61581803406252" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="font-sans font-semibold text-base text-brand-red hover:text-brand-red-dark hover:underline transition-all inline-flex items-center gap-1"
                  >
                    Profil firmy na Facebooku →
                  </a>
                </div>
              </div>

              {/* Call to Action Button under info */}
              <div className="mt-8 select-none">
                <a 
                  href="tel:791338452" 
                  className="inline-block bg-brand-red text-white font-oswald font-semibold text-[15px] tracking-[3px] uppercase px-9 py-4.5 rounded-sm hover:bg-brand-red-dark hover:-translate-y-0.5 active:translate-y-0 shadow-md shadow-brand-red/10 hover:shadow-brand-red/35 transition-all duration-200"
                >
                  ZADZWOŃ TERAZ — 791 338 452
                </a>
              </div>
            </div>

            {/* Right Column — Google Map Embed */}
            <div className="reveal">
              <div className="font-mono text-[11px] text-brand-red tracking-[3px] uppercase mb-3.5 select-none">
                // MAPA DOJAZDU
              </div>
              
              <div className="relative pb-[66%] h-0 overflow-hidden border border-zinc-200 rounded-sm bg-zinc-50">
                <iframe 
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2350.7828968078197!2d16.21298427718022!3d53.900062633148565!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4701b063859f341f%3A0xa289cbde438a430f!2sSadkowo%2012A%2C%2078-220%20Sadkowo!5e0!3m2!1spl!2spl!4v1782552254109!5m2!1spl!2spl"
                  className="absolute top-0 left-0 w-full h-full border-0 opacity-95 hover:opacity-100 transition-all duration-350"
                  allowFullScreen={true}
                  loading="lazy" 
                  referrerPolicy="strict-origin-when-cross-origin"
                  title="Lokalizacja Autohandel Sadkowo"
                ></iframe>
              </div>

              <div className="bg-zinc-50 p-4.5 px-6 border-l-[3px] border-brand-red mt-3 font-sans text-sm text-zinc-500 rounded-r-sm">
                Sadkowo 12a, Tychowo gmina 78-220 — Obsługujemy całe zachodniopomorskie i pomorskie. Dojazd i odbiór własną lawetą.
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 8. FOOTER */}
      <footer className="bg-brand-black border-t border-brand-border-mid px-6 md:px-[52px] py-11 select-none">
        <div className="max-w-[1400px] mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
          
          {/* Left section: Footer Logo */}
          <div className="flex flex-col items-center md:items-start text-center md:text-left">
            <div className="flex flex-col">
              <span className="font-oswald font-bold text-lg text-brand-white tracking-[3px] uppercase">
                AUTOHANDEL
              </span>
              <span className="font-mono text-[9px] text-brand-red tracking-[3px] uppercase mt-0.5">
                SKUP · SPRZEDAŻ · ZAMIANA
              </span>
            </div>
            <p className="font-sans font-light text-[13px] text-brand-gray mt-2 max-w-sm">
              Zachodniopomorskie i Pomorskie · Auta, motocykle, maszyny rolnicze
            </p>
          </div>

          {/* Center section: Info details */}
          <div className="font-mono text-[11px] md:text-[12px] text-brand-gray text-center leading-relaxed">
            Sadkowo 12a, Tychowo 78-220 <br className="md:hidden" />
            <span className="hidden md:inline"> · </span>
            <a href="tel:791338452" className="hover:text-brand-white transition-colors">791 338 452</a> 
            <span> · </span>
            <a href="tel:606123291" className="hover:text-brand-white transition-colors">606 123 291</a>
          </div>

          {/* Right section: Copyright details */}
          <div className="font-sans text-[11px] md:text-[12px] text-brand-gray text-center md:text-right">
            © 2026 Autohandel Skup Sprzedaż Zamiana. <br className="sm:hidden" /> All rights reserved.
          </div>

        </div>
      </footer>

    </div>
  );
}
