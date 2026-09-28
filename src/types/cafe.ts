export type Language = 'en' | 'ar';

export interface MenuItem {
  id: string;
  name: string;
  nameEn: string;
  category: 'signature' | 'hot' | 'cold' | 'pastry';
  priceUsd: number;
  priceLbp: number;
  description: string;
  descriptionEn: string;
  tasteNotes: string[];
  tasteNotesEn: string[];
  popular?: boolean;
  image?: string;
}

export interface Testimonial {
  id: string;
  name: string;
  nameEn: string;
  role: string;
  roleEn: string;
  neighborhood: string;
  neighborhoodEn: string;
  avatarText: string;
  rating: number;
  comment: string;
  commentEn: string;
  favoriteDrink: string;
  favoriteDrinkEn: string;
}

export interface ValuePillar {
  id: string;
  title: string;
  titleEn: string;
  subtitle: string;
  subtitleEn: string;
  description: string;
  descriptionEn: string;
  metric: string;
  metricLabel: string;
  metricLabelEn: string;
}

export interface CartItem {
  item: MenuItem;
  quantity: number;
  notes?: string;
}
