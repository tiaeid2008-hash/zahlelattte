import React, { useState, useEffect } from 'react';
import { ShoppingBag, Globe, Menu, X, Phone, Compass } from 'lucide-react';
import { Language } from '../types/cafe';
import { ZahlatteLogo } from './ZahlatteLogo';

interface HeaderProps {
  lang: Language;
  onToggleLang: () => void;
  cartCount: number;
  onOpenCart: () => void;
  onOpenStrategy: () => void;
}

export const Header: React.FC<HeaderProps> = ({
  lang,
  onToggleLang,
  cartCount,
  onOpenCart,
  onOpenStrategy,
}) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 30);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { href: '#menu', label: lang === 'en' ? 'Menu' : 'المنيو' },
    { href: '#why-us', label: lang === 'en' ? 'Why Us' : 'ليش نحن؟' },
    { href: '#story', label: lang === 'en' ? 'Our Story' : 'قصتنا' },
    { href: '#testimonials', label: lang === 'en' ? 'Reviews' : 'آراء الزوار' },
    { href: '#location', label: lang === 'en' ? 'Find Us' : 'موقعنا' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#120E0B]/95 backdrop-blur-md border-b border-[#2A2018] py-2.5 shadow-xl'
          : 'bg-gradient-to-b from-[#120E0B]/90 via-[#120E0B]/50 to-transparent py-4'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Brand / Logo */}
        <a href="#" className="flex items-center gap-3 group focus:outline-none">
          <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-full overflow-hidden border-2 border-[#C98A4C]/60 shadow-md group-hover:scale-105 transition-transform bg-[#FAF6F0] p-0.5">
            <ZahlatteLogo size="custom" className="w-full h-full" showTagline={false} />
          </div>
          <div className="flex flex-col">
            <span className="text-xl sm:text-2xl font-black tracking-tight text-[#EDE6DE] group-hover:text-[#C98A4C] transition-colors flex items-center gap-1.5">
              ZahLatté
              <span className="text-xs px-1.5 py-0.5 rounded bg-[#C98A4C]/20 text-[#C98A4C] font-mono border border-[#C98A4C]/30 hidden sm:inline-block">
                Zahle
              </span>
            </span>
            <span className="text-[11px] sm:text-xs text-[#A85A38] font-serif italic tracking-wide -mt-0.5">
              sip into something beautiful
            </span>
          </div>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-7">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-[#EDE6DE]/80 hover:text-[#C98A4C] transition-colors relative py-1 after:absolute after:bottom-0 after:left-0 after:w-0 hover:after:w-full after:h-0.5 after:bg-[#C98A4C] after:transition-all"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Actions (Language, Strategy, Cart, Phone) */}
        <div className="flex items-center gap-2 sm:gap-3">
          {/* Strategy Modal Trigger */}
          <button
            onClick={onOpenStrategy}
            className="hidden lg:flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium text-[#EDE6DE] bg-[#1E1712] border border-[#C98A4C]/30 hover:border-[#C98A4C] hover:bg-[#2A2018] transition-all"
            title={lang === 'en' ? 'Content Structure & Marketing Blueprint' : 'هيكل المحتوى والتسويق'}
          >
            <Compass className="w-3.5 h-3.5 text-[#C98A4C]" />
            <span>{lang === 'en' ? 'Strategy Blueprint' : 'هيكل المحتوى'}</span>
          </button>

          {/* Language Switcher */}
          <button
            onClick={onToggleLang}
            className="flex items-center gap-1 px-2.5 py-1.5 rounded-lg text-xs font-semibold text-[#EDE6DE] bg-[#1E1712] border border-[#2A2018] hover:border-[#C98A4C]/50 hover:bg-[#2A2018] transition-all"
            aria-label="Toggle language"
          >
            <Globe className="w-3.5 h-3.5 text-[#C98A4C]" />
            <span className="uppercase">{lang === 'en' ? 'عربي' : 'EN'}</span>
          </button>

          {/* Direct Phone / WhatsApp quick link */}
          <a
            href="https://wa.me/96170889911"
            target="_blank"
            rel="noopener noreferrer"
            className="hidden sm:flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium text-[#EDE6DE]/90 bg-[#1E1712] border border-[#2A2018] hover:border-[#25D366]/60 hover:text-[#25D366] transition-all"
          >
            <Phone className="w-3.5 h-3.5 text-[#25D366]" />
            <span className="font-mono text-[11px]">+961 70 889 911</span>
          </a>

          {/* Cart Button */}
          <button
            onClick={onOpenCart}
            className="relative flex items-center justify-center w-10 h-10 rounded-xl bg-gradient-to-br from-[#C98A4C] to-[#A85A38] text-[#120E0B] font-bold shadow-lg shadow-[#C98A4C]/20 hover:scale-105 active:scale-95 transition-all"
            aria-label="View Cart"
          >
            <ShoppingBag className="w-4 h-4 stroke-[2.5]" />
            {cartCount > 0 && (
              <span className="absolute -top-1.5 -right-1.5 w-5 h-5 bg-[#FAF6F0] text-[#120E0B] text-xs font-black rounded-full flex items-center justify-center border-2 border-[#120E0B] animate-pulse">
                {cartCount}
              </span>
            )}
          </button>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 rounded-lg text-[#EDE6DE] bg-[#1E1712] border border-[#2A2018]"
            aria-label="Menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#120E0B]/98 border-b border-[#2A2018] px-4 pt-3 pb-6 space-y-3">
          <nav className="flex flex-col space-y-2">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="px-3 py-2 rounded-lg text-base font-medium text-[#EDE6DE] hover:bg-[#1E1712] hover:text-[#C98A4C] transition-colors"
              >
                {link.label}
              </a>
            ))}
          </nav>
          <div className="pt-3 border-t border-[#2A2018] flex flex-col gap-2">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenStrategy();
              }}
              className="w-full flex items-center justify-center gap-2 py-2.5 rounded-lg text-sm font-semibold bg-[#1E1712] text-[#EDE6DE] border border-[#C98A4C]/40"
            >
              <Compass className="w-4 h-4 text-[#C98A4C]" />
              <span>{lang === 'en' ? 'Strategy Blueprint & Marketing Copy' : 'هيكل المحتوى والتسويق'}</span>
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
