import React from 'react';
import { Heart, Sparkles } from 'lucide-react';
import { Language } from '../types/cafe';
import { ZahlatteLogo } from './ZahlatteLogo';

interface StorySectionProps {
  lang: Language;
}

export const StorySection: React.FC<StorySectionProps> = ({ lang }) => {
  const isEn = lang === 'en';

  return (
    <section id="story" className="py-24 bg-[#16110D] relative overflow-hidden border-t border-[#2A2018]">
      {/* Background Glow */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-[#A85A38]/10 blur-[130px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Visual Side: Cafe Ambiance and Official Crest Breakdown */}
          <div className="lg:col-span-6 relative">
            <div className="relative rounded-3xl overflow-hidden border border-[#C98A4C]/30 shadow-2xl aspect-[4/3] group">
              <img
                src="/src/assets/images/zahle_cafe_interior_1790586178495.jpg"
                alt="ZahLatté Cafe Interior in Zahle"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#120E0B] via-transparent to-black/20" />
            </div>

            {/* Official Brand Crest Spotlight Card */}
            <div className="absolute -bottom-8 -right-4 sm:-right-8 p-5 rounded-2xl bg-[#1E1712]/95 backdrop-blur-md border border-[#C98A4C]/40 shadow-2xl flex items-center gap-4 max-w-sm">
              <div className="w-16 h-16 rounded-full overflow-hidden flex-shrink-0 bg-[#FAF6F0] p-1 border-2 border-[#C98A4C] shadow-lg">
                <ZahlatteLogo size="custom" className="w-full h-full" showTagline={false} />
              </div>
              <div className="space-y-1">
                <span className="text-[11px] font-mono uppercase tracking-wider text-[#C98A4C] flex items-center gap-1 font-bold">
                  <Sparkles className="w-3 h-3" />
                  {isEn ? 'The ZahLatté Crest' : 'شعار وهوية زحلاتيه'}
                </span>
                <p className="text-xs text-[#EDE6DE] font-medium leading-snug">
                  {isEn
                    ? 'Terracotta roofs, mountain slopes, olive leaves, and an honest cup of coffee.'
                    : 'قرميد زحلة، تلال المدينة، أغصان الزيتون، وفنجان قهوة بيشبه قلوب أهلها.'}
                </p>
                <p className="text-[11px] text-[#A85A38] font-serif italic">
                  sip into something beautiful
                </p>
              </div>
            </div>
          </div>

          {/* Copywriting Side */}
          <div className="lg:col-span-6 space-y-6 pt-6 lg:pt-0">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#C98A4C]/10 border border-[#C98A4C]/25 text-[#C98A4C] text-xs font-semibold uppercase tracking-wider">
              <Heart className="w-3.5 h-3.5 fill-[#C98A4C]" />
              <span>{isEn ? 'Our Story & Philosophy' : 'قصتنا ونبض المكان'}</span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#EDE6DE] leading-tight">
              {isEn ? (
                <>
                  Born in <span className="text-[#C98A4C]">Zahle</span>, crafted for true coffee seekers.
                </>
              ) : (
                <>
                  خلقت بقلب <span className="text-[#C98A4C]">زحلة</span>، ونشأت على حب القهوة الحقيقية.
                </>
              )}
            </h2>

            <div className="space-y-4 text-base text-[#EDE6DE]/80 leading-relaxed font-normal">
              <p>
                {isEn
                  ? "ZahLatté was born from a simple conviction: the people of Zahle and the Bekaa deserve a world-class specialty coffee space without losing the heart, humor, and timeless warmth of our hometown."
                  : "بلشت فكرة ZahLatté من يقين صادق: أهل زحلة والبقاع بيستاهلوا مساحة قهوة مختصة بأعلى المعايير العالمية، بدون ما نفقد الضحكة الصادقة والدفا وكرم الضيافة اللي ورثناه عن أهالينا."}
              </p>
              <p>
                {isEn
                  ? "Look at our emblem: the traditional terracotta houses tiered along the hillside, the gentle olive branch, and a cup steaming with passion. Every bean is dialed by weight and ratio, honoring the river breeze and inspiring you to sip into something truly beautiful."
                  : "تأمّلوا شعارنا: بيوت زحلة التراثية بالقرميد الأحمر على سفح التلة، غصن الزيتون، وفنجان القهوة البخار طالع منه بحب. كل غرام بن بنوزنه بدقة حتى نوصل لطعم يعكس روح البوليفار ويخليك تعيش جمال اللحظة."}
              </p>
            </div>

            {/* Quote Box */}
            <div className="p-4 rounded-xl bg-[#1E1712] border-l-4 border-[#C98A4C] text-sm text-[#EDE6DE] italic font-serif">
              {isEn
                ? '“To sit in Zahle with a dialed cup in hand is not just an order—it is a timeless celebration of life.”'
                : '«القعدة بزحلة مع فنجان قهوة موزون ع الميلي مش مجرد طلبية.. هيدي احتفال بالحياة وبأهل البقاع الطيبين.»'}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
