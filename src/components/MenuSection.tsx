import React, { useState, useMemo } from 'react';
import { Plus, Check, Search, Sparkles, Flame, Snowflake, Cookie, Eye } from 'lucide-react';
import { MenuItem, Language } from '../types/cafe';
import { MENU_ITEMS, UI_STRINGS } from '../data/zahlelatteData';

interface MenuSectionProps {
  onAddToCart: (item: MenuItem) => void;
  lang: Language;
}

export const MenuSection: React.FC<MenuSectionProps> = ({ onAddToCart, lang }) => {
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [selectedItem, setSelectedItem] = useState<MenuItem | null>(null);
  const [addedId, setAddedId] = useState<string | null>(null);

  const t = UI_STRINGS[lang];

  const categories = [
    {
      id: 'all',
      label: lang === 'en' ? 'All Offerings' : 'الكل (القائمة الكاملة)',
      icon: null,
    },
    {
      id: 'signature',
      label: lang === 'en' ? 'Exclusive Signatures' : 'توقيع Zahlelatte الحصري',
      icon: Sparkles,
    },
    {
      id: 'hot',
      label: lang === 'en' ? 'Specialty Hot Coffee' : 'القهوة الساخنة المختصة',
      icon: Flame,
    },
    {
      id: 'cold',
      label: lang === 'en' ? 'Cold Brew & Iced' : 'المشروبات المثلجة والمنعشة',
      icon: Snowflake,
    },
    {
      id: 'pastry',
      label: lang === 'en' ? 'Artisan Pastries' : 'مخبوزات وحلويات خفيفة',
      icon: Cookie,
    },
  ];

  const filteredItems = useMemo(() => {
    return MENU_ITEMS.filter((item) => {
      const matchesCategory =
        activeCategory === 'all' || item.category === activeCategory;
      const q = searchQuery.toLowerCase();
      const matchesSearch =
        item.name.toLowerCase().includes(q) ||
        item.nameEn.toLowerCase().includes(q) ||
        item.description.toLowerCase().includes(q) ||
        item.descriptionEn.toLowerCase().includes(q) ||
        item.tasteNotes.some((n) => n.toLowerCase().includes(q)) ||
        item.tasteNotesEn.some((n) => n.toLowerCase().includes(q));
      return matchesCategory && matchesSearch;
    });
  }, [activeCategory, searchQuery]);

  const handleAdd = (item: MenuItem, e: React.MouseEvent) => {
    e.stopPropagation();
    onAddToCart(item);
    setAddedId(item.id);
    setTimeout(() => {
      setAddedId(null);
    }, 1200);
  };

  return (
    <section id="menu" className="py-24 bg-[#17120E] border-b border-[#2C231C]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="flex items-center justify-center gap-2 text-xs font-semibold text-[#C98A4C] mb-3">
            <span>{lang === 'en' ? 'Single Origins' : 'محاصيل مختصة'}</span>
            <span aria-hidden="true">·</span>
            <span>{lang === 'en' ? 'Calibrated Extraction' : 'استخلاص دقيق'}</span>
            <span aria-hidden="true">·</span>
            <span>{lang === 'en' ? 'Unforgettable Aromas' : 'نكهات لا تُنسى'}</span>
          </div>

          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#EDE6DE] tracking-tight mb-4">
            {lang === 'en' ? 'Craft Coffee & Artisan Menu' : 'منيو القهوة والمشروبات المختصة'}
          </h2>
          <p className="text-base text-[#B3A496] leading-relaxed">
            {lang === 'en'
              ? 'Every cup begins with sustainably sourced green coffee and concludes in an intentional ritual. Explore our local Zahlawi creations or dial in your daily classic.'
              : 'كل فنجان حكاية بنبدأها باختيار البن الأخضر وننتهي برشفة بتعدل المزاج. تذوق ابتكاراتنا الخاصة بمذاق زحلاوي فريد، أو استمتع بفنجانك المفضل كما يجب أن يكون.'}
          </p>

          {/* Search bar */}
          <div className="mt-8 max-w-md mx-auto relative">
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder={
                lang === 'en'
                  ? 'Search drinks, tasting notes (pistachio, cardamom, chocolate)...'
                  : 'ابحث عن مشروبك، نوتة تذوق (فستق، هيل، شوكولا)...'
              }
              className={`w-full py-3 bg-[#201813] border border-[#3A2D23] rounded-xl text-sm text-[#EDE6DE] placeholder-[#7E6F62] focus:outline-none focus:border-[#C98A4C] transition-colors ${
                lang === 'ar' ? 'pl-4 pr-11' : 'pl-11 pr-4'
              }`}
            />
            <Search
              className={`w-5 h-5 text-[#8A796C] absolute top-1/2 -translate-y-1/2 pointer-events-none ${
                lang === 'ar' ? 'right-3.5' : 'left-3.5'
              }`}
            />
          </div>
        </div>

        {/* Interactive Segmented Filter Controls */}
        <div className="flex items-center justify-start sm:justify-center gap-2 overflow-x-auto pb-4 mb-10 no-scrollbar">
          {categories.map((cat) => {
            const Icon = cat.icon;
            const isActive = activeCategory === cat.id;
            return (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs sm:text-sm font-semibold transition-all whitespace-nowrap active:scale-95 ${
                  isActive
                    ? 'bg-[#C98A4C] text-[#120E0B] shadow-md'
                    : 'bg-[#221A14] text-[#C8BCB0] hover:bg-[#2C231C] border border-[#34271E]'
                }`}
              >
                {Icon && <Icon className="w-4 h-4" />}
                <span>{cat.label}</span>
              </button>
            );
          })}
        </div>

        {/* Products Grid */}
        {filteredItems.length === 0 ? (
          <div className="text-center py-16 bg-[#1A1410] rounded-2xl border border-[#2D2118]">
            <p className="text-[#A8988B] text-base mb-2">
              {lang === 'en' ? 'No items found matching your search.' : 'ما لقينا نتائج لبحثك الحالي.'}
            </p>
            <button
              onClick={() => {
                setActiveCategory('all');
                setSearchQuery('');
              }}
              className="text-sm font-semibold text-[#C98A4C] hover:underline"
            >
              {lang === 'en' ? 'Show All Items' : 'عرض كامل القائمة'}
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredItems.map((item) => {
              const isAdded = addedId === item.id;
              const primaryName = lang === 'en' ? item.nameEn : item.name;
              const secondaryName = lang === 'en' ? item.name : item.nameEn;
              const description = lang === 'en' ? item.descriptionEn : item.description;
              const notes = lang === 'en' ? item.tasteNotesEn : item.tasteNotes;

              return (
                <div
                  key={item.id}
                  onClick={() => setSelectedItem(item)}
                  className="group relative flex flex-col justify-between bg-[#1F1712] hover:bg-[#251C16] border border-[#34271E] hover:border-[#523E30] rounded-2xl p-6 transition-all duration-200 cursor-pointer shadow-sm hover:shadow-lg hover:-translate-y-1"
                >
                  {/* Top row: Image, Name & Price */}
                  <div>
                    {item.image && (
                      <div className="w-full h-44 mb-4 rounded-xl overflow-hidden bg-[#16100D] relative">
                        <img
                          src={item.image}
                          alt={primaryName}
                          referrerPolicy="no-referrer"
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-[#1F1712] via-transparent to-transparent opacity-60" />
                      </div>
                    )}

                    <div className="flex items-start justify-between gap-4 mb-2">
                      <div>
                        <h3 className="text-lg font-bold text-[#EDE6DE] group-hover:text-[#C98A4C] transition-colors">
                          {primaryName}
                        </h3>
                        <p className="text-xs text-[#8A796C] font-mono mt-0.5">
                          {secondaryName}
                        </p>
                      </div>

                      <div className={`shrink-0 ${lang === 'ar' ? 'text-left' : 'text-right'}`}>
                        <p className="text-base font-bold text-[#C98A4C] font-mono tabular-nums">
                          ${item.priceUsd.toFixed(2)}
                        </p>
                        <p className="text-[11px] text-[#8A796C] font-mono tabular-nums">
                          {item.priceLbp.toLocaleString()} {lang === 'en' ? 'LBP' : 'ل.ل'}
                        </p>
                      </div>
                    </div>

                    {/* Sensory Appetizing Description */}
                    <p className="text-xs sm:text-sm text-[#B3A496] leading-relaxed mb-4 line-clamp-3">
                      {description}
                    </p>
                  </div>

                  {/* Bottom: Clean unboxed taste notes & CTA Button */}
                  <div>
                    {/* Zero-pill taste notes */}
                    <div className="flex flex-wrap items-center gap-1.5 text-xs text-[#A8988B] mb-5 border-t border-[#2D2118] pt-3">
                      <span className="text-[#C98A4C] font-semibold text-[11px]">
                        {lang === 'en' ? 'Notes:' : 'نوتات التذوق:'}
                      </span>
                      {notes.map((note, idx) => (
                        <React.Fragment key={idx}>
                          <span className="text-[#C8BCB0]">{note}</span>
                          {idx < notes.length - 1 && (
                            <span aria-hidden="true" className="text-[#554233]">
                              /
                            </span>
                          )}
                        </React.Fragment>
                      ))}
                    </div>

                    <div className="flex items-center gap-2 pt-1">
                      <button
                        onClick={(e) => handleAdd(item, e)}
                        className={`flex-1 py-2.5 px-4 text-xs font-bold rounded-xl transition-all flex items-center justify-center gap-2 active:scale-95 ${
                          isAdded
                            ? 'bg-[#25D366] text-white'
                            : 'bg-[#C98A4C] hover:bg-[#DCA46A] text-[#120E0B]'
                        }`}
                      >
                        {isAdded ? (
                          <>
                            <Check className="w-4 h-4" />
                            <span>{lang === 'en' ? 'Added' : 'تمت الإضافة'}</span>
                          </>
                        ) : (
                          <>
                            <Plus className="w-4 h-4" />
                            <span>{t.addToOrder}</span>
                          </>
                        )}
                      </button>

                      <button
                        onClick={() => setSelectedItem(item)}
                        title={lang === 'en' ? 'Taste notes & origins' : 'تفاصيل النكهة'}
                        className="p-2.5 text-[#C8BCB0] hover:text-[#EDE6DE] bg-[#291F18] hover:bg-[#34271E] rounded-xl transition-colors"
                      >
                        <Eye className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        )}

        {/* Item Details Modal */}
        {selectedItem && (
          <div
            className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4"
            onClick={() => setSelectedItem(null)}
          >
            <div
              className={`bg-[#1C1510] border border-[#3C2D22] rounded-2xl max-w-lg w-full p-6 sm:p-8 relative shadow-2xl ${
                lang === 'ar' ? 'text-right' : 'text-left'
              }`}
              onClick={(e) => e.stopPropagation()}
            >
              {selectedItem.image && (
                <div className="w-full h-52 rounded-xl overflow-hidden mb-6 bg-[#120E0B]">
                  <img
                    src={selectedItem.image}
                    alt={lang === 'en' ? selectedItem.nameEn : selectedItem.name}
                    className="w-full h-full object-cover"
                  />
                </div>
              )}

              <div className="flex justify-between items-start mb-2">
                <div>
                  <h3 className="text-2xl font-bold text-[#EDE6DE]">
                    {lang === 'en' ? selectedItem.nameEn : selectedItem.name}
                  </h3>
                  <p className="text-xs font-mono text-[#8A796C]">
                    {lang === 'en' ? selectedItem.name : selectedItem.nameEn}
                  </p>
                </div>
                <div className={`font-mono tabular-nums ${lang === 'ar' ? 'text-left' : 'text-right'}`}>
                  <p className="text-xl font-bold text-[#C98A4C]">
                    ${selectedItem.priceUsd.toFixed(2)}
                  </p>
                  <p className="text-xs text-[#8A796C]">
                    {selectedItem.priceLbp.toLocaleString()} {lang === 'en' ? 'LBP' : 'ل.ل'}
                  </p>
                </div>
              </div>

              <div className="my-4 p-4 rounded-xl bg-[#241B15] border border-[#34271E]">
                <p className="text-xs text-[#C98A4C] font-semibold mb-1">
                  {lang === 'en' ? 'Craft & Flavor Profile:' : 'سر التحضير والنكهة:'}
                </p>
                <p className="text-sm text-[#EDE6DE] leading-relaxed">
                  {lang === 'en' ? selectedItem.descriptionEn : selectedItem.description}
                </p>
              </div>

              <div className="mb-6">
                <p className="text-xs font-semibold text-[#8A796C] mb-2">
                  {lang === 'en' ? 'Tasting Notes:' : 'نوتات التذوق البارزة:'}
                </p>
                <div className="flex flex-wrap gap-2 text-xs">
                  {(lang === 'en' ? selectedItem.tasteNotesEn : selectedItem.tasteNotes).map((note, i) => (
                    <span
                      key={i}
                      className="px-3 py-1 bg-[#2C2119] border border-[#433327] rounded-lg text-[#EDE6DE]"
                    >
                      {note}
                    </span>
                  ))}
                </div>
              </div>

              <div className="flex items-center gap-3">
                <button
                  onClick={() => {
                    onAddToCart(selectedItem);
                    setSelectedItem(null);
                  }}
                  className="flex-1 py-3 text-sm font-bold text-[#120E0B] bg-[#C98A4C] hover:bg-[#DCA46A] rounded-xl transition-all flex items-center justify-center gap-2"
                >
                  <Plus className="w-4 h-4" />
                  <span>{lang === 'en' ? 'Add to My Order' : 'إضافة إلى سلة الطلب'}</span>
                </button>
                <button
                  onClick={() => setSelectedItem(null)}
                  className="px-5 py-3 text-sm font-semibold text-[#C8BCB0] bg-[#281E17] hover:bg-[#34271E] rounded-xl transition-colors"
                >
                  {lang === 'en' ? 'Close' : 'إغلاق'}
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};
