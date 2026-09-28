import React from 'react';
import { MapPin, Clock, Phone, MessageCircle, Instagram, Navigation } from 'lucide-react';
import { CONTACT_INFO, UI_STRINGS } from '../data/zahlelatteData';
import { Language } from '../types/cafe';

interface LocationSectionProps {
  lang: Language;
}

export const LocationSection: React.FC<LocationSectionProps> = ({ lang }) => {
  const t = UI_STRINGS[lang];

  return (
    <section id="location" className="py-24 bg-[#17120E] border-b border-[#2C231C]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="flex items-center justify-center gap-2 text-xs font-semibold text-[#C98A4C] mb-3">
            <span>{lang === 'en' ? 'Easy Access' : 'عينك ع الطريق'}</span>
            <span aria-hidden="true">·</span>
            <span>{lang === 'en' ? 'Heart of Zahle' : 'بقلب زحلة'}</span>
            <span aria-hidden="true">·</span>
            <span>{lang === 'en' ? 'Warmly Welcoming' : 'جاهزين نستقبلك'}</span>
          </div>

          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#EDE6DE] tracking-tight mb-4">
            {t.locationHeading}
          </h2>
          <p className="text-base text-[#B3A496] leading-relaxed">
            {t.locationSub}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          {/* Contact Details Card (7 Cols) */}
          <div className="lg:col-span-7 bg-[#1F1712] border border-[#34271E] rounded-3xl p-6 sm:p-10 flex flex-col justify-between">
            <div className="space-y-6">
              {/* Live status badge */}
              <div className="flex items-center justify-between pb-6 border-b border-[#2D2118]">
                <div className="flex items-center gap-2">
                  <span className="relative flex h-3 w-3">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#25D366] opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-3 w-3 bg-[#25D366]"></span>
                  </span>
                  <span className="text-xs font-bold text-[#EDE6DE]">
                    {t.openStatus}
                  </span>
                </div>
                <span className="text-xs text-[#8A796C]">
                  {lang === 'en' ? 'Zahle, Bekaa, Lebanon' : 'زحلة، لبنان'}
                </span>
              </div>

              {/* Address */}
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-[#281E17] border border-[#3E2F23] flex items-center justify-center text-[#C98A4C] shrink-0 mt-1">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-sm font-bold text-[#EDE6DE] mb-1">
                    {lang === 'en' ? 'Precise Address' : 'العنوان الدقيق'}
                  </h3>
                  <p className="text-sm text-[#C8BCB0] leading-relaxed">
                    {lang === 'en' ? CONTACT_INFO.addressEn : CONTACT_INFO.addressAr}
                  </p>
                  <p className="text-xs font-mono text-[#8A796C] mt-1">
                    {lang === 'en' ? CONTACT_INFO.addressAr : CONTACT_INFO.addressEn}
                  </p>
                </div>
              </div>

              {/* Hours */}
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-[#281E17] border border-[#3E2F23] flex items-center justify-center text-[#C98A4C] shrink-0 mt-1">
                  <Clock className="w-5 h-5" />
                </div>
                <div className="w-full">
                  <h3 className="text-sm font-bold text-[#EDE6DE] mb-1">
                    {t.workingHours}
                  </h3>
                  <div className="space-y-1 text-sm text-[#C8BCB0]">
                    <div className="flex justify-between py-1 border-b border-[#2A1F18]/50">
                      <span>{lang === 'en' ? 'Monday - Saturday:' : 'الإثنين إلى السبت:'}</span>
                      <span className="font-mono tabular-nums text-[#EDE6DE]">
                        7:30 AM – 11:30 PM
                      </span>
                    </div>
                    <div className="flex justify-between py-1">
                      <span>{lang === 'en' ? 'Sunday:' : 'الأحد:'}</span>
                      <span className="font-mono tabular-nums text-[#EDE6DE]">
                        8:00 AM – 11:00 PM
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Phone and WhatsApp */}
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-[#281E17] border border-[#3E2F23] flex items-center justify-center text-[#C98A4C] shrink-0 mt-1">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-sm font-bold text-[#EDE6DE] mb-1">
                    {lang === 'en' ? 'Contact & Inquiries' : 'أرقام التواصل والطلبات'}
                  </h3>
                  <p className="text-sm text-[#C8BCB0]">
                    {lang === 'en' ? 'Direct Phone: ' : 'الهاتف المباشر: '}
                    <a
                      href={`tel:${CONTACT_INFO.phone}`}
                      className="font-mono text-[#EDE6DE] hover:text-[#C98A4C] transition-colors"
                    >
                      {CONTACT_INFO.phone}
                    </a>
                  </p>
                  <p className="text-sm text-[#C8BCB0] mt-1">
                    {lang === 'en' ? 'Fast WhatsApp: ' : 'الواتساب السريع: '}
                    <a
                      href={`https://wa.me/${CONTACT_INFO.whatsappRaw}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-mono text-[#25D366] hover:underline"
                    >
                      {CONTACT_INFO.whatsapp}
                    </a>
                  </p>
                </div>
              </div>
            </div>

            {/* Quick Action Buttons */}
            <div className="pt-8 mt-6 border-t border-[#2D2118] flex flex-wrap gap-3">
              <a
                href={`https://wa.me/${CONTACT_INFO.whatsappRaw}?text=${encodeURIComponent(
                  lang === 'en'
                    ? 'Hello Zahlelatte! I want to inquire about a table reservation or today’s roast.'
                    : 'مرحبا، بدي احجز طاولة للدراسة أو اسأل عن قهوة اليوم بـ Zahlelatte'
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 min-w-[150px] py-3 px-4 bg-[#25D366] hover:bg-[#20ba59] text-white font-bold text-xs rounded-xl transition-all flex items-center justify-center gap-2 active:scale-95"
              >
                <MessageCircle className="w-4 h-4" />
                <span>{lang === 'en' ? 'Direct WhatsApp Chat' : 'محادثة واتساب مباشرة'}</span>
              </a>

              <a
                href={`tel:${CONTACT_INFO.phone}`}
                className="py-3 px-4 bg-[#2C2119] hover:bg-[#382B21] text-[#EDE6DE] font-semibold text-xs rounded-xl transition-all flex items-center justify-center gap-2 border border-[#433327]"
              >
                <Phone className="w-4 h-4" />
                <span>{lang === 'en' ? 'Call Directly' : 'اتصال هاتفي'}</span>
              </a>

              <a
                href="https://maps.google.com/?q=Zahle+Boulevard+Lebanon"
                target="_blank"
                rel="noopener noreferrer"
                className="py-3 px-4 bg-[#2C2119] hover:bg-[#382B21] text-[#C98A4C] font-semibold text-xs rounded-xl transition-all flex items-center justify-center gap-2 border border-[#433327]"
              >
                <Navigation className="w-4 h-4" />
                <span>{t.getDirections}</span>
              </a>
            </div>
          </div>

          {/* Interactive Map Visual Mockup Card (5 Cols) */}
          <div className="lg:col-span-5 bg-[#1A1410] border border-[#2D2118] rounded-3xl p-6 flex flex-col justify-between overflow-hidden relative">
            <div className="mb-4">
              <div className="flex items-center justify-between mb-2">
                <span className="text-xs font-bold text-[#EDE6DE]">
                  {lang === 'en' ? 'Approximate City Map' : 'خريطة الموقع التقريبية'}
                </span>
                <span className="text-[11px] text-[#A8988B] font-mono">33.8463° N, 35.9020° E</span>
              </div>
              <p className="text-xs text-[#8A796C]">
                {lang === 'en'
                  ? 'Prime boulevard placement, easily walkable with ample adjacent parking.'
                  : 'موقع استراتيجي يسهل الوصول إليه سيراً أو بالسيارة مع مواقف مريحة.'}
              </p>
            </div>

            {/* Stylized Dark Cartographic Visual */}
            <div className="w-full h-64 rounded-2xl bg-[#140E0A] border border-[#302218] relative overflow-hidden flex items-center justify-center group">
              <div className="absolute inset-0 opacity-15 bg-[radial-gradient(#C98A4C_1px,transparent_1px)] [background-size:16px_16px]" />

              {/* Boulevard line illustration */}
              <div className="absolute w-[140%] h-6 bg-[#251A13] rotate-12 -translate-y-2 border-y border-[#3A291E] flex items-center justify-center">
                <span className="text-[9px] text-[#695341] tracking-widest font-mono uppercase">
                  Boulevard Zahle — بوليفار زحلة
                </span>
              </div>

              {/* River line (Berdawni) */}
              <div className="absolute w-full h-3 bg-[#1C2C28] -rotate-45 translate-y-6 border-y border-[#2E4841] opacity-70">
                <span className="text-[8px] text-[#4E7A6E] block pr-4">
                  {lang === 'en' ? 'Berdawni River' : 'نهر البردوني'}
                </span>
              </div>

              {/* Animated Pin */}
              <div className="relative z-10 flex flex-col items-center">
                <div className="w-10 h-10 rounded-full bg-[#C98A4C] text-[#120E0B] flex items-center justify-center shadow-lg shadow-[#C98A4C]/40 animate-pulse">
                  <MapPin className="w-6 h-6" />
                </div>
                <div className="mt-2 bg-[#1C1510] border border-[#C98A4C] px-3 py-1 rounded-lg text-xs font-bold text-[#EDE6DE] shadow-xl">
                  Zahlelatte Cafe ☕
                </div>
              </div>

              {/* Overlay clickable prompt */}
              <a
                href="https://maps.google.com/?q=Zahle+Boulevard+Lebanon"
                target="_blank"
                rel="noopener noreferrer"
                className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center text-xs font-bold text-white backdrop-blur-[2px]"
              >
                {lang === 'en' ? 'Open in Google Maps' : 'فتح في خرائط Google'}
              </a>
            </div>

            {/* Social channels */}
            <div className="mt-6 pt-4 border-t border-[#261C15] flex items-center justify-between text-xs text-[#C8BCB0]">
              <span>{lang === 'en' ? 'Follow daily stories:' : 'تابعنا وشوف ستورياتنا:'}</span>
              <div className="flex items-center gap-3">
                <a
                  href={`https://instagram.com/${CONTACT_INFO.instagram.replace('@', '')}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1 text-[#EDE6DE] hover:text-[#C98A4C] transition-colors"
                >
                  <Instagram className="w-4 h-4 text-[#E4405F]" />
                  <span className="font-mono">{CONTACT_INFO.instagram}</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
