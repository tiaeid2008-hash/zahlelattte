/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { MenuSection } from './components/MenuSection';
import { WhyUsSection } from './components/WhyUsSection';
import { StorySection } from './components/StorySection';
import { TestimonialsSection } from './components/TestimonialsSection';
import { LocationSection } from './components/LocationSection';
import { CartDrawer } from './components/CartDrawer';
import { ContentStrategyModal } from './components/ContentStrategyModal';
import { Footer } from './components/Footer';
import { CartItem, MenuItem, Language } from './types/cafe';
import { BookOpen, ShoppingBag, Globe } from 'lucide-react';

export default function App() {
  const [language, setLanguage] = useState<Language>('en');
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isStrategyOpen, setIsStrategyOpen] = useState(false);

  // Sync HTML document direction and language attribute
  useEffect(() => {
    document.documentElement.dir = language === 'ar' ? 'rtl' : 'ltr';
    document.documentElement.lang = language;
  }, [language]);

  const toggleLanguage = () => {
    setLanguage((prev) => (prev === 'en' ? 'ar' : 'en'));
  };

  const handleAddToCart = (item: MenuItem) => {
    setCartItems((prev) => {
      const existing = prev.find((ci) => ci.item.id === item.id);
      if (existing) {
        return prev.map((ci) =>
          ci.item.id === item.id ? { ...ci, quantity: ci.quantity + 1 } : ci
        );
      }
      return [...prev, { item, quantity: 1 }];
    });
  };

  const handleUpdateQuantity = (id: string, delta: number) => {
    setCartItems((prev) =>
      prev
        .map((ci) => {
          if (ci.item.id === id) {
            const newQty = ci.quantity + delta;
            return newQty > 0 ? { ...ci, quantity: newQty } : null;
          }
          return ci;
        })
        .filter(Boolean) as CartItem[]
    );
  };

  const handleRemoveItem = (id: string) => {
    setCartItems((prev) => prev.filter((ci) => ci.item.id !== id));
  };

  const handleClearCart = () => {
    setCartItems([]);
  };

  const totalCartCount = cartItems.reduce((acc, ci) => acc + ci.quantity, 0);

  const handleScrollToMenu = () => {
    const el = document.getElementById('menu');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className={`min-h-screen bg-[#120E0B] text-[#EDE6DE] flex flex-col ${language === 'ar' ? 'font-sans' : 'font-sans antialiased'}`}>
      {/* Top Bar Header */}
      <Header
        cartCount={totalCartCount}
        onOpenCart={() => setIsCartOpen(true)}
        onOpenStrategy={() => setIsStrategyOpen(true)}
        lang={language}
        onToggleLang={toggleLanguage}
      />

      {/* Main Content Sections */}
      <main className="flex-1">
        {/* 1. Hero Section */}
        <Hero
          onExploreMenu={handleScrollToMenu}
          onOpenOrder={() => setIsCartOpen(true)}
          lang={language}
        />

        {/* 2. Menu Highlights */}
        <MenuSection
          onAddToCart={handleAddToCart}
          lang={language}
        />

        {/* 3. Why Us / Our Vibe */}
        <WhyUsSection lang={language} />

        {/* 4. Our Story in Zahle */}
        <StorySection lang={language} />

        {/* 5. Customer Testimonials */}
        <TestimonialsSection lang={language} />

        {/* 6. Contact & Location */}
        <LocationSection lang={language} />
      </main>

      {/* Footer */}
      <Footer
        onOpenStrategy={() => setIsStrategyOpen(true)}
        lang={language}
      />

      {/* Order Basket Slide-over */}
      <CartDrawer
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
        cartItems={cartItems}
        onUpdateQuantity={handleUpdateQuantity}
        onRemoveItem={handleRemoveItem}
        onClearCart={handleClearCart}
        lang={language}
      />

      {/* Full Content Strategy & Marketing Blueprint Modal */}
      <ContentStrategyModal
        isOpen={isStrategyOpen}
        onClose={() => setIsStrategyOpen(false)}
        lang={language}
      />

      {/* Floating Action Quick Access (Mobile & Quick Review) */}
      <div className={`fixed bottom-5 z-40 flex flex-col gap-2 ${language === 'ar' ? 'left-5' : 'right-5'}`}>
        {/* Language quick pill */}
        <button
          onClick={toggleLanguage}
          className="flex items-center gap-1.5 px-3 py-2 bg-[#221A14]/90 hover:bg-[#2C231C] text-[#EDE6DE] border border-[#3C3026] text-xs font-semibold rounded-full shadow-lg transition-transform active:scale-90 backdrop-blur-sm"
          title={language === 'en' ? 'التحويل إلى العربية' : 'Switch to English'}
        >
          <Globe className="w-3.5 h-3.5 text-[#C98A4C]" />
          <span>{language === 'en' ? 'عربي' : 'English'}</span>
        </button>

        <button
          onClick={() => setIsStrategyOpen(true)}
          className="flex items-center gap-2 px-3.5 py-2.5 bg-[#C98A4C] hover:bg-[#DCA46A] text-[#120E0B] font-bold text-xs rounded-full shadow-xl transition-transform active:scale-90"
          title={language === 'en' ? 'Open Strategy Blueprint' : 'افتح دليل هيكل المحتوى والتسويق'}
        >
          <BookOpen className="w-4 h-4" />
          <span className="hidden sm:inline">
            {language === 'en' ? 'Strategy Blueprint' : 'دليل التسويق والمحتوى'}
          </span>
        </button>

        {totalCartCount > 0 && (
          <button
            onClick={() => setIsCartOpen(true)}
            className="sm:hidden flex items-center justify-center w-12 h-12 bg-[#25D366] text-white rounded-full shadow-2xl active:scale-95"
            aria-label={language === 'en' ? 'Cart' : 'سلة الطلبات'}
          >
            <ShoppingBag className="w-5 h-5" />
          </button>
        )}
      </div>
    </div>
  );
}
