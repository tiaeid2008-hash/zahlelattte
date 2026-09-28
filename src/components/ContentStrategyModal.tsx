import React, { useState } from 'react';
import { X, Copy, Check, Palette, Target, FileText, Sparkles, MessageSquare, ShieldCheck } from 'lucide-react';
import { COLOR_PALETTE, CONTENT_STRATEGY_DOC } from '../data/zahlelatteData';
import { Language } from '../types/cafe';
import { ZahlatteLogo } from './ZahlatteLogo';

interface ContentStrategyModalProps {
  isOpen: boolean;
  onClose: () => void;
  lang: Language;
}

export const ContentStrategyModal: React.FC<ContentStrategyModalProps> = ({
  isOpen,
  onClose,
  lang,
}) => {
  const [activeTab, setActiveTab] = useState<'structure' | 'crest' | 'palette' | 'personas' | 'tone'>('structure');
  const [copiedKey, setCopiedKey] = useState<string | null>(null);

  if (!isOpen) return null;

  const copyToClipboard = (text: string, key: string) => {
    navigator.clipboard.writeText(text);
    setCopiedKey(key);
    setTimeout(() => setCopiedKey(null), 1500);
  };

  const sectionsCopyEn = [
    {
      id: 'sec-hero',
      title: '1. Homepage (Hero & Hook)',
      role: 'Instantly captivate the visitor, connect specialty craft with Zahle pride, and drive immediate action.',
      elements: [
        {
          label: 'Catchy Slogans',
          text: `Primary: "From the Berdawni River breeze to your dialed cup.. Coffee in Zahle has a whole new soul!"
Alternative 1: "Zahle, Bride of the Bekaa.. and your finest dialed cup."
Alternative 2: "Between the canyon breeze of Zahle and artisan extraction.. a story lived in every sip."`,
        },
        {
          label: 'Call-to-Action Buttons (CTAs)',
          text: `Primary CTA: "Explore the Menu & Prices"
Secondary CTA: "Instant WhatsApp Order (+961 70 889 911)"
Directional CTA: "Reserve Your Boulevard Table"`,
        },
        {
          label: 'Short Emotional Story Hook (Sub-headline)',
          text: `"Not just another espresso. An artisan morning ritual rooted in Zahlawi warmth and certified +85 SCAA Arabica micro-lots. Built for deep focus, inspiring talks, and memorable sips."`,
        },
      ],
    },
    {
      id: 'sec-menu',
      title: '2. Menu Highlights & Sensory Copywriting',
      role: 'Showcase exclusive signature drinks and highlight tasting profiles that awaken the senses.',
      elements: [
        {
          label: 'Menu Architecture & Categories',
          text: `1. Exclusive Zahlelatte Signatures (Pistachio Rose Latte, Berdawni Breeze Cold Brew, Terracotta Salted Cortado)
2. Specialty Hot Coffee (Ethiopian Yirgacheffe V60, Artisan Flat White, Double Single Origin, Lebanese Copper Briki)
3. Iced & Cold Brew (Iced Spanish Latte, Freddo Espresso Shakerato, Cascara Berry & Mint Sparkler)
4. Artisan Pastries & Sweets (Taanayel Zaatar & Feta Croissant, Valrhona Dark Sea Salt Cookie, Bekaa Honey & Walnut Slice)`,
        },
        {
          label: 'Sensory Copywriting Samples',
          text: `Pistachio Rose Zahlelatte:
"Our iconic signature creation: double origin espresso layered with velvety micro-foam, premium roasted Aleppo pistachio purée, and a delicate spritz of local Zahlawi distilled rose water recalling Zahle's historic gardens and famous ice cream."

Berdawni Breeze Cold Brew:
"Slow-steeped for 18 hours at low temperatures, infused with subtle hints of sun-ripened Bekaa valley orange peel and aromatic green cardamom."`,
        },
      ],
    },
    {
      id: 'sec-why',
      title: '3. Why Zahlelatte? (Why Us / Our Vibe)',
      role: 'Build trust by articulating the 3 uncompromising pillars of product, space, and hospitality.',
      elements: [
        {
          label: 'The Three Core Pillars',
          text: `1. Specialty Beans Roasted Weekly (+85 SCAA):
"We never compromise on roast precision. Sourced directly from sustainable micro-farms in Ethiopia, Colombia, and Guatemala, roasted weekly in small batches for aromatic clarity."

2. Serene Work & Study Sanctuary (300 Mbps Fiber):
"Carefully engineered for long productive sessions: natural acoustic damping, ergonomic walnut seating, dedicated power outlets at every booth, and uninterrupted fiber Wi-Fi."

3. Genuine Zahlawi Hospitality:
"In Zahle, generosity is not a policy—it is our identity. Our baristas remember your preferred cup, greet you by name, and make you feel right at home."`,
        },
      ],
    },
    {
      id: 'sec-test',
      title: '4. Customer Testimonials (Social Proof)',
      role: 'Authentic words from recognized local archetypes (architects, students, athletes).',
      elements: [
        {
          label: 'Verified Customer Quotes',
          text: `Rami Samaha (Architect & Studio Founder - Haouch El-Oumara, Zahle):
"As an architect, spatial quality and attention to detail mean everything. Zahlelatte balances heritage Zahle stone arches with acoustic comfort and the finest flat white in the Bekaa."

Celine Khoury (Medical Student, USJ Zahle):
"Exam seasons are strictly powered by Zahlelatte corner tables and the Ethiopian V60. The tranquil ambiance and the family-like staff give me pure focus I cannot find anywhere else."

Elie Haddad (Trail Runner & Bekaa Eco-Advocate):
"After my morning run down Zahle Boulevard, stopping for the Berdawni Breeze cold brew is my non-negotiable ritual. Crisp, revitalizing, and truly authentic to our city."`,
        },
      ],
    },
    {
      id: 'sec-contact',
      title: '5. Contact & Location Details',
      role: 'Clear conversion path with exact address, opening hours, WhatsApp, and Google Map directions.',
      elements: [
        {
          label: 'Operational Data',
          text: `📍 Location: Zahle Boulevard, near Berdawni Bridge - Al-Karam Center, Ground Floor.
⏰ Opening Hours: Monday - Saturday: 7:30 AM – 11:30 PM | Sunday: 8:00 AM – 11:00 PM
📞 Direct Phone: +961 8 800 123
💬 WhatsApp Quick Order: +961 70 889 911
📸 Instagram: @zahlelatte.lb
🎵 TikTok: @zahlelatte.coffee`,
        },
      ],
    },
  ];

  const sectionsCopyAr = [
    {
      id: 'sec-hero',
      title: '1. الصفحة الرئيسية (Homepage)',
      role: 'جذب الزائر فورياً، ربط القهوة بهوية زحلة وتفعيل قرار التجربة.',
      elements: [
        {
          label: 'الشعارات الجذابة (Catchy Slogans)',
          text: `الرئيسي: "من نسيم البردوني لفنجانك الموزون.. القهوة بزحلة إلها طعم تاني!"
البديل الأول: "زحلة عروس البقاع.. وفنجانك عزّ المزاج"
البديل الثاني: "بين وادي زحلة وعبق القهوة المختصة.. حكاية بتنعاش بكل رشفة"`,
        },
        {
          label: 'أزرار اتخاذ الإجراء (CTAs)',
          text: `الرئيسي: "تصفح المنيو والأسعار"
الثانوي: "طلب فوري ع الواتساب (+961 70 889 911)"
التوجيه: "احجز طاولتك بالبوليفار"`,
        },
        {
          label: 'النبذة القصيرة والمؤثرة (Short Story)',
          text: `"مش بس فنجان قهوة.. هيدي طقوس صباح زحلاوي دافي، ونكهة بن أرابيكا مختصة تستاهل مشوارك ع البوليفار. بنجمع كرم الضيافة البقاعية مع أدق معايير التحضير اليدوي."`,
        },
      ],
    },
    {
      id: 'sec-menu',
      title: '2. منيو القهوة والمشروبات (Menu Highlights)',
      role: 'إبراز المشروبات التوقيعية الحصرية وتفاصيل النكهات لفتح الشهية.',
      elements: [
        {
          label: 'فئات المنيو المقترحة',
          text: `1. مشروبات Zahlelatte التوقيعية (Signatures)
2. القهوة الساخنة المختصة (Single-Origin V60, Flat White, Cortado, الركوة الزحلاوية)
3. المشروبات المثلجة والمنعشة (Iced Spanish Latte, Berdawni Cold Brew, Freddo Espresso)
4. المخبوزات والحلويات الخفيفة (كرواسان زعتر تعنايل وفيتا، كوكيز الشوكولا الداكنة بملح البحر)`,
        },
        {
          label: 'نموذج وصف شهي (Sensory Copywriting)',
          text: `Zahlelatte الفستق والورد:
"طبقات إسبريسو مزدوج مع حليب مخملي، معجون فستق حلبي فاخر، ورشة ماء ورد زحلاوي مقطر يذكرك بنسيم جناين زحلة وبوظتها التراثية."

كولد برو نسيم البردوني:
"قهوة منقوعة بالماء البارد لمدة 18 ساعة على درجات حرارة منخفضة، مع لمسة ناعمة من قشر البرتقال البقاعي والهيل الأخضر المنعش."`,
        },
      ],
    },
    {
      id: 'sec-why',
      title: '3. لماذا Zahlelatte؟ (Why Us / Our Vibe)',
      role: 'بناء الثقة وإبراز التفوق النوعي في المنتج والخدمة وبيئة المكان.',
      elements: [
        {
          label: 'الركائز الثلاث للعلامة',
          text: `1. بن مختص ومحمص أسبوعياً (+85 SCAA):
"ما بنساوم بنقاء الحبة. محاصيلنا مستوردة مباشرة من إثيوبيا وكولومبيا ومحمصة محلياً بجرعات صغيرة للحفاظ على كامل الزيوت العطرية."

2. مساحتك المفضلة للدراسة والعمل (Coworking Oasis):
"إنترنت ألياف بصرية فائق السرعة (300 Mbps)، مقابس كهربائية عند كل مقعد، إضاءة مريحة للعين، وجلسات هادئة تضمن إنتاجيتك وتركيزك."

3. كرم الضيافة وروح زحلة (True Zahlawi Hospitality):
"بزحلة الكرم مش خيار، هيدا طبعنا. الباريستا بيعرف طلبك المفضل وبيرحب فيك بابتسامة صادقة بتعدل نهارك."`,
        },
      ],
    },
    {
      id: 'sec-test',
      title: '4. آراء الزبائن (Testimonials)',
      role: 'تأكيد مجتمعي محلي ينقل أصوات شخصيات زحلاوية معروفة ومتنوعة.',
      elements: [
        {
          label: 'نماذج التقييمات الواقعية',
          text: `م. رامي سماحة (مهندس معماري - حوش الأمراء):
"كمهندس بيهمني الفراغ والتفاصيل. Zahlelatte جمع بين رقي حجر زحلة المعماري والموسيقى الهادئة وأطيب فلات وايت بالبقاع. مكتبي التاني اللي بخلص فيه أهم مخططاتي."

سيلين خوري (طالبة طب - جامعة USJ زحلة):
"فترة الامتحانات ما بتمرق بدون طاولة Zahlelatte والـ V60 الإثيوبي. الهدوء هون مع ريحة القهوة الطازة بتعطيني تركيز ما بلاقيه بمكان تاني. وفوق هيدا المعاملة متل الأهل!"

إيلي حداد (رياضي - وادي العرايش):
"بعد مشوار الركض الصباحي على بوليفار زحلة، محطتي الإلزامية هي كولد برو نسيم البردوني. مشروب منعش وخفيف ببل الريق وبيرجع الطاقة."`,
        },
      ],
    },
    {
      id: 'sec-contact',
      title: '5. تواصل معنا وموقعنا (Contact & Location)',
      role: 'تسهيل الوصول الفعلي، الطلب السريع، والربط بالخرائط وشبكات التواصل.',
      elements: [
        {
          label: 'تفاصيل الموقع وساعات العمل والاتصال',
          text: `📍 العنوان: بوليفار زحلة، قرب جسر البردوني - سنتر الكرم، الطابق الأرضي.
⏰ أوقات العمل: الإثنين - السبت: 7:30 ص – 11:30 م | الأحد: 8:00 ص – 11:00 م
📞 هاتف المحل: +961 8 800 123
💬 واتساب الطلبات السريعة: +961 70 889 911
📸 إنستغرام: @zahlelatte.lb
🎵 تيك توك: @zahlelatte.coffee`,
        },
      ],
    },
  ];

  const sectionsCopy = lang === 'en' ? sectionsCopyEn : sectionsCopyAr;

  return (
    <div className="fixed inset-0 z-50 overflow-hidden bg-black/80 backdrop-blur-md flex items-center justify-center p-3 sm:p-6">
      <div
        className={`w-full max-w-4xl bg-[#17120D] border border-[#3C2E22] rounded-3xl h-[90vh] flex flex-col shadow-2xl overflow-hidden ${
          lang === 'ar' ? 'text-right' : 'text-left'
        }`}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header Modal */}
        <div className="p-6 border-b border-[#2C2117] flex items-center justify-between bg-[#1D1610]">
          <div className="flex items-center gap-3">
            <div className="w-11 h-11 rounded-full overflow-hidden bg-[#FAF6F0] p-0.5 border-2 border-[#C98A4C] shadow-lg flex-shrink-0">
              <ZahlatteLogo size="custom" className="w-full h-full" showTagline={false} />
            </div>
            <div>
              <h2 className="text-xl font-bold text-[#EDE6DE] flex items-center gap-2">
                <span>{lang === 'en' ? 'Content Strategy & Brand Identity' : 'دليل هيكل المحتوى والهوية التسويقية'}</span>
                <span className="text-[11px] text-[#A85A38] font-serif italic hidden sm:inline-block">sip into something beautiful</span>
              </h2>
              <p className="text-xs text-[#A8988B]">
                ZahLatté Specialty Coffee House — Zahle Boulevard, Lebanon
              </p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-2 text-[#A8988B] hover:text-[#EDE6DE] hover:bg-[#2A1F16] rounded-xl transition-colors"
            aria-label="Close"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Tab Controls */}
        <div className="flex items-center gap-2 p-3 bg-[#130E09] border-b border-[#261C14] overflow-x-auto no-scrollbar">
          <button
            onClick={() => setActiveTab('structure')}
            className={`flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-semibold whitespace-nowrap transition-all ${
              activeTab === 'structure'
                ? 'bg-[#C98A4C] text-[#120E0B]'
                : 'text-[#C8BCB0] hover:bg-[#1F1710]'
            }`}
          >
            <FileText className="w-4 h-4" />
            <span>{lang === 'en' ? 'Content Structure & Copywriting' : 'هيكل الأقسام والنصوص'}</span>
          </button>

          <button
            onClick={() => setActiveTab('crest')}
            className={`flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-semibold whitespace-nowrap transition-all ${
              activeTab === 'crest'
                ? 'bg-[#C98A4C] text-[#120E0B]'
                : 'text-[#C8BCB0] hover:bg-[#1F1710]'
            }`}
          >
            <ShieldCheck className="w-4 h-4" />
            <span>{lang === 'en' ? 'Brand Emblem & Logo (ZahLatté)' : 'شعار وهوية ZahLatté'}</span>
          </button>

          <button
            onClick={() => setActiveTab('palette')}
            className={`flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-semibold whitespace-nowrap transition-all ${
              activeTab === 'palette'
                ? 'bg-[#C98A4C] text-[#120E0B]'
                : 'text-[#C8BCB0] hover:bg-[#1F1710]'
            }`}
          >
            <Palette className="w-4 h-4" />
            <span>{lang === 'en' ? 'Color Palette & Atmosphere (60:30:10)' : 'لوحة الألوان والأجواء البصرية'}</span>
          </button>

          <button
            onClick={() => setActiveTab('personas')}
            className={`flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-semibold whitespace-nowrap transition-all ${
              activeTab === 'personas'
                ? 'bg-[#C98A4C] text-[#120E0B]'
                : 'text-[#C8BCB0] hover:bg-[#1F1710]'
            }`}
          >
            <Target className="w-4 h-4" />
            <span>{lang === 'en' ? 'Target Audiences' : 'شرائح الزبائن المستهدفة'}</span>
          </button>

          <button
            onClick={() => setActiveTab('tone')}
            className={`flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-semibold whitespace-nowrap transition-all ${
              activeTab === 'tone'
                ? 'bg-[#C98A4C] text-[#120E0B]'
                : 'text-[#C8BCB0] hover:bg-[#1F1710]'
            }`}
          >
            <MessageSquare className="w-4 h-4" />
            <span>{lang === 'en' ? 'Tone of Voice' : 'نبرة الصوت واللهجة'}</span>
          </button>
        </div>

        {/* Scrollable Content Body */}
        <div className="flex-1 overflow-y-auto p-6 space-y-8 bg-[#150F0B]">
          {/* TAB 1: STRUCTURE & COPY */}
          {activeTab === 'structure' && (
            <div className="space-y-6">
              <div className="p-4 rounded-2xl bg-[#1F1712] border border-[#34271E] text-xs text-[#B3A496]">
                {lang === 'en'
                  ? '💡 This copy was crafted to blend warm Zahlawi hospitality and local cultural resonance with world-class third-wave specialty coffee standards. Click "Copy" on any snippet to paste directly into your marketing or social campaigns.'
                  : '💡 تم إعداد هذه النصوص لتجمع بين سحر لهجة أهل زحلة المحببة (كرم، شهامة، قعدة رايقة) وبين لغة التسويق الرقمي الحديثة للقهوة المختصة. يمكنك نسخ أي نص مباشرةً للاستخدام في خطتك أو حملاتك.'}
              </div>

              {sectionsCopy.map((sec) => (
                <div
                  key={sec.id}
                  className="bg-[#1C1510] border border-[#2D2118] rounded-2xl p-6"
                >
                  <div className="flex items-center justify-between mb-3 border-b border-[#281D15] pb-3">
                    <div>
                      <h3 className="text-base font-bold text-[#EDE6DE]">
                        {sec.title}
                      </h3>
                      <p className="text-xs text-[#8A796C]">{sec.role}</p>
                    </div>
                  </div>

                  <div className="space-y-4">
                    {sec.elements.map((elem, idx) => {
                      const copyId = `${sec.id}-${idx}`;
                      const isCopied = copiedKey === copyId;
                      return (
                        <div
                          key={idx}
                          className="bg-[#140E0A] border border-[#261C14] rounded-xl p-4"
                        >
                          <div className="flex items-center justify-between mb-2">
                            <span className="text-xs font-bold text-[#C98A4C]">
                              {elem.label}
                            </span>
                            <button
                              onClick={() => copyToClipboard(elem.text, copyId)}
                              className="flex items-center gap-1.5 text-[11px] text-[#A8988B] hover:text-[#EDE6DE] bg-[#221812] px-2.5 py-1 rounded-lg border border-[#34261C] transition-colors"
                            >
                              {isCopied ? (
                                <>
                                  <Check className="w-3 h-3 text-[#25D366]" />
                                  <span className="text-[#25D366]">
                                    {lang === 'en' ? 'Copied' : 'تم النسخ'}
                                  </span>
                                </>
                              ) : (
                                <>
                                  <Copy className="w-3 h-3" />
                                  <span>{lang === 'en' ? 'Copy Text' : 'نسخ النص'}</span>
                                </>
                              )}
                            </button>
                          </div>
                          <pre className="text-xs text-[#EDE6DE] whitespace-pre-wrap font-sans leading-relaxed">
                            {elem.text}
                          </pre>
                        </div>
                      );
                    })}
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* TAB: BRAND EMBLEM & CREST */}
          {activeTab === 'crest' && (
            <div className="space-y-6">
              <div className="p-4 rounded-2xl bg-[#1F1712] border border-[#34271E] text-xs text-[#B3A496]">
                {lang === 'en'
                  ? '🛡️ Official Brand Logo & Symbolism: An emblem connecting the rich architectural soul of Zahle with world-class coffee craftsmanship.'
                  : '🛡️ الشعار الرسمي ورمزيته الثقافية: يجسد الشعار هوية مدينة زحلة المعمارية والتراثية مع شغف القهوة المختصة.'}
              </div>

              {/* Logo Showcase Card */}
              <div className="bg-[#1C1510] border border-[#2D2118] rounded-3xl p-6 sm:p-8 flex flex-col md:flex-row items-center gap-8">
                <div className="w-48 h-48 sm:w-56 sm:h-56 rounded-full overflow-hidden bg-[#FAF6F0] p-1.5 border-4 border-[#C98A4C] shadow-2xl flex-shrink-0">
                  <ZahlatteLogo size="custom" className="w-full h-full" showTagline={true} />
                </div>

                <div className="space-y-4 text-center md:text-left">
                  <div>
                    <span className="text-xs font-mono uppercase tracking-widest text-[#C98A4C] font-semibold">
                      {lang === 'en' ? 'Official Brand Mark' : 'العلامة التجارية الرسمية'}
                    </span>
                    <h3 className="text-3xl font-black text-[#EDE6DE] mt-1">ZahLatté</h3>
                    <p className="text-base text-[#A85A38] font-serif italic font-bold">
                      sip into something beautiful
                    </p>
                  </div>

                  <p className="text-sm text-[#EDE6DE]/80 leading-relaxed">
                    {lang === 'en'
                      ? 'The ZahLatté crest features clean line illustration of the traditional terracotta-roofed houses nested on Zahle’s hillsides, balanced by an organic olive branch on the left and a steaming artisan coffee cup on the right. Below sits the bold, modern geometric typography with the soulful tagline in terracotta script.'
                      : 'يتميز شعار ZahLatté برسم خطي متقن للبيوت ذات القرميد التراثي على تلال زحلة الشهيرة، متوازناً مع غصن زيتون أخضر وفنجان قهوة يتصاعد منه البخار برقة. تعلوها كتابة هندسية واثقة مع الشعار اللفظي المكتوب بلون القرميد.'}
                  </p>

                  <div className="pt-2 flex flex-wrap items-center justify-center md:justify-start gap-3">
                    <span className="text-xs font-mono px-3 py-1.5 rounded-lg bg-[#FAF6F0] text-[#120E0B] font-bold">
                      Cream: #FAF6F0
                    </span>
                    <span className="text-xs font-mono px-3 py-1.5 rounded-lg bg-[#264E4A] text-[#EDE6DE] font-bold">
                      Spruce: #264E4A
                    </span>
                    <span className="text-xs font-mono px-3 py-1.5 rounded-lg bg-[#A85A38] text-[#EDE6DE] font-bold">
                      Terracotta: #A85A38
                    </span>
                  </div>
                </div>
              </div>

              {/* Elements Breakdown Grid */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="bg-[#1C1510] border border-[#2D2118] rounded-2xl p-5 space-y-2">
                  <h4 className="text-sm font-bold text-[#C98A4C] flex items-center gap-2">
                    <span>🏠</span> {lang === 'en' ? 'Zahle Terracotta Houses' : 'بيوت قرميد زحلة'}
                  </h4>
                  <p className="text-xs text-[#EDE6DE]/75 leading-relaxed">
                    {lang === 'en'
                      ? 'Homage to traditional Zahlawi Lebanese architecture, perched upon the sunny rolling hills of the Bekaa Valley.'
                      : 'تحية للهندسة المعمارية الزحلاوية الأصيلة وبيوت القرميد المتراصة على سفوح المدينة المطلة على الوادي.'}
                  </p>
                </div>

                <div className="bg-[#1C1510] border border-[#2D2118] rounded-2xl p-5 space-y-2">
                  <h4 className="text-sm font-bold text-[#C98A4C] flex items-center gap-2">
                    <span>🌿</span> {lang === 'en' ? 'Olive & Laurel Branch' : 'غصن الزيتون والغار'}
                  </h4>
                  <p className="text-xs text-[#EDE6DE]/75 leading-relaxed">
                    {lang === 'en'
                      ? 'Symbol of peace, timeless Mediterranean fertility, and the lush riverbanks of the Berdawni canyon.'
                      : 'رمز السلام، العطاء المتوسطي الأبدي، والطبيعة الخضراء المحيطة بنهر البردوني وجنائن زحلة.'}
                  </p>
                </div>

                <div className="bg-[#1C1510] border border-[#2D2118] rounded-2xl p-5 space-y-2">
                  <h4 className="text-sm font-bold text-[#C98A4C] flex items-center gap-2">
                    <span>☕</span> {lang === 'en' ? 'Steaming Cup & Slogan' : 'الفنجان والشعار اللفظي'}
                  </h4>
                  <p className="text-xs text-[#EDE6DE]/75 leading-relaxed">
                    {lang === 'en'
                      ? 'The heart of our specialty craft and invitation to mindfulness: "sip into something beautiful".'
                      : 'جوهر صناعة القهوة ودعوة للتأمل وتذوق الجمال بكل رشفة صباحية أو مسائية ع البوليفار.'}
                  </p>
                </div>
              </div>
            </div>
          )}

          {/* TAB 2: PALETTE & AMBIANCE */}
          {activeTab === 'palette' && (
            <div className="space-y-6">
              <div className="p-4 rounded-2xl bg-[#1F1712] border border-[#34271E] text-xs text-[#B3A496]">
                {lang === 'en'
                  ? '🎨 Visual color palette disciplined around the 60:30:10 rule, drawing earthy cues from Zahle: terracotta rooftops, Berdawni olive groves, and rich espresso crema.'
                  : '🎨 استراتيجية الألوان مصممة بناءً على قاعدة 60-30-10 وتستلهم عناصرها الطبيعية والتراثية من مدينة زحلة: حجر القرميد، شجر الوادي، وعمق الإسبريسو.'}
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {COLOR_PALETTE.map((c, i) => (
                  <div
                    key={i}
                    className="bg-[#1C1510] border border-[#2D2118] rounded-2xl p-5 flex items-start gap-4"
                  >
                    <div
                      className="w-16 h-16 rounded-xl border border-white/10 shrink-0 shadow-md flex items-end justify-start p-1.5"
                      style={{ backgroundColor: c.hex }}
                    >
                      <span className="text-[10px] font-mono px-1 py-0.5 rounded bg-black/50 text-white backdrop-blur-[2px]">
                        {c.hex}
                      </span>
                    </div>

                    <div className="flex-1">
                      <div className="flex items-center justify-between mb-1">
                        <h4 className="text-sm font-bold text-[#EDE6DE]">
                          {lang === 'en' ? c.name : c.nameAr}{' '}
                          <span className="text-xs text-[#8A796C] font-mono">
                            ({lang === 'en' ? c.nameAr : c.name})
                          </span>
                        </h4>
                        <button
                          onClick={() => copyToClipboard(c.hex, `hex-${i}`)}
                          className="text-[11px] font-mono text-[#C98A4C] hover:underline"
                        >
                          {copiedKey === `hex-${i}`
                            ? (lang === 'en' ? 'Copied!' : 'تم!')
                            : (lang === 'en' ? 'Copy HEX' : 'نسخ الكود')}
                        </button>
                      </div>
                      <p className="text-xs text-[#C98A4C] font-medium mb-1">
                        {lang === 'en' ? c.role : c.roleAr}
                      </p>
                      <p className="text-xs text-[#A8988B] leading-relaxed">
                        {lang === 'en' ? c.usage : c.usageAr}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Visual Ambiance Rules */}
              <div className="bg-[#1A130E] border border-[#2F2117] rounded-2xl p-6">
                <h4 className="text-sm font-bold text-[#EDE6DE] mb-3">
                  {lang === 'en' ? 'Art Direction & Photography Guidelines:' : 'توصيات الإخراج البصري والتصوير للمقهى:'}
                </h4>
                <ul className="space-y-2 text-xs text-[#C8BCB0] leading-relaxed">
                  <li>
                    ☕ <strong>{lang === 'en' ? 'Golden Hour Lighting:' : 'إضاءة دافئة طبيعية:'}</strong>{' '}
                    {lang === 'en'
                      ? 'Capture low morning sunlight washing across arched windows, evoking the warmth of a crisp Bekaa morning.'
                      : 'التركيز على أشعة الشمس التي تدخل من نوافذ المقهى المقوسة، لعكس دفء النهار الزحلاوي.'}
                  </li>
                  <li>
                    🏺 <strong>{lang === 'en' ? 'Tactile Textures:' : 'خامات حقيقية وملموسة:'}</strong>{' '}
                    {lang === 'en'
                      ? 'Solid walnut timbers, heritage Zahle limestone, and custom hand-thrown terracotta ceramic cups stamped with the Zahlelatte crest.'
                      : 'أخشاب الجوز الطبيعية، حجر زحلة القرميدي العريق، وأكواب سيراميك يدوية الصنع.'}
                  </li>
                  <li>
                    🌿 <strong>{lang === 'en' ? 'Bekaa Botanicals:' : 'لمسات الطبيعة البقاعية:'}</strong>{' '}
                    {lang === 'en'
                      ? 'Indoor potted olive trees, dried lavender stems from the valley, and rustic clay planters.'
                      : 'نباتات خضراء داخلية، زهور مجففة، وأواني فخارية تعزز الهوية العريقة.'}
                  </li>
                </ul>
              </div>
            </div>
          )}

          {/* TAB 3: AUDIENCE PERSONAS */}
          {activeTab === 'personas' && (
            <div className="space-y-6">
              <div className="p-4 rounded-2xl bg-[#1F1712] border border-[#34271E] text-xs text-[#B3A496]">
                {lang === 'en'
                  ? '🎯 Mapping distinct customer archetypes in Zahle ensures your social campaigns and seasonal menus resonate with genuine daily needs.'
                  : '🎯 تحديد الشرائح المستهدفة في زحلة يساعد على كتابة محتوى يحاكي احتياجاتهم اليومية بدقة ويعزز ولائهم للمقهى.'}
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {CONTENT_STRATEGY_DOC.targetAudience.map((target, idx) => (
                  <div
                    key={idx}
                    className="bg-[#1C1510] border border-[#2D2118] rounded-2xl p-6 flex flex-col justify-between"
                  >
                    <div>
                      <span className="text-xs font-mono text-[#C98A4C]">
                        {lang === 'en' ? `Segment 0${idx + 1}` : `شريحة رقم 0${idx + 1}`}
                      </span>
                      <h4 className="text-base font-bold text-[#EDE6DE] mt-1 mb-4">
                        {lang === 'en' ? target.segmentEn : target.segmentAr}
                      </h4>

                      <div className="mb-4">
                        <p className="text-xs font-semibold text-[#8A796C] mb-1">
                          {lang === 'en' ? 'Pain Point / Need:' : 'نقطة الألم والاحتياج:'}
                        </p>
                        <p className="text-xs text-[#A8988B] leading-relaxed">
                          {lang === 'en' ? target.painPointEn : target.painPointAr}
                        </p>
                      </div>
                    </div>

                    <div className="border-t border-[#261C15] pt-3">
                      <p className="text-xs font-semibold text-[#C98A4C] mb-1">
                        {lang === 'en' ? 'Zahlelatte Solution:' : 'حل Zahlelatte المقدم:'}
                      </p>
                      <p className="text-xs text-[#EDE6DE] leading-relaxed">
                        {lang === 'en' ? target.solutionEn : target.solutionAr}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* TAB 4: TONE OF VOICE */}
          {activeTab === 'tone' && (
            <div className="space-y-6">
              <div className="bg-[#1C1510] border border-[#2D2118] rounded-2xl p-6">
                <h3 className="text-base font-bold text-[#EDE6DE] mb-3">
                  {lang === 'en' ? 'Tone of Voice Charter' : 'ميثاق نبرة الصوت لـ Zahlelatte'}
                </h3>
                <p className="text-xs text-[#A8988B] leading-relaxed mb-6">
                  {lang === 'en'
                    ? CONTENT_STRATEGY_DOC.toneOfVoiceEn.guideline
                    : CONTENT_STRATEGY_DOC.toneOfVoiceAr.guideline}
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  {(lang === 'en'
                    ? CONTENT_STRATEGY_DOC.toneOfVoiceEn.traits
                    : CONTENT_STRATEGY_DOC.toneOfVoiceAr.traits
                  ).map((trait, i) => (
                    <div
                      key={i}
                      className="p-4 rounded-xl bg-[#140E0A] border border-[#281D15]"
                    >
                      <span className="text-xs font-mono text-[#C98A4C] block mb-1">
                        {lang === 'en' ? `Trait 0${i + 1}` : `السمة 0${i + 1}`}
                      </span>
                      <p className="text-sm font-semibold text-[#EDE6DE]">
                        {trait}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-[#1A130E] border border-[#2F2117] rounded-2xl p-6">
                <h4 className="text-sm font-bold text-[#EDE6DE] mb-3">
                  {lang === 'en' ? 'Brand Vocabulary & Local Anchor Terms:' : 'قاموس المفردات الزحلاوية والتسويقية المقترحة:'}
                </h4>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 text-xs">
                  <div className="p-3 bg-[#130E09] rounded-lg border border-[#241A12]">
                    <span className="font-bold text-[#C98A4C] block">
                      {lang === 'en' ? 'Berdawni Breeze' : 'نسيم البردوني'}
                    </span>
                    <span className="text-[#8A796C]">
                      {lang === 'en' ? 'Used for cold brew & refreshing tonics' : 'يستخدم للكولد برو والمشروبات المنعشة'}
                    </span>
                  </div>
                  <div className="p-3 bg-[#130E09] rounded-lg border border-[#241A12]">
                    <span className="font-bold text-[#C98A4C] block">
                      {lang === 'en' ? 'Zahle Terracotta' : 'قرميد زحلة'}
                    </span>
                    <span className="text-[#8A796C]">
                      {lang === 'en' ? 'Used for rich roast curves and caramel notes' : 'يستخدم لدرجات التحميص والكراميل'}
                    </span>
                  </div>
                  <div className="p-3 bg-[#130E09] rounded-lg border border-[#241A12]">
                    <span className="font-bold text-[#C98A4C] block">
                      {lang === 'en' ? 'Boulevard Ritual' : 'مشوار ع البوليفار'}
                    </span>
                    <span className="text-[#8A796C]">
                      {lang === 'en' ? 'Used for morning strolls and weekend visits' : 'يستخدم للدعوة والزيارة اليومية'}
                    </span>
                  </div>
                  <div className="p-3 bg-[#130E09] rounded-lg border border-[#241A12]">
                    <span className="font-bold text-[#C98A4C] block">
                      {lang === 'en' ? 'Dialed In (Mawzoun)' : 'فنجان بيعدل الراس'}
                    </span>
                    <span className="text-[#8A796C]">
                      {lang === 'en' ? 'Used for dialed-in espresso and single-origin V60' : 'يستخدم للإسبريسو والـ V60 المركز'}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Modal Footer */}
        <div className="p-4 bg-[#1D1610] border-t border-[#2C2117] flex justify-between items-center text-xs text-[#8A796C]">
          <span>{lang === 'en' ? 'Ready to power Zahlelatte’s live digital presence' : 'جاهز للتطبيق الكامل في موقع Zahlelatte الفعلي'}</span>
          <button
            onClick={onClose}
            className="px-5 py-2 text-xs font-semibold text-[#EDE6DE] bg-[#2A1F16] hover:bg-[#382B1E] rounded-xl transition-colors"
          >
            {lang === 'en' ? 'Close Blueprint' : 'إغلاق الدليل'}
          </button>
        </div>
      </div>
    </div>
  );
};
