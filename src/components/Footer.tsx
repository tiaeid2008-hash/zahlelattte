import React from 'react';
import { Phone, MapPin, Instagram, Heart, ArrowUp } from 'lucide-react';
import { Language } from '../types/cafe';
import { ZahlatteLogo } from './ZahlatteLogo';

interface FooterProps {
  lang: Language;
  onOpenStrategy: () => void;
}

export const Footer: React.FC<FooterProps> = ({ lang, onOpenStrategy }) => {
  const isEn = lang === 'en';

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#0D0A08] border-t border-[#2A2018] text-[#EDE6DE] pt-16 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-[#2A2018]">
          
          {/* Brand Info & Official Emblem */}
          <div className="lg:col-span-5 space-y-4">
            <div className="flex items-center gap-3.5">
              <div className="w-14 h-14 rounded-full overflow-hidden bg-[#FAF6F0] p-0.5 border-2 border-[#C98A4C] shadow-lg flex-shrink-0">
                <ZahlatteLogo size="custom" className="w-full h-full" showTagline={false} />
              </div>
              <div>
                <span className="text-2xl font-black tracking-tight text-[#EDE6DE] block">
                  ZahLatté
                </span>
                <span className="text-xs text-[#A85A38] font-serif italic tracking-wide">
                  sip into something beautiful
                </span>
              </div>
            </div>
            
            <p className="text-sm text-[#EDE6DE]/70 leading-relaxed max-w-sm">
              {isEn
                ? "Zahle's premier specialty coffee craft house. Blending small-batch +85 SCAA Arabica micro-lots with authentic Zahlawi hospitality on the Boulevard."
                : "أول وجهة قهوة مختصة بقلب زحلة. بنجمع بين معايير البن العالمي الفاخر (+85 SCAA) وكرم الضيافة الزحلاوية الأصيلة ع البوليفار."}
            </p>

            <div className="flex items-center gap-3 pt-2">
              <a
                href="https://instagram.com/zahlelatte.lb"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-lg bg-[#1E1712] border border-[#2A2018] hover:border-[#C98A4C] flex items-center justify-center text-[#EDE6DE]/80 hover:text-[#C98A4C] transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a
                href="https://wa.me/96170889911"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-lg bg-[#1E1712] border border-[#2A2018] hover:border-[#25D366] flex items-center justify-center text-[#EDE6DE]/80 hover:text-[#25D366] transition-colors"
                aria-label="WhatsApp"
              >
                <Phone className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs font-mono uppercase tracking-widest text-[#C98A4C] font-semibold">
              {isEn ? 'Navigation' : 'روابط سريعة'}
            </h4>
            <ul className="space-y-2 text-sm text-[#EDE6DE]/80">
              <li>
                <a href="#menu" className="hover:text-[#C98A4C] transition-colors">
                  {isEn ? 'Specialty Menu & Prices' : 'المنيو والأسعار'}
                </a>
              </li>
              <li>
                <a href="#why-us" className="hover:text-[#C98A4C] transition-colors">
                  {isEn ? 'Why ZahLatté & Our Vibe' : 'ليش ZahLatté؟'}
                </a>
              </li>
              <li>
                <a href="#story" className="hover:text-[#C98A4C] transition-colors">
                  {isEn ? 'The Crest & Our Heritage' : 'قصتنا وهوية الشعار'}
                </a>
              </li>
              <li>
                <a href="#location" className="hover:text-[#C98A4C] transition-colors">
                  {isEn ? 'Hours & Google Maps' : 'ساعات العمل والخريطة'}
                </a>
              </li>
            </ul>
          </div>

          {/* Strategy & Contact */}
          <div className="lg:col-span-4 space-y-3">
            <h4 className="text-xs font-mono uppercase tracking-widest text-[#C98A4C] font-semibold">
              {isEn ? 'Visit & Orders' : 'العنوان والطلبات'}
            </h4>
            <p className="text-sm text-[#EDE6DE]/80 flex items-start gap-2">
              <MapPin className="w-4 h-4 text-[#A85A38] mt-1 flex-shrink-0" />
              <span>
                {isEn
                  ? 'Zahle Boulevard, near Berdawni Bridge, Al-Karam Center, Ground Floor, Zahle, Lebanon'
                  : 'بوليفار زحلة، قرب جسر البردوني، سنتر الكرم، الطابق الأرضي، زحلة، لبنان'}
              </span>
            </p>
            <p className="text-sm text-[#EDE6DE]/80 font-mono flex items-center gap-2">
              <Phone className="w-4 h-4 text-[#25D366]" />
              <span>+961 70 889 911 / +961 8 800 123</span>
            </p>
            <div className="pt-2">
              <button
                onClick={onOpenStrategy}
                className="text-xs text-[#C98A4C] hover:underline flex items-center gap-1 font-semibold"
              >
                <span>{isEn ? 'View Content & Marketing Strategy Blueprint →' : 'عرض هيكل المحتوى وخطة التسويق →'}</span>
              </button>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#EDE6DE]/60">
          <p className="flex items-center gap-1.5">
            <span>© {new Date().getFullYear()} ZahLatté. All rights reserved.</span>
            <span>•</span>
            <span className="flex items-center gap-1">
              {isEn ? 'Crafted with' : 'صُنع بحب في'} <Heart className="w-3 h-3 text-[#A85A38] fill-[#A85A38]" /> {isEn ? 'in Zahle, Lebanon' : 'زحلة، لبنان'}
            </span>
          </p>

          <button
            onClick={scrollToTop}
            className="flex items-center gap-1 text-[#EDE6DE]/70 hover:text-[#C98A4C] transition-colors"
          >
            <span>{isEn ? 'Back to top' : 'للأعلى'}</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>

      </div>
    </footer>
  );
};
