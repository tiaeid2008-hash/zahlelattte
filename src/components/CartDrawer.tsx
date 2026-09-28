import React, { useState } from 'react';
import { X, Plus, Minus, Trash2, ShoppingBag, MessageCircle } from 'lucide-react';
import { CartItem, Language } from '../types/cafe';
import { CONTACT_INFO, UI_STRINGS } from '../data/zahlelatteData';
import { ZahlatteLogo } from './ZahlatteLogo';

interface CartDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  cartItems: CartItem[];
  onUpdateQuantity: (id: string, delta: number) => void;
  onRemoveItem: (id: string) => void;
  onClearCart: () => void;
  lang: Language;
}

export const CartDrawer: React.FC<CartDrawerProps> = ({
  isOpen,
  onClose,
  cartItems,
  onUpdateQuantity,
  onRemoveItem,
  onClearCart,
  lang,
}) => {
  const [customerName, setCustomerName] = useState('');
  const [orderType, setOrderType] = useState<'pickup' | 'dinein' | 'delivery'>('pickup');
  const [addressOrTable, setAddressOrTable] = useState('');
  const [specialNotes, setSpecialNotes] = useState('');

  const t = UI_STRINGS[lang];

  if (!isOpen) return null;

  const totalUsd = cartItems.reduce(
    (sum, item) => sum + item.item.priceUsd * item.quantity,
    0
  );
  const totalLbp = cartItems.reduce(
    (sum, item) => sum + item.item.priceLbp * item.quantity,
    0
  );

  const handleSendWhatsAppOrder = () => {
    if (cartItems.length === 0) return;

    if (lang === 'en') {
      let orderTypeText = 'Takeaway Pickup';
      if (orderType === 'dinein') orderTypeText = 'Dine-In';
      if (orderType === 'delivery') orderTypeText = 'Delivery in Zahle';

      let msg = `*New Order from ZahLatté Website*\n`;
      msg += `--------------------------\n`;
      if (customerName) msg += `👤 *Customer Name:* ${customerName}\n`;
      msg += `📍 *Order Type:* ${orderTypeText}\n`;
      if (addressOrTable) msg += `🏠 *Table / Address:* ${addressOrTable}\n`;
      msg += `--------------------------\n`;
      msg += `*Items:*\n`;

      cartItems.forEach((ci, idx) => {
        msg += `${idx + 1}. ${ci.item.nameEn} × ${ci.quantity} ($${(
          ci.item.priceUsd * ci.quantity
        ).toFixed(2)})\n`;
      });

      msg += `--------------------------\n`;
      msg += `💰 *Total:* $${totalUsd.toFixed(2)} (${totalLbp.toLocaleString()} LBP)\n`;

      if (specialNotes) {
        msg += `📝 *Notes:* ${specialNotes}\n`;
      }
      msg += `\nThank you ZahLatté team! Looking forward to your confirmation.`;

      const encoded = encodeURIComponent(msg);
      window.open(`https://wa.me/${CONTACT_INFO.whatsappRaw}?text=${encoded}`, '_blank');
    } else {
      let orderTypeText = 'استلام من المحل (Pickup)';
      if (orderType === 'dinein') orderTypeText = 'تناول بالداخل (Dine-in)';
      if (orderType === 'delivery') orderTypeText = 'توصيل داخل زحلة (Delivery)';

      let msg = `*طلب جديد من موقع ZahLatté*\n`;
      msg += `--------------------------\n`;
      if (customerName) msg += `👤 *الاسم:* ${customerName}\n`;
      msg += `📍 *نوع الطلب:* ${orderTypeText}\n`;
      if (addressOrTable) msg += `🏠 *العنوان/رقم الطاولة:* ${addressOrTable}\n`;
      msg += `--------------------------\n`;
      msg += `*الطلبات:*\n`;

      cartItems.forEach((ci, idx) => {
        msg += `${idx + 1}. ${ci.item.name} × ${ci.quantity} ($${(
          ci.item.priceUsd * ci.quantity
        ).toFixed(2)})\n`;
      });

      msg += `--------------------------\n`;
      msg += `💰 *المجموع:* $${totalUsd.toFixed(2)} (${totalLbp.toLocaleString()} ل.ل)\n`;

      if (specialNotes) {
        msg += `📝 *ملاحظات:* ${specialNotes}\n`;
      }
      msg += `\nشكراً ZahLatté! ناطر تأكيدكم.`;

      const encoded = encodeURIComponent(msg);
      window.open(`https://wa.me/${CONTACT_INFO.whatsappRaw}?text=${encoded}`, '_blank');
    }
  };

  return (
    <div className={`fixed inset-0 z-50 overflow-hidden bg-black/70 backdrop-blur-sm flex ${lang === 'ar' ? 'justify-start' : 'justify-end'}`}>
      <div
        className={`w-full max-w-md bg-[#18120D] border-[#2D2118] h-full flex flex-col justify-between shadow-2xl p-6 overflow-y-auto ${
          lang === 'ar' ? 'border-l text-right' : 'border-r text-left'
        }`}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header with ZahLatté Crest */}
        <div>
          <div className="flex items-center justify-between pb-4 border-b border-[#2A1F18] mb-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full overflow-hidden bg-[#FAF6F0] p-0.5 border border-[#C98A4C] flex-shrink-0">
                <ZahlatteLogo size="custom" className="w-full h-full" showTagline={false} />
              </div>
              <div>
                <h2 className="text-base font-bold text-[#EDE6DE] flex items-center gap-1.5 leading-tight">
                  <span>{t.cartTitle}</span>
                  <span className="text-xs font-mono text-[#C98A4C]">
                    ({cartItems.reduce((acc, i) => acc + i.quantity, 0)})
                  </span>
                </h2>
                <p className="text-[11px] text-[#A85A38] font-serif italic">sip into something beautiful</p>
              </div>
            </div>
            <button
              onClick={onClose}
              className="p-2 text-[#A8988B] hover:text-[#EDE6DE] hover:bg-[#241A13] rounded-lg transition-colors"
              aria-label="Close cart"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Items List */}
          {cartItems.length === 0 ? (
            <div className="py-16 text-center">
              <div className="w-12 h-12 rounded-full bg-[#241B14] text-[#8A796C] flex items-center justify-center mx-auto mb-3">
                <ShoppingBag className="w-6 h-6" />
              </div>
              <p className="text-sm text-[#C8BCB0] font-semibold mb-1">
                {lang === 'en' ? 'Your cart is empty' : 'سلتك بعدها فاضية'}
              </p>
              <p className="text-xs text-[#8A796C]">
                {t.cartEmpty}
              </p>
            </div>
          ) : (
            <div className="space-y-3 mb-6">
              {cartItems.map((ci) => {
                const itemName = lang === 'en' ? ci.item.nameEn : ci.item.name;
                return (
                  <div
                    key={ci.item.id}
                    className="bg-[#211812] border border-[#34271E] rounded-xl p-3 flex items-center justify-between gap-3"
                  >
                    <div className="flex-1">
                      <h4 className="text-sm font-bold text-[#EDE6DE]">
                        {itemName}
                      </h4>
                      <p className="text-xs font-mono tabular-nums text-[#C98A4C]">
                        ${(ci.item.priceUsd * ci.quantity).toFixed(2)}{' '}
                        <span className="text-[#8A796C] text-[10px]">
                          ({(ci.item.priceLbp * ci.quantity).toLocaleString()} {lang === 'en' ? 'LBP' : 'ل.ل'})
                        </span>
                      </p>
                    </div>

                    {/* Quantity Stepper */}
                    <div className="flex items-center gap-2 bg-[#17110C] rounded-lg p-1 border border-[#3A2C21]">
                      <button
                        onClick={() => onUpdateQuantity(ci.item.id, -1)}
                        className="p-1 text-[#C8BCB0] hover:text-white hover:bg-[#2C2119] rounded"
                        aria-label="Decrease quantity"
                      >
                        <Minus className="w-3.5 h-3.5" />
                      </button>
                      <span className="text-xs font-mono font-bold text-[#EDE6DE] w-4 text-center">
                        {ci.quantity}
                      </span>
                      <button
                        onClick={() => onUpdateQuantity(ci.item.id, 1)}
                        className="p-1 text-[#C8BCB0] hover:text-white hover:bg-[#2C2119] rounded"
                        aria-label="Increase quantity"
                      >
                        <Plus className="w-3.5 h-3.5" />
                      </button>
                    </div>

                    {/* Remove */}
                    <button
                      onClick={() => onRemoveItem(ci.item.id)}
                      className="p-1.5 text-[#8A796C] hover:text-rose-400 transition-colors"
                      title={lang === 'en' ? 'Remove' : 'حذف'}
                    >
                      <Trash2 className="w-4 h-4" />
                    </button>
                  </div>
                );
              })}
            </div>
          )}

          {/* Customer Input Fields if has items */}
          {cartItems.length > 0 && (
            <div className="space-y-3 border-t border-[#2A1F18] pt-4 text-xs">
              <div>
                <label className="block text-[#A8988B] mb-1 font-semibold">
                  {t.orderType}
                </label>
                <div className="grid grid-cols-3 gap-1 bg-[#140E0A] p-1 rounded-xl border border-[#2B1F17]">
                  <button
                    type="button"
                    onClick={() => setOrderType('pickup')}
                    className={`py-1.5 text-center rounded-lg font-semibold transition-all ${
                      orderType === 'pickup'
                        ? 'bg-[#C98A4C] text-[#120E0B]'
                        : 'text-[#A8988B] hover:text-white'
                    }`}
                  >
                    {t.takeaway}
                  </button>
                  <button
                    type="button"
                    onClick={() => setOrderType('dinein')}
                    className={`py-1.5 text-center rounded-lg font-semibold transition-all ${
                      orderType === 'dinein'
                        ? 'bg-[#C98A4C] text-[#120E0B]'
                        : 'text-[#A8988B] hover:text-white'
                    }`}
                  >
                    {t.dineIn}
                  </button>
                  <button
                    type="button"
                    onClick={() => setOrderType('delivery')}
                    className={`py-1.5 text-center rounded-lg font-semibold transition-all ${
                      orderType === 'delivery'
                        ? 'bg-[#C98A4C] text-[#120E0B]'
                        : 'text-[#A8988B] hover:text-white'
                    }`}
                  >
                    {t.delivery}
                  </button>
                </div>
              </div>

              <div>
                <label className="block text-[#A8988B] mb-1">
                  {t.customerName}
                </label>
                <input
                  type="text"
                  value={customerName}
                  onChange={(e) => setCustomerName(e.target.value)}
                  placeholder={t.customerNamePlaceholder}
                  className="w-full px-3 py-2 bg-[#201812] border border-[#34271E] rounded-xl text-[#EDE6DE] placeholder-[#7E6F62] focus:outline-none focus:border-[#C98A4C]"
                />
              </div>

              {orderType !== 'pickup' && (
                <div>
                  <label className="block text-[#A8988B] mb-1">
                    {orderType === 'dinein'
                      ? (lang === 'en' ? 'Table Number:' : 'رقم الطاولة:')
                      : (lang === 'en' ? 'Delivery Address in Zahle:' : 'عنوان التوصيل في زحلة:')}
                  </label>
                  <input
                    type="text"
                    value={addressOrTable}
                    onChange={(e) => setAddressOrTable(e.target.value)}
                    placeholder={
                      orderType === 'dinein'
                        ? (lang === 'en' ? 'e.g. Table 4 near the arch window' : 'مثال: طاولة 4 قرب الشباك')
                        : (lang === 'en' ? 'e.g. Haouch El-Oumara, near Hospital St.' : 'مثال: حوش الأمراء - شارع المستشفى')
                    }
                    className="w-full px-3 py-2 bg-[#201812] border border-[#34271E] rounded-xl text-[#EDE6DE] placeholder-[#7E6F62] focus:outline-none focus:border-[#C98A4C]"
                  />
                </div>
              )}

              <div>
                <label className="block text-[#A8988B] mb-1">
                  {t.notes}
                </label>
                <input
                  type="text"
                  value={specialNotes}
                  onChange={(e) => setSpecialNotes(e.target.value)}
                  placeholder={t.notesPlaceholder}
                  className="w-full px-3 py-2 bg-[#201812] border border-[#34271E] rounded-xl text-[#EDE6DE] placeholder-[#7E6F62] focus:outline-none focus:border-[#C98A4C]"
                />
              </div>
            </div>
          )}
        </div>

        {/* Footer Checkout Summary */}
        {cartItems.length > 0 && (
          <div className="border-t border-[#2A1F18] pt-4 mt-6">
            <div className="flex justify-between items-baseline mb-2">
              <span className="text-sm font-semibold text-[#A8988B]">
                {lang === 'en' ? 'Estimated Total:' : 'المجموع التقديري:'}
              </span>
              <div className={`font-mono tabular-nums ${lang === 'ar' ? 'text-left' : 'text-right'}`}>
                <span className="text-xl font-bold text-[#EDE6DE]">
                  ${totalUsd.toFixed(2)}
                </span>
                <p className="text-xs text-[#8A796C]">
                  {totalLbp.toLocaleString()} {lang === 'en' ? 'LBP' : 'ليرة لبنانية'}
                </p>
              </div>
            </div>

            <button
              onClick={handleSendWhatsAppOrder}
              className="w-full py-3.5 px-4 bg-[#25D366] hover:bg-[#20ba59] text-white font-bold text-sm rounded-xl transition-all flex items-center justify-center gap-2 shadow-lg active:scale-95"
            >
              <MessageCircle className="w-5 h-5" />
              <span>{t.sendWhatsApp}</span>
            </button>

            <button
              onClick={onClearCart}
              className="w-full py-2 text-xs text-[#8A796C] hover:text-[#EDE6DE] transition-colors mt-2 text-center"
            >
              {lang === 'en' ? 'Clear Cart' : 'تفريغ السلة'}
            </button>
          </div>
        )}
      </div>
    </div>
  );
};
