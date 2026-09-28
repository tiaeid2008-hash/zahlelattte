import React from 'react';
import { Bean, Laptop, HeartHandshake, CheckCircle2 } from 'lucide-react';
import { VALUE_PILLARS, INTERIOR_IMAGE } from '../data/zahlelatteData';
import { Language } from '../types/cafe';

interface WhyUsSectionProps {
  lang: Language;
}

export const WhyUsSection: React.FC<WhyUsSectionProps> = ({ lang }) => {
  return (
    <section id="why-us" className="py-24 bg-[#120E0B] border-b border-[#2C231C]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="flex items-center justify-center gap-2 text-xs font-semibold text-[#C98A4C] mb-3">
            <span>{lang === 'en' ? 'Spatial Atmosphere' : 'روح المكان'}</span>
            <span aria-hidden="true">·</span>
            <span>{lang === 'en' ? 'Productive Sanctuary' : 'طاقة إنتاجية'}</span>
            <span aria-hidden="true">·</span>
            <span>{lang === 'en' ? 'Zahlawi Heritage' : 'أصالة زحلاوية'}</span>
          </div>

          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#EDE6DE] tracking-tight mb-4 text-balance">
            {lang === 'en'
              ? 'Why Your Cup at Zahlelatte Holds Real Meaning'
              : 'ليش فنجانك بـ Zahlelatte إلو قيمة تانية؟'}
          </h2>
          <p className="text-base text-[#B3A496] leading-relaxed text-balance">
            {lang === 'en'
              ? 'It is no coincidence that we became Zahle’s favorite craft coffee house. We designed every nook, power socket, and roast profile to fuel your intellect and host genuine conversations.'
              : 'مش صدفة نكون وجهة القهوة المفضلة بزحلة. صممنا كل زاوية وكل وصفة لتلبي شغفك بالبن الصافي وتكون ملاذك اليومي سواء للإنتاجية أو لحديث صادق مع رفيق.'}
          </p>
        </div>

        {/* 3 Core Value Pillars */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {VALUE_PILLARS.map((pillar, idx) => {
            const icons = [Bean, Laptop, HeartHandshake];
            const Icon = icons[idx % icons.length];
            const title = lang === 'en' ? pillar.titleEn : pillar.title;
            const subtitle = lang === 'en' ? pillar.subtitleEn : pillar.subtitle;
            const description = lang === 'en' ? pillar.descriptionEn : pillar.description;
            const metricLabel = lang === 'en' ? pillar.metricLabelEn : pillar.metricLabel;

            return (
              <div
                key={pillar.id}
                className="bg-[#1A1410] border border-[#2D2118] hover:border-[#4B3728] rounded-2xl p-8 transition-all duration-200 flex flex-col justify-between group"
              >
                <div>
                  <div className="w-12 h-12 rounded-xl bg-[#261C15] group-hover:bg-[#C98A4C] border border-[#3C2D22] flex items-center justify-center text-[#C98A4C] group-hover:text-[#120E0B] transition-colors mb-6 shadow-sm">
                    <Icon className="w-6 h-6" />
                  </div>

                  <p className="text-xs font-mono text-[#C98A4C] mb-1">
                    0{idx + 1}. {subtitle}
                  </p>
                  <h3 className="text-xl font-bold text-[#EDE6DE] mb-3">
                    {title}
                  </h3>
                  <p className="text-sm text-[#A8988B] leading-relaxed mb-6">
                    {description}
                  </p>
                </div>

                {/* Proof Metric */}
                <div className="border-t border-[#261C15] pt-4 mt-auto">
                  <div className="flex items-baseline justify-between">
                    <span className="text-2xl font-bold text-[#EDE6DE] font-mono tabular-nums">
                      {pillar.metric}
                    </span>
                    <span className="text-xs text-[#8A796C]">
                      {metricLabel}
                    </span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Spatial Presence & Interior Spotlight */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center bg-[#17120E] border border-[#2C231C] rounded-3xl p-6 sm:p-10">
          <div className="lg:col-span-6 space-y-6">
            <div className="flex items-center gap-2 text-xs font-semibold text-[#C98A4C]">
              <span>{lang === 'en' ? 'Community & Workspace' : 'مساحة العمل والمجتمع'}</span>
              <span aria-hidden="true">·</span>
              <span>Work & Chill Haven</span>
            </div>

            <h3 className="text-2xl sm:text-3xl font-bold text-[#EDE6DE] leading-snug">
              {lang === 'en'
                ? 'Your Second Office, Study Retreat, & Social Living Room'
                : 'مكتبك التاني، ومكان لقاءاتك اللي بيكبر القلب'}
            </h3>

            <p className="text-sm sm:text-base text-[#B3A496] leading-relaxed">
              {lang === 'en'
                ? 'You know that critical moment when you need to finish an urgent deadline or prepare for an exam in complete tranquility? At Zahlelatte, we get it: ergonomic chairs for sustained posture, warm low-glare lighting, and individual power outlets at every booth.'
                : 'بتعرف هيديك اللحظة اللي بدك فيها تخلّص شغل مستعجل أو تدرس لامتحان بدون دوشة؟ بـ Zahlelatte بنفهم عليك: مقاعد مصممة للجلوس الطويل، إضاءة ناعمة بتريح العين، وفيش كهرباء عند كل طاولة حتى بطاريتك ما تخذلك أبداً.'}
            </p>

            <ul className="space-y-3 text-sm text-[#C8BCB0]">
              <li className="flex items-center gap-3">
                <CheckCircle2 className="w-4 h-4 text-[#C98A4C] shrink-0" />
                <span>
                  {lang === 'en'
                    ? 'High-speed fiber-optic Wi-Fi complimentary for all guests'
                    : 'إنترنت فايبر أوبتك فائق السرعة مفتوح لجميع الزبائن'}
                </span>
              </li>
              <li className="flex items-center gap-3">
                <CheckCircle2 className="w-4 h-4 text-[#C98A4C] shrink-0" />
                <span>
                  {lang === 'en'
                    ? 'Quiet study alcoves alongside comfortable collaborative booths'
                    : 'طاولات مخصصة للدراسة الفردية وجلسات النقاش الهادئة'}
                </span>
              </li>
              <li className="flex items-center gap-3">
                <CheckCircle2 className="w-4 h-4 text-[#C98A4C] shrink-0" />
                <span>
                  {lang === 'en'
                    ? 'Curated low-fi jazz and ambient coffee acoustic frequencies'
                    : 'موسيقى لوفي جاز ناعمة ومنتقاة لا تشتت التركيز'}
                </span>
              </li>
              <li className="flex items-center gap-3">
                <CheckCircle2 className="w-4 h-4 text-[#C98A4C] shrink-0" />
                <span>
                  {lang === 'en'
                    ? 'Non-dairy milk alternatives (Oat, Almond, Soy, Coconut)'
                    : 'خيارات حليب نباتي خالي من اللاكتوز (شوفان، لوز، صويا)'}
                </span>
              </li>
            </ul>
          </div>

          <div className="lg:col-span-6 relative">
            <div className="aspect-[4/3] rounded-2xl overflow-hidden border border-[#3A2D23] shadow-xl">
              <img
                src={INTERIOR_IMAGE}
                alt="Zahlelatte interior sanctuary"
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover hover:scale-102 transition-transform duration-700"
              />
            </div>
            <div className={`mt-2 ${lang === 'ar' ? 'text-right' : 'text-left'}`}>
              <p className="text-xs text-[#8A796C] font-mono">
                Zahlelatte Workspace & Lounge — Boulevard Zahle
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
