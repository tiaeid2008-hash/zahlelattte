import React from 'react';
import { Star, Coffee } from 'lucide-react';
import { TESTIMONIALS } from '../data/zahlelatteData';
import { Language } from '../types/cafe';

interface TestimonialsSectionProps {
  lang: Language;
}

export const TestimonialsSection: React.FC<TestimonialsSectionProps> = ({ lang }) => {
  return (
    <section id="testimonials" className="py-24 bg-[#120E0B] border-b border-[#2C231C]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="flex items-center justify-center gap-2 text-xs font-semibold text-[#C98A4C] mb-3">
            <span>{lang === 'en' ? 'Authentic Feedback' : 'شهادات حقيقية'}</span>
            <span aria-hidden="true">·</span>
            <span>{lang === 'en' ? 'Zahle Community & Guests' : 'أهل زحلة وزوارها'}</span>
            <span aria-hidden="true">·</span>
            <span>{lang === 'en' ? 'Craft Coffee Culture' : 'مجتمع القهوة'}</span>
          </div>

          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#EDE6DE] tracking-tight mb-4">
            {lang === 'en'
              ? 'What People in Zahle Are Saying About Their Cup'
              : 'شو عم يقولوا أهل زحلة عن فنجانهم معنا؟'}
          </h2>
          <p className="text-base text-[#B3A496] leading-relaxed">
            {lang === 'en'
              ? 'Your trust and conversations fuel our morning dials. Real experiences from daily regulars—architects, medical students, and athletes who make Zahlelatte their creative sanctuary.'
              : 'محبتكم وثقتكم هي أكبر فخر إلنا. تجارب صادقة من زبائننا اليوميين من طلاب، مهندسين، ورياضيين بيعتبروا Zahlelatte بيتهم التاني.'}
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {TESTIMONIALS.map((t) => {
            const name = lang === 'en' ? t.nameEn : t.name;
            const role = lang === 'en' ? t.roleEn : t.role;
            const neighborhood = lang === 'en' ? t.neighborhoodEn : t.neighborhood;
            const comment = lang === 'en' ? t.commentEn : t.comment;
            const favoriteDrink = lang === 'en' ? t.favoriteDrinkEn : t.favoriteDrink;

            return (
              <div
                key={t.id}
                className="bg-[#19130F] border border-[#2D2118] hover:border-[#4B3728] rounded-2xl p-7 flex flex-col justify-between transition-all duration-200 shadow-sm hover:shadow-md"
              >
                <div>
                  {/* Rating stars */}
                  <div className="flex items-center gap-1 mb-4">
                    {[...Array(t.rating)].map((_, i) => (
                      <Star
                        key={i}
                        className="w-4 h-4 fill-[#C98A4C] text-[#C98A4C]"
                      />
                    ))}
                  </div>

                  {/* Comment quote */}
                  <p className="text-sm text-[#EDE6DE] leading-relaxed mb-6">
                    “{comment}”
                  </p>
                </div>

                {/* Author & Drink Attribution */}
                <div className="border-t border-[#261C15] pt-4 mt-auto">
                  <div className="flex items-center gap-3 mb-2">
                    <div className="w-10 h-10 rounded-full bg-[#2B1F17] border border-[#402F23] flex items-center justify-center text-xs font-bold text-[#C98A4C] shrink-0 font-mono">
                      {t.avatarText}
                    </div>
                    <div>
                      <h4 className="text-sm font-bold text-[#EDE6DE]">{name}</h4>
                      <p className="text-[11px] text-[#A8988B]">{role}</p>
                      <p className="text-[10px] text-[#7A695B]">{neighborhood}</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-1.5 text-xs text-[#C98A4C] bg-[#221812] px-3 py-1.5 rounded-lg border border-[#302319] mt-3">
                    <Coffee className="w-3.5 h-3.5 shrink-0" />
                    <span className="text-[11px]">
                      {lang === 'en' ? 'Favorite Drink:' : 'مشروبه المفضل:'}
                    </span>
                    <span className="text-[11px] font-semibold text-[#EDE6DE]">
                      {favoriteDrink}
                    </span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Local Community Note */}
        <div className="mt-12 text-center">
          <p className="text-xs text-[#8A796C]">
            {lang === 'en' ? (
              <>
                Visited recently? Tag your cup on Instagram with{' '}
                <span className="text-[#C98A4C] font-mono font-semibold">
                  #Zahlelatte_Moments
                </span>{' '}
                to get featured on our feed!
              </>
            ) : (
              <>
                زرتنا قريباً؟ شاركنا صورتك وفنجانك على إنستغرام مع تاغ{' '}
                <span className="text-[#C98A4C] font-mono font-semibold">
                  #Zahlelatte_Moments
                </span>{' '}
                لتظهر في صفحتنا!
              </>
            )}
          </p>
        </div>
      </div>
    </section>
  );
};
