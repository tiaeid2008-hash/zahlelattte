import React from 'react';
import { ArrowRight, Coffee, Sparkles, MessageCircle, MapPin } from 'lucide-react';
import { Language } from '../types/cafe';
import { ZahlatteLogo } from './ZahlatteLogo';

interface HeroProps {
  lang: Language;
  onExploreMenu?: () => void;
  onOpenOrder?: () => void;
}

export const Hero: React.FC<HeroProps> = ({ lang, onExploreMenu, onOpenOrder }) => {
  const isEn = lang === 'en';

  return (
    <section className="relative min-h-[92vh] flex items-center justify-center pt-24 pb-16 overflow-hidden bg-[#120E0B]">
      {/* Background Glows & Vignette */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] bg-gradient-to-tr from-[#A85A38]/20 via-[#C98A4C]/15 to-transparent blur-[120px] rounded-full pointer-events-none" />
        <div className="absolute -bottom-10 right-0 w-[500px] h-[400px] bg-[#2F3E33]/25 blur-[100px] rounded-full pointer-events-none" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,rgba(18,14,11,0.75)_100%)]" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Text Content */}
          <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
            
            {/* Top Brand Pill with Official Logo & Location */}
            <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-[#1E1712]/90 border border-[#C98A4C]/35 backdrop-blur-md shadow-inner">
              <div className="w-5 h-5 rounded-full overflow-hidden bg-[#FAF6F0] p-0.5 flex-shrink-0">
                <ZahlatteLogo size="custom" className="w-full h-full" showTagline={false} />
              </div>
              <span className="text-xs font-semibold tracking-wide text-[#EDE6DE] flex items-center gap-1.5">
                <span className="text-[#C98A4C] font-serif italic">sip into something beautiful</span>
                <span className="text-[#2A2018]">|</span>
                <MapPin className="w-3.5 h-3.5 text-[#A85A38]" />
                <span className="text-[#EDE6DE]/90">{isEn ? 'Zahle Boulevard, Lebanon' : 'بوليفار زحلة، لبنان'}</span>
              </span>
            </div>

            {/* Main Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-[#EDE6DE] leading-[1.12] tracking-tight">
              {isEn ? (
                <>
                  From the <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#C98A4C] via-[#E8B87A] to-[#A85A38]">Berdawni River</span> breeze to your dialed cup.
                </>
              ) : (
                <>
                  من نسيم <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#C98A4C] via-[#E8B87A] to-[#A85A38]">البردوني</span> لفنجانك الموزون.. القهوة بزحلة إلها طعم تاني!
                </>
              )}
            </h1>

            {/* Emotional Story & Hook */}
            <p className="text-lg sm:text-xl text-[#EDE6DE]/80 font-normal leading-relaxed max-w-2xl mx-auto lg:mx-0">
              {isEn
                ? "Not just another espresso. An artisan morning ritual rooted in Zahlawi warmth and certified +85 SCAA Arabica micro-lots. Built for deep focus, inspiring talks, and memorable sips along the Boulevard."
                : "مش بس فنجان قهوة.. هيدي طقوس صباح زحلاوي دافي، ونكهة بن أرابيكا مختصة تستاهل مشوارك ع البوليفار. بنجمع كرم الضيافة البقاعية مع أدق معايير التحضير اليدوي."}
            </p>

            {/* CTAs */}
            <div className="pt-2 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
              <a
                href="#menu"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-8 py-4 rounded-xl bg-gradient-to-r from-[#C98A4C] to-[#A85A38] text-[#120E0B] font-extrabold text-base shadow-xl shadow-[#C98A4C]/25 hover:shadow-[#C98A4C]/40 hover:scale-[1.02] active:scale-[0.98] transition-all group"
              >
                <Coffee className="w-5 h-5 stroke-[2.5]" />
                <span>{isEn ? 'Explore Menu & Prices' : 'تصفح المنيو والأسعار'}</span>
                <ArrowRight className={`w-4 h-4 transition-transform group-hover:translate-x-1 ${!isEn && 'rotate-180'}`} />
              </a>

              <a
                href="https://wa.me/96170889911?text=Hello%20ZahLatté,%20I%20would%20like%20to%20place%20an%20order%20or%20reserve%20a%20table"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-6 py-4 rounded-xl bg-[#1E1712] hover:bg-[#2A2018] text-[#EDE6DE] font-semibold text-base border border-[#C98A4C]/40 hover:border-[#25D366]/60 hover:text-[#25D366] transition-all"
              >
                <MessageCircle className="w-5 h-5 text-[#25D366]" />
                <span>{isEn ? 'Order via WhatsApp' : 'طلب فوري ع الواتساب'}</span>
              </a>
            </div>

            {/* Proof Metrics */}
            <div className="pt-6 grid grid-cols-2 sm:grid-cols-4 gap-4 border-t border-[#2A2018] text-center lg:text-left">
              <div>
                <span className="block text-2xl font-black text-[#C98A4C]">+85 SCAA</span>
                <span className="text-xs text-[#EDE6DE]/60">{isEn ? 'Specialty Arabica' : 'بن أرابيكا مختص'}</span>
              </div>
              <div>
                <span className="block text-2xl font-black text-[#EDE6DE]">18-Hour</span>
                <span className="text-xs text-[#EDE6DE]/60">{isEn ? 'Slow Cold Brew' : 'تنقيع كولد برو بطيء'}</span>
              </div>
              <div>
                <span className="block text-2xl font-black text-[#C98A4C]">300 Mbps</span>
                <span className="text-xs text-[#EDE6DE]/60">{isEn ? 'Fiber Study Wi-Fi' : 'إنترنت فايبر للدراسة'}</span>
              </div>
              <div>
                <span className="block text-2xl font-black text-[#EDE6DE]">7:30 AM</span>
                <span className="text-xs text-[#EDE6DE]/60">{isEn ? 'Daily Morning Brew' : 'استقبال الصباح الباكر'}</span>
              </div>
            </div>

          </div>

          {/* Hero Visual Showcase with Official ZahLatté Emblem */}
          <div className="lg:col-span-5 relative flex justify-center">
            
            {/* Visual Frame */}
            <div className="relative w-full max-w-md aspect-[4/5] rounded-3xl overflow-hidden shadow-2xl border-2 border-[#C98A4C]/30 group">
              <img
                src="/src/assets/images/hero_zahlelatte_ambiance_1790586154099.jpg"
                alt="ZahLatté Coffee Ambiance in Zahle"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#120E0B] via-transparent to-black/30" />

              {/* Floating Official Brand Emblem Badge */}
              <div className="absolute top-5 left-5 z-20">
                <div className="relative w-28 h-28 sm:w-32 sm:h-32 rounded-full overflow-hidden shadow-2xl border-4 border-[#C98A4C] bg-[#FAF6F0] p-1 animate-pulse hover:animate-none hover:scale-105 transition-transform">
                  <ZahlatteLogo size="custom" className="w-full h-full" showTagline={true} />
                </div>
              </div>

              {/* Bottom Card Overlay on Image */}
              <div className="absolute bottom-5 inset-x-5 p-4 rounded-2xl bg-[#120E0B]/90 backdrop-blur-md border border-[#C98A4C]/30 space-y-1">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-mono uppercase tracking-wider text-[#C98A4C] flex items-center gap-1.5">
                    <Sparkles className="w-3.5 h-3.5" />
                    {isEn ? 'Signature Cup' : 'المشروب الأيقوني'}
                  </span>
                  <span className="text-xs font-mono font-bold text-[#EDE6DE] bg-[#A85A38]/30 px-2 py-0.5 rounded border border-[#A85A38]/40">
                    $4.50
                  </span>
                </div>
                <h4 className="text-base font-bold text-[#EDE6DE]">
                  {isEn ? 'Pistachio Rose ZahLatté' : 'ZahLatté الفستق والورد'}
                </h4>
                <p className="text-xs text-[#EDE6DE]/70 line-clamp-2">
                  {isEn
                    ? 'Double espresso, steamed velvety milk, roasted Aleppo pistachio cream, and authentic Zahlawi distilled rose water.'
                    : 'إسبريسو مزدوج، حليب مخملي، معجون فستق حلبي محمص، ورشة ماء ورد زحلاوي مقطر.'}
                </p>
              </div>
            </div>

            {/* Secondary Floating Taste Card */}
            <div className="hidden sm:flex absolute -bottom-6 -left-6 p-4 rounded-2xl bg-[#1E1712] border border-[#2A2018] shadow-2xl items-center gap-3.5 z-20 max-w-xs">
              <div className="w-12 h-12 rounded-xl overflow-hidden flex-shrink-0 border border-[#C98A4C]/40">
                <img
                  src="/src/assets/images/specialty_signature_latte_1790586167278.jpg"
                  alt="Iced Signature Latte"
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="text-xs">
                <p className="font-bold text-[#EDE6DE]">
                  {isEn ? 'Slow-Cold Brew' : 'كولد برو نسيم البردوني'}
                </p>
                <p className="text-[#C98A4C] font-mono">18h Cold Steeped · Citrus & Cocoa</p>
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};
